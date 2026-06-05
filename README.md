# Administrativo Burgos 2026

Repositorio especifico para adaptar la app de estudio a la convocatoria de **5 plazas de Administrativo del Ayuntamiento de Burgos**, escala de Administracion General, subescala Administrativa, subgrupo C1, por oposicion libre.

Este repo es la copia de trabajo para Burgos. El repositorio original `oposicion` debe quedar sin tocar mientras se construye aqui el nuevo temario completo.

## Enlaces

- App publicada: https://rodrigodelafuentemarquez.github.io/administrativo-burgos/
- Repositorio original conservado: `rodrigodelafuentemarquez/oposicion`
- Repositorio nuevo: `rodrigodelafuentemarquez/administrativo-burgos`
- Fuente oficial: BOP Burgos num. 95, jueves 21 de mayo de 2026, anuncio BOPBUR-2026-02092.
- PDF revisado: `bopbur-2026-095-anuncio-202602092 (1).pdf`
- Mapeo inicial del temario: `docs/mapeo-temario-burgos.md`

## Objetivo

Convertir la app actual en una preparacion centrada al 100% en esta convocatoria:

- reorganizar el temario en los 5 grupos oficiales;
- crear los 42 temas del programa oficial sin perder el material anterior;
- revisar y rehacer los tests para que correspondan a cada tema oficial;
- preparar una seccion especifica para el segundo ejercicio con supuestos practicos, esquemas, checklist de resolucion y textos legales utilizables;
- preparar una seccion especifica para el tercer ejercicio con esquemas de desarrollo, estructuras de respuesta y entrenamiento de temas escritos.

## Regla de conservacion

No se borra contenido del temario anterior hasta que el nuevo temario Burgos este completo, revisado y probado.

Forma de trabajo recomendada:

1. Mantener el material existente como referencia temporal.
2. Crear o adaptar contenido nuevo por grupos y temas oficiales.
3. Marcar cada tema como `pendiente`, `en adaptacion`, `borrador completo`, `revisado` o `listo para test`.
4. Solo retirar o archivar material antiguo cuando exista equivalente nuevo y revisado.

## Datos de la convocatoria

- Administracion convocante: Ayuntamiento de Burgos.
- Plazas: 5 plazas de Administrativo.
- Turno: libre.
- Distribucion: 4 turno general y 1 cupo de personas con discapacidad.
- Sistema selectivo: oposicion.
- Titulacion: Bachiller, Formacion Profesional de Segundo Grado, Formacion Profesional de Grado Medio o equivalentes.
- Derechos de examen indicados en bases: 16,81 euros.
- Solicitudes: 20 dias habiles desde el dia siguiente a la publicacion de la convocatoria en el BOE.

## Ejercicios

### Primer ejercicio: test

- 70 preguntas.
- 7 preguntas adicionales de reserva.
- Tiempo: 90 minutos, ampliado proporcionalmente por las preguntas de reserva.
- Ambito: todo el programa del Anexo II.
- Formato: 4 respuestas alternativas, una correcta.
- Penalizacion: la respuesta erronea penaliza con 1/4 del valor de la respuesta correcta.
- Pregunta no contestada: no puntua.
- Nota minima: 5 puntos.

Implicacion para la app:

- cada tema oficial debe tener banco de preguntas propio;
- los tests deben poder entrenarse por tema, por grupo y de forma global;
- conviene simular examen de 70 preguntas con penalizacion real;
- hay que tener repeticion de fallos y preguntas dudosas.

### Segundo ejercicio: supuesto practico

- Solo para quienes superen el primer ejercicio.
- Prueba escrita de caracter practico.
- Consiste en resolver uno o varios supuestos propuestos por el tribunal.
- Ambito: grupos III, IV y V del programa.
- Duracion maxima: 4 horas.
- Normativa aplicable: la vigente al tiempo de realizacion del ejercicio.
- Permitido: textos normativos sin comentarios.
- No permitido: manuales.
- Puede acordarse lectura publica.
- El tribunal puede formular preguntas durante un maximo de 5 minutos.

Criterios de valoracion indicados:

- correccion e idoneidad de la solucion propuesta;
- correccion de la aplicacion, interpretacion y argumentacion;
- capacidad de juicio, razonamiento, analisis y sintesis;
- claridad, sencillez y fluidez en la redaccion;
- otros criterios comunicados previamente por el tribunal.

Porcentaje supletorio si el tribunal no fija otro:

- solucion propuesta: 55%;
- aplicacion, interpretacion y argumentacion: 15%;
- juicio, razonamiento, analisis y sintesis: 15%;
- claridad, sencillez y fluidez: 15%.

Implicacion para la app:

- crear seccion `Supuestos practicos`;
- priorizar grupos III, IV y V;
- incluir esquemas de resolucion y modelos de respuesta;
- preparar listado de textos legales sin comentarios que conviene llevar;
- entrenar redaccion clara, pasos, fundamento juridico y conclusion.

### Tercer ejercicio: desarrollo de temas

- Desarrollar por escrito 2 temas del programa.
- Se eligen entre 4 temas extraidos al azar.
- Tiempo maximo: 2 horas.
- De grupos I y II: se extraen 2 temas, se descarta 1 y se desarrolla 1.
- De grupos III, IV y V: se extraen 2 temas, se descarta 1 y se desarrolla 1.
- Las sesiones pueden ser publicas.
- Puede haber dialogo con el tribunal durante maximo 5 minutos.
- Nota minima: 5 puntos.
- Cada tema se califica de 0 a 10.
- No se puede obtener menos de 3 puntos en ninguno de los dos temas.
- La nota final del ejercicio es la media aritmetica de ambos temas.

Criterios de valoracion indicados:

- conocimiento de los temas expuestos;
- orden y estructura;
- capacidad de juicio, razonamiento, analisis y sintesis;
- claridad, sencillez y fluidez.

Porcentaje supletorio si el tribunal no fija otro:

- conocimiento: 55%;
- orden y estructura: 15%;
- juicio, razonamiento, analisis y sintesis: 15%;
- claridad, sencillez y fluidez: 15%.

Implicacion para la app:

- crear seccion `Desarrollo de temas`;
- cada tema debe tener esquema corto, esquema completo y posible guion de desarrollo;
- preparar introducciones y cierres reutilizables;
- entrenar seleccion rapida entre dos temas;
- separar entrenamiento I-II y III-IV-V, igual que el examen.

## Programa oficial

Las referencias normativas se entienden hechas a la normativa actualizada que este en vigor en el momento de la realizacion del ejercicio correspondiente.

### Grupo I: Organizacion del Estado, de la Union Europea, de las entidades locales y de la Comunidad de Castilla y Leon

**Tema I.1.** La Constitucion Espanola (I): estructura. Los principios constitucionales y valores superiores. Derechos y deberes fundamentales: su garantia y suspension.

**Tema I.2.** La Constitucion Espanola (II): la Corona: funciones constitucionales del Rey. Sucesion y regencia. Las Cortes Generales: composicion, atribuciones y funcionamiento. El Gobierno y la Administracion. El Poder Judicial.

**Tema I.3.** La Constitucion Espanola (III): la organizacion territorial del Estado espanol. Las comunidades autonomas: estatutos de autonomia y proceso de constitucion. Distribucion de competencias entre el Estado y las comunidades autonomas.

**Tema I.4.** El Gobierno y la Administracion del Estado, la administracion publica en el Ordenamiento Juridico Espanol.

**Tema I.5.** Las entidades locales: tipologia. Regimen local espanol: contenido y principios generales de la Ley de Bases de Regimen Local y de la Ley de Haciendas Locales.

**Tema I.6.** El municipio: concepto y elementos. El termino municipal. La poblacion: especial referencia al empadronamiento.

**Tema I.7.** La organizacion politica y administrativa del Ayuntamiento de Burgos: el Pleno, el alcalde, los tenientes de alcalde y la Junta de Gobierno Local. La Secretaria General. La Intervencion General. El organo de Gestion Tributaria.

**Tema I.8.** La Union Europea. Las instituciones comunitarias: el Consejo Europeo, el Consejo de la Union Europea, el Parlamento Europeo, la Comision Europea y el Tribunal de Justicia de la Union Europea.

**Tema I.9.** La Comunidad de Castilla y Leon. El Estatuto de Autonomia: estructura, derechos y principios rectores. Competencias de la Comunidad Autonoma de Castilla y Leon. Reforma del Estatuto.

### Grupo II: Derecho y regimen juridico de las Administraciones Publicas

**Tema II.1.** Las fuentes del derecho administrativo. La jerarquia de las fuentes. La ley. Las disposiciones del ejecutivo con fuerza de ley: decreto-ley y decreto legislativo. El reglamento: concepto, clases y limites. Otras fuentes del derecho administrativo.

**Tema II.2.** El acto administrativo: concepto, clases y elementos. Su motivacion y notificacion. Eficacia y validez de los actos administrativos.

**Tema II.3.** El procedimiento administrativo comun: concepto, naturaleza y principios generales. Fases del procedimiento: iniciacion, ordenacion, instruccion y finalizacion. Ejecucion.

**Tema II.4.** La revision de los actos administrativos: revision de oficio. Recursos administrativos: alzada, reposicion y extraordinario de revision. La revocacion y la rectificacion de los actos administrativos. La jurisdiccion contencioso-administrativa: concepto y naturaleza.

**Tema II.5.** El regimen juridico del sector publico: principios de actuacion y funcionamiento. Los organos de las administraciones publicas: especial referencia a los organos colegiados. La atribucion de competencias a los organos administrativos: desconcentracion, delegacion, avocacion, encomienda de gestion, delegacion de firma y suplencia.

**Tema II.6.** La responsabilidad de la administracion publica: caracteres. Los presupuestos de la responsabilidad. Danos resarcibles. La accion de responsabilidad. Especialidades del procedimiento administrativo en materia de responsabilidad. La responsabilidad patrimonial de las autoridades y personal al servicio de las administraciones publicas.

**Tema II.7.** Los contratos del sector publico: tipologia contractual. Las partes en el contrato. El expediente de contratacion. Procedimientos de adjudicacion. Efectos, cumplimiento y extincion de los contratos de las administraciones publicas. La revision de precios y otras alteraciones contractuales. Regimen de invalidez y recursos.

**Tema II.8.** La potestad sancionadora: concepto y significado. Principios del ejercicio de la potestad sancionadora. Especialidades del procedimiento en materia sancionadora. Medidas sancionadoras administrativas. Especial referencia a la potestad sancionadora local.

**Tema II.9.** Los bienes de las entidades locales: concepto, clases. Bienes de dominio publico local. Bienes patrimoniales locales, enajenacion, cesion y utilizacion.

**Tema II.10.** Las formas de actividad administrativa. El servicio publico. Concepto. Evolucion y crisis. Las formas de gestion de los servicios publicos. La remunicipalizacion de los servicios publicos. La iniciativa economica publica y los servicios publicos.

**Tema II.11.** Funcionamiento de los organos colegiados locales. Convocatorias y orden del dia. Requisitos para su constitucion. Votaciones.

**Tema II.12.** Ordenanzas y reglamentos de las entidades locales. Clases. Procedimiento de elaboracion y aprobacion. Los bandos.

### Grupo III: Regimen juridico de los empleados publicos

**Tema III.1.** El personal al servicio de las entidades locales: clases y regimen juridico. Provision de puestos de trabajo en la funcion publica. Los deberes y derechos de los funcionarios. La carrera administrativa. Promocion interna.

**Tema III.2.** Adquisicion y perdida de la condicion de funcionario. Situaciones administrativas de los funcionarios. Supuestos y efectos de cada una de ellas.

**Tema III.3.** El personal laboral al servicio de las administraciones publicas. Seleccion. Derechos, deberes e incompatibilidades.

**Tema III.4.** El derecho de sindicacion y de huelga. Regimen de incompatibilidades.

**Tema III.5.** El texto refundido de la Ley General de la Seguridad Social: disposiciones generales sobre el campo de aplicacion y estructura del sistema de la Seguridad Social. Accion protectora: disposiciones generales.

### Grupo IV: Gestion financiera y urbanismo

**Tema IV.1.** Los tributos locales: principios. La potestad reglamentaria de las entidades locales en materia tributaria: contenido de las ordenanzas fiscales, tramitacion y regimen de impugnacion de los actos de imposicion y ordenacion de tributos.

**Tema IV.2.** El presupuesto: concepto. Los principios presupuestarios. Los creditos presupuestarios: clasificacion. Gastos plurianuales. Las modificaciones presupuestarias: creditos extraordinarios y suplementos de credito. Ampliaciones de credito. Generaciones de credito. Transferencias de credito. Incorporaciones de credito. Anticipos de Tesoreria.

**Tema IV.3.** El procedimiento administrativo de ejecucion del presupuesto de gasto. Organos competentes. Fases del procedimiento y sus documentos contables. Compromisos de gasto para ejercicios posteriores. La ordenacion del pago: concepto y competencia.

**Tema IV.4.** El control del gasto publico. El control interno: la funcion interventora y el control financiero. El control externo realizado por el Tribunal de Cuentas, el Consejo de Cuentas de Castilla y Leon y las Cortes de Castilla y Leon.

**Tema IV.5.** Regimen urbanistico de la propiedad del suelo. Principios. Clasificacion y calificacion del suelo. Competencia urbanistica municipal. Intervencion administrativa en la edificacion y uso del suelo. La licencia urbanistica. Proteccion de la legalidad urbanistica. Infracciones y sanciones urbanisticas.

### Grupo V: Competencias

**Tema V.1.** La Ley Organica 3/2007, de 22 de marzo, para la Igualdad Efectiva entre Mujeres y Hombres. Ley Organica 1/2004, de 28 de diciembre, de Medidas de Proteccion Integral contra la Violencia de Genero. Ley 4/2023, de 28 de febrero, para la Igualdad Real y Efectiva de las Personas Trans y para la Garantia de los Derechos de las Personas LGTBI. Objeto y principios rectores.

**Tema V.2.** La Ley 19/2013, de 9 de diciembre, de Transparencia, Acceso a la Informacion Publica y Buen Gobierno: publicidad activa. Informacion debida. Derecho de acceso a la informacion publica: delimitacion del derecho de acceso y ejercicio del derecho de acceso a la informacion publica.

**Tema V.3.** Atencion al publico. Atencion de personas con discapacidad. Los servicios de informacion administrativa. Informacion general y particular al ciudadano. Iniciativas. Reclamaciones. Quejas. Peticiones.

**Tema V.4.** Las oficinas de asistencia en materia de registros del Ayuntamiento de Burgos: organizacion y funcionamiento. Funciones.

**Tema V.5.** La Ley 31/1995, de 8 de noviembre, de Prevencion de Riesgos Laborales: objeto y ambito de aplicacion. Riesgos y medidas preventivas asociadas al puesto de trabajo a desempenar.

**Tema V.6.** La proteccion de datos personales y su regimen juridico: principios, derechos, responsable y encargado del tratamiento, delegado y autoridades de proteccion de datos. Derechos digitales.

**Tema V.7.** Las nuevas tecnologias en la gestion de las administraciones publicas. La Administracion electronica. El funcionamiento electronico del sector publico.

**Tema V.8.** El concepto de documento. Formacion del expediente. El expediente electronico. El archivo de los documentos administrativos. Clases de archivos y criterios de ordenacion. Archivo electronico de documentos. El acceso a los documentos administrativos: sus limitaciones y formas de acceso.

**Tema V.9.** Informatica basica. Principales componentes de un ordenador. Sistemas operativos: especial referencia a Windows 11. El explorador de Windows 11. Gestion de carpetas y archivos. Nociones basicas de seguridad informatica.

**Tema V.10.** Sistemas ofimaticos colaborativos. Procesadores de textos: Word para Microsoft 365. Hojas de calculo: Excel para Microsoft 365. Funciones y utilidades.

**Tema V.11.** Correo electronico: conceptos elementales y funcionamiento. La red Internet: conceptos elementales y servicios.

## Planning general

### Fase 0: preparacion del repositorio

Estado: en curso.

- [x] Duplicar repo original sin tocar `oposicion`.
- [x] Crear repo GitHub `administrativo-burgos`.
- [x] Activar GitHub Pages.
- [x] Ajustar `astro.config.mjs` a `/administrativo-burgos`.
- [x] Crear README maestro con convocatoria, programa y planning.
- [x] Mostrar la estructura oficial por grupos en la portada.
- [ ] Crear estructura interna definitiva para grupos, temas, supuestos y desarrollos.

### Fase 1: inventario y mapeo del temario actual

Objetivo: saber que material antiguo se puede reutilizar.

- [x] Listar los 48 temas actuales.
- [x] Mapear cada tema actual contra los 42 temas oficiales de Burgos.
- [x] Marcar material reutilizable, material parcial, material sobrante y lagunas.
- [x] Detectar temas nuevos especificos de Burgos: organizacion municipal, oficinas de registro, Windows 11, Microsoft 365, urbanismo, hacienda local, etc.
- [ ] Decidir convencion de nombres para los nuevos temas.

Resultado disponible: tabla de correspondencias en `docs/mapeo-temario-burgos.md`.

### Fase 2: estructura nueva de contenidos

Objetivo: que la app refleje el programa oficial.

- [ ] Crear agrupacion por grupos I, II, III, IV y V.
- [ ] Crear los 42 temas oficiales como nuevas entradas.
- [ ] Mantener el contenido anterior disponible como referencia hasta completar la migracion.
- [ ] Adaptar la pagina principal para mostrar grupos y temas.
- [ ] Adaptar progreso por grupo y por tema.

Resultado esperado: navegacion por grupos oficiales y temas oficiales.

### Fase 3: redaccion y revision del temario

Objetivo: tener temas estudiables, completos y alineados con el PDF.

Prioridad de trabajo:

1. Grupos III, IV y V, porque entran en test, supuesto practico y desarrollo.
2. Grupo II, por peso juridico y utilidad transversal.
3. Grupo I, por test y desarrollo.

Para cada tema:

- [ ] comprobar epigrafes exactos del PDF;
- [ ] revisar normativa vigente;
- [ ] redactar tema base;
- [ ] crear resumen inicial;
- [ ] crear esquema de estudio;
- [ ] crear lista de articulos clave si procede;
- [ ] marcar puntos probables de test;
- [ ] marcar puntos utiles para practico o desarrollo.

Estado por tema:

| Grupo | Temas | Estado |
| --- | ---: | --- |
| I | 9 | Borrador completo: I.1 a I.9 creados |
| II | 12 | Borrador completo: II.1 a II.12 creados |
| III | 5 | Borrador completo: III.1 a III.5 creados |
| IV | 5 | Borrador completo: IV.1 a IV.5 creados |
| V | 11 | Borrador completo: V.1 a V.11 creados |

### Fase 4: tests

Objetivo: que las preguntas correspondan al temario oficial y al formato real.

- [ ] Auditar banco de preguntas actual.
- [ ] Reasignar preguntas validas a temas oficiales.
- [ ] Eliminar o archivar preguntas fuera de programa.
- [ ] Crear preguntas nuevas por tema.
- [ ] Incluir explicacion breve de la respuesta correcta cuando aporte valor.
- [ ] Implementar penalizacion de 1/4 en simulacros.
- [ ] Crear simulacro de 70 preguntas + control de 90 minutos.
- [ ] Crear modo por grupos.
- [ ] Crear modo fallos.

Criterio minimo recomendado:

- 25 preguntas por tema para una primera version;
- 50 preguntas por tema para temas troncales;
- simulacros globales equilibrados por grupos.

### Fase 5: segundo ejercicio, supuestos practicos

Objetivo: preparar la prueba practica de grupos III, IV y V.

Grupos afectados:

- Grupo III: empleados publicos.
- Grupo IV: gestion financiera y urbanismo.
- Grupo V: competencias.

Trabajo necesario:

- [ ] Crear seccion `Supuestos practicos`.
- [ ] Identificar textos legales sin comentarios que conviene llevar.
- [ ] Crear checklist general de resolucion de supuestos.
- [ ] Crear plantillas de respuesta.
- [ ] Crear supuestos por bloques.
- [ ] Crear supuestos mixtos.
- [ ] Crear rubrica propia basada en los criterios del tribunal.

Textos legales candidatos a revisar:

- TREBEP.
- Ley 7/1985, reguladora de las Bases del Regimen Local.
- Real Decreto Legislativo 781/1986.
- Ley 39/2015.
- Ley 40/2015.
- Texto refundido de la Ley Reguladora de las Haciendas Locales.
- Real Decreto 500/1990.
- Ley 9/2017, de Contratos del Sector Publico, si afecta al supuesto.
- Normativa urbanistica estatal y de Castilla y Leon que resulte aplicable.
- Ley 31/1995 de Prevencion de Riesgos Laborales.
- RGPD y Ley Organica 3/2018.
- Ley 19/2013 de transparencia.
- Normativa municipal de Burgos que sea relevante para registros, organizacion o funcionamiento.

Nota: esta lista es inicial. Debe depurarse antes de preparar el material definitivo para llevar al examen.

### Fase 6: tercer ejercicio, desarrollo de temas

Objetivo: poder desarrollar temas escritos con estructura clara en 2 horas.

- [ ] Crear seccion `Desarrollo de temas`.
- [ ] Crear esquema de desarrollo para cada uno de los 42 temas.
- [ ] Preparar guion corto memorizable.
- [ ] Preparar estructura larga para redaccion.
- [ ] Crear introduccion y cierre por tema.
- [ ] Marcar articulos y conceptos imprescindibles.
- [ ] Entrenar seleccion entre dos temas.
- [ ] Crear simulacros: 1 tema de grupos I-II + 1 tema de grupos III-IV-V.

Formato recomendado por tema:

- mapa del tema;
- epigrafes oficiales;
- apertura posible;
- desarrollo ordenado;
- articulos clave;
- errores a evitar;
- cierre posible;
- version ultracorta para repaso final.

### Fase 7: ajustes de app y publicacion

Objetivo: que la web sea comoda para estudiar y no solo un almacen de textos.

- [ ] Navegacion por grupos.
- [ ] Vista por ejercicio: test, practico, desarrollo.
- [ ] Progreso separado por tema, grupo y ejercicio.
- [ ] Etiquetas de prioridad.
- [ ] Estado de preparacion de cada tema.
- [ ] Buscador.
- [ ] Publicacion continua en GitHub Pages.

## Estructura tecnica actual

- `src/pages`: paginas de la app.
- `src/components`: componentes de interfaz.
- `src/content/temas`: temas markdown actuales.
- `data/tests`: banco de preguntas actual.
- `public/data/tests`: copia publica del banco de tests.
- `docs`: documentacion auxiliar.
- `.github/workflows/deploy.yml`: despliegue en GitHub Pages.

## Scripts

- `npm run dev`: entorno local.
- `npm run build`: prepara datos y compila Astro.
- `npm run preview`: previsualiza el build.
- `npm run import:temario -- /ruta/temario.txt`: importa temario desde archivo.
- `npm run import:temario -- /ruta/temario.txt --with-tests`: importa temario y genera JSON de tests.
- `npm run prepare:data`: copia `data/tests` a `public/data/tests`.

## GitHub Pages

La app esta configurada para publicarse en:

https://rodrigodelafuentemarquez.github.io/administrativo-burgos/

Configuracion aplicada:

- `base: "/administrativo-burgos"` en `astro.config.mjs`.
- `site: "https://rodrigodelafuentemarquez.github.io"` en `astro.config.mjs`.
- workflow de GitHub Actions en `.github/workflows/deploy.yml`.

## Acceso

La app mantiene una pantalla de acceso en frontend. Es una ocultacion basica, no seguridad real.

- Usuario: `rodrigo`
- Contrasena: `xof13odi`

Para cerrar sesion manualmente, eliminar la clave `oposicion-access-ok-v1` del `localStorage`.
