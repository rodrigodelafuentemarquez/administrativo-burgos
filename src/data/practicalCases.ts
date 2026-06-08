export type PracticalCase = {
  id: string;
  title: string;
  source: string;
  duration: string;
  focus: string[];
  scenario: string;
  tasks: string[];
  resolutionSteps: string[];
  legalTexts: string[];
  commonMistakes: string[];
};

export const practicalChecklist = [
  'Leer todo el caso y marcar hechos, fechas, órganos y plazos.',
  'Separar lo que se pregunta en bloques: procedimiento, personal, presupuesto, registro, contratos o urbanismo.',
  'Identificar la norma base antes de escribir la respuesta.',
  'Contestar por apartados, con un orden muy limpio: regla, aplicación al caso y conclusión.',
  'Citar artículos o leyes cuando ayuden, sin convertir la respuesta en una copia de la ley.',
  'Cerrar cada respuesta con una conclusión clara: si procede, quien es competente, que plazo hay y que efecto produce.',
];

export const practicalLegalTexts = [
  'Constitución Española de 1978.',
  'Ley 39/2015, del Procedimiento Administrativo Comun.',
  'Ley 40/2015, de Régimen Jurídico del Sector Publico.',
  'Real Decreto Legislativo 5/2015, TREBEP.',
  'Texto refundido de la Ley General de la Seguridad Social.',
  'Ley 7/1985, Reguladora de las Bases del Régimen Local.',
  'Texto refundido de la Ley Reguladora de las Haciendas Locales.',
  'Real Decreto 500/1990, presupuestos locales.',
  'Ley 9/2017, de Contratos del Sector Publico, cuando el supuesto lo exija.',
  'Ley 31/1995, de Prevención de Riesgos Laborales, si el caso entra en PRL.',
];

export const practicalCases: PracticalCase[] = [
  {
    id: 'ayudas-y-procedimiento',
    title: 'Subvenciones, subsanación, órganos colegiados y recursos',
    source: 'Inspirado en un segundo ejercicio real de Castilla y León (2016), adaptado al enfoque municipal.',
    duration: '75-90 minutos',
    focus: ['II.3', 'II.4', 'II.5', 'V.2'],
    scenario:
      'Un Ayuntamiento convoca ayudas en concurrencia competitiva. Hay delegación para resolver, una comisión de valoración, una subsanación pendiente y una resolución publicada con errores materiales en la identificación de varios beneficiarios.',
    tasks: [
      'Calcular plazo de solicitudes y plazo de subsanación.',
      'Valorar consecuencias de no subsanar.',
      'Explicar si la comisión de valoración se constituye validamente.',
      'Distinguir entre delegación de competencias, suplencia y delegación de firma.',
      'Indicar recursos procedentes contra la resolución y plazo para interponerlos.',
      'Resolver si procede revisión de oficio o rectificación de errores.',
    ],
    resolutionSteps: [
      'Empieza por LPAC: plazos, subsanación, resolución y recursos.',
      'Pasa luego a LRJSP para órganos colegiados, delegación, suplencia y firma.',
      'Diferencia con claridad error material de nulidad o anulabilidad.',
      'Concluye siempre con la via correcta: rectificación, recurso o subsanación.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'bases de la convocatoria'],
    commonMistakes: [
      'Confundir delegación de competencias con delegación de firma.',
      'Tratar un error de NIF como si exigiera revisión de oficio.',
      'Olvidar que el órgano delegado resuelve, pero la titularidad competencial no desaparece.',
    ],
  },
  {
    id: 'personal-y-seguridad-social',
    title: 'Funcionarios, incapacidad temporal, concurso y nacimiento de hijo',
    source: 'Inspirado en un segundo ejercicio real de Castilla y León (2016), adaptado para repasar Gestion de Personal y Seguridad Social.',
    duration: '75-90 minutos',
    focus: ['III.1', 'III.2', 'III.5'],
    scenario:
      'Una funcionaria administrativa toma posesión, entra en incapacidad temporal por enfermedad comun, obtiene nuevo destino por concurso, tiene un hijo y se plantea pedir licencia o situación administrativa compatible con su situación personal.',
    tasks: [
      'Determinar trámites de toma de posesión y alta administrativa.',
      'Explicar requisitos, base reguladora y porcentaje de la incapacidad temporal.',
      'Indicar cese y toma de posesión tras concurso.',
      'Señalar trámites frente a la Seguridad Social.',
      'Analizar permisos y derechos derivados del nacimiento del hijo.',
      'Valorar si procede licencia o excedencia y que efectos produce.',
    ],
    resolutionSteps: [
      'Ordena el caso cronologicamente: acceso, IT, concurso, nacimiento y situación posterior.',
      'Separa función pública y Seguridad Social para no mezclar conceptos.',
      'Cuándo hables de derechos económicos, indica si hay retribución, complemento o cotización.',
      'Cierra cada bloque con la situación administrativa exacta y sus efectos.',
    ],
    legalTexts: ['TREBEP', 'TRLGSS', 'normativa de función pública aplicable'],
    commonMistakes: [
      'Confundir permiso, licencia, excedencia y suspensión.',
      'No diferenciar enfermedad comun de accidente de trabajo.',
      'Responder con conceptos laborales generales sin adaptarlos al empleo público.',
    ],
  },
  {
    id: 'registro-procedimiento-transparencia',
    title: 'Registro electrónico, subsanación, acceso al expediente y transparencia',
    source: 'Supuesto modelo Burgos, pensado para entrenar LPAC, administración electrónica y derecho de acceso.',
    duration: '90-120 minutos',
    focus: ['II.3', 'II.4', 'II.5', 'IV.2', 'IV.4', 'V.2'],
    scenario:
      'Una asociación presenta por registro electrónico una solicitud incompleta el ultimo día de plazo. Aporta documentos en formatos defectuosos, pide copia del expediente, solicita información complementaria por transparencia y formula despues alegaciones por no haber recibido correctamente una notificación electrónica.',
    tasks: [
      'Determinar efectos de la presentación en plazo y del registro electrónico practicado.',
      'Explicar la subsanación: quien la requiere, plazo, contenido y efecto de no atenderla.',
      'Analizar si la notificación electrónica esta bien practicada y cuando se entiende rechazada o realizada.',
      'Distinguir entre acceso al expediente como interesado y derecho de acceso a la información pública.',
      'Señalar como debe ordenarse el expediente electrónico y la incorporación de documentos.',
      'Indicar recursos o actuaciones procedentes si la asociación considera lesionado su derecho de defensa.',
    ],
    resolutionSteps: [
      'Abre la respuesta con el circuito correcto: presentación, asiento, órgano destinatario y comprobación inicial.',
      'Separa con nitidez procedimiento administrativo, notificaciones y transparencia para no mezclar regimens jurídicos distintos.',
      'Cuándo hables de acceso, diferencia interesado en procedimiento vivo, acceso a archivos y transparencia activa o pasiva.',
      'Cierra cada apartado con consecuencia jurídica concreta: subsana, continua, decae, se entiende notificado o procede recurso.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'Ley 19/2013', 'normativa municipal de registro y sede electrónica'],
    commonMistakes: [
      'Confundir requerimiento de subsanación con trámite de alegaciones.',
      'Tratar cualquier incidencia técnica como si anulara automaticamente la notificación electrónica.',
      'Mezclar acceso al expediente de un interesado con solicitud general de transparencia.',
    ],
  },
  {
    id: 'presupuesto-control-gasto',
    title: 'Presupuesto, modificaciones, ejecución del gasto y control interno',
    source: 'Supuesto modelo Burgos centrado en Hacienda Local, Intervención y fases contables.',
    duration: '90-120 minutos',
    focus: ['IV.3', 'IV.5', 'V.3', 'V.4', 'V.5'],
    scenario:
      'Durante el ejercicio presupuestario, un servicio municipal necesita tramitar un gasto no previsto inicialmente. Se plantea una modificación presupuestaria, la aprobación del gasto, el reconocimiento de la obligación tras la prestación y la intervención formula reparos sobre la suficiencia de crédito y la documentación justificativa.',
    tasks: [
      'Determinar que tipo de modificación presupuestaria puede proceder segun el supuesto.',
      'Ordenar correctamente las fases de autorización, disposición, reconocimiento de la obligación y pago.',
      'Precisar que órgano resulta competente en cada decisión relevante.',
      'Explicar el papel de la Intervención y el alcance del reparo.',
      'Distinguir fiscalización previa, control financiero y control de eficacia cuando proceda.',
      'Valorar como se levanta el reparo y que efectos tiene continuar el expediente sin corregir defectos.',
    ],
    resolutionSteps: [
      'Empieza por la existencia o no de crédito y por la via jurídica para habilitarlo o ajustarlo.',
      'Pasa despues a la ejecución del gasto en su secuencia exacta, evitando mezclar actos administrativos y fases contables.',
      'Identifica en cada tramo quien propone, quien aprueba, quien fiscaliza y que documento o justificante debe obrar en el expediente.',
      'Termina con una conclusión operativa: si el gasto puede continuar, que debe subsanarse y que responsabilidad puede aparecer.',
    ],
    legalTexts: ['TRLRHL', 'RD 500/1990', 'bases de ejecución del presupuesto', 'normas de control interno local'],
    commonMistakes: [
      'Confundir modificaciones presupuestarias entre si sin atender a la causa y financiación.',
      'Saltarse el orden A-D-O-P o usarlo como si siempre coincidiera con un unico acto.',
      'Responder sobre control interno en abstracto sin aterrizarlo al reparo concreto del expediente.',
    ],
  },
  {
    id: 'registro-presupuesto-y-atención',
    title: 'Registro, expediente, presupuesto y atención al ciudadano',
    source: 'Supuesto modelo para Burgos, armado con temas muy repetidos del bloque práctico.',
    duration: '90-120 minutos',
    focus: ['IV.2', 'IV.3', 'IV.4', 'V.3', 'V.4', 'V.7', 'V.8'],
    scenario:
      'Una persona presenta en una oficina de asistencia un escrito con anexos en papel el ultimo día de plazo. El expediente exige digitalización, remisión a unidad gestora, propuesta de gasto menor y posterior reconocimiento de la obligación. Ademas, formula una queja por falta de información y pide acceso a documentos del expediente.',
    tasks: [
      'Explicar como debe practicarse el asiento registral y la digitalización.',
      'Indicar efectos de la presentación en día y hora limite.',
      'Ordenar las fases del gasto y documentos contables que procedan.',
      'Señalar donde interviene Intervención y que control corresponde.',
      'Distinguir entre información al ciudadano, queja y derecho de acceso.',
      'Precisar como se forma el expediente electrónico y como se conserva.',
    ],
    resolutionSteps: [
      'Primero fija el circuito documental: registro, justificante, digitalización y remisión.',
      'Despues separa el circuito económico: autorización, disposición, obligación y pago.',
      'No olvides el control: fiscalización o control financiero segun el acto.',
      'Termina con transparencia, acceso y archivo electrónico.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'TRLRHL', 'RD 500/1990', 'Ley 19/2013'],
    commonMistakes: [
      'Tratar una queja como si fuera un recurso administrativo.',
      'Mezclar fase A/D/O/P del gasto.',
      'Olvidar que registro y expediente electrónico no son lo mismo.',
    ],
  },
];
