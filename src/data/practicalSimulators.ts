import type { GameGroupId } from './gamification';

export type PracticalSimulator = {
  id: string;
  groupId: GameGroupId;
  title: string;
  tag: string;
  difficulty: 'medio' | 'examen';
  scenario: string;
  checklist: string[];
  questions: Array<{
    prompt: string;
    answer: string;
  }>;
  solution: string;
};

export const practicalSimulators: PracticalSimulator[] = [
  {
    id: 'ps-g1-1',
    groupId: 'grupo-i',
    title: 'Competencia institucional y artículo constitucional',
    tag: 'Constitución',
    difficulty: 'medio',
    scenario: 'En un supuesto se mezclan Gobierno, Cortes, Poder Judicial y Administración. Debes identificar quién ejerce cada función y el artículo constitucional de referencia.',
    checklist: ['Distinguir órgano constitucional', 'Asociar artículo clave', 'Separar dirección política de potestad legislativa', 'No confundir Administración con Gobierno'],
    questions: [
      { prompt: '¿Quién dirige la política interior y exterior?', answer: 'El Gobierno, art. 97 CE.' },
      { prompt: '¿Quién ejerce la potestad legislativa del Estado?', answer: 'Las Cortes Generales, art. 66 CE.' },
      { prompt: '¿Qué artículo recoge los principios de la Administración?', answer: 'Art. 103 CE.' },
    ],
    solution: 'La clave es separar funciones: Cortes legislan y controlan, Gobierno dirige la política y Administración sirve con objetividad los intereses generales.',
  },
  {
    id: 'ps-g2-1',
    groupId: 'grupo-ii',
    title: 'Recurso administrativo completo',
    tag: 'Procedimiento',
    difficulty: 'examen',
    scenario: 'Una persona recibe una resolución expresa que no pone fin a la vía administrativa. La notificación es correcta y quiere impugnarla.',
    checklist: ['Tipo de acto', 'Si pone fin a la vía administrativa', 'Recurso procedente', 'Plazo de interposición', 'Órgano competente', 'Plazo de resolución', 'Silencio'],
    questions: [
      { prompt: '¿Qué recurso procede?', answer: 'Recurso de alzada.' },
      { prompt: '¿Plazo de interposición?', answer: 'Un mes si el acto es expreso.' },
      { prompt: '¿Plazo para resolver?', answer: 'Tres meses.' },
      { prompt: '¿Sentido del silencio?', answer: 'Desestimatorio como regla general.' },
    ],
    solution: 'La secuencia correcta es: acto que no pone fin a vía administrativa -> alzada -> un mes para interponer -> superior jerárquico u órgano previsto -> tres meses para resolver -> silencio desestimatorio.',
  },
  {
    id: 'ps-g2-2',
    groupId: 'grupo-ii',
    title: 'Responsabilidad patrimonial',
    tag: 'Responsabilidad',
    difficulty: 'examen',
    scenario: 'Una persona reclama daños por una caída atribuida al mal estado de una instalación municipal. Aporta informe médico y factura de tratamiento.',
    checklist: ['Daño efectivo', 'Evaluación económica', 'Individualización', 'Antijuridicidad', 'Relación causal', 'Plazo de un año', 'Prueba'],
    questions: [
      { prompt: '¿Qué debe probarse?', answer: 'Daño efectivo, evaluable, individualizado, antijurídico y relación causal con el servicio.' },
      { prompt: '¿Plazo general de reclamación?', answer: 'Un año.' },
      { prompt: '¿Basta con que exista daño?', answer: 'No. Debe existir nexo causal y lesión antijurídica imputable al funcionamiento administrativo.' },
    ],
    solution: 'No se indemniza cualquier daño: hay que justificar daño, cuantía, nexo causal y que la persona no tenga el deber jurídico de soportarlo.',
  },
  {
    id: 'ps-g3-1',
    groupId: 'grupo-iii',
    title: 'Compatibilidad de empleado público',
    tag: 'Incompatibilidades',
    difficulty: 'examen',
    scenario: 'Un empleado público municipal solicita compatibilizar su puesto con una actividad privada relacionada con expedientes tramitados en su unidad.',
    checklist: ['Actividad pública o privada', 'Relación con funciones del puesto', 'Horario', 'Retribuciones', 'Conflicto de intereses', 'Autorización o reconocimiento previo'],
    questions: [
      { prompt: '¿Puede iniciar la actividad sin autorización?', answer: 'No. Debe obtener compatibilidad si procede.' },
      { prompt: '¿Qué riesgo principal aparece?', answer: 'Conflicto de intereses por relación con materias tramitadas.' },
      { prompt: '¿Qué norma debes recordar?', answer: 'Ley 53/1984 de incompatibilidades.' },
    ],
    solution: 'El análisis no se limita al horario: también importa imparcialidad, independencia, conflicto de intereses y régimen retributivo.',
  },
  {
    id: 'ps-g3-2',
    groupId: 'grupo-iii',
    title: 'Situación administrativa correcta',
    tag: 'Situaciones',
    difficulty: 'medio',
    scenario: 'Una funcionaria obtiene destino en otra Administración Pública mediante procedimiento de movilidad.',
    checklist: ['Tipo de vínculo', 'Administración de origen', 'Administración de destino', 'Si conserva condición', 'Situación administrativa aplicable'],
    questions: [
      { prompt: '¿Qué situación puede corresponder?', answer: 'Servicio en otras Administraciones Públicas, según el supuesto concreto.' },
      { prompt: '¿Pierde automáticamente la condición de funcionaria?', answer: 'No necesariamente; depende de la situación y normativa aplicable.' },
      { prompt: '¿Qué debes evitar confundir?', answer: 'Excedencia con servicios en otra Administración.' },
    ],
    solution: 'En casos de personal, primero identifica vínculo y movimiento; después eliges situación administrativa, no al revés.',
  },
  {
    id: 'ps-g4-1',
    groupId: 'grupo-iv',
    title: 'Fases A-D-O-P con factura',
    tag: 'Presupuesto',
    difficulty: 'examen',
    scenario: 'El Ayuntamiento tramita un gasto. Primero reserva crédito, después aprueba el gasto, adjudica a un proveedor, recibe la prestación, reconoce la factura y finalmente paga.',
    checklist: ['Retención de crédito', 'Autorización', 'Disposición', 'Reconocimiento de obligación', 'Ordenación del pago', 'Pago material'],
    questions: [
      { prompt: '¿Qué fase crea compromiso frente a tercero?', answer: 'Disposición o compromiso del gasto.' },
      { prompt: '¿Qué fase acredita prestación realizada y factura?', answer: 'Reconocimiento de la obligación.' },
      { prompt: '¿Qué fase ordena pagar?', answer: 'Ordenación del pago.' },
    ],
    solution: 'La cadena mental es RC -> A -> D -> O -> P -> pago material. En práctico suele bastar con ubicar el momento del expediente.',
  },
  {
    id: 'ps-g4-2',
    groupId: 'grupo-iv',
    title: 'Reparo de Intervención',
    tag: 'Control',
    difficulty: 'examen',
    scenario: 'Intervención formula reparo porque aprecia insuficiencia de crédito en un expediente de gasto.',
    checklist: ['Naturaleza del reparo', 'Si suspende la tramitación', 'Subsanación', 'Discrepancia', 'Órgano competente para resolver', 'Continuación o archivo'],
    questions: [
      { prompt: '¿Puede continuarse sin más?', answer: 'No si el reparo tiene efecto suspensivo.' },
      { prompt: '¿Qué debe hacerse?', answer: 'Subsanar o plantear discrepancia para que resuelva el órgano competente.' },
      { prompt: '¿Qué materia está afectada?', answer: 'Control interno, función interventora y legalidad presupuestaria.' },
    ],
    solution: 'El reparo no es una opinión decorativa: puede paralizar el expediente hasta que se subsane o se resuelva la discrepancia.',
  },
  {
    id: 'ps-g5-1',
    groupId: 'grupo-v',
    title: 'Transparencia con terceros afectados',
    tag: 'Transparencia',
    difficulty: 'examen',
    scenario: 'Una persona solicita acceso a información pública que puede afectar a datos o intereses de terceros identificados.',
    checklist: ['Admisión de la solicitud', 'Límites al acceso', 'Terceros afectados', 'Trámite de audiencia', 'Resolución motivada', 'Plazo', 'Silencio'],
    questions: [
      { prompt: '¿Qué trámite puede ser necesario?', answer: 'Audiencia a terceros afectados.' },
      { prompt: '¿Cuál es el plazo general de resolución?', answer: 'Un mes.' },
      { prompt: '¿Qué sentido tiene el silencio?', answer: 'Desestimatorio.' },
    ],
    solution: 'En transparencia no basta con entregar o denegar: hay que ponderar límites, terceros afectados y motivar la resolución.',
  },
  {
    id: 'ps-g5-2',
    groupId: 'grupo-v',
    title: 'Registro y asistencia digital',
    tag: 'Registros',
    difficulty: 'medio',
    scenario: 'Una persona no obligada a relacionarse electrónicamente acude a una oficina municipal para presentar documentación y pide ayuda para registrarla.',
    checklist: ['Persona obligada o no obligada', 'Asistencia en medios electrónicos', 'Digitalización', 'Registro', 'Justificante', 'Derivación al órgano competente'],
    questions: [
      { prompt: '¿Debe prestarse asistencia?', answer: 'Sí, las oficinas de asistencia ayudan en el uso de medios electrónicos.' },
      { prompt: '¿Qué debe entregarse tras registrar?', answer: 'Justificante o recibo de presentación.' },
      { prompt: '¿Qué debe garantizarse?', answer: 'Accesibilidad, identificación correcta y remisión al órgano competente.' },
    ],
    solution: 'La oficina no solo recibe papeles: asiste, digitaliza cuando procede, registra y deja constancia de la presentación.',
  },
];
