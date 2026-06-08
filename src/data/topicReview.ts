import { officialTopics, type OfficialTopic } from './burgosSyllabus';

export type ReviewRow = {
  materia: string;
  dominar: string;
};

export type TopicReview = {
  topic: OfficialTopic;
  rows: ReviewRow[];
  traps: string[];
  checklist: string[];
};

const slugByTopic = (topic: OfficialTopic) =>
  `grupo-${topic.grupo.toLowerCase()}-tema-${String(topic.numero).padStart(2, '0')}`;

const clean = (value: string) =>
  value
    .replace(/\s+/g, ' ')
    .replace(/\.$/, '')
    .trim();

const splitOfficialTitle = (title: string) =>
  title
    .replace(/\([^)]*\):/g, ':')
    .split(/:|\.|;|,\s+(?=[A-ZÁÉÍÓÚÑa-záéíóúñ])/)
    .map(clean)
    .filter((part) => part.length > 8)
    .slice(0, 8);

const dominar = (materia: string) => {
  const lower = materia.toLowerCase();
  if (lower.includes('artículo') || lower.includes('ley') || lower.includes('régimen')) {
    return 'Ubicar la norma, su artículo base y la consecuencia jurídica principal.';
  }
  if (lower.includes('procedimiento') || lower.includes('tramitación') || lower.includes('aprobación')) {
    return 'Ordenar fases, órgano competente, plazos y efectos de cada trámite.';
  }
  if (lower.includes('derecho') || lower.includes('deber') || lower.includes('garantía')) {
    return 'Distinguir titularidad, contenido, limites, garantías y nivel de protección.';
  }
  if (lower.includes('competencia') || lower.includes('organ') || lower.includes('institución')) {
    return 'Saber quien decide, que funciones tiene y como se controla su actuación.';
  }
  if (lower.includes('presupuesto') || lower.includes('crédito') || lower.includes('gasto')) {
    return 'Separar concepto, fases, documentos, limites y órganos que intervienen.';
  }
  if (lower.includes('word') || lower.includes('excel') || lower.includes('windows') || lower.includes('correo')) {
    return 'Dominar uso práctico, vocabulario tecnico y errores habituales de oficina.';
  }
  return 'Explicar concepto, elementos, clasificación y relación con el resto del programa.';
};

const trapsFor = (topic: OfficialTopic) => {
  const text = topic.titulo.toLowerCase();
  const traps: string[] = [];

  if (text.includes('constitución')) traps.push('No mezclar valores superiores, principios del titulo preliminar y derechos fundamentales.');
  if (text.includes('corona')) traps.push('El Rey realiza actos constitucionales, pero la responsabilidad se desplaza mediante refrendo.');
  if (text.includes('cortes')) traps.push('Diferenciar Congreso, Senado, Cortes Generales, Pleno, Comisiones y Diputación Permanente.');
  if (text.includes('comunidades autonomas') || text.includes('competencial')) traps.push('Autonomía no equivale a soberania; el Estatuto asume competencias dentro de la Constitución.');
  if (text.includes('entidades locales') || text.includes('municipio')) traps.push('No confundir municipio, provincia, entidad local menor, comarca, mancomunidad y area metropolitana.');
  if (text.includes('acto administrativo')) traps.push('Distinguir nulidad, anulabilidad, eficacia, notificación y motivación.');
  if (text.includes('procedimiento')) traps.push('Ordenar iniciación, ordenación, instrucción, finalización y ejecución sin saltar trámites.');
  if (text.includes('recursos')) traps.push('Separar alzada, reposición y extraordinario de revisión por órgano, plazo y efectos.');
  if (text.includes('sector público')) traps.push('Diferenciar órgano, unidad administrativa, competencia, delegación, avocación y encomienda.');
  if (text.includes('responsabilidad')) traps.push('Recordar lesión antijuridica, dano efectivo, evaluable e individualizado y nexo causal.');
  if (text.includes('contratos')) traps.push('No mezclar preparación, adjudicación, efectos, cumplimiento, extinción, invalidez y recursos.');
  if (text.includes('sancionadora')) traps.push('Separar principio de legalidad sancionadora, tipicidad, presunción de inocencia y proporcionalidad.');
  if (text.includes('presupuesto')) traps.push('Distinguir crédito inicial, modificación presupuestaria, fase de gasto y documento contable.');
  if (text.includes('tributos')) traps.push('No confundir imposición del tributo, ordenanza fiscal, liquidación, recaudación e impugnación.');
  if (text.includes('urbanístico')) traps.push('Separar clasificación del suelo, calificación, licencia, protección de legalidad y sanción.');
  if (text.includes('transparencia')) traps.push('Diferenciar publicidad activa, derecho de acceso y protección de datos personales.');
  if (text.includes('protección de datos')) traps.push('Separar responsable, encargado, delegado, autoridad de control y derechos del interesado.');
  if (text.includes('administración electrónica')) traps.push('Distinguir sede electrónica, registro electrónico, expediente electrónico y notificación electrónica.');
  if (text.includes('documento') || text.includes('archivo')) traps.push('No confundir documento, expediente, archivo, acceso y limites al acceso.');
  if (text.includes('windows') || text.includes('word') || text.includes('excel') || text.includes('correo')) traps.push('Pensar en casos prácticos: archivo, permisos, adjuntos, formato, formulas y seguridad.');

  return traps.slice(0, 4);
};

const checklistFor = (topic: OfficialTopic) => {
  const checklist = [
    'Poder explicar cada epigrafe oficial sin mirar el titulo.',
    'Saber convertir el tema en una respuesta ordenada de introducción, desarrollo y cierre.',
    'Identificar artículos, leyes, plazos, órganos y conceptos que pueden caer en test.',
  ];

  if (topic.ejercicios.includes('práctico')) {
    checklist.push('Preparar un ejemplo práctico municipal: registro, personal, presupuesto, contrato, expediente o atención ciudadana.');
  }
  if (topic.prioridad === 'crítica') {
    checklist.push('Marcarlo como tema de repaso frecuente: test, supuesto práctico y posible desarrollo.');
  }

  return checklist;
};

export const getTopicReview = (slug: string): TopicReview | undefined => {
  const topic = officialTopics.find((item) => slugByTopic(item) === slug);
  if (!topic) return undefined;

  const parts = splitOfficialTitle(topic.titulo);
  return {
    topic,
    rows: parts.map((materia) => ({ materia, dominar: dominar(materia) })),
    traps: trapsFor(topic),
    checklist: checklistFor(topic),
  };
};
