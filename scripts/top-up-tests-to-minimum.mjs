import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('.');
const testsDir = path.join(rootDir, 'data', 'tests');
const publicTestsDir = path.join(rootDir, 'public', 'data', 'tests');
const legacyDir = path.join(rootDir, 'data', 'tests-legacy');
const programaDir = path.join(rootDir, 'src', 'content', 'programa');
const MIN_QUESTIONS = 20;

function readJson(filePath, fallback = []) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
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
    };
  });
}

function loadBank() {
  const bank = new Map();
  for (let tema = 1; tema <= 42; tema += 1) {
    const file = path.join(testsDir, `tema-${String(tema).padStart(2, '0')}.json`);
    bank.set(tema, readJson(file, []));
  }
  return bank;
}

function normalize(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function q(id, pregunta, opciones, correcta, explicacion, referencia) {
  return { id, pregunta, opciones, correcta, explicacion, referencia };
}

function addQuestions(bank, tema, questions) {
  const target = bank.get(tema) ?? [];
  const knownIds = new Set(target.map((item) => item.id));
  const knownTexts = new Set(target.map((item) => normalize(item.pregunta)));

  for (const question of questions) {
    if (knownIds.has(question.id) || knownTexts.has(normalize(question.pregunta))) continue;
    target.push({ ...question, tema });
    knownIds.add(question.id);
    knownTexts.add(normalize(question.pregunta));
  }

  bank.set(tema, target);
}

function cloneLegacyQuestions(sourceTema, ids, targetTema, referencePrefix = 'Banco legado') {
  const source = readJson(path.join(legacyDir, `tema-${String(sourceTema).padStart(2, '0')}.json`), []);
  const selected = source
    .filter((item) => ids.includes(item.id))
    .map((item) => ({
      ...item,
      referencia: `${referencePrefix} · ${item.referencia}`,
    }));

  return { targetTema, selected };
}

function buildIndex(topics, bank) {
  const index = [];
  for (const topic of topics) {
    const questions = (bank.get(topic.seq) ?? []).sort((a, b) => String(a.id).localeCompare(String(b.id), 'es'));
    const file = path.join(testsDir, `tema-${String(topic.seq).padStart(2, '0')}.json`);
    const publicFile = path.join(publicTestsDir, `tema-${String(topic.seq).padStart(2, '0')}.json`);
    writeJson(file, questions);
    writeJson(publicFile, questions);
    index.push({
      tema: topic.seq,
      archivo: `tema-${String(topic.seq).padStart(2, '0')}.json`,
      preguntas: questions.length,
      titulo: `Tema ${topic.code} · ${topic.titulo}`,
    });
  }
  writeJson(path.join(testsDir, 'index.json'), index);
  writeJson(path.join(publicTestsDir, 'index.json'), index);
  return index;
}

function ensureMinimum(index) {
  const missing = index.filter((item) => item.preguntas < MIN_QUESTIONS);
  if (missing.length) {
    const summary = missing.map((item) => `${item.tema}: ${item.preguntas}`).join(', ');
    throw new Error(`Temas por debajo del minimo de ${MIN_QUESTIONS}: ${summary}`);
  }
}

function main() {
  const topics = loadOfficialTopics();
  const bank = loadBank();

  const legacyImports = [
    cloneLegacyQuestions(18, ['t18-p001', 't18-p002', 't18-p003'], 15),
    cloneLegacyQuestions(46, ['t46-p012', 't46-p013', 't46-p025', 't46-p029', 't46-p032', 't46-p033'], 23),
    cloneLegacyQuestions(29, ['t29-p011', 't29-p012', 't29-p013', 't29-p014', 't29-p015'], 24),
    cloneLegacyQuestions(43, ['t43-p013', 't43-p014', 't43-p015', 't43-p018', 't43-p019', 't43-p020'], 37),
  ];

  for (const item of legacyImports) addQuestions(bank, item.targetTema, item.selected);

  addQuestions(bank, 3, [
    q('topup-03-01', 'La iniciativa del proceso autonomico por la via del articulo 143 CE corresponde, entre otros, a:', ['las Diputaciones interesadas y a las dos terceras partes de los municipios afectados', 'solo al Gobierno de la Nacion', 'exclusivamente al Senado', 'a cualquier Ayuntamiento por mayoria simple'], 0, 'La via ordinaria del art. 143 CE exige iniciativa provincial o insular y una mayoria reforzada de municipios.', 'I.3 · Proceso de constitucion de las comunidades autonomas'),
    q('topup-03-02', 'Las materias que el Estado puede asumir en exclusiva se enumeran de forma principal en el:', ['articulo 137 CE', 'articulo 148 CE', 'articulo 149 CE', 'articulo 150 CE'], 2, 'El art. 149 CE recoge la lista principal de competencias exclusivas estatales.', 'I.3 · Distribucion de competencias'),
  ]);

  addQuestions(bank, 4, [
    q('topup-04-01', 'La Administracion publica sirve con objetividad los intereses generales y actua de acuerdo con los principios del articulo 103 CE, entre ellos:', ['jerarquia, descentralizacion y coordinacion', 'discrecionalidad absoluta y reserva de actuacion', 'confidencialidad general y autotutela penal', 'libre designacion universal de organos'], 0, 'El art. 103 CE menciona eficacia, jerarquia, descentralizacion, desconcentracion y coordinacion, con sometimiento pleno a la ley y al Derecho.', 'I.4 · Administracion publica en el ordenamiento juridico'),
  ]);

  addQuestions(bank, 6, [
    q('topup-06-01', 'Los elementos esenciales del municipio son:', ['territorio, poblacion y organizacion', 'territorio, Senado y Gobierno', 'provincia, comarca y diputacion', 'vecindad, nacionalidad y Parlamento'], 0, 'El municipio se estructura sobre termino municipal, poblacion y organizacion.', 'I.6 · Concepto y elementos del municipio'),
    q('topup-06-02', 'El termino municipal es:', ['el territorio en que el Ayuntamiento ejerce sus competencias', 'la relacion nominal de concejales', 'el conjunto de tributos locales', 'el reglamento organico del Ayuntamiento'], 0, 'El termino municipal delimita el ambito territorial de actuacion del Ayuntamiento.', 'I.6 · Termino municipal'),
    q('topup-06-03', 'Cada municipio pertenece:', ['a una sola provincia', 'a dos provincias si lo acuerda el Pleno', 'a una comunidad de propietarios', 'a la Junta de Gobierno Local'], 0, 'La regla general es que cada municipio se integra en una sola provincia.', 'I.6 · Termino municipal'),
    q('topup-06-04', 'La condicion de vecino del municipio se adquiere:', ['cuando se inscribe en el padron municipal', 'al pagar el IBI', 'al cumplir 18 anos', 'al votar en elecciones generales'], 0, 'La inscripcion padronal atribuye la condicion de vecino.', 'I.6 · Poblacion y vecindad'),
    q('topup-06-05', 'El padron municipal es:', ['un registro administrativo', 'un censo exclusivamente electoral', 'una base de datos tributaria', 'un archivo historico'], 0, 'El padron es el registro administrativo de los vecinos del municipio.', 'I.6 · Padron municipal'),
    q('topup-06-06', 'Los datos padronales prueban:', ['la residencia y el domicilio habitual', 'la titularidad de una vivienda', 'la situacion laboral', 'la nacionalidad espanola'], 0, 'La ley atribuye a los datos padronales valor probatorio de residencia y domicilio habitual.', 'I.6 · Padron municipal'),
    q('topup-06-07', 'Quien resida en varios municipios debe empadronarse en aquel donde:', ['viva mas tiempo al ano', 'tenga mas familiares', 'pague menos impuestos', 'quiera el alcalde'], 0, 'La residencia habitual se fija en el municipio donde se vive mas tiempo.', 'I.6 · Regla de inscripcion padronal'),
    q('topup-06-08', 'La formacion y custodia del padron corresponde principalmente a:', ['el Ayuntamiento', 'el Senado', 'la comunidad de vecinos', 'la Diputacion Permanente'], 0, 'La gestion padronal es una competencia municipal, con coordinacion del INE.', 'I.6 · Gestion del padron'),
    q('topup-06-09', 'El INE, respecto del padron municipal, desarrolla funciones de:', ['coordinacion', 'recaudacion ejecutiva', 'control disciplinario', 'aprobacion de ordenanzas'], 0, 'El Instituto Nacional de Estadistica coordina los padrones municipales.', 'I.6 · Coordinacion padronal'),
    q('topup-06-10', 'La alteracion de terminos municipales puede producirse, entre otros supuestos, por:', ['fusion o segregacion', 'mocion de censura', 'recurso de alzada', 'decreto-ley municipal'], 0, 'La legislacion local contempla fusion, incorporacion, segregacion y modificacion de limites.', 'I.6 · Alteraciones del termino municipal'),
    q('topup-06-11', 'La creacion de un nuevo municipio exige, entre otros requisitos:', ['recursos suficientes para prestar servicios obligatorios', 'autorizacion del Congreso por ley organica en todo caso', 'la unanimidad de todos los vecinos de la provincia', 'que sea capital de comunidad autonoma'], 0, 'La viabilidad del nuevo municipio exige recursos suficientes y justificacion de interes publico.', 'I.6 · Creacion de municipios'),
    q('topup-06-12', 'El certificado de empadronamiento tiene como funcion principal:', ['acreditar formalmente residencia o domicilio', 'aprobar la inscripcion de oficio en el censo electoral', 'habilitar para el pago de tasas', 'sustituir al DNI'], 0, 'El certificado sirve como acreditacion formal de la residencia o domicilio padronal.', 'I.6 · Certificados y volantes de empadronamiento'),
    q('topup-06-13', 'El volante de empadronamiento se utiliza normalmente para:', ['informacion o acreditacion simple de datos padronales', 'declarar la ruina urbanistica', 'interponer recursos contenciosos', 'nombrar tenientes de alcalde'], 0, 'El volante tiene una funcion informativa o de acreditacion simple.', 'I.6 · Certificados y volantes de empadronamiento'),
    q('topup-06-14', 'La inscripcion padronal de personas extranjeras:', ['no prueba por si sola la residencia legal en Espana', 'equivale siempre a una autorizacion de residencia', 'solo es posible para ciudadanos de la UE', 'requiere sentencia judicial previa'], 0, 'El empadronamiento acredita residencia habitual a efectos administrativos, no regulariza por si mismo la situacion de extranjeria.', 'I.6 · Padron y personas extranjeras'),
    q('topup-06-15', 'La organizacion municipal constituye uno de los elementos del municipio junto con:', ['territorio y poblacion', 'Parlamento y Senado', 'comarcas y cabildos', 'tratados y reglamentos europeos'], 0, 'Los tres elementos clasicos del municipio son territorio, poblacion y organizacion.', 'I.6 · Elementos del municipio'),
  ]);

  addQuestions(bank, 7, [
    q('topup-07-01', 'En Burgos, el Pleno es principalmente el organo de:', ['debate, control y aprobacion de grandes decisiones', 'gestion diaria de cobros y pagos', 'inspeccion de obras privadas exclusivamente', 'recaudacion ejecutiva de multas'], 0, 'En municipios de gran poblacion el Pleno mantiene una funcion central de control politico y aprobacion normativa.', 'I.7 · El Pleno'),
    q('topup-07-02', 'La aprobacion de ordenanzas y reglamentos municipales corresponde tipicamente al:', ['Pleno', 'teniente de alcalde de mayor edad', 'Interventor General', 'Organo de Gestion Tributaria'], 0, 'La funcion normativa local se reserva con caracter general al Pleno.', 'I.7 · Competencias del Pleno'),
    q('topup-07-03', 'El alcalde de Burgos ostenta la maxima representacion del:', ['municipio', 'Consejo de Cuentas', 'Tribunal Supremo', 'Consejo Europeo'], 0, 'El alcalde es presidente de la corporacion y maxima representacion municipal.', 'I.7 · El alcalde'),
    q('topup-07-04', 'Los tenientes de alcalde son nombrados por el alcalde entre:', ['los miembros de la Junta de Gobierno Local', 'los funcionarios habilitados nacionales', 'los vecinos empadronados', 'los interventores accidentales'], 0, 'La designacion de tenientes de alcalde se efectua entre miembros de la Junta de Gobierno Local.', 'I.7 · Tenientes de alcalde'),
    q('topup-07-05', 'La funcion minima necesaria de los tenientes de alcalde es:', ['sustituir al alcalde por orden de nombramiento', 'presidir siempre el Pleno ordinario', 'aprobar definitivamente el presupuesto', 'resolver reclamaciones economico-administrativas'], 0, 'Su funcion esencial es la sustitucion del alcalde en casos legalmente previstos.', 'I.7 · Tenientes de alcalde'),
    q('topup-07-06', 'La Junta de Gobierno Local en un municipio de gran poblacion tiene un peso especialmente:', ['ejecutivo y administrativo', 'meramente ceremonial', 'judicial', 'electoral'], 0, 'En gran poblacion la Junta de Gobierno Local asume un papel ejecutivo muy intenso.', 'I.7 · Junta de Gobierno Local'),
    q('topup-07-07', 'Las sesiones de la Junta de Gobierno Local tienen el mismo caracter publico que las del Pleno?', ['No', 'Si, siempre', 'Solo en agosto', 'Solo si lo autoriza el Congreso'], 0, 'No tienen el mismo regimen de publicidad que las sesiones plenarias.', 'I.7 · Junta de Gobierno Local'),
    q('topup-07-08', 'La Secretaria General garantiza principalmente la fe publica y el:', ['asesoramiento legal preceptivo', 'control financiero permanente', 'cobro en via ejecutiva', 'planeamiento urbanistico'], 0, 'La funcion secretarial reservada combina fe publica y asesoramiento legal.', 'I.7 · Secretaria General'),
    q('topup-07-09', 'Entre las funciones tipicas de la Secretaria General se encuentra:', ['certificar acuerdos y custodiar actas', 'aprobar el padrón fiscal del IBI', 'emitir licencias urbanisticas en todo caso', 'dirigir la tesoreria municipal'], 0, 'La fe publica incluye actas, certificaciones y regularidad formal de sesiones y acuerdos.', 'I.7 · Secretaria General'),
    q('topup-07-10', 'La Intervencion General ejerce el control interno de la gestion:', ['economico-financiera y presupuestaria', 'electoral y parlamentaria', 'jurisdiccional penal', 'sindical'], 0, 'La intervencion local controla legalidad economica y presupuestaria.', 'I.7 · Intervencion General'),
    q('topup-07-11', 'La tecnica de control que verifica legalidad de actos con contenido economico antes de producir efectos es la:', ['funcion interventora', 'publicidad activa', 'potestad reglamentaria', 'accion popular'], 0, 'La funcion interventora fiscaliza actos de contenido economico.', 'I.7 · Intervencion General'),
    q('topup-07-12', 'El Organo de Gestion Tributaria y Tesoreria se ocupa principalmente de:', ['ingresos, recaudacion y gestion de fondos', 'nombramientos judiciales', 'disciplina urbanistica exclusiva', 'negociacion colectiva'], 0, 'Gestion tributaria y tesoreria cubren aplicacion de tributos, recaudacion y liquidez.', 'I.7 · Organo de Gestion Tributaria y Tesoreria'),
    q('topup-07-13', 'La tesoreria municipal se relaciona directamente con:', ['cobros, pagos y liquidez', 'mociones de censura', 'aprobacion de leyes organicas', 'juramento del Rey'], 0, 'La tesoreria administra fondos, cuentas y planificacion de liquidez.', 'I.7 · Organo de Gestion Tributaria y Tesoreria'),
    q('topup-07-14', 'El Tribunal Economico-Administrativo Municipal de Burgos se relaciona especialmente con:', ['la revision de actos tributarios municipales', 'la instruccion de delitos', 'la aprobacion del Reglamento Organico', 'la seleccion de personal laboral'], 0, 'Es el organo especializado para reclamaciones economico-administrativas municipales.', 'I.7 · Relacion con el TEAM'),
  ]);

  addQuestions(bank, 14, [
    q('topup-14-01', 'La avocacion consiste en que:', ['un organo superior asume para si el conocimiento de un asunto atribuido a uno inferior', 'un organo cede definitivamente su competencia normativa', 'el secretario sustituye al alcalde', 'el ciudadano delega su firma en la Administracion'], 0, 'La avocacion permite al organo superior atraer un asunto concreto por razones justificadas.', 'II.5 · Tecnicas de alteracion del ejercicio de competencias'),
    q('topup-14-02', 'La delegacion de firma supone:', ['autorizar a otro organo o titular para firmar actos sin alterar la competencia', 'trasladar la titularidad de la competencia a otra Administracion', 'renunciar al ejercicio de toda potestad', 'encomendar la gestion material de un servicio a un particular'], 0, 'La delegacion de firma no cambia la titularidad competencial, solo la firma formal.', 'II.5 · Delegacion de firma'),
  ]);

  addQuestions(bank, 15, [
    q('topup-15-01', 'La responsabilidad patrimonial de la Administracion tiene caracter:', ['objetivo y directo', 'penal y subsidiario', 'electoral y automatico', 'graciable y eventual'], 0, 'La responsabilidad patrimonial responde a danos antijuridicos causados por el funcionamiento de los servicios publicos.', 'II.6 · Caracteres de la responsabilidad administrativa'),
    q('topup-15-02', 'Para que exista responsabilidad patrimonial, el dano debe ser, entre otras notas:', ['efectivo, evaluable economicamente e individualizado', 'solo moral y simbolico', 'siempre colectivo', 'puramente hipotetico'], 0, 'La lesion indemnizable exige efectividad, evaluacion economica e individualizacion.', 'II.6 · Presupuestos de la responsabilidad'),
    q('topup-15-03', 'La accion de regreso permite a la Administracion reclamar al empleado publico cuando haya actuado con:', ['dolo, culpa o negligencia grave', 'simple error material inocuo', 'discrepancia politica', 'mera opinion juridica'], 0, 'La accion de regreso exige una conducta especialmente grave del personal responsable.', 'II.6 · Responsabilidad de autoridades y personal'),
  ]);

  addQuestions(bank, 17, [
    q('topup-17-01', 'La potestad sancionadora administrativa permite a la Administracion:', ['imponer sanciones por infracciones administrativas', 'aprobar leyes organicas', 'dictar sentencias penales', 'nombrar jueces'], 0, 'Es la potestad de reaccion frente a conductas tipificadas como infraccion administrativa.', 'II.8 · Concepto de potestad sancionadora'),
    q('topup-17-02', 'El principio de legalidad sancionadora exige:', ['cobertura normativa suficiente para infracciones y sanciones', 'libertad total del instructor para fijar la sancion', 'que toda sancion se imponga por decreto-ley municipal', 'que siempre intervenga un juez penal'], 0, 'No cabe sancionar sin cobertura legal suficiente.', 'II.8 · Principio de legalidad'),
    q('topup-17-03', 'El principio de tipicidad implica que:', ['la conducta debe encajar en una infraccion previamente definida', 'puede sancionarse por analogia amplia', 'la Administracion crea infracciones caso por caso', 'las ordenanzas sustituyen siempre a la ley'], 0, 'La tipicidad prohíbe sancionar conductas no descritas normativamente.', 'II.8 · Principio de tipicidad'),
    q('topup-17-04', 'La analogia en materia sancionadora:', ['no puede utilizarse para sancionar', 'es obligatoria cuando falte ordenanza', 'solo vale en materia tributaria', 'sustituye al principio de legalidad'], 0, 'No cabe analogia desfavorable al presunto infractor.', 'II.8 · Principio de tipicidad'),
    q('topup-17-05', 'La retroactividad favorable en materia sancionadora permite aplicar:', ['la disposicion posterior mas beneficiosa', 'siempre la norma mas antigua', 'solo la ordenanza municipal vigente', 'unicamente la norma mas gravosa'], 0, 'La ley admite retroactividad de la norma sancionadora mas favorable.', 'II.8 · Irretroactividad y retroactividad favorable'),
    q('topup-17-06', 'El principio de responsabilidad en materia sancionadora se dirige a:', ['las personas fisicas o juridicas responsables de la infraccion', 'cualquier vecino del municipio', 'solo a autoridades politicas', 'exclusivamente a funcionarios de carrera'], 0, 'La responsabilidad exige identificar al sujeto responsable conforme a la norma.', 'II.8 · Principio de responsabilidad'),
    q('topup-17-07', 'El principio non bis in idem impide:', ['sancionar dos veces por los mismos hechos, sujeto y fundamento', 'tramitar audiencia al interesado', 'notificar la resolucion sancionadora', 'usar medios electronicos en el procedimiento'], 0, 'No puede haber doble sancion por identidad de sujeto, hecho y fundamento.', 'II.8 · Principios del ejercicio'),
    q('topup-17-08', 'La proporcionalidad sancionadora exige que la sancion:', ['guarde adecuada relacion con la gravedad de la infraccion', 'sea siempre la maxima posible', 'sea siempre economica', 'se imponga sin motivacion'], 0, 'La sancion debe graduarse razonablemente segun la infraccion y circunstancias.', 'II.8 · Principio de proporcionalidad'),
    q('topup-17-09', 'La presuncion de inocencia en el procedimiento sancionador implica que:', ['la Administracion debe acreditar los hechos', 'el interesado debe probar siempre su inocencia', 'la denuncia vale como prueba definitiva', 'la multa puede imponerse sin expediente'], 0, 'Corresponde a la Administracion probar los hechos constitutivos de la infraccion.', 'II.8 · Garantias del procedimiento sancionador'),
    q('topup-17-10', 'Una medida provisional en un procedimiento sancionador sirve para:', ['asegurar la eficacia de la resolucion final', 'sustituir definitivamente a la sancion', 'eliminar el tramite de audiencia', 'evitar toda prueba'], 0, 'Las medidas provisionales protegen el interes general y la eficacia del procedimiento.', 'II.8 · Medidas provisionales'),
    q('topup-17-11', 'La iniciacion del procedimiento sancionador debe identificar al menos:', ['hechos, posible responsable y sanciones que pudieran corresponder', 'solo el nombre del instructor', 'solo el organo judicial competente', 'el presupuesto municipal afectado'], 0, 'La incoacion debe concretar los elementos basicos de la imputacion.', 'II.8 · Iniciacion del procedimiento'),
    q('topup-17-12', 'En el procedimiento sancionador, el tramite de audiencia permite al interesado:', ['formular alegaciones y proponer prueba', 'aprobar la ordenanza aplicable', 'resolver el expediente', 'suspender la ley'], 0, 'La audiencia garantiza contradiccion y defensa del interesado.', 'II.8 · Audiencia y prueba'),
    q('topup-17-13', 'La resolucion sancionadora debe ser:', ['motivada y congruente con los hechos probados', 'verbal y sin firma', 'siempre secreta', 'dictada por el denunciante'], 0, 'La resolucion final ha de motivar hechos, fundamento y sancion.', 'II.8 · Resolucion'),
    q('topup-17-14', 'La potestad sancionadora local se ejerce especialmente en materias como:', ['convivencia, ruidos, residuos o uso de via publica', 'sucesion a la Corona', 'jurisdiccion constitucional', 'tratados internacionales'], 0, 'Las entidades locales sancionan dentro de sus competencias y del marco legal.', 'II.8 · Potestad sancionadora local'),
    q('topup-17-15', 'Las ordenanzas locales pueden tipificar infracciones y sanciones:', ['dentro de los limites legales', 'sin necesidad de cobertura legal alguna', 'solo por acuerdo del alcalde', 'incluso con penas privativas de libertad'], 0, 'La potestad ordenancista local debe respetar la ley y la reserva de ley sancionadora.', 'II.8 · Potestad sancionadora local'),
    q('topup-17-16', 'La separacion entre fase instructora y resolutoria busca garantizar:', ['imparcialidad del procedimiento', 'mayor recaudacion', 'publicidad activa', 'sustitucion del tramite de prueba'], 0, 'La separacion funcional refuerza la objetividad en la decision sancionadora.', 'II.8 · Garantias procedimentales'),
    q('topup-17-17', 'La sancion administrativa puede ser pecuniaria o no pecuniaria, pero nunca:', ['privativa de libertad', 'motivada', 'proporcional', 'susceptible de recurso'], 0, 'La Administracion no puede imponer penas privativas de libertad.', 'II.8 · Medidas sancionadoras'),
    q('topup-17-18', 'En el ambito local, el cumplimiento correcto del procedimiento sancionador exige especial cuidado en:', ['hechos, prueba, audiencia, motivacion y notificacion', 'solo la firma del alcalde', 'el uso del padron municipal', 'la publicacion en el BOE de toda resolucion'], 0, 'La tramitacion sancionadora local requiere rigor probatorio y formal.', 'II.8 · Especialidades del procedimiento sancionador'),
  ]);

  addQuestions(bank, 18, [
    q('topup-18-01', 'Los bienes patrimoniales de las entidades locales son aquellos que:', ['no estan afectados a uso o servicio publico', 'siempre son comunales', 'nunca pueden enajenarse', 'se destinan exclusivamente a parques y calles'], 0, 'Los bienes patrimoniales carecen de la afectacion propia del dominio publico.', 'II.9 · Bienes patrimoniales locales'),
    q('topup-18-02', 'La afectacion supone:', ['atribuir un bien a un uso o servicio publico', 'vender un inmueble municipal', 'inscribir un vehiculo en el padron', 'delegar competencias en una mancomunidad'], 0, 'La afectacion incorpora un bien al dominio publico por su destino.', 'II.9 · Afectacion y desafectacion'),
    q('topup-18-03', 'La desafectacion implica:', ['que el bien deja de estar destinado a uso o servicio publico', 'la cesion gratuita de todos los bienes municipales', 'la aprobacion del presupuesto', 'la extincion del termino municipal'], 0, 'La desafectacion permite pasar del dominio publico a la categoria patrimonial.', 'II.9 · Afectacion y desafectacion'),
    q('topup-18-04', 'El inventario de bienes de la entidad local sirve para:', ['identificar y controlar su patrimonio', 'aprobar sanciones urbanisticas', 'nombrar funcionarios interinos', 'tramitar recursos contenciosos'], 0, 'El inventario es un instrumento basico de conocimiento y gestion patrimonial.', 'II.9 · Inventario de bienes'),
    q('topup-18-05', 'Los bienes de dominio publico se caracterizan, entre otras notas, por ser:', ['inalienables, imprescriptibles e inembargables', 'libremente permutables sin expediente', 'susceptibles de embargo ordinario', 'siempre cedibles a titulo oneroso'], 0, 'Son las notas clasicas del dominio publico local.', 'II.9 · Bienes de dominio publico'),
  ]);

  addQuestions(bank, 19, [
    q('topup-19-01', 'La actividad administrativa de policia o limitacion se manifiesta mediante:', ['licencias, inspecciones y ordenes', 'subvenciones y premios exclusivamente', 'sentencias judiciales', 'elecciones sindicales'], 0, 'La actividad de limitacion ordena y controla conductas privadas.', 'II.10 · Formas de actividad administrativa'),
    q('topup-19-02', 'La actividad de fomento busca:', ['impulsar conductas de interes publico mediante ayudas o incentivos', 'imponer sanciones penales', 'sustituir al planeamiento urbanistico', 'aprobar presupuestos municipales'], 0, 'El fomento utiliza subvenciones, ayudas, premios o beneficios.', 'II.10 · Formas de actividad administrativa'),
    q('topup-19-03', 'La actividad de servicio publico se orienta a:', ['satisfacer necesidades de interes general de forma regular y organizada', 'crear tributos estatales', 'resolver recursos de casacion', 'aprobar reglamentos parlamentarios'], 0, 'El servicio publico atiende prestaciones de interes general bajo responsabilidad administrativa.', 'II.10 · Servicio publico'),
    q('topup-19-04', 'La actividad economica publica implica:', ['intervencion en el mercado o gestion de actividades empresariales publicas', 'funcion jurisdiccional', 'aprobacion de mociones de censura', 'solo inspeccion sanitaria'], 0, 'La Administracion puede desarrollar iniciativa economica en supuestos legales.', 'II.10 · Actividad economica'),
    q('topup-19-05', 'Un ejemplo claro de actividad de fomento municipal es:', ['una subvencion deportiva', 'una providencia de apremio', 'una sentencia contenciosa', 'la regencia de la Corona'], 0, 'Las subvenciones son un instrumento tipico de fomento.', 'II.10 · Formas de actividad administrativa'),
    q('topup-19-06', 'Una piscina municipal abierta al publico se encuadra principalmente como:', ['servicio publico', 'acto legislativo', 'pena administrativa', 'expediente disciplinario'], 0, 'Es una prestacion organizada para atender intereses generales.', 'II.10 · Servicio publico'),
    q('topup-19-07', 'Entre las notas clasicas del servicio publico figura la:', ['continuidad', 'reserva judicial', 'inmunidad parlamentaria', 'intangibilidad del presupuesto'], 0, 'Continuidad, regularidad, igualdad y adaptabilidad son rasgos tipicos.', 'II.10 · Caracteristicas del servicio publico'),
    q('topup-19-08', 'La regularidad del servicio publico significa que debe prestarse:', ['conforme a reglas y condiciones preestablecidas', 'solo cuando lo pida la mayoria absoluta del Pleno', 'sin control alguno', 'unicamente por empresas privadas'], 0, 'La regularidad exige funcionamiento conforme a normas y condiciones conocidas.', 'II.10 · Caracteristicas del servicio publico'),
    q('topup-19-09', 'La igualdad en el acceso al servicio publico implica:', ['trato equivalente a usuarios en situacion equivalente', 'gratuidad obligatoria en todos los casos', 'supresion de cualquier tasa o precio publico', 'reserva exclusiva a funcionarios'], 0, 'La igualdad prohíbe discriminaciones injustificadas.', 'II.10 · Caracteristicas del servicio publico'),
    q('topup-19-10', 'La adaptabilidad del servicio publico supone que:', ['puede modificarse para responder a nuevas necesidades publicas', 'queda congelado para siempre en su forma inicial', 'solo puede variar por referendum', 'impide toda digitalizacion'], 0, 'Los servicios deben ajustarse a la evolucion de las necesidades colectivas.', 'II.10 · Caracteristicas del servicio publico'),
    q('topup-19-11', 'En la gestion directa de un servicio publico:', ['el Ayuntamiento lo presta con medios propios', 'siempre existe concesionario privado', 'desaparece toda responsabilidad municipal', 'no puede haber personal funcionario'], 0, 'La gestion directa utiliza medios municipales o entes instrumentales publicos.', 'II.10 · Formas de gestion'),
    q('topup-19-12', 'La concesion de servicios se caracteriza porque:', ['el contratista asume la explotacion bajo riesgo operacional', 'el Pleno renuncia a toda potestad de control', 'la licencia urbanistica sustituye al contrato', 'no existe interes general'], 0, 'En la concesion el contratista explota el servicio bajo control administrativo.', 'II.10 · Formas de gestion'),
    q('topup-19-13', 'La sociedad mercantil local es una forma de gestion:', ['empresarial bajo control publico', 'jurisdiccional', 'electoral', 'regencial'], 0, 'La sociedad mercantil local integra una formula instrumental de gestion.', 'II.10 · Formas de gestion'),
    q('topup-19-14', 'La eleccion de la forma de gestion de un servicio debe justificarse por criterios de:', ['eficacia, sostenibilidad, coste y calidad', 'afinidad politica exclusiva', 'azar', 'preferencia personal del contratista'], 0, 'La eleccion no es arbitraria: requiere motivacion en interes publico.', 'II.10 · Formas de gestion'),
    q('topup-19-15', 'La remunicipalizacion consiste en:', ['recuperar para gestion publica un servicio antes gestionado indirectamente', 'crear una nueva provincia', 'disolver el Pleno municipal', 'privatizar obligatoriamente el servicio'], 0, 'La remunicipalizacion supone volver a la gestion publica directa o instrumental.', 'II.10 · Remunicipalizacion'),
    q('topup-19-16', 'La remunicipalizacion debe respetar, entre otras cuestiones:', ['contratos vigentes, personal y sostenibilidad financiera', 'solo el criterio del concejal delegado', 'la inexistencia de memoria', 'la supresion de cualquier control interno'], 0, 'La recuperacion del servicio exige procedimiento y analisis juridico-economico.', 'II.10 · Remunicipalizacion'),
    q('topup-19-17', 'La iniciativa economica publica local exige especial prudencia porque debe valorar:', ['interes publico, mercado y sostenibilidad financiera', 'solo el numero de concejales', 'exclusivamente el color politico del gobierno', 'la firma del delegado sindical'], 0, 'La actividad economica publica local requiere memoria justificativa y control.', 'II.10 · Iniciativa economica publica'),
    q('topup-19-18', 'Aunque un servicio se gestione indirectamente, el Ayuntamiento conserva:', ['responsabilidad y potestades de direccion y control', 'ninguna obligacion frente a la ciudadania', 'solo funciones notariales', 'competencia judicial penal'], 0, 'La responsabilidad publica no desaparece por externalizar la gestion.', 'II.10 · Gestion y control del servicio'),
    q('topup-19-19', 'Un riesgo de baja calidad en la gestion del servicio puede afrontarse mediante:', ['indicadores, inspecciones y penalidades', 'desaparicion del control municipal', 'supresion de toda documentacion', 'nombramiento de un regente'], 0, 'La Administracion debe vigilar calidad y cumplimiento del servicio.', 'II.10 · Gestion y control del servicio'),
    q('topup-19-20', 'En la practica municipal, un mismo servicio puede combinar actividad de servicio publico, control e incluso:', ['fomento o actividad economica', 'sucesion a la Corona', 'enjuiciamiento criminal', 'investidura parlamentaria'], 0, 'Las formas de actividad administrativa no son compartimentos estancos.', 'II.10 · Formas de actividad administrativa'),
  ]);

  addQuestions(bank, 20, [
    q('topup-20-01', 'El orden del dia de un organo colegiado local sirve para:', ['fijar los asuntos que seran tratados en la sesion', 'nombrar automaticamente al secretario', 'aprobar el presupuesto sin debate', 'sustituir al acta'], 0, 'La convocatoria debe incluir el orden del dia de los asuntos a tratar.', 'II.11 · Convocatorias y orden del dia'),
    q('topup-20-02', 'Como regla general, no deben tratarse asuntos no incluidos en el orden del dia salvo:', ['supuestos de urgencia conforme a la normativa aplicable', 'peticion verbal de cualquier asistente', 'siempre que lo pida la oposicion', 'si son asuntos tributarios'], 0, 'La inclusion en el orden del dia es una garantia, con excepciones tasadas por urgencia.', 'II.11 · Orden del dia'),
    q('topup-20-03', 'El quorum de constitucion de un organo colegiado se refiere a:', ['la asistencia minima necesaria para sesionar validamente', 'la duracion maxima de la reunion', 'el numero de mociones presentadas', 'el importe del presupuesto'], 0, 'Sin quorum suficiente el organo no puede constituirse validamente.', 'II.11 · Requisitos de constitucion'),
    q('topup-20-04', 'El voto de calidad del presidente opera normalmente en caso de:', ['empate', 'ausencia del secretario', 'falta de orden del dia', 'intervencion del Tribunal Supremo'], 0, 'El voto de calidad deshace empates cuando asi lo preve la norma aplicable.', 'II.11 · Votaciones'),
    q('topup-20-05', 'El acta del organo colegiado tiene como finalidad principal:', ['dejar constancia de asistentes, asuntos y acuerdos', 'sustituir a la convocatoria', 'aprobar ordenanzas fiscales', 'tramitar licencias urbanisticas'], 0, 'El acta documenta formalmente el desarrollo y acuerdos de la sesion.', 'II.11 · Funcionamiento de organos colegiados'),
  ]);

  addQuestions(bank, 21, [
    q('topup-21-01', 'Las ordenanzas y reglamentos locales son manifestaciones de la potestad:', ['reglamentaria de las entidades locales', 'jurisdiccional del Ayuntamiento', 'constituyente derivada', 'legislativa estatal'], 0, 'Las entidades locales aprueban disposiciones reglamentarias, no leyes.', 'II.12 · Concepto y fundamento'),
    q('topup-21-02', 'El bando del alcalde es normalmente un instrumento de:', ['direccion, informacion o policia municipal', 'aprobacion de leyes organicas', 'reforma estatutaria', 'enjuiciamiento penal'], 0, 'El bando no sustituye al procedimiento propio de las ordenanzas y reglamentos.', 'II.12 · Los bandos'),
    q('topup-21-03', 'Entre las clases de normas locales puede distinguirse entre:', ['reglamentos organicos, ordenanzas y bandos', 'decretos-leyes municipales y leyes locales', 'reales decretos y reglamentos europeos', 'sentencias y autos'], 0, 'La tipologia local incluye ordenanzas, reglamentos y bandos, entre otras normas reglamentarias.', 'II.12 · Clases'),
    q('topup-21-04', 'La aprobacion inicial de una ordenanza local corresponde normalmente al:', ['Pleno', 'Interventor General', 'Tribunal Economico-Administrativo', 'Consejo de Ministros'], 0, 'La potestad normativa local se canaliza por acuerdo plenario.', 'II.12 · Procedimiento de aprobacion'),
    q('topup-21-05', 'Tras la aprobacion inicial de una ordenanza, se abre un tramite de informacion publica y audiencia por un plazo minimo de:', ['treinta dias', 'dos dias habiles', 'veinticuatro horas', 'noventa dias'], 0, 'La publicacion inicial abre un plazo de treinta dias para reclamaciones y sugerencias.', 'II.12 · Procedimiento de aprobacion'),
    q('topup-21-06', 'Si durante la informacion publica no se presentan reclamaciones a la ordenanza:', ['el acuerdo puede entenderse definitivamente adoptado', 'debe repetirse todo el expediente', 'la competencia pasa al alcalde', 'la ordenanza queda anulada'], 0, 'La ausencia de reclamaciones permite elevar automaticamente el acuerdo a definitivo.', 'II.12 · Procedimiento de aprobacion'),
    q('topup-21-07', 'Si se presentan reclamaciones durante la exposicion publica de una ordenanza, corresponde:', ['resolverlas y aprobar definitivamente el texto', 'archivar sin resolverlas', 'trasladarlas al Senado', 'someterlas a referendo obligatorio'], 0, 'Las reclamaciones deben resolverse antes de la aprobacion definitiva.', 'II.12 · Procedimiento de aprobacion'),
    q('topup-21-08', 'La entrada en vigor de una ordenanza exige, entre otros requisitos:', ['publicacion integra del texto definitivo', 'solo firma del concejal delegado', 'aprobacion por la Diputacion Provincial', 'anuncio en prensa privada exclusivamente'], 0, 'Las normas locales necesitan publicacion oficial para entrar en vigor.', 'II.12 · Publicacion y entrada en vigor'),
    q('topup-21-09', 'El reglamento organico municipal se refiere especialmente a:', ['la organizacion y funcionamiento internos de la entidad local', 'los impuestos estatales', 'la estructura del CGPJ', 'la sucesion a la Corona'], 0, 'El reglamento organico ordena la organizacion institucional del Ayuntamiento.', 'II.12 · Clases de reglamentos'),
    q('topup-21-10', 'Las ordenanzas fiscales se diferencian porque regulan:', ['tributos y otros ingresos de Derecho publico en el ambito local', 'la organizacion del Pleno', 'los estados de alarma', 'el procedimiento penal'], 0, 'Las ordenanzas fiscales desarrollan la potestad reglamentaria tributaria local.', 'II.12 · Clases de ordenanzas'),
    q('topup-21-11', 'El bando del alcalde puede ser util para:', ['recordar obligaciones ciudadanas o regular aspectos de policia urbana dentro de su ambito', 'crear un impuesto nuevo no previsto en la ley', 'modificar el Estatuto de Autonomia', 'imponer penas de prision'], 0, 'El bando tiene un alcance propio, pero no sustituye a la ordenanza cuando la materia exige procedimiento reglamentario.', 'II.12 · Los bandos'),
    q('topup-21-12', 'No debe confundirse una ordenanza con un bando porque la ordenanza:', ['requiere procedimiento plenario con informacion publica', 'se dicta solo verbalmente', 'no necesita publicacion', 'es siempre un acto singular'], 0, 'La ordenanza sigue un procedimiento normativo reforzado y tiene vocacion general.', 'II.12 · Diferencias entre ordenanza y bando'),
    q('topup-21-13', 'Las entidades locales pueden aprobar reglamentos y ordenanzas dentro de los limites de:', ['la Constitucion y las leyes', 'la voluntad unilateral del alcalde', 'los acuerdos privados', 'cualquier instruccion verbal'], 0, 'La potestad reglamentaria local esta subordinada a la ley.', 'II.12 · Fundamento y limites'),
    q('topup-21-14', 'La publicacion oficial de ordenanzas locales se realiza normalmente en el:', ['Boletin Oficial de la Provincia', 'Diario Oficial de la Union Europea exclusivamente', 'tablón del Congreso', 'BOE en todo caso'], 0, 'La publicacion provincial es la regla comun en el regimen local.', 'II.12 · Publicacion'),
    q('topup-21-15', 'El contenido de los reglamentos locales puede referirse a:', ['organizacion, funcionamiento o materias de competencia local', 'tipificar delitos', 'regular la Corona', 'aprobar presupuestos estatales'], 0, 'Las normas locales deben moverse dentro de las competencias municipales o provinciales.', 'II.12 · Clases y contenido'),
    q('topup-21-16', 'Una norma local de caracter general aprobada por el Pleno para regular convivencia o uso de bienes municipales suele ser una:', ['ordenanza', 'sentencia', 'mocion de censura', 'providencia de apremio'], 0, 'La ordenanza es el instrumento tipico para regular conductas generales en el ambito local.', 'II.12 · Ordenanzas'),
    q('topup-21-17', 'El procedimiento de elaboracion de las ordenanzas protege especialmente:', ['participacion ciudadana y control de legalidad', 'la ausencia de publicidad', 'la arbitrariedad del organo gestor', 'la inaplicacion de la ley'], 0, 'Informacion publica y publicidad oficial son garantias esenciales del procedimiento normativo local.', 'II.12 · Procedimiento de elaboracion'),
    q('topup-21-18', 'La impugnacion de una ordenanza o reglamento local aprobado definitivamente se dirige normalmente a la via:', ['contencioso-administrativa', 'penal ordinaria', 'laboral', 'electoral'], 0, 'Las disposiciones generales locales se combaten ante la jurisdiccion contencioso-administrativa.', 'II.12 · Control de legalidad de ordenanzas y reglamentos'),
  ]);

  addQuestions(bank, 23, [
    q('topup-23-01', 'La rehabilitacion de la condicion de funcionario puede plantearse, entre otros supuestos, cuando:', ['desaparece la causa que produjo la perdida y la ley lo permite', 'se gana un concurso-oposicion', 'lo solicita cualquier sindicato', 'lo decide verbalmente el alcalde'], 0, 'La rehabilitacion no es automatica y depende del supuesto legal.', 'III.2 · Rehabilitacion'),
    q('topup-23-02', 'La renuncia del funcionario, para producir la perdida de la condicion, debe ser:', ['voluntaria y aceptada por la Administracion, con los limites legales', 'siempre oral', 'aprobada por los vecinos', 'ratificada por el Pleno municipal en todos los casos'], 0, 'La renuncia exige aceptacion administrativa y puede no admitirse si existen responsabilidades pendientes.', 'III.2 · Perdida de la condicion de funcionario'),
    q('topup-23-03', 'No debe confundirse la perdida de la condicion de funcionario con:', ['el cese en un puesto concreto', 'la sancion de separacion del servicio', 'la jubilacion total', 'la inhabilitacion firme'], 0, 'Puede cesarse en un puesto y seguir conservando la condicion funcionarial.', 'III.2 · Perdida de la condicion y cese en el puesto'),
    q('topup-23-04', 'La situacion de servicio activo implica, con caracter general:', ['plenitud ordinaria de derechos y deberes', 'perdida de la condicion funcionarial', 'suspension de retribuciones en todo caso', 'reserva exclusiva a altos cargos'], 0, 'El funcionario en servicio activo presta servicios y conserva el estatuto ordinario.', 'III.2 · Servicio activo'),
    q('topup-23-05', 'La excedencia por interes particular genera, como regla general:', ['ausencia de retribuciones y sin reserva de puesto', 'plena reserva de puesto y sueldo integro', 'perdida automatica de la condicion de funcionario', 'nombramiento como personal eventual'], 0, 'Es la modalidad mas abierta al interes personal, con efectos menos protectores.', 'III.2 · Excedencias'),
    q('topup-23-06', 'La excedencia por cuidado de hijos o familiares protege especialmente:', ['la conciliacion', 'la potestad sancionadora', 'la recaudacion tributaria', 'la contratacion menor'], 0, 'Es una excedencia orientada a la conciliacion y el cuidado familiar.', 'III.2 · Excedencias'),
    q('topup-23-07', 'La suspension firme de funciones deriva de:', ['sancion disciplinaria o sentencia judicial', 'simple solicitud del interesado', 'mudanza de domicilio', 'disolucion de las Cortes'], 0, 'La suspension firme responde a una decision sancionadora o judicial.', 'III.2 · Suspension de funciones'),
    q('topup-23-08', 'La suspension provisional se acuerda durante la tramitacion de un procedimiento cuando:', ['sea necesario y conforme a la ley', 'el interesado quiera cobrar mas', 'lo solicite un vecino', 'se trate de una licencia urbanistica'], 0, 'La suspension provisional es una medida cautelar vinculada a un procedimiento.', 'III.2 · Suspension de funciones'),
    q('topup-23-09', 'La publicacion del nombramiento del funcionario, cuando proceda, cumple una funcion de:', ['publicidad oficial y control', 'fiscalizacion contable', 'recaudacion tributaria', 'aprobacion del planeamiento'], 0, 'La adquisicion de la condicion funcionarial incluye, cuando proceda, la publicacion oficial del nombramiento.', 'III.2 · Adquisicion de la condicion de funcionario'),
    q('topup-23-10', 'En servicios especiales, el funcionario suele percibir las retribuciones del:', ['cargo o puesto desempenado en esa situacion', 'puesto de origen acumuladas a las nuevas', 'Pleno municipal', 'sindicato de pertenencia'], 0, 'En servicios especiales se perciben normalmente las retribuciones del cargo desempenado, no las del puesto de origen.', 'III.2 · Servicios especiales'),
    q('topup-23-11', 'El servicio en otras Administraciones no supone perder la condicion de funcionario de origen, sino:', ['integrarse funcionalmente en la Administracion de destino', 'renunciar automaticamente al cuerpo de origen', 'pasar a personal laboral', 'convertirse en eventual'], 0, 'La movilidad entre Administraciones mantiene la condicion de origen con los efectos legales correspondientes.', 'III.2 · Servicio en otras Administraciones'),
  ]);

  addQuestions(bank, 24, [
    q('topup-24-01', 'En la seleccion del personal laboral al servicio de las Administraciones publicas deben respetarse, entre otros, los principios de:', ['igualdad, merito, capacidad y publicidad', 'confianza politica y discrecionalidad plena', 'antiguedad y afinidad personal', 'gratuidad y unanimidad'], 0, 'El acceso del personal laboral publico tambien se somete a principios constitucionales y legales.', 'III.3 · Seleccion de personal laboral'),
    q('topup-24-02', 'El personal laboral al servicio de la Administracion se vincula mediante:', ['contrato de trabajo', 'acto de regencia', 'ley organica', 'providencia de apremio'], 0, 'Su relacion es contractual, a diferencia del personal funcionario.', 'III.3 · Personal laboral'),
    q('topup-24-03', 'Las incompatibilidades del personal laboral publico se rigen, ademas del Estatuto de los Trabajadores, por:', ['la normativa de incompatibilidades del sector publico', 'solo el Codigo Civil', 'exclusivamente la ley electoral', 'ninguna norma especifica'], 0, 'El personal laboral publico tambien esta sujeto a reglas de incompatibilidad y conflictos de interes.', 'III.3 · Incompatibilidades'),
    q('topup-24-04', 'Entre los deberes del personal laboral al servicio de las Administraciones publicas se incluye:', ['cumplir diligentemente las obligaciones del puesto', 'aprobar ordenanzas municipales', 'dictar sentencias', 'fiscalizar el presupuesto en todo caso'], 0, 'Los deberes laborales se complementan con los derivados del servicio publico.', 'III.3 · Derechos y deberes'),
    q('topup-24-05', 'El personal laboral no puede ejercer funciones que impliquen:', ['participacion en potestades publicas reservadas a funcionarios', 'uso de herramientas ofimaticas', 'atencion al publico', 'archivo de expedientes'], 0, 'Las funciones reservadas a funcionarios no pueden atribuirse libremente al personal laboral.', 'III.3 · Regimen juridico del personal laboral'),
  ]);

  addQuestions(bank, 25, [
    q('topup-25-01', 'La libertad sindical comprende tambien el derecho a:', ['no afiliarse a ningun sindicato', 'ser nombrado funcionario sin oposicion', 'exigir dos sueldos publicos', 'sustituir al alcalde'], 0, 'La libertad sindical incluye afiliacion positiva y negativa.', 'III.4 · Derecho de sindicacion'),
    q('topup-25-02', 'Una seccion sindical en la Administracion es una manifestacion de:', ['la accion sindical dentro de la organizacion', 'la potestad reglamentaria local', 'la fiscalizacion externa', 'la iniciativa legislativa popular'], 0, 'La accion sindical se articula a traves de secciones, delegados y organos de representacion.', 'III.4 · Derecho de sindicacion'),
    q('topup-25-03', 'La negociacion colectiva de los empleados publicos se realiza en los terminos del:', ['EBEP', 'Codigo Penal', 'Reglamento del Senado', 'Texto refundido de la Ley del Suelo'], 0, 'El EBEP ordena la negociacion colectiva en el empleo publico.', 'III.4 · Negociacion colectiva'),
    q('topup-25-04', 'No todas las materias son negociables porque quedan fuera, entre otras, las relativas a:', ['potestades publicas y regulacion de derechos de la ciudadania', 'vacaciones y jornada', 'salud laboral', 'accion social'], 0, 'La negociacion colectiva tiene limites materiales en el empleo publico.', 'III.4 · Negociacion colectiva'),
    q('topup-25-05', 'El derecho de huelga permite:', ['cesar colectivamente en el trabajo para defender intereses laborales', 'imponer sanciones administrativas', 'aprobar reglamentos organicos', 'acordar la sucesion a la Corona'], 0, 'La huelga es un derecho constitucional de defensa de intereses laborales.', 'III.4 · Derecho de huelga'),
    q('topup-25-06', 'En servicios esenciales para la comunidad, la huelga puede someterse a:', ['servicios minimos proporcionados y motivados', 'prohibicion absoluta automatica', 'autorizacion judicial previa en todo caso', 'silencio administrativo negativo'], 0, 'Los servicios minimos deben conciliar el derecho de huelga con la continuidad de servicios esenciales.', 'III.4 · Derecho de huelga'),
    q('topup-25-07', 'Durante la huelga, con caracter general, se suspende:', ['el trabajo y el salario en los terminos legales', 'la relacion estatutaria de forma definitiva', 'la existencia del Ayuntamiento', 'la vigencia de la Constitucion'], 0, 'La huelga tiene efectos suspensivos sobre trabajo y retribucion.', 'III.4 · Derecho de huelga'),
    q('topup-25-08', 'El regimen de incompatibilidades persigue especialmente salvaguardar:', ['imparcialidad e independencia', 'la discrecionalidad politica absoluta', 'la reserva judicial', 'la inviolabilidad parlamentaria'], 0, 'Las incompatibilidades evitan conflictos de intereses y garantizan dedicacion al puesto publico.', 'III.4 · Regimen de incompatibilidades'),
    q('topup-25-09', 'La regla general en materia de incompatibilidades del personal publico es que:', ['no se puede compatibilizar un puesto publico con otro salvo excepciones legales', 'siempre se pueden acumular dos puestos publicos', 'solo se prohiben las actividades artisticas', 'la compatibilidad nunca necesita autorizacion'], 0, 'La compatibilidad es excepcional y debe ajustarse a la ley.', 'III.4 · Regimen de incompatibilidades'),
    q('topup-25-10', 'Una actividad privada relacionada con expedientes tramitados por el empleado publico puede ser incompatible por afectar a la:', ['imparcialidad', 'publicidad activa', 'regencia', 'investidura'], 0, 'El conflicto de intereses es uno de los riesgos centrales del regimen de incompatibilidades.', 'III.4 · Regimen de incompatibilidades'),
    q('topup-25-11', 'La compatibilidad para una segunda actividad debe solicitarse:', ['antes de iniciar la actividad', 'despues de cobrar la primera mensualidad', 'solo si lo pide un sindicato', 'cuando lo autorice verbalmente un companero'], 0, 'La autorizacion previa es esencial en el regimen de incompatibilidades.', 'III.4 · Compatibilidad'),
    q('topup-25-12', 'Entre las actividades normalmente exceptuadas del regimen de incompatibilidades se encuentra:', ['la administracion del patrimonio personal', 'la tramitacion privada de licencias del propio Ayuntamiento', 'la representacion habitual de contratistas municipales', 'la inspeccion privada de expedientes sancionadores'], 0, 'La ley exceptua determinadas actividades que no comprometen la imparcialidad en los terminos legales.', 'III.4 · Compatibilidad'),
    q('topup-25-13', 'El incumplimiento del regimen de incompatibilidades puede generar:', ['responsabilidad disciplinaria', 'investidura automatica', 'nulidad de toda la funcion publica', 'creacion de una tasa municipal'], 0, 'El incumplimiento puede derivar en sanciones y otras consecuencias juridicas.', 'III.4 · Incompatibilidades'),
    q('topup-25-14', 'Una represalia por actividad sindical legitima seria contraria al principio de:', ['libertad sindical', 'tesoreria unica', 'no afectacion presupuestaria', 'jerarquia normativa'], 0, 'La libertad sindical protege frente a discriminaciones o represalias por accion sindical.', 'III.4 · Derecho de sindicacion'),
  ]);

  addQuestions(bank, 26, [
    q('topup-26-01', 'La Seguridad Social se estructura en Espana alrededor de un sistema con accion protectora:', ['frente a contingencias y situaciones de necesidad', 'solo para funcionarios locales', 'exclusivamente urbanistica', 'sin cobertura sanitaria'], 0, 'La accion protectora es el nucleo del sistema de Seguridad Social.', 'III.5 · Accion protectora'),
    q('topup-26-02', 'El campo de aplicacion del sistema de Seguridad Social delimita:', ['quienes quedan incluidos y protegidos por el sistema', 'la organizacion del Pleno', 'la aprobacion de ordenanzas', 'la composicion del Senado'], 0, 'El campo de aplicacion fija el ambito subjetivo del sistema.', 'III.5 · Campo de aplicacion'),
    q('topup-26-03', 'La asistencia sanitaria forma parte de la:', ['accion protectora de la Seguridad Social', 'potestad reglamentaria tributaria', 'funcion interventora', 'potestad sancionadora local'], 0, 'La asistencia sanitaria es una prestacion basica de la accion protectora.', 'III.5 · Accion protectora'),
    q('topup-26-04', 'La estructura del sistema de Seguridad Social se apoya en un regimen general y, en su caso, en:', ['regimenes especiales', 'regimenes urbanisticos', 'regimenes parlamentarios', 'regimenes contenciosos'], 0, 'La organizacion del sistema distingue regimen general y regimenes especiales.', 'III.5 · Estructura del sistema'),
  ]);

  addQuestions(bank, 27, [
    q('topup-27-01', 'El principio constitucional que sirve de base al sistema tributario se formula principalmente en el articulo:', ['31 CE', '103 CE', '117 CE', '137 CE'], 0, 'El art. 31 CE recoge capacidad economica, igualdad, progresividad y no confiscatoriedad.', 'IV.1 · Principios tributarios'),
    q('topup-27-02', 'Los tributos locales se clasifican en:', ['impuestos, tasas y contribuciones especiales', 'impuestos, recargos y sanciones', 'tasas, multas y precios privados', 'solo impuestos'], 0, 'La legislacion de haciendas locales distingue esas tres categorias.', 'IV.1 · Tributos locales'),
    q('topup-27-03', 'Entre los impuestos municipales obligatorios se encuentra el:', ['IBI', 'ICIO', 'IIVTNU potestativo en el esquema del temario', 'canon urbanistico'], 0, 'El IBI es un impuesto municipal obligatorio.', 'IV.1 · Impuestos municipales'),
    q('topup-27-04', 'El IAE grava principalmente:', ['el ejercicio de actividades empresariales, profesionales o artisticas', 'la residencia padronal', 'la celebracion de sesiones plenarias', 'las bajas medicas'], 0, 'El IAE se refiere al ejercicio de actividades economicas.', 'IV.1 · Impuestos municipales'),
    q('topup-27-05', 'El IVTM grava:', ['la titularidad de vehiculos aptos para circular', 'la compraventa de inmuebles', 'la herencia yacente', 'la afiliacion sindical'], 0, 'El IVTM es el impuesto sobre vehiculos de traccion mecanica.', 'IV.1 · Impuestos municipales'),
    q('topup-27-06', 'El ICIO tiene naturaleza de impuesto:', ['potestativo e indirecto', 'obligatorio y real', 'personal y progresivo', 'autonomico'], 0, 'El ICIO requiere acuerdo de establecimiento y ordenanza fiscal.', 'IV.1 · Impuestos municipales'),
    q('topup-27-07', 'Las tasas se exigen, entre otros supuestos, por:', ['uso privativo o aprovechamiento especial del dominio publico local', 'la mera titularidad de un inmueble urbano', 'el ejercicio de actividades empresariales en abstracto', 'cualquier hecho sin relacion con servicio o dominio publico'], 0, 'La tasa conecta con dominio publico o con servicios/actividades de competencia local.', 'IV.1 · Tasas'),
    q('topup-27-08', 'Las contribuciones especiales financian obras o servicios que producen:', ['beneficio especial o aumento de valor', 'solo un gasto corriente indiferenciado', 'una sancion disciplinaria', 'la eleccion del alcalde'], 0, 'La contribucion especial requiere un beneficio particular para determinados sujetos.', 'IV.1 · Contribuciones especiales'),
    q('topup-27-09', 'La diferencia clasica entre impuesto y tasa es que en la tasa:', ['existe una relacion mas directa con un servicio o el dominio publico', 'siempre hay progresividad', 'nunca hace falta ordenanza', 'no hay sujeto pasivo'], 0, 'La tasa se vincula a un servicio o aprovechamiento que afecta o beneficia especialmente.', 'IV.1 · Tasas e impuestos'),
    q('topup-27-10', 'La potestad reglamentaria tributaria local se ejerce mediante:', ['ordenanzas fiscales', 'sentencias del Tribunal de Cuentas', 'bandos de urgencia exclusivamente', 'decretos-leyes municipales'], 0, 'Los Ayuntamientos desarrollan sus tributos dentro de la ley por medio de ordenanzas fiscales.', 'IV.1 · Potestad reglamentaria tributaria'),
    q('topup-27-11', 'Las entidades locales pueden crear libremente nuevos tributos?', ['No, solo establecer y ordenar los previstos por la ley', 'Si, sin limite alguno', 'Solo si los aprueba la Junta de Gobierno Local', 'Si, mediante bando del alcalde'], 0, 'La autonomia financiera local no elimina la reserva de ley tributaria.', 'IV.1 · Potestad reglamentaria tributaria'),
    q('topup-27-12', 'Entre los elementos que debe contener una ordenanza fiscal esta el:', ['hecho imponible', 'orden de sucesion a la Corona', 'nombramiento del Fiscal General', 'resultado de una mocion de censura'], 0, 'La ordenanza fiscal regula los elementos esenciales del tributo dentro de la ley.', 'IV.1 · Contenido de las ordenanzas fiscales'),
    q('topup-27-13', 'En una tasa, la memoria tecnico-economica es importante porque debe justificar:', ['el coste real o previsible del servicio o actividad', 'la composicion del Pleno', 'la plantilla de personal laboral', 'la capitalidad de Castilla y Leon'], 0, 'La cuantia de la tasa no puede desvincularse del coste o valor del servicio.', 'IV.1 · Contenido de las ordenanzas fiscales'),
    q('topup-27-14', 'La aprobacion provisional de las ordenanzas fiscales corresponde al:', ['Pleno', 'Secretario General', 'Consejo de Gobierno de la comunidad autonoma', 'Tribunal Supremo'], 0, 'El procedimiento arranca con acuerdo plenario de aprobacion provisional.', 'IV.1 · Tramitacion de ordenanzas fiscales'),
    q('topup-27-15', 'Tras la aprobacion provisional de una ordenanza fiscal debe abrirse exposicion publica por un plazo minimo de:', ['treinta dias', 'dos dias habiles', 'cinco meses', 'veinticuatro horas'], 0, 'La tramitacion incluye exposicion publica para reclamaciones.', 'IV.1 · Tramitacion de ordenanzas fiscales'),
    q('topup-27-16', 'La imposicion de un tributo potestativo local significa:', ['decidir establecerlo', 'aprobar una sancion tributaria', 'resolver una reclamacion economico-administrativa', 'dictar una sentencia'], 0, 'Imponer es decidir que la figura tributaria potestativa se exigira en la entidad local.', 'IV.1 · Imposicion y ordenacion'),
    q('topup-27-17', 'La ordenacion del tributo consiste en:', ['regular concretamente sus elementos mediante ordenanza fiscal', 'nombrar al recaudador', 'aprobar el padrón municipal', 'fijar servicios minimos de huelga'], 0, 'La ordenacion concreta el regimen del tributo dentro del marco legal.', 'IV.1 · Imposicion y ordenacion'),
    q('topup-27-18', 'Los acuerdos de imposicion y ordenacion de tributos locales se impugnan habitualmente ante la jurisdiccion:', ['contencioso-administrativa', 'penal', 'social', 'militar'], 0, 'Las disposiciones generales tributarias locales se controlan en via contenciosa.', 'IV.1 · Impugnacion'),
    q('topup-27-19', 'Un recibo, liquidacion o providencia de apremio se combate normalmente como:', ['acto administrativo tributario concreto', 'reforma constitucional', 'disposicion general estatal', 'decreto legislativo'], 0, 'No es lo mismo impugnar la ordenanza que el acto individual de aplicacion.', 'IV.1 · Impugnacion de actos tributarios'),
    q('topup-27-20', 'En municipios de gran poblacion, determinadas controversias tributarias pueden revisarse en sede de:', ['tribunal economico-administrativo municipal', 'Cortes Generales', 'Consejo Europeo', 'Diputacion Permanente'], 0, 'El temario conecta la revision tributaria con el TEAM municipal cuando existe.', 'IV.1 · Impugnacion de actos tributarios'),
  ]);

  addQuestions(bank, 28, [
    q('topup-28-01', 'El principio presupuestario de unidad exige que:', ['el presupuesto se presente como un documento sistematico e integrado', 'solo exista un capitulo de gastos', 'no se publiquen modificaciones de credito', 'cada servicio apruebe su propio presupuesto independiente'], 0, 'La unidad presupuestaria ordena la vision global e integrada del presupuesto.', 'IV.2 · Principios presupuestarios'),
    q('topup-28-02', 'Los creditos extraordinarios se utilizan cuando:', ['debe realizarse un gasto especifico que no puede demorarse y no existe credito', 'el credito existente es suficiente pero insuficientemente ejecutado', 'solo hay que mover credito entre aplicaciones vinculadas', 'se quiere aprobar un bando'], 0, 'El credito extraordinario cubre gastos inaplazables para los que no existe credito.', 'IV.2 · Modificaciones presupuestarias'),
    q('topup-28-03', 'Los suplementos de credito proceden cuando:', ['el credito existente es insuficiente y el gasto no puede demorarse', 'no existe ninguna aplicacion presupuestaria previa', 'se quiere crear una ordenanza fiscal', 'no hay presupuesto aprobado'], 0, 'El suplemento refuerza una aplicacion ya existente pero insuficiente.', 'IV.2 · Modificaciones presupuestarias'),
    q('topup-28-04', 'Los gastos plurianuales comprometen creditos de:', ['ejercicios futuros dentro de los limites legales', 'solo el ejercicio corriente', 'unicamente el ultimo trimestre', 'solo ejercicios ya cerrados'], 0, 'La ley permite compromisos que alcanzan a ejercicios posteriores con limites.', 'IV.2 · Gastos plurianuales'),
    q('topup-28-05', 'La incorporacion de creditos consiste en:', ['trasladar a un ejercicio posterior determinados remanentes de credito', 'anular siempre el credito sobrante', 'crear un impuesto nuevo', 'ordenar el pago sin fase previa'], 0, 'Es una modalidad de modificacion presupuestaria prevista legalmente.', 'IV.2 · Incorporaciones de credito'),
  ]);

  addQuestions(bank, 29, [
    q('topup-29-01', 'La fase A del gasto corresponde a la:', ['autorizacion del gasto', 'ordenacion del pago', 'fiscalizacion externa', 'aprobacion definitiva del presupuesto'], 0, 'La fase A autoriza la realizacion del gasto.', 'IV.3 · Fases del procedimiento de gasto'),
    q('topup-29-02', 'La fase D del gasto significa:', ['disposicion o compromiso del gasto', 'devolucion de ingresos indebidos', 'desafectacion de bienes', 'diligencia de archivo'], 0, 'La fase D compromete el gasto frente a un tercero.', 'IV.3 · Fases del procedimiento de gasto'),
    q('topup-29-03', 'La fase O del procedimiento de gasto se refiere al:', ['reconocimiento de la obligacion', 'otorgamiento de licencia urbanistica', 'orden del dia del Pleno', 'registro padronal'], 0, 'La obligacion se reconoce cuando la prestacion se acredita correctamente.', 'IV.3 · Fases del procedimiento de gasto'),
    q('topup-29-04', 'La ordenacion del pago consiste en:', ['expedir la orden para hacer efectivo el pago', 'aprobar el presupuesto inicial', 'crear el credito presupuestario', 'sustituir la funcion interventora'], 0, 'Ordenar el pago es una fase distinta del reconocimiento de la obligacion.', 'IV.3 · Ordenacion del pago'),
    q('topup-29-05', 'Un documento contable ADO acumula:', ['autorizacion, disposicion y reconocimiento de la obligacion', 'aprobacion del presupuesto y ordenacion del pago', 'auditoria, devolucion y ordenanza', 'afectacion, deslinde y ocupacion'], 0, 'El documento ADO permite acumular varias fases del gasto en ciertos supuestos.', 'IV.3 · Documentos contables'),
    q('topup-29-06', 'Los compromisos de gasto para ejercicios posteriores deben respetar:', ['los limites legales aplicables a los gastos plurianuales', 'solo la voluntad del concejal delegado', 'la ausencia de expediente', 'la decision del proveedor'], 0, 'No pueden asumirse libremente al margen de los limites normativos.', 'IV.3 · Compromisos para ejercicios posteriores'),
    q('topup-29-07', 'Los anticipos de caja fija se usan principalmente para:', ['gastos pequenos y repetitivos', 'crear credito extraordinario', 'aprobar ordenanzas', 'tramitar mociones de censura'], 0, 'Son un mecanismo agil para atender gastos periodicos de escasa cuantia.', 'IV.3 · Procedimiento de gasto'),
    q('topup-29-08', 'El organo competente para ordenar el pago se determina por:', ['la normativa presupuestaria y la organizacion de la entidad local', 'la ley electoral', 'el Estatuto de Autonomia', 'la voluntad del proveedor'], 0, 'La ordenacion del pago responde a reglas competenciales especificas.', 'IV.3 · Organos competentes'),
    q('topup-29-09', 'Antes del reconocimiento de la obligacion debe constar normalmente:', ['la acreditacion de que la prestacion se ha realizado', 'solo la firma del interesado', 'la publicacion en el BOE', 'un bando del alcalde'], 0, 'No puede reconocerse la obligacion sin soporte justificativo adecuado.', 'IV.3 · Fases del procedimiento de gasto'),
  ]);

  addQuestions(bank, 30, [
    q('topup-30-01', 'El control interno en la entidad local se ejerce con autonomia funcional por la:', ['Intervencion', 'Junta de Gobierno Local', 'Asesoria Juridica', 'Mesa de negociacion'], 0, 'La Intervencion local ejerce el control interno con autonomia funcional.', 'IV.4 · Control interno'),
    q('topup-30-02', 'La funcion interventora controla principalmente la:', ['legalidad de actos con contenido economico-presupuestario', 'conveniencia politica general', 'actividad jurisdiccional', 'negociacion colectiva'], 0, 'La funcion interventora se centra en actos con incidencia economica.', 'IV.4 · Funcion interventora'),
    q('topup-30-03', 'El control financiero se dirige a verificar, entre otros aspectos:', ['cumplimiento normativo, eficacia y eficiencia', 'la sucesion al trono', 'la composicion del Senado', 'el numero de concejales de la oposicion'], 0, 'El control financiero mira mas alla del expediente aislado.', 'IV.4 · Control financiero'),
    q('topup-30-04', 'Una auditoria publica local es una modalidad de:', ['control financiero', 'potestad sancionadora', 'actividad de fomento', 'excedencia voluntaria'], 0, 'La auditoria publica se integra dentro del control financiero.', 'IV.4 · Control interno'),
    q('topup-30-05', 'Si la Intervencion aprecia insuficiencia de credito puede formular:', ['reparo', 'bando', 'acta de conciliacion', 'oferta de empleo publico'], 0, 'La insuficiencia de credito es un supuesto tipico de reparo.', 'IV.4 · Funcion interventora'),
    q('topup-30-06', 'El reparo suspensivo impide continuar el expediente hasta:', ['resolver la discrepancia o subsanar el defecto', 'que lo firme un proveedor', 'que lo publique un periodico', 'que termine el ejercicio'], 0, 'Los reparos suspensivos bloquean la tramitacion hasta su adecuada solucion.', 'IV.4 · Funcion interventora'),
    q('topup-30-07', 'La omision de fiscalizacion previa obligatoria exige:', ['tramitar un procedimiento especifico de regularizacion', 'pagar automaticamente', 'archivar sin mas', 'sustituir al interventor'], 0, 'La omision de fiscalizacion no puede ignorarse y debe regularizarse conforme a la normativa.', 'IV.4 · Omision de fiscalizacion'),
    q('topup-30-08', 'La Cuenta General de la entidad local refleja, entre otros extremos:', ['ejecucion presupuestaria y situacion patrimonial', 'resultado de las elecciones sindicales', 'orden del dia del Pleno', 'clasificacion del suelo'], 0, 'La Cuenta General resume la gestion economico-financiera de la entidad.', 'IV.4 · Cuenta General'),
    q('topup-30-09', 'La Comision Especial de Cuentas interviene en la secuencia de la Cuenta General antes de su:', ['aprobacion por el Pleno', 'envio al Senado', 'aprobacion por el Tribunal Supremo', 'publicacion en la sede judicial'], 0, 'La cuenta pasa por formacion, informe de la comision, exposicion publica y aprobacion plenaria.', 'IV.4 · Cuenta General'),
    q('topup-30-10', 'El Tribunal de Cuentas es el supremo organo de control:', ['externo del sector publico', 'interno de cada Ayuntamiento', 'disciplinario de funcionarios', 'negociacion colectiva'], 0, 'El Tribunal de Cuentas ejerce fiscalizacion externa y puede exigir responsabilidad contable.', 'IV.4 · Control externo'),
    q('topup-30-11', 'El Consejo de Cuentas de Castilla y Leon fiscaliza:', ['la gestion economico-financiera del sector publico de la Comunidad y entidades locales', 'solo delitos urbanisticos', 'la aprobacion de bandos municipales', 'las elecciones generales'], 0, 'Es el organo autonómico de control externo en Castilla y Leon.', 'IV.4 · Control externo'),
    q('topup-30-12', 'Las Cortes de Castilla y Leon, en relacion con el control externo, reciben:', ['informes del Consejo de Cuentas', 'liquidaciones del IBI municipal para aprobacion individual', 'sentencias del Tribunal Supremo para ejecucion', 'nombramientos de interventores'], 0, 'Las Cortes ejercen el control politico en el ambito autonómico a partir de esos informes.', 'IV.4 · Control externo'),
    q('topup-30-13', 'La responsabilidad contable puede surgir por menoscabo de fondos publicos causado con:', ['dolo, culpa o negligencia grave', 'mera discrepancia doctrinal', 'simple error sin dano', 'motivos electorales'], 0, 'No todo error genera responsabilidad contable, pero si determinadas conductas graves.', 'IV.4 · Responsabilidades'),
    q('topup-30-14', 'Controlar el gasto publico no significa poner trabas, sino asegurar:', ['competencia, credito, procedimiento, justificacion y finalidad publica', 'solo rapidez en el pago', 'solamente la voluntad del organo gestor', 'que nunca haya informes'], 0, 'El control protege la legalidad y el buen uso de los fondos publicos.', 'IV.4 · Control del gasto publico'),
    q('topup-30-15', 'El control financiero permanente se desarrolla habitualmente conforme a un:', ['plan anual de control', 'orden del dia sindical', 'reglamento organico del Senado', 'procedimiento de regencia'], 0, 'El control financiero se organiza con planificacion y seguimiento de recomendaciones.', 'IV.4 · Control financiero'),
  ]);

  addQuestions(bank, 31, [
    q('topup-31-01', 'La propiedad del suelo queda delimitada por:', ['su funcion social y la ordenacion urbanistica', 'la sola voluntad del propietario', 'el padrón municipal', 'las reglas del Senado'], 0, 'La propiedad del suelo no es un derecho absoluto al margen del planeamiento.', 'IV.5 · Regimen urbanistico de la propiedad'),
    q('topup-31-02', 'Uno de los principios urbanisticos basicos es la:', ['funcion social de la propiedad', 'inviolabilidad parlamentaria', 'retroactividad sancionadora', 'autotutela penal'], 0, 'La funcion social es una idea estructural del urbanismo.', 'IV.5 · Principios'),
    q('topup-31-03', 'Tambien es un principio urbanistico relevante la:', ['equidistribucion de beneficios y cargas', 'reserva de Senado', 'jerarquia militar', 'suspension de derechos fundamentales'], 0, 'La equidistribucion evita repartos injustos de aprovechamientos y cargas.', 'IV.5 · Principios'),
    q('topup-31-04', 'La clasificacion del suelo responde a la pregunta:', ['que clase juridica de suelo es', 'quien preside la sesion plenaria', 'que sindicato tiene mas representacion', 'que documento contable procede'], 0, 'La clasificacion distingue suelo urbano, urbanizable y rustico/no urbanizable.', 'IV.5 · Clasificacion del suelo'),
    q('topup-31-05', 'La calificacion urbanistica responde a la pregunta:', ['que uso y condiciones concretas tiene el suelo', 'cuantos concejales integran el Pleno', 'que organo fiscaliza el gasto', 'que edad tiene el menor empadronado'], 0, 'La calificacion asigna usos y parametros urbanisticos concretos.', 'IV.5 · Calificacion del suelo'),
    q('topup-31-06', 'El suelo urbano se caracteriza porque:', ['cuenta con servicios y un grado de consolidacion urbanistica', 'siempre esta protegido por valores agrarios', 'no admite ningun uso residencial', 'queda fuera de toda competencia municipal'], 0, 'El suelo urbano presenta las condiciones propias de urbanizacion y consolidacion.', 'IV.5 · Clasificacion del suelo'),
    q('topup-31-07', 'El suelo urbanizable es aquel que:', ['puede transformarse mediante planeamiento y gestion', 'queda siempre excluido de cualquier actuacion', 'equivale al dominio publico local', 'solo admite uso forestal'], 0, 'Su transformacion exige ordenacion y ejecucion urbanistica.', 'IV.5 · Clasificacion del suelo'),
    q('topup-31-08', 'El suelo rustico o no urbanizable se preserva por razones como:', ['valores ambientales, agrarios o paisajisticos', 'votaciones plenarias fallidas', 'ausencia de correo electronico', 'huelga de empleados publicos'], 0, 'Su proteccion responde a valores o a la inadecuacion para urbanizar.', 'IV.5 · Clasificacion del suelo'),
    q('topup-31-09', 'La competencia urbanistica municipal comprende, entre otras funciones, la de:', ['licencias, inspeccion y proteccion de la legalidad', 'aprobacion de leyes organicas estatales', 'nombramiento de magistrados', 'control del Banco de Espana'], 0, 'El Ayuntamiento interviene en planeamiento, gestion y disciplina dentro del marco legal.', 'IV.5 · Competencia urbanistica municipal'),
    q('topup-31-10', 'La intervencion administrativa en la edificacion puede realizarse mediante:', ['licencia, declaracion responsable o comunicacion previa segun la normativa', 'solo referendum vecinal', 'exclusivamente silencio positivo', 'orden verbal de un tecnico privado'], 0, 'El control urbanistico admite titulos y tecnicas distintas segun el acto y la norma.', 'IV.5 · Intervencion administrativa'),
    q('topup-31-11', 'La licencia urbanistica es un acto:', ['reglado', 'puramente discrecional', 'jurisdiccional', 'legislativo'], 0, 'Si el proyecto cumple la legalidad debe concederse; si no, debe denegarse.', 'IV.5 · Licencia urbanistica'),
    q('topup-31-12', 'Una licencia urbanistica se otorga, como formula clasica, salvo derecho de propiedad y:', ['sin perjuicio de tercero', 'con reserva de ley organica', 'con efecto penal', 'sin expediente'], 0, 'La licencia no resuelve conflictos civiles ni elimina derechos de terceros.', 'IV.5 · Licencia urbanistica'),
    q('topup-31-13', 'La licencia urbanistica no legaliza actuaciones:', ['contrarias al planeamiento', 'que cuenten con informe tecnico favorable', 'sobre suelo urbano consolidado', 'de simple mantenimiento'], 0, 'La licencia no puede amparar lo que sea incompatible con la legalidad urbanistica.', 'IV.5 · Licencia urbanistica'),
    q('topup-31-14', 'Si una obra se realiza sin licencia o contra el planeamiento, la Administracion debe proteger la legalidad mediante medidas como:', ['suspension, legalizacion si procede o restauracion', 'solo una felicitacion formal', 'ninguna actuacion hasta el final de la obra', 'aprobacion de la Cuenta General'], 0, 'La disciplina urbanistica exige reaccion administrativa frente a actuaciones ilegales.', 'IV.5 · Proteccion de la legalidad urbanistica'),
    q('topup-31-15', 'La restauracion de la legalidad urbanistica busca:', ['reponer la realidad fisica alterada si la actuacion no es legalizable', 'imponer siempre una pena privativa de libertad', 'aprobar la ordenanza fiscal del IBI', 'cambiar la clasificacion del funcionario'], 0, 'Restaurar la legalidad no es lo mismo que sancionar.', 'IV.5 · Proteccion de la legalidad urbanistica'),
    q('topup-31-16', 'La legalizacion de una obra puede plantearse cuando:', ['la actuacion es compatible con el planeamiento', 'toda obra ilegal debe demolerse sin excepcion', 'no existe ninguna norma urbanistica', 'el interesado no presenta proyecto alguno'], 0, 'Si la obra es compatible, puede abrirse la via de legalizacion con el titulo habilitante correspondiente.', 'IV.5 · Legalizacion, restauracion y sancion'),
    q('topup-31-17', 'Las infracciones urbanisticas deben estar:', ['tipificadas por la ley', 'descritas solo en una circular interna', 'creadas libremente por el tecnico', 'aprobadas por correo electronico'], 0, 'El urbanismo sancionador tambien respeta legalidad y tipicidad.', 'IV.5 · Infracciones y sanciones urbanisticas'),
    q('topup-31-18', 'La responsabilidad por infracciones urbanisticas puede alcanzar, segun los casos, a:', ['promotores, propietarios, constructores o tecnicos', 'solo al alcalde', 'unicamente al secretario general', 'cualquier vecino aleatoriamente'], 0, 'La responsabilidad se distribuye segun la participacion en la infraccion.', 'IV.5 · Infracciones y sanciones urbanisticas'),
    q('topup-31-19', 'La sancion urbanistica es independiente de la medida de restauracion, lo que significa que:', ['pueden coexistir reposicion de la legalidad y multa', 'si hay multa nunca hay restauracion', 'si se legaliza siempre hay prision', 'la restauracion sustituye a toda prueba'], 0, 'Disciplina y sancion cumplen finalidades distintas.', 'IV.5 · Legalizacion, restauracion y sancion'),
    q('topup-31-20', 'En urbanismo, una mala tramitacion de plazos, notificaciones o prueba puede:', ['hacer fracasar la actuacion administrativa', 'convertir automaticamente la obra en legal', 'anular toda competencia municipal', 'sustituir el planeamiento por un bando'], 0, 'La disciplina urbanistica es muy procedimental y exige rigor formal.', 'IV.5 · Relevancia procedimental'),
  ]);

  addQuestions(bank, 32, [
    q('topup-32-01', 'La Ley Organica 3/2007 tiene por objeto principal:', ['hacer efectivo el derecho de igualdad de trato y oportunidades entre mujeres y hombres', 'regular el presupuesto local', 'ordenar el suelo urbanizable', 'crear el IBI'], 0, 'La LO 3/2007 es la norma basica en igualdad efectiva entre mujeres y hombres.', 'V.1 · Igualdad efectiva'),
    q('topup-32-02', 'La Ley Organica 1/2004 se dirige especificamente a:', ['la proteccion integral frente a la violencia de genero', 'la recaudacion tributaria local', 'la administracion electronica', 'la sucesion a la Corona'], 0, 'Su objeto es la respuesta integral frente a la violencia de genero.', 'V.1 · Violencia de genero'),
    q('topup-32-03', 'La Ley 4/2023 se orienta a garantizar la igualdad real y efectiva de las personas:', ['trans y LGTBI', 'concejales no adscritos', 'proveedores municipales', 'diputados provinciales'], 0, 'La norma protege derechos y principios rectores en materia trans y LGTBI.', 'V.1 · Igualdad real y efectiva de las personas trans y garantia de los derechos LGTBI'),
    q('topup-32-04', 'En las politicas publicas de igualdad, el principio de no discriminacion implica:', ['evitar tratos desfavorables por razon de sexo, identidad u orientacion protegida', 'reservar toda la funcion publica a un colectivo', 'suprimir el procedimiento administrativo', 'permitir represalias laborales'], 0, 'La igualdad material exige prevenir y corregir discriminaciones.', 'V.1 · Objeto y principios rectores'),
  ]);

  addQuestions(bank, 35, [
    q('topup-35-01', 'Las oficinas de asistencia en materia de registros no son solo ventanillas porque tambien realizan funciones de:', ['identificacion, firma, digitalizacion y copias autenticas', 'fiscalizacion externa', 'nombramiento de concejales', 'tramitacion de leyes organicas'], 0, 'La oficina moderna de asistencia combina registro con apoyo integral al ciudadano.', 'V.4 · Funciones'),
    q('topup-35-02', 'Si una persona fisica no obligada a relacionarse electronicamente carece de medios, la oficina puede prestarle asistencia mediante:', ['funcionario habilitado en los supuestos legales', 'simple entrega del expediente a un tercero', 'eliminacion del tramite de firma', 'sustitucion del interesado por el alcalde'], 0, 'La ley permite asistencia mediante funcionario habilitado con consentimiento.', 'V.4 · Asistencia electronica'),
    q('topup-35-03', 'Una copia autentica se diferencia de una copia simple porque:', ['tiene validez formal equivalente al original en los supuestos legales', 'carece de cualquier efecto', 'solo sirve para uso privado', 'no requiere actuacion administrativa alguna'], 0, 'La copia autentica exige actuacion habilitada y garantias de correspondencia.', 'V.4 · Digitalizacion y copias'),
    q('topup-35-04', 'El asiento registral debe reflejar, entre otros datos, la fecha y hora de entrada porque afecta al:', ['computo de plazos', 'numero de concejales del Pleno', 'sistema de Seguridad Social', 'clasificacion del suelo'], 0, 'La precision registral protege derechos y tiempos procedimentales.', 'V.4 · Funcionamiento'),
    q('topup-35-05', 'La comprobacion de la representacion es especialmente importante cuando el interesado pretende:', ['interponer un recurso o renunciar a derechos en nombre de otra persona', 'pedir informacion general anonima', 'consultar el horario de una oficina', 'leer un bando ya publicado'], 0, 'No toda actuacion admite la misma flexibilidad en materia de representacion.', 'V.4 · Representacion y apoderamientos'),
    q('topup-35-06', 'Un error en la digitalizacion de documentos en la oficina de asistencia puede provocar:', ['que el expediente electronico incorpore un documento incompleto o defectuoso', 'la aprobacion automatica de la solicitud', 'la anulacion del presupuesto', 'la perdida de la condicion de funcionario'], 0, 'La calidad de la digitalizacion es esencial para la validez y utilidad del expediente electronico.', 'V.4 · Digitalizacion y copias'),
  ]);

  addQuestions(bank, 36, [
    q('topup-36-01', 'La prevencion de riesgos laborales aplicada al puesto administrativo incluye medidas frente a riesgos:', ['ergonomicos, visuales y psicosociales', 'solo maritimos', 'exclusivamente mineros', 'reservados a la policia judicial'], 0, 'El trabajo administrativo tambien presenta riesgos propios que requieren prevencion.', 'V.5 · Riesgos y medidas preventivas del puesto administrativo'),
  ]);

  addQuestions(bank, 37, [
    q('topup-37-01', 'Un principio basico de proteccion de datos es la minimizacion, que exige tratar:', ['solo los datos adecuados, pertinentes y limitados a lo necesario', 'todos los datos posibles por si acaso', 'unicamente datos anonimos siempre', 'datos sin base juridica'], 0, 'La minimizacion limita el tratamiento a lo necesario para la finalidad.', 'V.6 · Principios del tratamiento'),
    q('topup-37-02', 'El responsable del tratamiento es quien:', ['determina los fines y medios del tratamiento', 'ejecuta materialmente siempre la politica del Gobierno', 'representa al sindicato mayoritario', 'fiscaliza externamente las cuentas'], 0, 'Responsable es quien decide sobre para que y como se tratan los datos.', 'V.6 · Responsable del tratamiento'),
    q('topup-37-03', 'El encargado del tratamiento trata datos personales:', ['por cuenta del responsable', 'siempre por cuenta propia', 'solo cuando es autoridad judicial', 'sin necesidad de instrucciones'], 0, 'El encargado actua siguiendo las instrucciones del responsable.', 'V.6 · Encargado del tratamiento'),
    q('topup-37-04', 'El delegado de proteccion de datos desempena funciones de:', ['asesoramiento, supervision y cooperacion con la autoridad de control', 'recaudacion ejecutiva', 'aprobacion de bandos', 'investidura del presidente'], 0, 'El DPD es una figura de garantia y enlace en materia de proteccion de datos.', 'V.6 · Delegado de proteccion de datos'),
    q('topup-37-05', 'Entre los derechos del interesado en proteccion de datos figura el derecho de:', ['supresion', 'mocion de censura', 'huelga general', 'aprovechamiento especial del dominio publico'], 0, 'Los derechos clasicos incluyen acceso, rectificacion, supresion, oposicion y otros.', 'V.6 · Derechos de las personas interesadas'),
    q('topup-37-06', 'Los derechos digitales incluidos en la LOPDGDD abarcan, entre otros, la proteccion de la intimidad en el uso de:', ['dispositivos digitales en el ambito laboral', 'diputaciones provinciales', 'padrones fiscales', 'presupuestos prorrogados'], 0, 'La ley reconoce tambien derechos digitales junto al regimen general de datos.', 'V.6 · Derechos digitales'),
    q('topup-37-07', 'La autoridad de control en materia de proteccion de datos en el ambito estatal es la:', ['Agencia Espanola de Proteccion de Datos', 'Intervencion General del Estado', 'Fiscalia General del Estado', 'Oficina del Censo Electoral'], 0, 'La AEPD es la autoridad estatal de control en proteccion de datos.', 'V.6 · Autoridades de proteccion de datos'),
  ]);

  const index = buildIndex(topics, bank);
  ensureMinimum(index);
  console.log(`Banco completado. Temas: ${index.length}. Preguntas totales: ${index.reduce((sum, item) => sum + item.preguntas, 0)}`);
}

main();
