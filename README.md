# Administrativo Burgos 2026

Repositorio de estudio para la convocatoria de **5 plazas de Administrativo del Ayuntamiento de Burgos**.  
Este proyecto es la rama de trabajo específica para Burgos; el repo antiguo `oposicion` queda como referencia separada.

## Enlaces

- Web publicada: <https://rodrigodelafuentemarquez.github.io/administrativo-burgos/>
- Repo: `rodrigodelafuentemarquez/administrativo-burgos`
- Repo base conservado: `rodrigodelafuentemarquez/oposicion`
- Bases BOP Burgos: `public/convocatoria/bases-administrativo-burgos-2026-bop.pdf`
- Anexo 1 instancia: `public/convocatoria/anexo-1-instancia-administrativo-burgos-2026.pdf`
- Mapeo de temario: `docs/mapeo-temario-burgos.md`
- Mapeo de tests reales: `docs/mapeo-tests-reales.md`

## Objetivo real del proyecto

La app ya no está en fase de “copiar el temario viejo”. Ahora mismo el objetivo es:

- trabajar con el **programa oficial de Burgos** como estructura principal;
- usar los tests por tema como herramienta diaria;
- preparar también el **2º ejercicio** y el **3º ejercicio**;
- mantener la convocatoria y la documentación útil dentro de la propia app;
- seguir afinando calidad: temario, tests, ortografía, UX móvil y navegación.

## Estado actual

Ahora mismo el proyecto ya tiene:

- portada adaptada a Burgos;
- bloque de seguimiento de convocatoria;
- temario oficial en `/programa`;
- temario anterior en `/temas` como referencia heredada;
- tests por tema;
- simulación, fallos, dudosas y progreso;
- sección de supuestos prácticos;
- sección de desarrollo de temas;
- favicon e identidad visual propia;
- despliegue en GitHub Pages.

## Estructura funcional de la web

### 1. Inicio

Ruta: `/`

Es la portada principal del proyecto Burgos. Desde aquí se entra al programa oficial, tests, ejercicios y seguimiento de convocatoria.

### 2. Convocatoria

Ruta: `/convocatoria`

Incluye:

- resumen de la convocatoria;
- enlaces oficiales;
- bases en PDF;
- anexo 1;
- checklist de inscripción;
- recordatorio de tasa, plazos y seguimiento.

### 3. Programa oficial

Ruta base: `/programa/...`

Es el bloque principal de estudio actual.  
La colección está en `src/content/programa`.

Cada tema oficial tiene:

- `grupo`
- `tema`
- `codigo`
- `titulo`
- `estado`

Estados actuales permitidos:

- `borrador`
- `en revision`
- `revisado`

### 4. Temario heredado

Ruta base: `/temas/...`

Sigue existiendo como referencia histórica y apoyo, pero **la estructura buena para Burgos es `/programa`**.

### 5. Tests

Ruta: `/test`

Funciones actuales:

- selección de temas;
- modo práctica;
- simulacro oficial;
- repaso inteligente;
- mezcla de respuestas;
- protección frente a preguntas cuyo orden no debe alterarse;
- guardado de fallos;
- guardado de progreso.

Los tests públicos se sirven desde:

- `data/tests`
- `public/data/tests`

`public/data/tests` se regenera con el script `prepare:data`.

### 6. Fallos

Ruta: `/fallos`

Repaso de preguntas falladas, con prioridad para fallos recurrentes.

### 7. Dudosas

Ruta: `/dudosas`

Permite marcar preguntas para revisarlas después en bloque.

### 8. Progreso

Ruta: `/progreso`

Muestra:

- nivel actual por tema;
- histórico acumulado;
- tendencia reciente;
- reinicio de progreso;
- vaciado de fallos.

Importante: el progreso actual usa estas claves de `localStorage`:

- `oposicion-stats-v3`
- `oposicion-fallos-v3`
- `oposicion-dudosas-v1`

### 9. Segundo ejercicio

Ruta: `/practico`

Incluye:

- bloques prioritarios;
- supuestos prácticos;
- checklist de resolución;
- textos legales útiles;
- enfoque orientado a grupos III, IV y V.

### 10. Tercer ejercicio

Ruta: `/desarrollo`

Incluye:

- temas priorizados para desarrollo;
- esquemas y ayudas de estudio;
- separación práctica entre bloques I-II y III-IV-V.

## Estructura técnica

### Directorios principales

- `src/pages`: páginas Astro
- `src/layouts`: layout principal
- `src/components`: componentes reutilizables
- `src/content/programa`: temario oficial Burgos
- `src/content/temas`: temario heredado
- `src/data`: datos auxiliares de programa, ayudas, normativa, supuestos
- `src/utils/storage.ts`: persistencia de progreso, fallos y dudosas
- `data/tests`: banco de tests editable
- `public/data/tests`: copia pública consumida por la app
- `public/convocatoria`: PDFs de bases y anexo
- `docs`: documentación de mapeos
- `scripts`: utilidades de importación, remapeo, limpieza y refuerzo de tests

### Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run prepare:data
```

Y además existen scripts auxiliares no encadenados al build:

- `scripts/remap-tests-to-burgos.mjs`
- `scripts/top-up-tests-to-minimum.mjs`
- `scripts/refine-priority-tests.mjs`
- `scripts/add-pdf-exam-questions.mjs`
- `scripts/fix-visible-accents.mjs`

## Navegación y UX

Detalles ya resueltos en el estado actual:

- menú superior con estado `active` por ruta;
- sidebar izquierdo con estado `active` real;
- marca superior con imagen del favicon y texto `Administrativo Burgos`;
- favicon preparado;
- ajustes de responsive y scroll en móvil;
- service worker antiguo en proceso de autolimpieza para evitar cachés viejas.

## Convocatoria: recordatorio rápido

Datos importantes ya integrados en la app:

- 5 plazas de Administrativo;
- Ayuntamiento de Burgos;
- sistema de oposición;
- 20 días hábiles desde el día siguiente a la publicación en BOE;
- tasa indicada en bases: `16,81 €`;
- seguimiento y enlaces oficiales en `/convocatoria`.

## Relación entre contenido y app

La lógica buena del proyecto hoy es esta:

1. **`/programa`** es el temario oficial actual.
2. **`data/tests`** contiene el banco de preguntas real que se usa en la app.
3. **`public/data/tests`** es solo la copia servida al navegador.
4. **`/temas`** queda como material de apoyo, no como estructura principal.

## Qué conviene revisar al abrir una conversación nueva

Si se retoma el proyecto en otro hilo, lo más útil es revisar primero:

1. este `README`;
2. `src/layouts/Layout.astro`;
3. `src/components/TestRunner.astro`;
4. `src/utils/storage.ts`;
5. `src/data/burgosSyllabus.ts`;
6. `src/pages/index.astro`;
7. `src/pages/convocatoria.astro`;
8. `src/pages/practico.astro`;
9. `src/pages/desarrollo.astro`;
10. `docs/mapeo-temario-burgos.md`.

## Trabajo pendiente más natural

Ahora mismo, los siguientes bloques lógicos de mejora son:

- segunda pasada de calidad sobre los tests;
- más limpieza de ortografía y redacción en preguntas heredadas;
- revisión tema a tema de enlaces normativos y consistencia visual;
- seguir reforzando supuestos prácticos;
- mejorar experiencia móvil y caché cuando aparezcan detalles.

## Nota práctica

El usuario normalmente ve la web en GitHub Pages, no en local.  
Por tanto, cuando se cierre un bloque de trabajo, lo correcto es:

1. comprobar `npm run build`;
2. hacer `commit`;
3. hacer `push` a `main`;
4. dar por válido el cambio cuando quede reflejado en GitHub Pages.
