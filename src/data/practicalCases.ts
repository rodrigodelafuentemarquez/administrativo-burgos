export type PracticalCase = {
  id: string;
  title: string;
  source: string;
  duration: string;
  focus: string[];
  scenario: string;
  tasks: string[];
  resolutionSteps: string[];
  workedResolution: string[];
  solutionExplanation: string;
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
  'Real Decreto 424/2017, control interno en las entidades del Sector Público Local.',
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
    workedResolution: [
      'Comprueba las bases de la convocatoria y cuenta el plazo desde el día siguiente a su publicación. Si se expresa en días, son hábiles salvo que una norma indique otra cosa; excluye sábados, domingos y festivos.',
      'Si la solicitud no reúne los requisitos, el órgano competente requiere subsanación por diez días hábiles, indicando lo que falta y que, si no se atiende, se le tendrá por desistida previa resolución expresa (Ley 39/2015, art. 68).',
      'La comisión de valoración solo puede adoptar acuerdos si está válidamente constituida: presencia de presidencia y secretaría (o quienes les sustituyan) y de la mitad, al menos, de sus miembros (Ley 40/2015, art. 17.2). Revisa además las reglas específicas de las bases.',
      'La delegación de competencias permite que otro órgano ejerza la competencia y debe publicarse; la titularidad sigue en el órgano delegante. La suplencia sustituye temporalmente a la persona titular. La delegación de firma no cambia quién ejerce la competencia (Ley 40/2015, arts. 9–13).',
      'Si la resolución contiene un error material, de hecho o aritmético, el órgano que la dictó puede rectificarlo en cualquier momento (Ley 39/2015, art. 109.2), siempre que no se altere el fondo de la decisión.',
      'Notifica la resolución con indicación de recursos. Si no pone fin a la vía administrativa, cabe alzada; si la agota, reposición potestativa o recurso contencioso-administrativo, respetando órgano y plazo indicados por la ley y la notificación.',
    ],
    solutionExplanation: 'La resolución separa los trámites de la convocatoria, la validez de la comisión, las figuras de organización y la impugnación. No presupone un número de días para solicitudes: ese dato debe salir de las bases concretas. La rectificación solo sirve para errores patentes, no para cambiar beneficiarios o reabrir la valoración.',
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
      'Separa función pública y Seguridad Social para no mezclar conceptos; identifica si la funcionaria está incluida en el Régimen General o en otro régimen.',
      'Cuándo hables de derechos económicos, indica si hay retribución, complemento o cotización.',
      'Cierra cada bloque con la situación administrativa exacta y sus efectos.',
    ],
    workedResolution: [
      'Para el ingreso, aplica la convocatoria y el TREBEP: superación del proceso selectivo, nombramiento, acatamiento de la Constitución y toma de posesión dentro del plazo. El alta y afiliación a la Seguridad Social corresponden a la Administración empleadora cuando proceda.',
      'Clasifica la incapacidad temporal según su contingencia. Si está incluida en el Régimen General y se trata de enfermedad común ordinaria, se exigen 180 días cotizados en los cinco años anteriores; hay excepciones legales para situaciones especiales. La cuantía y quién paga dependen del tramo temporal y del régimen aplicable. Comprueba también las mejoras retributivas de la Administración empleadora antes de calcular importes.',
      'El concurso es provisión de puestos, no un nuevo ingreso. El cese y la toma de posesión se rigen por la convocatoria y el TREBEP; identifica fechas, plazo posesorio y si hay supuestos que permiten diferirlo.',
      'El art. 49 TREBEP reconoce, con carácter general, diecinueve semanas por progenitor: seis obligatorias e ininterrumpidas inmediatamente después del parto, once distribuibles por semanas hasta que el menor cumpla doce meses y dos para cuidado que pueden disfrutarse hasta que cumpla ocho años. Comprueba las ampliaciones por monoparentalidad, parto múltiple, discapacidad u hospitalización neonatal y las reglas transitorias si el hecho causante es anterior.',
      'Solo propone excedencia o cambio de situación administrativa si concurren sus requisitos y existe resolución del órgano competente. Distingue sus efectos en reserva del puesto, retribuciones y cómputo de servicios; no se deducen automáticamente del nacimiento o de la IT.',
    ],
    solutionExplanation: 'El supuesto original no aporta fechas, base reguladora, régimen de Seguridad Social ni reglas de la Administración empleadora, por lo que no permite fijar una prestación o cuantía única. La respuesta modelo identifica qué debe comprobarse y evita inventar cifras o derechos. Para practicar cálculos, añade esos datos al enunciado.',
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
    workedResolution: [
      'El registro electrónico genera un asiento con fecha y hora oficial, número de entrada y destinatario. La presentación en plazo se acredita con el recibo; la unidad receptora debe remitir el escrito al órgano competente.',
      'Si faltan requisitos, procede requerir subsanación por diez días hábiles (art. 68 de la Ley 39/2015). La falta de respuesta no produce por sí sola el desistimiento: requiere resolución expresa. Los formatos admisibles y la digitalización se comprueban conforme al RD 203/2021 y a las reglas de la sede.',
      'Cuando la notificación se practica electrónicamente conforme a la ley, se entiende rechazada si pasan diez días naturales desde su puesta a disposición sin acceder, salvo que se compruebe la imposibilidad técnica o material de acceso (art. 43.2). Si la persona accede antes, la fecha de notificación es la del acceso. Comprueba si estaba obligada o había elegido ese canal.',
      'La persona interesada tiene derecho a acceder al expediente en curso (arts. 53 y 70); una solicitud general de información pública se tramita por la Ley 19/2013, con sus límites y ponderación. No son vías intercambiables.',
      'Incorpora los documentos al expediente electrónico con índice y garantías de integridad y conservación. Una incidencia técnica solo afecta a la notificación si se acredita que impidió el acceso o concurre la causa legal aplicable; no la anula automáticamente.',
      'Si existe un acto que pone fin a la vía administrativa, informa de reposición potestativa o recurso contencioso-administrativo; si no la pone fin, de alzada. La queja o petición de transparencia no suspende por sí misma los plazos de recurso.',
    ],
    solutionExplanation: 'Las fechas concretas de acceso y los documentos aportados determinan si hubo notificación y subsanación en plazo. El modelo distingue rechazo de una notificación electrónica y falta de notificación, y separa el derecho de acceso de la persona interesada de la transparencia general.',
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'Ley 19/2013', 'normativa municipal de registro y sede electrónica'],
    commonMistakes: [
      'Confundir requerimiento de subsanación con trámite de alegaciones.',
      'Tratar cualquier incidencia técnica como si anulara automáticamente la notificación electrónica.',
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
    workedResolution: [
      'Verifica primero si existe crédito adecuado y suficiente. Si no existe crédito para el gasto, estudia un crédito extraordinario; si el crédito existente es insuficiente y no ampliable, un suplemento de crédito. La financiación y el órgano aprobatorio se determinan por el TRLRHL y las bases de ejecución.',
      'Una vez disponible el crédito, ordena la ejecución: autorización (A), disposición o compromiso (D), reconocimiento y liquidación de la obligación (O), y ordenación y realización del pago (P). Las fases pueden acumularse si se cumplen los requisitos, pero no se omiten controles ni justificantes.',
      'Intervención fiscaliza los actos con contenido económico y verifica los extremos aplicables. Si formula reparo suspensivo por falta o insuficiencia de crédito u otro supuesto legal, no debe continuarse el expediente hasta resolver la discrepancia conforme a los arts. 216–217 TRLRHL.',
      'La resolución de discrepancias corresponde al presidente de la entidad local como regla; al Pleno cuando el reparo se base en insuficiencia o inadecuación de crédito, entre otros casos previstos. No cabe levantar el reparo con una mera instrucción informal.',
      'Si el gasto se ejecutó sin crédito o sin el procedimiento exigible, documenta la incidencia y determina sus efectos y responsabilidades. La prestación recibida no elimina la infracción presupuestaria ni convierte en regular el expediente.',
    ],
    solutionExplanation: 'El enunciado no concreta importe, aplicación presupuestaria, fuente de financiación ni bases de ejecución, así que no puede fijarse una modificación concreta o su órgano exacto sin esos datos. La respuesta establece el árbol de decisión legal; para resolver un caso cerrado deben añadirse esos hechos.',
    legalTexts: ['TRLRHL', 'RD 500/1990', 'bases de ejecución del presupuesto', 'normas de control interno local'],
    commonMistakes: [
      'Confundir modificaciones presupuestarias entre si sin atender a la causa y financiación.',
      'Saltarse el orden A-D-O-P o usarlo como si siempre coincidiera con un único acto.',
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
    workedResolution: [
      'La oficina de asistencia recibe el escrito en papel, practica el asiento en el registro, entrega recibo y digitaliza los documentos para incorporarlos al expediente electrónico. Devuelve los originales cuando proceda y conserva la trazabilidad del proceso (Ley 39/2015, arts. 16 y 27).',
      'Si se presenta en el último día, comprueba el calendario y la hora oficial del registro aplicable. La fecha que acredita el asiento determina la presentación; el órgano debe tener en cuenta las reglas de cómputo y el calendario de días inhábiles.',
      'Antes de comprometer el gasto, verifica crédito y competencia. Sigue las fases A-D-O-P y exige factura o documento acreditativo de la prestación antes de reconocer la obligación; el pago se ordena y materializa después del reconocimiento.',
      'Intervención ejerce la función de control que corresponda al acto y al régimen de control interno local. Una queja por atención no sustituye a un recurso ni suspende sus plazos; registra y responde por el cauce establecido.',
      'La persona interesada puede acceder a los documentos de su expediente conforme al art. 53 de la Ley 39/2015. Una solicitud de información pública se tramita separadamente por la Ley 19/2013 y sus límites. El expediente electrónico debe conservar documentos auténticos, ordenados e íntegros.',
    ],
    solutionExplanation: 'El caso combina trámites documentales y presupuestarios que deben resolverse en secuencia. No se puede afirmar que el gasto sea menor ni elegir un procedimiento de contratación sin importe, objeto y circunstancias; primero hay que completar esos datos y aplicar la LCSP si corresponde.',
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'TRLRHL', 'RD 500/1990', 'Ley 19/2013'],
    commonMistakes: [
      'Tratar una queja como si fuera un recurso administrativo.',
      'Mezclar fase A/D/O/P del gasto.',
      'Olvidar que registro y expediente electrónico no son lo mismo.',
    ],
  },
];
