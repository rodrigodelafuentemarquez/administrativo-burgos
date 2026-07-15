export type GameGroupId = 'grupo-i' | 'grupo-ii' | 'grupo-iii' | 'grupo-iv' | 'grupo-v';

export type MatchCard = {
  id: string;
  left: string;
  right: string;
  tag: string;
};

export type FillCard = {
  id: string;
  before: string;
  answer: string;
  after: string;
  tag: string;
};

export type OrderCard = {
  id: string;
  title: string;
  tag: string;
  items: string[];
};

export type GameGroup = {
  id: GameGroupId;
  label: string;
  title: string;
  summary: string;
  matches: MatchCard[];
  fills: FillCard[];
  orders: OrderCard[];
};

export const gameGroups: GameGroup[] = [
  {
    id: 'grupo-i',
    label: 'Grupo I',
    title: 'Organización del Estado, UE, entidades locales y Castilla y León',
    summary: 'Artículos constitucionales, instituciones, fechas y mapa territorial.',
    matches: [
      { id: 'g1-m-1', left: 'Art. 1 CE', right: 'Estado social y democrático de Derecho', tag: 'Constitución' },
      { id: 'g1-m-2', left: 'Art. 14 CE', right: 'Igualdad ante la ley', tag: 'Constitución' },
      { id: 'g1-m-3', left: 'Art. 66 CE', right: 'Cortes Generales', tag: 'Instituciones' },
      { id: 'g1-m-4', left: 'Art. 97 CE', right: 'Gobierno: dirección política y potestad reglamentaria', tag: 'Instituciones' },
      { id: 'g1-m-5', left: 'Art. 140 CE', right: 'Autonomía municipal', tag: 'Régimen local' },
      { id: 'g1-m-6', left: 'Alcalde', right: 'Preside la corporación y dirige el gobierno municipal', tag: 'Ayuntamiento' },
      { id: 'g1-m-7', left: 'Comisión Europea', right: 'Defiende el interés general de la Unión', tag: 'Unión Europea' },
      { id: 'g1-m-8', left: 'Procurador del Común', right: 'Defensor del Pueblo de Castilla y León', tag: 'Castilla y León' },
    ],
    fills: [
      { id: 'g1-f-1', before: 'La Constitución Española fue publicada en el BOE el ', answer: '29 de diciembre de 1978', after: '.', tag: 'Fecha' },
      { id: 'g1-f-2', before: 'El art. ', answer: '137', after: ' CE abre la organización territorial del Estado.', tag: 'Artículo' },
      { id: 'g1-f-3', before: 'La capital del Estado es la villa de ', answer: 'Madrid', after: '.', tag: 'Constitución' },
      { id: 'g1-f-4', before: 'El Estatuto de Autonomía de Castilla y León se aprueba por Ley Orgánica ', answer: '14/2007', after: '.', tag: 'Norma' },
      { id: 'g1-f-5', before: 'La potestad legislativa del Estado la ejercen las ', answer: 'Cortes Generales', after: '.', tag: 'Institución' },
    ],
    orders: [
      {
        id: 'g1-o-1',
        title: 'Procedimiento ordinario de reforma constitucional',
        tag: 'Constitución',
        items: ['Aprobación por tres quintos de cada Cámara', 'Intento de acuerdo mediante comisión paritaria si no hay consenso', 'Aprobación por dos tercios del Congreso si procede', 'Referéndum si lo solicita una décima parte de cualquier Cámara'],
      },
      {
        id: 'g1-o-2',
        title: 'Estructura territorial básica',
        tag: 'Organización territorial',
        items: ['Municipio', 'Provincia', 'Comunidad autónoma', 'Estado'],
      },
    ],
  },
  {
    id: 'grupo-ii',
    label: 'Grupo II',
    title: 'Derecho y régimen jurídico de las Administraciones Públicas',
    summary: 'Leyes 39/2015 y 40/2015, actos, recursos, contratación y órganos colegiados.',
    matches: [
      { id: 'g2-m-1', left: 'Ley 39/2015', right: 'Procedimiento Administrativo Común', tag: 'Norma' },
      { id: 'g2-m-2', left: 'Ley 40/2015', right: 'Régimen Jurídico del Sector Público', tag: 'Norma' },
      { id: 'g2-m-3', left: 'Recurso de alzada', right: 'Contra actos que no ponen fin a la vía administrativa', tag: 'Recursos' },
      { id: 'g2-m-4', left: 'Recurso potestativo de reposición', right: 'Contra actos que ponen fin a la vía administrativa', tag: 'Recursos' },
      { id: 'g2-m-5', left: 'Nulidad de pleno derecho', right: 'Vicio más grave del acto administrativo', tag: 'Acto administrativo' },
      { id: 'g2-m-6', left: 'Silencio administrativo', right: 'Efecto de no resolver expresamente en plazo', tag: 'Procedimiento' },
      { id: 'g2-m-7', left: 'LCSP', right: 'Contratos del sector público', tag: 'Contratación' },
      { id: 'g2-m-8', left: 'Ordenanza', right: 'Disposición general aprobada por entidad local', tag: 'Local' },
    ],
    fills: [
      { id: 'g2-f-1', before: 'La Ley ', answer: '39/2015', after: ' regula el Procedimiento Administrativo Común.', tag: 'Norma' },
      { id: 'g2-f-2', before: 'El plazo general del recurso de alzada es de ', answer: 'un mes', after: ' si el acto es expreso.', tag: 'Recurso' },
      { id: 'g2-f-3', before: 'La Ley ', answer: '40/2015', after: ' regula el Régimen Jurídico del Sector Público.', tag: 'Norma' },
      { id: 'g2-f-4', before: 'La notificación infructuosa se completa mediante publicación en el ', answer: 'BOE', after: ' cuando proceda.', tag: 'Procedimiento' },
      { id: 'g2-f-5', before: 'La revisión de oficio de actos nulos exige dictamen del ', answer: 'Consejo de Estado u órgano consultivo equivalente', after: '.', tag: 'Revisión' },
    ],
    orders: [
      {
        id: 'g2-o-1',
        title: 'Fases básicas del procedimiento administrativo',
        tag: 'Procedimiento',
        items: ['Iniciación', 'Ordenación', 'Instrucción', 'Finalización', 'Ejecución'],
      },
      {
        id: 'g2-o-2',
        title: 'Tramitación simplificada de recursos en examen mental',
        tag: 'Recursos',
        items: ['Identificar si el acto pone fin a la vía administrativa', 'Elegir alzada o reposición', 'Comprobar plazo', 'Dirigirlo al órgano competente', 'Resolver y notificar'],
      },
    ],
  },
  {
    id: 'grupo-iii',
    label: 'Grupo III',
    title: 'Régimen jurídico de los empleados públicos',
    summary: 'TREBEP, función pública local, personal laboral, incompatibilidades y Seguridad Social.',
    matches: [
      { id: 'g3-m-1', left: 'TREBEP', right: 'Estatuto Básico del Empleado Público', tag: 'Norma' },
      { id: 'g3-m-2', left: 'Funcionario de carrera', right: 'Vinculación estatutaria permanente', tag: 'Personal' },
      { id: 'g3-m-3', left: 'Funcionario interino', right: 'Nombramiento por razones justificadas de necesidad y urgencia', tag: 'Personal' },
      { id: 'g3-m-4', left: 'Personal laboral', right: 'Relación mediante contrato de trabajo', tag: 'Personal' },
      { id: 'g3-m-5', left: 'Servicio activo', right: 'Situación ordinaria de prestación de servicios', tag: 'Situaciones' },
      { id: 'g3-m-6', left: 'Excedencia', right: 'Situación administrativa sin prestación efectiva ordinaria', tag: 'Situaciones' },
      { id: 'g3-m-7', left: 'Ley 53/1984', right: 'Incompatibilidades del personal al servicio de las Administraciones Públicas', tag: 'Norma' },
      { id: 'g3-m-8', left: 'Promoción interna', right: 'Ascenso desde cuerpos o escalas inferiores', tag: 'Carrera' },
    ],
    fills: [
      { id: 'g3-f-1', before: 'El Estatuto Básico del Empleado Público se recoge en el Real Decreto Legislativo ', answer: '5/2015', after: '.', tag: 'Norma' },
      { id: 'g3-f-2', before: 'La ley estatal clásica de incompatibilidades es la Ley ', answer: '53/1984', after: '.', tag: 'Norma' },
      { id: 'g3-f-3', before: 'El acceso al empleo público se rige por igualdad, mérito y ', answer: 'capacidad', after: '.', tag: 'Principios' },
      { id: 'g3-f-4', before: 'La pérdida de la condición de funcionario puede producirse por ', answer: 'renuncia', after: ', pérdida de nacionalidad, sanción, pena o jubilación.', tag: 'Función pública' },
      { id: 'g3-f-5', before: 'La Seguridad Social protege, entre otras contingencias, la incapacidad temporal, maternidad, jubilación y ', answer: 'desempleo', after: '.', tag: 'Seguridad Social' },
    ],
    orders: [
      {
        id: 'g3-o-1',
        title: 'Secuencia mental de selección de personal',
        tag: 'Acceso',
        items: ['Oferta de empleo público', 'Convocatoria', 'Bases', 'Pruebas selectivas', 'Nombramiento o contratación', 'Toma de posesión'],
      },
      {
        id: 'g3-o-2',
        title: 'Itinerario típico de carrera administrativa',
        tag: 'Carrera',
        items: ['Ingreso', 'Consolidación de grado', 'Provisión de puestos', 'Promoción interna', 'Situaciones administrativas'],
      },
    ],
  },
  {
    id: 'grupo-iv',
    label: 'Grupo IV',
    title: 'Gestión financiera y urbanismo',
    summary: 'Tributos locales, presupuesto, ejecución del gasto, control y urbanismo.',
    matches: [
      { id: 'g4-m-1', left: 'TRLRHL', right: 'Texto Refundido de la Ley Reguladora de las Haciendas Locales', tag: 'Norma' },
      { id: 'g4-m-2', left: 'ICIO', right: 'Impuesto sobre construcciones, instalaciones y obras', tag: 'Tributos' },
      { id: 'g4-m-3', left: 'IBI', right: 'Impuesto sobre bienes inmuebles', tag: 'Tributos' },
      { id: 'g4-m-4', left: 'IAE', right: 'Impuesto sobre actividades económicas', tag: 'Tributos' },
      { id: 'g4-m-5', left: 'Autorización del gasto', right: 'Inicio del expediente y reserva de crédito', tag: 'Presupuesto' },
      { id: 'g4-m-6', left: 'Reconocimiento de la obligación', right: 'Aceptación de que la prestación ya se realizó', tag: 'Presupuesto' },
      { id: 'g4-m-7', left: 'Función interventora', right: 'Control interno previo de legalidad económico-presupuestaria', tag: 'Control' },
      { id: 'g4-m-8', left: 'Licencia urbanística', right: 'Control municipal previo de actos de uso del suelo', tag: 'Urbanismo' },
    ],
    fills: [
      { id: 'g4-f-1', before: 'La ejecución ordinaria del gasto se resume como ', answer: 'A-D-O-P', after: '.', tag: 'Presupuesto' },
      { id: 'g4-f-2', before: 'El impuesto sobre bienes inmuebles se abrevia como ', answer: 'IBI', after: '.', tag: 'Tributos' },
      { id: 'g4-f-3', before: 'El texto básico de haciendas locales es el Real Decreto Legislativo ', answer: '2/2004', after: '.', tag: 'Norma' },
      { id: 'g4-f-4', before: 'La fiscalización previa forma parte de la función ', answer: 'interventora', after: '.', tag: 'Control' },
      { id: 'g4-f-5', before: 'En urbanismo, la licencia permite controlar la adecuación del acto al ', answer: 'planeamiento', after: '.', tag: 'Urbanismo' },
    ],
    orders: [
      {
        id: 'g4-o-1',
        title: 'Fases de ejecución del presupuesto de gasto',
        tag: 'Presupuesto',
        items: ['Autorización del gasto', 'Disposición o compromiso', 'Reconocimiento de la obligación', 'Ordenación del pago', 'Pago material'],
      },
      {
        id: 'g4-o-2',
        title: 'Ciclo presupuestario local',
        tag: 'Presupuesto',
        items: ['Elaboración', 'Aprobación inicial', 'Exposición pública', 'Aprobación definitiva', 'Ejecución', 'Liquidación y control'],
      },
    ],
  },
  {
    id: 'grupo-v',
    label: 'Grupo V',
    title: 'Competencias',
    summary: 'Igualdad, transparencia, atención al público, registros, PRL, datos, administración electrónica y archivo.',
    matches: [
      { id: 'g5-m-1', left: 'RGPD', right: 'Reglamento General de Protección de Datos', tag: 'Protección de datos' },
      { id: 'g5-m-2', left: 'LOPDGDD', right: 'Ley Orgánica de protección de datos y derechos digitales', tag: 'Protección de datos' },
      { id: 'g5-m-3', left: 'AEPD', right: 'Agencia Española de Protección de Datos', tag: 'Protección de datos' },
      { id: 'g5-m-4', left: 'Ley 31/1995', right: 'Prevención de Riesgos Laborales', tag: 'PRL' },
      { id: 'g5-m-5', left: 'Publicidad activa', right: 'Información que la Administración publica sin solicitud previa', tag: 'Transparencia' },
      { id: 'g5-m-6', left: 'Derecho de acceso', right: 'Solicitud de información pública', tag: 'Transparencia' },
      { id: 'g5-m-7', left: 'Expediente electrónico', right: 'Conjunto ordenado de documentos electrónicos', tag: 'Administración electrónica' },
      { id: 'g5-m-8', left: 'OAMR', right: 'Oficina de asistencia en materia de registros', tag: 'Registros' },
    ],
    fills: [
      { id: 'g5-f-1', before: 'La Ley ', answer: '31/1995', after: ' regula la Prevención de Riesgos Laborales.', tag: 'PRL' },
      { id: 'g5-f-2', before: 'El Reglamento General de Protección de Datos se abrevia como ', answer: 'RGPD', after: '.', tag: 'Protección de datos' },
      { id: 'g5-f-3', before: 'La publicidad activa es información publicada sin necesidad de ', answer: 'solicitud previa', after: '.', tag: 'Transparencia' },
      { id: 'g5-f-4', before: 'La sede electrónica es la dirección electrónica disponible para la ciudadanía cuya titularidad corresponde a una ', answer: 'Administración Pública', after: '.', tag: 'Administración electrónica' },
      { id: 'g5-f-5', before: 'Las oficinas de asistencia ayudan a la ciudadanía en el uso de medios ', answer: 'electrónicos', after: '.', tag: 'Registros' },
    ],
    orders: [
      {
        id: 'g5-o-1',
        title: 'Ciclo básico de una solicitud de acceso a información pública',
        tag: 'Transparencia',
        items: ['Presentación de la solicitud', 'Admisión o inadmisión', 'Tramitación con posibles terceros afectados', 'Resolución', 'Notificación y acceso'],
      },
      {
        id: 'g5-o-2',
        title: 'Respuesta mental ante una brecha de datos',
        tag: 'Protección de datos',
        items: ['Detectar el incidente', 'Valorar riesgo para derechos y libertades', 'Notificar a la autoridad si procede', 'Comunicar a personas afectadas si el riesgo es alto', 'Documentar medidas adoptadas'],
      },
    ],
  },
];
