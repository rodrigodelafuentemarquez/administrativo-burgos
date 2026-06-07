import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('.');
const currentTestsDir = path.join(rootDir, 'data', 'tests');
const legacyTestsDir = path.join(rootDir, 'data', 'tests-legacy');
const programaDir = path.join(rootDir, 'src', 'content', 'programa');

function ensureLegacyBackup() {
  if (fs.existsSync(legacyTestsDir)) return;
  fs.cpSync(currentTestsDir, legacyTestsDir, { recursive: true });
  console.log('Creada copia de seguridad en data/tests-legacy');
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function parseQuotedField(frontmatter, field) {
  const match = frontmatter.match(new RegExp(`^${field}:\\s+"([^"]+)"$`, 'm'));
  return match ? match[1] : '';
}

function loadOfficialTopics() {
  const files = fs.readdirSync(programaDir)
    .filter((file) => file.endsWith('.md'))
    .sort((a, b) => a.localeCompare(b, 'es'));

  return files.map((file, index) => {
    const raw = fs.readFileSync(path.join(programaDir, file), 'utf8');
    const [, frontmatter = ''] = raw.split('---');
    const codigo = parseQuotedField(frontmatter, 'codigo').replace(/^Tema\s+/, '');
    const titulo = parseQuotedField(frontmatter, 'titulo');
    return {
      seq: index + 1,
      code: codigo,
      titulo,
      file,
    };
  });
}

function cleanReference(reference) {
  return String(reference ?? '')
    .replace(/^Tema\s+\d+,\s*/i, '')
    .trim();
}

function buildReference(code, reference) {
  const cleaned = cleanReference(reference);
  return cleaned ? `${code} · ${cleaned}` : `Tema ${code}`;
}

function questionTargets(legacyTema, question) {
  const ref = String(question.referencia ?? '');
  const text = `${question.pregunta ?? ''} ${ref}`.toLowerCase();
  const has = (pattern) => pattern.test(text);

  switch (legacyTema) {
    case 1:
      return 1;
    case 2:
      return null;
    case 3:
    case 4:
    case 6:
      return 2;
    case 5:
      return has(/10\.\d|administraci[oó]n general del estado|administraci[oó]n p[uú]blica|delegado del gobierno|subdelegado del gobierno|principio constitucional de actuaci[oó]n de la administraci[oó]n/)
        ? 4
        : 2;
    case 7:
      return 3;
    case 8:
      return 9;
    case 9:
      return has(/municipio|padr[oó]n|vecin|poblaci[oó]n/)
        ? 6
        : 5;
    case 10:
      return 5;
    case 11:
    case 12:
      return 10;
    case 13:
      return 4;
    case 14:
      return 14;
    case 15:
      return 12;
    case 16:
      return has(/revisi[oó]n|revocaci[oó]n|rectificaci[oó]n/)
        ? 13
        : 11;
    case 17:
    case 19:
      return 13;
    case 18:
      return 15;
    case 20:
    case 42:
      return 16;
    case 21:
      return has(/rgpd|protecci[oó]n de datos|dato personal|aepd|portabilidad|registro de actividades|base jur[ií]dica/)
        ? 37
        : 33;
    case 22:
      if (has(/6\.2 clases de situaciones|situaciones administrativas|servicio activo|excedencia/)) return 23;
      if (has(/7\./) || has(/compatibilid/) || has(/derechos individuales de ejercicio colectivo/)) return 25;
      if (has(/5\./) || has(/retribucion|trienio|pagas extraordinarias|complemento espec/i)) return null;
      return 22;
    case 23:
      return 36;
    case 24:
      return null;
    case 25:
      return null;
    case 26:
      return 20;
    case 27:
      return 18;
    case 28:
      return has(/5\.1 servicio activo|situaci[oó]n/)
        ? 23
        : 22;
    case 29:
      return 24;
    case 30:
      if (has(/encuadramiento|seguridad social|asistencia sanitaria|incapacidad|nacimiento y cuidado|invalidez|grado de dependencia|muface/)) return 26;
      if (has(/fases del procedimiento de gasto|documentos contables|ordenaci[oó]n del pago|ciclo del gasto local/)) return 29;
      if (has(/presupuesto|estado de ingresos|pr[oó]rroga del presupuesto|aprobaci[oó]n inicial|exposici[oó]n p[uú]blica/)) return 28;
      return null;
    case 31:
      if (has(/notificaci[oó]n|edicto|boe|infructuosa/)) return 11;
      return 35;
    case 32:
    case 33:
      return 39;
    case 34:
      return has(/expediente electr[oó]nico|documento electr[oó]nico|archivo electr[oó]nico/)
        ? 39
        : 38;
    case 35:
      return 34;
    case 36:
    case 37:
      return 40;
    case 38:
      return 41;
    case 39:
      return has(/outlook|bandeja de entrada|cco|regla de mensaje|carpetas de correo/)
        ? 42
        : null;
    case 40:
      return 42;
    case 41:
      return 8;
    case 43:
      return has(/rgpd|protecci[oó]n de datos|dato personal|aepd|portabilidad|registro de actividades|base jur[ií]dica/)
        ? 37
        : 33;
    case 44:
      if (has(/control del gasto|funci[oó]n interventora|tribunal de cuentas|consejo de cuentas|reparo|control externo/)) return 30;
      if (has(/fase [adop]|documento contable|ado|anticipos de caja fija|pagos a justificar|autorizaci[oó]n del gasto|reconocimiento de la obligaci[oó]n/)) return 29;
      return 28;
    case 45:
      return has(/seguridad social|muface|clases pasivas|asistencia sanitaria|mutualista/)
        ? 26
        : null;
    case 46:
      if (has(/10\./) || has(/huelga|negociaci[oó]n colectiva|servicios m[ií]nimos|derechos individuales de ejercicio colectivo/)) return 25;
      if (has(/7\./) || has(/servicios especiales|excedencia|situaciones administrativas/) || has(/causas de p[eé]rdida de la condici[oó]n de funcionario/) || has(/adquiere.*funcionario de carrera/)) return 23;
      return 22;
    case 47:
      return 9;
    case 48:
      return has(/discapacidad|dependencia|saad|grado ii de dependencia|grado iii de dependencia|cuota de reserva/)
        ? 34
        : 32;
    default:
      return null;
  }
}

function remapQuestions(topics) {
  const buckets = new Map(topics.map((topic) => [topic.seq, []]));
  const files = fs.readdirSync(legacyTestsDir)
    .filter((file) => /^tema-\d+\.json$/.test(file))
    .sort((a, b) => a.localeCompare(b, 'es'));

  for (const file of files) {
    const legacyTema = Number(file.match(/^tema-(\d+)\.json$/)?.[1] ?? 0);
    const questions = readJson(path.join(legacyTestsDir, file));
    for (const question of questions) {
      const target = questionTargets(legacyTema, question);
      if (!target || !buckets.has(target)) continue;
      const topic = topics[target - 1];
      buckets.get(target).push({
        ...question,
        tema: target,
        referencia: buildReference(topic.code, question.referencia),
      });
    }
  }

  return buckets;
}

function writeOfficialBank(topics, buckets) {
  fs.rmSync(currentTestsDir, { recursive: true, force: true });
  fs.mkdirSync(currentTestsDir, { recursive: true });

  const index = [];

  for (const topic of topics) {
    const questions = (buckets.get(topic.seq) ?? [])
      .sort((a, b) => String(a.id).localeCompare(String(b.id), 'es'));

    if (!questions.length) continue;

    const archivo = `tema-${String(topic.seq).padStart(2, '0')}.json`;
    writeJson(path.join(currentTestsDir, archivo), questions);
    index.push({
      tema: topic.seq,
      archivo,
      preguntas: questions.length,
      titulo: `Tema ${topic.code} · ${topic.titulo}`,
    });
  }

  writeJson(path.join(currentTestsDir, 'index.json'), index);
  return index;
}

function printSummary(topics, index) {
  const counts = new Map(index.map((item) => [item.tema, item.preguntas]));
  const withQuestions = topics.filter((topic) => counts.has(topic.seq));
  const withoutQuestions = topics.filter((topic) => !counts.has(topic.seq));

  console.log(`Temas oficiales con preguntas: ${withQuestions.length}/${topics.length}`);
  console.log(`Preguntas totales migradas: ${index.reduce((sum, item) => sum + item.preguntas, 0)}`);

  if (withoutQuestions.length) {
    console.log('Temas oficiales sin banco heredado reutilizable:');
    for (const topic of withoutQuestions) {
      console.log(`- Tema ${topic.code} · ${topic.titulo}`);
    }
  }
}

ensureLegacyBackup();
const officialTopics = loadOfficialTopics();
const buckets = remapQuestions(officialTopics);
const index = writeOfficialBank(officialTopics, buckets);
printSummary(officialTopics, index);
