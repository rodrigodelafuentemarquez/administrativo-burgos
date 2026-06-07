import fs from 'node:fs';
import path from 'node:path';

const rootDir = path.resolve('.');
const testsDir = path.join(rootDir, 'data', 'tests');
const programaDir = path.join(rootDir, 'src', 'content', 'programa');

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
    return {
      tema: index + 1,
      codigo: parseQuotedField(frontmatter, 'codigo'),
      titulo: parseQuotedField(frontmatter, 'titulo'),
    };
  });
}

function createQuestion(id, tema, pregunta, opciones, correcta, referencia, explicacion) {
  return { id, tema, pregunta, opciones, correcta, referencia, explicacion };
}

const additions = [
  createQuestion(
    'pdf-2025-burgos-q01',
    1,
    'En que fecha fue publicada la Constitucion Espanola en el Boletin Oficial del Estado?',
    ['El 6 de diciembre de 1978', 'El 27 de diciembre de 1978', 'El 29 de diciembre de 1978', 'Ninguna respuesta es correcta'],
    2,
    'PDF Burgos 2025 · pregunta 1',
    'La Constitucion fue publicada en el BOE el 29 de diciembre de 1978.'
  ),
  createQuestion(
    'pdf-2025-burgos-q03',
    1,
    'Ante quien se presenta el recurso de amparo segun la Constitucion Espanola?',
    ['Ante el Tribunal Supremo', 'Ante el Tribunal Constitucional', 'Ante el Consejo General del Poder Judicial', 'Ante cualquier juzgado o tribunal'],
    1,
    'PDF Burgos 2025 · pregunta 3',
    'El recurso de amparo constitucional se interpone ante el Tribunal Constitucional.'
  ),
  createQuestion(
    'pdf-2023-burgos-q01',
    1,
    'De conformidad con el articulo 167 de la Constitucion Espanola, los proyectos de reforma constitucional deberan ser aprobados:',
    ['Por mayoria de 2/3 del Senado', 'Por mayoria de 3/5 del Congreso', 'Por una mayoria de 3/5 de cada una de las Camaras', 'Por una mayoria de 2/3 de cada una de las Camaras'],
    2,
    'PDF Burgos 2023 · pregunta 1',
    'La reforma ordinaria de la Constitucion del articulo 167 CE exige mayoria de tres quintos en cada Camara.'
  ),
  createQuestion(
    'pdf-2023-burgos-q10',
    3,
    'Como se organiza territorialmente el Estado, segun el articulo 137 de la Constitucion Espanola?',
    ['En municipios, en provincias y en las Comunidades Autonomas que se constituyan', 'En municipios, mancomunidades, provincias, territorios insulares y Comunidades Autonomas', 'En entidades locales y autonomicas', 'En municipios, provincias, territorios insulares y en las Comunidades Autonomas que se constituyan'],
    0,
    'PDF Burgos 2023 · pregunta 10',
    'El articulo 137 CE organiza territorialmente el Estado en municipios, provincias y comunidades autonomas que se constituyan.'
  ),
  createQuestion(
    'pdf-2025-burgos-q09',
    3,
    'Cualquier alteracion de los limites de una provincia debera ser aprobada por:',
    ['Ley Organica de las Cortes Generales', 'Ley Ordinaria de las Cortes Generales', 'Decreto Ley del Gobierno', 'Acuerdo entre las Cortes Generales y la Comunidad Autonoma afectada'],
    0,
    'PDF Burgos 2025 · pregunta 9',
    'La alteracion de los limites provinciales requiere ley organica conforme al articulo 141 CE.'
  ),
  createQuestion(
    'pdf-2023-burgos-r02',
    4,
    'Conforme al articulo 97 de la Constitucion Espanola, el Gobierno NO dirige:',
    ['La politica interior y exterior', 'La Administracion civil y militar', 'La defensa del Estado', 'La funcion ejecutiva'],
    3,
    'PDF Burgos 2023 · reserva 2',
    'El Gobierno dirige la politica interior y exterior, la Administracion civil y militar y la defensa del Estado, y ejerce la funcion ejecutiva.'
  ),
  createQuestion(
    'pdf-2023-burgos-q21',
    7,
    'El Titulo X de la Ley 7/1985 regula los municipios de gran poblacion. Burgos es un municipio de gran poblacion?',
    ['Si', 'No', 'Esta en tramite', 'No hay ningun municipio de gran poblacion en Castilla y Leon'],
    0,
    'PDF Burgos 2023 · pregunta 21',
    'Burgos tiene la condicion de municipio de gran poblacion.'
  ),
  createQuestion(
    'pdf-2023-burgos-q22',
    7,
    'Quien realiza el control financiero en el Ayuntamiento de Burgos?',
    ['La Asesoria Juridica', 'La Intervencion General', 'Las Comisiones informativas', 'El Organo de Gestion Tributaria'],
    1,
    'PDF Burgos 2023 · pregunta 22',
    'El control financiero en el Ayuntamiento corresponde a la Intervencion General.'
  ),
  createQuestion(
    'pdf-2023-burgos-q23',
    7,
    'Quien ostenta la funcion de fe publica en el Ayuntamiento de Burgos?',
    ['La Asesoria Juridica', 'El Tribunal economico-administrativo', 'La Secretaria General', 'La Junta de Gobierno'],
    2,
    'PDF Burgos 2023 · pregunta 23',
    'La funcion de fe publica se vincula a la Secretaria General.'
  ),
  createQuestion(
    'pdf-2025-burgos-q26',
    7,
    'Segun el articulo 7.1 del Reglamento Organico y de Funcionamiento del Ayuntamiento de Burgos, se consideran concejales no adscritos:',
    ['Aquellos que no se han integrado en el grupo municipal que constituya la formacion politica por la que fueron elegidos', 'Aquellos que fueron elegidos por formaciones politicas que no han alcanzado el minimo de concejales para poder constituir un grupo municipal', 'Aquellos que abandonen o sean expulsados de su grupo municipal y mantengan la condicion de concejal', 'A y C son correctas'],
    3,
    'PDF Burgos 2025 · pregunta 26',
    'El reglamento considera no adscritos tanto a quienes no se integran en su grupo originario como a quienes lo abandonan o son expulsados.'
  ),
  createQuestion(
    'pdf-2025-burgos-q29',
    7,
    'De acuerdo con el articulo 3.1 del Reglamento del Tribunal Economico-Administrativo Municipal de Burgos:',
    ['El Tribunal estara formado exclusivamente por un presidente, un vocal y un vocal-secretario', 'El Tribunal estara formado por un presidente, un vocal en representacion de la parte reclamante, un vocal en representacion de la Hacienda municipal y un vocal-secretario', 'El Tribunal estara formado, como minimo, por un presidente, un vocal y un vocal-secretario', 'El Tribunal estara formado por un presidente, dos vocales y un secretario, este ultimo con voz pero sin voto'],
    2,
    'PDF Burgos 2025 · pregunta 29',
    'El reglamento municipal fija una composicion minima de presidente, vocal y vocal-secretario.'
  ),
  createQuestion(
    'pdf-2025-burgos-q44',
    7,
    'Para la defensa de los derechos de los vecinos ante el Ayuntamiento de Burgos, por ser municipio de gran poblacion, el Pleno creara una Comision especial denominada:',
    ['Comision especial de cuentas', 'Comision especial de sugerencias y reclamaciones', 'Comision especial de quejas', 'Comision especial de coordinacion'],
    1,
    'PDF Burgos 2025 · pregunta 44',
    'En los municipios de gran poblacion existe la Comision especial de sugerencias y reclamaciones.'
  ),
  createQuestion(
    'pdf-2025-burgos-q23',
    8,
    'Segun el articulo 14.1 del Tratado de la Union Europea, las funciones legislativa y presupuestaria son ejercidas por:',
    ['El Parlamento Europeo conjuntamente con el Consejo', 'El Parlamento Europeo', 'El Consejo', 'El Parlamento Europeo conjuntamente con el Consejo Europeo'],
    0,
    'PDF Burgos 2025 · pregunta 23',
    'El Parlamento Europeo y el Consejo ejercen conjuntamente la funcion legislativa y presupuestaria.'
  ),
  createQuestion(
    'pdf-2025-burgos-q31',
    8,
    'Conforme al articulo 288 del Tratado de Funcionamiento de la Union Europea, el reglamento:',
    ['Obligara al Estado miembro destinatario en cuanto al resultado que deba conseguirse, dejando a las autoridades nacionales la eleccion de la forma y los medios', 'Desarrolla las normas legislativas adoptadas por el Parlamento Europeo', 'Tiene alcance general, sera obligatorio en todos sus elementos y directamente aplicable en cada Estado miembro', 'Sera obligatorio en todos sus elementos y, cuando designe destinatarios, solo sera obligatorio para estos'],
    2,
    'PDF Burgos 2025 · pregunta 31',
    'El reglamento de la UE es obligatorio en todos sus elementos y directamente aplicable.'
  ),
  createQuestion(
    'pdf-2025-burgos-r01',
    8,
    'Los miembros del Comite de las Regiones:',
    ['Seran elegidos por un periodo renovable de cinco anos y no podran ser miembros simultaneamente del Parlamento Europeo', 'Seran elegidos por un periodo renovable de seis anos y no podran ser miembros simultaneamente del Parlamento Europeo', 'Seran elegidos por un periodo no renovable de cinco anos y no podran ser miembros simultaneamente del Parlamento Europeo', 'Seran elegidos por un periodo renovable de seis anos'],
    0,
    'PDF Burgos 2025 · reserva 1',
    'Los miembros del Comite de las Regiones tienen mandato renovable de cinco anos y no pueden ser simultaneamente eurodiputados.'
  ),
  createQuestion(
    'pdf-2025-burgos-q07',
    9,
    'Para reformar el vigente Estatuto de Autonomia de Castilla y Leon, el procedimiento requerira en todo caso la aprobacion de las Cortes de Castilla y Leon por:',
    ['Mayoria absoluta y posterior aprobacion por las Cortes Generales de mayoria simple', 'Mayoria absoluta y posterior aprobacion de las Cortes Generales mediante Ley Organica', 'Mayoria de dos tercios y posterior aprobacion del Congreso mediante Ley Organica', 'Mayoria de dos tercios y posterior aprobacion de las Cortes Generales mediante Ley Organica'],
    3,
    'PDF Burgos 2025 · pregunta 7',
    'La reforma estatutaria exige mayoria de dos tercios en las Cortes de Castilla y Leon y aprobacion estatal mediante ley organica.'
  ),
  createQuestion(
    'pdf-2025-burgos-q08',
    9,
    'Las instituciones basicas de la Comunidad de Castilla y Leon, segun su Estatuto de Autonomia, son:',
    ['Las Cortes y la Junta de Castilla y Leon', 'La Junta de Castilla y Leon y el Presidente', 'Las Cortes, el Presidente de la Junta de Castilla y Leon y el Procurador del Comun', 'Las Cortes, el Presidente y la Junta de Castilla y Leon'],
    3,
    'PDF Burgos 2025 · pregunta 8',
    'Las instituciones basicas son las Cortes, el Presidente y la Junta de Castilla y Leon.'
  ),
  createQuestion(
    'pdf-2023-burgos-q11',
    9,
    'Que Ley aprobo el Estatuto de Autonomia de Castilla y Leon?',
    ['Ley Organica 4/1985, de 25 de febrero', 'Ley Organica 4/1983, de 25 de febrero', 'Ley Organica 5/1985, de 25 de febrero', 'Ley Organica 5/1983, de 25 de febrero'],
    1,
    'PDF Burgos 2023 · pregunta 11',
    'El Estatuto de Autonomia de Castilla y Leon fue aprobado por la Ley Organica 4/1983.'
  ),
  createQuestion(
    'pdf-2023-burgos-q24',
    10,
    'El Codigo Civil recoge literalmente en su articulo 1.1 que las fuentes del ordenamiento juridico espanol son:',
    ['La Constitucion, las leyes y los reglamentos', 'Las leyes, la costumbre y los reglamentos', 'La ley, la costumbre y los principios generales del derecho', 'La Constitucion y la ley'],
    2,
    'PDF Burgos 2023 · pregunta 24',
    'El articulo 1.1 del Codigo Civil enumera la ley, la costumbre y los principios generales del derecho.'
  ),
  createQuestion(
    'pdf-2023-burgos-q25',
    10,
    'El articulo 86 de la Constitucion Espanola establece que:',
    ['El Gobierno podra dictar, siempre que se necesite, disposiciones legislativas provisionales que tomaran la forma de decretos-leyes', 'En caso de extraordinaria y urgente necesidad, el Gobierno podra dictar disposiciones legislativas provisionales que tomaran la forma de decretos-leyes', 'El Gobierno no puede dictar disposiciones legislativas', 'En caso de extraordinaria y urgente necesidad, el Gobierno podra dictar leyes especiales sin control parlamentario'],
    1,
    'PDF Burgos 2023 · pregunta 25',
    'El decreto-ley solo puede dictarse en caso de extraordinaria y urgente necesidad.'
  ),
  createQuestion(
    'pdf-2025-burgos-q14',
    11,
    'El articulo 40 de la Ley 39/2015 establece que toda notificacion debera ser cursada dentro del plazo de:',
    ['Cinco dias', 'Siete dias', 'Diez dias a partir de la fecha en que el acto haya sido dictado', 'Un mes desde la resolucion'],
    2,
    'PDF Burgos 2025 · pregunta 14',
    'La notificacion debe cursarse en el plazo de diez dias desde que el acto ha sido dictado.'
  ),
  createQuestion(
    'pdf-2023-burgos-q27',
    12,
    'La Ley 39/2015 indica que, cuando las normas reguladoras de los procedimientos no fijen el plazo maximo para resolver, este sera de:',
    ['Un mes', 'Dos meses', 'Tres meses', 'Seis meses'],
    2,
    'PDF Burgos 2023 · pregunta 27',
    'Si no existe plazo maximo especifico, el plazo general para resolver es de tres meses.'
  ),
  createQuestion(
    'pdf-2023-burgos-q29',
    12,
    'Segun el articulo 54 de la Ley 39/2015, los procedimientos administrativos podran iniciarse:',
    ['Solo a traves del registro general o del registro electronico', 'Por el interesado, aunque sea menor de edad, en cualquier caso', 'De oficio o a solicitud del interesado', 'En cualquier momento y sin tener que aportar datos personales'],
    2,
    'PDF Burgos 2023 · pregunta 29',
    'La iniciacion del procedimiento puede producirse de oficio o a solicitud del interesado.'
  ),
  createQuestion(
    'pdf-2023-burgos-q30',
    12,
    'Segun el articulo 84 de la Ley 39/2015, pondran fin al procedimiento administrativo:',
    ['La resolucion, el desistimiento, la renuncia cuando proceda y la declaracion de caducidad', 'La resolucion y la denuncia', 'Las respuestas a) y b)', 'Ninguna es correcta'],
    0,
    'PDF Burgos 2023 · pregunta 30',
    'La Ley 39/2015 enumera la resolucion y otras formas tasadas de terminacion, entre ellas desistimiento, renuncia y caducidad.'
  ),
  createQuestion(
    'pdf-2025-burgos-q16',
    12,
    'En que articulo de la Ley 39/2015 se recoge que los tramites que deban ser cumplimentados por los interesados deberan realizarse en el plazo de diez dias desde la notificacion del correspondiente acto?',
    ['Articulo 71', 'Articulo 72', 'Articulo 73', 'Articulo 74'],
    2,
    'PDF Burgos 2025 · pregunta 16',
    'El articulo 73 LPAC regula el cumplimiento de tramites por los interesados.'
  ),
  createQuestion(
    'pdf-2025-burgos-q17',
    12,
    'En relacion con el articulo 80 de la Ley 39/2015, cual de las siguientes afirmaciones referidas a la emision de informes es falsa?',
    ['Salvo disposicion expresa en contrario, los informes seran facultativos y no vinculantes', 'Si no se emiten en plazo, podran proseguirse las actuaciones salvo cuando se trate de un informe preceptivo', 'Si el informe debe ser emitido por otra Administracion y no llega en plazo, no podran proseguirse las actuaciones hasta que lo emita o se sustituya por uno propio', 'Los informes se emitiran preferentemente por medios electronicos en el plazo de diez dias, salvo disposicion especifica'],
    2,
    'PDF Burgos 2025 · pregunta 17',
    'La falta de informe de otra Administracion no paraliza siempre las actuaciones de forma absoluta; la opcion c formula incorrectamente ese efecto.'
  ),
  createQuestion(
    'pdf-2025-burgos-q18',
    12,
    'Segun la Ley 39/2015, la ejecucion forzosa por las Administraciones Publicas podra efectuarse por diversos medios. Indica la respuesta incorrecta:',
    ['Apremio sobre el patrimonio', 'Ejecucion subsidiaria', 'Multa progresiva', 'Compulsion sobre las personas'],
    2,
    'PDF Burgos 2025 · pregunta 18',
    'La Ley 39/2015 habla de multa coercitiva, no de multa progresiva.'
  ),
  createQuestion(
    'pdf-2023-burgos-q31',
    13,
    'De conformidad con la Ley 39/2015, los actos administrativos que no pongan fin a la via administrativa podran ser recurridos:',
    ['Potestativamente en reposicion', 'Preceptivamente en reposicion', 'En alzada', 'Solo cabra el recurso extraordinario de revision'],
    2,
    'PDF Burgos 2023 · pregunta 31',
    'Contra los actos que no ponen fin a la via administrativa procede el recurso de alzada.'
  ),
  createQuestion(
    'pdf-2025-burgos-q19',
    13,
    'Contra los actos firmes en via administrativa se podra interponer el siguiente recurso:',
    ['Recurso de alzada', 'Recurso potestativo de reposicion', 'Recurso extraordinario de revision', 'No cabe recurso administrativo, solo el recurso contencioso-administrativo'],
    2,
    'PDF Burgos 2025 · pregunta 19',
    'El recurso administrativo extraordinario frente a actos firmes es el recurso extraordinario de revision.'
  ),
  createQuestion(
    'pdf-2025-burgos-r01-lesividad',
    13,
    'Pueden las Administraciones Publicas impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados?',
    ['Si, los actos administrativos anulables, previa su declaracion de lesividad para el interes publico', 'Si, los actos administrativos nulos, previa su declaracion de lesividad para el interes publico', 'Si, los actos administrativos anulables, previo dictamen favorable del Consejo de Estado', 'Si, los actos administrativos nulos, previo dictamen favorable del Consejo de Estado'],
    0,
    'PDF Burgos 2023 · reserva 1',
    'Los actos favorables anulables exigen declaracion de lesividad antes de su impugnacion contenciosa.'
  ),
  createQuestion(
    'pdf-2025-burgos-q10',
    14,
    'Conforme a la Ley 40/2015, para la valida constitucion de un organo colegiado, a efectos de celebracion de sesiones, deliberaciones y toma de acuerdos, se requerira:',
    ['La asistencia presencial o a distancia de la mayoria de sus miembros, teniendo siempre cubiertos los puestos de presidente y secretario', 'La asistencia presencial o a distancia de la mayoria de sus miembros, teniendo siempre cubiertos los puestos de presidente y secretario o de quienes les suplan', 'La asistencia, presencial o a distancia, del presidente y secretario o de quienes les suplan, y la mayoria de sus miembros', 'La asistencia, presencial o a distancia, del presidente y secretario o de quienes les suplan, y la de la mitad, al menos, de sus miembros'],
    3,
    'PDF Burgos 2025 · pregunta 10',
    'La valida constitucion exige presidente y secretario o suplentes y al menos la mitad de los miembros.'
  ),
  createQuestion(
    'pdf-2025-burgos-q11',
    14,
    'El articulo 3 de la Ley 40/2015 establece que las Administraciones Publicas deberan respetar en su actuacion y relaciones los siguientes principios:',
    ['Garantizar a los ciudadanos unos procedimientos administrativos eficaces, aunque sean complejos', 'Cooperacion, colaboracion y coordinacion entre las Administraciones europeas', 'Participacion, objetividad y transparencia de la actuacion administrativa', 'Buena fe, confianza plena e incondicional y lealtad institucional'],
    2,
    'PDF Burgos 2025 · pregunta 11',
    'La Ley 40/2015 incluye participacion, objetividad y transparencia entre sus principios de actuacion.'
  ),
  createQuestion(
    'pdf-2025-burgos-q22',
    14,
    'El articulo 2.1 de la Ley 40/2015 establece que la presente Ley se aplica al sector publico que comprende:',
    ['La Administracion General del Estado, las Administraciones de las Comunidades Autonomas y las entidades que integran la Administracion Local', 'La Administracion General del Estado, las Administraciones de las Comunidades Autonomas, las entidades que integran la Administracion Local y el sector publico institucional', 'La Administracion General del Estado, las Administraciones de las Comunidades Autonomas, las entidades que integran la Administracion Local y las entidades de derecho privado vinculadas o dependientes de las Administraciones Publicas', 'Cualesquiera organismos publicos y entidades de derecho publico vinculados o dependientes de las Administraciones Publicas'],
    1,
    'PDF Burgos 2025 · pregunta 22',
    'La Ley 40/2015 extiende su aplicacion al sector publico institucional, ademas de Estado, comunidades autonomas y entidades locales.'
  ),
  createQuestion(
    'pdf-2023-burgos-q34',
    16,
    'De conformidad con la Ley 9/2017, NO son contratos de suministro:',
    ['Los que tengan por objeto la adquisicion de energia primaria', 'Los contratos de fabricacion', 'Los de adquisicion de equipos y sistemas de telecomunicaciones', 'Los contratos de adquisicion de programas de ordenador desarrollados a medida'],
    3,
    'PDF Burgos 2023 · pregunta 34',
    'Los programas de ordenador desarrollados a medida se excluyen del contrato de suministro.'
  ),
  createQuestion(
    'pdf-2023-burgos-q35',
    16,
    'De conformidad con la Ley 9/2017:',
    ['No podran ser objeto del contrato de servicios los que impliquen ejercicio de autoridad inherente a los poderes publicos', 'Podran ser objeto del contrato de servicios los que impliquen ejercicio de autoridad previo acuerdo expreso del Pleno', 'Podran ser objeto del contrato de servicios los que impliquen ejercicio de autoridad previo acuerdo expreso de la Junta de Gobierno Local', 'No podran ser objeto de contrato de servicios los que impliquen ejercicio de autoridad salvo en materia tributaria'],
    0,
    'PDF Burgos 2023 · pregunta 35',
    'Los servicios que impliquen ejercicio de autoridad no pueden ser objeto de contrato de servicios.'
  ),
  createQuestion(
    'pdf-2023-burgos-q36',
    16,
    'En que procedimiento de adjudicacion solo podran presentar proposiciones aquellos empresarios que, a su solicitud y en atencion a su solvencia, sean seleccionados por el organo de contratacion?',
    ['Procedimiento abierto', 'Procedimiento abierto simplificado', 'Procedimiento restringido', 'Procedimiento simplificadisimo'],
    2,
    'PDF Burgos 2023 · pregunta 36',
    'Esa configuracion corresponde al procedimiento restringido.'
  ),
  createQuestion(
    'pdf-2025-burgos-q33',
    16,
    'En los Ayuntamientos de los municipios de gran poblacion, segun la disposicion adicional segunda de la Ley 9/2017, las competencias como organo de contratacion se ejerceran por:',
    ['El Pleno', 'La Junta de Gobierno Local', 'El Alcalde', 'Ninguna de las anteriores respuestas es correcta'],
    1,
    'PDF Burgos 2025 · pregunta 33',
    'En los municipios de gran poblacion, la competencia como organo de contratacion se atribuye a la Junta de Gobierno Local.'
  ),
  createQuestion(
    'pdf-2025-burgos-q34',
    16,
    'De conformidad con el articulo 44 de la Ley 9/2017, podran ser objeto de recurso especial en materia de contratacion:',
    ['Los anuncios de licitacion', 'Los pliegos', 'Los acuerdos de adjudicacion', 'Todas las respuestas anteriores son correctas'],
    3,
    'PDF Burgos 2025 · pregunta 34',
    'Los anuncios de licitacion, los pliegos y los acuerdos de adjudicacion pueden ser objeto de recurso especial en los supuestos legales.'
  ),
  createQuestion(
    'pdf-2025-burgos-q21',
    17,
    'Senale el articulo de la Ley 40/2015 que regula el principio de la potestad sancionadora segun el cual seran de aplicacion las disposiciones sancionadoras vigentes en el momento de producirse los hechos que constituyan infraccion administrativa:',
    ['Articulo 25. Principio de legalidad', 'Articulo 26. Irretroactividad', 'Articulo 27. Principio de tipicidad', 'Articulo 28. Responsabilidad'],
    1,
    'PDF Burgos 2025 · pregunta 21',
    'La irretroactividad de las disposiciones sancionadoras se regula en el articulo 26 LRJSP.'
  ),
  createQuestion(
    'pdf-2023-burgos-q32',
    17,
    'Senala la afirmacion correcta de conformidad con la Ley 40/2015 en materia de potestad sancionadora:',
    ['Las normas definidoras de sanciones e infracciones seran susceptibles de aplicacion analogica si son favorables al presunto infractor', 'El principio de responsabilidad permite sancionar a las personas fisicas o juridicas responsables solo a titulo de dolo', 'El principio de proporcionalidad permite que las sanciones administrativas no pecuniarias impliquen penas privativas de libertad en caso de reincidencia', 'Seran de aplicacion las disposiciones sancionadoras vigentes en el momento de producirse los hechos que constituyan infraccion administrativa'],
    3,
    'PDF Burgos 2023 · pregunta 32',
    'En materia sancionadora rige la aplicacion de las disposiciones vigentes al tiempo de los hechos, salvo retroactividad favorable en los terminos legales.'
  ),
  createQuestion(
    'pdf-2023-burgos-q26-ord',
    21,
    'Conforme al articulo 123 de la Ley 7/1985, corresponde al Pleno:',
    ['La aprobacion y modificacion de las ordenanzas y reglamentos municipales', 'La aprobacion y modificacion de las leyes municipales', 'La aprobacion y modificacion de los bandos', 'La aprobacion de decretos-leyes municipales'],
    0,
    'PDF Burgos 2023 · pregunta 26',
    'La aprobacion y modificacion de ordenanzas y reglamentos municipales corresponde al Pleno.'
  ),
  createQuestion(
    'pdf-2025-burgos-q32-org',
    21,
    'Segun el articulo 123 de la Ley 7/1985:',
    ['Los reglamentos de naturaleza organica se aprueban por mayoria absoluta del Pleno', 'Tienen naturaleza organica las normas de division del municipio en distritos y la regulacion de los organos de los distritos', 'Tienen naturaleza organica las normas que regulan el Consejo Social de la ciudad', 'Todas son correctas'],
    3,
    'PDF Burgos 2025 · pregunta 32',
    'Las tres afirmaciones forman parte del regimen organico municipal previsto para municipios de gran poblacion.'
  ),
  createQuestion(
    'pdf-2025-burgos-q42',
    28,
    'Aprobado inicialmente el presupuesto general de la entidad local, de conformidad con el articulo 169 del texto refundido de la Ley Reguladora de las Haciendas Locales:',
    ['Se expondra al publico, previo anuncio en el boletin oficial correspondiente, por quince dias', 'Se expondra al publico en el tablon de anuncios y en las Secretarias Generales por plazo de un mes', 'La aprobacion inicial del presupuesto no necesita publicacion', 'Los interesados podran presentar reclamaciones que el Pleno debera resolver en veinte dias desde su presentacion'],
    0,
    'PDF Burgos 2025 · pregunta 42',
    'La aprobacion inicial del presupuesto local se somete a exposicion publica por quince dias.'
  ),
  createQuestion(
    'pdf-2023-burgos-q42',
    32,
    'De acuerdo con el articulo 51 de la Ley Organica para la igualdad efectiva de mujeres y hombres, cual de las siguientes NO es una obligacion de las Administraciones Publicas en aplicacion del principio de igualdad entre mujeres y hombres?',
    ['Fomentar la formacion en igualdad tanto en el acceso al empleo publico como a lo largo de la carrera profesional', 'Promover la presencia equilibrada de mujeres y hombres en los organos de seleccion y valoracion', 'Facilitar la conciliacion de la vida personal, familiar y laboral mediante la reduccion de la promocion profesional', 'Remover los obstaculos que impliquen la pervivencia de cualquier tipo de discriminacion'],
    2,
    'PDF Burgos 2023 · pregunta 42',
    'La conciliacion no puede articularse a costa de reducir la promocion profesional.'
  ),
  createQuestion(
    'pdf-2023-burgos-q43',
    32,
    'Que articulo de la Constitucion Espanola establece que los espanoles son iguales ante la ley, sin que pueda haber discriminacion alguna, entre otras, por razon de sexo?',
    ['Articulo 15', 'Articulo 14', 'Articulo 10', 'Articulo 27'],
    1,
    'PDF Burgos 2023 · pregunta 43',
    'La igualdad y prohibicion de discriminacion por razon de sexo se recoge en el articulo 14 CE.'
  ),
  createQuestion(
    'pdf-2025-burgos-q53',
    32,
    'El articulo 1.1 de la Ley Organica 3/2007 dice textualmente que:',
    ['Las personas son iguales en dignidad humana, e iguales en derechos y deberes', 'Las mujeres y los hombres son iguales en dignidad humana, e iguales en derechos y deberes', 'Las personas son iguales ante la ley, e iguales en derechos y deberes', 'Las mujeres y los hombres son iguales ante la ley, e iguales en derechos y deberes'],
    1,
    'PDF Burgos 2025 · pregunta 53',
    'La Ley Organica 3/2007 arranca afirmando la igualdad en dignidad humana y en derechos y deberes de mujeres y hombres.'
  ),
  createQuestion(
    'pdf-2023-burgos-r05',
    32,
    'Segun el articulo 1 de la Ley Organica para la igualdad efectiva de mujeres y hombres, se pretende la eliminacion de la discriminacion de la mujer en todos los ambitos y, singularmente, en las esferas:',
    ['Politica, civil, laboral, economica, social y cultural', 'Politica, civil, cultural, familiar, social y de la tercera edad', 'Politica, civil, laboral, empresarial y social', 'Politica, civil, empresarial, economica, deportiva y familiar'],
    0,
    'PDF Burgos 2023 · reserva 5',
    'La ley cita expresamente las esferas politica, civil, laboral, economica, social y cultural.'
  ),
  createQuestion(
    'pdf-2025-burgos-q47',
    35,
    'El servicio 010 de atencion ciudadana realizara los siguientes servicios. Indique cual NO es correcto:',
    ['Dar informacion municipal y de la ciudad de Burgos agil y verazmente', 'Canalizar avisos o incidencias, reclamaciones y sugerencias', 'Realizacion de diversos tramites municipales', 'Expedicion de copias selladas de los documentos originales que aporten los interesados'],
    3,
    'PDF Burgos 2023 · pregunta 47',
    'La expedicion de copias selladas no forma parte del servicio 010 de atencion ciudadana.'
  ),
  createQuestion(
    'pdf-2025-burgos-q49-reg',
    35,
    'Cuando se entiende presentado un documento en un registro, si se realizo la presentacion en un dia inhabil?',
    ['A la primera hora habil del primer dia habil siguiente', 'A la primera hora del primer dia habil siguiente', 'En el dia inhabil de su presentacion', 'No se pueden presentar documentos en un dia inhabil'],
    0,
    'PDF Burgos 2025 · pregunta 49',
    'La presentacion en dia inhabil se entiende realizada en la primera hora habil del primer dia habil siguiente, salvo norma especial.'
  ),
  createQuestion(
    'pdf-2025-burgos-q58',
    35,
    'Cual de los siguientes es un documento de un particular dirigido a la Administracion?',
    ['Solicitud', 'Informe', 'Traslado', 'Certificacion'],
    0,
    'PDF Burgos 2025 · pregunta 58',
    'La solicitud es el documento tipico del particular dirigido a la Administracion.'
  ),
  createQuestion(
    'pdf-2023-burgos-q41',
    36,
    'Segun la Ley de Prevencion de Riesgos Laborales, las enfermedades, patologias o lesiones sufridas con motivo u ocasion del trabajo se consideraran como:',
    ['Proteccion de los trabajadores', 'Danos derivados del trabajo', 'Riesgo laboral grave e inminente', 'Ninguna es correcta'],
    1,
    'PDF Burgos 2023 · pregunta 41',
    'La Ley de Prevencion de Riesgos Laborales define esos supuestos como danos derivados del trabajo.'
  ),
  createQuestion(
    'pdf-2025-burgos-q54',
    36,
    'Cual es el ambito de aplicacion de la Ley 31/1995, de Prevencion de Riesgos Laborales?',
    ['Es de aplicacion en todos los ambitos sin excepcion', 'Aunque pretende ser una ley aplicable a todos los ambitos, ella misma proclama ciertas exclusiones', 'Se aplica exclusivamente a las relaciones de caracter administrativo o estatutario del personal al servicio de las Administraciones Publicas', 'Se aplica exclusivamente a las relaciones laborales reguladas en el Estatuto de los Trabajadores'],
    1,
    'PDF Burgos 2025 · pregunta 54',
    'La ley tiene un ambito amplio de aplicacion, pero contempla exclusiones expresas.'
  ),
  createQuestion(
    'pdf-2025-burgos-q55',
    36,
    'Segun el articulo 4 de la Ley 31/1995, se entiende por riesgo grave e inminente:',
    ['La posibilidad de que un trabajador sufra un determinado dano grave derivado del trabajo y que resulte probable que se materialice en un futuro inmediato', 'La posibilidad de que un trabajador sufra lesiones o enfermedades graves derivadas del trabajo y que resulte probable que se materialice en un futuro inmediato', 'Aquel que resulte probable racionalmente que se materialice en un futuro inmediato y pueda suponer un dano grave para la salud de los trabajadores', 'Aquel que origine riesgos para la salud y seguridad de los trabajadores y que se materialice en un futuro inmediato'],
    2,
    'PDF Burgos 2025 · pregunta 55',
    'La definicion legal pone el acento en la probabilidad racional de materializacion inmediata y en el dano grave para la salud.'
  ),
  createQuestion(
    'pdf-2025-burgos-q56',
    36,
    'Para calificar un riesgo desde el punto de vista de su gravedad, se valoraran conjuntamente la severidad del dano y:',
    ['La probabilidad de que se produzca', 'La cantidad de trabajadores de la empresa', 'La existencia o no de equipos individuales de proteccion', 'Las condiciones de trabajo'],
    0,
    'PDF Burgos 2025 · pregunta 56',
    'La gravedad del riesgo se valora atendiendo a la severidad del dano y a la probabilidad de que llegue a producirse.'
  ),
  createQuestion(
    'pdf-2023-burgos-q49-lopd',
    37,
    'Segun la Ley Organica de Proteccion de Datos Personales y garantia de los derechos digitales, a partir de que edad el tratamiento de los datos personales de un menor podra fundarse unicamente en su consentimiento?',
    ['Cuando sea mayor de 14 anos', 'Cuando sea mayor de 18 anos', 'Cuando sea mayor de 16 anos', 'Cuando sea mayor de 12 anos'],
    0,
    'PDF Burgos 2023 · pregunta 49',
    'La LOPDGDD fija en 14 anos la edad a partir de la cual el menor puede consentir por si mismo el tratamiento de sus datos.'
  ),
  createQuestion(
    'pdf-2025-burgos-q52',
    37,
    'Cual es el objeto de la Ley Organica 3/2018, de Proteccion de Datos Personales y garantia de los derechos digitales?',
    ['Adaptar el ordenamiento juridico espanol al Reglamento (UE) 2016/679', 'Garantizar los derechos electronicos de la ciudadania al mandato del articulo 22.4 CE', 'Exigir a las autoridades de proteccion de datos una maxima eficiencia en materia de seguridad', 'Todas son correctas'],
    0,
    'PDF Burgos 2025 · pregunta 52',
    'La Ley Organica 3/2018 adapta el ordenamiento espanol al RGPD y completa su desarrollo interno.'
  ),
  createQuestion(
    'pdf-2025-burgos-r06',
    37,
    'El empleador podra acceder a los contenidos derivados del uso de medios digitales facilitados a los trabajadores?:',
    ['Si, en cualquier caso', 'Si, para el control de la productividad del trabajador', 'No, porque el trabajador tiene derecho a la proteccion de la intimidad en el uso de dispositivos digitales', 'Si, solo a los efectos de controlar el cumplimiento de las obligaciones laborales o estatutarias y de garantizar la integridad de dichos dispositivos'],
    3,
    'PDF Burgos 2025 · reserva 6',
    'El acceso empresarial a esos contenidos esta limitado a fines de control laboral y garantia de integridad de los dispositivos, con respeto a la intimidad.'
  ),
  createQuestion(
    'pdf-2023-burgos-q45',
    38,
    'La relacion electronica con las Administraciones Publicas para las personas juridicas:',
    ['Es una obligacion', 'Es una opcion', 'Es igual que para las personas fisicas', 'Ninguna de las respuestas anteriores es correcta'],
    0,
    'PDF Burgos 2023 · pregunta 45',
    'Las personas juridicas estan obligadas a relacionarse electronicamente con las Administraciones.'
  ),
  createQuestion(
    'pdf-2023-burgos-q46',
    38,
    'De acuerdo con el articulo 38 de la Ley 40/2015, la sede electronica es:',
    ['Aquella sede administrativa donde se controla la red intranet de una Administracion Publica', 'La direccion electronica, disponible para los ciudadanos a traves de redes de telecomunicaciones, cuya titularidad corresponde a una Administracion Publica o a organismos o entidades de derecho publico en el ejercicio de sus competencias', 'La sede donde radica la Direccion General de nuevas tecnologias', 'Ninguna es correcta'],
    1,
    'PDF Burgos 2023 · pregunta 46',
    'La sede electronica es una direccion electronica oficial cuya titularidad corresponde a una Administracion u organismo publico.'
  ),
  createQuestion(
    'pdf-2025-burgos-q57',
    38,
    'En que articulo de la Ley 39/2015 se establece que las notificaciones se practicaran preferentemente por medios electronicos?',
    ['Articulo 41', 'Articulo 38', 'Articulo 14', 'Articulo 51'],
    0,
    'PDF Burgos 2025 · pregunta 57',
    'El articulo 41 LPAC regula la practica de las notificaciones y establece su preferencia por medios electronicos.'
  ),
  createQuestion(
    'pdf-2025-burgos-q47-reg',
    38,
    'Los registros telematicos permiten la presentacion de solicitudes:',
    ['En el mismo horario que las oficinas presenciales', 'De lunes a viernes, las 24 horas del dia', 'De lunes a viernes, de 8 a 20 horas y los sabados de 9 a 14 horas', 'Todos los dias del ano, las 24 horas del dia'],
    3,
    'PDF Burgos 2025 · pregunta 47',
    'El registro electronico permite la presentacion de solicitudes todos los dias del ano durante las 24 horas.'
  ),
  createQuestion(
    'pdf-2023-burgos-q48-doc',
    39,
    'Segun la Ley 40/2015, los documentos electronicos que contengan actos administrativos que afecten a derechos o intereses de los particulares deberan conservarse en:',
    ['El Archivo General de la Administracion', 'Soportes de naturaleza electronica', 'Cualquier formato o soporte que asegure la identidad e integridad de la informacion necesaria para reproducirlo', 'Siempre en formato papel'],
    1,
    'PDF Burgos 2023 · pregunta 48',
    'Los documentos electronicos con efectos sobre derechos o intereses de particulares deben conservarse en soporte electronico.'
  ),
];

function normalizeText(value) {
  return String(value ?? '').trim().toLowerCase();
}

function readQuestions(filePath) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeQuestions(filePath, questions) {
  fs.writeFileSync(filePath, `${JSON.stringify(questions, null, 2)}\n`);
}

function ensureQuestions() {
  const topics = loadOfficialTopics();
  const byTema = new Map(additions.reduce((acc, item) => {
    if (!acc.has(item.tema)) acc.set(item.tema, []);
    acc.get(item.tema).push(item);
    return acc;
  }, new Map()));

  for (const [tema, extras] of byTema.entries()) {
    const fileName = `tema-${String(tema).padStart(2, '0')}.json`;
    const filePath = path.join(testsDir, fileName);
    const current = readQuestions(filePath);
    const seenIds = new Set(current.map((item) => item.id));
    const seenQuestions = new Set(current.map((item) => normalizeText(item.pregunta)));
    for (const extra of extras) {
      if (seenIds.has(extra.id) || seenQuestions.has(normalizeText(extra.pregunta))) continue;
      current.push(extra);
    }
    current.sort((a, b) => String(a.id).localeCompare(String(b.id), 'es'));
    writeQuestions(filePath, current);
  }

  const index = topics
    .map((topic) => {
      const fileName = `tema-${String(topic.tema).padStart(2, '0')}.json`;
      const filePath = path.join(testsDir, fileName);
      const questions = readQuestions(filePath);
      if (!questions.length) return null;
      return {
        tema: topic.tema,
        archivo: fileName,
        preguntas: questions.length,
        titulo: `${topic.codigo} · ${topic.titulo}`,
      };
    })
    .filter(Boolean);

  fs.writeFileSync(path.join(testsDir, 'index.json'), `${JSON.stringify(index, null, 2)}\n`);
  console.log(`Preguntas PDF anadidas sobre ${byTema.size} temas.`);
}

ensureQuestions();
