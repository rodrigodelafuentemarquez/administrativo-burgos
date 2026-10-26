export type DevelopmentExample = {
  id: string;
  topic: string;
  exercisePool: 'I-II' | 'III-V';
  title: string;
  prompt: string;
  structure: string[];
  modelAnswer: string;
  whyItWorks: string;
  legalTexts: string[];
};

/** Breves modelos de redacción: sirven para practicar orden y precisión, no sustituyen al tema completo. */
export const developmentExamples: DevelopmentExample[] = [
  {
    id: 'municipio-y-padron',
    topic: 'I.6',
    exercisePool: 'I-II',
    title: 'Municipio, término municipal y padrón',
    prompt: 'Expón los elementos del municipio y relaciona población, vecindad y padrón.',
    structure: ['Concepto y personalidad', 'Territorio y término', 'Población y condición de vecino', 'Gestión padronal y cierre'],
    modelAnswer: 'El municipio es la entidad local básica de la organización territorial del Estado y tiene personalidad jurídica y capacidad para cumplir sus fines. Sus elementos son territorio, población y organización. El término municipal delimita el espacio donde el Ayuntamiento ejerce sus competencias, y cada municipio pertenece a una sola provincia. La población municipal se refleja en el padrón. Toda persona que resida habitualmente en España debe inscribirse en el municipio correspondiente; la condición de vecino se adquiere con la inscripción. El padrón acredita residencia y domicilio habitual a efectos administrativos, pero no prueba por sí solo la propiedad de una vivienda ni la situación de residencia legal de una persona extranjera. El Ayuntamiento lo forma, mantiene, revisa y custodia, mientras que el INE coordina el sistema y comprueba posibles errores o duplicidades. En Castilla y León, el término es continuo salvo discontinuidades reconocidas por la legislación autonómica.',
    whyItWorks: 'La respuesta sigue el orden del epígrafe y distingue municipio, término, vecindad y padrón. Evita atribuir al padrón efectos que la ley no le da y separa la gestión municipal de la coordinación estatal.',
    legalTexts: ['Constitución Española, arts. 137, 140 y 141', 'Ley 7/1985, arts. 11–18', 'Ley 1/1998 de Castilla y León, art. 3'],
  },
  {
    id: 'acto-administrativo',
    topic: 'II.2',
    exercisePool: 'I-II',
    title: 'El acto administrativo: eficacia y validez',
    prompt: 'Define el acto administrativo y explica sus elementos, motivación, eficacia e invalidez.',
    structure: ['Concepto y competencia', 'Contenido y forma', 'Motivación y notificación', 'Eficacia, invalidez y conclusión'],
    modelAnswer: 'El acto administrativo es una declaración de voluntad, juicio, conocimiento o deseo realizada por una Administración en ejercicio de una potestad administrativa. Debe dictarlo el órgano competente, con el contenido y la finalidad previstos por el ordenamiento y siguiendo el procedimiento aplicable. La forma ordinaria es escrita por medios electrónicos, salvo que la naturaleza del acto exija otra forma. La motivación se exige en los supuestos establecidos legalmente, entre ellos los actos que limiten derechos o intereses legítimos y los que resuelvan recursos. La eficacia se produce, como regla, desde que el acto se dicta, aunque puede quedar demorada por su contenido, notificación, publicación o aprobación superior. La notificación debe permitir conocer el texto íntegro y los recursos procedentes. Un acto puede ser nulo de pleno derecho solo por las causas tasadas; los demás vicios determinantes de invalidez generan, en su caso, anulabilidad. No debe confundirse invalidez con falta de eficacia.',
    whyItWorks: 'Presenta primero la regla general y después separa validez, eficacia y notificación. La referencia a causas tasadas evita convertir cualquier defecto formal en nulidad radical.',
    legalTexts: ['Ley 39/2015, arts. 34–52 y 47–48'],
  },
  {
    id: 'empleo-publico-local',
    topic: 'III.1',
    exercisePool: 'III-V',
    title: 'Personal al servicio de las entidades locales',
    prompt: 'Resume las clases de empleados públicos locales y los principios de acceso y actuación.',
    structure: ['Clases de personal', 'Selección y provisión', 'Derechos y deberes', 'Incompatibilidades y conclusión'],
    modelAnswer: 'El personal de las entidades locales se integra, conforme a la legislación básica, por funcionarios de carrera, funcionarios interinos, personal laboral y personal eventual. La relación jurídica y las funciones reservadas varían según la clase; la denominación del puesto no permite equiparar automáticamente funcionario y laboral. El acceso al empleo público debe respetar igualdad, mérito y capacidad, junto con publicidad, transparencia, imparcialidad y profesionalidad de los órganos de selección. La selección no debe confundirse con la provisión de puestos: la primera permite ingresar, mientras que la segunda asigna destinos o formas de desempeño entre quienes ya reúnen los requisitos. El personal tiene los derechos individuales y colectivos reconocidos legalmente y debe actuar con objetividad, integridad, neutralidad, responsabilidad y servicio al interés general. Las incompatibilidades se examinan según la actividad y el régimen aplicable; no se presume una compatibilidad ilimitada por tratarse de una actividad privada.',
    whyItWorks: 'Ordena el tema desde las clases hasta el régimen de actuación y señala diferencias que suelen generar errores: ingreso/provisión y funcionario/laboral.',
    legalTexts: ['Real Decreto Legislativo 5/2015, TREBEP', 'Ley 7/1985, arts. 89–104'],
  },
  {
    id: 'presupuesto-local',
    topic: 'IV.2',
    exercisePool: 'III-V',
    title: 'Presupuesto de las entidades locales',
    prompt: 'Explica la función del presupuesto local, sus principios y el ciclo de aprobación.',
    structure: ['Concepto y contenido', 'Principios presupuestarios', 'Aprobación y exposición', 'Prórroga y cierre'],
    modelAnswer: 'El presupuesto general de una entidad local expresa de forma ordenada y sistemática los derechos que se prevén liquidar y las obligaciones que se pueden reconocer durante el ejercicio. Incluye el presupuesto de la propia entidad y, cuando proceda, los de sus organismos autónomos y sociedades dependientes en los términos legales. Su elaboración y aprobación deben respetar estabilidad presupuestaria, anualidad, universalidad y especialidad del crédito. La Presidencia forma el presupuesto y lo remite al Pleno, que lo aprueba inicialmente. Después se expone al público durante el plazo legal para reclamaciones; si no se presenta ninguna, queda definitivamente aprobado, y si las hay, el Pleno las resuelve antes de la aprobación definitiva. El presupuesto entra en vigor tras la publicación exigida. Si al comenzar el ejercicio no está vigente el nuevo presupuesto, se prorroga automáticamente el anterior con las exclusiones previstas en la ley. La prórroga no autoriza cualquier gasto sin atender a su crédito y finalidad.',
    whyItWorks: 'Explica el ciclo en secuencia y no confunde previsión presupuestaria con disponibilidad ilimitada de tesorería. Para un supuesto real, añade fechas, órganos y plazos del expediente concreto.',
    legalTexts: ['Real Decreto Legislativo 2/2004, TRLRHL, arts. 162–171', 'Real Decreto 500/1990'],
  },
  {
    id: 'transparencia-y-acceso',
    topic: 'V.2',
    exercisePool: 'III-V',
    title: 'Transparencia y derecho de acceso',
    prompt: 'Distingue publicidad activa y derecho de acceso a información pública.',
    structure: ['Finalidad y principios', 'Publicidad activa', 'Solicitud de acceso', 'Límites, protección de datos y conclusión'],
    modelAnswer: 'La transparencia facilita que la ciudadanía conozca la actividad pública y pueda controlar la actuación administrativa. Comprende, por un lado, la publicidad activa, que obliga a publicar de forma periódica y actualizada información institucional, organizativa, económica y de relevancia jurídica; y, por otro, el derecho de cualquier persona a solicitar acceso a información pública en los términos de la ley. La solicitud no exige motivación, aunque puede expresarse para orientar la tramitación. El acceso puede limitarse cuando concurra una causa legal y la decisión debe ponderar el interés protegido, aplicar proporcionalidad y motivarse. Si el documento contiene datos personales, se analiza su naturaleza, la finalidad y la posibilidad de disociar datos antes de facilitarlo. El derecho de acceso a la información pública no sustituye el acceso al expediente que corresponde a quienes son interesados en un procedimiento en curso; son vías distintas y deben tramitarse con su régimen específico.',
    whyItWorks: 'Separa las dos obligaciones de transparencia y diferencia el derecho general de acceso del acceso procedimental. Incluye la ponderación y la protección de datos sin presentar los límites como denegación automática.',
    legalTexts: ['Ley 19/2013, de transparencia', 'Reglamento (UE) 2016/679', 'Ley Orgánica 3/2018'],
  },
  {
    id: 'derechos-y-garantias-constitucionales',
    topic: 'I.1',
    exercisePool: 'I-II',
    title: 'Derechos fundamentales y sus garantías',
    prompt: 'Explica la clasificación de los derechos constitucionales y las garantías de los derechos fundamentales.',
    structure: ['Marco constitucional', 'Derechos y libertades', 'Garantías generales y jurisdiccionales', 'Suspensión y cierre'],
    modelAnswer: 'La Constitución reconoce derechos y deberes en su Título I, pero su régimen de garantía no es idéntico para todos. Los derechos fundamentales y libertades públicas cuentan con las garantías reforzadas previstas en el artículo 53, entre ellas la tutela judicial y, en los términos constitucionales, el recurso de amparo. Los principios rectores orientan la legislación, la práctica judicial y la actuación de los poderes públicos, y solo pueden alegarse ante la jurisdicción ordinaria conforme a las leyes que los desarrollen. La suspensión de derechos requiere los supuestos y procedimientos constitucionales; no equivale a una limitación ordinaria ni permite a la Administración dejar de aplicar la Constitución.',
    whyItWorks: 'Distingue derechos, principios rectores y garantías, y evita atribuir a todos los preceptos del Título I el mismo nivel de protección.',
    legalTexts: ['Constitución Española, arts. 14–55, en especial 53 y 55'],
  },
  {
    id: 'fases-procedimiento-comun',
    topic: 'II.3',
    exercisePool: 'I-II',
    title: 'Fases del procedimiento administrativo común',
    prompt: 'Describe las fases del procedimiento común y relaciona cada una con la obligación de resolver.',
    structure: ['Iniciación', 'Ordenación e instrucción', 'Terminación', 'Resolución, notificación y silencio'],
    modelAnswer: 'El procedimiento puede iniciarse de oficio o a solicitud de una persona interesada. Después se ordena e instruye: se incorporan informes y pruebas y se practican los trámites de audiencia que procedan. La terminación ordinaria se produce mediante resolución, sin perjuicio de otras formas legalmente previstas, como desistimiento, renuncia, caducidad o terminación convencional cuando sea admisible. La Administración debe dictar resolución expresa y notificarla en todos los procedimientos, con las excepciones legales. El plazo máximo es el fijado por la norma reguladora; si no lo fija, rige el plazo supletorio legal. El silencio no sustituye siempre a una resolución ni produce idéntico efecto en cualquier procedimiento.',
    whyItWorks: 'Ordena la respuesta conforme a la ley y advierte que el efecto del silencio depende del tipo de procedimiento y de sus excepciones.',
    legalTexts: ['Ley 39/2015, arts. 21, 24, 29 y 54–95'],
  },
  {
    id: 'recursos-administrativos',
    topic: 'II.4',
    exercisePool: 'I-II',
    title: 'Recursos administrativos y revisión',
    prompt: 'Diferencia alzada, reposición potestativa y revisión extraordinaria de un acto administrativo.',
    structure: ['Comprobar acto y órgano', 'Determinar si pone fin a la vía administrativa', 'Elegir recurso, plazo y órgano', 'Separar recurso y revisión de oficio'],
    modelAnswer: 'Antes de proponer un recurso se identifica el acto, su fecha de notificación y si pone fin a la vía administrativa. Contra los actos que no la agotan cabe, con carácter general, recurso de alzada ante el superior jerárquico. Contra los que sí la agotan puede interponerse reposición potestativa ante el mismo órgano o acudir directamente a la jurisdicción contencioso-administrativa, respetando los plazos aplicables. El recurso extraordinario de revisión solo procede contra actos firmes y por los motivos tasados legalmente. La revisión de oficio es una vía distinta, reservada a los supuestos y requisitos previstos en la ley; no es una alternativa libre para reabrir cualquier decisión firme.',
    whyItWorks: 'La respuesta empieza por la naturaleza del acto y evita escoger un recurso sin conocer la notificación, el órgano y el fin de la vía administrativa.',
    legalTexts: ['Ley 39/2015, arts. 106–126'],
  },
  {
    id: 'situaciones-administrativas',
    topic: 'III.2',
    exercisePool: 'III-V',
    title: 'Adquisición, pérdida y situaciones administrativas',
    prompt: 'Expón cómo se adquiere la condición de funcionario de carrera y cómo se ordenan sus situaciones administrativas.',
    structure: ['Requisitos de adquisición', 'Causas de pérdida', 'Situaciones administrativas', 'Aplicación al caso'],
    modelAnswer: 'La condición de funcionario de carrera se adquiere al superar el proceso selectivo, recibir el nombramiento por el órgano competente, cumplir los requisitos formales legalmente exigidos y tomar posesión dentro del plazo establecido. La pérdida puede producirse por causas previstas en la ley, como renuncia aceptada, pérdida de nacionalidad cuando sea requisito, jubilación, separación del servicio firme o inhabilitación absoluta o especial para cargo público. Durante la carrera, la situación administrativa depende de los hechos y de la normativa aplicable: el Estatuto Básico contempla servicio activo, servicios especiales, servicio en otras Administraciones, excedencia y suspensión de funciones, con requisitos y efectos propios. No se asigna una situación sin identificar el motivo y la resolución correspondiente.',
    whyItWorks: 'Separa adquisición, pérdida y situaciones, y no trata las denominaciones como intercambiables ni presupone efectos económicos o de reserva del puesto.',
    legalTexts: ['Real Decreto Legislativo 5/2015, TREBEP, arts. 62–68 y 85–92'],
  },
  {
    id: 'atencion-accesible-y-quejas',
    topic: 'V.3',
    exercisePool: 'III-V',
    title: 'Atención accesible, información y quejas',
    prompt: 'Resuelve una consulta presencial de una persona que necesita apoyo para relacionarse electrónicamente y formula una queja por la atención recibida.',
    structure: ['Identificar la necesidad y el derecho', 'Prestar apoyo accesible', 'Diferenciar información y actuación procedimental', 'Registrar y contestar la queja'],
    modelAnswer: 'El personal de atención identifica qué gestión necesita la persona y facilita una respuesta clara y accesible. La Ley 39/2015 reconoce el derecho a recibir asistencia en el uso de medios electrónicos; quien no está obligado a relacionarse electrónicamente puede elegir el canal, y la asistencia del artículo 12 se presta a quienes la soliciten en los términos legales. La información general se distingue de la particular sobre un expediente, que se facilita a quien tenga legitimación. La queja sobre el servicio se registra y tramita por el cauce disponible, pero no sustituye a un recurso ni suspende por sí misma plazos. La respuesta debe indicar las actuaciones realizadas y, si existe un acto impugnable, informar de los recursos que figuren en su notificación.',
    whyItWorks: 'Aplica accesibilidad y asistencia sin pasar por alto quién está obligado a relacionarse electrónicamente; también separa información, queja y recurso y no promete que una queja detenga un plazo.',
    legalTexts: ['Ley 39/2015, arts. 12–13 y 53; Real Decreto 203/2021'],
  },
];
