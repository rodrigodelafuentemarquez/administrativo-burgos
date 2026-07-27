# Revisión continua del temario

## 27 de julio de 2026, 09:36 (Europe/Madrid)

- **Tema revisado:** I.1, Constitución Española (I). **Estado real: requiere segunda revisión profunda obligatoria.**
- **Archivos tocados:** `src/content/programa/grupo-i-tema-01.md`, `data/tests/tema-01.json`, `public/data/tests/tema-01.json`, `public/data/tests/index.json` y este registro.
- **Mejoras realizadas:** el tema pasa a estado `revisado`; se corrige una errata visible, se añade un esquema final, diferencias entre garantías y errores típicos sobre los artículos 9, 21, 53 y 55. **Diagnóstico posterior:** la pasada fue demasiado rápida y no debe considerarse suficiente para cerrar el tema.
- **Tests añadidos/cambiados:** se añaden 2 preguntas sobre el artículo 9.3 y la protección de los principios rectores; se sincroniza la copia pública.
- **Verificación:** `npm run prepare:data` y `npm run build` completados correctamente (101 páginas).
- **Commit realizado:** `8ba0a85` (`mejora tema I.1 Constitución Española`), subido a `origin/main`.
- **Siguiente tema sugerido:** volver a I.1 antes de pasar a I.2. La siguiente ejecución debe hacer una segunda vuelta profunda: ampliar explicación, revisar estructura completa, reforzar subrayados manuales solo donde proceda, añadir cuadros/tablas útiles y aumentar o mejorar tests si faltan puntos clave del título oficial.

## 27 de julio de 2026, 09:45 (Europe/Madrid)

- **Tema revisado:** I.1, Constitución Española (I). **Estado real: revisión profunda completada; queda cerrado salvo actualización normativa posterior.**
- **Diagnóstico inicial:** el contenido anterior tenía una base correcta, pero era demasiado resumido para una segunda vuelta: faltaba una estructura pedagógica completa del Título I, una distinción más precisa entre las garantías del artículo 53, el papel del artículo 81 y la enumeración exacta de derechos suspendibles del artículo 55.1. También había formulaciones genéricas y subrayado manual excesivo en varios párrafos.
- **Archivos leídos relevantes:** `README.md`, `docs/mapeo-temario-burgos.md`, este registro, `src/content/programa/grupo-i-tema-01.md`, `src/content/temas/tema-01.md`, `src/content/temas/tema-02.md`, `data/tests/index.json`, `data/tests/tema-01.json` y `src/utils/rehypeStudyHighlights.mjs`. Se contrastaron los artículos constitucionales relevantes con el texto consolidado del BOE, última actualización publicada el 20/05/2026.
- **Archivos tocados:** `src/content/programa/grupo-i-tema-01.md`, `data/tests/tema-01.json`, `public/data/tests/tema-01.json` y este registro.
- **Mejoras realizadas:** reestructuración sustantiva en ocho bloques; cobertura explícita de todos los epígrafes oficiales; tabla de títulos y capítulos del Título I; cuadro artículo-concepto de derechos; explicación diferenciada de igualdad formal/material, ley orgánica, tutela preferente y sumaria, amparo, Defensor del Pueblo y principios rectores; lista completa y exacta del artículo 55.1; suspensión individual del artículo 55.2; conexión con la reforma constitucional; casos breves, esquema final y tabla de errores típicos. Se corrigieron acentos y se redujeron marcas manuales a reglas nucleares, respetando el motor `rehypeStudyHighlights`.
- **Tests añadidos/cambiados:** se añadieron 8 preguntas nuevas (`burgos-i01-deep-01` a `burgos-i01-deep-08`) sobre artículo 55.1, ley orgánica, reunión, amparo, igualdad, suspensión individual, reforma ordinaria y detención preventiva. Se mantuvieron las 28 preguntas existentes sin duplicados; el banco queda en 36 preguntas y se sincronizó la copia pública.
- **Verificación ejecutada:** `npm run prepare:data`, comprobación de igualdad entre JSON editable y público, `git diff --check` y `npm run build` completados correctamente (101 páginas).
- **Commit realizado:** pendiente de commit y push en esta ejecución.
- **Siguiente tema sugerido:** I.2, Constitución Española (II), salvo que una revisión posterior detecte cambios oficiales en el texto constitucional.
