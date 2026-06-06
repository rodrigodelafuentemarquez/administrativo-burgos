export type StudyAid = {
  focus: string;
  highlight: string;
  points: string[];
};

export const studyAidsBySlug: Record<string, StudyAid> = {
  'grupo-i-tema-01': {
    focus: 'Entender la Constitucion como norma suprema y ubicar derechos, deberes, garantias y suspension.',
    highlight: 'norma suprema, derechos fundamentales, garantias y suspension',
    points: ['Distinguir valores superiores, principios constitucionales y derechos fundamentales.', 'Separar garantia ordinaria, recurso de amparo y suspension de derechos.', 'Recordar que la Constitucion vincula a todos los poderes publicos.'],
  },
  'grupo-i-tema-02': {
    focus: 'Relacionar Corona, Cortes, Gobierno y Poder Judicial dentro del sistema constitucional.',
    highlight: 'Corona, Cortes, Gobierno y Poder Judicial',
    points: ['La Corona arbitra y modera, pero sus actos requieren refrendo.', 'Las Cortes ejercen potestad legislativa, presupuestaria y control.', 'El Gobierno dirige la politica interior/exterior y la Administracion.'],
  },
  'grupo-i-tema-03': {
    focus: 'Dominar la organizacion territorial y la distribucion de competencias Estado-comunidades autonomas.',
    highlight: 'Estado, comunidades autonomas y competencias',
    points: ['Diferenciar municipio, provincia y comunidad autonoma.', 'Entender que el Estatuto es norma institucional basica.', 'Separar competencias exclusivas, compartidas y ejecutivas.'],
  },
  'grupo-i-tema-04': {
    focus: 'Situar Gobierno y Administracion del Estado dentro del ordenamiento administrativo.',
    highlight: 'Gobierno, Administracion y principios de actuacion',
    points: ['El Gobierno dirige; la Administracion sirve con objetividad los intereses generales.', 'Recordar eficacia, jerarquia, descentralizacion, desconcentracion y coordinacion.', 'Separar direccion politica de actividad administrativa.'],
  },
  'grupo-i-tema-05': {
    focus: 'Comprender regimen local, autonomia municipal y hacienda local como base de los servicios.',
    highlight: 'autonomia local y suficiencia financiera',
    points: ['Distinguir municipio, provincia, isla y otras entidades locales.', 'La autonomia local exige competencias y recursos.', 'La Ley de Haciendas Locales sostiene ingresos, tributos y presupuesto.'],
  },
  'grupo-i-tema-06': {
    focus: 'Manejar municipio, termino municipal y padron como elementos estructurales.',
    highlight: 'municipio, termino, poblacion y padron',
    points: ['El municipio tiene territorio, poblacion y organizacion.', 'El padron acredita residencia y domicilio habitual.', 'El empadronamiento conecta con servicios, derechos y datos personales.'],
  },
  'grupo-i-tema-07': {
    focus: 'Conocer la organizacion del Ayuntamiento de Burgos y sus organos clave.',
    highlight: 'Pleno, Alcaldia, Junta de Gobierno, Secretaria e Intervencion',
    points: ['Separar organos politicos de organos directivos y tecnicos.', 'En gran poblacion, la Junta de Gobierno tiene peso organizativo relevante.', 'Secretaria, Intervencion y Gestion Tributaria son piezas esenciales del funcionamiento municipal.'],
  },
  'grupo-i-tema-08': {
    focus: 'Identificar instituciones de la Union Europea y sus funciones principales.',
    highlight: 'Consejo Europeo, Consejo, Parlamento, Comision y TJUE',
    points: ['No confundir Consejo Europeo y Consejo de la Union Europea.', 'La Comision impulsa y vela por el cumplimiento del Derecho de la Union.', 'El TJUE garantiza interpretacion y aplicacion uniforme.'],
  },
  'grupo-i-tema-09': {
    focus: 'Ubicar el Estatuto de Castilla y Leon, sus competencias y reforma.',
    highlight: 'Estatuto, competencias y reforma',
    points: ['El Estatuto es la norma institucional basica de la Comunidad.', 'Diferenciar instituciones autonomicas y competencias materiales.', 'La reforma estatutaria debe respetar la Constitucion.'],
  },

  'grupo-ii-tema-01': {
    focus: 'Ordenar fuentes del Derecho Administrativo y jerarquia normativa.',
    highlight: 'jerarquia normativa y potestad reglamentaria',
    points: ['La Constitucion esta por encima de leyes y reglamentos.', 'El reglamento no puede contradecir la ley.', 'Principios generales y jurisprudencia ayudan a interpretar y controlar.'],
  },
  'grupo-ii-tema-02': {
    focus: 'Diferenciar acto administrativo, reglamento, eficacia, validez, motivacion y notificacion.',
    highlight: 'acto, motivacion, notificacion, nulidad y anulabilidad',
    points: ['El acto decide un caso; el reglamento crea norma general.', 'La notificacion activa efectos y plazos frente al interesado.', 'Nulidad y anulabilidad no tienen la misma gravedad.'],
  },
  'grupo-ii-tema-03': {
    focus: 'Dominar fases del procedimiento y derechos de la persona interesada.',
    highlight: 'iniciacion, ordenacion, instruccion, finalizacion y ejecucion',
    points: ['El procedimiento es garantia, no simple formalidad.', 'La instruccion prepara prueba, informes y audiencia.', 'La ejecucion exige acto valido, eficaz y ejecutable.'],
  },
  'grupo-ii-tema-04': {
    focus: 'Elegir correctamente entre revision, recursos y contencioso-administrativo.',
    highlight: 'alzada, reposicion, revision extraordinaria y contencioso',
    points: ['Alzada: actos que no ponen fin a la via administrativa.', 'Reposicion: actos que ponen fin a la via administrativa.', 'Revision extraordinaria: actos firmes y causas tasadas.'],
  },
  'grupo-ii-tema-05': {
    focus: 'Entender organos administrativos y tecnicas de atribucion de competencias.',
    highlight: 'competencia, delegacion, avocacion y organos colegiados',
    points: ['La competencia es irrenunciable, aunque se pueda delegar en ciertos casos.', 'Delegacion, avocacion y suplencia no son lo mismo.', 'Los organos colegiados requieren convocatoria, quorum, votacion y acta.'],
  },
  'grupo-ii-tema-06': {
    focus: 'Aplicar los presupuestos de responsabilidad patrimonial.',
    highlight: 'dano efectivo, antijuridico, causal e indemnizable',
    points: ['No todo dano genera responsabilidad.', 'Debe existir relacion causal con el funcionamiento del servicio.', 'La fuerza mayor y el deber juridico de soportar excluyen indemnizacion.'],
  },
  'grupo-ii-tema-07': {
    focus: 'Controlar tipos contractuales, expediente, adjudicacion y ejecucion.',
    highlight: 'expediente, pliegos, adjudicacion, modificacion y recurso',
    points: ['Preparar bien el expediente evita problemas de ejecucion.', 'Los pliegos son la ley del contrato.', 'Las modificaciones estan limitadas y no pueden encubrir nueva contratacion.'],
  },
  'grupo-ii-tema-08': {
    focus: 'Dominar principios sancionadores y garantias del procedimiento.',
    highlight: 'legalidad, tipicidad, culpabilidad y proporcionalidad',
    points: ['La Administracion debe probar los hechos.', 'No hay sancion sin infraccion tipificada.', 'La sancion debe graduarse y motivarse.'],
  },
  'grupo-ii-tema-09': {
    focus: 'Distinguir dominio publico, comunales y patrimoniales.',
    highlight: 'inalienable, inembargable e imprescriptible',
    points: ['Los bienes demaniales estan afectados a uso o servicio publico.', 'Los patrimoniales pueden enajenarse o cederse con procedimiento.', 'La ocupacion del dominio publico exige titulo habilitante.'],
  },
  'grupo-ii-tema-10': {
    focus: 'Separar actividad de policia, fomento, servicio publico y actividad economica.',
    highlight: 'policia, fomento, servicio publico y gestion',
    points: ['Un servicio puede gestionarse directa o indirectamente.', 'La remunicipalizacion exige estudio juridico y economico.', 'La Administracion conserva control aunque contrate el servicio.'],
  },
  'grupo-ii-tema-11': {
    focus: 'Manejar funcionamiento de organos colegiados locales.',
    highlight: 'convocatoria, orden del dia, quorum, votacion y acta',
    points: ['Sin convocatoria correcta puede haber problemas de validez.', 'El orden del dia delimita el debate y acuerdo.', 'El acta documenta formalmente la voluntad del organo.'],
  },
  'grupo-ii-tema-12': {
    focus: 'Distinguir ordenanzas, reglamentos y bandos.',
    highlight: 'ordenanza, reglamento, publicacion y bando',
    points: ['Las ordenanzas requieren procedimiento plenario y publicacion.', 'El bando no sustituye a la ordenanza.', 'Las ordenanzas fiscales tienen reglas propias.'],
  },

  'grupo-iii-tema-01': {
    focus: 'Ordenar clases de empleados publicos, provision, derechos, deberes y carrera.',
    highlight: 'funcionario, laboral, eventual, provision y carrera',
    points: ['Acceso y provision no son lo mismo.', 'El personal eventual es confianza/asesoramiento especial.', 'Carrera y promocion se basan en merito y capacidad.'],
  },
  'grupo-iii-tema-02': {
    focus: 'Separar adquisicion, perdida y situaciones administrativas.',
    highlight: 'nombramiento, toma de posesion, perdida y situaciones',
    points: ['Aprobar no basta: hace falta nombramiento y toma de posesion.', 'Perder puesto no equivale a perder condicion funcionarial.', 'Cada situacion tiene efectos en retribuciones, reserva y computo.'],
  },
  'grupo-iii-tema-03': {
    focus: 'Entender el personal laboral dentro de la Administracion.',
    highlight: 'contrato laboral con principios publicos',
    points: ['El personal laboral no ejerce funciones reservadas a funcionarios.', 'La seleccion respeta igualdad, merito, capacidad y publicidad.', 'Tambien esta sometido a incompatibilidades y deberes publicos.'],
  },
  'grupo-iii-tema-04': {
    focus: 'Relacionar sindicacion, huelga e incompatibilidades.',
    highlight: 'libertad sindical, servicios minimos e imparcialidad',
    points: ['La huelga puede limitarse por servicios esenciales.', 'La actividad sindical no puede generar represalias.', 'La compatibilidad requiere autorizacion previa.'],
  },
  'grupo-iii-tema-05': {
    focus: 'Ubicar campo de aplicacion, estructura y accion protectora de Seguridad Social.',
    highlight: 'regimen general, cotizacion, contingencias y prestaciones',
    points: ['Contributivo y no contributivo no son lo mismo.', 'Alta, baja y cotizacion afectan a prestaciones.', 'Contingencia comun/profesional cambia gestion y efectos.'],
  },

  'grupo-iv-tema-01': {
    focus: 'Distinguir impuestos, tasas, contribuciones y ordenanzas fiscales.',
    highlight: 'IBI, IAE, IVTM, ICIO, IIVTNU, tasas y contribuciones',
    points: ['Impuesto no exige contraprestacion directa.', 'Tasa exige servicio/actividad o uso del dominio publico.', 'La ordenanza fiscal concreta la aplicacion dentro de la ley.'],
  },
  'grupo-iv-tema-02': {
    focus: 'Comprender presupuesto, creditos y modificaciones presupuestarias.',
    highlight: 'credito, especialidad, estabilidad y modificaciones',
    points: ['Sin credito adecuado no debe tramitarse gasto.', 'Credito extraordinario crea credito; suplemento aumenta credito insuficiente.', 'La financiacion y competencia deben acreditarse.'],
  },
  'grupo-iv-tema-03': {
    focus: 'Dominar fases de ejecucion del gasto.',
    highlight: 'RC, A, D, O, P y pago material',
    points: ['Autorizacion reserva decision de gasto; disposicion compromete frente a tercero.', 'Obligacion exige prestacion realizada y conformada.', 'Ordenacion de pago no es pago material.'],
  },
  'grupo-iv-tema-04': {
    focus: 'Separar funcion interventora, control financiero y control externo.',
    highlight: 'reparo, fiscalizacion, control financiero y cuenta general',
    points: ['El reparo puede suspender la tramitacion.', 'El control financiero mira gestion, eficacia y eficiencia.', 'Tribunal de Cuentas y Consejo de Cuentas ejercen control externo.'],
  },
  'grupo-iv-tema-05': {
    focus: 'Distinguir clasificacion, calificacion, licencia, restauracion y sancion.',
    highlight: 'suelo, licencia, legalizacion, restauracion y sancion',
    points: ['Clasificacion dice que tipo de suelo es; calificacion dice que uso permite.', 'La licencia es acto reglado.', 'Restaurar legalidad y sancionar son planos distintos.'],
  },

  'grupo-v-tema-01': {
    focus: 'Conectar igualdad, violencia de genero y derechos LGTBI con actuacion municipal.',
    highlight: 'igualdad real, no discriminacion y proteccion integral',
    points: ['La igualdad es transversal a todas las areas municipales.', 'La violencia de genero exige confidencialidad y coordinacion.', 'La atencion administrativa debe evitar discriminacion.'],
  },
  'grupo-v-tema-02': {
    focus: 'Distinguir publicidad activa y derecho de acceso.',
    highlight: 'publicidad activa, informacion publica, limites y acceso',
    points: ['Publicidad activa se publica sin solicitud.', 'Derecho de acceso requiere solicitud y resolucion.', 'Los limites deben motivarse y ponderarse.'],
  },
  'grupo-v-tema-03': {
    focus: 'Atender correctamente, informar y tramitar quejas, sugerencias y peticiones.',
    highlight: 'atencion, informacion general/particular, quejas y reclamaciones',
    points: ['Informar no es resolver un expediente.', 'La atencion a discapacidad exige ajustes y accesibilidad.', 'Queja, sugerencia, recurso y denuncia no son lo mismo.'],
  },
  'grupo-v-tema-04': {
    focus: 'Manejar registro, asistencia, digitalizacion, copias y apoderamientos.',
    highlight: 'fecha de registro, recibo, digitalizacion y representacion',
    points: ['La fecha/hora de registro afecta a plazos.', 'La copia autentica no es una fotocopia simple.', 'Asistencia electronica no equivale siempre a representacion.'],
  },
  'grupo-v-tema-05': {
    focus: 'Aplicar prevencion de riesgos al puesto administrativo.',
    highlight: 'evaluacion, planificacion, formacion y vigilancia de la salud',
    points: ['La prevencion es anticipacion, no reaccion.', 'La oficina tiene riesgos ergonomicos, visuales y psicosociales.', 'Los datos de salud son especialmente sensibles.'],
  },
  'grupo-v-tema-06': {
    focus: 'Dominar principios, derechos y roles en proteccion de datos.',
    highlight: 'licitud, minimizacion, derechos, responsable y encargado',
    points: ['No todo dato puede tratarse por comodidad administrativa.', 'Responsable y encargado no son lo mismo.', 'El DPO asesora y supervisa, no sustituye al responsable.'],
  },
  'grupo-v-tema-07': {
    focus: 'Entender administracion electronica y funcionamiento electronico del sector publico.',
    highlight: 'sede, registro, expediente, firma, notificacion, ENI y ENS',
    points: ['La sede electronica es punto oficial de relacion.', 'El expediente electronico debe conservar trazabilidad.', 'ENI y ENS garantizan interoperabilidad y seguridad.'],
  },
  'grupo-v-tema-08': {
    focus: 'Relacionar documento, expediente, archivo y acceso.',
    highlight: 'documento, indice electronico, archivo y acceso limitado',
    points: ['El expediente es conjunto ordenado de documentos.', 'El indice electronico da integridad y trazabilidad.', 'El acceso puede limitarse por datos, seguridad o intereses protegidos.'],
  },
  'grupo-v-tema-09': {
    focus: 'Manejar conceptos basicos de ordenador, Windows, archivos y seguridad.',
    highlight: 'hardware, software, Windows 11, archivos y seguridad',
    points: ['RAM y almacenamiento no son lo mismo.', 'El escritorio local no es archivo oficial.', 'La seguridad depende tambien del comportamiento del usuario.'],
  },
  'grupo-v-tema-10': {
    focus: 'Usar Word, Excel y Microsoft 365 con criterio administrativo.',
    highlight: 'estilos, formulas, permisos, versiones y expediente',
    points: ['Word requiere estilos y revision antes de enviar.', 'Excel es auxiliar: los datos oficiales deben estar en sistemas corporativos.', 'Compartir exige permisos minimos y proteccion de datos.'],
  },
  'grupo-v-tema-11': {
    focus: 'Entender correo electronico, Internet y servicios con seguridad.',
    highlight: 'correo, destinatarios, adjuntos, URL, HTTPS y phishing',
    points: ['Correo ordinario no equivale siempre a notificacion administrativa.', 'Revisar destinatarios y adjuntos evita brechas.', 'Usar fuentes oficiales: BOE, BOCYL, BOP y sede municipal.'],
  },
};

export function getStudyAid(slug: string) {
  return studyAidsBySlug[slug];
}
