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

updateTema(6, {
  removeIds: ['topup-06-02', 'topup-06-03', 'topup-06-07', 'topup-06-12', 'topup-06-13'],
  add: [
    q(
      'refine-06-01',
      'La condicion de vecino de un municipio se adquiere legalmente mediante:',
      ['la inscripcion en el padron municipal', 'el pago del IBI durante dos ejercicios', 'la residencia continuada de hecho durante un ano aunque no exista inscripcion', 'la inclusion en el censo electoral general'],
      0,
      'I.6 · Poblacion y empadronamiento',
      'La condicion de vecino se anuda a la inscripcion en el padron municipal.',
      6,
    ),
    q(
      'refine-06-02',
      'Los datos del padron municipal constituyen prueba de:',
      ['la residencia en el municipio y del domicilio habitual', 'la titularidad dominical de la vivienda', 'la situacion laboral del inscrito', 'la regularidad administrativa en materia de extranjeria'],
      0,
      'I.6 · Padron municipal',
      'La eficacia probatoria del padron se refiere a residencia y domicilio habitual, no a otros extremos ajenos.',
      6,
    ),
    q(
      'refine-06-03',
      'La alteracion del termino municipal puede producirse, entre otros supuestos, por:',
      ['fusion, incorporacion o segregacion en los terminos legalmente previstos', 'acuerdo verbal entre alcaldes colindantes', 'resolucion del interventor municipal', 'peticion de cualquier vecino sin expediente'],
      0,
      'I.6 · Termino municipal',
      'Las modificaciones del termino municipal exigen procedimiento y causa legalmente prevista.',
      6,
    ),
    q(
      'refine-06-04',
      'La gestion y formacion del padron municipal corresponde al Ayuntamiento, bajo la coordinacion de:',
      ['el Instituto Nacional de Estadistica', 'el Consejo General del Poder Judicial', 'la Junta Electoral Central', 'el Tribunal de Cuentas'],
      0,
      'I.6 · Padron municipal',
      'La coordinacion padronal corresponde al INE.',
      6,
    ),
    q(
      'refine-06-05',
      'La inscripcion padronal de una persona extranjera:',
      ['no equivale por si sola a la regularizacion de su situacion de extranjeria', 'supone automaticamente autorizacion de residencia', 'solo es posible si la persona pertenece a la Union Europea', 'requiere una resolucion judicial previa'],
      0,
      'I.6 · Empadronamiento de personas extranjeras',
      'El empadronamiento tiene efectos administrativos propios, pero no regulariza por si mismo la situacion de extranjeria.',
      6,
    ),
  ],
});

updateTema(18, {
  removeIds: ['topup-18-01', 'topup-18-02', 'topup-18-03'],
  add: [
    q(
      'refine-18-01',
      'Los bienes de dominio publico local se caracterizan, entre otras notas, por ser:',
      ['inalienables, inembargables e imprescriptibles', 'siempre arrendables sin limitaciones', 'susceptibles de embargo por cualquier deuda tributaria', 'libremente enajenables por decreto de alcaldia'],
      0,
      'II.9 · Bienes de dominio publico local',
      'El dominio publico se protege mediante esas notas clasicas de indisponibilidad reforzada.',
      18,
    ),
    q(
      'refine-18-02',
      'La afectacion de un bien local significa:',
      ['su destino a un uso general o a un servicio publico', 'su venta forzosa en subasta', 'su incorporacion al patrimonio sindical', 'su desinscripcion del inventario municipal'],
      0,
      'II.9 · Afectacion y desafectacion',
      'La afectacion transforma el destino juridico del bien hacia el dominio publico o servicio publico.',
      18,
    ),
    q(
      'refine-18-03',
      'Los bienes patrimoniales de las entidades locales son aquellos que:',
      ['no estan destinados directamente a uso publico ni afectados a un servicio publico', 'pertenecen siempre a los vecinos por turnos', 'gozan necesariamente del mismo regimen que el dominio publico', 'solo pueden ser bienes muebles'],
      0,
      'II.9 · Bienes patrimoniales',
      'Los bienes patrimoniales se definen por exclusion respecto del dominio publico.',
      18,
    ),
  ],
});

updateTema(20, {
  removeIds: ['topup-20-01', 'topup-20-03', 'topup-20-04'],
  add: [
    q(
      'refine-20-01',
      'El orden del dia de un organo colegiado local cumple, entre otras, una funcion de:',
      ['delimitar los asuntos sobre los que podran recaer validamente deliberacion y acuerdo', 'sustituir al acta de la sesion', 'convertir en publicos todos los expedientes reservados', 'permitir votar cualquier asunto sin relacion previa'],
      0,
      'II.11 · Convocatorias y orden del dia',
      'El orden del dia concreta y limita los asuntos a tratar, con las excepciones legalmente previstas.',
      20,
    ),
    q(
      'refine-20-02',
      'La valida constitucion de un organo colegiado local exige comprobar el quorum relativo a:',
      ['asistencia minima legalmente exigida para celebrar sesion y adoptar acuerdos', 'porcentaje de ejecucion presupuestaria del area', 'numero de expedientes pendientes de secretaria', 'porcentaje de participacion ciudadana del barrio'],
      0,
      'II.11 · Requisitos para la constitucion',
      'El quorum se refiere al minimo de asistentes legalmente necesario para sesionar validamente.',
      20,
    ),
    q(
      'refine-20-03',
      'El voto de calidad del presidente opera, como regla general, en caso de:',
      ['empate en la votacion', 'ausencia del secretario', 'falta de convocatoria escrita', 'aprobacion por unanimidad'],
      0,
      'II.11 · Votaciones',
      'El voto de calidad resuelve el empate cuando el regimen juridico aplicable asi lo previene.',
      20,
    ),
  ],
});

updateTema(23, {
  removeIds: ['topup-23-01', 'topup-23-03', 'topup-23-04', 'topup-23-09', 'topup-23-10'],
  add: [
    q(
      'refine-23-01',
      'La renuncia a la condicion de funcionario de carrera, para producir efectos, debe ser:',
      ['expresa y aceptada por la Administracion salvo que la aceptacion quede legalmente impedida', 'siempre tacita si el funcionario no acude al puesto', 'verbal ante el superior inmediato', 'aprobada por los representantes sindicales'],
      0,
      'III.2 · Perdida de la condicion de funcionario',
      'La renuncia exige una manifestacion expresa y su tratamiento se sujeta al regimen legal correspondiente.',
      23,
    ),
    q(
      'refine-23-02',
      'Los servicios especiales constituyen una situacion administrativa propia de quien pasa a desempenar:',
      ['determinados cargos o funciones incompatibles con el servicio activo ordinario', 'cualquier puesto temporal dentro del mismo departamento', 'solo actividades privadas compatibles', 'exclusivamente un segundo puesto docente'],
      0,
      'III.2 · Situaciones administrativas',
      'Los servicios especiales se conectan con cargos o funciones que justifican la separacion temporal del puesto ordinario.',
      23,
    ),
    q(
      'refine-23-03',
      'La excedencia voluntaria por interes particular se caracteriza, como regla general, porque:',
      ['no comporta reserva de puesto ni devengo de retribuciones', 'mantiene siempre el mismo puesto reservado', 'solo puede durar un maximo de seis meses', 'obliga a percibir el 50 por 100 del sueldo base'],
      0,
      'III.2 · Excedencias',
      'La excedencia por interes particular suspende la prestacion de servicios sin reserva ordinaria de puesto ni retribuciones.',
      23,
    ),
    q(
      'refine-23-04',
      'La suspension firme de funciones deriva de:',
      ['una sancion disciplinaria o una condena penal en los terminos legalmente previstos', 'una simple recomendacion del jefe de servicio', 'la peticion de traslado voluntario', 'la jubilacion ordinaria del funcionario'],
      0,
      'III.2 · Suspension de funciones',
      'La suspension firme es una situacion consecuencia de una sancion o de los efectos de una resolucion penal.',
      23,
    ),
    q(
      'refine-23-05',
      'El servicio en otras Administraciones Publicas implica normalmente:',
      ['mantener la condicion de funcionario de origen dentro del regimen legal de movilidad o integracion aplicable', 'perder automaticamente toda vinculacion con la Administracion de procedencia', 'pasar necesariamente a excedencia por interes particular', 'adquirir una relacion laboral comun en lugar de funcionarial'],
      0,
      'III.2 · Situaciones administrativas',
      'Esta situacion no equivale sin mas a perder la condicion funcionarial de origen.',
      23,
    ),
    q(
      'refine-23-06',
      'La jubilacion del funcionario produce con caracter general:',
      ['la perdida de la condicion de funcionario de carrera', 'el pase automatico a servicios especiales', 'la suspension provisional de funciones', 'la permanencia indefinida en servicio activo'],
      0,
      'III.2 · Perdida de la condicion de funcionario',
      'La jubilacion figura entre las causas legales de perdida de la condicion de funcionario de carrera.',
      23,
    ),
  ],
});

updateTema(24, {
  removeIds: ['topup-24-01', 'topup-24-02', 'topup-24-04'],
  add: [
    q(
      'refine-24-01',
      'La seleccion del personal laboral al servicio de las Administraciones Publicas debe ajustarse a los principios de:',
      ['igualdad, merito, capacidad y publicidad', 'libre designacion absoluta', 'designacion directa por el alcalde sin proceso', 'antiguedad exclusiva en la Administracion'],
      0,
      'III.3 · Seleccion del personal laboral',
      'Tambien en el personal laboral rigen los principios constitucionales de acceso al empleo publico.',
      24,
    ),
    q(
      'refine-24-02',
      'El personal laboral al servicio de una Administracion Publica se vincula mediante:',
      ['contrato de trabajo', 'nombramiento funcionarial de carrera', 'eleccion politica', 'convenio de colaboracion interadministrativa'],
      0,
      'III.3 · Personal laboral',
      'La nota definitoria del personal laboral es su vinculacion por contrato de trabajo.',
      24,
    ),
    q(
      'refine-24-03',
      'Las incompatibilidades del personal laboral publico no se rigen solo por el Estatuto de los Trabajadores, sino tambien por:',
      ['la normativa especifica de incompatibilidades del sector publico', 'la ley electoral general', 'el reglamento del Pleno municipal', 'la ley hipotecaria'],
      0,
      'III.3 · Derechos, deberes e incompatibilidades',
      'El personal laboral publico queda sujeto ademas al regimen especifico de incompatibilidades del sector publico.',
      24,
    ),
  ],
});

updateTema(25, {
  removeIds: ['topup-25-01', 'topup-25-02', 'topup-25-03', 'topup-25-05', 'topup-25-14'],
  add: [
    q(
      'refine-25-01',
      'La libertad sindical en el empleo publico comprende, entre otras facultades, la de:',
      ['fundar sindicatos y afiliarse al de su eleccion', 'suspender unilateralmente cualquier procedimiento administrativo', 'ocupar sin limite cualquier dependencia municipal', 'eximir de cumplimiento de jornada a toda la plantilla'],
      0,
      'III.4 · Derecho de sindicacion',
      'La libertad sindical incluye fundacion, afiliacion, actividad sindical y representacion en los terminos legales.',
      25,
    ),
    q(
      'refine-25-02',
      'La negociacion colectiva de los empleados publicos se desarrolla dentro del marco fijado por:',
      ['el TREBEP y la normativa aplicable', 'solo el Estatuto de los Trabajadores comun', 'exclusivamente el reglamento organico municipal', 'unicamente los estatutos sindicales'],
      0,
      'III.4 · Negociacion colectiva',
      'La negociacion del personal publico tiene un regimen especifico presidido por el TREBEP.',
      25,
    ),
    q(
      'refine-25-03',
      'En los servicios esenciales para la comunidad, el ejercicio del derecho de huelga puede condicionarse mediante:',
      ['servicios minimos proporcionados y motivados', 'prohibicion automatica e incondicionada de la huelga', 'sustitucion general de huelguistas por personal externo sin limites', 'negacion absoluta de cualquier derecho colectivo'],
      0,
      'III.4 · Derecho de huelga',
      'La fijacion de servicios minimos debe respetar el derecho de huelga y el principio de proporcionalidad.',
      25,
    ),
    q(
      'refine-25-04',
      'La regla general del regimen de incompatibilidades del personal al servicio del sector publico es que:',
      ['no puede compatibilizarse un segundo puesto o actividad salvo en los supuestos legalmente previstos', 'toda actividad privada es libre sin autorizacion', 'pueden acumularse dos puestos publicos por mera conveniencia', 'la compatibilidad nunca requiere reconocimiento previo'],
      0,
      'III.4 · Regimen de incompatibilidades',
      'La compatibilidad es excepcional y necesita cobertura y, en su caso, reconocimiento conforme a la ley.',
      25,
    ),
    q(
      'refine-25-05',
      'Una actividad privada relacionada con expedientes que tramite el propio empleado publico puede ser incompatible por comprometer la:',
      ['imparcialidad e independencia', 'publicidad institucional', 'prorroga presupuestaria', 'fe publica local'],
      0,
      'III.4 · Regimen de incompatibilidades',
      'La finalidad central del regimen es evitar conflictos de intereses y preservar la imparcialidad.',
      25,
    ),
  ],
});

updateTema(28, {
  removeIds: ['topup-28-01', 'topup-28-02', 'topup-28-03', 'topup-28-04', 'topup-28-05'],
  add: [
    q(
      'refine-28-01',
      'El presupuesto general de la entidad local integra, entre otros documentos, el presupuesto de la propia entidad y el de:',
      ['sus organismos autonomos', 'solo sus grupos politicos municipales', 'las comunidades de propietarios del municipio', 'los partidos concurrentes a elecciones locales'],
      0,
      'IV.2 · Presupuesto general',
      'El presupuesto general incorpora los presupuestos de la entidad y de sus entes dependientes en los terminos legales.',
      28,
    ),
    q(
      'refine-28-02',
      'El credito extraordinario procede cuando:',
      ['debe realizarse un gasto especifico que no puede demorarse y no existe credito para el', 'hay credito insuficiente en una aplicacion ya existente', 'se redistribuyen saldos sin alterar el presupuesto total', 'se prorroga automaticamente el presupuesto'],
      0,
      'IV.2 · Modificaciones presupuestarias',
      'El credito extraordinario crea credito para un gasto no previsto, mientras que el suplemento refuerza uno insuficiente.',
      28,
    ),
    q(
      'refine-28-03',
      'El suplemento de credito se utiliza cuando:',
      ['el credito existente resulta insuficiente y no puede demorarse el gasto', 'no existe ninguna aplicacion presupuestaria previa', 'se pretende desafectar un bien patrimonial', 'se tramita una ordenanza fiscal'],
      0,
      'IV.2 · Modificaciones presupuestarias',
      'El suplemento no crea una partida completamente nueva, sino que amplía una insuficiente.',
      28,
    ),
    q(
      'refine-28-04',
      'Las transferencias de credito se caracterizan porque:',
      ['redistribuyen credito entre aplicaciones sin aumentar el importe global del presupuesto', 'incrementan necesariamente el total de gasto aprobado', 'solo pueden aplicarse a ingresos patrimoniales', 'sustituyen siempre a los anticipos de tesoreria'],
      0,
      'IV.2 · Transferencias de credito',
      'La transferencia mueve credito entre partidas, pero no incrementa el volumen total del presupuesto.',
      28,
    ),
    q(
      'refine-28-05',
      'La incorporacion de creditos permite, en los supuestos legalmente previstos:',
      ['trasladar al nuevo presupuesto determinados remanentes del ejercicio anterior', 'anular definitivamente cualquier saldo pendiente', 'convertir todos los ingresos en operaciones financieras', 'evitar la aprobacion del presupuesto anual'],
      0,
      'IV.2 · Incorporaciones de credito',
      'La incorporacion permite arrastrar determinados creditos del ejercicio anterior cuando concurren los requisitos legales.',
      28,
    ),
  ],
});

updateTema(29, {
  removeIds: ['topup-29-01', 'topup-29-02', 'topup-29-03', 'topup-29-04', 'topup-29-07'],
  add: [
    q(
      'refine-29-01',
      'La fase A del gasto expresa el acto por el que se:',
      ['autoriza la realizacion de un gasto determinado', 'reconoce la obligacion ya nacida', 'ordena materialmente el pago al acreedor', 'fiscaliza externamente la cuenta general'],
      0,
      'IV.3 · Fases del gasto',
      'La autorizacion es la primera decision por la que se aprueba la realizacion del gasto.',
      29,
    ),
    q(
      'refine-29-02',
      'La fase D del procedimiento de gasto implica:',
      ['el compromiso o disposicion del gasto frente a un tercero determinado', 'la simple existencia de credito en presupuesto', 'la ordenacion formal del pago', 'la formacion de la cuenta general'],
      0,
      'IV.3 · Fases del gasto',
      'La disposicion compromete el gasto y vincula a la Administracion frente al tercero.',
      29,
    ),
    q(
      'refine-29-03',
      'El reconocimiento de la obligacion supone:',
      ['declarar que existe un credito exigible contra la entidad una vez acreditada la prestacion', 'autorizar una modificacion presupuestaria', 'aprobar inicialmente la ordenanza fiscal', 'resolver un reparo del control externo'],
      0,
      'IV.3 · Fases del gasto',
      'La fase O acredita y reconoce la deuda a favor del acreedor.',
      29,
    ),
    q(
      'refine-29-04',
      'La ordenacion del pago consiste en:',
      ['expedir la orden para satisfacer obligaciones ya reconocidas', 'crear credito extraordinario', 'aprobar el presupuesto general', 'liquidar tributos municipales'],
      0,
      'IV.3 · Ordenacion del pago',
      'La ordenacion del pago es posterior al reconocimiento de la obligacion y antecede al pago material.',
      29,
    ),
    q(
      'refine-29-05',
      'Los anticipos de caja fija se emplean principalmente para:',
      ['gastos periodicos o repetitivos de pequena cuantia que requieren agilidad', 'cualquier subvencion de capital plurianual', 'modificar el presupuesto por falta de credito', 'ordenar pagos sin justificante alguno'],
      0,
      'IV.3 · Procedimientos especiales de pago',
      'Son un mecanismo de agilizacion para gastos menores de caracter repetitivo.',
      29,
    ),
  ],
});

updateTema(30, {
  removeIds: ['topup-30-01', 'topup-30-04', 'topup-30-08', 'topup-30-12', 'topup-30-14'],
  add: [
    q(
      'refine-30-01',
      'La funcion interventora constituye una modalidad de control interno dirigida a fiscalizar:',
      ['los actos con contenido economico antes o en el momento procedente de su aprobacion', 'unicamente la publicidad institucional del Ayuntamiento', 'solo la actividad de los grupos politicos municipales', 'los delitos penales cometidos por particulares'],
      0,
      'IV.4 · Funcion interventora',
      'La funcion interventora verifica la legalidad presupuestaria y economica de los actos sometidos a fiscalizacion.',
      30,
    ),
    q(
      'refine-30-02',
      'Si la Intervencion formula un reparo suspensivo, la tramitacion del expediente no debe continuar hasta:',
      ['su solucion o, en su caso, el levantamiento conforme al procedimiento legal', 'que finalice el ejercicio presupuestario', 'que se publique la Cuenta General', 'que intervenga el Tribunal Supremo'],
      0,
      'IV.4 · Reparo',
      'El reparo suspensivo impide proseguir hasta que se solvente o se levante por el cauce legalmente previsto.',
      30,
    ),
    q(
      'refine-30-03',
      'El control financiero se orienta principalmente a comprobar:',
      ['el funcionamiento economico-financiero de los servicios y entes desde la perspectiva de legalidad, eficacia y eficiencia', 'solo la asistencia de concejales a los plenos', 'la regularidad de los procesos electorales', 'exclusivamente el contenido de los bandos de alcaldia'],
      0,
      'IV.4 · Control financiero',
      'El control financiero tiene un enfoque mas amplio y sistemico que la funcion interventora.',
      30,
    ),
    q(
      'refine-30-04',
      'La Comision Especial de Cuentas interviene en relacion con:',
      ['el examen e informe previo de la Cuenta General', 'la aprobacion de ordenanzas fiscales', 'la tramitacion de recursos de reposicion', 'la designacion de delegados de prevencion'],
      0,
      'IV.4 · Cuenta General y control externo',
      'La Comision Especial de Cuentas cumple un papel preceptivo en la tramitacion de la Cuenta General.',
      30,
    ),
    q(
      'refine-30-05',
      'En Castilla y Leon, el organo de control externo especifico sobre el sector publico autonómico y local es el:',
      ['Consejo de Cuentas de Castilla y Leon', 'Consejo de Estado', 'Tribunal Economico-Administrativo Municipal', 'Instituto Nacional de Estadistica'],
      0,
      'IV.4 · Control externo',
      'El Consejo de Cuentas es el organo autonómico de fiscalizacion externa en Castilla y Leon.',
      30,
    ),
  ],
});

updateTema(35, {
  removeIds: ['topup-35-01', 'topup-35-03', 'topup-35-04', 'topup-35-06'],
  add: [
    q(
      'refine-35-01',
      'Las oficinas de asistencia en materia de registros cumplen una funcion que va mas alla del mero asiento registral porque tambien pueden:',
      ['asistir en el uso de medios electronicos y en la presentacion de solicitudes', 'resolver recursos contencioso-administrativos', 'sustituir al organo instructor del procedimiento', 'aprobar el presupuesto municipal'],
      0,
      'V.4 · Funciones de las oficinas de asistencia',
      'Su papel incluye asistencia a la ciudadania para relacionarse con la Administracion, especialmente por medios electronicos.',
      35,
    ),
    q(
      'refine-35-02',
      'Si una persona fisica no obligada a relacionarse electronicamente acude sin medios tecnicos, la oficina de asistencia puede:',
      ['prestar ayuda para presentar electronicamente la solicitud o documentacion', 'rechazar sin mas la presentacion', 'obligarle a contratar un gestor privado', 'resolver directamente el fondo del expediente'],
      0,
      'V.4 · Asistencia a la ciudadania',
      'La oficina esta precisamente para facilitar la relacion electronica a quien no dispone de medios o conocimientos suficientes.',
      35,
    ),
    q(
      'refine-35-03',
      'La constancia exacta de fecha y hora en el asiento registral resulta especialmente relevante por sus efectos sobre:',
      ['plazos, prelacion y acreditacion de la presentacion', 'clasificacion presupuestaria del gasto', 'competencia del Tribunal de Cuentas', 'nombramiento de tenientes de alcalde'],
      0,
      'V.4 · Funcionamiento registral',
      'Fecha y hora son datos nucleares para acreditar la presentacion y sus efectos procedimentales.',
      35,
    ),
    q(
      'refine-35-04',
      'Una copia autentica se diferencia de una copia simple porque:',
      ['acredita la identidad y fidelidad respecto del original en los terminos legalmente previstos', 'siempre sustituye al original a todos los efectos sin limite', 'solo puede existir en papel y nunca en formato electronico', 'no requiere actuacion administrativa alguna para su expedicion'],
      0,
      'V.4 · Copias y digitalizacion',
      'La copia autentica incorpora un plus de garantia juridica sobre su correspondencia con el original.',
      35,
    ),
  ],
});
