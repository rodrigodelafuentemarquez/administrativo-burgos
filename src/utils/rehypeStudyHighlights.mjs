const SKIP_TAGS = new Set(['a', 'code', 'pre', 'script', 'style', 'mark']);

const HIGHLIGHT_RULES = [
  {
    className: 'study-mark-law',
    pattern:
      /\b(?:art(?:i|í)culo|art(?:i|í)culos|arts?\.?)\s+\d+(?:\.\d+)?(?:\s*(?:a|al|y|,|-)\s*\d+(?:\.\d+)?)*\b|\b(?:Ley|Ley Organica|Ley Org[aá]nica|Real Decreto Legislativo|Real Decreto-ley|Real Decreto|Decreto Legislativo|Decreto|Reglamento|Constitucion Espanola|Constituci[oó]n Espa[nñ]ola|Estatuto de Autonomia|Estatuto de Autonom[ií]a|Tratado de la Union Europea|Tratado de la Uni[oó]n Europea|Carta de Derechos Fundamentales)\s+\d+(?:\/\d{4})?(?:,\s*de\s*\d{1,2}\s+de\s+[A-Za-záéíóúñ]+)?|\b(?:Ley Organica|Ley Org[aá]nica|Constitucion Espanola|Constituci[oó]n Espa[nñ]ola|Estatuto de Autonomia|Estatuto de Autonom[ií]a)\b|\b(?:Titulo|T[ií]tulo|Capitulo|Cap[ií]tulo|Seccion|Secci[oó]n)\s+[IVXLCDM\d]+\b/iu,
  },
  {
    className: 'study-mark-date',
    pattern:
      /\b\d{1,2}\s+de\s+[A-Za-záéíóúñ]+\s+de\s+\d{4}\b|\b\d{1,2}\s+de\s+[A-Za-záéíóúñ]+\b|\b\d{4}\b|\b(?:\d+|uno|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|quince|veinte|veinticinco|treinta|cuarenta y ocho|sesenta|noventa)\s+(?:dias|d[ií]as|horas|mes|meses|anos|a[nñ]os)\b|\b(?:mayoria absoluta|mayor[ií]a absoluta|mayoria simple|mayor[ií]a simple|dos tercios|tres quintos)\b/iu,
  },
  {
    className: 'study-mark-key',
    pattern:
      /\b(?:Ayuntamiento|Alcalde|Alcaldesa|Pleno|Junta de Gobierno Local|Tenientes de Alcalde|Secretaria General|Intervencion General|Organo de Gestion Tributaria|Cortes Generales|Congreso de los Diputados|Senado|Gobierno|Administracion Publica|Administraciones Publicas|Tribunal Constitucional|Tribunal Supremo|Poder Judicial|Consejo General del Poder Judicial|Ministerio Fiscal|Defensor del Pueblo|Rey|Corona|Comunidades Autonomas|Estado|municipios|provincias|entidades locales|Union Europea|Consejo Europeo|Consejo de la Union Europea|Parlamento Europeo|Comision Europea|Tribunal de Justicia de la Union Europea|Castilla y Leon|Junta de Castilla y Leon|soberania nacional|Estado social y democratico de Derecho|monarquia parlamentaria|pluralismo politico|seguridad juridica|jerarquia normativa|legalidad|interdiccion de la arbitrariedad|igualdad|libertad|justicia|derechos fundamentales|libertades publicas|principios rectores|recurso de amparo|ley organica|potestad reglamentaria|competencia|delegacion|avocacion|desconcentracion|descentralizacion|encomienda de gestion|notificacion|acto administrativo|procedimiento administrativo|silencio administrativo|recursos administrativos|responsabilidad patrimonial|contratos del sector publico|potestad sancionadora|bienes de dominio publico|bienes patrimoniales|funcionario|personal laboral|carrera administrativa|promocion interna|incompatibilidades|Seguridad Social|presupuesto|credito presupuestario|funcion interventora|control financiero|ordenanzas fiscales|urbanismo|licencia urbanistica|transparencia|publicidad activa|oficina de asistencia en materia de registros|proteccion de datos|responsable del tratamiento|encargado del tratamiento|delegado de proteccion de datos|Administracion electronica|expediente electronico|archivo electronico|Windows 11|Word|Excel|correo electronico|Internet|phishing|HTTPS)\b/iu,
  },
];

function findNextMatch(value, startIndex) {
  let best = null;

  for (const rule of HIGHLIGHT_RULES) {
    const source = rule.pattern.source;
    const flags = rule.pattern.flags.includes('g') ? rule.pattern.flags : `${rule.pattern.flags}g`;
    const pattern = new RegExp(source, flags);
    pattern.lastIndex = startIndex;
    const match = pattern.exec(value);

    if (!match || match.index < startIndex) continue;

    if (
      !best ||
      match.index < best.index ||
      (match.index === best.index && match[0].length > best.text.length)
    ) {
      best = {
        index: match.index,
        text: match[0],
        className: rule.className,
      };
    }
  }

  return best;
}

function highlightTextNode(node) {
  const value = node.value;
  if (!value || value.trim().length < 2) return [node];

  const children = [];
  let cursor = 0;

  while (cursor < value.length) {
    const match = findNextMatch(value, cursor);

    if (!match) {
      children.push({ type: 'text', value: value.slice(cursor) });
      break;
    }

    if (match.index > cursor) {
      children.push({ type: 'text', value: value.slice(cursor, match.index) });
    }

    children.push({
      type: 'element',
      tagName: 'mark',
      properties: { className: ['study-mark', match.className] },
      children: [{ type: 'text', value: match.text }],
    });

    cursor = match.index + match.text.length;
  }

  return children;
}

function walk(node, parentTagName) {
  if (!node || !node.children || SKIP_TAGS.has(parentTagName)) return;

  const nextChildren = [];
  for (const child of node.children) {
    if (child.type === 'text') {
      nextChildren.push(...highlightTextNode(child));
      continue;
    }

    walk(child, child.tagName);
    nextChildren.push(child);
  }

  node.children = nextChildren;
}

export default function rehypeStudyHighlights() {
  return (tree) => {
    walk(tree);
  };
}
