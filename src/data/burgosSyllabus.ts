export type MatchQuality = 'alta' | 'parcial' | 'pendiente';

export type CurrentTopicMatch = {
  tema: number;
  slug: string;
  titulo: string;
  calidad: Exclude<MatchQuality, 'pendiente'>;
  nota?: string;
};

export type OfficialTopic = {
  id: string;
  grupo: string;
  numero: number;
  titulo: string;
  prioridad: 'normal' | 'alta' | 'critica';
  ejercicios: Array<'test' | 'practico' | 'desarrollo'>;
  estado: 'pendiente' | 'base parcial' | 'base aprovechable';
  matches: CurrentTopicMatch[];
};

export type OfficialGroup = {
  id: string;
  titulo: string;
  descripcion: string;
  topics: OfficialTopic[];
};

const topic = (
  grupo: string,
  numero: number,
  titulo: string,
  prioridad: OfficialTopic['prioridad'],
  estado: OfficialTopic['estado'],
  matches: CurrentTopicMatch[] = [],
): OfficialTopic => ({
  id: `${grupo.toLowerCase()}-${numero}`,
  grupo,
  numero,
  titulo,
  prioridad,
  ejercicios: grupo === 'I' || grupo === 'II'
    ? ['test', 'desarrollo']
    : ['test', 'practico', 'desarrollo'],
  estado,
  matches,
});

const match = (
  tema: number,
  titulo: string,
  calidad: Exclude<MatchQuality, 'pendiente'>,
  nota?: string,
): CurrentTopicMatch => ({
  tema,
  slug: `tema-${String(tema).padStart(2, '0')}`,
  titulo,
  calidad,
  nota,
});

export const officialGroups: OfficialGroup[] = [
  {
    id: 'grupo-i',
    titulo: 'Grupo I. Organizacion del Estado, UE, entidades locales y Castilla y Leon',
    descripcion: 'Bloque institucional para test y tercer ejercicio.',
    topics: [
      topic('I', 1, 'La Constitucion Espanola (I): estructura, principios, valores, derechos y deberes fundamentales, garantia y suspension.', 'normal', 'base aprovechable', [
        match(1, 'La Constitucion espanola de 1978. Caracteristicas y estructura. Derechos y deberes fundamentales. Garantias y suspension.', 'alta'),
      ]),
      topic('I', 2, 'La Constitucion Espanola (II): Corona, Cortes Generales, Gobierno y Administracion, Poder Judicial.', 'normal', 'base aprovechable', [
        match(3, 'La Jefatura del Estado: la Corona. Sucesion y regencia. Las funciones constitucionales del Rey.', 'alta'),
        match(4, 'Las Cortes Generales. Composicion, atribuciones y funcionamiento.', 'alta'),
        match(5, 'El Gobierno y la Administracion. El Gobierno y la Administracion General del Estado.', 'parcial'),
        match(6, 'El Poder Judicial. Organizacion judicial espanola.', 'parcial'),
      ]),
      topic('I', 3, 'La Constitucion Espanola (III): organizacion territorial, comunidades autonomas, estatutos y distribucion competencial.', 'normal', 'base aprovechable', [
        match(7, 'La organizacion territorial del Estado. Las Comunidades Autonomas. El sistema de distribucion competencial.', 'alta'),
      ]),
      topic('I', 4, 'El Gobierno y la Administracion del Estado, la administracion publica en el Ordenamiento Juridico Espanol.', 'normal', 'base aprovechable', [
        match(5, 'El Gobierno y la Administracion. Administracion General del Estado.', 'parcial'),
        match(13, 'Las Administraciones Publicas. Principios de organizacion administrativa.', 'parcial'),
      ]),
      topic('I', 5, 'Las entidades locales: tipologia. Regimen local espanol, Ley de Bases de Regimen Local y Ley de Haciendas Locales.', 'normal', 'base aprovechable', [
        match(9, 'Regimen Local espanol. Clases de Entes Locales. Regulacion juridica.', 'alta'),
        match(30, 'Presupuesto de las Entidades Locales. Gestion economica local.', 'parcial', 'Solo sirve para la parte de haciendas locales.'),
      ]),
      topic('I', 6, 'El municipio: concepto y elementos. Termino municipal. Poblacion y empadronamiento.', 'normal', 'base aprovechable', [
        match(9, 'Regimen Local espanol. Clases de Entes Locales. Regulacion juridica.', 'parcial', 'Falta desarrollo especifico de municipio, poblacion y padron.'),
      ]),
      topic('I', 7, 'Organizacion politica y administrativa del Ayuntamiento de Burgos: Pleno, alcalde, tenientes de alcalde, Junta de Gobierno Local, Secretaria, Intervencion y Gestion Tributaria.', 'alta', 'base aprovechable'),
      topic('I', 8, 'La Union Europea. Instituciones comunitarias principales.', 'normal', 'base aprovechable', [
        match(41, 'La Union Europea: origen, evolucion e instituciones europeas.', 'alta'),
      ]),
      topic('I', 9, 'La Comunidad de Castilla y Leon. Estatuto de Autonomia: estructura, derechos, principios, competencias y reforma.', 'normal', 'base aprovechable', [
        match(8, 'El Estatuto de Autonomia de Castilla y Leon. Organizacion de la Comunidad Autonoma.', 'alta'),
        match(47, 'Estatuto de Autonomia de Castilla y Leon e instituciones propias.', 'parcial'),
      ]),
    ],
  },
  {
    id: 'grupo-ii',
    titulo: 'Grupo II. Derecho y regimen juridico de las Administraciones Publicas',
    descripcion: 'Bloque juridico transversal para test y tercer ejercicio.',
    topics: [
      topic('II', 1, 'Fuentes del derecho administrativo, jerarquia, ley, decreto-ley, decreto legislativo, reglamento y otras fuentes.', 'normal', 'base aprovechable', [
        match(11, 'Derecho administrativo. Jerarquia de las fuentes, ley y reglamento.', 'alta'),
        match(12, 'Conceptos de Administracion Publica y Derecho administrativo. Fuentes.', 'alta'),
      ]),
      topic('II', 2, 'Acto administrativo: concepto, clases, elementos, motivacion, notificacion, eficacia y validez.', 'normal', 'base aprovechable', [
        match(16, 'El acto administrativo: concepto, clases, requisitos, eficacia, invalidez y revision.', 'alta'),
      ]),
      topic('II', 3, 'Procedimiento administrativo comun: concepto, naturaleza, principios y fases.', 'normal', 'base aprovechable', [
        match(15, 'Ley de Procedimiento Administrativo Comun. Fases, obligacion de resolver y silencio.', 'alta'),
      ]),
      topic('II', 4, 'Revision de actos, recursos administrativos, revocacion, rectificacion y jurisdiccion contencioso-administrativa.', 'normal', 'base aprovechable', [
        match(16, 'Acto administrativo. Invalidez y revision de oficio.', 'parcial'),
        match(17, 'Los recursos administrativos. Principios generales y clases.', 'alta'),
        match(19, 'Jurisdiccion Contencioso-Administrativa.', 'parcial'),
      ]),
      topic('II', 5, 'Regimen juridico del sector publico, organos, organos colegiados y tecnicas de atribucion de competencias.', 'normal', 'base aprovechable', [
        match(13, 'Administraciones Publicas y principios de organizacion administrativa.', 'parcial'),
        match(14, 'Ley de Regimen Juridico del Sector Publico. Organos y relaciones interadministrativas.', 'alta'),
      ]),
      topic('II', 6, 'Responsabilidad de la Administracion Publica y responsabilidad patrimonial de autoridades y personal.', 'normal', 'base aprovechable', [
        match(18, 'Responsabilidad de las Administraciones Publicas y de sus autoridades y personal.', 'alta'),
      ]),
      topic('II', 7, 'Contratos del sector publico: tipologia, partes, expediente, adjudicacion, efectos, extincion, invalidez y recursos.', 'normal', 'base aprovechable', [
        match(20, 'La contratacion administrativa: clases, ejecucion, extincion y esfera local.', 'parcial'),
        match(42, 'La contratacion publica. LCSP y especialidades locales.', 'alta'),
      ]),
      topic('II', 8, 'Potestad sancionadora: concepto, principios, procedimiento, medidas y especial referencia local.', 'alta', 'pendiente'),
      topic('II', 9, 'Bienes de las entidades locales: dominio publico, patrimoniales, enajenacion, cesion y utilizacion.', 'normal', 'base aprovechable', [
        match(27, 'Clasificacion y regimen juridico de los bienes de las Entidades Locales.', 'alta'),
      ]),
      topic('II', 10, 'Formas de actividad administrativa, servicio publico, gestion, remunicipalizacion e iniciativa economica publica.', 'normal', 'pendiente'),
      topic('II', 11, 'Funcionamiento de organos colegiados locales: convocatorias, orden del dia, constitucion y votaciones.', 'normal', 'base aprovechable', [
        match(26, 'Funcionamiento de los organos colegiados locales.', 'alta'),
      ]),
      topic('II', 12, 'Ordenanzas y reglamentos de las entidades locales. Clases, aprobacion y bandos.', 'alta', 'pendiente'),
    ],
  },
  {
    id: 'grupo-iii',
    titulo: 'Grupo III. Regimen juridico de los empleados publicos',
    descripcion: 'Bloque critico: test, supuesto practico y tercer ejercicio.',
    topics: [
      topic('III', 1, 'Personal al servicio de las entidades locales, clases, regimen juridico, provision, derechos, deberes, carrera y promocion interna.', 'critica', 'base aprovechable', [
        match(22, 'Personal al servicio de las Administraciones Publicas. Derechos, deberes e incompatibilidades.', 'parcial'),
        match(28, 'Personal funcionario local: regimen juridico, seleccion, provision, promocion y situaciones.', 'alta'),
      ]),
      topic('III', 2, 'Adquisicion y perdida de la condicion de funcionario. Situaciones administrativas.', 'critica', 'base aprovechable', [
        match(28, 'Personal funcionario local: seleccion, provision, promocion y situaciones.', 'alta'),
        match(46, 'Funcion Publica de Castilla y Leon. Acceso, provision, carrera y situaciones.', 'parcial'),
      ]),
      topic('III', 3, 'Personal laboral al servicio de las Administraciones Publicas: seleccion, derechos, deberes e incompatibilidades.', 'critica', 'base aprovechable', [
        match(29, 'Personal laboral al servicio de las Corporaciones Locales.', 'alta'),
        match(22, 'Personal al servicio de las Administraciones Publicas.', 'parcial'),
      ]),
      topic('III', 4, 'Derecho de sindicacion y huelga. Regimen de incompatibilidades.', 'critica', 'base parcial', [
        match(22, 'Personal al servicio de las Administraciones Publicas. Incompatibilidades.', 'parcial', 'Falta desarrollar sindicacion y huelga.'),
      ]),
      topic('III', 5, 'Texto refundido de la Ley General de la Seguridad Social: campo de aplicacion, estructura y accion protectora.', 'critica', 'base parcial', [
        match(30, 'Seguridad Social del personal al servicio de la Administracion Local.', 'parcial'),
        match(45, 'Retribuciones, nomina y Seguridad Social del personal laboral.', 'parcial'),
      ]),
    ],
  },
  {
    id: 'grupo-iv',
    titulo: 'Grupo IV. Gestion financiera y urbanismo',
    descripcion: 'Bloque critico: test, supuesto practico y tercer ejercicio.',
    topics: [
      topic('IV', 1, 'Tributos locales, potestad reglamentaria tributaria, ordenanzas fiscales e impugnacion.', 'critica', 'pendiente'),
      topic('IV', 2, 'Presupuesto, principios, creditos, gastos plurianuales y modificaciones presupuestarias.', 'critica', 'base aprovechable', [
        match(30, 'Presupuesto de las Entidades Locales. Estructura y gestion economica local.', 'parcial'),
        match(44, 'Presupuesto publico, ciclo, ejecucion, modificaciones y control.', 'alta'),
      ]),
      topic('IV', 3, 'Ejecucion del presupuesto de gasto: organos, fases, documentos contables, compromisos futuros y ordenacion del pago.', 'critica', 'base aprovechable', [
        match(30, 'Gestion economica local. Ordenacion de gastos y pagos.', 'alta'),
        match(44, 'Ejecucion del presupuesto de gastos y documentos contables.', 'alta'),
      ]),
      topic('IV', 4, 'Control del gasto publico: funcion interventora, control financiero y control externo.', 'critica', 'base aprovechable', [
        match(44, 'Control del gasto publico y especialidades locales y autonomicas.', 'alta'),
      ]),
      topic('IV', 5, 'Regimen urbanistico del suelo, competencia municipal, licencias, legalidad urbanistica, infracciones y sanciones.', 'critica', 'pendiente'),
    ],
  },
  {
    id: 'grupo-v',
    titulo: 'Grupo V. Competencias',
    descripcion: 'Bloque critico: test, supuesto practico y tercer ejercicio.',
    topics: [
      topic('V', 1, 'Igualdad, violencia de genero, igualdad trans y derechos LGTBI: objeto y principios rectores.', 'critica', 'base aprovechable', [
        match(48, 'Politicas de igualdad, violencia de genero, LGTBI, discapacidad y dependencia.', 'alta'),
      ]),
      topic('V', 2, 'Transparencia, publicidad activa, informacion debida y derecho de acceso.', 'critica', 'base aprovechable', [
        match(21, 'Transparencia, derecho de acceso y proteccion de datos.', 'parcial'),
        match(43, 'Transparencia, buen gobierno y proteccion de datos.', 'alta'),
      ]),
      topic('V', 3, 'Atencion al publico, discapacidad, informacion administrativa, iniciativas, reclamaciones, quejas y peticiones.', 'critica', 'base parcial', [
        match(35, 'Derechos de los ciudadanos y asistencia en el uso de medios electronicos.', 'parcial'),
        match(48, 'Discapacidad y dependencia.', 'parcial'),
      ]),
      topic('V', 4, 'Oficinas de asistencia en materia de registros del Ayuntamiento de Burgos: organizacion, funcionamiento y funciones.', 'critica', 'base parcial', [
        match(31, 'Registro de entrada y salida de documentos.', 'parcial', 'Falta organizacion especifica del Ayuntamiento de Burgos.'),
      ]),
      topic('V', 5, 'Prevencion de Riesgos Laborales: objeto, ambito, riesgos y medidas preventivas del puesto.', 'critica', 'base parcial', [
        match(23, 'Ley de Prevencion de Riesgos Laborales.', 'alta'),
        match(24, 'Protocolos de violencia ocupacional y acoso en Diputacion de Burgos.', 'parcial', 'Puede ser sobrante o solo aprovechable como referencia.'),
      ]),
      topic('V', 6, 'Proteccion de datos: principios, derechos, responsable, encargado, delegado, autoridades y derechos digitales.', 'critica', 'base aprovechable', [
        match(21, 'Transparencia y proteccion de datos.', 'parcial'),
        match(43, 'RGPD, LOPDGDD, principios, derechos y AEPD.', 'alta'),
      ]),
      topic('V', 7, 'Nuevas tecnologias, Administracion electronica y funcionamiento electronico del sector publico.', 'critica', 'base aprovechable', [
        match(34, 'Administracion Electronica. Gestion electronica de procedimientos.', 'alta'),
      ]),
      topic('V', 8, 'Documento, expediente, expediente electronico, archivo, acceso a documentos y limitaciones.', 'critica', 'base aprovechable', [
        match(32, 'Documento, clasificacion, archivo y acceso a documentos administrativos.', 'alta'),
        match(33, 'Analisis documental y formacion del expediente.', 'parcial'),
        match(34, 'Administracion Electronica.', 'parcial'),
      ]),
      topic('V', 9, 'Informatica basica, componentes, Windows 11, explorador, carpetas, archivos y seguridad informatica.', 'critica', 'base aprovechable', [
        match(36, 'Informatica basica: hardware, software, almacenamiento y seguridad.', 'alta'),
        match(37, 'Entorno Windows, explorador, carpetas, archivos y herramientas.', 'alta'),
      ]),
      topic('V', 10, 'Sistemas ofimaticos colaborativos, Word Microsoft 365 y Excel Microsoft 365.', 'critica', 'base aprovechable', [
        match(38, 'Word 365 y Excel 365.', 'alta'),
        match(39, 'Access 365 y Outlook 365.', 'parcial', 'Access no entra; Outlook se aprovecha para V.11.'),
      ]),
      topic('V', 11, 'Correo electronico e Internet: conceptos elementales, funcionamiento y servicios.', 'critica', 'base aprovechable', [
        match(39, 'Outlook 365. Correo electronico.', 'alta'),
        match(40, 'Internet: conceptos elementales, protocolos, servicios y navegadores.', 'alta'),
      ]),
    ],
  },
];

export const officialTopics = officialGroups.flatMap((group) => group.topics);

export const syllabusStats = {
  groups: officialGroups.length,
  topics: officialTopics.length,
  critical: officialTopics.filter((item) => item.prioridad === 'critica').length,
  pending: officialTopics.filter((item) => item.estado === 'pendiente').length,
};
