# Oposición Administrativo - Diputación Provincial de Burgos

PWA de estudio construida con **Astro + TypeScript** (sin backend), con:
- estudio por temas
- tests aleatorios por tema
- repetición de fallos
- progreso por tema en `localStorage`

## Fuente del temario

Se ha usado como fuente única el Google Docs indicado:
- [Documento](https://docs.google.com/document/d/1sPmZZBEDdNv5xyo6PYaBthMXQUvPTAL80imsBZPsavU/edit?usp=sharing)

## Estructura

- `src/pages`: páginas (`/`, `/test`, `/fallos`, `/progreso`, `/temas/[slug]`)
- `src/components`: `Layout`, `TemaCard`, `TestRunner`, `QuestionCard`, `ResultSummary`
- `src/content/temas`: markdown generado por tema
- `data/tests`: banco de preguntas por tema
- `public/data/tests`: copia pública para consumo en cliente
- `public/manifest.webmanifest` + `public/sw.js`: PWA básica

## Scripts

- `npm run dev`: entorno local
- `npm run import:temario -- /ruta/temario.txt`: importa el temario y regenera solo temas
- `npm run import:temario -- /ruta/temario.txt --with-tests`: genera también JSON de tests
- `npm run prepare:data`: copia `data/tests` a `public/data/tests`
- `npm run build`: prepara datos y compila Astro

## Importar/actualizar temario

1. Exporta el Google Docs a `.txt` o `.md`.
2. Ejecuta:

```bash
npm run import:temario -- /ruta/al/temario.txt
npm run prepare:data
```

3. Arranca con `npm run dev`.

Si en algún momento no puedes acceder al documento, no inventes contenido: mantén estructura y usa este flujo de importación con archivo local (recomendado `.md` o `.txt`).

## GitHub Pages

La app está preparada para publicarse en `https://<usuario>.github.io/oposicion/`.

Configuración aplicada:
- `base: "/oposicion"` en `astro.config.mjs`
- workflow en `.github/workflows/deploy.yml`

Solo necesitas:
1. Subir repositorio a GitHub.
2. Activar GitHub Pages con **GitHub Actions** como source.
3. Hacer push a `main`.

## Accesibilidad y UX

- diseño mobile-first
- modo claro/oscuro según sistema
- controles nativos accesibles (`fieldset`, `label`, `button`, `select`)

## Criterio editorial

- Los esquemas y resúmenes del temario no deben quedarse en bloques ASCII o de texto monoespaciado.
- Cuando un tema traiga árboles, organigramas o resúmenes tipo `├──`, hay que convertirlos a listas jerárquicas legibles en web usando el patrón visual de `study-list`.

## Protección básica (ocultación)

La app incluye una pantalla de acceso en frontend (solo ocultación, no seguridad real).

- Usuario: `rodrigo`
- Contraseña: `xof13odi`

Se guarda sesión local en `localStorage`.  
Para cerrar sesión manualmente, elimina la clave `oposicion-access-ok-v1` desde el navegador.
