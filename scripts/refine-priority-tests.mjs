import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('.');
const testsDir = path.join(rootDir, 'data', 'tests');

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function q(id, pregunta, opciones, correcta, referencia, explicacion, tema) {
  return { id, pregunta, opciones, correcta, referencia, explicacion, tema };
}

function updateTema(tema, { removeIds = [], add = [] }) {
  const file = path.join(testsDir, `tema-${String(tema).padStart(2, '0')}.json`);
  const current = readJson(file);
  const filtered = current.filter((item) => !removeIds.includes(item.id));
  const knownIds = new Set(filtered.map((item) => item.id));
  const knownQuestions = new Set(filtered.map((item) => normalize(item.pregunta)));

  for (const item of add) {
    if (knownIds.has(item.id) || knownQuestions.has(normalize(item.pregunta))) continue;
    filtered.push(item);
    knownIds.add(item.id);
    knownQuestions.add(normalize(item.pregunta));
  }

  writeJson(file, filtered);
  console.log(`Tema ${tema}: ${current.length} -> ${filtered.length}`);
}

updateTema(7, {
  removeIds: ['topup-07-06', 'topup-07-07', 'topup-07-12', 'topup-07-13'],
  add: [
    q(
      'refine-07-01',
      'En los municipios de gran poblacion, el control y la fiscalizacion de los organos de gobierno municipales corresponde de forma principal al:',
      ['Pleno', 'alcalde', 'Interventor General', 'Organo de Gestion Tributaria'],
      0,
      'I.7 · Pleno en municipios de gran poblacion',
      'El Pleno conserva la funcion central de control y fiscalizacion politica de los organos de gobierno.',
      7,
    ),
    q(
      'refine-07-02',
      'La Junta de Gobierno Local, en un municipio de gran poblacion como Burgos, se caracteriza especialmente por:',
      ['ejercer funciones ejecutivas y administrativas, ademas de colaborar en la funcion politica del alcalde', 'aprobar definitivamente las ordenanzas fiscales sin intervencion del Pleno', 'sustituir al Tribunal Economico-Administrativo Municipal', 'ejercer la funcion interventora y el control financiero'],
      0,
      'I.7 · Junta de Gobierno Local',
      'En gran poblacion, la Junta de Gobierno Local tiene un peso ejecutivo y administrativo muy relevante y colabora en la funcion politica del alcalde.',
      7,
    ),
    q(
      'refine-07-03',
      'La Secretaria General del Ayuntamiento se vincula a funciones reservadas como:',
      ['la fe publica y el asesoramiento legal preceptivo', 'la recaudacion en via ejecutiva y la inspeccion tributaria', 'la ordenacion de pagos y la gestion de tesoreria', 'la direccion politica del gobierno municipal'],
      0,
      'I.7 · Secretaria General',
      'La Secretaria General asume las funciones reservadas de fe publica y asesoramiento legal preceptivo.',
      7,
    ),
    q(
      'refine-07-04',
      'El Tribunal Economico-Administrativo Municipal de Burgos conoce principalmente de reclamaciones relativas a:',
      ['actos tributarios y otros ingresos de derecho publico de competencia municipal', 'sanciones penales impuestas por los juzgados', 'acuerdos plenarios de mocion de censura', 'nombramientos de personal eventual'],
      0,
      'I.7 · Tribunal Economico-Administrativo Municipal',
      'El TEAM se proyecta sobre la revision especializada de actos tributarios e ingresos de derecho publico municipales.',
      7,
    ),
    q(
      'refine-07-05',
      'En el ambito municipal, el organo de gestion tributaria se relaciona de forma directa con funciones de:',
      ['gestion, liquidacion, inspeccion y recaudacion de tributos e ingresos de derecho publico', 'aprobacion del planeamiento general', 'fe publica de las sesiones plenarias', 'convocatoria de elecciones locales'],
      0,
      'I.7 · Organo de Gestion Tributaria',
      'Su nucleo funcional gira en torno a la aplicacion de los tributos y la recaudacion de los ingresos de derecho publico.',
      7,
    ),
  ],
});

updateTema(17, {
  removeIds: ['topup-17-01', 'topup-17-10', 'topup-17-14', 'topup-17-18'],
  add: [
    q(
      'refine-17-01',
      'Para apreciar vulneracion del principio non bis in idem en materia sancionadora debe existir identidad de:',
      ['sujeto, hecho y fundamento', 'organo, territorio y plazo', 'procedimiento, recurso y prueba', 'norma, reglamento y costumbre'],
      0,
      'II.8 · Principios de la potestad sancionadora',
      'La prohibicion de doble sancion exige identidad de sujeto, hechos y fundamento.',
      17,
    ),
    q(
      'refine-17-02',
      'Las medidas provisionales en un procedimiento sancionador deben ser:',
      ['proporcionadas, motivadas y orientadas a asegurar la eficacia de la resolucion final', 'automaticas y siempre pecuniarias', 'identicas a la sancion definitiva', 'acordadas solo al final del procedimiento'],
      0,
      'II.8 · Medidas provisionales',
      'Las medidas provisionales no son sanciones anticipadas: deben ser necesarias, proporcionadas y motivadas.',
      17,
    ),
    q(
      'refine-17-03',
      'La separacion entre fase instructora y fase resolutoria en el procedimiento sancionador persigue reforzar especialmente la:',
      ['imparcialidad y objetividad', 'recaudacion inmediata', 'publicidad activa', 'automaticidad de la sancion'],
      0,
      'II.8 · Procedimiento sancionador',
      'La diferenciacion entre instructor y organo resolutor sirve para garantizar mayor imparcialidad.',
      17,
    ),
    q(
      'refine-17-04',
      'Las ordenanzas locales pueden tipificar infracciones y sanciones:',
      ['solo dentro de la habilitacion y de los limites establecidos por la ley', 'libremente, sin cobertura legal alguna', 'solo si lo aprueba la Junta de Gobierno Local sin Pleno', 'aunque contradigan una ley estatal o autonoma'],
      0,
      'II.8 · Potestad sancionadora local',
      'La tipificacion local exige cobertura legal y respeto a la jerarquia normativa.',
      17,
    ),
    q(
      'refine-17-05',
      'La resolucion sancionadora debe pronunciarse sobre:',
      ['los hechos, su calificacion juridica, la persona responsable y la sancion o inexistencia de infraccion', 'unicamente el importe economico de la multa', 'solo la denuncia inicial', 'solo la identificacion del instructor'],
      0,
      'II.8 · Resolucion sancionadora',
      'La resolucion final debe cerrar de forma motivada el debate sobre hechos, calificacion y responsabilidad.',
      17,
    ),
  ],
});

updateTema(19, {
  removeIds: ['topup-19-01', 'topup-19-02', 'topup-19-03', 'topup-19-05', 'topup-19-13', 'topup-19-20'],
  add: [
    q(
      'refine-19-01',
      'La actividad de limitacion o policia se caracteriza porque la Administracion:',
      ['condiciona o restringe derechos y actividades privadas en atencion al interes general', 'subvenciona libremente cualquier conducta privada', 'gestiona siempre un servicio publico de forma directa', 'actua sin cobertura normativa previa'],
      0,
      'II.10 · Formas de actividad administrativa',
      'La actividad de policia actua sobre actividades privadas para ordenarlas, condicionarlas o limitarlas en interes general.',
      19,
    ),
    q(
      'refine-19-02',
      'En la gestion indirecta de un servicio publico, el Ayuntamiento conserva:',
      ['la titularidad del servicio y las potestades de direccion y control', 'solo una funcion simbolica sin capacidad de intervenir', 'la obligacion de no supervisar al contratista', 'la competencia jurisdiccional sobre litigios penales'],
      0,
      'II.10 · Gestion de los servicios publicos',
      'Aunque la prestacion se externalice, la Administracion mantiene la titularidad y sus potestades de control.',
      19,
    ),
    q(
      'refine-19-03',
      'La concesion de servicios se distingue porque el contratista asume:',
      ['el riesgo operacional de la explotacion', 'la potestad reglamentaria municipal', 'la fe publica de los acuerdos', 'la funcion interventora'],
      0,
      'II.10 · Gestion indirecta y concesion',
      'La asuncion del riesgo operacional es la nota propia de la concesion de servicios.',
      19,
    ),
    q(
      'refine-19-04',
      'La remunicipalizacion de un servicio publico no permite, por si sola:',
      ['ignorar contratos vigentes, personal afectado y sostenibilidad financiera', 'recuperar la gestion publica del servicio', 'tramitar una memoria justificativa', 'valorar la forma de gestion mas eficiente'],
      0,
      'II.10 · Remunicipalizacion',
      'La vuelta a la gestion publica exige respetar el marco contractual, laboral y economico aplicable.',
      19,
    ),
    q(
      'refine-19-05',
      'La iniciativa economica publica local requiere motivar especialmente:',
      ['su conveniencia para el interes general y su sostenibilidad', 'la ausencia de control interno', 'que no exista competencia privada alguna', 'la sustitucion del presupuesto por tarifas libres'],
      0,
      'II.10 · Iniciativa economica publica local',
      'La actividad economica publica necesita justificacion reforzada desde la perspectiva del interes general y la sostenibilidad financiera.',
      19,
    ),
    q(
      'refine-19-06',
      'Cuando el Ayuntamiento elige una forma de gestion de un servicio, no actua con libertad absoluta porque debe atender, entre otros, a criterios de:',
      ['eficacia, coste, calidad, control y sostenibilidad', 'afinidad politica del futuro gestor', 'azar o turno entre empresas', 'preferencia personal del alcalde sin expediente'],
      0,
      'II.10 · Eleccion de la forma de gestion',
      'La seleccion de la forma de gestion debe justificarse objetivamente en un expediente y responder al interes publico.',
      19,
    ),
    q(
      'refine-19-07',
      'Una nota clasica del servicio publico es la continuidad, lo que implica que su prestacion:',
      ['no puede interrumpirse arbitrariamente si afecta a necesidades colectivas', 'debe cesar en vacaciones salvo acuerdo contrario', 'depende solo del criterio del concesionario', 'carece de relacion con la igualdad de los usuarios'],
      0,
      'II.10 · Servicio publico',
      'La continuidad expresa la necesidad de asegurar una prestacion regular a la colectividad.',
      19,
    ),
  ],
});

updateTema(21, {
  removeIds: ['topup-21-01', 'topup-21-02', 'topup-21-03', 'topup-21-11'],
  add: [
    q(
      'refine-21-01',
      'Si durante la informacion publica de una ordenanza local no se presentan reclamaciones ni sugerencias:',
      ['el acuerdo inicial se entiende definitivamente adoptado', 'la ordenanza decae automaticamente', 'debe repetirse siempre la aprobacion inicial', 'solo puede aprobarla definitivamente la Junta de Gobierno Local'],
      0,
      'II.12 · Procedimiento de aprobacion',
      'La legislacion local permite que, sin reclamaciones, el acuerdo inicial pase a ser definitivo automaticamente.',
      21,
    ),
    q(
      'refine-21-02',
      'Para que una ordenanza o reglamento local entre en vigor se requiere, entre otros requisitos:',
      ['publicacion integra de su texto y transcurso del plazo legal correspondiente', 'simple anuncio del alcalde en rueda de prensa', 'aprobacion provisional sin publicacion', 'firma del interventor y del tesorero'],
      0,
      'II.12 · Publicacion y entrada en vigor',
      'La eficacia general de la norma local exige publicacion integra y respeto al plazo legal de entrada en vigor.',
      21,
    ),
    q(
      'refine-21-03',
      'El reglamento organico municipal se orienta principalmente a regular:',
      ['la organizacion y el funcionamiento interno de la corporacion', 'la estructura del IRPF', 'las penas por infracciones penales', 'la concesion de nacionalidad espanola'],
      0,
      'II.12 · Clases de reglamentos locales',
      'El reglamento organico ordena la organizacion y el funcionamiento de la entidad local.',
      21,
    ),
    q(
      'refine-21-04',
      'El bando del alcalde se diferencia de la ordenanza porque, con caracter general, el bando:',
      ['no sustituye a una disposicion reglamentaria de rango local aprobada por el Pleno', 'tiene siempre rango superior a la ordenanza', 'deroga automaticamente cualquier reglamento municipal', 'solo puede dictarse si existe ley organica habilitante'],
      0,
      'II.12 · Los bandos',
      'El bando es un instrumento de la alcaldia para difundir o concretar mandatos y no equivale a una ordenanza aprobada por el Pleno.',
      21,
    ),
    q(
      'refine-21-05',
      'Si durante la exposicion publica de una ordenanza se presentan reclamaciones o sugerencias, corresponde resolverlas y aprobar definitivamente la norma al:',
      ['Pleno', 'alcalde', 'secretario general', 'tribunal economico-administrativo municipal'],
      0,
      'II.12 · Procedimiento de aprobacion',
      'La competencia para resolver reclamaciones y cerrar la aprobacion definitiva sigue residiendo en el Pleno.',
      21,
    ),
  ],
});

updateTema(27, {
  removeIds: ['topup-27-01', 'topup-27-02', 'topup-27-04', 'topup-27-05', 'topup-27-06', 'topup-27-09'],
  add: [
    q(
      'refine-27-01',
      'Entre los impuestos municipales de exaccion obligatoria se encuentran:',
      ['IBI, IAE e IVTM', 'ICIO, IIVTNU e IAE', 'IBI, ICIO e IIVTNU', 'solo el IBI'],
      0,
      'IV.1 · Tributos locales',
      'Los tres impuestos municipales obligatorios son IBI, IAE e IVTM.',
      27,
    ),
    q(
      'refine-27-02',
      'La imposicion de un tributo local potestativo supone que el Ayuntamiento:',
      ['decide si establece o no ese tributo dentro del marco legal', 'puede crear cualquier impuesto nuevo sin ley', 'debe exigirlo obligatoriamente cada ejercicio', 'puede aprobarlo por decreto de alcaldia sin ordenanza'],
      0,
      'IV.1 · Imposicion y ordenacion de tributos',
      'Los tributos potestativos requieren decision municipal expresa, pero siempre dentro del marco legal estatal.',
      27,
    ),
    q(
      'refine-27-03',
      'La ordenacion de un tributo local se realiza fundamentalmente mediante:',
      ['la correspondiente ordenanza fiscal', 'un bando de alcaldia', 'una instruccion interna de tesoreria', 'una mocion de censura'],
      0,
      'IV.1 · Potestad reglamentaria tributaria',
      'La ordenacion del tributo local se articula mediante ordenanza fiscal.',
      27,
    ),
    q(
      'refine-27-04',
      'La aprobacion provisional de ordenanzas fiscales debe someterse a exposicion publica por un plazo minimo de:',
      ['30 dias', '10 dias', '15 dias', '2 meses'],
      0,
      'IV.1 · Ordenanzas fiscales',
      'La tramitacion de las ordenanzas fiscales exige exposicion publica minima de treinta dias.',
      27,
    ),
    q(
      'refine-27-05',
      'Las tasas locales pueden exigirse, entre otros supuestos, por:',
      ['la utilizacion privativa o el aprovechamiento especial del dominio publico local', 'la mera existencia del municipio', 'la aprobacion del presupuesto anual', 'la celebracion de plenos ordinarios'],
      0,
      'IV.1 · Tasas',
      'La tasa se conecta con un aprovechamiento especial del dominio publico o con servicios y actividades administrativas en los terminos legales.',
      27,
    ),
    q(
      'refine-27-06',
      'Las contribuciones especiales se justifican cuando una obra o servicio municipal produce:',
      ['un beneficio especial para determinadas personas o bienes', 'un beneficio indistinto para todo el pais', 'unicamente un gasto interno de personal', 'solo una ventaja politica para el equipo de gobierno'],
      0,
      'IV.1 · Contribuciones especiales',
      'Las contribuciones especiales descansan en la obtencion de un beneficio especial derivado de la obra o servicio.',
      27,
    ),
    q(
      'refine-27-07',
      'La impugnacion directa de una ordenanza fiscal aprobada definitivamente se plantea, con caracter general, ante la jurisdiccion:',
      ['contencioso-administrativa', 'social', 'civil', 'penal'],
      0,
      'IV.1 · Impugnacion de ordenanzas fiscales',
      'La ordenanza fiscal es una disposicion de caracter general y su control corresponde a la jurisdiccion contencioso-administrativa.',
      27,
    ),
    q(
      'refine-27-08',
      'En un municipio de gran poblacion, determinados actos de gestion tributaria municipal pueden ser revisados en via economico-administrativa ante:',
      ['el Tribunal Economico-Administrativo Municipal', 'el Pleno en sesion ordinaria', 'la Junta Electoral de Zona', 'la Diputacion Provincial como organo revisor necesario'],
      0,
      'IV.1 · Revision de actos tributarios locales',
      'En los municipios de gran poblacion puede existir un organo economico-administrativo municipal para esta revision especializada.',
      27,
    ),
  ],
});

updateTema(31, {
  removeIds: ['topup-31-01', 'topup-31-02', 'topup-31-03', 'topup-31-04', 'topup-31-05', 'topup-31-20'],
  add: [
    q(
      'refine-31-01',
      'La clasificacion del suelo determina principalmente:',
      ['la clase juridica de suelo a la que pertenece cada terreno', 'el color de las fachadas del municipio', 'la titularidad registral de cada finca', 'la imposicion de tasas municipales'],
      0,
      'IV.5 · Clasificacion y calificacion del suelo',
      'La clasificacion distingue las grandes clases de suelo; la calificacion concreta usos y condiciones pormenorizadas.',
      31,
    ),
    q(
      'refine-31-02',
      'La calificacion urbanistica precisa sobre cada suelo, entre otras cuestiones:',
      ['los usos, intensidades y condiciones de edificacion', 'la nacionalidad del propietario', 'la forma de votacion del Pleno', 'el regimen disciplinario del personal'],
      0,
      'IV.5 · Clasificacion y calificacion del suelo',
      'La calificacion concreta el destino urbanistico pormenorizado del suelo.',
      31,
    ),
    q(
      'refine-31-03',
      'La licencia urbanistica es un acto de control previo que verifica principalmente:',
      ['la conformidad de la actuacion con la legalidad y el planeamiento urbanistico', 'la rentabilidad economica privada del promotor', 'la oportunidad politica del proyecto segun el alcalde', 'la capacidad del contratista para intervenir en procesos electorales'],
      0,
      'IV.5 · Licencia urbanistica',
      'La licencia urbanistica controla la adecuacion de la actuacion pretendida a la normativa aplicable.',
      31,
    ),
    q(
      'refine-31-04',
      'Cuando se ejecuta una obra sin licencia o contra sus condiciones, la Administracion puede reaccionar mediante:',
      ['medidas de suspension, restauracion de la legalidad y, en su caso, sancion', 'solo una recomendacion verbal', 'exclusivamente una subida del IBI', 'la perdida automatica de la propiedad por ministerio de la ley'],
      0,
      'IV.5 · Proteccion de la legalidad urbanistica',
      'La disciplina urbanistica combina restauracion de la legalidad con, en su caso, potestad sancionadora.',
      31,
    ),
    q(
      'refine-31-05',
      'La sancion urbanistica y la restauracion de la legalidad son tecnicas:',
      ['compatibles e independientes entre si', 'excluyentes, de modo que solo puede aplicarse una de ellas', 'reservadas exclusivamente a los juzgados penales', 'sustituidas siempre por indemnizaciones'],
      0,
      'IV.5 · Infracciones y sanciones urbanisticas',
      'La imposicion de una sancion no elimina la obligacion de reponer la realidad fisica alterada cuando proceda.',
      31,
    ),
    q(
      'refine-31-06',
      'La competencia urbanistica municipal comprende normalmente funciones de:',
      ['planeamiento, gestion, intervencion y disciplina urbanistica', 'legislacion organica estatal exclusiva', 'control del poder judicial', 'gestion de la Seguridad Social contributiva'],
      0,
      'IV.5 · Competencia urbanistica municipal',
      'El municipio interviene en planeamiento, gestion, licencias y disciplina en los terminos que marque la normativa.',
      31,
    ),
    q(
      'refine-31-07',
      'El suelo rustico o no urbanizable se preserva, entre otras razones, por:',
      ['valores ambientales, paisajisticos, agrarios o de proteccion especial', 'la simple voluntad del promotor privado', 'la necesidad de ubicar siempre oficinas administrativas', 'la existencia de cualquier padron fiscal'],
      0,
      'IV.5 · Clasificacion del suelo',
      'La preservacion de este suelo responde a valores o finalidades que justifican su proteccion frente al proceso urbanizador.',
      31,
    ),
    q(
      'refine-31-08',
      'La legalizacion de una obra ejecutada sin licencia solo puede plantearse cuando:',
      ['la actuacion sea compatible con el planeamiento y la legalidad urbanistica aplicable', 'haya transcurrido cualquier plazo sin mas', 'el promotor pague una tasa extraordinaria', 'el alcalde manifieste verbalmente su conformidad'],
      0,
      'IV.5 · Proteccion de la legalidad urbanistica',
      'No toda obra clandestina es legalizable: solo la que resulte materialmente compatible con el ordenamiento urbanistico.',
      31,
    ),
  ],
});
