import fs from 'node:fs';
import path from 'node:path';

const src = path.resolve('data/tests');
const out = path.resolve('public/data/tests');
fs.mkdirSync(out, { recursive: true });
for (const f of fs.readdirSync(out)) fs.unlinkSync(path.join(out, f));
for (const f of fs.readdirSync(src)) fs.copyFileSync(path.join(src, f), path.join(out, f));
console.log('Copiados tests a public/data/tests');
