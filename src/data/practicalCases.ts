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
  'Leer todo el caso y marcar hechos, fechas, organos y plazos.',
  'Separar lo que se pregunta en bloques: procedimiento, personal, presupuesto, registro, contratos o urbanismo.',
  'Identificar la norma base antes de escribir la respuesta.',
  'Contestar por apartados, con un orden muy limpio: regla, aplicacion al caso y conclusion.',
  'Citar articulos o leyes cuando ayuden, sin convertir la respuesta en una copia de la ley.',
  'Cerrar cada respuesta con una conclusion clara: si procede, quien es competente, que plazo hay y que efecto produce.',
];

export const practicalLegalTexts = [
  'Constitucion Espanola de 1978.',
  'Ley 39/2015, del Procedimiento Administrativo Comun.',
  'Ley 40/2015, de Regimen Juridico del Sector Publico.',
  'Real Decreto Legislativo 5/2015, TREBEP.',
  'Texto refundido de la Ley General de la Seguridad Social.',
  'Ley 7/1985, Reguladora de las Bases del Regimen Local.',
  'Texto refundido de la Ley Reguladora de las Haciendas Locales.',
  'Real Decreto 500/1990, presupuestos locales.',
  'Ley 9/2017, de Contratos del Sector Publico, cuando el supuesto lo exija.',
  'Ley 31/1995, de Prevencion de Riesgos Laborales, si el caso entra en PRL.',
];

export const practicalCases: PracticalCase[] = [
  {
    id: 'ayudas-y-procedimiento',
    title: 'Subvenciones, subsanacion, organos colegiados y recursos',
    source: 'Inspirado en un segundo ejercicio real de Castilla y Leon (2016), adaptado al enfoque municipal.',
    duration: '75-90 minutos',
    focus: ['II.3', 'II.4', 'II.5', 'V.2'],
    scenario:
      'Un Ayuntamiento convoca ayudas en concurrencia competitiva. Hay delegacion para resolver, una comision de valoracion, una subsanacion pendiente y una resolucion publicada con errores materiales en la identificacion de varios beneficiarios.',
    tasks: [
      'Calcular plazo de solicitudes y plazo de subsanacion.',
      'Valorar consecuencias de no subsanar.',
      'Explicar si la comision de valoracion se constituye validamente.',
      'Distinguir entre delegacion de competencias, suplencia y delegacion de firma.',
      'Indicar recursos procedentes contra la resolucion y plazo para interponerlos.',
      'Resolver si procede revision de oficio o rectificacion de errores.',
    ],
    resolutionSteps: [
      'Empieza por LPAC: plazos, subsanacion, resolucion y recursos.',
      'Pasa luego a LRJSP para organos colegiados, delegacion, suplencia y firma.',
      'Diferencia con claridad error material de nulidad o anulabilidad.',
      'Concluye siempre con la via correcta: rectificacion, recurso o subsanacion.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'bases de la convocatoria'],
    commonMistakes: [
      'Confundir delegacion de competencias con delegacion de firma.',
      'Tratar un error de NIF como si exigiera revision de oficio.',
      'Olvidar que el organo delegado resuelve, pero la titularidad competencial no desaparece.',
    ],
  },
  {
    id: 'personal-y-seguridad-social',
    title: 'Funcionarios, incapacidad temporal, concurso y nacimiento de hijo',
    source: 'Inspirado en un segundo ejercicio real de Castilla y Leon (2016), adaptado para repasar Gestion de Personal y Seguridad Social.',
    duration: '75-90 minutos',
    focus: ['III.1', 'III.2', 'III.5'],
    scenario:
      'Una funcionaria administrativa toma posesion, entra en incapacidad temporal por enfermedad comun, obtiene nuevo destino por concurso, tiene un hijo y se plantea pedir licencia o situacion administrativa compatible con su situacion personal.',
    tasks: [
      'Determinar tramites de toma de posesion y alta administrativa.',
      'Explicar requisitos, base reguladora y porcentaje de la incapacidad temporal.',
      'Indicar cese y toma de posesion tras concurso.',
      'Señalar tramites frente a la Seguridad Social.',
      'Analizar permisos y derechos derivados del nacimiento del hijo.',
      'Valorar si procede licencia o excedencia y que efectos produce.',
    ],
    resolutionSteps: [
      'Ordena el caso cronologicamente: acceso, IT, concurso, nacimiento y situacion posterior.',
      'Separa funcion publica y Seguridad Social para no mezclar conceptos.',
      'Cuando hables de derechos economicos, indica si hay retribucion, complemento o cotizacion.',
      'Cierra cada bloque con la situacion administrativa exacta y sus efectos.',
    ],
    legalTexts: ['TREBEP', 'TRLGSS', 'normativa de funcion publica aplicable'],
    commonMistakes: [
      'Confundir permiso, licencia, excedencia y suspension.',
      'No diferenciar enfermedad comun de accidente de trabajo.',
      'Responder con conceptos laborales generales sin adaptarlos al empleo publico.',
    ],
  },
  {
    id: 'registro-procedimiento-transparencia',
    title: 'Registro electronico, subsanacion, acceso al expediente y transparencia',
    source: 'Supuesto modelo Burgos, pensado para entrenar LPAC, administracion electronica y derecho de acceso.',
    duration: '90-120 minutos',
    focus: ['II.3', 'II.4', 'II.5', 'IV.2', 'IV.4', 'V.2'],
    scenario:
      'Una asociacion presenta por registro electronico una solicitud incompleta el ultimo dia de plazo. Aporta documentos en formatos defectuosos, pide copia del expediente, solicita informacion complementaria por transparencia y formula despues alegaciones por no haber recibido correctamente una notificacion electronica.',
    tasks: [
      'Determinar efectos de la presentacion en plazo y del registro electronico practicado.',
      'Explicar la subsanacion: quien la requiere, plazo, contenido y efecto de no atenderla.',
      'Analizar si la notificacion electronica esta bien practicada y cuando se entiende rechazada o realizada.',
      'Distinguir entre acceso al expediente como interesado y derecho de acceso a la informacion publica.',
      'Señalar como debe ordenarse el expediente electronico y la incorporacion de documentos.',
      'Indicar recursos o actuaciones procedentes si la asociacion considera lesionado su derecho de defensa.',
    ],
    resolutionSteps: [
      'Abre la respuesta con el circuito correcto: presentacion, asiento, organo destinatario y comprobacion inicial.',
      'Separa con nitidez procedimiento administrativo, notificaciones y transparencia para no mezclar regimens juridicos distintos.',
      'Cuando hables de acceso, diferencia interesado en procedimiento vivo, acceso a archivos y transparencia activa o pasiva.',
      'Cierra cada apartado con consecuencia juridica concreta: subsana, continua, decae, se entiende notificado o procede recurso.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'Ley 19/2013', 'normativa municipal de registro y sede electronica'],
    commonMistakes: [
      'Confundir requerimiento de subsanacion con tramite de alegaciones.',
      'Tratar cualquier incidencia tecnica como si anulara automaticamente la notificacion electronica.',
      'Mezclar acceso al expediente de un interesado con solicitud general de transparencia.',
    ],
  },
  {
    id: 'presupuesto-control-gasto',
    title: 'Presupuesto, modificaciones, ejecucion del gasto y control interno',
    source: 'Supuesto modelo Burgos centrado en Hacienda Local, Intervencion y fases contables.',
    duration: '90-120 minutos',
    focus: ['IV.3', 'IV.5', 'V.3', 'V.4', 'V.5'],
    scenario:
      'Durante el ejercicio presupuestario, un servicio municipal necesita tramitar un gasto no previsto inicialmente. Se plantea una modificacion presupuestaria, la aprobacion del gasto, el reconocimiento de la obligacion tras la prestacion y la intervencion formula reparos sobre la suficiencia de credito y la documentacion justificativa.',
    tasks: [
      'Determinar que tipo de modificacion presupuestaria puede proceder segun el supuesto.',
      'Ordenar correctamente las fases de autorizacion, disposicion, reconocimiento de la obligacion y pago.',
      'Precisar que organo resulta competente en cada decision relevante.',
      'Explicar el papel de la Intervencion y el alcance del reparo.',
      'Distinguir fiscalizacion previa, control financiero y control de eficacia cuando proceda.',
      'Valorar como se levanta el reparo y que efectos tiene continuar el expediente sin corregir defectos.',
    ],
    resolutionSteps: [
      'Empieza por la existencia o no de credito y por la via juridica para habilitarlo o ajustarlo.',
      'Pasa despues a la ejecucion del gasto en su secuencia exacta, evitando mezclar actos administrativos y fases contables.',
      'Identifica en cada tramo quien propone, quien aprueba, quien fiscaliza y que documento o justificante debe obrar en el expediente.',
      'Termina con una conclusion operativa: si el gasto puede continuar, que debe subsanarse y que responsabilidad puede aparecer.',
    ],
    legalTexts: ['TRLRHL', 'RD 500/1990', 'bases de ejecucion del presupuesto', 'normas de control interno local'],
    commonMistakes: [
      'Confundir modificaciones presupuestarias entre si sin atender a la causa y financiacion.',
      'Saltarse el orden A-D-O-P o usarlo como si siempre coincidiera con un unico acto.',
      'Responder sobre control interno en abstracto sin aterrizarlo al reparo concreto del expediente.',
    ],
  },
  {
    id: 'registro-presupuesto-y-atencion',
    title: 'Registro, expediente, presupuesto y atencion al ciudadano',
    source: 'Supuesto modelo para Burgos, armado con temas muy repetidos del bloque practico.',
    duration: '90-120 minutos',
    focus: ['IV.2', 'IV.3', 'IV.4', 'V.3', 'V.4', 'V.7', 'V.8'],
    scenario:
      'Una persona presenta en una oficina de asistencia un escrito con anexos en papel el ultimo dia de plazo. El expediente exige digitalizacion, remision a unidad gestora, propuesta de gasto menor y posterior reconocimiento de la obligacion. Ademas, formula una queja por falta de informacion y pide acceso a documentos del expediente.',
    tasks: [
      'Explicar como debe practicarse el asiento registral y la digitalizacion.',
      'Indicar efectos de la presentacion en dia y hora limite.',
      'Ordenar las fases del gasto y documentos contables que procedan.',
      'Señalar donde interviene Intervencion y que control corresponde.',
      'Distinguir entre informacion al ciudadano, queja y derecho de acceso.',
      'Precisar como se forma el expediente electronico y como se conserva.',
    ],
    resolutionSteps: [
      'Primero fija el circuito documental: registro, justificante, digitalizacion y remision.',
      'Despues separa el circuito economico: autorizacion, disposicion, obligacion y pago.',
      'No olvides el control: fiscalizacion o control financiero segun el acto.',
      'Termina con transparencia, acceso y archivo electronico.',
    ],
    legalTexts: ['Ley 39/2015', 'Ley 40/2015', 'TRLRHL', 'RD 500/1990', 'Ley 19/2013'],
    commonMistakes: [
      'Tratar una queja como si fuera un recurso administrativo.',
      'Mezclar fase A/D/O/P del gasto.',
      'Olvidar que registro y expediente electronico no son lo mismo.',
    ],
  },
];
