export type StudyAid = {
  focus: string;
  highlight: string;
  points: string[];
};

export const studyAidsBySlug: Record<string, StudyAid> = {
  'grupo-i-tema-01': {
    focus: 'Entender la Constitución como norma suprema y ubicar derechos, deberes, garantías y suspensión.',
    highlight: 'norma suprema, derechos fundamentales, garantías y suspensión',
    points: ['Distinguir valores superiores, principios constitucionales y derechos fundamentales.', 'Separar garantía ordinaria, recurso de amparo y suspensión de derechos.', 'Recordar que la Constitución vincula a todos los poderes públicos.'],
  },
  'grupo-i-tema-02': {
    focus: 'Relacionar Corona, Cortes, Gobierno y Poder Judicial dentro del sistema constitucional.',
    highlight: 'Corona, Cortes, Gobierno y Poder Judicial',
    points: ['La Corona arbitra y modera, pero sus actos requieren refrendo.', 'Las Cortes ejercen potestad legislativa, presupuestaria y control.', 'El Gobierno dirige la política interior/exterior y la Administración.'],
  },
  'grupo-i-tema-03': {
    focus: 'Dominar la organización territorial y la distribución de competencias Estado-comunidades autonomas.',
    highlight: 'Estado, comunidades autonomas y competencias',
    points: ['Diferenciar municipio, provincia y comunidad autonoma.', 'Entender que el Estatuto es norma institucional básica.', 'Separar competencias exclusivas, compartidas y ejecutivas.'],
  },
  'grupo-i-tema-04': {
    focus: 'Situar Gobierno y Administración del Estado dentro del ordenamiento administrativo.',
    highlight: 'Gobierno, Administración y principios de actuación',
    points: ['El Gobierno dirige; la Administración sirve con objetividad los intereses generales.', 'Recordar eficacia, jerarquia, descentralización, desconcentración y coordinación.', 'Separar dirección política de actividad administrativa.'],
  },
  'grupo-i-tema-05': {
    focus: 'Comprender régimen local, autonomía municipal y hacienda local como base de los servicios.',
    highlight: 'autonomía local y suficiencia financiera',
    points: ['Distinguir municipio, provincia, isla y otras entidades locales.', 'La autonomía local exige competencias y recursos.', 'La Ley de Haciendas Locales sostiene ingresos, tributos y presupuesto.'],
  },
  'grupo-i-tema-06': {
    focus: 'Manejar municipio, termino municipal y padron como elementos estructurales.',
    highlight: 'municipio, termino, población y padron',
    points: ['El municipio tiene territorio, población y organización.', 'El padron acredita residencia y domicilio habitual.', 'El empadronamiento conecta con servicios, derechos y datos personales.'],
  },
  'grupo-i-tema-07': {
    focus: 'Conocer la organización del Ayuntamiento de Burgos y sus órganos clave.',
    highlight: 'Pleno, Alcaldia, Junta de Gobierno, Secretaria e Intervención',
    points: ['Separar órganos políticos de órganos directivos y tecnicos.', 'En gran población, la Junta de Gobierno tiene peso organizativo relevante.', 'Secretaria, Intervención y Gestion Tributaria son piezas esenciales del funcionamiento municipal.'],
  },
  'grupo-i-tema-08': {
    focus: 'Identificar instituciones de la Union Europea y sus funciones principales.',
    highlight: 'Consejo Europeo, Consejo, Parlamento, Comisión y TJUE',
    points: ['No confundir Consejo Europeo y Consejo de la Union Europea.', 'La Comisión impulsa y vela por el cumplimiento del Derecho de la Union.', 'El TJUE garantiza interpretación y aplicación uniforme.'],
  },
  'grupo-i-tema-09': {
    focus: 'Ubicar el Estatuto de Castilla y León, sus competencias y reforma.',
    highlight: 'Estatuto, competencias y reforma',
    points: ['El Estatuto es la norma institucional básica de la Comunidad.', 'Diferenciar instituciones autonómicas y competencias materiales.', 'La reforma estatutaria debe respetar la Constitución.'],
  },

  'grupo-ii-tema-01': {
    focus: 'Ordenar fuentes del Derecho Administrativo y jerarquia normativa.',
    highlight: 'jerarquia normativa y potestad reglamentaria',
    points: ['La Constitución esta por encima de leyes y reglamentos.', 'El reglamento no puede contradecir la ley.', 'Principios generales y jurisprudencia ayudan a interpretar y controlar.'],
  },
  'grupo-ii-tema-02': {
    focus: 'Diferenciar acto administrativo, reglamento, eficacia, validez, motivación y notificación.',
    highlight: 'acto, motivación, notificación, nulidad y anulabilidad',
    points: ['El acto decide un caso; el reglamento crea norma general.', 'La notificación activa efectos y plazos frente al interesado.', 'Nulidad y anulabilidad no tienen la misma gravedad.'],
  },
  'grupo-ii-tema-03': {
    focus: 'Dominar fases del procedimiento y derechos de la persona interesada.',
    highlight: 'iniciación, ordenación, instrucción, finalización y ejecución',
    points: ['El procedimiento es garantía, no simple formalidad.', 'La instrucción prepara prueba, informes y audiencia.', 'La ejecución exige acto valido, eficaz y ejecutable.'],
  },
  'grupo-ii-tema-04': {
    focus: 'Elegir correctamente entre revisión, recursos y contencioso-administrativo.',
    highlight: 'alzada, reposición, revisión extraordinaria y contencioso',
    points: ['Alzada: actos que no ponen fin a la via administrativa.', 'Reposición: actos que ponen fin a la via administrativa.', 'Revisión extraordinaria: actos firmes y causas tasadas.'],
  },
  'grupo-ii-tema-05': {
    focus: 'Entender órganos administrativos y técnicas de atribución de competencias.',
    highlight: 'competencia, delegación, avocación y órganos colegiados',
    points: ['La competencia es irrenunciable, aunque se pueda delegar en ciertos casos.', 'Delegación, avocación y suplencia no son lo mismo.', 'Los órganos colegiados requieren convocatoria, quorum, votación y acta.'],
  },
  'grupo-ii-tema-06': {
    focus: 'Aplicar los presupuestos de responsabilidad patrimonial.',
    highlight: 'dano efectivo, antijuridico, causal e indemnizable',
    points: ['No todo dano genera responsabilidad.', 'Debe existir relación causal con el funcionamiento del servicio.', 'La fuerza mayor y el deber jurídico de soportar excluyen indemnización.'],
  },
  'grupo-ii-tema-07': {
    focus: 'Controlar tipos contractuales, expediente, adjudicación y ejecución.',
    highlight: 'expediente, pliegos, adjudicación, modificación y recurso',
    points: ['Preparar bien el expediente evita problemas de ejecución.', 'Los pliegos son la ley del contrato.', 'Las modificaciones estan limitadas y no pueden encubrir nueva contratación.'],
  },
  'grupo-ii-tema-08': {
    focus: 'Dominar principios sancionadores y garantías del procedimiento.',
    highlight: 'legalidad, tipicidad, culpabilidad y proporcionalidad',
    points: ['La Administración debe probar los hechos.', 'No hay sanción sin infracción tipificada.', 'La sanción debe graduarse y motivarse.'],
  },
  'grupo-ii-tema-09': {
    focus: 'Distinguir dominio público, comunales y patrimoniales.',
    highlight: 'inalienable, inembargable e imprescriptible',
    points: ['Los bienes demaniales estan afectados a uso o servicio público.', 'Los patrimoniales pueden enajenarse o cederse con procedimiento.', 'La ocupación del dominio público exige titulo habilitante.'],
  },
  'grupo-ii-tema-10': {
    focus: 'Separar actividad de policia, fomento, servicio público y actividad económica.',
    highlight: 'policia, fomento, servicio público y gestion',
    points: ['Un servicio puede gestionarse directa o indirectamente.', 'La remunicipalización exige estudio jurídico y económico.', 'La Administración conserva control aunque contrate el servicio.'],
  },
  'grupo-ii-tema-11': {
    focus: 'Manejar funcionamiento de órganos colegiados locales.',
    highlight: 'convocatoria, orden del día, quorum, votación y acta',
    points: ['Sin convocatoria correcta puede haber problemas de validez.', 'El orden del día delimita el debate y acuerdo.', 'El acta documenta formalmente la voluntad del órgano.'],
  },
  'grupo-ii-tema-12': {
    focus: 'Distinguir ordenanzas, reglamentos y bandos.',
    highlight: 'ordenanza, reglamento, publicación y bando',
    points: ['Las ordenanzas requieren procedimiento plenario y publicación.', 'El bando no sustituye a la ordenanza.', 'Las ordenanzas fiscales tienen reglas propias.'],
  },

  'grupo-iii-tema-01': {
    focus: 'Ordenar clases de empleados públicos, provisión, derechos, deberes y carrera.',
    highlight: 'funcionario, laboral, eventual, provisión y carrera',
    points: ['Acceso y provisión no son lo mismo.', 'El personal eventual es confianza/asesoramiento especial.', 'Carrera y promoción se basan en merito y capacidad.'],
  },
  'grupo-iii-tema-02': {
    focus: 'Separar adquisición, perdida y situaciones administrativas.',
    highlight: 'nombramiento, toma de posesión, perdida y situaciones',
    points: ['Aprobar no basta: hace falta nombramiento y toma de posesión.', 'Perder puesto no equivale a perder condición funcionarial.', 'Cada situación tiene efectos en retribuciones, reserva y computo.'],
  },
  'grupo-iii-tema-03': {
    focus: 'Entender el personal laboral dentro de la Administración.',
    highlight: 'contrato laboral con principios públicos',
    points: ['El personal laboral no ejerce funciones reservadas a funcionarios.', 'La selección respeta igualdad, merito, capacidad y publicidad.', 'También esta sometido a incompatibilidades y deberes públicos.'],
  },
  'grupo-iii-tema-04': {
    focus: 'Relacionar sindicación, huelga e incompatibilidades.',
    highlight: 'libertad sindical, servicios mínimos e imparcialidad',
    points: ['La huelga puede limitarse por servicios esenciales.', 'La actividad sindical no puede generar represalias.', 'La compatibilidad requiere autorización previa.'],
  },
  'grupo-iii-tema-05': {
    focus: 'Ubicar campo de aplicación, estructura y acción protectora de Seguridad Social.',
    highlight: 'régimen general, cotización, contingencias y prestaciones',
    points: ['Contributivo y no contributivo no son lo mismo.', 'Alta, baja y cotización afectan a prestaciones.', 'Contingencia comun/profesional cambia gestion y efectos.'],
  },

  'grupo-iv-tema-01': {
    focus: 'Distinguir impuestos, tasas, contribuciones y ordenanzas fiscales.',
    highlight: 'IBI, IAE, IVTM, ICIO, IIVTNU, tasas y contribuciones',
    points: ['Impuesto no exige contraprestación directa.', 'Tasa exige servicio/actividad o uso del dominio público.', 'La ordenanza fiscal concreta la aplicación dentro de la ley.'],
  },
  'grupo-iv-tema-02': {
    focus: 'Comprender presupuesto, créditos y modificaciones presupuestarias.',
    highlight: 'crédito, especialidad, estabilidad y modificaciones',
    points: ['Sin crédito adecuado no debe tramitarse gasto.', 'Credito extraordinario crea crédito; suplemento aumenta crédito insuficiente.', 'La financiación y competencia deben acreditarse.'],
  },
  'grupo-iv-tema-03': {
    focus: 'Dominar fases de ejecución del gasto.',
    highlight: 'RC, A, D, O, P y pago material',
    points: ['Autorización reserva decisión de gasto; disposición compromete frente a tercero.', 'Obligación exige prestación realizada y conformada.', 'Ordenación de pago no es pago material.'],
  },
  'grupo-iv-tema-04': {
    focus: 'Separar función interventora, control financiero y control externo.',
    highlight: 'reparo, fiscalización, control financiero y cuenta general',
    points: ['El reparo puede suspender la tramitación.', 'El control financiero mira gestion, eficacia y eficiencia.', 'Tribunal de Cuentas y Consejo de Cuentas ejercen control externo.'],
  },
  'grupo-iv-tema-05': {
    focus: 'Distinguir clasificación, calificación, licencia, restauración y sanción.',
    highlight: 'suelo, licencia, legalización, restauración y sanción',
    points: ['Clasificación dice que tipo de suelo es; calificación dice que uso permite.', 'La licencia es acto reglado.', 'Restaurar legalidad y sancionar son planos distintos.'],
  },

  'grupo-v-tema-01': {
    focus: 'Conectar igualdad, violencia de género y derechos LGTBI con actuación municipal.',
    highlight: 'igualdad real, no discriminación y protección integral',
    points: ['La igualdad es transversal a todas las areas municipales.', 'La violencia de género exige confidencialidad y coordinación.', 'La atención administrativa debe evitar discriminación.'],
  },
  'grupo-v-tema-02': {
    focus: 'Distinguir publicidad activa y derecho de acceso.',
    highlight: 'publicidad activa, información pública, limites y acceso',
    points: ['Publicidad activa se publica sin solicitud.', 'Derecho de acceso requiere solicitud y resolución.', 'Los limites deben motivarse y ponderarse.'],
  },
  'grupo-v-tema-03': {
    focus: 'Atender correctamente, informar y tramitar quejas, sugerencias y peticiones.',
    highlight: 'atención, información general/particular, quejas y reclamaciones',
    points: ['Informar no es resolver un expediente.', 'La atención a discapacidad exige ajustes y accesibilidad.', 'Queja, sugerencia, recurso y denuncia no son lo mismo.'],
  },
  'grupo-v-tema-04': {
    focus: 'Manejar registro, asistencia, digitalización, copias y apoderamientos.',
    highlight: 'fecha de registro, recibo, digitalización y representación',
    points: ['La fecha/hora de registro afecta a plazos.', 'La copia autentica no es una fotocopia simple.', 'Asistencia electrónica no equivale siempre a representación.'],
  },
  'grupo-v-tema-05': {
    focus: 'Aplicar prevención de riesgos al puesto administrativo.',
    highlight: 'evaluación, planificación, formación y vigilancia de la salud',
    points: ['La prevención es anticipación, no reacción.', 'La oficina tiene riesgos ergonomicos, visuales y psicosociales.', 'Los datos de salud son especialmente sensibles.'],
  },
  'grupo-v-tema-06': {
    focus: 'Dominar principios, derechos y roles en protección de datos.',
    highlight: 'licitud, minimización, derechos, responsable y encargado',
    points: ['No todo dato puede tratarse por comodidad administrativa.', 'Responsable y encargado no son lo mismo.', 'El DPO asesora y supervisa, no sustituye al responsable.'],
  },
  'grupo-v-tema-07': {
    focus: 'Entender administración electrónica y funcionamiento electrónico del sector público.',
    highlight: 'sede, registro, expediente, firma, notificación, ENI y ENS',
    points: ['La sede electrónica es punto oficial de relación.', 'El expediente electrónico debe conservar trazabilidad.', 'ENI y ENS garantizan interoperabilidad y seguridad.'],
  },
  'grupo-v-tema-08': {
    focus: 'Relacionar documento, expediente, archivo y acceso.',
    highlight: 'documento, indice electrónico, archivo y acceso limitado',
    points: ['El expediente es conjunto ordenado de documentos.', 'El indice electrónico da integridad y trazabilidad.', 'El acceso puede limitarse por datos, seguridad o intereses protegidos.'],
  },
  'grupo-v-tema-09': {
    focus: 'Manejar conceptos básicos de ordenador, Windows, archivos y seguridad.',
    highlight: 'hardware, software, Windows 11, archivos y seguridad',
    points: ['RAM y almacenamiento no son lo mismo.', 'El escritorio local no es archivo oficial.', 'La seguridad depende tambien del comportamiento del usuario.'],
  },
  'grupo-v-tema-10': {
    focus: 'Usar Word, Excel y Microsoft 365 con criterio administrativo.',
    highlight: 'estilos, formulas, permisos, versiones y expediente',
    points: ['Word requiere estilos y revisión antes de enviar.', 'Excel es auxiliar: los datos oficiales deben estar en sistemas corporativos.', 'Compartir exige permisos mínimos y protección de datos.'],
  },
  'grupo-v-tema-11': {
    focus: 'Entender correo electrónico, Internet y servicios con seguridad.',
    highlight: 'correo, destinatarios, adjuntos, URL, HTTPS y phishing',
    points: ['Correo ordinario no equivale siempre a notificación administrativa.', 'Revisar destinatarios y adjuntos evita brechas.', 'Usar fuentes oficiales: BOE, BOCYL, BOP y sede municipal.'],
  },
};

export function getStudyAid(slug: string) {
  return studyAidsBySlug[slug];
}
