import fs from 'node:fs';
import path from 'node:path';

const srcTxt = process.argv[2] ?? '/tmp/temario.txt';
const withTests = process.argv.includes('--with-tests');
if (!fs.existsSync(srcTxt)) {
  console.error(`No existe ${srcTxt}`);
  process.exit(1);
}

const raw = fs.readFileSync(srcTxt, 'utf8').replace(/^\uFEFF/, '');
const parts = raw.split(/\n(?=TEMA\s+\d+)/g).filter((p) => /^TEMA\s+\d+/m.test(p));

const temasDir = path.resolve('src/content/temas');
const testsDir = path.resolve('data/tests');
fs.mkdirSync(temasDir, { recursive: true });
fs.mkdirSync(testsDir, { recursive: true });

for (const f of fs.readdirSync(temasDir)) fs.unlinkSync(path.join(temasDir, f));
for (const f of fs.readdirSync(testsDir)) fs.unlinkSync(path.join(testsDir, f));

const index = [];

function clean(s) {
  return s.replace(/\s+/g, ' ').trim();
}

for (const part of parts) {
  const lines = part.split('\n').map((l) => l.trimRight());
  const head = lines[0].match(/^TEMA\s+(\d+)/i);
  if (!head) continue;
  const tema = Number(head[1]);
  const titleLine = clean(lines[1] ?? '');
  const titulo = titleLine || `Tema ${tema}`;
  const slug = `tema-${String(tema).padStart(2, '0')}`;

  const contentLines = lines.slice(1);
  const md = `---\ntema: ${tema}\ntitulo: "${titulo.replaceAll('"', '\\"')}"\n---\n\n${contentLines.join('\n')}`;
  fs.writeFileSync(path.join(temasDir, `${slug}.md`), md);

  let questions = [];
  if (withTests) {
    const sentences = part
      .replace(/\n+/g, ' ')
      .split(/(?<=[.!?])\s+/)
      .map(clean)
      .filter((s) => s.length > 40 && s.length < 260);

    const uniq = Array.from(new Set(sentences));
    const max = Math.min(10, uniq.length);

    for (let i = 0; i < max; i++) {
      const correctSentence = uniq[i];
      const distractors = uniq.filter((_, idx) => idx !== i).slice(i + 1, i + 10).slice(0, 3);
      if (distractors.length < 3) continue;
      const opciones = [correctSentence, ...distractors];
      const shuffled = opciones.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
      const correcta = shuffled.indexOf(correctSentence);

      questions.push({
        id: `t${String(tema).padStart(2, '0')}-p${String(questions.length + 1).padStart(3, '0')}`,
        tema,
        pregunta: `Según el contenido literal del Tema ${tema}, ¿qué afirmación aparece en el temario?`,
        opciones: shuffled,
        correcta,
        explicacion: `La opción correcta es un enunciado literal incluido en el texto del Tema ${tema}.`,
        referencia: `Tema ${tema}: ${titulo}`,
      });
    }
    fs.writeFileSync(path.join(testsDir, `${slug}.json`), JSON.stringify(questions, null, 2));
  }
  index.push({ tema, titulo, slug, preguntas: questions.length });
}

fs.writeFileSync(path.join(testsDir, 'index.json'), JSON.stringify({ temas: index }, null, 2));
console.log(`Generados ${index.length} temas`);
