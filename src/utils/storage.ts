export type TemaStats = {
  total: number;
  correctas: number;
};

export type Stats = Record<string, TemaStats>;

export type FailedQuestion = {
  id: string;
  tema: number;
  pregunta: string;
  opciones: string[];
  correcta: number;
  explicacion: string;
  referencia: string;
};

const STATS_KEY = 'oposicion-stats-v1';
const FAILS_KEY = 'oposicion-fallos-v1';

export function readStats(): Stats {
  if (typeof localStorage === 'undefined') return {};
  try {
    return JSON.parse(localStorage.getItem(STATS_KEY) ?? '{}');
  } catch {
    return {};
  }
}

export function updateStats(tema: number, total: number, correctas: number): void {
  const stats = readStats();
  const key = String(tema);
  const current = stats[key] ?? { total: 0, correctas: 0 };
  stats[key] = {
    total: current.total + total,
    correctas: current.correctas + correctas,
  };
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

export function readFails(): FailedQuestion[] {
  if (typeof localStorage === 'undefined') return [];
  try {
    return JSON.parse(localStorage.getItem(FAILS_KEY) ?? '[]');
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
  newFails.forEach((q) => byId.set(q.id, q));
  saveFails(Array.from(byId.values()));
}

export function removeFailIds(ids: string[]): void {
  const idSet = new Set(ids);
  const next = readFails().filter((q) => !idSet.has(q.id));
  saveFails(next);
}
