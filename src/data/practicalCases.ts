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
