import type { GameGroupId } from './gamification';

export type GuidedCaseStep = {
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
};

export type GuidedCase = {
  id: string;
  groupId: GameGroupId;
  title: string;
  scenario: string;
  tag: string;
  difficulty: 'básico' | 'medio' | 'examen';
  steps: GuidedCaseStep[];
};

export const guidedCases: GuidedCase[] = [
  {
    id: 'gc-g1-1',
    groupId: 'grupo-i',
    title: 'Reforma constitucional ordinaria',
    tag: 'Constitución',
    difficulty: 'medio',
    scenario: 'Se plantea una reforma constitucional que no afecta a la revisión total ni a las materias especialmente protegidas.',
    steps: [
      { prompt: '¿Qué procedimiento aplicas?', options: ['Art. 167 CE', 'Art. 168 CE', 'Art. 155 CE'], answer: 'Art. 167 CE', explanation: 'Si no entra en el procedimiento agravado, se tramita por el art. 167 CE.' },
      { prompt: '¿Qué mayoría inicial exige?', options: ['Mayoría simple', 'Tres quintos de cada Cámara', 'Dos tercios solo del Congreso'], answer: 'Tres quintos de cada Cámara', explanation: 'La regla ordinaria exige tres quintos de cada Cámara.' },
      { prompt: '¿El referéndum es siempre obligatorio?', options: ['Sí', 'No, solo si lo solicita una décima parte de una Cámara', 'Solo si lo pide el Gobierno'], answer: 'No, solo si lo solicita una décima parte de una Cámara', explanation: 'En el art. 167 CE el referéndum es eventual, no automático.' },
    ],
  },
  {
    id: 'gc-g1-2',
    groupId: 'grupo-i',
    title: 'Órgano municipal competente',
    tag: 'Ayuntamiento',
    difficulty: 'básico',
    scenario: 'En un supuesto se pregunta por el órgano de máxima representación política de la ciudadanía en el Ayuntamiento.',
    steps: [
      { prompt: '¿Qué órgano identificas?', options: ['Alcalde', 'Pleno', 'Junta de Gobierno Local'], answer: 'Pleno', explanation: 'El Pleno es el órgano de máxima representación política municipal.' },
      { prompt: '¿Quién preside la corporación?', options: ['Secretaría', 'Intervención', 'Alcalde'], answer: 'Alcalde', explanation: 'El alcalde preside la corporación y dirige el gobierno municipal.' },
      { prompt: '¿Qué órgano asiste al alcalde en funciones ejecutivas?', options: ['Junta de Gobierno Local', 'Tribunal Constitucional', 'Senado'], answer: 'Junta de Gobierno Local', explanation: 'La Junta de Gobierno Local asiste al alcalde y ejerce atribuciones ejecutivas.' },
    ],
  },
  {
    id: 'gc-g2-1',
    groupId: 'grupo-ii',
    title: 'Recurso contra acto que no pone fin a la vía administrativa',
    tag: 'Recursos',
    difficulty: 'examen',
    scenario: 'Una persona interesada recibe una resolución expresa que no pone fin a la vía administrativa y quiere impugnarla.',
    steps: [
      { prompt: '¿Qué recurso procede?', options: ['Alzada', 'Reposición', 'Extraordinario de revisión'], answer: 'Alzada', explanation: 'La alzada procede contra actos que no ponen fin a la vía administrativa.' },
      { prompt: '¿Cuál es el plazo si el acto es expreso?', options: ['10 días', 'Un mes', 'Tres meses'], answer: 'Un mes', explanation: 'El plazo general frente a acto expreso es de un mes.' },
      { prompt: '¿Cuál es el plazo para resolver?', options: ['Un mes', 'Tres meses', 'Seis meses'], answer: 'Tres meses', explanation: 'El recurso de alzada debe resolverse y notificarse en tres meses.' },
      { prompt: 'Si no se resuelve en plazo, ¿qué regla general aplicas?', options: ['Estimación', 'Desestimación', 'Caducidad automática del acto'], answer: 'Desestimación', explanation: 'La falta de resolución en alzada se entiende desestimatoria como regla general.' },
    ],
  },
  {
    id: 'gc-g2-2',
    groupId: 'grupo-ii',
    title: 'Subsanación de solicitud',
    tag: 'Procedimiento',
    difficulty: 'medio',
    scenario: 'Una solicitud entra en registro sin acompañar un documento obligatorio.',
    steps: [
      { prompt: '¿Qué debe hacer la Administración?', options: ['Archivar inmediatamente', 'Requerir subsanación', 'Resolver desestimando sin más'], answer: 'Requerir subsanación', explanation: 'Debe requerirse subsanación cuando falten requisitos o documentos necesarios.' },
      { prompt: '¿Qué plazo ordinario se concede?', options: ['5 días', '10 días', '30 días'], answer: '10 días', explanation: 'El plazo típico de subsanación es de diez días.' },
      { prompt: '¿Qué pasa si no subsana?', options: ['Se le tiene por desistido en los términos legales', 'Se estima la solicitud', 'Se amplía automáticamente el plazo'], answer: 'Se le tiene por desistido en los términos legales', explanation: 'La falta de subsanación puede llevar a tener por desistida la solicitud, previa resolución.' },
    ],
  },
  {
    id: 'gc-g2-3',
    groupId: 'grupo-ii',
    title: 'Daño por funcionamiento administrativo',
    tag: 'Responsabilidad',
    difficulty: 'examen',
    scenario: 'Una persona reclama una indemnización por una lesión individualizada, evaluable económicamente y vinculada al funcionamiento de un servicio público.',
    steps: [
      { prompt: '¿Qué institución jurídica aparece?', options: ['Responsabilidad patrimonial', 'Recurso de reposición', 'Delegación de competencias'], answer: 'Responsabilidad patrimonial', explanation: 'El supuesto describe una reclamación de responsabilidad patrimonial.' },
      { prompt: '¿Qué requisito debe concurrir además del daño?', options: ['Daño antijurídico y relación causal', 'Mayoría absoluta', 'Publicación en BOE'], answer: 'Daño antijurídico y relación causal', explanation: 'Debe existir lesión antijurídica y nexo causal con el funcionamiento administrativo.' },
      { prompt: '¿Cuál es el plazo general para reclamar?', options: ['Un mes', 'Un año', 'Cuatro años'], answer: 'Un año', explanation: 'El plazo general de reclamación es de un año.' },
    ],
  },
  {
    id: 'gc-g3-1',
    groupId: 'grupo-iii',
    title: 'Compatibilidad con actividad privada',
    tag: 'Incompatibilidades',
    difficulty: 'examen',
    scenario: 'Una funcionaria municipal quiere iniciar una actividad privada por las tardes relacionada indirectamente con materias que tramita.',
    steps: [
      { prompt: '¿Qué debes comprobar primero?', options: ['Si pidió vacaciones', 'Régimen de incompatibilidades', 'Si hay silencio positivo automático'], answer: 'Régimen de incompatibilidades', explanation: 'La compatibilidad exige analizar la Ley 53/1984 y los límites aplicables.' },
      { prompt: '¿Puede empezar sin autorización o reconocimiento?', options: ['Sí, siempre', 'No, debe tramitar compatibilidad si procede', 'Solo si es teletrabajo'], answer: 'No, debe tramitar compatibilidad si procede', explanation: 'No debe iniciarse actividad compatible sin el reconocimiento o autorización correspondiente.' },
      { prompt: '¿Qué riesgo material debes detectar?', options: ['Conflicto de intereses', 'Falta de publicación en BOE', 'Cambio de grupo profesional automático'], answer: 'Conflicto de intereses', explanation: 'La relación con materias tramitadas puede generar conflicto de intereses.' },
    ],
  },
  {
    id: 'gc-g3-2',
    groupId: 'grupo-iii',
    title: 'Funcionario interino por vacante',
    tag: 'Personal',
    difficulty: 'medio',
    scenario: 'El Ayuntamiento necesita cubrir urgentemente una plaza vacante hasta su cobertura definitiva.',
    steps: [
      { prompt: '¿Qué figura puede encajar?', options: ['Funcionario interino', 'Personal eventual', 'Libre designación'], answer: 'Funcionario interino', explanation: 'La cobertura temporal por razones justificadas puede realizarse mediante interinidad.' },
      { prompt: '¿Qué caracteriza el nombramiento?', options: ['Necesidad y urgencia justificadas', 'Confianza política', 'Contrato mercantil'], answer: 'Necesidad y urgencia justificadas', explanation: 'La interinidad exige razones justificadas de necesidad y urgencia.' },
      { prompt: '¿Tiene carácter permanente?', options: ['Sí', 'No', 'Solo si supera tres meses'], answer: 'No', explanation: 'El interino tiene nombramiento temporal, no vinculación estatutaria permanente.' },
    ],
  },
  {
    id: 'gc-g4-1',
    groupId: 'grupo-iv',
    title: 'Gasto ya realizado',
    tag: 'Presupuesto',
    difficulty: 'examen',
    scenario: 'Consta en el expediente que el proveedor ha realizado correctamente la prestación y presenta factura.',
    steps: [
      { prompt: '¿En qué fase del gasto estás?', options: ['Autorización', 'Reconocimiento de la obligación', 'Transferencia de crédito'], answer: 'Reconocimiento de la obligación', explanation: 'Cuando se acredita la prestación y nace la obligación exigible, estamos en fase O.' },
      { prompt: '¿Qué letra suele representar esta fase?', options: ['A', 'D', 'O'], answer: 'O', explanation: 'O identifica el reconocimiento de la obligación.' },
      { prompt: '¿Qué fase vendrá después?', options: ['Ordenación del pago', 'Aprobación inicial', 'Información pública'], answer: 'Ordenación del pago', explanation: 'Después de reconocer la obligación procede ordenar el pago.' },
    ],
  },
  {
    id: 'gc-g4-2',
    groupId: 'grupo-iv',
    title: 'Crédito insuficiente',
    tag: 'Modificaciones',
    difficulty: 'examen',
    scenario: 'Existe aplicación presupuestaria adecuada, pero el crédito disponible no alcanza para un gasto necesario e inaplazable.',
    steps: [
      { prompt: '¿Qué modificación presupuestaria encaja?', options: ['Crédito extraordinario', 'Suplemento de crédito', 'Baja por anulación'], answer: 'Suplemento de crédito', explanation: 'Si hay crédito pero es insuficiente, procede suplemento de crédito.' },
      { prompt: '¿Cuándo usarías crédito extraordinario?', options: ['Cuando no hay crédito adecuado', 'Cuando ya se pagó', 'Cuando hay reparo'], answer: 'Cuando no hay crédito adecuado', explanation: 'El crédito extraordinario cubre gasto sin crédito adecuado.' },
      { prompt: '¿Qué debes comprobar siempre?', options: ['Financiación de la modificación', 'Mayoría del Senado', 'Amparo constitucional'], answer: 'Financiación de la modificación', explanation: 'Las modificaciones deben contar con financiación adecuada.' },
    ],
  },
  {
    id: 'gc-g5-1',
    groupId: 'grupo-v',
    title: 'Solicitud de acceso a información pública',
    tag: 'Transparencia',
    difficulty: 'examen',
    scenario: 'Una ciudadana solicita copia de documentos obrantes en el Ayuntamiento sobre un expediente ya terminado.',
    steps: [
      { prompt: '¿Qué derecho entra en juego?', options: ['Derecho de acceso a información pública', 'Recurso de alzada', 'Promoción interna'], answer: 'Derecho de acceso a información pública', explanation: 'La petición encaja en transparencia y derecho de acceso.' },
      { prompt: '¿Cuál es el plazo general de resolución?', options: ['10 días', 'Un mes', 'Tres meses'], answer: 'Un mes', explanation: 'El plazo general es de un mes.' },
      { prompt: 'Si no se resuelve en plazo, ¿qué sentido tiene el silencio?', options: ['Estimatorio', 'Desestimatorio', 'Caducidad'], answer: 'Desestimatorio', explanation: 'En transparencia el silencio es desestimatorio.' },
    ],
  },
  {
    id: 'gc-g5-2',
    groupId: 'grupo-v',
    title: 'Brecha de datos personales',
    tag: 'Protección de datos',
    difficulty: 'examen',
    scenario: 'Se envía por error un listado con datos personales a una dirección externa no autorizada.',
    steps: [
      { prompt: '¿Qué ha ocurrido?', options: ['Brecha de seguridad de datos personales', 'Recurso extraordinario', 'Transferencia de crédito'], answer: 'Brecha de seguridad de datos personales', explanation: 'Hay comunicación accidental a destinatario no autorizado.' },
      { prompt: '¿Qué debe valorarse primero?', options: ['Riesgo para derechos y libertades', 'Mayoría absoluta', 'Fase A del gasto'], answer: 'Riesgo para derechos y libertades', explanation: 'La respuesta depende del riesgo generado para las personas afectadas.' },
      { prompt: '¿A quién puede haber que notificar?', options: ['AEPD y personas afectadas según riesgo', 'Solo al Pleno', 'Al Senado'], answer: 'AEPD y personas afectadas según riesgo', explanation: 'Puede ser necesaria notificación a la autoridad de control y comunicación a personas afectadas si el riesgo es alto.' },
    ],
  },
];
