---
tema: 39
titulo: "Bases de datos: Access 365. Principales funciones y utilidades. Tablas. Consultas. Formularios. Informes. Relaciones. Importación, vinculación y exportación de datos. Correo electrónico: Outlook 365. Conceptos elementales y funcionamiento. Enviar, recibir, responder y reenviar mensajes. Reglas de mensaje. Libreta de direcciones."
---

> **Referencia del programa:** Adams 2026. Versión de referencia: **Microsoft 365** (Access y Outlook en su versión de suscripción).

---

## PARTE I — ACCESS 365

## 1. CONCEPTO Y FUNCIONES PRINCIPALES DE ACCESS 365

### 1.1 Qué es una base de datos

Una **base de datos** es un conjunto organizado de información estructurada, almacenada electrónicamente, que permite gestionar grandes volúmenes de datos de forma eficiente: almacenarlos, consultarlos, filtrarlos, ordenarlos, modificarlos y producir informes a partir de ellos.

La diferencia fundamental entre una hoja de cálculo (Excel) y una base de datos (Access) es que Access permite gestionar datos **relacionados entre sí** que se distribuyen en múltiples tablas vinculadas, evitando la redundancia y garantizando la integridad de la información.

### 1.2 Qué es Microsoft Access

**Microsoft Access** es el sistema de gestión de bases de datos relacionales (SGBDR) de escritorio incluido en Microsoft 365. Está orientado a usuarios no especializados en programación que necesitan gestionar datos estructurados en un entorno de oficina.

Access combina en una sola aplicación:
- El motor de base de datos (almacenamiento de datos en tablas relacionadas).
- La interfaz visual para crear y gestionar los objetos de la base de datos (tablas, consultas, formularios, informes).
- Un lenguaje de consulta (SQL, accesible de forma visual mediante el diseño de consultas).
- Un entorno de programación (Visual Basic for Applications — VBA) para automatizar tareas.

El archivo de Access tiene extensión **.accdb** (Access Database).

### 1.3 Los objetos de Access

Una base de datos de Access se compone de los siguientes **objetos**:

| Objeto | Función |
|---|---|
| **Tablas** | Almacenan los datos organizados en filas (registros) y columnas (campos) |
| **Consultas** | Permiten buscar, filtrar, ordenar y calcular datos de una o varias tablas |
| **Formularios** | Interfaces visuales para introducir, ver y editar datos de forma cómoda |
| **Informes** | Presentan los datos formateados para su impresión o exportación |
| **Macros** | Secuencias de acciones automatizadas que se ejecutan sin programación |
| **Módulos** | Código VBA para automatización avanzada |

Todos los objetos se gestionan desde el **Panel de navegación**, situado en la parte izquierda de la ventana de Access.

### 1.4 La interfaz de Access 365

La interfaz de Access sigue la estructura de la cinta de opciones común a Microsoft 365, con las siguientes fichas principales:

| Ficha | Contenido |
|---|---|
| **Inicio** | Vistas, portapapeles, ordenar y filtrar, registros, buscar |
| **Crear** | Creación de nuevos objetos: tablas, consultas, formularios, informes, macros |
| **Datos externos** | Importación, vinculación y exportación de datos |
| **Herramientas de base de datos** | Relaciones, analizar, mover datos, macros |

---

## 2. TABLAS

### 2.1 Concepto

La **tabla** es el objeto fundamental de Access: es donde se almacenan los datos. Cada tabla representa una entidad (por ejemplo: Empleados, Expedientes, Municipios) y se organiza en:

- **Registros (filas):** cada fila es un elemento individual de la tabla (un empleado, un expediente, un municipio).
- **Campos (columnas):** cada columna es una característica o atributo de los registros (nombre, apellidos, fecha de nacimiento, DNI…).

### 2.2 Tipos de datos de los campos

Al crear una tabla, cada campo debe tener asignado un **tipo de datos** que determina qué información puede almacenar:

| Tipo de datos | Descripción | Uso típico |
|---|---|---|
| **Texto corto** | Cadena de caracteres de hasta 255 caracteres | Nombre, apellidos, dirección, código postal |
| **Texto largo** | Texto de longitud ilimitada | Observaciones, descripciones largas |
| **Número** | Valores numéricos (entero, entero largo, simple, doble…) | Cantidades, edades, códigos numéricos |
| **Fecha/Hora** | Valores de fecha y hora | Fecha de nacimiento, fecha de alta |
| **Moneda** | Valores monetarios con alta precisión | Importes económicos |
| **Autonumérico** | Número entero que se incrementa automáticamente; suele usarse como clave principal | ID de registro |
| **Sí/No** | Valor booleano (verdadero/falso, sí/no, activado/desactivado) | Activo/inactivo, aprobado/rechazado |
| **Objeto OLE** | Imagen, documento u otro objeto vinculado | Fotos, archivos adjuntos |
| **Hipervínculo** | Dirección web o correo electrónico | URL, email |
| **Datos adjuntos** | Archivos adjuntos a un registro | Documentos, imágenes |
| **Calculado** | Campo cuyo valor se calcula a partir de otros campos | Totales, concatenaciones |

### 2.3 La clave principal (Primary Key)

La **clave principal** (o clave primaria) es el campo o conjunto de campos que identifica de forma **única e inequívoca** cada registro de la tabla. No puede haber dos registros con el mismo valor en la clave principal, y el campo clave no puede estar vacío (valor nulo).

Access recomienda definir una clave principal para cada tabla. El campo de tipo **Autonumérico** es la opción más habitual para la clave principal, ya que Access asigna automáticamente un número único a cada nuevo registro.

### 2.4 Vistas de la tabla

- **Vista Hoja de datos:** muestra los datos de la tabla en formato de cuadrícula (filas y columnas), similar a una hoja de cálculo. Permite visualizar, introducir y editar registros directamente.
- **Vista Diseño:** permite definir y modificar la estructura de la tabla: campos, tipos de datos y propiedades de cada campo. En esta vista no se ven los datos, solo la estructura.

### 2.5 Propiedades de campo

En la Vista Diseño, cada campo tiene una serie de **propiedades** que controlan su comportamiento:

| Propiedad | Descripción |
|---|---|
| **Tamaño del campo** | Número máximo de caracteres (para Texto corto) o rango de valores numéricos |
| **Formato** | Cómo se muestran los datos al usuario (ej. dd/mm/aaaa para fechas) |
| **Máscara de entrada** | Patrón de entrada que facilita y valida la introducción de datos (ej. 00000 para un código postal de 5 dígitos) |
| **Título** | Etiqueta que se muestra en los formularios e informes en lugar del nombre del campo |
| **Valor predeterminado** | Valor que se introduce automáticamente cuando se crea un nuevo registro |
| **Regla de validación** | Condición que debe cumplir el dato introducido (ej. >0 para que solo acepte números positivos) |
| **Texto de validación** | Mensaje de error que se muestra cuando no se cumple la regla de validación |
| **Requerido** | Si es Sí, el campo no puede dejarse vacío |
| **Indexado** | Si es Sí, Access crea un índice para acelerar las búsquedas por ese campo; puede ser con o sin duplicados |

---

## 3. RELACIONES

### 3.1 Concepto de relación

Las **relaciones** son los vínculos que se establecen entre tablas de la base de datos a través de campos comunes, permitiendo combinar datos de varias tablas en consultas, formularios e informes. Las relaciones son la característica fundamental que diferencia una base de datos relacional de una simple hoja de cálculo.

Se accede al panel de relaciones desde **Herramientas de base de datos → Relaciones**.

### 3.2 Tipos de relaciones

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Uno a uno (1:1)** | Un registro de la tabla A se relaciona con un único registro de la tabla B, y viceversa | Empleado ↔ Nómina (cada empleado tiene una sola nómina mensual y cada nómina pertenece a un solo empleado) |
| **Uno a varios (1:N)** | Un registro de la tabla A puede relacionarse con varios registros de la tabla B, pero cada registro de B solo se relaciona con uno de A | Departamento (1) ↔ Empleados (N): un departamento tiene varios empleados, pero cada empleado pertenece a un solo departamento |
| **Varios a varios (M:N)** | Un registro de A puede relacionarse con varios de B, y viceversa. Se implementa mediante una **tabla intermedia** o tabla de unión | Alumnos (M) ↔ Cursos (N): un alumno puede estar en varios cursos y un curso puede tener varios alumnos |

La relación más habitual en bases de datos de gestión es la **uno a varios (1:N)**.

### 3.3 Integridad referencial

La **integridad referencial** es un conjunto de reglas que garantiza la coherencia de los datos entre tablas relacionadas. Al activarla en una relación de Access, el sistema impide:

- Introducir en la tabla del lado «varios» (tabla secundaria) un valor en el campo de relación que no exista en la tabla del lado «uno» (tabla principal).
- Eliminar un registro de la tabla principal si tiene registros relacionados en la tabla secundaria.
- Cambiar el valor de la clave principal en la tabla principal si hay registros relacionados.

Al activar la integridad referencial pueden habilitarse opciones adicionales:
- **Actualizar en cascada los campos relacionados:** si cambia la clave principal en la tabla principal, se actualizan automáticamente todos los registros relacionados.
- **Eliminar en cascada los registros relacionados:** si se elimina un registro en la tabla principal, se eliminan automáticamente todos sus registros relacionados.

---

## 4. CONSULTAS

### 4.1 Concepto

Las **consultas** son preguntas que se hacen a la base de datos para obtener información. Permiten seleccionar, filtrar, ordenar y calcular datos de una o varias tablas, mostrando solo los registros y campos que cumplen los criterios especificados. Los datos originales en las tablas no se modifican al ejecutar una consulta de selección.

### 4.2 Tipos de consultas

| Tipo | Descripción |
|---|---|
| **Consulta de selección** | El tipo más habitual. Recupera y muestra datos de una o varias tablas según los criterios definidos |
| **Consulta de parámetros** | Solicita al usuario que introduzca un valor (parámetro) cada vez que se ejecuta, para filtrar los resultados dinámicamente |
| **Consulta de totales** | Agrupa registros y calcula totales, promedios, máximos, mínimos u otras funciones de agregado por grupo |
| **Consulta de tabla de referencias cruzadas** | Muestra los resultados en formato de tabla con encabezados de fila y columna (similar a una tabla dinámica de Excel) |
| **Consulta de acción** | Modifica los datos de la base de datos: puede añadir registros (consulta de datos anexados), eliminarlos (consulta de eliminación), actualizarlos (consulta de actualización) o crear una nueva tabla (consulta de creación de tabla) |

### 4.3 El diseño de consultas (QBE)

Access permite diseñar consultas de forma visual mediante la cuadrícula **QBE** (Query By Example — Consulta por Ejemplo), en la **Vista Diseño** de la consulta:

- La parte superior muestra las tablas (o consultas) de origen con sus campos.
- La parte inferior es la cuadrícula donde se arrastran los campos que se quieren mostrar.
- Para cada campo se puede especificar: si se muestra o no, el criterio de filtrado, y el orden (ascendente o descendente).

Los **criterios** en la cuadrícula QBE permiten filtrar registros:

| Criterio | Significado | Ejemplo |
|---|---|---|
| «Burgos» | Igual a "Burgos" | Municipio = "Burgos" |
| No «Burgos» | Distinto de "Burgos" | — |
| >1000 | Mayor que 1000 | — |
| Entre 100 Y 500 | En el rango [100, 500] | — |
| Cómo «M*» | Texto que empieza por M | Todos los nombres que empiezan por M |
| Es Nulo | El campo está vacío | — |
| Es No Nulo | El campo no está vacío | — |
| En (1;3;5) | El valor es 1, 3 o 5 | — |

Criterios en la **misma fila** de la cuadrícula se combinan con **Y** (AND); criterios en **filas distintas** se combinan con **O** (OR).

Access genera automáticamente el código **SQL** correspondiente a la consulta diseñada visualmente, visible desde la Vista SQL.

---

## 5. FORMULARIOS

### 5.1 Concepto

Los **formularios** son interfaces gráficas diseñadas para facilitar la **introducción, visualización y edición** de datos de la base de datos, de forma más cómoda e intuitiva que la vista Hoja de datos de la tabla. Permiten mostrar un registro a la vez, con diseño personalizado.

Los formularios pueden mostrar datos de una sola tabla o de varias tablas relacionadas (formularios con subformularios).

### 5.2 Creación de formularios

Access ofrece varias formas de crear formularios:

- **Asistente para formularios (Crear → Asistente para formularios):** guía paso a paso para elegir los campos, el diseño y el estilo. Es la forma más rápida para usuarios no especializados.
- **Formulario automático (Crear → Formulario):** crea automáticamente un formulario con todos los campos de la tabla o consulta seleccionada.
- **Vista Diseño (Crear → Diseño de formulario):** permite diseñar el formulario desde cero, con total control sobre el diseño y los controles.
- **Formulario dividido:** muestra simultáneamente el formulario (un registro a la vez) y la hoja de datos (todos los registros).

### 5.3 Controles del formulario

Los **controles** son los elementos gráficos que componen un formulario:

| Control | Descripción |
|---|---|
| **Cuadro de texto** | Muestra y permite editar el valor de un campo |
| **Etiqueta** | Texto estático descriptivo (no editable) |
| **Cuadro combinado** | Lista desplegable que permite elegir o escribir un valor |
| **Cuadro de lista** | Lista de valores entre los que se puede elegir |
| **Casilla de verificación** | Para campos de tipo Sí/No |
| **Botón de opción** | Para elegir una opción entre varias mutuamente excluyentes |
| **Botón de comando** | Ejecuta una acción al hacer clic (abrir otro formulario, guardar registro, ejecutar consulta…) |
| **Imagen** | Muestra una imagen fija en el formulario |
| **Subformulario** | Formulario anidado dentro de otro, que muestra los registros relacionados |

### 5.4 Secciones del formulario

Un formulario se divide en **secciones**:
- **Encabezado del formulario:** se muestra en la parte superior; típicamente contiene el título del formulario.
- **Detalle:** la sección principal, donde se muestran los datos de cada registro.
- **Pie del formulario:** se muestra en la parte inferior; puede contener totales, botones de navegación, etc.

---

## 6. INFORMES

### 6.1 Concepto

Los **informes** son los objetos de Access diseñados para presentar los datos de forma formateada, lista para ser impresa o exportada. A diferencia de los formularios (orientados a la entrada y edición de datos), los informes están orientados a la **salida** de información.

Los informes pueden mostrar datos de tablas o consultas, calcular totales y subtotales por grupos, y aplicar un formato profesional.

### 6.2 Creación de informes

De forma similar a los formularios:
- **Asistente para informes (Crear → Asistente para informes):** guía paso a paso para elegir campos, criterios de agrupación, orden y estilo.
- **Informe automático (Crear → Informe):** crea automáticamente un informe básico.
- **Vista Diseño:** diseño manual con control total.

### 6.3 Agrupación y totales en informes

Una de las funciones más útiles de los informes es la posibilidad de **agrupar** los registros por el valor de uno o varios campos, y calcular **totales** (suma, promedio, recuento, máximo, mínimo) para cada grupo y para el informe completo.

Por ejemplo: un informe de expedientes agrupado por tipo de expediente, con el número de expedientes de cada tipo y el total general al final.

### 6.4 Secciones del informe

Un informe se divide en las siguientes secciones:
- **Encabezado del informe:** se imprime una sola vez al inicio del informe (título, logotipo, fecha).
- **Encabezado de página:** se repite en la parte superior de cada página (número de página, nombres de columna).
- **Encabezado de grupo:** se imprime al inicio de cada grupo (si se ha definido agrupación).
- **Detalle:** una línea por cada registro.
- **Pie de grupo:** se imprime al final de cada grupo; contiene los subtotales del grupo.
- **Pie de página:** se repite al final de cada página (número de página, fecha).
- **Pie del informe:** se imprime una sola vez al final del informe (totales generales).

---

## 7. IMPORTACIÓN, VINCULACIÓN Y EXPORTACIÓN DE DATOS

### 7.1 Importación de datos

La **importación** permite copiar datos desde un origen externo a una tabla de Access. Los datos importados pasan a formar parte de la base de datos de Access y son independientes del origen: los cambios posteriores en el origen no se reflejan en Access.

Access puede importar desde:
- **Excel:** el formato más habitual. Cada columna de la hoja se convierte en un campo de la tabla.
- **Texto delimitado o de ancho fijo** (.txt, .csv): datos separados por comas, punto y coma u otros delimitadores.
- **XML:** formato de intercambio de datos estructurados.
- **Otras bases de datos Access.**
- **SQL Server, SharePoint, ODBC** (bases de datos externas mediante controladores).

Se accede desde **Datos externos → Importar y vincular → grupo de la fuente de datos deseada**.

El **Asistente para importación** guía el proceso paso a paso: selección del archivo, configuración de columnas y tipos de datos, y destino (tabla existente o nueva).

Access permite guardar los parámetros de una importación como **especificación guardada** para reutilizarla en el futuro.

### 7.2 Vinculación de datos

La **vinculación** (enlace) conecta Access con una fuente de datos externa sin copiar los datos: Access muestra y puede manipular los datos del origen externo, pero los datos siguen almacenados en el origen. Si el origen cambia, los cambios se reflejan en Access automáticamente.

Las tablas vinculadas se muestran en el Panel de navegación con un icono especial (con una flecha). Son útiles cuando los datos se actualizan frecuentemente en el origen y no se quiere duplicarlos.

Access puede vincularse con hojas de Excel, listas de SharePoint, bases de datos SQL Server, etc.

### 7.3 Exportación de datos

La **exportación** permite enviar datos de Access a otros formatos para su uso en otras aplicaciones:
- **Excel** (.xlsx): el destino más habitual.
- **PDF** (.pdf): para distribuir informes sin que puedan modificarse.
- **Texto delimitado** (.txt, .csv): para intercambio con otros sistemas.
- **XML.**
- **Word** (mediante la función Combinar con Word para combinación de correspondencia).

Se accede desde **Datos externos → Exportar**.

---

## PARTE II — OUTLOOK 365

## 8. CONCEPTO Y FUNCIONES PRINCIPALES DE OUTLOOK 365

### 8.1 Qué es Outlook 365

**Microsoft Outlook** es el cliente de correo electrónico, calendario, contactos y tareas de Microsoft 365. Es la aplicación estándar de gestión de comunicaciones y productividad personal en el entorno de trabajo administrativo.

Outlook 365 puede funcionar de dos formas:
- Cómo cliente de correo **local**, conectado a servidores de correo corporativos (Microsoft Exchange, Microsoft 365) o servidores de correo externos (Gmail, Yahoo, correo de la Diputación…).
- Cómo **aplicación web** (Outlook en la Web, también llamado OWA — Outlook Web App), accesible desde el navegador sin necesidad de instalar la aplicación.

### 8.2 La interfaz de Outlook 365

La interfaz de Outlook se organiza en torno a los siguientes elementos:

| Elemento | Descripción |
|---|---|
| **Barra de navegación** | Barra lateral izquierda con acceso a las distintas secciones: Correo, Calendario, Personas (Contactos), Tareas, Notas |
| **Panel de carpetas** | Lista de carpetas de correo de la cuenta (Bandeja de entrada, Enviados, Borradores, Eliminados, Correo no deseado y carpetas personalizadas) |
| **Lista de mensajes** | Lista de los mensajes de la carpeta seleccionada |
| **Panel de lectura** | Muestra el contenido del mensaje seleccionado sin necesidad de abrirlo en una ventana nueva |
| **Cinta de opciones** | Herramientas y comandos de la sección activa |

### 8.3 Las carpetas de correo

Las carpetas predeterminadas de Outlook son:

| Carpeta | Contenido |
|---|---|
| **Bandeja de entrada** | Mensajes recibidos |
| **Borradores** | Mensajes guardados pero no enviados todavía |
| **Elementos enviados** | Copias de los mensajes enviados |
| **Elementos eliminados** | Mensajes eliminados (equivalente a la Papelera de reciclaje) |
| **Correo no deseado (Spam)** | Mensajes detectados automáticamente como spam |
| **Archivo** | Mensajes archivados para liberar espacio en la Bandeja de entrada |

Además de las carpetas predeterminadas, el usuario puede crear **carpetas personalizadas** para organizar los mensajes por proyecto, remitente, asunto, etc.

---

## 9. ENVIAR, RECIBIR, RESPONDER Y REENVIAR MENSAJES

### 9.1 Redactar y enviar un mensaje nuevo

Para crear un nuevo mensaje de correo electrónico:
1. Clic en **Nuevo mensaje** (o **Nuevo correo electrónico**) en la ficha Inicio, o atajo **Ctrl + U** (nueva ventana de Outlook) / **Ctrl + N** (nuevo mensaje si el correo es la sección activa).
2. Se abre la ventana de redacción con los siguientes campos:

| Campo | Descripción |
|---|---|
| **Para:** | Dirección de correo del destinatario principal. Puede haber varios, separados por punto y coma |
| **CC:** (Con Copia) | Destinatarios que reciben una copia del mensaje; todos los destinatarios pueden ver quién está en CC |
| **CCO:** (Con Copia Oculta) | Destinatarios que reciben una copia pero cuya dirección no es visible para los demás destinatarios; útil para envíos masivos respetando la privacidad |
| **Asunto:** | Resumen del contenido del mensaje; es el campo que aparece en la lista de mensajes del destinatario |
| **Cuerpo del mensaje** | Texto del mensaje; admite formato enriquecido (negrita, cursiva, color, listas, imágenes, vínculos…) |

3. Adjuntar archivos si es necesario: **Insertar → Adjuntar archivo** o arrastrar el archivo al cuerpo del mensaje.
4. Clic en **Enviar** (o **Ctrl + Enter**).

### 9.2 Importancia de la CCO en la Administración

El uso de **CCO** (Con Copia Oculta) es especialmente relevante en el entorno administrativo cuando se envía un mensaje a múltiples destinatarios: al incluirlos en CCO en lugar de en CC o Para, se protege la **privacidad** de las direcciones de correo de todos los destinatarios, en cumplimiento de la normativa de protección de datos (RGPD y LOPDGDD).

### 9.3 Recibir mensajes

Outlook comprueba periódicamente si hay mensajes nuevos en el servidor. La frecuencia de comprobación puede configurarse. Los mensajes nuevos aparecen en la **Bandeja de entrada** y se muestran en negrita hasta que son leídos.

Al recibir un mensaje, Outlook puede mostrar:
- Una **notificación de escritorio** (popup) en la esquina de la pantalla.
- Un **sonido de alerta**.
- El **icono de sobre** en el área de notificación de la barra de tareas de Windows.

### 9.4 Responder a un mensaje

| Opción | Descripción | Atajo |
|---|---|---|
| **Responder** | Abre una ventana de redacción con el campo Para: ya completado con la dirección del remitente original. Solo se responde al remitente | Ctrl + R |
| **Responder a todos** | Responde al remitente y a todos los destinatarios del mensaje original (los que estaban en Para: y en CC:) | Ctrl + Mayúsc + R |

Al responder, el texto original del mensaje se incluye por defecto al final de la respuesta (cita del mensaje original), aunque esto puede configurarse.

### 9.5 Reenviar un mensaje

**Reenviar** (Ctrl + M en Outlook) permite enviar un mensaje recibido a uno o varios destinatarios nuevos. El mensaje reenviado incluye el contenido original y permite añadir un texto introductorio. Los archivos adjuntos del mensaje original también se reenvían por defecto.

### 9.6 Opciones adicionales al enviar

- **Solicitar confirmación de lectura:** Outlook pide al destinatario que confirme que ha leído el mensaje. La confirmación es opcional para el destinatario.
- **Solicitar confirmación de entrega:** el servidor de correo notifica cuando el mensaje ha sido entregado al buzón del destinatario (no garantiza que haya sido leído).
- **Importancia:** puede marcarse como alta (!) o baja, lo que añade un indicador visual en el mensaje del destinatario.
- **Retraso en el envío:** permite programar el envío del mensaje en un momento futuro.
- **Caducidad del mensaje:** el mensaje se marca como expirado después de una fecha determinada.

### 9.7 Gestión de mensajes recibidos

- **Marcar como leído/no leído:** clic derecho → Marcar como leído/no leído, o Ctrl + Q / Ctrl + U.
- **Marcar con seguimiento (flag):** añade un indicador de seguimiento al mensaje para recordar que requiere acción posterior.
- **Categorizar:** asigna un color y una etiqueta al mensaje para organizarlo visualmente.
- **Mover a carpeta:** clic derecho → Mover → Otra carpeta.
- **Eliminar:** tecla Supr (mueve a Elementos eliminados).
- **Archivar:** mueve el mensaje a la carpeta Archivo para liberar la Bandeja de entrada.
- **Buscar:** campo de búsqueda en la parte superior de la lista de mensajes; puede buscar en la carpeta actual, en todas las carpetas o en toda la cuenta.

---

## 10. REGLAS DE MENSAJE

### 10.1 Concepto

Las **reglas de mensaje** (o reglas de correo) son instrucciones automáticas que Outlook aplica a los mensajes entrantes (y salientes) cuando se cumplen determinadas condiciones. Permiten gestionar automáticamente el correo sin intervención manual, organizando, filtrando, respondiendo o redirigiendo mensajes según criterios predefinidos.

Se crean desde **Inicio → Reglas → Administrar reglas y alertas** o desde **Archivo → Administrar reglas y alertas**.

### 10.2 Estructura de una regla

Cada regla consta de tres partes:

**1. Condiciones (cuándo se aplica la regla):**
- El asunto contiene ciertas palabras.
- El remitente es una persona específica.
- El mensaje fue enviado a una lista de distribución.
- El mensaje tiene archivos adjuntos.
- El tamaño del mensaje es mayor que X KB.
- El mensaje está marcado con una importancia determinada.

**2. Acciones (qué hacer cuando se cumple la condición):**
- Mover el mensaje a una carpeta específica.
- Copiar el mensaje a una carpeta.
- Eliminar el mensaje.
- Reenviar automáticamente a otra dirección.
- Marcar el mensaje con una categoría o color.
- Marcar el mensaje para seguimiento.
- Reproducir un sonido.
- Responder automáticamente con una plantilla.

**3. Excepciones (cuándo NO aplicar la regla aunque se cumplan las condiciones):**
- Excepto si el asunto contiene ciertas palabras.
- Excepto si el remitente está en una lista determinada.
- etc.

### 10.3 Ejemplos prácticos de reglas

- **Organización automática:** todos los mensajes del dominio @diputaciondeburgos.es se mueven automáticamente a la carpeta «Diputación».
- **Filtrado de publicidad:** mensajes con «oferta» o «promoción» en el asunto se mueven directamente a Correo no deseado.
- **Respuesta automática de ausencia:** cuando se está de vacaciones, se responde automáticamente a cada remitente con un mensaje indicando la fecha de regreso (en Outlook esto se gestiona más habitualmente desde **Archivo → Respuestas automáticas / Fuera de la oficina**).
- **Notificación especial:** los mensajes de un remitente prioritario activan un sonido o aparecen en la pantalla de forma destacada.

### 10.4 Respuestas automáticas (Fuera de la oficina)

La función **Respuestas automáticas** (Archivo → Respuestas automáticas) permite configurar una respuesta automática que se envía a cualquier persona que mande un correo durante un período de ausencia (vacaciones, baja, etc.). Puede configurarse un mensaje distinto para remitentes internos (de la misma organización) y externos.

---

## 11. LIBRETA DE DIRECCIONES Y CONTACTOS

### 11.1 La Libreta de direcciones

La **Libreta de direcciones** de Outlook almacena las direcciones de correo electrónico y otros datos de contacto de las personas y grupos con los que se comunica el usuario. Se accede desde **Inicio → Libreta de direcciones** o desde el icono de libreta al hacer clic en los campos Para:, CC: o CCO: al redactar un mensaje.

En un entorno corporativo (Microsoft Exchange / Microsoft 365), Outlook tiene acceso a la **Lista global de direcciones (GAL)**, que contiene las cuentas de correo de todos los usuarios de la organización, mantenida por el administrador del sistema.

### 11.2 Contactos en Outlook

La sección **Personas** de Outlook (accesible desde la barra de navegación) es el gestor de contactos completo. Permite almacenar para cada contacto:

- Nombre completo y empresa.
- Dirección de correo electrónico (puede haber varias).
- Número de teléfono (trabajo, móvil, casa…).
- Dirección postal.
- Fecha de cumpleaños y aniversario.
- Notas.
- Imagen del contacto.

### 11.3 Listas de distribución (Grupos de contactos)

Una **lista de distribución** (o **grupo de contactos** en Outlook) es un conjunto de direcciones de correo agrupadas bajo un único nombre. Al enviar un mensaje a la lista, este se envía automáticamente a todas las direcciones incluidas en ella, sin necesidad de añadirlas una por una.

Son muy útiles para envíos frecuentes a los mismos grupos de destinatarios (un departamento, un equipo de trabajo, una comisión…). Se crean desde **Personas → Nuevo grupo de contactos**.

### 11.4 Autocompletar

Outlook mantiene una lista de autocompletar con las direcciones de correo introducidas manualmente en los campos Para:, CC: y CCO:. Al comenzar a escribir el nombre o la dirección, Outlook sugiere las coincidencias de la lista de autocompletar y de la Libreta de direcciones. Si aparece una dirección incorrecta en las sugerencias, se puede eliminar pulsando la tecla Supr mientras está resaltada.

### 11.5 El Calendario de Outlook

Aunque no figura explícitamente en el enunciado del tema, el **Calendario** es un componente fundamental de Outlook:

- Permite crear **citas** (eventos personales), **reuniones** (con invitación a otros contactos) y **eventos de todo el día**.
- Se puede ver en vista de día, semana laboral, semana completa o mes.
- Las **invitaciones a reunión** se envían como mensajes de correo especiales; los destinatarios pueden aceptar, rechazar o aceptar provisionalmente.
- Se integra con el correo: los mensajes con información de vuelos, reservas, eventos, etc. pueden añadirse al calendario automáticamente.

---

## RESUMEN ESQUEMÁTICO PARA REPASAR

<div class="study-list study-list-summary">
<ul>
  <li>ACCESS 365 — BASE DE DATOS RELACIONAL
    <ul>
      <li>Objetos: TABLAS / CONSULTAS / FORMULARIOS / INFORMES / Macros / Módulos</li>
      <li>Archivo: extensión .accdb</li>
      <li>TABLAS
        <ul>
          <li>Registros (filas) + Campos (columnas)</li>
          <li>Tipos de datos: Texto corto / Texto largo / Número / Fecha-Hora /
            <ul>
              <li>Moneda / Autonumérico / Sí-No / Calculado / Hipervínculo</li>
            </ul></li>
          <li>Clave principal: identifica cada registro de forma única e inequívoca
            <ul>
              <li>→ Autonumérico: opción más habitual para clave principal</li>
            </ul></li>
          <li>Vista Hoja de datos (ver/editar datos) ↔ Vista Diseño (estructura/campos)</li>
          <li>Propiedades del campo: tamaño / formato / máscara / regla de validación /
            <ul>
              <li>valor predeterminado / requerido / indexado</li>
            </ul></li>
        </ul></li>
      <li>RELACIONES (Herramientas BD → Relaciones)
        <ul>
          <li>1:1 — uno a uno</li>
          <li>1:N — uno a varios (la más habitual)</li>
          <li>M:N — varios a varios → necesita tabla intermedia Integridad referencial: evita datos huérfanos / opción actualizar/eliminar en cascada</li>
        </ul></li>
      <li>CONSULTAS
        <ul>
          <li>Selección: recupera y muestra datos según criterios (no modifica los datos)</li>
          <li>Parámetros: solicita valor al usuario al ejecutarse</li>
          <li>Totales: agrupa y calcula (suma, promedio, máximo, mínimo, recuento)</li>
          <li>Tabla de referencias cruzadas: filas × columnas (como tabla dinámica)</li>
          <li>Acción: modifica datos → datos anexados / eliminación / actualización / creación de tabla Diseño QBE: cuadrícula visual + criterios (misma fila=Y / filas distintas=O) → Access genera SQL automáticamente</li>
        </ul></li>
      <li>FORMULARIOS
        <ul>
          <li>Para introducir, ver y editar datos de forma visual</li>
          <li>Creación: Asistente / Automático / Vista Diseño / Formulario dividido</li>
          <li>Controles: cuadro de texto / etiqueta / combo / lista / casilla verificación /
            <ul>
              <li>botón de comando / subformulario</li>
            </ul></li>
          <li>Secciones: Encabezado del formulario / Detalle / Pie del formulario</li>
        </ul></li>
      <li>INFORMES
        <ul>
          <li>Para presentar datos formateados, listos para imprimir o exportar</li>
          <li>Agrupación + totales por grupo y totales generales</li>
          <li>Secciones: Encabezado del informe / Encabezado de página /
            <ul>
              <li>Encabezado de grupo / Detalle / Pie de grupo / Pie de página / Pie del informe</li>
            </ul></li>
        </ul></li>
      <li>IMPORTACIÓN, VINCULACIÓN Y EXPORTACIÓN (Datos externos)
        <ul>
          <li>Importación: copia datos del origen a Access (independiente del origen)
            <ul>
              <li>→ Desde: Excel / CSV-TXT / XML / otras BD</li>
            </ul></li>
          <li>Vinculación: Access accede a datos externos sin copiarlos (se actualizan en tiempo real)</li>
          <li>Exportación: envía datos de Access a Excel / PDF / CSV / XML / Word</li>
        </ul></li>
    </ul></li>
  <li>OUTLOOK 365 — CORREO ELECTRÓNICO Y PRODUCTIVIDAD
    <ul>
      <li>Secciones: Correo / Calendario / Personas (Contactos) / Tareas / Notas</li>
      <li>Carpetas predeterminadas: Bandeja de entrada / Borradores / Enviados /
        <ul>
          <li>Eliminados / Correo no deseado / Archivo</li>
        </ul></li>
      <li>ENVIAR MENSAJES
        <ul>
          <li>Campos: Para (destinatario) / CC (copia visible) / CCO (copia oculta, privacidad)
            <ul>
              <li>→ En AAPP: usar CCO en envíos masivos para proteger datos personales (RGPD)</li>
            </ul></li>
          <li>Asunto: resumen del mensaje / Cuerpo: texto con formato enriquecido</li>
          <li>Adjuntar archivos + opciones: importancia / confirmación lectura / retraso en envío</li>
        </ul></li>
      <li>RECIBIR / RESPONDER / REENVIAR
        <ul>
          <li>Responder (Ctrl+R): solo al remitente</li>
          <li>Responder a todos (Ctrl+Mayúsc+R): al remitente y todos los destinatarios</li>
          <li>Reenviar (Ctrl+M): enviar el mensaje a nuevos destinatarios</li>
        </ul></li>
      <li>REGLAS DE MENSAJE (Inicio → Reglas → Administrar reglas y alertas)
        <ul>
          <li>Estructura: CONDICIÓN → ACCIÓN (→ Excepción)</li>
          <li>Condiciones: remitente / asunto / destinatario / tamaño / importancia</li>
          <li>Acciones: mover / copiar / eliminar / reenviar / categorizar / responder auto</li>
          <li>Respuestas automáticas / fuera de la oficina: Archivo → Respuestas automáticas</li>
        </ul></li>
      <li>LIBRETA DE DIRECCIONES Y CONTACTOS
        <ul>
          <li>Libreta de direcciones: almacén de direcciones de correo y datos de contacto</li>
          <li>Lista global de direcciones (GAL): todos los usuarios de la organización (Exchange/M365)</li>
          <li>Sección Personas: contactos completos (nombre, email, teléfono, dirección…)</li>
          <li>Grupos de contactos (listas de distribución): envío a múltiples destinatarios con un solo nombre</li>
          <li>Autocompletar: sugerencias de direcciones al escribir en Para/CC/CCO</li>
        </ul></li>
    </ul></li>
</ul>
</div>

---

*Fin del Tema 39 — Administrativo C1 | Preparación OEP 2026*
