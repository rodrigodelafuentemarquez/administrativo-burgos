export type LawCard = {
  id: string;
  name: string;
  alias: string;
  date: string;
  purpose: string;
  points: string[];
  example: string;
  remember: string;
  url: string;
};

const boe = (path: string) => `https://www.boe.es/eli/${path}/con`;
const law = (id: string, name: string, alias: string, date: string, purpose: string, points: string[], example: string, remember: string, url: string): LawCard => ({ id, name, alias, date, purpose, points, example, remember, url });

export const lawFamilies: { id: string; title: string; groups: string; laws: LawCard[] }[] = [
  { id: 'procedimiento', title: 'Actuación administrativa y régimen local', groups: 'Grupos I y II; aplicación transversal', laws: [
    law('lpac', 'Ley 39/2015, del Procedimiento Administrativo Común de las Administraciones Públicas', 'LPAC · LPACAP · Ley 39/2015', '1 de octubre de 2015', 'Cómo se tramita un asunto y qué garantías tiene la persona interesada.', [
      'Interesados, representación, registros y relación electrónica: quién puede actuar y cómo presenta documentos.',
      'Plazos, obligación de resolver y silencio: cuándo debe contestar la Administración y qué ocurre si no lo hace.',
      'Actos, motivación, notificación e invalidez: cómo se expresa y comunica una decisión.',
      'Procedimiento, revisión y recursos: inicio, prueba, audiencia, resolución, ejecución y vías administrativas para discutirla.',
    ], 'Solicitas una licencia: esta ley ordena la tramitación, notificación y recursos, junto con la normativa específica.', '39 = expediente y garantías. LPAC y Ley 39/2015 son la misma norma. Localiza arts. 21-25, 30, 40-48 y 112-126.', boe('es/l/2015/10/01/39')),
    law('lrjsp', 'Ley 40/2015, de Régimen Jurídico del Sector Público', 'LRJSP · Ley 40/2015', '1 de octubre de 2015', 'Cómo se organiza y actúa el sector público y cómo se relacionan sus entidades.', [
      'Principios de actuación y órganos: competencia, delegación, avocación, encomienda, firma y suplencia.',
      'Imparcialidad: abstención y recusación para evitar conflictos de intereses.',
      'Potestad sancionadora y responsabilidad patrimonial: principios para sancionar y requisitos para indemnizar.',
      'Convenios, sector público institucional y relaciones entre Administraciones: cooperación y organización.',
    ], 'Para saber quién puede resolver una multa buscas competencia; para tramitar y notificar el expediente recurres también a la Ley 39.', '40 = organización y principios. Arts. 8-13: competencia; 23-24: imparcialidad; 25-31: sanciones; 32-37: responsabilidad.', boe('es/l/2015/10/01/40')),
    law('lrbrl', 'Ley 7/1985, Reguladora de las Bases del Régimen Local', 'LRBRL · LBRL · Ley de Bases del Régimen Local', '2 de abril de 1985', 'El marco básico de municipios, provincias y demás entidades locales.', [
      'Municipio, padrón, órganos y competencias: qué es un Ayuntamiento y qué puede hacer.',
      'Servicios mínimos y gestión: qué servicios debe garantizar y cómo puede organizarlos.',
      'Acuerdos, ordenanzas, bienes y personal: bases comunes del funcionamiento municipal.',
      'Gran población: el Título X contiene las especialidades relevantes para Burgos.',
    ], 'Para distinguir funciones del Pleno y de la Junta de Gobierno de Burgos empiezas por esta ley y su régimen especial.', 'LRBRL = Ayuntamiento. Arts. 25-26: competencias y servicios; 49: ordenanzas; 79-83: bienes; 121 y siguientes: gran población.', boe('es/l/1985/04/02/7')),
    law('ljca', 'Ley 29/1998, reguladora de la Jurisdicción Contencioso-administrativa', 'LJCA', '13 de julio de 1998', 'Cómo se controla judicialmente la actuación administrativa.', [
      'Determina qué asuntos conocen los órganos judiciales de este orden y quién puede reclamar.',
      'Permite impugnar actos, reglamentos y, en los supuestos legales, inactividad o vía de hecho.',
      'Regula procedimiento judicial, medidas cautelares, sentencias y ejecución.',
    ], 'Después de agotar la vía administrativa cuando sea necesario, pides al juez que anule una sanción.', 'Un recurso administrativo lo resuelve la Administración; el contencioso, un órgano judicial.', boe('es/l/1998/07/13/29')),
    law('lcsp', 'Ley 9/2017, de Contratos del Sector Público', 'LCSP', '8 de noviembre de 2017', 'Cómo contrata el sector público obras, bienes y servicios.', [
      'Tipos: obras, suministro, servicios, concesiones y contratos mixtos; en concesiones se transfiere riesgo operacional.',
      'Preparación: necesidad, crédito, expediente, pliegos, presupuesto, valor estimado y solvencia.',
      'Adjudicación: procedimientos y criterios respetando publicidad, igualdad y competencia.',
      'Ejecución y control: cumplimiento, penalidades, modificaciones, resolución e impugnación.',
    ], 'Comprar ordenadores es suministro; contratar limpieza es servicio; reformar un edificio es obra.', 'LCSP = contratar. No confundas presupuesto base —con IVA, como regla— y valor estimado —sin IVA—.', boe('es/l/2017/11/08/9')),
    law('lgs', 'Ley 38/2003, General de Subvenciones', 'LGS', '17 de noviembre de 2003', 'Cómo se conceden, justifican y controlan ayudas públicas.', [
      'Una subvención financia una finalidad pública sin ser el precio de una prestación contratada.',
      'Regula bases, beneficiarios, concesión, obligaciones y justificación del destino del dinero.',
      'El incumplimiento puede producir reintegro y, cuando proceda, sanción.',
    ], 'Una asociación recibe ayuda para una actividad cultural y debe justificar el gasto subvencionado.', 'Subvención = fomentar una actividad; contrato = adquirir una prestación.', boe('es/l/2003/11/17/38')),
    law('lpap', 'Ley 33/2003, del Patrimonio de las Administraciones Públicas', 'LPAP', '3 de noviembre de 2003', 'El marco patrimonial público, con alcance distinto según cada Administración.', [
      'Distingue bienes de dominio público y patrimoniales y regula su adquisición, protección y utilización.',
      'Para bienes locales se combina con LRBRL, TRRL y Reglamento de Bienes; no todos sus artículos se aplican directamente al municipio.',
      'Importan afectación, inventario y títulos para usar o disponer de bienes.',
    ], 'Antes de vender un inmueble municipal debes determinar si es patrimonial o está afectado a un servicio público.', 'Titularidad pública no significa que todos los bienes tengan el mismo régimen.', boe('es/l/2003/11/03/33')),
  ] },
  { id: 'instituciones', title: 'Constitución e instituciones', groups: 'Grupo I y fuentes del Grupo II', laws: [
    law('ce', 'Constitución Española', 'CE', '27 de diciembre de 1978', 'La norma suprema que reconoce derechos y organiza los poderes públicos.', [
      'Principios y valores del Estado: arts. 1-9.',
      'Derechos, deberes y garantías: Título I; no todos tienen la misma protección.',
      'Corona, Cortes, Gobierno y Poder Judicial: distribución de funciones y controles.',
      'Organización territorial y autonomía local: Estado, comunidades autónomas, provincias y municipios.',
    ], 'Una ordenanza debe respetar la igualdad y los derechos constitucionales.', 'Referéndum: 6 de diciembre; sanción: 27; publicación y entrada en vigor: 29 de diciembre de 1978.', 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229'),
    law('cc', 'Código Civil: título preliminar', 'CC', 'Real Decreto de 24 de julio de 1889', 'Las reglas generales para entender las fuentes y la aplicación del Derecho.', [
      'Art. 1: ley, costumbre y principios generales; la jurisprudencia complementa el ordenamiento.',
      'Art. 2: entrada en vigor, derogación e irretroactividad en los términos legales.',
      'Arts. 3-4: interpretación y analogía con sus límites.',
    ], 'Si una ley no fija su entrada en vigor, la regla general es 20 días desde su publicación completa.', 'Aquí estudias principalmente cómo funcionan las normas, no todo el Derecho civil.', 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763'),
    law('gobierno', 'Ley 50/1997, del Gobierno', 'Ley del Gobierno', '27 de noviembre de 1997', 'La organización y el funcionamiento del Gobierno de España.', [
      'Presidente, vicepresidentes, ministros y Consejo de Ministros: composición y funciones.',
      'Regula funcionamiento, delegación de competencias y Gobierno en funciones.',
      'Ordena la iniciativa legislativa y la elaboración de normas del Gobierno.',
    ], 'Para estudiar qué puede hacer un Gobierno en funciones combinas Constitución y esta ley.', 'Gobierno dirige la política; Administración sirve objetivamente al interés general.', boe('es/l/1997/11/27/50')),
    law('estatuto', 'Estatuto de Autonomía de Castilla y León', 'EACyL · LO 4/1983, reformada por LO 14/2007', '25 de febrero de 1983; reforma de 30 de noviembre de 2007', 'La norma institucional básica de Castilla y León.', [
      'Identidad, territorio, derechos y principios de la Comunidad.',
      'Instituciones: Cortes, presidente y Junta, además de otras instituciones estatutarias.',
      'Competencias, relaciones institucionales, hacienda y procedimiento de reforma.',
    ], 'Para saber el papel de las Cortes autonómicas y de la Junta consultas el Estatuto.', 'Estatuto = organización de la Comunidad; LRBRL = bases de las entidades locales.', 'https://www.boe.es/buscar/act.php?id=BOE-A-1983-7474'),
    law('tue', 'Tratado de la Unión Europea', 'TUE', '7 de febrero de 1992; reformado, entre otros, por Lisboa (2007)', 'Los valores, objetivos y grandes reglas institucionales de la Unión.', [
      'Principios de atribución, subsidiariedad y proporcionalidad: cuándo y hasta dónde actúa la UE.',
      'Instituciones y relaciones entre la Unión y sus Estados miembros.',
      'Se estudia con el TFUE, que desarrolla políticas y funcionamiento.',
    ], 'La UE solo actúa en competencias que los Estados le atribuyen mediante los tratados.', 'Consejo Europeo y Consejo de la UE son instituciones distintas.', 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12012M/TXT'),
    law('tfue', 'Tratado de Funcionamiento de la Unión Europea', 'TFUE', 'Denominación actual desde Lisboa, en vigor el 1 de diciembre de 2009', 'Desarrolla competencias, políticas y mecanismos de funcionamiento de la Unión.', [
      'Mercado interior y políticas comunes: ámbitos concretos de actuación europea.',
      'Procedimientos, instituciones, presupuesto y reglas de adopción de decisiones.',
      'Art. 288: reglamentos, directivas, decisiones, recomendaciones y dictámenes.',
    ], 'Un reglamento europeo es directamente aplicable; una directiva obliga al resultado y normalmente exige transposición.', 'TUE da el marco; TFUE desarrolla cómo funciona y qué hace la Unión.', 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12012E/TXT'),
  ] },
  { id: 'personal', title: 'Empleados públicos y protección social', groups: 'Grupo III', laws: [
    law('trebep', 'Texto refundido de la Ley del Estatuto Básico del Empleado Público', 'TREBEP · EBEP · RDL 5/2015', '30 de octubre de 2015', 'Las bases del empleo público, con preceptos aplicables según el tipo de personal.', [
      'Clases de empleados: carrera, interinos, laborales y eventuales.',
      'Acceso, carrera y provisión: entrar, progresar y ocupar puestos son conceptos diferentes.',
      'Derechos, deberes, código de conducta y régimen disciplinario.',
      'Adquisición y pérdida de la condición y situaciones administrativas: arts. 62-68 y 85-92.',
    ], 'Aprobar la oposición no basta: hay que completar nombramiento, acatamiento y toma de posesión.', 'TREBEP = bases del empleado público. EBEP suele usarse como nombre corto; el texto refundido vigente se aprobó en 2015.', boe('es/rdlg/2015/10/30/5')),
    law('et', 'Texto refundido de la Ley del Estatuto de los Trabajadores', 'ET · RDL 2/2015', '23 de octubre de 2015', 'La norma básica de las relaciones laborales, también relevante para personal laboral público.', [
      'Contrato, modalidades, derechos y obligaciones de trabajador y empleador.',
      'Jornada, salario, suspensión y extinción de la relación laboral.',
      'Representación y negociación colectiva; se completa con el convenio aplicable.',
    ], 'El personal laboral municipal se rige por normas laborales y también por las disposiciones públicas que le correspondan.', 'ET no sustituye al TREBEP para todo el empleo público.', boe('es/rdlg/2015/10/23/2')),
    law('incompatibilidades', 'Ley 53/1984, de incompatibilidades del personal al servicio de las Administraciones Públicas', 'Ley de incompatibilidades', '26 de diciembre de 1984', 'Proteger dedicación, independencia e imparcialidad ante otras actividades.', [
      'Un segundo puesto público solo cabe en supuestos legalmente permitidos.',
      'Las actividades privadas deben respetar los límites de conflicto de intereses, funciones y horario.',
      'Distingue autorización de compatibilidad y actividades exceptuadas; no toda actividad externa se trata igual.',
    ], 'Quien tramita asuntos de una empresa no puede asesorarla privadamente en condiciones incompatibles con su puesto.', 'Se aplica también a personal laboral público; no basta hacer la actividad fuera del horario.', boe('es/l/1984/12/26/53')),
    law('lols', 'Ley Orgánica 11/1985, de Libertad Sindical', 'LOLS', '2 de agosto de 1985', 'La libertad de crear sindicatos, afiliarse y desarrollar actividad sindical.', [
      'Contenido individual y colectivo de la libertad sindical.',
      'Representatividad y acción sindical en el trabajo.',
      'Protección frente a conductas que vulneren estos derechos.',
    ], 'El empleado puede participar en actividad sindical bajo las garantías y condiciones aplicables.', 'Sindicación y huelga están relacionadas, pero la LOLS no contiene toda la regulación de la huelga.', boe('es/lo/1985/08/02/11')),
    law('lgss', 'Texto refundido de la Ley General de la Seguridad Social', 'TRLGSS · LGSS · RDL 8/2015', '30 de octubre de 2015', 'La estructura del sistema y su protección frente a situaciones de necesidad.', [
      'Campo de aplicación, regímenes y niveles contributivo y no contributivo.',
      'Afiliación, altas, bajas y cotización, desarrolladas también por reglamentos.',
      'Acción protectora: asistencia y prestaciones por incapacidad, jubilación, desempleo y otras contingencias.',
    ], 'Una baja por accidente de trabajo y otra por enfermedad común pueden tener reglas distintas.', 'Contingencia = causa protegida; prestación = respuesta del sistema, con sus requisitos.', boe('es/rdlg/2015/10/30/8')),
  ] },
  { id: 'economia', title: 'Hacienda local, presupuesto y urbanismo', groups: 'Grupo IV', laws: [
    law('trlrhl', 'Texto refundido de la Ley Reguladora de las Haciendas Locales', 'TRLRHL · TRLHL · RDL 2/2004', '5 de marzo de 2004', 'De dónde obtiene recursos el Ayuntamiento y cómo organiza su presupuesto y gasto.', [
      'Ingresos: tributos, precios públicos y otros recursos; ordenanzas fiscales.',
      'Impuestos municipales: IBI, IAE, IVTM, ICIO e IIVTNU.',
      'Presupuesto: créditos, modificaciones, ejecución, liquidación y cuentas.',
      'Control económico y tesorería; se desarrolla con reglamentos específicos.',
    ], 'Para financiar un servicio distingues ingresos; para gastarlos necesitas crédito y fases presupuestarias.', 'LRBRL = organización local; TRLRHL = dinero local. Arts. 15-19: ordenanzas fiscales; 162 y siguientes: presupuesto.', boe('es/rdlg/2004/03/05/2')),
    law('lgt', 'Ley 58/2003, General Tributaria', 'LGT', '17 de diciembre de 2003', 'Las reglas generales de los tributos y de su aplicación.', [
      'Obligados tributarios, hecho imponible, deuda y derechos de los contribuyentes.',
      'Gestión, inspección y recaudación: comprobar, liquidar y cobrar.',
      'Infracciones, sanciones y revisión tributaria, con las especialidades locales aplicables.',
    ], 'La normativa del IBI define ese impuesto; la LGT aporta reglas generales para gestionarlo y recaudarlo.', 'Procedimiento tributario tiene especialidades: no traslades automáticamente todos los recursos de la LPAC.', boe('es/l/2003/12/17/58')),
    law('loepsf', 'Ley Orgánica 2/2012, de Estabilidad Presupuestaria y Sostenibilidad Financiera', 'LOEPSF', '27 de abril de 2012', 'La disciplina financiera del conjunto de Administraciones.', [
      'Estabilidad presupuestaria y sostenibilidad: equilibrio y capacidad para afrontar obligaciones.',
      'Reglas sobre gasto, deuda y transparencia financiera.',
      'Medidas preventivas y correctivas ante incumplimientos en los términos aplicables.',
    ], 'Una iniciativa económica municipal debe valorar si compromete la sostenibilidad de la Hacienda local.', 'Tener crédito es necesario, pero no elimina las demás condiciones de disciplina financiera.', boe('es/lo/2012/04/27/2')),
    law('suelo', 'Texto refundido de la Ley de Suelo y Rehabilitación Urbana', 'TRLSRU · RDL 7/2015', '30 de octubre de 2015', 'Las bases estatales del régimen del suelo y la rehabilitación.', [
      'Derechos y deberes relacionados con suelo, propiedad y actuaciones urbanísticas.',
      'Situaciones básicas estatales del suelo y reglas de valoración.',
      'Se combina con legislación autonómica y planeamiento municipal.',
    ], 'Valorar un terreno exige atender a las reglas estatales, además de su ordenación urbanística.', 'Situación básica estatal y clasificación urbanística autonómica no son expresiones intercambiables.', boe('es/rdlg/2015/10/30/7')),
    law('lucyl', 'Ley 5/1999, de Urbanismo de Castilla y León', 'LUCyL', '8 de abril de 1999', 'Las reglas urbanísticas autonómicas que aplica el Ayuntamiento de Burgos.', [
      'Suelo, planeamiento y gestión: qué se puede hacer y cómo se ordena y ejecuta.',
      'Intervención municipal: licencias y otros instrumentos admitidos legalmente.',
      'Protección de la legalidad y sanciones; se desarrolla mediante el Reglamento de Urbanismo.',
    ], 'Una obra sin título habilitante puede exigir paralización y restauración, y además generar sanción.', 'Restaurar corrige la situación ilegal; sancionar castiga la infracción.', boe('es-cl/l/1999/04/08/5')),
  ] },
  { id: 'derechos', title: 'Igualdad, ciudadanía, datos y prevención', groups: 'Grupo V', laws: [
    law('igualdad', 'Ley Orgánica 3/2007, para la igualdad efectiva de mujeres y hombres', 'Ley de igualdad', '22 de marzo de 2007', 'Prevenir discriminación y hacer efectiva la igualdad entre mujeres y hombres.', [
      'Distingue discriminación directa e indirecta y acoso sexual y por razón de sexo.',
      'Introduce la igualdad de manera transversal en políticas públicas.',
      'Contiene medidas de igualdad en empleo y actuación administrativa.',
    ], 'Una regla aparentemente neutra puede ser discriminatoria si genera desventaja injustificada por sexo.', 'Igualdad formal prohíbe discriminar; igualdad efectiva exige actuar sobre obstáculos.', boe('es/lo/2007/03/22/3')),
    law('violencia', 'Ley Orgánica 1/2004, de Medidas de Protección Integral contra la Violencia de Género', 'Ley de protección integral', '28 de diciembre de 2004', 'Prevenir y atender la violencia de género definida en su ámbito legal.', [
      'Su concepto central se refiere a violencia sobre mujeres por parejas o exparejas varones, con las previsiones legales de protección relacionadas.',
      'Combina sensibilización, prevención, asistencia y protección institucional y judicial.',
      'Reconoce derechos de información, atención y protección social y laboral en sus términos.',
    ], 'La oficina deriva a recursos especializados y protege la confidencialidad de una víctima.', 'No toda violencia familiar coincide con el concepto específico de esta ley.', boe('es/lo/2004/12/28/1')),
    law('lgtbi', 'Ley 4/2023, para la igualdad real y efectiva de las personas trans y para la garantía de los derechos de las personas LGTBI', 'Ley trans y LGTBI', '28 de febrero de 2023', 'Garantizar igualdad de trato y prevenir discriminación por las causas protegidas.', [
      'Principios y medidas en educación, salud, empleo y otros ámbitos.',
      'Deberes de las Administraciones para prevenir y atender la discriminación.',
      'Regula también la rectificación registral de la mención relativa al sexo con sus requisitos.',
    ], 'El personal municipal presta atención respetuosa y evita requisitos o trato discriminatorios.', 'Su alcance no se reduce al cambio registral: incluye políticas y garantías de igualdad.', boe('es/l/2023/02/28/4')),
    law('transparencia', 'Ley 19/2013, de transparencia, acceso a la información pública y buen gobierno', 'Ley de transparencia', '9 de diciembre de 2013', 'Abrir la información pública y exigir responsabilidad en el gobierno.', [
      'Publicidad activa: publicar determinada información sin que nadie la pida.',
      'Derecho de acceso: solicitar información existente, con límites e inadmisiones motivados.',
      'Buen gobierno: obligaciones y responsabilidades de sus sujetos.',
    ], 'Publicar el presupuesto es publicidad activa; responder a una solicitud de información es derecho de acceso.', 'Transparencia se combina con protección de datos: publicar no significa revelar todo.', boe('es/l/2013/12/09/19')),
    law('discapacidad', 'Texto refundido de la Ley General de derechos de las personas con discapacidad y de su inclusión social', 'RDL 1/2013', '29 de noviembre de 2013', 'Garantizar derechos, inclusión e igualdad de oportunidades.', [
      'Accesibilidad universal: entornos, servicios y comunicaciones utilizables.',
      'Ajustes razonables: adaptaciones necesarias en el caso concreto en los términos legales.',
      'Prevención de discriminación y garantía de participación.',
    ], 'Se adapta la atención para que una persona pueda comprender y completar su trámite.', 'Accesibilidad no consiste solo en eliminar escalones: incluye información y comunicación.', boe('es/rdlg/2013/11/29/1')),
    law('prl', 'Ley 31/1995, de Prevención de Riesgos Laborales', 'LPRL', '8 de noviembre de 1995', 'Evitar daños del trabajo mediante una prevención organizada.', [
      'Evaluar riesgos y planificar medidas; combatirlos en origen y adaptar el trabajo a la persona.',
      'Información, formación, emergencias y vigilancia de salud con garantías.',
      'Obligaciones de empleador y trabajadores y participación preventiva.',
    ], 'En una oficina se revisan postura, pantallas, iluminación y carga mental.', 'Prevenir = anticiparse. Art. 15: principios; 16: evaluación y planificación; 22: vigilancia de salud.', boe('es/l/1995/11/08/31')),
    law('rgpd', 'Reglamento (UE) 2016/679, General de Protección de Datos', 'RGPD', '27 de abril de 2016; aplicable desde el 25 de mayo de 2018', 'Las reglas europeas para tratar datos personales.', [
      'Principios: finalidad, minimización, exactitud, conservación limitada y seguridad.',
      'Bases jurídicas: consentimiento, obligación legal, interés público y otras; el consentimiento no es la única.',
      'Derechos de las personas y funciones de responsable, encargado y delegado de protección de datos.',
      'Responsabilidad demostrable y gestión de riesgos y brechas.',
    ], 'Una ayuda se tramita con los datos necesarios y acceso limitado al personal autorizado.', 'RGPD es un reglamento europeo directamente aplicable, no una ley española.', 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679'),
    law('lopdgdd', 'Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales', 'LOPDGDD', '5 de diciembre de 2018', 'Complementar el RGPD en España y reconocer derechos digitales.', [
      'Concreta aspectos nacionales permitidos por el reglamento europeo.',
      'Regula autoridades, garantías y particularidades de determinados tratamientos.',
      'Incluye derechos digitales, como garantías de intimidad y desconexión en el ámbito laboral.',
    ], 'El uso de dispositivos corporativos debe atender a reglas de protección de datos y garantías digitales.', 'RGPD y LOPDGDD se estudian juntos; la ley española no sustituye al reglamento europeo.', boe('es/lo/2018/12/05/3')),
  ] },
];

export const essentialLawMap = [
  { situation: 'Tramitar, notificar, contar plazos o recurrir', id: 'lpac', name: 'LPAC = Ley 39/2015' },
  { situation: 'Identificar órgano, delegación, principios sancionadores o responsabilidad', id: 'lrjsp', name: 'LRJSP = Ley 40/2015' },
  { situation: 'Organizar el Ayuntamiento, sus competencias y servicios', id: 'lrbrl', name: 'LRBRL = Ley 7/1985' },
  { situation: 'Estudiar acceso, carrera, derechos y situaciones del personal', id: 'trebep', name: 'TREBEP = RDL 5/2015' },
  { situation: 'Gestionar tributos, presupuesto y gasto local', id: 'trlrhl', name: 'TRLRHL = RDL 2/2004' },
  { situation: 'Contratar obras, suministros y servicios', id: 'lcsp', name: 'LCSP = Ley 9/2017' },
];

export const supportingRules = [
  { name: 'TRRL · Real Decreto Legislativo 781/1986, de 18 de abril', role: 'Texto refundido de disposiciones de régimen local: complementa las bases en organización, bienes, actividades y personal en lo vigente y aplicable. Tiene rango de ley.', url: boe('es/rdlg/1986/04/18/781') },
  { name: 'ROF · Real Decreto 2568/1986, de 28 de noviembre', role: 'Organización y funcionamiento local: sesiones, convocatorias, votaciones y actas. Se combina con la LRBRL y las especialidades orgánicas de Burgos.', url: boe('es/rd/1986/11/28/2568') },
  { name: 'RBEL · Real Decreto 1372/1986, de 13 de junio', role: 'Bienes locales: clasificación, inventario, defensa, utilización, enajenación y cesión. Desarrolla el régimen patrimonial municipal.', url: boe('es/rd/1986/06/13/1372') },
  { name: 'Real Decreto 500/1990, de 20 de abril', role: 'Desarrollo del presupuesto local: créditos, modificaciones y ejecución. Ayuda a entender RC, A, D, O y P junto al TRLRHL.', url: boe('es/rd/1990/04/20/500') },
  { name: 'Real Decreto 424/2017, de 28 de abril', role: 'Control interno local: función interventora, reparos, control financiero, auditoría y seguimiento de resultados.', url: boe('es/rd/2017/04/28/424') },
  { name: 'RUCyL · Decreto 22/2004, de 29 de enero', role: 'Reglamento de Urbanismo de Castilla y León: desarrolla la Ley 5/1999 en planeamiento, gestión e intervención urbanística.', url: 'https://www.boe.es/buscar/pdf/2004/BOCL-h-2004-90152-consolidado.pdf' },
  { name: 'Real Decreto 203/2021, de 30 de marzo', role: 'Actuación y funcionamiento electrónico: desarrolla las leyes 39 y 40 en sede, identificación, firma, notificación, documento y expediente.', url: boe('es/rd/2021/03/30/203') },
  { name: 'ENI · Real Decreto 4/2010, de 8 de enero', role: 'Esquema Nacional de Interoperabilidad: permite intercambiar, entender y conservar documentos y datos entre sistemas administrativos.', url: boe('es/rd/2010/01/08/4') },
  { name: 'ENS · Real Decreto 311/2022, de 3 de mayo', role: 'Esquema Nacional de Seguridad: principios y requisitos para proteger información y servicios electrónicos. ENI conecta sistemas; ENS los protege.', url: boe('es/rd/2022/05/03/311') },
  { name: 'Real Decreto-ley 17/1977, de 4 de marzo', role: 'Normas sobre relaciones de trabajo, incluida la huelga, interpretadas conforme a la Constitución y la jurisprudencia constitucional.', url: boe('es/rdl/1977/03/04/17') },
  { name: 'Ley Orgánica 4/2001, de 12 de noviembre', role: 'Derecho de petición: permite dirigir peticiones a los poderes públicos; no sustituye una solicitud o recurso con procedimiento específico.', url: boe('es/lo/2001/11/12/4') },
  { name: 'Ley Orgánica 2/1982, de 12 de mayo, y Ley 7/1988, de 5 de abril', role: 'Tribunal de Cuentas: marco orgánico y funcionamiento del control externo y jurisdicción contable. No confundir con la Intervención municipal.', url: boe('es/lo/1982/05/12/2') },
  { name: 'Ley 2/2002, de 9 de abril, de Castilla y León', role: 'Consejo de Cuentas: fiscalización externa del sector público autonómico y de las entidades incluidas en su ámbito, también locales.', url: boe('es-cl/l/2002/04/09/2') },
];
