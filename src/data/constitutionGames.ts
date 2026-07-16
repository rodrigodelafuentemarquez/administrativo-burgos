import { constitutionArticles } from './glossary';

export type ConstitutionQuestion = {
  id: string;
  prompt: string;
  answer: string;
  options: string[];
  explanation: string;
  tag: string;
};

const titleOptions = Array.from(new Set(constitutionArticles.map((article) => article.block)));

const articleOptions = constitutionArticles
  .filter((article) => article.key)
  .map((article) => `Art. ${article.number} CE`);

const pickOptions = (answer: string, pool: string[], idSeed: number, count = 4): string[] => {
  const filtered = pool.filter((item) => item !== answer);
  const picks: string[] = [];
  let cursor = idSeed % Math.max(filtered.length, 1);
  while (picks.length < count - 1 && filtered.length) {
    const next = filtered[cursor % filtered.length];
    if (!picks.includes(next)) picks.push(next);
    cursor += 7;
  }
  return [answer, ...picks].sort((a, b) => a.localeCompare(b, 'es'));
};

export const constitutionArticleQuestions: ConstitutionQuestion[] = constitutionArticles
  .filter((article) => article.key)
  .flatMap((article) => [
    {
      id: `ce-art-${article.number}-meaning`,
      prompt: `¿Qué regula el art. ${article.number} CE?`,
      answer: article.label,
      options: pickOptions(article.label, constitutionArticles.filter((item) => item.key).map((item) => item.label), article.number),
      explanation: `El art. ${article.number} CE se asocia con: ${article.label}.`,
      tag: 'Artículo -> materia',
    },
    {
      id: `ce-art-${article.number}-reverse`,
      prompt: `¿Qué artículo debes asociar con “${article.label}”?`,
      answer: `Art. ${article.number} CE`,
      options: pickOptions(`Art. ${article.number} CE`, articleOptions, article.number),
      explanation: `La pista corresponde al art. ${article.number} CE.`,
      tag: 'Materia -> artículo',
    },
    {
      id: `ce-art-${article.number}-title`,
      prompt: `¿En qué bloque/título ubicas el art. ${article.number} CE?`,
      answer: article.block,
      options: pickOptions(article.block, titleOptions, article.number),
      explanation: `El art. ${article.number} CE está en ${article.block}.`,
      tag: 'Artículo -> título',
    },
  ]);

export const constitutionProtectionQuestions: ConstitutionQuestion[] = [
  {
    id: 'ce-prot-1',
    prompt: '¿Qué derecho se vincula al art. 14 CE?',
    answer: 'Igualdad ante la ley y prohibición de discriminación',
    options: ['Derecho de petición', 'Igualdad ante la ley y prohibición de discriminación', 'Libertad de empresa', 'Propiedad privada'],
    explanation: 'El art. 14 CE es una referencia básica de igualdad y no discriminación.',
    tag: 'Derechos',
  },
  {
    id: 'ce-prot-2',
    prompt: '¿Qué artículos concentran los derechos fundamentales y libertades públicas?',
    answer: 'Arts. 15 a 29 CE',
    options: ['Arts. 1 a 9 CE', 'Arts. 10 a 13 CE', 'Arts. 15 a 29 CE', 'Arts. 39 a 52 CE'],
    explanation: 'La Sección 1ª del Capítulo II del Título I comprende los arts. 15 a 29 CE.',
    tag: 'Derechos',
  },
  {
    id: 'ce-prot-3',
    prompt: '¿Qué artículo regula las garantías de derechos y libertades?',
    answer: 'Art. 53 CE',
    options: ['Art. 24 CE', 'Art. 53 CE', 'Art. 54 CE', 'Art. 55 CE'],
    explanation: 'El art. 53 CE ordena niveles de garantía y tutela.',
    tag: 'Garantías',
  },
  {
    id: 'ce-prot-4',
    prompt: '¿Qué órgano conoce del recurso de amparo constitucional?',
    answer: 'Tribunal Constitucional',
    options: ['Consejo de Estado', 'Consejo General del Poder Judicial', 'Tribunal Constitucional', 'Tribunal Supremo'],
    explanation: 'El recurso de amparo se interpone ante el Tribunal Constitucional.',
    tag: 'Garantías',
  },
  {
    id: 'ce-prot-5',
    prompt: '¿Qué artículo regula la suspensión de derechos?',
    answer: 'Art. 55 CE',
    options: ['Art. 53 CE', 'Art. 54 CE', 'Art. 55 CE', 'Art. 116 CE'],
    explanation: 'El art. 55 CE trata la suspensión de derechos en los supuestos constitucionales.',
    tag: 'Garantías',
  },
  {
    id: 'ce-prot-6',
    prompt: '¿Qué artículo regula los estados de alarma, excepción y sitio?',
    answer: 'Art. 116 CE',
    options: ['Art. 55 CE', 'Art. 97 CE', 'Art. 116 CE', 'Art. 155 CE'],
    explanation: 'El art. 116 CE regula los estados excepcionales.',
    tag: 'Estados excepcionales',
  },
  {
    id: 'ce-prot-7',
    prompt: '¿Qué artículo regula la libertad sindical y el derecho de huelga?',
    answer: 'Art. 28 CE',
    options: ['Art. 21 CE', 'Art. 22 CE', 'Art. 28 CE', 'Art. 37 CE'],
    explanation: 'El art. 28 CE recoge libertad sindical y derecho de huelga.',
    tag: 'Derechos',
  },
  {
    id: 'ce-prot-8',
    prompt: '¿Qué artículo regula la tutela judicial efectiva?',
    answer: 'Art. 24 CE',
    options: ['Art. 23 CE', 'Art. 24 CE', 'Art. 25 CE', 'Art. 29 CE'],
    explanation: 'El art. 24 CE es la referencia clave de tutela judicial efectiva.',
    tag: 'Derechos',
  },
  {
    id: 'ce-prot-9',
    prompt: '¿Qué artículo regula la legalidad penal y sancionadora?',
    answer: 'Art. 25 CE',
    options: ['Art. 9.3 CE', 'Art. 24 CE', 'Art. 25 CE', 'Art. 103 CE'],
    explanation: 'El art. 25 CE es esencial para legalidad penal y sancionadora.',
    tag: 'Sanciones',
  },
  {
    id: 'ce-prot-10',
    prompt: '¿Qué artículo identifica al Defensor del Pueblo?',
    answer: 'Art. 54 CE',
    options: ['Art. 53 CE', 'Art. 54 CE', 'Art. 55 CE', 'Art. 159 CE'],
    explanation: 'El art. 54 CE configura el Defensor del Pueblo.',
    tag: 'Instituciones',
  },
  {
    id: 'ce-prot-11',
    prompt: '¿Qué artículo recoge los principios de la Administración Pública?',
    answer: 'Art. 103 CE',
    options: ['Art. 97 CE', 'Art. 103 CE', 'Art. 105 CE', 'Art. 106 CE'],
    explanation: 'El art. 103 CE recoge eficacia, jerarquía, descentralización, desconcentración, coordinación y sometimiento pleno a la ley y al Derecho.',
    tag: 'Administración',
  },
  {
    id: 'ce-prot-12',
    prompt: '¿Qué artículo regula el control judicial de la Administración y la responsabilidad patrimonial?',
    answer: 'Art. 106 CE',
    options: ['Art. 103 CE', 'Art. 105 CE', 'Art. 106 CE', 'Art. 117 CE'],
    explanation: 'El art. 106 CE conecta control judicial y responsabilidad patrimonial.',
    tag: 'Administración',
  },
  {
    id: 'ce-prot-13',
    prompt: '¿Qué artículo garantiza la autonomía municipal?',
    answer: 'Art. 140 CE',
    options: ['Art. 137 CE', 'Art. 140 CE', 'Art. 141 CE', 'Art. 142 CE'],
    explanation: 'El art. 140 CE garantiza la autonomía municipal.',
    tag: 'Régimen local',
  },
  {
    id: 'ce-prot-14',
    prompt: '¿Qué artículo menciona las haciendas locales?',
    answer: 'Art. 142 CE',
    options: ['Art. 133 CE', 'Art. 140 CE', 'Art. 141 CE', 'Art. 142 CE'],
    explanation: 'El art. 142 CE se refiere a las haciendas locales.',
    tag: 'Régimen local',
  },
  {
    id: 'ce-prot-15',
    prompt: '¿Qué artículo regula las competencias exclusivas del Estado?',
    answer: 'Art. 149 CE',
    options: ['Art. 148 CE', 'Art. 149 CE', 'Art. 150 CE', 'Art. 155 CE'],
    explanation: 'El art. 149 CE contiene la lista de competencias exclusivas del Estado.',
    tag: 'Competencias',
  },
  {
    id: 'ce-prot-16',
    prompt: '¿Qué artículo regula el procedimiento ordinario de reforma constitucional?',
    answer: 'Art. 167 CE',
    options: ['Art. 166 CE', 'Art. 167 CE', 'Art. 168 CE', 'Art. 169 CE'],
    explanation: 'El art. 167 CE regula la reforma ordinaria.',
    tag: 'Reforma',
  },
];

export const constitutionQuestions = [
  ...constitutionArticleQuestions,
  ...constitutionProtectionQuestions,
];
