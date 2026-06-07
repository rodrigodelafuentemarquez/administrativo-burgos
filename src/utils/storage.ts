export type TemaAttempt = {
  total: number;
  correctas: number;
  pct: number;
  at: number;
};

export type TemaStats = {
  total: number;
  correctas: number;
  recent: number[];
  attempts: TemaAttempt[];
  updatedAt: number | null;
};

export type Stats = Record<string, TemaStats>;

export type FailedQuestion = {
  id: string;
  tema: number;
  pregunta: string;
  opciones: string[];
  correcta: number;
  referencia: string;
  fallos: number;
  firstFailedAt: number;
  lastFailedAt: number;
};

const STATS_KEY = 'oposicion-stats-v3';
const FAILS_KEY = 'oposicion-fallos-v3';
const RECENT_LIMIT = 8;
const ATTEMPT_LIMIT = 12;

function normalizeAttempt(value: unknown): TemaAttempt | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Partial<TemaAttempt>;
  const total = Math.max(0, Number(raw.total ?? 0) || 0);
  const correctas = Math.max(0, Number(raw.correctas ?? 0) || 0);
  const pct = Math.max(0, Math.min(100, Math.round(Number(raw.pct ?? 0) || 0)));
  const at = Number(raw.at ?? 0) || 0;

  if (!Number.isFinite(total) || !Number.isFinite(correctas) || !Number.isFinite(pct) || !at) return null;

  return {
    total,
    correctas: Math.min(correctas, total),
    pct,
    at,
  };
}

function normalizeTemaStats(value: unknown): TemaStats {
  const raw = (value && typeof value === 'object') ? value as Partial<TemaStats> : {};
  const total = Number(raw.total ?? 0);
  const correctas = Number(raw.correctas ?? 0);
  const recent = Array.isArray(raw.recent)
    ? raw.recent
        .map((entry) => Number(entry))
        .filter((entry) => Number.isFinite(entry))
        .slice(-RECENT_LIMIT)
    : [];
  const attempts = Array.isArray(raw.attempts)
    ? raw.attempts
        .map(normalizeAttempt)
        .filter(Boolean)
        .slice(-ATTEMPT_LIMIT) as TemaAttempt[]
    : [];
  const updatedAt = Number(raw.updatedAt ?? 0) || null;

  return {
    total: Number.isFinite(total) ? total : 0,
    correctas: Number.isFinite(correctas) ? correctas : 0,
    recent,
    attempts,
    updatedAt,
  };
}

function normalizeFailedQuestion(value: unknown): FailedQuestion | null {
  if (!value || typeof value !== 'object') return null;
  const raw = value as Partial<FailedQuestion>;
  const opciones = Array.isArray(raw.opciones) ? raw.opciones.map((item) => String(item ?? '')) : [];
  const correcta = Number(raw.correcta);
  if (!String(raw.id ?? '') || opciones.length !== 4 || ![0, 1, 2, 3].includes(correcta)) return null;

  const now = Date.now();
  const firstFailedAt = Number(raw.firstFailedAt ?? 0) || now;
  const lastFailedAt = Number(raw.lastFailedAt ?? 0) || firstFailedAt;
  const fallos = Math.max(1, Number(raw.fallos ?? 1) || 1);

  return {
    id: String(raw.id),
    tema: Number(raw.tema ?? 0),
    pregunta: String(raw.pregunta ?? ''),
    opciones,
    correcta,
    referencia: String(raw.referencia ?? ''),
    fallos,
    firstFailedAt,
    lastFailedAt,
  };
}

export function readStats(): Stats {
  if (typeof localStorage === 'undefined') return {};
  try {
    const raw = JSON.parse(localStorage.getItem(STATS_KEY) ?? '{}');
    if (!raw || typeof raw !== 'object') return {};
    return Object.fromEntries(
      Object.entries(raw).map(([key, value]) => [key, normalizeTemaStats(value)])
    );
  } catch {
    return {};
  }
}

export function updateStats(tema: number, total: number, correctas: number): void {
  const stats = readStats();
  const key = String(tema);
  const current = stats[key] ?? normalizeTemaStats(null);
  const pct = total > 0 ? Math.round((correctas / total) * 100) : 0;
  const now = Date.now();
  stats[key] = {
    total: current.total + total,
    correctas: current.correctas + correctas,
    recent: [...current.recent, pct].slice(-RECENT_LIMIT),
    attempts: [...current.attempts, { total, correctas, pct, at: now }].slice(-ATTEMPT_LIMIT),
    updatedAt: now,
  };
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function readFails(): FailedQuestion[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = JSON.parse(localStorage.getItem(FAILS_KEY) ?? '[]');
    if (!Array.isArray(raw)) return [];
    return raw.map(normalizeFailedQuestion).filter(Boolean) as FailedQuestion[];
  } catch {
    return [];
  }
}

export function saveFails(fails: FailedQuestion[]): void {
  localStorage.setItem(FAILS_KEY, JSON.stringify(fails));
}

export function addFails(newFails: FailedQuestion[]): void {
  const current = readFails();
  const byId = new Map(current.map((q) => [q.id, q]));
  const now = Date.now();
  newFails.forEach((q) => {
    const currentFail = byId.get(q.id);
    if (currentFail) {
      byId.set(q.id, {
        ...currentFail,
        pregunta: q.pregunta,
        opciones: q.opciones,
        correcta: q.correcta,
        referencia: q.referencia,
        fallos: currentFail.fallos + 1,
        lastFailedAt: now,
      });
      return;
    }

    byId.set(q.id, {
      ...q,
      fallos: Math.max(1, Number(q.fallos ?? 1) || 1),
      firstFailedAt: Number(q.firstFailedAt ?? now) || now,
      lastFailedAt: Number(q.lastFailedAt ?? now) || now,
    });
  });
  saveFails(Array.from(byId.values()));
}

export function removeFailIds(ids: string[]): void {
  const idSet = new Set(ids);
  const next = readFails().filter((q) => !idSet.has(q.id));
  saveFails(next);
}
