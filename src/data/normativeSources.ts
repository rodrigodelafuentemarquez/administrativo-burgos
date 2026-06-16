export type NormativeSource = {
  label: string;
  url: string;
  tag: 'BOE' | 'BOCYL' | 'UE' | 'Ayuntamiento' | 'Oficial';
};

const S = {
  ce: {
    label: 'Constitución Española de 1978',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1978-31229',
    tag: 'BOE',
  },
  cc: {
    label: 'Código Civil',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1889-4763',
    tag: 'BOE',
  },
  leyGobierno: {
    label: 'Ley 50/1997, del Gobierno',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1997-25336',
    tag: 'BOE',
  },
  ley39: {
    label: 'Ley 39/2015, Procedimiento Administrativo Comun',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10565',
    tag: 'BOE',
  },
  ley40: {
    label: 'Ley 40/2015, Régimen Jurídico del Sector Publico',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-10566',
    tag: 'BOE',
  },
  lrbrl: {
    label: 'Ley 7/1985, Bases del Régimen Local',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-5392',
    tag: 'BOE',
  },
  trrl: {
    label: 'TRRL, disposiciones vigentes de Régimen Local',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-9865',
    tag: 'BOE',
  },
  rof: {
    label: 'Real Decreto 2568/1986, ROF local',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1986-33252',
    tag: 'BOE',
  },
  rofBurgos: {
    label: 'ROF del Ayuntamiento de Burgos',
    url: 'https://programaseducativos.aytoburgos.es/en/web/ayuntamiento-de-burgos/-/reglamento-organico-y-de-funcionamiento-del-ayuntamiento-rof-',
    tag: 'Ayuntamiento',
  },
  estatutoCyl: {
    label: 'Estatuto de Autonomía de Castilla y León',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1983-7474',
    tag: 'BOE',
  },
  tue: {
    label: 'Tratado de la Unión Europea',
    url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12012M/TXT',
    tag: 'UE',
  },
  tfue: {
    label: 'Tratado de Funcionamiento de la Unión Europea',
    url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:12012E/TXT',
    tag: 'UE',
  },
  trlh: {
    label: 'Texto Refundido de la Ley de Haciendas Locales',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-4214',
    tag: 'BOE',
  },
  lgt: {
    label: 'Ley 58/2003, General Tributaria',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2003-23186',
    tag: 'BOE',
  },
  rd500: {
    label: 'Real Decreto 500/1990, presupuestos locales',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1990-9775',
    tag: 'BOE',
  },
  loepsf: {
    label: 'LO 2/2012, Estabilidad Presupuestaria',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2012-5730',
    tag: 'BOE',
  },
  controlInterno: {
    label: 'Real Decreto 424/2017, control interno local',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-5192',
    tag: 'BOE',
  },
  tribunalCuentas: {
    label: 'Ley Orgánica 2/1982, Tribunal de Cuentas',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1982-11584',
    tag: 'BOE',
  },
  lcsp: {
    label: 'Ley 9/2017, Contratos del Sector Publico',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2017-12902',
    tag: 'BOE',
  },
  ljca: {
    label: 'Ley 29/1998, Jurisdicción Contencioso-administrativa',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1998-16718',
    tag: 'BOE',
  },
  ebep: {
    label: 'TREBEP, Estatuto Basico del Empleado Publico',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11719',
    tag: 'BOE',
  },
  et: {
    label: 'Estatuto de los Trabajadores',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11430',
    tag: 'BOE',
  },
  incompatibilidades: {
    label: 'Ley 53/1984, incompatibilidades',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-151',
    tag: 'BOE',
  },
  libertadSindical: {
    label: 'Ley Orgánica 11/1985, Libertad Sindical',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1985-16660',
    tag: 'BOE',
  },
  lgss: {
    label: 'Texto Refundido de la Ley General de la Seguridad Social',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11724',
    tag: 'BOE',
  },
  suelo: {
    label: 'Texto Refundido de la Ley de Suelo y Rehabilitación Urbana',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2015-11723',
    tag: 'BOE',
  },
  urbanismoCyl: {
    label: 'Ley 5/1999, Urbanismo de Castilla y León',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1999-12599',
    tag: 'BOE',
  },
  igualdad: {
    label: 'Ley Orgánica 3/2007, igualdad efectiva',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-6115',
    tag: 'BOE',
  },
  violenciaGenero: {
    label: 'Ley Orgánica 1/2004, violencia de género',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2004-21760',
    tag: 'BOE',
  },
  lgtbi: {
    label: 'Ley 4/2023, personas trans y derechos LGTBI',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-5366',
    tag: 'BOE',
  },
  transparencia: {
    label: 'Ley 19/2013, Transparencia y Buen Gobierno',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12887',
    tag: 'BOE',
  },
  discapacidad: {
    label: 'Texto Refundido de derechos de personas con discapacidad',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2013-12632',
    tag: 'BOE',
  },
  prl: {
    label: 'Ley 31/1995, Prevención de Riesgos Laborales',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292',
    tag: 'BOE',
  },
  lopdgdd: {
    label: 'LO 3/2018, protección de datos y derechos digitales',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673',
    tag: 'BOE',
  },
  rgpd: {
    label: 'Reglamento General de Protección de Datos',
    url: 'https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679',
    tag: 'UE',
  },
  rd203: {
    label: 'Real Decreto 203/2021, actuación electrónica',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-5032',
    tag: 'BOE',
  },
  eni: {
    label: 'Real Decreto 4/2010, Esquema Nacional de Interoperabilidad',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2010-1331',
    tag: 'BOE',
  },
  ens: {
    label: 'Real Decreto 311/2022, Esquema Nacional de Seguridad',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191',
    tag: 'BOE',
  },
  archivo: {
    label: 'Real Decreto 1708/2011, Sistema Espanol de Archivos',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2011-18541',
    tag: 'BOE',
  },
  sedeBurgos: {
    label: 'Sede electrónica del Ayuntamiento de Burgos',
    url: 'https://sede.aytoburgos.es/',
    tag: 'Ayuntamiento',
  },
  webBurgos: {
    label: 'Ayuntamiento de Burgos',
    url: 'https://www.aytoburgos.es/',
    tag: 'Ayuntamiento',
  },
  incibe: {
    label: 'INCIBE, ciberseguridad para ciudadanos y empresas',
    url: 'https://www.incibe.es/',
    tag: 'Oficial',
  },
  ccn: {
    label: 'CCN-CERT, guias y seguridad TIC',
    url: 'https://www.ccn-cert.cni.es/',
    tag: 'Oficial',
  },
  microsoft365: {
    label: 'Soporte oficial de Microsoft 365',
    url: 'https://support.microsoft.com/es-es/microsoft-365',
    tag: 'Oficial',
  },
} satisfies Record<string, NormativeSource>;

export const normativeSourcesBySlug: Record<string, NormativeSource[]> = {
  'grupo-i-tema-01': [S.ce],
  'grupo-i-tema-02': [S.ce, S.leyGobierno],
  'grupo-i-tema-03': [S.ce, S.estatutoCyl, S.lrbrl],
  'grupo-i-tema-04': [S.ce, S.leyGobierno, S.ley40],
  'grupo-i-tema-05': [S.ce, S.lrbrl, S.trrl, S.trlh],
  'grupo-i-tema-06': [S.lrbrl, S.trrl],
  'grupo-i-tema-07': [S.lrbrl, S.rof, S.rofBurgos, S.trlh],
  'grupo-i-tema-08': [S.tue, S.tfue],
  'grupo-i-tema-09': [S.ce, S.estatutoCyl],

  'grupo-ii-tema-01': [S.ce, S.cc, S.ley39, S.ley40, S.lrbrl],
  'grupo-ii-tema-02': [S.ley39, S.ley40, S.lrbrl],
  'grupo-ii-tema-03': [S.ley39, S.ley40, S.lrbrl],
  'grupo-ii-tema-04': [S.ley39, S.ljca, S.lrbrl],
  'grupo-ii-tema-05': [S.ley40, S.ley39, S.lrbrl, S.rof],
  'grupo-ii-tema-06': [S.ce, S.ley39, S.ley40],
  'grupo-ii-tema-07': [S.lcsp, S.lrbrl, S.trlh],
  'grupo-ii-tema-08': [S.ley39, S.ley40, S.lrbrl],
  'grupo-ii-tema-09': [S.lrbrl, S.trrl, S.rof],
  'grupo-ii-tema-10': [S.ce, S.lrbrl, S.lcsp, S.ley40],
  'grupo-ii-tema-11': [S.lrbrl, S.rof, S.rofBurgos],
  'grupo-ii-tema-12': [S.lrbrl, S.ley39, S.trlh, S.rofBurgos],

  'grupo-iii-tema-01': [S.ebep, S.lrbrl, S.trrl, S.et],
  'grupo-iii-tema-02': [S.ebep, S.lrbrl],
  'grupo-iii-tema-03': [S.ebep, S.et, S.incompatibilidades],
  'grupo-iii-tema-04': [S.ce, S.libertadSindical, S.incompatibilidades, S.ebep],
  'grupo-iii-tema-05': [S.lgss, S.ebep],

  'grupo-iv-tema-01': [S.ce, S.trlh, S.lgt, S.lrbrl],
  'grupo-iv-tema-02': [S.trlh, S.rd500, S.loepsf],
  'grupo-iv-tema-03': [S.trlh, S.rd500, S.controlInterno],
  'grupo-iv-tema-04': [S.trlh, S.controlInterno, S.tribunalCuentas],
  'grupo-iv-tema-05': [S.suelo, S.urbanismoCyl, S.lrbrl],

  'grupo-v-tema-01': [S.igualdad, S.violenciaGenero, S.lgtbi],
  'grupo-v-tema-02': [S.transparencia, S.lopdgdd, S.rgpd],
  'grupo-v-tema-03': [S.ley39, S.transparencia, S.discapacidad, S.sedeBurgos],
  'grupo-v-tema-04': [S.ley39, S.rd203, S.sedeBurgos],
  'grupo-v-tema-05': [S.prl, S.ebep],
  'grupo-v-tema-06': [S.rgpd, S.lopdgdd],
  'grupo-v-tema-07': [S.ley39, S.ley40, S.rd203, S.eni, S.ens],
  'grupo-v-tema-08': [S.ley39, S.rd203, S.archivo, S.transparencia, S.lopdgdd],
  'grupo-v-tema-09': [S.ens, S.ccn, S.incibe],
  'grupo-v-tema-10': [S.microsoft365, S.ens, S.ccn],
  'grupo-v-tema-11': [S.incibe, S.ccn, S.ens],
};

export function getNormativeSources(slug: string) {
  return normativeSourcesBySlug[slug] ?? [];
}
