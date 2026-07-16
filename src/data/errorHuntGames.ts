import type { GameGroupId } from './gamification';

export type ErrorHuntItem = {
  id: string;
  groupId: GameGroupId;
  statement: string;
  options: string[];
  answer: string;
  explanation: string;
  tag: string;
};

const item = (
  id: string,
  groupId: GameGroupId,
  tag: string,
  statement: string,
  answer: string,
  explanation: string,
  options: string[] = ['Plazo incorrecto', 'Órgano incorrecto', 'Concepto incorrecto', 'Norma incorrecta'],
): ErrorHuntItem => ({ id, groupId, tag, statement, answer, explanation, options });

export const errorHuntItems: ErrorHuntItem[] = [
  item('eh-g1-1', 'grupo-i', 'Constitución', 'El art. 14 CE regula la tutela judicial efectiva.', 'Concepto incorrecto', 'El art. 14 CE regula igualdad; la tutela judicial efectiva está en el art. 24 CE.'),
  item('eh-g1-2', 'grupo-i', 'Constitución', 'La Constitución fue publicada en el BOE el 6 de diciembre de 1978.', 'Plazo incorrecto', 'El 6 de diciembre fue el referéndum; la publicación en BOE fue el 29 de diciembre de 1978.'),
  item('eh-g1-3', 'grupo-i', 'Corona', 'El Rey dirige la política interior y exterior.', 'Órgano incorrecto', 'La dirección de la política interior y exterior corresponde al Gobierno, art. 97 CE.'),
  item('eh-g1-4', 'grupo-i', 'Cortes', 'El Senado se regula principalmente en el art. 68 CE.', 'Concepto incorrecto', 'El art. 68 CE regula el Congreso; el Senado se regula en el art. 69 CE.'),
  item('eh-g1-5', 'grupo-i', 'Régimen local', 'La autonomía provincial está garantizada en el art. 140 CE.', 'Concepto incorrecto', 'El art. 140 CE garantiza la autonomía municipal; la provincia se regula en el art. 141 CE.'),
  item('eh-g1-6', 'grupo-i', 'Reforma', 'La reforma ordinaria de la Constitución exige siempre referéndum obligatorio.', 'Concepto incorrecto', 'En el art. 167 CE el referéndum solo se celebra si lo solicita una décima parte de cualquiera de las Cámaras.'),
  item('eh-g1-7', 'grupo-i', 'Unión Europea', 'La Comisión Europea representa a los gobiernos de los Estados miembros.', 'Órgano incorrecto', 'Quien representa a los gobiernos es el Consejo de la Unión Europea; la Comisión defiende el interés general de la Unión.'),
  item('eh-g1-8', 'grupo-i', 'Castilla y León', 'El Procurador del Común ejerce la potestad legislativa autonómica.', 'Órgano incorrecto', 'La potestad legislativa corresponde a las Cortes de Castilla y León.'),

  item('eh-g2-1', 'grupo-ii', 'Recursos', 'El recurso de alzada se interpone contra actos que ponen fin a la vía administrativa.', 'Concepto incorrecto', 'La alzada procede contra actos que no ponen fin a la vía administrativa.'),
  item('eh-g2-2', 'grupo-ii', 'Recursos', 'El recurso potestativo de reposición se resuelve en tres meses.', 'Plazo incorrecto', 'La reposición se resuelve en un mes; la alzada, en tres meses.'),
  item('eh-g2-3', 'grupo-ii', 'Procedimiento', 'La subsanación de una solicitud concede normalmente cinco días.', 'Plazo incorrecto', 'El plazo habitual de subsanación es de diez días.'),
  item('eh-g2-4', 'grupo-ii', 'Acto administrativo', 'La nulidad de pleno derecho es un vicio leve convalidable siempre.', 'Concepto incorrecto', 'La nulidad es el vicio más grave y no se convalida como una simple anulabilidad.'),
  item('eh-g2-5', 'grupo-ii', 'Responsabilidad', 'La responsabilidad patrimonial exige siempre dolo o culpa del funcionario.', 'Concepto incorrecto', 'La responsabilidad patrimonial administrativa es objetiva en su estructura básica: lesión antijurídica, daño y causalidad.'),
  item('eh-g2-6', 'grupo-ii', 'Órganos', 'La competencia administrativa es renunciable por el órgano titular.', 'Concepto incorrecto', 'La competencia es irrenunciable; puede delegarse su ejercicio en los supuestos previstos.'),
  item('eh-g2-7', 'grupo-ii', 'Bienes', 'Los bienes de dominio público son embargables si hay deuda administrativa.', 'Concepto incorrecto', 'Los bienes de dominio público son inalienables, imprescriptibles e inembargables.'),
  item('eh-g2-8', 'grupo-ii', 'Local', 'Las ordenanzas locales se aprueban definitivamente sin información pública.', 'Trámite incorrecto', 'La aprobación de ordenanzas exige información pública y audiencia por plazo mínimo legal.', ['Plazo incorrecto', 'Trámite incorrecto', 'Órgano incorrecto', 'Norma incorrecta']),

  item('eh-g3-1', 'grupo-iii', 'Personal', 'El personal eventual realiza funciones permanentes de gestión ordinaria.', 'Concepto incorrecto', 'El eventual realiza funciones de confianza o asesoramiento especial.'),
  item('eh-g3-2', 'grupo-iii', 'Acceso', 'El acceso al empleo público se basa en antigüedad, confianza y oportunidad.', 'Concepto incorrecto', 'Los principios nucleares son igualdad, mérito y capacidad.'),
  item('eh-g3-3', 'grupo-iii', 'Provisión', 'La libre designación es el sistema normal de provisión de puestos.', 'Concepto incorrecto', 'El sistema normal es el concurso; la libre designación es excepcional para determinados puestos.'),
  item('eh-g3-4', 'grupo-iii', 'Situaciones', 'Servicio activo significa que el funcionario está separado temporalmente de sus funciones.', 'Concepto incorrecto', 'Servicio activo es la situación ordinaria de prestación de servicios.'),
  item('eh-g3-5', 'grupo-iii', 'Incompatibilidades', 'La Ley 53/1984 regula exclusivamente la Seguridad Social del personal.', 'Norma incorrecta', 'La Ley 53/1984 regula incompatibilidades del personal al servicio de las Administraciones Públicas.'),
  item('eh-g3-6', 'grupo-iii', 'Disciplina', 'La separación del servicio nunca puede causar pérdida de condición de funcionario.', 'Concepto incorrecto', 'La sanción de separación del servicio sí supone pérdida de la condición de funcionario.'),
  item('eh-g3-7', 'grupo-iii', 'Derechos colectivos', 'El derecho de huelga se reconoce en el art. 37 CE.', 'Norma incorrecta', 'El derecho de huelga se reconoce en el art. 28 CE; el art. 37 se asocia a negociación colectiva y conflicto colectivo.'),
  item('eh-g3-8', 'grupo-iii', 'Seguridad Social', 'La incapacidad temporal es una situación administrativa del TREBEP.', 'Concepto incorrecto', 'La incapacidad temporal es una contingencia protegida por Seguridad Social, no una situación administrativa como servicio activo o excedencia.'),

  item('eh-g4-1', 'grupo-iv', 'Presupuesto', 'La fase O del gasto equivale a la autorización del gasto.', 'Concepto incorrecto', 'La autorización es A; O es reconocimiento de la obligación.'),
  item('eh-g4-2', 'grupo-iv', 'Presupuesto', 'El presupuesto local se aprueba definitivamente después del 31 de marzo como regla general.', 'Plazo incorrecto', 'Debe aprobarse definitivamente antes del 31 de diciembre del año anterior.'),
  item('eh-g4-3', 'grupo-iv', 'Modificaciones', 'El crédito extraordinario sirve cuando el crédito existe pero es insuficiente.', 'Concepto incorrecto', 'Si existe pero es insuficiente procede suplemento de crédito; si no existe crédito adecuado, crédito extraordinario.'),
  item('eh-g4-4', 'grupo-iv', 'Tributos', 'El IBI es el impuesto sobre actividades económicas.', 'Concepto incorrecto', 'IBI es impuesto sobre bienes inmuebles; IAE es actividades económicas.'),
  item('eh-g4-5', 'grupo-iv', 'Tributos', 'Las ordenanzas fiscales se aprueban por decreto de Alcaldía.', 'Órgano incorrecto', 'La aprobación corresponde al Pleno.'),
  item('eh-g4-6', 'grupo-iv', 'Control', 'El reparo de Intervención siempre permite continuar el expediente sin resolver nada.', 'Trámite incorrecto', 'Determinados reparos suspenden la tramitación hasta subsanación o resolución de discrepancia.', ['Plazo incorrecto', 'Trámite incorrecto', 'Órgano incorrecto', 'Norma incorrecta']),
  item('eh-g4-7', 'grupo-iv', 'Urbanismo', 'La licencia urbanística sustituye al planeamiento.', 'Concepto incorrecto', 'La licencia controla la adecuación de la actuación al planeamiento, no lo sustituye.'),
  item('eh-g4-8', 'grupo-iv', 'Control', 'El control externo lo realiza exclusivamente la Intervención municipal.', 'Órgano incorrecto', 'La Intervención realiza control interno; el externo corresponde al Tribunal de Cuentas u órgano autonómico.'),

  item('eh-g5-1', 'grupo-v', 'Transparencia', 'La solicitud de acceso a información pública se resuelve en seis meses.', 'Plazo incorrecto', 'El plazo general es de un mes.'),
  item('eh-g5-2', 'grupo-v', 'Transparencia', 'En transparencia, el silencio administrativo es estimatorio.', 'Concepto incorrecto', 'El silencio en derecho de acceso a información pública es desestimatorio.'),
  item('eh-g5-3', 'grupo-v', 'Protección de datos', 'El encargado del tratamiento decide los fines y medios del tratamiento.', 'Concepto incorrecto', 'Quien decide fines y medios es el responsable; el encargado trata datos por cuenta del responsable.'),
  item('eh-g5-4', 'grupo-v', 'Protección de datos', 'La minimización permite recoger cualquier dato útil aunque no sea necesario.', 'Concepto incorrecto', 'Minimización exige datos adecuados, pertinentes y limitados a lo necesario.'),
  item('eh-g5-5', 'grupo-v', 'Administración electrónica', 'La notificación electrónica no abierta se entiende rechazada a los tres meses.', 'Plazo incorrecto', 'Como regla de puesta a disposición, se entiende rechazada tras diez días naturales sin acceso.'),
  item('eh-g5-6', 'grupo-v', 'Registros', 'Las oficinas de asistencia no pueden ayudar en el uso de medios electrónicos.', 'Concepto incorrecto', 'Precisamente asisten a la ciudadanía en el uso de medios electrónicos y registros.'),
  item('eh-g5-7', 'grupo-v', 'PRL', 'La evaluación de riesgos se realiza solo después de que ocurra un accidente.', 'Concepto incorrecto', 'La evaluación es preventiva: identifica y valora riesgos que no se han podido evitar.'),
  item('eh-g5-8', 'grupo-v', 'Igualdad', 'La Ley Orgánica 3/2007 regula exclusivamente protección de datos.', 'Norma incorrecta', 'La LO 3/2007 regula igualdad efectiva de mujeres y hombres; protección de datos se vincula a RGPD y LO 3/2018.'),
];
