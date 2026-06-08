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
  prioridad: 'normal' | 'alta' | 'crítica';
  ejercicios: Array<'test' | 'práctico' | 'desarrollo'>;
  estado: 'pendiente' | 'base parcial' | 'base aprovechable';
  matches: CurrentTopicMatch[];
};

export type OfficialGroup = {
  id: string;
  titulo: string;
  descripción: string;
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
    : ['test', 'práctico', 'desarrollo'],
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
    titulo: 'Grupo I. Organización del Estado, UE, entidades locales y Castilla y León',
    descripción: 'Bloque institucional para test y tercer ejercicio.',
    topics: [
      topic('I', 1, 'La Constitución Española (I): estructura, principios, valores, derechos y deberes fundamentales, garantía y suspensión.', 'normal', 'base aprovechable', [
        match(1, 'La Constitución española de 1978. Caracteristicas y estructura. Derechos y deberes fundamentales. Garantías y suspensión.', 'alta'),
      ]),
      topic('I', 2, 'La Constitución Española (II): Corona, Cortes Generales, Gobierno y Administración, Poder Judicial.', 'normal', 'base aprovechable', [
        match(3, 'La Jefatura del Estado: la Corona. Sucesión y regencia. Las funciones constitucionales del Rey.', 'alta'),
        match(4, 'Las Cortes Generales. Composición, atribuciones y funcionamiento.', 'alta'),
        match(5, 'El Gobierno y la Administración. El Gobierno y la Administración General del Estado.', 'parcial'),
        match(6, 'El Poder Judicial. Organización judicial española.', 'parcial'),
      ]),
      topic('I', 3, 'La Constitución Española (III): organización territorial, comunidades autonomas, estatutos y distribución competencial.', 'normal', 'base aprovechable', [
        match(7, 'La organización territorial del Estado. Las Comunidades Autónomas. El sistema de distribución competencial.', 'alta'),
      ]),
      topic('I', 4, 'El Gobierno y la Administración del Estado, la administración pública en el Ordenamiento Jurídico Espanol.', 'normal', 'base aprovechable', [
        match(5, 'El Gobierno y la Administración. Administración General del Estado.', 'parcial'),
        match(13, 'Las Administraciones Públicas. Principios de organización administrativa.', 'parcial'),
      ]),
      topic('I', 5, 'Las entidades locales: tipología. Régimen local español, Ley de Bases de Régimen Local y Ley de Haciendas Locales.', 'normal', 'base aprovechable', [
        match(9, 'Régimen Local español. Clases de Entes Locales. Regulación jurídica.', 'alta'),
        match(30, 'Presupuesto de las Entidades Locales. Gestion económica local.', 'parcial', 'Solo sirve para la parte de haciendas locales.'),
      ]),
      topic('I', 6, 'El municipio: concepto y elementos. Termino municipal. Población y empadronamiento.', 'normal', 'base aprovechable', [
        match(9, 'Régimen Local español. Clases de Entes Locales. Regulación jurídica.', 'parcial', 'Falta desarrollo específico de municipio, población y padron.'),
      ]),
      topic('I', 7, 'Organización política y administrativa del Ayuntamiento de Burgos: Pleno, alcalde, tenientes de alcalde, Junta de Gobierno Local, Secretaria, Intervención y Gestion Tributaria.', 'alta', 'base aprovechable'),
      topic('I', 8, 'La Union Europea. Instituciones comunitarias principales.', 'normal', 'base aprovechable', [
        match(41, 'La Union Europea: origen, evolución e instituciones europeas.', 'alta'),
      ]),
      topic('I', 9, 'La Comunidad de Castilla y León. Estatuto de Autonomía: estructura, derechos, principios, competencias y reforma.', 'normal', 'base aprovechable', [
        match(8, 'El Estatuto de Autonomía de Castilla y León. Organización de la Comunidad Autónoma.', 'alta'),
        match(47, 'Estatuto de Autonomía de Castilla y León e instituciones propias.', 'parcial'),
      ]),
    ],
  },
  {
    id: 'grupo-ii',
    titulo: 'Grupo II. Derecho y régimen jurídico de las Administraciones Públicas',
    descripción: 'Bloque jurídico transversal para test y tercer ejercicio.',
    topics: [
      topic('II', 1, 'Fuentes del derecho administrativo, jerarquia, ley, decreto-ley, decreto legislativo, reglamento y otras fuentes.', 'normal', 'base aprovechable', [
        match(11, 'Derecho administrativo. Jerarquia de las fuentes, ley y reglamento.', 'alta'),
        match(12, 'Conceptos de Administración Publica y Derecho administrativo. Fuentes.', 'alta'),
      ]),
      topic('II', 2, 'Acto administrativo: concepto, clases, elementos, motivación, notificación, eficacia y validez.', 'normal', 'base aprovechable', [
        match(16, 'El acto administrativo: concepto, clases, requisitos, eficacia, invalidez y revisión.', 'alta'),
      ]),
      topic('II', 3, 'Procedimiento administrativo común: concepto, naturaleza, principios y fases.', 'normal', 'base aprovechable', [
        match(15, 'Ley de Procedimiento Administrativo Comun. Fases, obligación de resolver y silencio.', 'alta'),
      ]),
      topic('II', 4, 'Revisión de actos, recursos administrativos, revocación, rectificación y jurisdicción contencioso-administrativa.', 'normal', 'base aprovechable', [
        match(16, 'Acto administrativo. Invalidez y revisión de oficio.', 'parcial'),
        match(17, 'Los recursos administrativos. Principios generales y clases.', 'alta'),
        match(19, 'Jurisdicción Contencioso-Administrativa.', 'parcial'),
      ]),
      topic('II', 5, 'Régimen jurídico del sector público, órganos, órganos colegiados y técnicas de atribución de competencias.', 'normal', 'base aprovechable', [
        match(13, 'Administraciones Públicas y principios de organización administrativa.', 'parcial'),
        match(14, 'Ley de Régimen Jurídico del Sector Publico. Organos y relaciones interadministrativas.', 'alta'),
      ]),
      topic('II', 6, 'Responsabilidad de la Administración Publica y responsabilidad patrimonial de autoridades y personal.', 'normal', 'base aprovechable', [
        match(18, 'Responsabilidad de las Administraciones Públicas y de sus autoridades y personal.', 'alta'),
      ]),
      topic('II', 7, 'Contratos del sector público: tipología, partes, expediente, adjudicación, efectos, extinción, invalidez y recursos.', 'normal', 'base aprovechable', [
        match(20, 'La contratación administrativa: clases, ejecución, extinción y esfera local.', 'parcial'),
        match(42, 'La contratación pública. LCSP y especialidades locales.', 'alta'),
      ]),
      topic('II', 8, 'Potestad sancionadora: concepto, principios, procedimiento, medidas y especial referencia local.', 'alta', 'pendiente'),
      topic('II', 9, 'Bienes de las entidades locales: dominio público, patrimoniales, enajenación, cesión y utilización.', 'normal', 'base aprovechable', [
        match(27, 'Clasificación y régimen jurídico de los bienes de las Entidades Locales.', 'alta'),
      ]),
      topic('II', 10, 'Formas de actividad administrativa, servicio público, gestion, remunicipalización e iniciativa económica pública.', 'normal', 'pendiente'),
      topic('II', 11, 'Funcionamiento de órganos colegiados locales: convocatorias, orden del día, constitución y votaciones.', 'normal', 'base aprovechable', [
        match(26, 'Funcionamiento de los órganos colegiados locales.', 'alta'),
      ]),
      topic('II', 12, 'Ordenanzas y reglamentos de las entidades locales. Clases, aprobación y bandos.', 'alta', 'pendiente'),
    ],
  },
  {
    id: 'grupo-iii',
    titulo: 'Grupo III. Régimen jurídico de los empleados públicos',
    descripción: 'Bloque crítico: test, supuesto práctico y tercer ejercicio.',
    topics: [
      topic('III', 1, 'Personal al servicio de las entidades locales, clases, régimen jurídico, provisión, derechos, deberes, carrera y promoción interna.', 'crítica', 'base aprovechable', [
        match(22, 'Personal al servicio de las Administraciones Públicas. Derechos, deberes e incompatibilidades.', 'parcial'),
        match(28, 'Personal funcionario local: régimen jurídico, selección, provisión, promoción y situaciones.', 'alta'),
      ]),
      topic('III', 2, 'Adquisición y perdida de la condición de funcionario. Situaciones administrativas.', 'crítica', 'base aprovechable', [
        match(28, 'Personal funcionario local: selección, provisión, promoción y situaciones.', 'alta'),
        match(46, 'Función Publica de Castilla y León. Acceso, provisión, carrera y situaciones.', 'parcial'),
      ]),
      topic('III', 3, 'Personal laboral al servicio de las Administraciones Públicas: selección, derechos, deberes e incompatibilidades.', 'crítica', 'base aprovechable', [
        match(29, 'Personal laboral al servicio de las Corporaciones Locales.', 'alta'),
        match(22, 'Personal al servicio de las Administraciones Públicas.', 'parcial'),
      ]),
      topic('III', 4, 'Derecho de sindicación y huelga. Régimen de incompatibilidades.', 'crítica', 'base parcial', [
        match(22, 'Personal al servicio de las Administraciones Públicas. Incompatibilidades.', 'parcial', 'Falta desarrollar sindicación y huelga.'),
      ]),
      topic('III', 5, 'Texto refundido de la Ley General de la Seguridad Social: campo de aplicación, estructura y acción protectora.', 'crítica', 'base parcial', [
        match(30, 'Seguridad Social del personal al servicio de la Administración Local.', 'parcial'),
        match(45, 'Retribuciones, nomina y Seguridad Social del personal laboral.', 'parcial'),
      ]),
    ],
  },
  {
    id: 'grupo-iv',
    titulo: 'Grupo IV. Gestion financiera y urbanismo',
    descripción: 'Bloque crítico: test, supuesto práctico y tercer ejercicio.',
    topics: [
      topic('IV', 1, 'Tributos locales, potestad reglamentaria tributaria, ordenanzas fiscales e impugnación.', 'crítica', 'pendiente'),
      topic('IV', 2, 'Presupuesto, principios, créditos, gastos plurianuales y modificaciones presupuestarias.', 'crítica', 'base aprovechable', [
        match(30, 'Presupuesto de las Entidades Locales. Estructura y gestion económica local.', 'parcial'),
        match(44, 'Presupuesto público, ciclo, ejecución, modificaciones y control.', 'alta'),
      ]),
      topic('IV', 3, 'Ejecución del presupuesto de gasto: órganos, fases, documentos contables, compromisos futuros y ordenación del pago.', 'crítica', 'base aprovechable', [
        match(30, 'Gestion económica local. Ordenación de gastos y pagos.', 'alta'),
        match(44, 'Ejecución del presupuesto de gastos y documentos contables.', 'alta'),
      ]),
      topic('IV', 4, 'Control del gasto público: función interventora, control financiero y control externo.', 'crítica', 'base aprovechable', [
        match(44, 'Control del gasto público y especialidades locales y autonómicas.', 'alta'),
      ]),
      topic('IV', 5, 'Régimen urbanístico del suelo, competencia municipal, licencias, legalidad urbanística, infracciones y sanciones.', 'crítica', 'pendiente'),
    ],
  },
  {
    id: 'grupo-v',
    titulo: 'Grupo V. Competencias',
    descripción: 'Bloque crítico: test, supuesto práctico y tercer ejercicio.',
    topics: [
      topic('V', 1, 'Igualdad, violencia de género, igualdad trans y derechos LGTBI: objeto y principios rectores.', 'crítica', 'base aprovechable', [
        match(48, 'Politicas de igualdad, violencia de género, LGTBI, discapacidad y dependencia.', 'alta'),
      ]),
      topic('V', 2, 'Transparencia, publicidad activa, información debida y derecho de acceso.', 'crítica', 'base aprovechable', [
        match(21, 'Transparencia, derecho de acceso y protección de datos.', 'parcial'),
        match(43, 'Transparencia, buen gobierno y protección de datos.', 'alta'),
      ]),
      topic('V', 3, 'Atención al público, discapacidad, información administrativa, iniciativas, reclamaciones, quejas y peticiones.', 'crítica', 'base parcial', [
        match(35, 'Derechos de los ciudadanos y asistencia en el uso de medios electrónicos.', 'parcial'),
        match(48, 'Discapacidad y dependencia.', 'parcial'),
      ]),
      topic('V', 4, 'Oficinas de asistencia en materia de registros del Ayuntamiento de Burgos: organización, funcionamiento y funciones.', 'crítica', 'base parcial', [
        match(31, 'Registro de entrada y salida de documentos.', 'parcial', 'Falta organización específica del Ayuntamiento de Burgos.'),
      ]),
      topic('V', 5, 'Prevención de Riesgos Laborales: objeto, ámbito, riesgos y medidas preventivas del puesto.', 'crítica', 'base parcial', [
        match(23, 'Ley de Prevención de Riesgos Laborales.', 'alta'),
        match(24, 'Protocolos de violencia ocupacional y acoso en Diputación de Burgos.', 'parcial', 'Puede ser sobrante o solo aprovechable como referencia.'),
      ]),
      topic('V', 6, 'Protección de datos: principios, derechos, responsable, encargado, delegado, autoridades y derechos digitales.', 'crítica', 'base aprovechable', [
        match(21, 'Transparencia y protección de datos.', 'parcial'),
        match(43, 'RGPD, LOPDGDD, principios, derechos y AEPD.', 'alta'),
      ]),
      topic('V', 7, 'Nuevas tecnologías, Administración electrónica y funcionamiento electrónico del sector público.', 'crítica', 'base aprovechable', [
        match(34, 'Administración Electronica. Gestion electrónica de procedimientos.', 'alta'),
      ]),
      topic('V', 8, 'Documento, expediente, expediente electrónico, archivo, acceso a documentos y limitaciones.', 'crítica', 'base aprovechable', [
        match(32, 'Documento, clasificación, archivo y acceso a documentos administrativos.', 'alta'),
        match(33, 'Analisis documental y formación del expediente.', 'parcial'),
        match(34, 'Administración Electronica.', 'parcial'),
      ]),
      topic('V', 9, 'Informatica básica, componentes, Windows 11, explorador, carpetas, archivos y seguridad informatica.', 'crítica', 'base aprovechable', [
        match(36, 'Informatica básica: hardware, software, almacenamiento y seguridad.', 'alta'),
        match(37, 'Entorno Windows, explorador, carpetas, archivos y herramientas.', 'alta'),
      ]),
      topic('V', 10, 'Sistemas ofimaticos colaborativos, Word Microsoft 365 y Excel Microsoft 365.', 'crítica', 'base aprovechable', [
        match(38, 'Word 365 y Excel 365.', 'alta'),
        match(39, 'Access 365 y Outlook 365.', 'parcial', 'Access no entra; Outlook se aprovecha para V.11.'),
      ]),
      topic('V', 11, 'Correo electrónico e Internet: conceptos elementales, funcionamiento y servicios.', 'crítica', 'base aprovechable', [
        match(39, 'Outlook 365. Correo electrónico.', 'alta'),
        match(40, 'Internet: conceptos elementales, protocolos, servicios y navegadores.', 'alta'),
      ]),
    ],
  },
];

export const officialTopics = officialGroups.flatMap((group) => group.topics);

export const syllabusStats = {
  groups: officialGroups.length,
  topics: officialTopics.length,
  critical: officialTopics.filter((item) => item.prioridad === 'crítica').length,
  pending: officialTopics.filter((item) => item.estado === 'pendiente').length,
};
