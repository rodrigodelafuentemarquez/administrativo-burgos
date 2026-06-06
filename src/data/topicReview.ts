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
  if (lower.includes('articulo') || lower.includes('ley') || lower.includes('regimen')) {
    return 'Ubicar la norma, su articulo base y la consecuencia juridica principal.';
  }
  if (lower.includes('procedimiento') || lower.includes('tramitacion') || lower.includes('aprobacion')) {
    return 'Ordenar fases, organo competente, plazos y efectos de cada tramite.';
  }
  if (lower.includes('derecho') || lower.includes('deber') || lower.includes('garantia')) {
    return 'Distinguir titularidad, contenido, limites, garantias y nivel de proteccion.';
  }
  if (lower.includes('competencia') || lower.includes('organ') || lower.includes('institucion')) {
    return 'Saber quien decide, que funciones tiene y como se controla su actuacion.';
  }
  if (lower.includes('presupuesto') || lower.includes('credito') || lower.includes('gasto')) {
    return 'Separar concepto, fases, documentos, limites y organos que intervienen.';
  }
  if (lower.includes('word') || lower.includes('excel') || lower.includes('windows') || lower.includes('correo')) {
    return 'Dominar uso practico, vocabulario tecnico y errores habituales de oficina.';
  }
  return 'Explicar concepto, elementos, clasificacion y relacion con el resto del programa.';
};

const trapsFor = (topic: OfficialTopic) => {
  const text = topic.titulo.toLowerCase();
  const traps: string[] = [];

  if (text.includes('constitucion')) traps.push('No mezclar valores superiores, principios del titulo preliminar y derechos fundamentales.');
  if (text.includes('corona')) traps.push('El Rey realiza actos constitucionales, pero la responsabilidad se desplaza mediante refrendo.');
  if (text.includes('cortes')) traps.push('Diferenciar Congreso, Senado, Cortes Generales, Pleno, Comisiones y Diputacion Permanente.');
  if (text.includes('comunidades autonomas') || text.includes('competencial')) traps.push('Autonomia no equivale a soberania; el Estatuto asume competencias dentro de la Constitucion.');
  if (text.includes('entidades locales') || text.includes('municipio')) traps.push('No confundir municipio, provincia, entidad local menor, comarca, mancomunidad y area metropolitana.');
  if (text.includes('acto administrativo')) traps.push('Distinguir nulidad, anulabilidad, eficacia, notificacion y motivacion.');
  if (text.includes('procedimiento')) traps.push('Ordenar iniciacion, ordenacion, instruccion, finalizacion y ejecucion sin saltar tramites.');
  if (text.includes('recursos')) traps.push('Separar alzada, reposicion y extraordinario de revision por organo, plazo y efectos.');
  if (text.includes('sector publico')) traps.push('Diferenciar organo, unidad administrativa, competencia, delegacion, avocacion y encomienda.');
  if (text.includes('responsabilidad')) traps.push('Recordar lesion antijuridica, dano efectivo, evaluable e individualizado y nexo causal.');
  if (text.includes('contratos')) traps.push('No mezclar preparacion, adjudicacion, efectos, cumplimiento, extincion, invalidez y recursos.');
  if (text.includes('sancionadora')) traps.push('Separar principio de legalidad sancionadora, tipicidad, presuncion de inocencia y proporcionalidad.');
  if (text.includes('presupuesto')) traps.push('Distinguir credito inicial, modificacion presupuestaria, fase de gasto y documento contable.');
  if (text.includes('tributos')) traps.push('No confundir imposicion del tributo, ordenanza fiscal, liquidacion, recaudacion e impugnacion.');
  if (text.includes('urbanistico')) traps.push('Separar clasificacion del suelo, calificacion, licencia, proteccion de legalidad y sancion.');
  if (text.includes('transparencia')) traps.push('Diferenciar publicidad activa, derecho de acceso y proteccion de datos personales.');
  if (text.includes('proteccion de datos')) traps.push('Separar responsable, encargado, delegado, autoridad de control y derechos del interesado.');
  if (text.includes('administracion electronica')) traps.push('Distinguir sede electronica, registro electronico, expediente electronico y notificacion electronica.');
  if (text.includes('documento') || text.includes('archivo')) traps.push('No confundir documento, expediente, archivo, acceso y limites al acceso.');
  if (text.includes('windows') || text.includes('word') || text.includes('excel') || text.includes('correo')) traps.push('Pensar en casos practicos: archivo, permisos, adjuntos, formato, formulas y seguridad.');

  return traps.slice(0, 4);
};

const checklistFor = (topic: OfficialTopic) => {
  const checklist = [
    'Poder explicar cada epigrafe oficial sin mirar el titulo.',
    'Saber convertir el tema en una respuesta ordenada de introduccion, desarrollo y cierre.',
    'Identificar articulos, leyes, plazos, organos y conceptos que pueden caer en test.',
  ];

  if (topic.ejercicios.includes('practico')) {
    checklist.push('Preparar un ejemplo practico municipal: registro, personal, presupuesto, contrato, expediente o atencion ciudadana.');
  }
  if (topic.prioridad === 'critica') {
    checklist.push('Marcarlo como tema de repaso frecuente: test, supuesto practico y posible desarrollo.');
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
