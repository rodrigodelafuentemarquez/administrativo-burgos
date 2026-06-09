export type MemoryAid = {
  mnemonic: string;
  anchors: string[];
  confusions: string[];
  drills: string[];
};

const m = (
  mnemonic: string,
  anchors: string[],
  confusions: string[],
  drills: string[],
): MemoryAid => ({ mnemonic, anchors, confusions, drills });

export const memoryAidsBySlug: Record<string, MemoryAid> = {
  'grupo-i-tema-01': m(
    'Piensa la Constitución como una escalera: 1-9 base del Estado, 10 puerta de los derechos, 14 igualdad, 15-29 núcleo fuerte, 30-38 derechos ciudadanos y 53-55 garantías y suspensión.',
    ['Artículo 1: valores superiores.', 'Artículo 9: legalidad, jerarquía, publicidad, irretroactividad, seguridad jurídica, responsabilidad e interdicción de la arbitrariedad.', 'Artículo 14: igualdad.', 'Artículo 19: circulación y residencia; artículo 20: expresión e información.', 'Artículo 53: garantías; artículo 55: suspensión.'],
    ['No mezclar el artículo 19 con el 20: primero te mueves, luego hablas.', 'El recurso de amparo protege ciertos derechos del 14 al 29 y la objeción de conciencia del 30.2, no todo el Título I por igual.'],
    ['Recita de memoria la secuencia 14-15-16-17-18-19-20 con una palabra clave por artículo.', 'Haz un mapa rápido: derechos, garantías y supuestos de suspensión.'],
  ),
  'grupo-i-tema-02': m(
    'Orden visual: Corona simboliza, Cortes legislan, Gobierno dirige, jueces juzgan. Si dudas, recuerda la cadena C-C-G-J.',
    ['Corona: artículos 56 a 65.', 'Cortes Generales: artículos 66 a 96.', 'Gobierno y Administración: artículos 97 a 107.', 'Poder Judicial: artículos 117 a 127.'],
    ['El Rey no gobierna: reina, arbitra y modera, con refrendo.', 'Gobierno y Administración no son lo mismo: el Gobierno dirige; la Administración ejecuta y sirve con objetividad.'],
    ['Repite cuatro bloques con su verbo: Corona simboliza, Cortes legislan, Gobierno dirige, jueces juzgan.', 'Ubica en menos de un minuto dónde empieza y acaba cada bloque constitucional.'],
  ),
  'grupo-i-tema-03': m(
    'Territorio en tres niveles: Estado, comunidad autónoma y ente local. La mnemotecnia es E-C-L: Estado coordina, Comunidad asume, Local gestiona cerca.',
    ['Artículo 2 CE: unidad, autonomía y solidaridad.', 'Artículos 137 a 139 CE: organización territorial y principios.', 'Artículos 148 y 149 CE: reparto clásico de competencias.'],
    ['Autonomía no es soberanía.', 'El Estatuto no está por encima de la Constitución: desarrolla la autonomía dentro de ella.'],
    ['Di en voz alta qué materias suelen ir al 148 y cuáles al 149.', 'Haz un cuadro con competencia exclusiva estatal, autonómica y local.'],
  ),
  'grupo-i-tema-04': m(
    'Fórmula corta: el Gobierno manda políticamente; la Administración actúa jurídicamente.',
    ['Artículo 97 CE: el Gobierno dirige la política y la Administración civil y militar.', 'Artículo 103 CE: la Administración sirve con objetividad y actúa con eficacia, jerarquía, descentralización, desconcentración y coordinación.'],
    ['No confundir dirección política con gestión administrativa.', 'Descentralización, desconcentración y delegación no son equivalentes.'],
    ['Memoriza el artículo 103 con palabras sueltas en fila.', 'Pon un ejemplo de decisión del Gobierno y otro de actuación administrativa.'],
  ),
  'grupo-i-tema-05': m(
    'Regla E-R-H: Entidades locales, Régimen local y Hacienda local; las tres patas del mundo local.',
    ['Ley 7/1985: estructura básica del régimen local.', 'TRLRHL: ingresos, tributos y presupuesto local.', 'Municipio y provincia son las entidades locales necesarias.'],
    ['La autonomía local necesita competencias y recursos: no basta una declaración formal.', 'No mezclar tipos de entes locales con formas asociativas como mancomunidades o consorcios.'],
    ['Enumera de memoria las entidades locales de la LRBRL.', 'Haz un repaso separado de normas de organización y normas de hacienda.'],
  ),
  'grupo-i-tema-06': m(
    'Municipio = territorio + población + organización. Si falta una pieza, no entiendes el tema.',
    ['Término municipal: ámbito territorial.', 'Padrón: registro administrativo de vecinos.', 'Empadronamiento: acredita residencia y domicilio habitual.'],
    ['Padrón no equivale a nacionalidad ni a residencia legal de extranjería.', 'Población municipal no es lo mismo que simple presencia ocasional en el municipio.'],
    ['Repite las tres piezas del municipio sin mirar.', 'Explica en dos líneas para qué sirve el padrón y qué acredita exactamente.'],
  ),
  'grupo-i-tema-07': m(
    'Cadena local: Pleno decide lo estructural, Alcaldía impulsa y dirige, Junta de Gobierno gestiona, Secretaría da fe, Intervención controla y Gestión Tributaria recauda.',
    ['Pleno, Alcaldía y Junta de Gobierno Local son el núcleo político.', 'Secretaría: fe pública y asesoramiento legal preceptivo.', 'Intervención: control y fiscalización interna.', 'Gestión Tributaria: gestión de ingresos y recaudación.'],
    ['No atribuir a Intervención funciones de Secretaría ni al revés.', 'La Junta de Gobierno no sustituye al Pleno en materias reservadas.'],
    ['Haz una tabla órgano-función con seis filas.', 'Cuando estudies acuerdos municipales, pregúntate siempre qué órgano es competente.'],
  ),
  'grupo-i-tema-08': m(
    'Truco clásico: Europeo marca rumbo, Unión decide, Parlamento representa, Comisión impulsa, Tribunal controla.',
    ['Consejo Europeo: grandes orientaciones.', 'Consejo de la Unión Europea: codecisión y coordinación con el Parlamento.', 'Comisión: iniciativa y vigilancia del Derecho de la Unión.', 'TJUE: interpretación uniforme.'],
    ['No confundir Consejo Europeo con Consejo de la Unión Europea.', 'El Parlamento no es un mero órgano consultivo: participa en la función legislativa y presupuestaria.'],
    ['Repite cinco instituciones y una función de cada una.', 'Haz un test mental: quién propone, quién aprueba, quién interpreta.'],
  ),
  'grupo-i-tema-09': m(
    'Estatuto de Castilla y León: estructura, instituciones, competencias y reforma; E-I-C-R.',
    ['El Estatuto es la norma institucional básica de la Comunidad.', 'Debes ubicar Cortes, Presidente y Junta de Castilla y León.', 'Competencias y reforma son dos focos clásicos de examen.'],
    ['No mezclar derechos estatutarios con derechos fundamentales constitucionales.', 'La reforma estatutaria tiene cauce reforzado, no se cambia como una ley ordinaria.'],
    ['Haz un índice oral del Estatuto en cuatro bloques.', 'Distingue instituciones autonómicas y competencias materiales con ejemplos.'],
  ),
  'grupo-ii-tema-01': m(
    'Pirámide fija: Constitución, ley y reglamento. Si una norma baja contradice a una alta, pierde la baja.',
    ['Ley ordinaria, orgánica, decreto-ley y decreto legislativo tienen rango legal.', 'El reglamento desarrolla la ley y no puede innovar contra ella.', 'Costumbre y principios generales entran como fuentes o criterios integradores según el caso.'],
    ['Decreto-ley no es reglamento: tiene rango de ley.', 'La potestad reglamentaria no permite regular materias reservadas a ley.'],
    ['Dibuja la pirámide normativa en veinte segundos.', 'Haz una ficha aparte con diferencias entre decreto-ley y decreto legislativo.'],
  ),
  'grupo-ii-tema-02': m(
    'Un acto administrativo se estudia con la regla C-E-E-M-N-V: concepto, elementos, eficacia, motivación, notificación y validez.',
    ['Motivación y notificación son preguntas muy frecuentes.', 'Nulidad de pleno derecho y anulabilidad nunca se responden igual.', 'La eficacia puede quedar demorada o condicionada.'],
    ['No confundir invalidez con ineficacia.', 'Un defecto formal no siempre arrastra nulidad de pleno derecho.'],
    ['Repasa artículos 47 y 48 de la Ley 39/2015 como pareja inseparable.', 'Cuando veas un supuesto, pregunta: existe, es válido, es eficaz y está bien notificado.'],
  ),
  'grupo-ii-tema-03': m(
    'El procedimiento va en fila: inicia, ordena, instruye, termina y ejecuta.',
    ['Ley 39/2015: artículo 21 obligación de resolver; artículo 24 silencio.', 'Instrucción = pruebas, informes y audiencia.', 'Finalización puede ser normal o anormal.'],
    ['Silencio administrativo no equivale siempre a resolución expresa.', 'Trámite de audiencia e información pública no son lo mismo.'],
    ['Recita las cinco fases sin saltos.', 'Pon junto en una tarjeta los artículos 21, 24, 53 y 68.'],
  ),
  'grupo-ii-tema-04': m(
    'Regla de bolsillo: alzada sube, reposición se queda, revisión extraordinaria rompe la firmeza por causas tasadas.',
    ['Alzada: actos que no ponen fin a la vía administrativa.', 'Reposición: potestativa frente a actos que ponen fin a la vía administrativa.', 'Extraordinario de revisión: actos firmes y causas excepcionales.', 'Contencioso: ya estamos ante juez.'],
    ['Revocación y rectificación no son recursos.', 'No mezclar plazo de alzada con plazo de reposición.'],
    ['Haz una tabla con órgano, plazo y acto recurrible.', 'Si te preguntan “acto firme”, piensa enseguida en revisión extraordinaria y causas tasadas.'],
  ),
  'grupo-ii-tema-05': m(
    'Competencia se mueve con cinco palabras: delegación, avocación, encomienda, suplencia y delegación de firma.',
    ['La competencia es irrenunciable.', 'Órganos colegiados: convocatoria, orden del día, quórum, deliberación, votación y acta.', 'Ley 40/2015: artículos 8 a 13 y 15 a 18 como anclas clásicas.'],
    ['Delegación no es encomienda: una afecta al ejercicio de la competencia; la otra a actividades materiales o técnicas.', 'Suplencia no altera la titularidad de la competencia.'],
    ['Memoriza el bloque 8-13 y 15-18 de la Ley 40/2015.', 'Cuando leas un caso, distingue quién es titular y quién actúa realmente.'],
  ),
  'grupo-ii-tema-06': m(
    'Responsabilidad patrimonial pide cuatro síes: daño efectivo, antijurídico, individualizado y nexo causal.',
    ['Ley 40/2015: artículos 32 a 37.', 'La lesión debe ser evaluable económicamente e individualizada.', 'La fuerza mayor y el deber jurídico de soportar excluyen indemnización.'],
    ['Responsabilidad patrimonial no es responsabilidad disciplinaria ni penal.', 'No todo funcionamiento anormal genera derecho a indemnización si falta nexo causal.'],
    ['Repite la fórmula “daño efectivo + antijurídico + causal + evaluable”.', 'Practica un mini caso diciendo si indemnizarías o no y por qué.'],
  ),
  'grupo-ii-tema-07': m(
    'Contrato público en seis pasos: tipo, expediente, pliegos, adjudicación, ejecución y extinción.',
    ['Los pliegos son la ley del contrato.', 'LCSP: vigila siempre órgano de contratación, solvencia, criterios y modificación.', 'Recurso especial en materia de contratación es una pregunta muy típica.'],
    ['No confundir contrato menor con procedimiento abierto simplificado.', 'Modificación no puede encubrir un contrato nuevo.'],
    ['Haz una tabla de tipos contractuales y su objeto.', 'Repasa quién aprueba gasto, quién adjudica y cómo se formaliza.'],
  ),
  'grupo-ii-tema-08': m(
    'Sancionar exige la brújula L-T-C-P: legalidad, tipicidad, culpabilidad y proporcionalidad.',
    ['Debe existir procedimiento, prueba y motivación.', 'Las medidas provisionales no son sanción.', 'En ámbito local interesa quién es competente y qué ordenanza tipifica.'],
    ['No confundir restauración de la legalidad con sanción.', 'Presunción de inocencia implica carga probatoria para la Administración.'],
    ['Repite L-T-C-P antes de estudiar cualquier infracción.', 'Haz un caso breve diferenciando infracción, sanción y medida provisional.'],
  ),
  'grupo-ii-tema-09': m(
    'Bien local: o es dominio público, o comunal, o patrimonial; tres cajones y no más.',
    ['Dominio público: inalienable, inembargable e imprescriptible.', 'Patrimoniales: pueden enajenarse con procedimiento.', 'La utilización del dominio público exige título habilitante.'],
    ['Comunal no es patrimonial: su aprovechamiento corresponde a los vecinos.', 'Autorización y concesión demanial no son lo mismo.'],
    ['Di de memoria las notas del dominio público.', 'Pon un ejemplo de uso común, especial y privativo.'],
  ),
  'grupo-ii-tema-10': m(
    'Actividad administrativa en cuatro verbos: limitar, fomentar, prestar y producir.',
    ['Policía: limita actividades.', 'Fomento: incentiva.', 'Servicio público: presta una necesidad colectiva.', 'Iniciativa económica pública: la Administración actúa en el mercado con justificación legal.'],
    ['Servicio público no equivale siempre a gestión directa.', 'Remunicipalizar no es simplemente cambiar de empresa: exige expediente y justificación.'],
    ['Relaciona cada modalidad con un ejemplo municipal.', 'Si sale un supuesto, pregunta si la Administración limita, ayuda o presta.'],
  ),
  'grupo-ii-tema-11': m(
    'Órgano colegiado bien hecho = convocatoria + orden del día + quórum + votación + acta.',
    ['Constitución válida del órgano y mayorías son foco clásico.', 'Las sesiones pueden ser ordinarias o extraordinarias.', 'El acta documenta la voluntad colegiada.'],
    ['No todo asunto puede tratarse fuera del orden del día.', 'Presencia, asistencia y voto no siempre se resuelven igual en todos los órganos.'],
    ['Escribe las cinco palabras clave en una línea y recítalas.', 'Haz un cuadro de quórum de constitución y reglas de votación.'],
  ),
  'grupo-ii-tema-12': m(
    'Ordenanza regula, reglamento organiza y bando comunica o recuerda.',
    ['Ordenanzas y reglamentos locales exigen procedimiento de aprobación y publicación.', 'Las ordenanzas fiscales tienen especialidad propia.', 'El bando nace de la Alcaldía.'],
    ['El bando no sustituye una ordenanza cuando hace falta norma reglamentaria.', 'Reglamento orgánico y ordenanza no cumplen la misma función.'],
    ['Haz tres columnas: ordenanza, reglamento y bando.', 'Recuerda siempre aprobación inicial, información pública y aprobación definitiva.'],
  ),
  'grupo-iii-tema-01': m(
    'Empleado público: entra, trabaja, progresa y se mueve con mérito y capacidad.',
    ['TREBEP: clases de empleados públicos.', 'Selección, provisión, carrera y promoción interna son bloques distintos.', 'Derechos y deberes suelen ir muy ligados a incompatibilidades y código ético.'],
    ['Acceso no es provisión.', 'Funcionario de carrera, interino, laboral y eventual no tienen el mismo régimen.'],
    ['Repite las clases de empleados públicos de memoria.', 'Haz dos columnas: cómo se accede y cómo se provee un puesto.'],
  ),
  'grupo-iii-tema-02': m(
    'Para ser funcionario no basta aprobar: hay que nombrar y tomar posesión.',
    ['Adquisición de la condición: superación del proceso, nombramiento y toma de posesión.', 'Pérdida de la condición funcionarial tiene causas tasadas.', 'Situaciones administrativas afectan a reserva de puesto, retribuciones y cómputo.'],
    ['Perder un puesto no es perder la condición de funcionario.', 'Excedencia, servicios especiales y servicio activo no producen los mismos efectos.'],
    ['Haz un esquema alta-baja-situaciones.', 'Intenta explicar cuándo hay reserva de puesto y cuándo no.'],
  ),
  'grupo-iii-tema-03': m(
    'Personal laboral: contrato laboral dentro de una casa pública.',
    ['Se rige por legislación laboral y por principios públicos de acceso.', 'No debe ocupar funciones reservadas a funcionarios cuando la ley lo prohíbe.', 'También tiene deberes públicos e incompatibilidades.'],
    ['Laboral fijo no es funcionario.', 'Convenio colectivo y TREBEP conviven, pero no sustituyen el uno al otro.'],
    ['Repasa diferencias clave entre personal laboral y funcionario.', 'Pon un ejemplo de derecho laboral y otro de límite derivado del empleo público.'],
  ),
  'grupo-iii-tema-04': m(
    'Tridente del tema: sindicación, huelga e incompatibilidades.',
    ['Libertad sindical: derecho fundamental.', 'Huelga: posible, pero con límites por servicios esenciales.', 'Compatibilidad: regla de autorización y ausencia de conflicto.'],
    ['Actividad sindical no equivale a derecho ilimitado de ausencia.', 'Compatibilidad no se presume: suele requerir análisis y autorización.'],
    ['Une cada bloque con su palabra: libertad, límite y autorización.', 'Haz una lista de prohibiciones o cautelas típicas en incompatibilidades.'],
  ),
  'grupo-iii-tema-05': m(
    'Seguridad Social se memoriza con C-E-A: campo de aplicación, estructura y acción protectora.',
    ['Diferencia régimen general, altas, bajas, cotización y prestaciones.', 'Contingencias comunes y profesionales cambian causas y protección.', 'Acción protectora = asistencia sanitaria, incapacidad, jubilación, desempleo y más.'],
    ['Contributivo y no contributivo no son lo mismo.', 'Accidente de trabajo y enfermedad común tienen efectos distintos.'],
    ['Haz una tabla de contingencias y prestaciones.', 'Repite qué elementos miras siempre: afiliación, alta, cotización y prestación.'],
  ),
  'grupo-iv-tema-01': m(
    'Tributo local en tres familias: impuestos, tasas y contribuciones especiales.',
    ['Impuestos locales clásicos: IBI, IAE, IVTM, ICIO e IIVTNU.', 'Tasa exige servicio, actividad o utilización privativa/aprovechamiento especial.', 'La ordenanza fiscal concreta la aplicación del tributo.'],
    ['Impuesto no exige contraprestación directa; tasa sí tiene un vínculo especial.', 'Potestad tributaria originaria no es lo mismo que potestad reglamentaria tributaria local.'],
    ['Recita los cinco impuestos locales principales.', 'Haz una ficha con aprobación e impugnación de ordenanzas fiscales.'],
  ),
  'grupo-iv-tema-02': m(
    'Presupuesto: aprueba, limita y ordena. Si no hay crédito, hay problema.',
    ['Especialidad, anualidad, unidad y estabilidad son principios recurrentes.', 'Crédito extraordinario crea crédito; suplemento lo aumenta.', 'Gastos plurianuales y modificaciones suelen compararse en examen.'],
    ['Crédito presupuestario no es tesorería disponible.', 'Transferencia de crédito, generación e incorporación no son la misma modificación.'],
    ['Haz una tabla de modificaciones presupuestarias.', 'Recuerda qué órgano aprueba cada modificación relevante.'],
  ),
  'grupo-iv-tema-03': m(
    'Fases del gasto con la cadena RC-A-D-O-P: retención, autorización, disposición, obligación y pago.',
    ['A autoriza; D compromete; O reconoce la obligación; P ordena o ejecuta el pago según contexto estudiado.', 'Hay documentos contables asociados a cada fase.', 'Compromisos futuros y pagos a justificar merecen repaso separado.'],
    ['Autorización no es disposición.', 'Ordenación del pago no es pago material.'],
    ['Recita RC-A-D-O-P varias veces hasta automatizarlo.', 'Haz un mini supuesto de factura desde expediente hasta pago.'],
  ),
  'grupo-iv-tema-04': m(
    'Control del gasto en tres miradas: interventora, financiera y externa.',
    ['Función interventora: fiscalización previa y reparos.', 'Control financiero: funcionamiento económico y regularidad.', 'Control externo: Tribunal de Cuentas y órganos autonómicos equivalentes.'],
    ['Reparo no es mera observación informal.', 'Control financiero no sustituye la función interventora.'],
    ['Haz un esquema con quién controla, cuándo y con qué efecto.', 'Repasa qué ocurre si el órgano gestor discrepa del reparo.'],
  ),
  'grupo-iv-tema-05': m(
    'Urbanismo con cinco palabras: suelo, competencia, licencia, restauración y sanción.',
    ['Clasificación del suelo y calificación urbanística deben separarse.', 'La licencia urbanística suele analizarse como acto reglado.', 'Protección de la legalidad y sanción son dos carriles distintos.'],
    ['Legalizar no es siempre posible.', 'Restaurar la legalidad urbanística no equivale automáticamente a sancionar.'],
    ['Pon un ejemplo de infracción y distingue medida restauradora y sancionadora.', 'Haz una tabla con tipos de suelo y potestades municipales.'],
  ),
  'grupo-v-tema-01': m(
    'Bloque de igualdad con tres ejes: igualdad real, protección frente a violencia y no discriminación por identidad u orientación.',
    ['LO 3/2007: igualdad efectiva.', 'LO 1/2004: violencia de género.', 'Ley 4/2023: derechos de las personas trans y LGTBI.'],
    ['Igualdad formal y real no son lo mismo.', 'Violencia de género tiene régimen específico; no toda violencia intrafamiliar entra en la misma categoría jurídica.'],
    ['Recita las tres normas del tema.', 'Piensa cómo se aplica cada una en atención municipal y trato administrativo.'],
  ),
  'grupo-v-tema-02': m(
    'Transparencia va en dos carriles: publicar sin que te lo pidan y responder cuando te lo piden.',
    ['Publicidad activa: información que debe estar publicada.', 'Derecho de acceso: solicitud, tramitación y resolución.', 'Límites: protección de datos, seguridad, intereses económicos y otros.'],
    ['Publicidad activa no es derecho de acceso.', 'Denegar por límite exige motivar y ponderar, no basta citar la ley.'],
    ['Haz dos columnas: qué se publica y qué se solicita.', 'Practica una respuesta corta sobre diferencia entre acceso y publicidad activa.'],
  ),
  'grupo-v-tema-03': m(
    'Atención al público se resume en A-I-T: atender, informar y tramitar correctamente.',
    ['Información general y particular no son idénticas.', 'Queja, reclamación, sugerencia, petición y recurso deben separarse.', 'La accesibilidad y ajustes para discapacidad son parte del tema, no un añadido.'],
    ['Informar no es resolver un expediente.', 'Una queja no suspende plazos ni sustituye un recurso.'],
    ['Haz una tabla con cada figura y su finalidad.', 'Ensaya cómo explicarías a una persona dónde presentar una petición y dónde un recurso.'],
  ),
  'grupo-v-tema-04': m(
    'Registro bien hecho: entra, identifica, fecha, digitaliza y entrega recibo.',
    ['Ley 39/2015: artículos 14 y 16 como anclas útiles.', 'Fecha y hora de registro son decisivas para plazos.', 'Copia auténtica, asistencia y representación deben quedar muy claras.'],
    ['Asistencia en registro no equivale siempre a representación.', 'Copia auténtica no es simple fotocopia o escaneo informal.'],
    ['Recita artículo 16 con palabras clave: registro, recibo, digitalización y remisión.', 'Haz un caso práctico de presentación presencial de una solicitud dirigida a otro órgano.'],
  ),
  'grupo-v-tema-05': m(
    'Prevención en oficina: detectar, evaluar, planificar y formar.',
    ['Ley 31/1995: evaluación de riesgos y planificación preventiva.', 'En puesto administrativo destacan riesgos ergonómicos, visuales y psicosociales.', 'La formación e información son medidas preventivas básicas.'],
    ['Vigilancia de la salud no es control indiscriminado.', 'Accidente, riesgo y daño no son conceptos idénticos.'],
    ['Haz una lista de riesgos reales de un puesto administrativo.', 'Piensa una medida preventiva concreta para pantalla, postura y carga mental.'],
  ),
  'grupo-v-tema-06': m(
    'Protección de datos se memoriza con P-D-R-R-E-D: principios, derechos, responsable, encargado, delegado.',
    ['RGPD + LO 3/2018 son la pareja básica.', 'Principios: licitud, lealtad, transparencia, minimización, exactitud, limitación del plazo, integridad y confidencialidad.', 'Derechos del interesado: acceso, rectificación, supresión y compañía.'],
    ['Responsable y encargado no son lo mismo.', 'Delegado de protección de datos asesora y supervisa, pero no asume la responsabilidad del tratamiento.'],
    ['Recita los principios en orden lógico.', 'Haz una tarjeta con derechos ARSULIPO y qué significa cada letra si te ayuda.'],
  ),
  'grupo-v-tema-07': m(
    'Administración electrónica: sede, registro, expediente, firma y notificación.',
    ['Ley 39/2015 y Ley 40/2015 son marco general.', 'RD 203/2021, ENI y ENS completan el funcionamiento electrónico.', 'La sede electrónica es el punto oficial seguro de relación.'],
    ['Portal web y sede electrónica no son sinónimos.', 'Aviso de notificación no sustituye a la notificación.'],
    ['Haz un circuito desde la solicitud electrónica hasta el archivo del expediente.', 'Recuerda siempre ENI = interoperabilidad y ENS = seguridad.'],
  ),
  'grupo-v-tema-08': m(
    'Documento se agrupa en expediente y el expediente termina en archivo.',
    ['Documento administrativo, expediente administrativo y expediente electrónico deben separarse.', 'Índice electrónico = integridad y trazabilidad.', 'El acceso a documentos puede limitarse por datos y otros intereses protegidos.'],
    ['Archivo no es simple almacén de papeles o PDFs.', 'Documento y expediente no son intercambiables en un test.'],
    ['Haz una definición de una línea para documento, expediente y archivo.', 'Repasa límites de acceso junto con transparencia y protección de datos.'],
  ),
  'grupo-v-tema-09': m(
    'Informática básica con la regla H-S-A-S: hardware, software, archivos y seguridad.',
    ['RAM no es disco duro o SSD.', 'Windows 11 y el explorador de archivos son foco práctico.', 'Carpetas, extensiones, permisos y copias de seguridad salen mucho.'],
    ['Guardar en el escritorio no convierte el archivo en documento oficial del expediente.', 'Borrar acceso directo no es borrar necesariamente el archivo real.'],
    ['Explica diferencia entre memoria RAM y almacenamiento.', 'Haz una práctica mental de crear carpetas, mover archivos y comprobar extensiones.'],
  ),
  'grupo-v-tema-10': m(
    'Ofimática útil: Word redacta, Excel calcula y Microsoft 365 comparte con control.',
    ['En Word: estilos, tablas, revisión y formato.', 'En Excel: fórmulas, referencias, ordenar, filtrar y funciones básicas.', 'En entorno colaborativo: versiones, permisos y uso compartido.'],
    ['Documento bonito no equivale a documento correcto.', 'Excel ayuda a trabajar, pero no sustituye al sistema oficial de gestión administrativa.'],
    ['Repasa una lista de atajos o tareas reales en Word y Excel.', 'Haz un mini ejercicio: plantilla en Word y cuadro de datos en Excel.'],
  ),
  'grupo-v-tema-11': m(
    'Correo e Internet: enviar bien, navegar seguro y verificar fuente.',
    ['Correo: asunto, destinatarios, CC/CCO, adjuntos y firma.', 'Internet: navegador, URL, dominios, HTTPS y servicios básicos.', 'Las fuentes oficiales del estudio suelen ser BOE, BOCYL, BOP y sede.'],
    ['Correo electrónico ordinario no es notificación administrativa por sí solo.', 'Copiar a quien no debe puede generar brecha de datos.'],
    ['Antes de abrir un enlace, revisa remitente y dominio.', 'Haz una rutina fija: asunto claro, adjunto correcto y destinatarios revisados.'],
  ),
};

export const getMemoryAid = (slug: string): MemoryAid | undefined => memoryAidsBySlug[slug];
