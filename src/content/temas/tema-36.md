---
tema: 36
titulo: "Informática básica: conceptos fundamentales sobre el hardware y el software. Sistemas de almacenamiento de datos. Sistemas operativos. Nociones básicas de seguridad informática."
---

> **Referencia del programa:** Adams 2026 (temas 36-40 del programa específico de la oposición).
>
> 🔗 **Real Decreto 3/2010, de 8 de enero, Esquema Nacional de Seguridad (ENS) — referencia normativa en materia de seguridad informática en el sector público:**
> https://www.boe.es/eli/es/rd/2010/01/08/3/con

---

## 1. CONCEPTOS FUNDAMENTALES DE INFORMÁTICA

### 1.1 Qué es la informática

La **informática** es la ciencia que estudia el tratamiento automático y racional de la información mediante el uso de ordenadores y sistemas computacionales. El término proviene de la contracción de las palabras francesas *information* y *automatique*.

El **ordenador** (o computadora) es una máquina electrónica capaz de recibir datos, procesarlos según un conjunto de instrucciones previamente definidas (programa), y producir resultados en forma de información útil para el usuario.

Las carácterísticas fundamentales de un ordenador son:

- **Velocidad:** es capaz de realizar millones o miles de millones de operaciones por segundo.
- **Exactitud:** ejecuta las instrucciones con precisión absoluta, siempre que estas sean correctas.
- **Capacidad de almacenamiento:** puede guardar grandes volúmenes de información durante períodos indefinidos.
- **Automatización:** puede ejecutar tareas repetitivas sin intervención humana, siguiendo las instrucciones del programa.
- **Versatilidad:** el mismo hardware puede realizar tareas muy diferentes dependiendo del software instalado.

### 1.2 Tipos de ordenadores

Los sistemas informáticos se clasifican según su tamaño, capacidad de procesamiento y uso previsto:

| Tipo | Descripción | Uso típico |
|---|---|---|
| **Superordenador** | El más potente; capaz de realizar billones de operaciones por segundo (teraflops) | Investigación científica, predicción meteorológica, simulaciones complejas |
| **Servidor** | Equipo de alto rendimiento diseñado para prestar servicios a otros equipos en red | Alojamiento web, bases de datos, correo electrónico corporativo |
| **Ordenador personal (PC)** | Equipo de uso individual, de sobremesa o portátil | Trabajo de oficina, navegación, entretenimiento |
| **Estación de trabajo (workstation)** | PC de alto rendimiento para tareas de diseño, ingeniería o análisis | CAD, edición de vídeo, modelado 3D |
| **Tableta (tablet)** | Equipo con pantalla táctil, sin teclado físico | Consulta de información, gestión, consumo de contenidos |
| **Smartphone** | Teléfono inteligente con capacidades de ordenador | Comunicación, gestión personal, apps |
| **Dispositivos IoT** | Objetos cotidianos con capacidad de conexión y procesamiento | Sensores, domótica, wearables |

---

## 2. EL HARDWARE

### 2.1 Concepto de hardware

El **hardware** es el conjunto de componentes físicos, tangibles, que forman un sistema informático: todo lo que se puede tocar, ver y manipular. Engloba tanto los componentes internos del ordenador como los periféricos externos que se conectan a él.

### 2.2 La arquitectura von Neumann

La mayoría de los ordenadores modernos se basan en la **arquitectura von Neumann** (propuesta por el matemático John von Neumann en 1945), que establece que un ordenador debe constar de:

- Una **unidad central de procesamiento** (CPU) que ejecuta las instrucciones.
- Una **memoria** donde se almacenan tanto las instrucciones (programas) como los datos.
- Un sistema de **entrada/salida** para comunicarse con el exterior.
- Un **bus** que interconecta todos los componentes anteriores.

Esta arquitectura sigue siendo la base de los ordenadores actuales.

### 2.3 Componentes internos del ordenador

#### 2.3.1 La Unidad Central de Procesamiento (CPU o procesador)

La **CPU** (Central Processing Unit) es el cerebro del ordenador: el componente que interpreta y ejecuta las instrucciones de los programas. Sus elementos principales son:

- **Unidad de Control (UC):** coordina y dirige el funcionamiento de todos los demás componentes, interpretando las instrucciones del programa y generando las señales de control necesarias para su ejecución.
- **Unidad Aritmético-Lógica (UAL o ALU):** realiza las operaciones matemáticas (suma, resta, multiplicación, división) y las operaciones lógicas (comparaciones, AND, OR, NOT) sobre los datos.
- **Registros:** pequeñas memorias internas de la CPU, de acceso ultrarrápido, donde se almacenan temporalmente los datos e instrucciones que están siendo procesados en cada momento.
- **Caché:** memoria intermedia ultrarrápida integrada en la CPU (niveles L1, L2 y L3) que almacena los datos e instrucciones más frecuentemente usados, reduciendo el tiempo de acceso a la RAM.

Los procesadores actuales son **multinúcleo** (dual-core, quad-core, octa-core…): integran varios núcleos de procesamiento independientes en un único chip, lo que permite la ejecución paralela de varias tareas simultáneamente.

La **velocidad de la CPU** se mide en **gigahercios (GHz)**: indica cuántos ciclos de reloj por segundo puede ejecutar el procesador. Un procesador de 3,5 GHz ejecuta 3.500 millones de ciclos por segundo.

Los fabricantes de procesadores más relevantes son **Intel** (Core i3, i5, i7, i9) y **AMD** (Ryzen).

#### 2.3.2 La memoria RAM

La **RAM** (Random Access Memory — Memoria de Acceso Aleatorio) es la memoria principal del ordenador, donde se cargan el sistema operativo, los programas en ejecución y los datos que están siendo procesados en cada momento.

Características fundamentales de la RAM:
- Es una memoria **volátil**: pierde su contenido cuando el ordenador se apaga o reinicia.
- Su **velocidad** de acceso es muy superior a la de los discos duros, lo que permite una ejecución fluida de los programas.
- Su **capacidad** se mide en gigabytes (GB). Un ordenador de trabajo habitual dispone de 8 a 32 GB de RAM; los servidores pueden tener terabytes.
- Cuanta más RAM tiene un equipo, más programas puede ejecutar simultáneamente sin ralentizarse.

La RAM actual sigue las especificaciones **DDR4** o **DDR5** (Double Data Rate), que determinan su velocidad y consumo.

#### 2.3.3 La memoria ROM

La **ROM** (Read Only Memory — Memoria de Solo Lectura) es una memoria no volátil cuyo contenido se graba en fábrica y no puede ser modificado por el usuario en condiciones normales. Conserva su contenido aunque se apague el equipo.

En los ordenadores, la ROM alberga el **firmware** del sistema, en particular la **BIOS** (Basic Input/Output System) o su sucesor moderno, la **UEFI** (Unified Extensible Firmware Interface): el programa de bajo nivel que se ejecuta al encender el ordenador, realiza las pruebas de arranque (POST) e inicializa el hardware antes de cargar el sistema operativo.

#### 2.3.4 La placa base (motherboard)

La **placa base** es el circuito impreso principal del ordenador, sobre el que se instalan y conectan todos los demás componentes internos: la CPU (en su zócalo o socket), los módulos de RAM (en sus ranuras), las tarjetas de expansión (en los puertos PCIe), los discos de almacenamiento (mediante conectores SATA o M.2), y los conectores de alimentación y periféricos.

La placa base incorpora también el **chipset**, el conjunto de circuitos que gestiona la comunicación entre los distintos componentes del sistema.

#### 2.3.5 La tarjeta gráfica (GPU)

La **tarjeta gráfica** (también llamada GPU — Graphics Processing Unit) es el componente responsable del procesamiento de gráficos y del envío de la señal de vídeo al monitor. En los equipos de oficina, la función gráfica suele estar integrada en la propia CPU o en la placa base (gráficos integrados). En equipos de diseño, juego o inteligencia artificial se instalan GPUs dedicadas de alto rendimiento (NVIDIA GeForce/Quadro, AMD Radeon).

#### 2.3.6 La fuente de alimentación

La **fuente de alimentación** (PSU — Power Supply Unit) convierte la corriente alterna de la red eléctrica en las tensiones de corriente continua que necesitan los distintos componentes del ordenador (+12V, +5V, +3,3V). Su potencia se mide en vatios (W).

### 2.4 Los periféricos

Los **periféricos** son los dispositivos externos que se conectan al ordenador para permitir la entrada de datos, la salida de información o el almacenamiento. Se clasifican en:

#### 2.4.1 Periféricos de entrada

Permiten al usuario introducir datos o instrucciones en el ordenador:

| Dispositivo | Función |
|---|---|
| **Teclado** | Introduce texto, números y comandos mediante teclas |
| **Ratón (mouse)** | Dispositivo señalador; controla el puntero en pantalla |
| **Escáner** | Digitaliza documentos e imágenes en papel |
| **Cámara web (webcam)** | Captura vídeo e imágenes para videoconferencia |
| **Micrófono** | Captura audio |
| **Lápiz óptico / pantalla táctil** | Permite la entrada mediante contacto directo |
| **Lector de código de barras / QR** | Lee e introduce códigos |

#### 2.4.2 Periféricos de salida

Presentan al usuario los resultados del procesamiento:

| Dispositivo | Función |
|---|---|
| **Monitor** | Muestra la información visual generada por la tarjeta gráfica |
| **Impresora** | Produce copias en papel de documentos y gráficos |
| **Altavoces** | Reproducen el sonido generado por el sistema |
| **Proyector** | Muestra la imagen del ordenador en una superficie o pantalla grande |

#### 2.4.3 Periféricos de entrada/salida (mixtos)

Permiten tanto la entrada como la salida de datos:

| Dispositivo | Función |
|---|---|
| **Pantalla táctil** | Funciona como monitor (salida) y como dispositivo señalador (entrada) |
| **Disco duro externo / USB** | Permite leer y escribir datos |
| **Impresora multifunción** | Imprime (salida), escanea y copia (entrada/salida) |
| **Tarjeta de red** | Envía y recibe datos a través de la red |

### 2.5 Los buses del sistema

Los **buses** son los canales de comunicación que interconectan los distintos componentes del ordenador, permitiendo la transferencia de datos, direcciones y señales de control entre ellos. Los buses principales son:

- **Bus de datos:** transporta los datos entre la CPU, la memoria y los periféricos.
- **Bus de direcciones:** indica la dirección de memoria donde se deben leer o escribir los datos.
- **Bus de control:** transporta las señales de control que coordinan el funcionamiento de los componentes.

Los buses modernos más relevantes en el exterior del equipo son **USB** (Universal Serial Bus), **Thunderbolt**, **HDMI** y **DisplayPort** para la conexión de periféricos y monitores.

---

## 3. EL SOFTWARE

### 3.1 Concepto de software

El **software** es el conjunto de programas, instrucciones, datos y documentación que permiten al hardware realizar las funciones para las que ha sido diseñado. A diferencia del hardware, el software es intangible: no tiene existencia física.

La relación entre hardware y software es de dependencia mutua: el hardware sin software no puede hacer nada útil, y el software no puede ejecutarse sin el hardware que le proporcione los recursos de cómputo.

### 3.2 Clasificación del software

El software se clasifica en tres grandes categorías:

#### 3.2.1 Software de sistema (o software base)

Es el software que gestiona y controla los recursos del hardware y proporciona una plataforma sobre la que pueden ejecutarse los programas de aplicación. Su función es hacer que el hardware sea utilizable. Incluye:

- **Sistema operativo:** el más importante. Se estudia en detalle en el apartado 4.
- **Controladores (drivers):** programas que permiten al sistema operativo comunicarse con los periféricos (tarjeta gráfica, impresora, escáner, etc.). Sin el driver adecuado, el sistema operativo no puede utilizar el periférico.
- **BIOS/UEFI:** el firmware de bajo nivel que inicializa el hardware al arrancar el equipo.
- **Utilidades del sistema:** herramientas para el mantenimiento, diagnóstico y optimización del sistema (desfragmentadores, antivirus, herramientas de disco, etc.).

#### 3.2.2 Software de aplicación

Es el software diseñado para que el usuario realice tareas concretas. Se ejecuta sobre el sistema operativo y aprovecha los recursos que este le proporciona. Ejemplos:

| Categoría | Ejemplos |
|---|---|
| **Procesadores de texto** | Microsoft Word, LibreOffice Writer |
| **Hojas de cálculo** | Microsoft Excel, LibreOffice Calc |
| **Bases de datos** | Microsoft Access, MySQL, Oracle |
| **Navegadores web** | Microsoft Edge, Google Chrome, Mozilla Firefox |
| **Correo electrónico** | Microsoft Outlook, Mozilla Thunderbird |
| **Presentaciones** | Microsoft PowerPoint, LibreOffice Impress |
| **Edición de imagen** | Adobe Photoshop, GIMP |
| **Videoconferencia** | Microsoft Teams, Zoom |
| **Gestión empresarial (ERP)** | SAP, Microsoft Dynamics |

#### 3.2.3 Software de programación

Son las herramientas que utilizan los programadores para desarrollar nuevas aplicaciones: compiladores, intérpretes, entornos de desarrollo integrado (IDE), depuradores, etc.

### 3.3 Clasificación del software según su licencia

| Tipo de licencia | Descripción |
|---|---|
| **Software propietario** | Los derechos de uso, copia, distribución y modificación están reservados al titular. El usuario paga una licencia para usar el programa pero no tiene acceso al código fuente. Ejemplo: Microsoft Office, Adobe Acrobat |
| **Software libre (Free Software)** | El usuario tiene libertad para usar, copiar, distribuir, estudiar y modificar el software. El código fuente es accesible. Ejemplo: LibreOffice, Linux |
| **Software de código abierto (Open Source)** | Similar al software libre, con acceso al código fuente, aunque las condiciones de uso pueden variar según la licencia concreta |
| **Freeware** | Software de distribución gratuita, pero generalmente sin acceso al código fuente ni libertad de modificación |
| **Shareware** | Software de distribución gratuita para su evaluación, con funcionalidades limitadas o con plazo de uso restringido; requiere pago para la versión completa |
| **Software en la nube (SaaS)** | Se accede al software a través de internet sin necesidad de instalación local; el proveedor gestiona el mantenimiento. Ejemplo: Microsoft 365, Google Workspace |

---

## 4. SISTEMAS OPERATIVOS

### 4.1 Concepto y funciones

El **sistema operativo (SO)** es el software más importante de un ordenador: el programa que actúa como intermediario entre el hardware y los programas de aplicación, gestionando los recursos del sistema y proporcionando una interfaz al usuario.

El sistema operativo cumple las siguientes funciones esenciales:

- **Gestión del procesador:** asigna tiempo de CPU a los distintos programas en ejecución mediante algoritmos de planificación, permitiendo la multitarea.
- **Gestión de la memoria:** controla qué parte de la RAM está asignada a cada programa, evita que los programas interfieran entre sí y gestiona la memoria virtual (uso del disco como extensión de la RAM cuando esta se agota).
- **Gestión del almacenamiento:** organiza los archivos y directorios en los dispositivos de almacenamiento a través del sistema de archivos, y controla el acceso a los datos.
- **Gestión de periféricos:** a través de los drivers, controla la comunicación con los dispositivos de entrada/salida.
- **Gestión de usuarios y seguridad:** controla el acceso al sistema mediante cuentas de usuario, contraseñas y permisos; registra la actividad en los logs del sistema.
- **Gestión de la red:** gestiona las conexiones de red, los protocolos de comunicación y el acceso a recursos compartidos.
- **Interfaz de usuario:** proporciona el entorno mediante el cual el usuario interactúa con el sistema (interfaz gráfica o de línea de comandos).

### 4.2 Tipos de sistemas operativos

#### 4.2.1 Por el tipo de interfaz

- **Interfaz de línea de comandos (CLI):** el usuario interactúa con el sistema escribiendo comandos de texto. Ejemplo: la terminal de Linux, el símbolo del sistema de Windows (CMD), PowerShell.
- **Interfaz gráfica de usuario (GUI):** el usuario interactúa mediante ventanas, iconos, menús y el ratón. Es el tipo de interfaz dominante en los SO modernos de uso general.

#### 4.2.2 Por el número de usuarios y tareas

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Monousuario / monotarea** | Un solo usuario ejecuta una sola tarea a la vez | MS-DOS |
| **Monousuario / multitarea** | Un solo usuario puede ejecutar varias tareas simultáneamente | Windows en un PC personal |
| **Multiusuario / multitarea** | Varios usuarios acceden al sistema simultáneamente, cada uno con sus propias sesiones y tareas | Linux en un servidor, Windows Server |

### 4.3 Principales sistemas operativos

#### 4.3.1 Microsoft Windows

**Windows** es el sistema operativo de escritorio más extendido en el mundo, desarrollado por Microsoft. Su versión actual para usuarios finales es **Windows 11** (lanzado en octubre de 2021), que requiere hardware compatible con TPM 2.0 y arranque seguro (Secure Boot).

Para entornos de servidor, Microsoft ofrece **Windows Server** (versión actual: Windows Server 2022).

Windows es el sistema operativo predominante en las Administraciones Públicas españolas y en el entorno de la Diputación Provincial de Burgos.

#### 4.3.2 Linux

**Linux** es un sistema operativo de **código abierto** basado en el núcleo (kernel) creado por Linus Torvalds en 1991. No existe una única versión de Linux: se distribuye en múltiples **distribuciones** (distros), que combinan el kernel Linux con distintos entornos gráficos, herramientas y aplicaciones.

Distribuciones más conocidas: **Ubuntu**, **Debian**, **Fedora**, **CentOS/AlmaLinux**, **openSUSE**. Para servidores, Linux es el sistema operativo dominante a nivel mundial.

En el ámbito de las Administraciones Públicas españolas, algunas han adoptado distribuciones de Linux para reducir costes de licencias (como **LliureX** en la Comunitat Valenciana).

#### 4.3.3 macOS

**macOS** (anteriormente OS X) es el sistema operativo desarrollado por Apple para sus ordenadores Mac. Es un sistema propietario, de interfaz gráfica muy cuidada, basado en Unix. Su uso en el entorno de trabajo administrativo es más reducido que Windows.

#### 4.3.4 Sistemas operativos para dispositivos móviles

- **Android** (Google): el sistema operativo más extendido en smartphones y tabletas a nivel mundial. Basado en el kernel Linux y de código abierto (aunque con componentes propietarios de Google).
- **iOS / iPadOS** (Apple): sistema operativo de los iPhone y iPad; propietario, de alto rendimiento y gran integración con el ecosistema Apple.

#### 4.3.5 Sistemas operativos para servidores

Además de **Windows Server** y las distribuciones **Linux** para servidores, existen sistemas especializados como **VMware ESXi** para virtualización o **FreeBSD** para entornos de red de alto rendimiento.

### 4.4 Conceptos clave de los sistemas operativos

**Proceso:** instancia en ejecución de un programa. El SO gestiona los procesos asignándoles tiempo de CPU y recursos de memoria.

**Multitarea:** capacidad del SO para gestionar la ejecución simultánea (o aparentemente simultánea) de varios procesos. En los procesadores de un solo núcleo se logra dividiendo el tiempo de CPU entre los procesos (time-sharing); en los multinúcleo, la ejecución es realmente simultánea.

**Memoria virtual:** técnica mediante la cual el SO utiliza parte del disco de almacenamiento como extensión de la RAM (en Windows, el archivo de paginación o pagefile.sys). Permite ejecutar programas aunque la RAM esté casi llena, aunque con una reducción significativa del rendimiento.

**Sistema de archivos:** la estructura que el SO utiliza para organizar y gestionar los archivos y directorios en los dispositivos de almacenamiento. Los más comunes son **NTFS** (Windows), **ext4** (Linux) y **APFS** (macOS). El sistema de archivos define cómo se nombran, ubican y acceden los archivos.

**Usuarios y permisos:** los SO multiusuario gestionan diferentes cuentas de usuario, cada una con sus propios archivos, configuraciones y permisos de acceso. En Windows, la cuenta de **Administrador** tiene control total del sistema; las cuentas de **usuario estándar** tienen permisos limitados para proteger la seguridad del sistema.

---

## 5. SISTEMAS DE ALMACENAMIENTO DE DATOS

### 5.1 Concepto y clasificación

Los **dispositivos de almacenamiento** son los componentes que permiten guardar datos de forma persistente, es decir, que los datos se conservan aunque el equipo se apague (a diferencia de la RAM, que es volátil).

Se clasifican según varios criterios:

**Por la tecnología empleada:**

| Tipo | Tecnología | Ejemplos |
|---|---|---|
| **Magnética** | Lectura/escritura mediante cabezas magnéticas sobre discos o cintas | HDD, cintas magnéticas |
| **Óptica** | Lectura/escritura mediante rayos láser sobre discos | CD, DVD, Blu-ray |
| **Flash (electrónica)** | Almacenamiento en chips de memoria sin partes móviles | SSD, USB, tarjetas SD |
| **En la nube** | Almacenamiento en servidores remotos accesibles por internet | Google Drive, OneDrive, Dropbox |

**Por su ubicación respecto al sistema:**

- **Almacenamiento interno:** integrado dentro del ordenador (disco duro interno, SSD interno).
- **Almacenamiento externo:** conectado al ordenador por cable o de forma inalámbrica (disco duro externo, USB, tarjeta SD).
- **Almacenamiento en red (NAS/SAN):** dispositivos de almacenamiento accesibles a través de una red local.
- **Almacenamiento en la nube:** accesible a través de internet.

### 5.2 El disco duro (HDD)

El **disco duro** (Hard Disk Drive — HDD) es el dispositivo de almacenamiento interno tradicional. Está formado por uno o varios **platos** magnéticos que giran a alta velocidad (típicamente 5.400 o 7.200 RPM), y por unas **cabezas de lectura/escritura** que se desplazan sobre los platos para leer y escribir datos.

Características:
- **Gran capacidad** a bajo coste: los HDD actuales van de 1 TB a varios decenas de TB.
- **Velocidad de acceso** moderada: entre 80 y 160 MB/s en lectura/escritura secuencial.
- **Vulnerabilidad a golpes:** al tener partes mecánicas en movimiento, son sensibles a vibraciones e impactos.
- **Mayor consumo y ruido** que los SSD.

Se utilizan principalmente para el almacenamiento masivo de datos (NAS, servidores de backup, discos externos).

### 5.3 La unidad de estado sólido (SSD)

El **SSD** (Solid State Drive) es el dispositivo de almacenamiento moderno que utiliza **memoria flash** (chips electrónicos) en lugar de platos magnéticos. No tiene partes móviles.

Características:
- **Velocidad muy superior** a los HDD: los SSD SATA alcanzan 500-550 MB/s; los SSD NVMe (conectados por PCIe) superan los 3.000-7.000 MB/s.
- **Resistencia a golpes:** al no tener partes mecánicas, son mucho más robustos.
- **Silencioso y con menor consumo** energético.
- **Mayor precio por GB** que los HDD, aunque la diferencia se ha reducido enormemente.
- **Vida útil limitada** en número de ciclos de escritura, aunque suficiente para uso normal.

Los SSD se han convertido en el dispositivo de almacenamiento estándar para el disco del sistema en los ordenadores modernos, tanto de sobremesa como portátiles.

Los SSD pueden conectarse mediante:
- **SATA:** interfaz tradicional, compatible con los conectores de los HDD. Velocidad limitada a ~550 MB/s.
- **M.2 NVMe (PCIe):** interfaz moderna, mucho más rápida. El disco se conecta directamente a un slot M.2 de la placa base.

### 5.4 Los dispositivos ópticos

Los **discos ópticos** utilizan rayos láser para leer y escribir datos sobre una superficie reflectante:

| Tipo | Capacidad aproximada | Uso actual |
|---|---|---|
| **CD** (Compact Disc) | 700 MB | En declive; música, pequeñas copias |
| **DVD** (Digital Versatile Disc) | 4,7 GB (simple capa) / 8,5 GB (doble capa) | Software, películas, copias de seguridad |
| **Blu-ray** | 25 GB (simple capa) / 50 GB (doble capa) | Películas en alta definición, archivo |

Los dispositivos ópticos han perdido protagonismo con la expansión de los dispositivos USB y el almacenamiento en la nube.

### 5.5 Las memorias flash portátiles

#### 5.5.1 El USB (pendrive o memoria USB)

El **pendrive** o **memoria USB** es un pequeño dispositivo de almacenamiento flash que se conecta al ordenador mediante un puerto USB. Su capacidad oscila entre 4 GB y 1 TB, y su velocidad depende de la versión USB (USB 2.0: hasta 60 MB/s; USB 3.0/3.1/3.2: hasta 600 MB/s o más).

Es el dispositivo de almacenamiento portátil más utilizado en la actualidad por su comodidad, pequeño tamaño y bajo coste.

#### 5.5.2 Las tarjetas de memoria (SD, microSD)

Las **tarjetas de memoria** SD (Secure Digital) y microSD son dispositivos de almacenamiento flash en formato tarjeta. Se utilizan en cámaras fotográficas, smartphones, tabletas, y como almacenamiento adicional en portátiles. Su capacidad va de unos pocos GB hasta 1 TB.

### 5.6 El almacenamiento en red (NAS y SAN)

El **NAS** (Network Attached Storage — Almacenamiento Conectado en Red) es un dispositivo de almacenamiento que se conecta a la red local y permite que múltiples usuarios y equipos accedan a sus archivos de forma simultánea. Es habitual en empresas, oficinas y Administraciones Públicas para compartir documentos y realizar copias de seguridad centralizadas.

El **SAN** (Storage Area Network) es una red de almacenamiento de alto rendimiento utilizada en entornos empresariales de gran escala, donde múltiples servidores acceden a recursos de almacenamiento compartidos de forma muy rápida.

### 5.7 El almacenamiento en la nube

El **almacenamiento en la nube** (cloud storage) consiste en guardar los datos en servidores remotos gestionados por un proveedor, accesibles a través de internet desde cualquier dispositivo y ubicación.

| Servicio | Proveedor | Almacenamiento gratuito |
|---|---|---|
| **OneDrive** | Microsoft | 5 GB (integrado en Windows y Microsoft 365) |
| **Google Drive** | Google | 15 GB |
| **iCloud Drive** | Apple | 5 GB |
| **Dropbox** | Dropbox Inc. | 2 GB |

Ventajas del almacenamiento en la nube: acceso desde cualquier lugar, sincronización automática entre dispositivos, no se pierde la información si el dispositivo local falla.

Inconvenientes: depende de la conexión a internet, implica ceder el control de los datos a un tercero (privacidad), puede generar costes de suscripción para grandes volúmenes.

### 5.8 Unidades de medida de la información

| Unidad | Equivalencia | Abreviatura |
|---|---|---|
| **Bit** | Unidad mínima de información (0 o 1) | b |
| **Byte** | 8 bits | B |
| **Kilobyte** | 1.024 bytes | KB |
| **Megabyte** | 1.024 KB = 1.048.576 bytes | MB |
| **Gigabyte** | 1.024 MB | GB |
| **Terabyte** | 1.024 GB | TB |
| **Petabyte** | 1.024 TB | PB |

---

## 6. NOCIONES BÁSICAS DE SEGURIDAD INFORMÁTICA

### 6.1 Concepto y objetivos

La **seguridad informática** (también llamada ciberseguridad) es el conjunto de medidas técnicas, organizativas y jurídicas destinadas a proteger los sistemas informáticos, las redes y los datos frente a accesos no autorizados, daños, alteraciones, destrucción o robo.

Los tres objetivos fundamentales de la seguridad informática se resumen en la **triada CIA**:

| Objetivo | Descripción |
|---|---|
| **Confidencialidad** (Confidentiality) | Solo las personas autorizadas pueden acceder a la información. Los datos no deben ser accesibles a terceros no autorizados |
| **Integridad** (Integrity) | La información debe ser exacta y completa. Nadie puede modificarla sin autorización, y cualquier modificación no autorizada debe poder detectarse |
| **Disponibilidad** (Availability) | Los sistemas y la información deben estar accesibles para los usuarios autorizados cuando los necesiten, sin interrupciones no planificadas |

En el ámbito de las Administraciones Públicas, el marco normativo de la seguridad informática es el **Esquema Nacional de Seguridad (ENS)**, aprobado por el Real Decreto 3/2010 y actualizado por el Real Decreto 311/2022, que establece las medidas de seguridad que deben aplicar las AAPP en sus sistemas de información.

### 6.2 Principales amenazas a la seguridad informática

#### 6.2.1 Malware

El **malware** (malicious software — software malicioso) es cualquier programa diseñado para dañar, alterar o acceder sin autorización a sistemas informáticos o datos. Los tipos más comunes son:

| Tipo | Descripción |
|---|---|
| **Virus** | Programa que se inserta en otros ficheros o programas y se propaga al ejecutarlos. Puede dañar o destruir datos |
| **Gusano (worm)** | Programa que se propaga automáticamente por la red sin necesidad de un fichero huésped, consumiendo ancho de banda y recursos |
| **Troyano (trojan)** | Se presenta como un programa legítimo pero ejecuta acciones maliciosas en segundo plano (robo de datos, apertura de puertas traseras) |
| **Ransomware** | Cifra los archivos del sistema y exige un rescate económico (normalmente en criptomonedas) para proporcionar la clave de descifrado. Es una de las amenazas más graves para las organizaciones |
| **Spyware** | Espía la actividad del usuario y envía la información a terceros sin consentimiento |
| **Adware** | Muestra publicidad no solicitada al usuario |
| **Rootkit** | Se oculta en el sistema a nivel muy bajo (incluso en el firmware) para mantener el acceso no autorizado de forma persistente |
| **Keylogger** | Registra las pulsaciones de teclado del usuario para robar contraseñas y datos sensibles |

#### 6.2.2 Phishing y ingeniería social

El **phishing** es una técnica de engaño mediante la cual el atacante suplanta la identidad de una entidad legítima (banco, Administración, empresa) para engañar al usuario y conseguir que revele sus credenciales, datos personales o bancarios.

Se realiza habitualmente mediante:
- **Correos electrónicos fraudulentos** que simulan ser de una entidad de confianza.
- **Páginas web falsas** que imitan las de servicios legítimos (banca online, servicios de la Administración).
- **SMS fraudulentos** (smishing) o llamadas telefónicas (vishing).

La **ingeniería social** es el conjunto de técnicas psicológicas que utilizan los atacantes para manipular a las personas y conseguir que realicen acciones que comprometan la seguridad (revelar contraseñas, ejecutar archivos maliciosos, transferir dinero, etc.).

#### 6.2.3 Ataques a contraseñas

- **Fuerza bruta:** el atacante prueba sistemáticamente todas las combinaciones posibles de contraseñas hasta encontrar la correcta.
- **Diccionario:** similar a la fuerza bruta, pero utilizando listas de palabras comunes y contraseñas habituales.
- **Credential stuffing:** uso de pares usuario/contraseña filtrados en otras brechas de seguridad para intentar acceder a otros servicios.

#### 6.2.4 Ataques de denegación de servicio (DoS / DDoS)

Los ataques de **denegación de servicio** (Denial of Service) consisten en saturar un servidor o red con un volumen masivo de solicitudes para impedir que los usuarios legítimos puedan acceder al servicio. Los ataques **DDoS** (Distributed DoS) se realizan desde miles de dispositivos comprometidos simultáneamente (botnet).

#### 6.2.5 Vulnerabilidades y exploits

Una **vulnerabilidad** es un fallo o debilidad en un sistema o programa que puede ser aprovechada por un atacante. Un **exploit** es el programa o código que aprovecha una vulnerabilidad concreta para atacar el sistema. Por ello es fundamental mantener los sistemas y aplicaciones actualizados con los últimos **parches de seguridad**.

### 6.3 Medidas de protección

#### 6.3.1 Antivirus y antimalware

El **antivirus** es el software de seguridad diseñado para detectar, bloquear y eliminar malware. Funciona comparando los archivos del sistema con su base de datos de firmas de malware conocido, y utilizando técnicas heurísticas para detectar comportamientos sospechosos de nuevas amenazas no conocidas.

Es imprescindible mantener el antivirus **actualizado** para que su base de datos de firmas refleje las amenazas más recientes.

Windows 11 incorpora de serie **Microsoft Defender**, un antivirus integrado que ofrece protección en tiempo real sin coste adicional.

#### 6.3.2 El cortafuegos (firewall)

El **cortafuegos** (firewall) es el sistema (hardware o software) que controla el tráfico de red entre el equipo o la red interna y el exterior (internet), permitiendo o bloqueando las conexiones según unas reglas predefinidas. Su función es impedir que accesos no autorizados lleguen al sistema desde la red.

Windows incorpora un firewall de software integrado. En entornos corporativos se utilizan también firewalls de hardware (dispositivos dedicados).

#### 6.3.3 Las actualizaciones del sistema y las aplicaciones

Mantener el sistema operativo y las aplicaciones **actualizados** es una de las medidas de seguridad más importantes. Las actualizaciones corrigen vulnerabilidades conocidas que podrían ser explotadas por atacantes.

Windows Update gestiona las actualizaciones de Windows y de los productos Microsoft. Es fundamental no deshabilitar las actualizaciones automáticas en los equipos de trabajo.

#### 6.3.4 Las contraseñas seguras

Una **contraseña segura** debe cumplir las siguientes carácterísticas:
- **Longitud mínima** de 8-12 caracteres (cuanto más larga, más segura).
- **Combinación** de letras mayúsculas y minúsculas, números y caracteres especiales.
- No debe contener información personal fácilmente deducible (nombre, fecha de nacimiento).
- Debe ser **única** para cada servicio o cuenta (no reutilizar contraseñas).
- Debe cambiarse periódicamente, especialmente si se sospecha que ha sido comprometida.

Los **gestores de contraseñas** (password managers) son herramientas que permiten generar y almacenar contraseñas seguras y únicas para cada servicio, sin necesidad de memorizarlas todas.

#### 6.3.5 La autenticación de doble factor (2FA)

La **autenticación de doble factor** (Two-Factor Authentication — 2FA) añade una segunda capa de seguridad al proceso de inicio de sesión, además de la contraseña. El segundo factor puede ser:
- Un **código de un solo uso (OTP)** recibido por SMS o generado por una aplicación de autenticación (Google Authenticator, Microsoft Authenticator).
- Una **clave de seguridad física** (USB hardware token).
- La **biometría** (huella dactilar, reconocimiento facial).

Con 2FA, aunque un atacante obtenga la contraseña del usuario, no puede acceder a la cuenta sin el segundo factor.

#### 6.3.6 Las copias de seguridad (backup)

La **copia de seguridad** (backup) consiste en duplicar los datos en un soporte diferente al original, de forma que puedan recuperarse en caso de pérdida, borrado accidental, fallo del hardware o ataque de ransomware.

Regla del **3-2-1**: mantener **3** copias de los datos, en **2** soportes distintos, con **1** copia almacenada fuera de las instalaciones (offsite) o en la nube.

En las Administraciones Públicas, la realización de copias de seguridad es una obligación derivada del ENS.

#### 6.3.7 El cifrado de datos

El **cifrado** (encriptación) transforma la información en un formato ilegible para quien no disponga de la clave correspondiente. Se aplica para proteger la confidencialidad de los datos tanto en el almacenamiento (cifrado de disco) como en la transmisión (conexiones HTTPS, VPN).

**HTTPS** (HyperText Transfer Protocol Secure) es el protocolo de comunicación segura que cifra el tráfico entre el navegador y el servidor web. Identificable por el candado en la barra de direcciones del navegador y porque la URL comienza por *https://*.

**BitLocker** es la herramienta de cifrado de disco incluida en Windows, que protege los datos del disco duro mediante cifrado en caso de que el dispositivo sea robado o accedido físicamente por un usuario no autorizado.

#### 6.3.8 Buenas prácticas del usuario

- **No abrir archivos adjuntos** ni hacer clic en enlaces de correos electrónicos sospechosos o no solicitados.
- **Verificar la dirección del remitente** y la URL del sitio web antes de introducir credenciales.
- **Bloquear el equipo** (Windows + L) cuando se abandone el puesto de trabajo.
- **No conectar dispositivos USB** de origen desconocido.
- **Usar redes Wi-Fi seguras** y evitar las redes públicas para trámites sensibles; si es necesario usarlas, utilizar una VPN.
- **Cerrar sesión** en los servicios de la Administración al terminar de usarlos.
- **No instalar software** no autorizado por el departamento de informática.
- **Reportar incidencias de seguridad** al responsable de informática de la organización.

### 6.4 El Esquema Nacional de Seguridad (ENS)

El **ENS** establece la política de seguridad que deben aplicar las Administraciones Públicas en sus sistemas de información. Sus principios básicos son:

- **Seguridad integral:** la seguridad es un proceso global que afecta a todos los componentes del sistema, no solo a los técnicos.
- **Gestión de riesgos:** las medidas de seguridad deben ser proporcionales a los riesgos evaluados.
- **Prevención, detección, respuesta y recuperación:** la seguridad no solo busca prevenir los incidentes, sino también detectarlos rápidamente, responder a ellos y recuperarse.
- **Mejora continua:** la seguridad debe revisarse y actualizarse permanentemente.

El ENS clasifica los sistemas en tres **categorías** (básica, media, alta) en función del impacto que tendría un fallo de seguridad, y exige distintos niveles de medidas de protección para cada categoría.

---

## RESUMEN ESQUEMÁTICO PARA REPASAR

<div class="study-list study-list-summary">
<ul>
  <li>HARDWARE
    <ul>
      <li>CPU (procesador): UC (coordina) + UAL (opera) + registros + caché L1/L2/L3
        <ul>
          <li>→ Velocidad en GHz / núcleos (dual, quad, octa-core) / fabricantes: Intel y AMD</li>
        </ul></li>
      <li>RAM: memoria principal, VOLÁTIL, se pierde al apagar / capacidad en GB / DDR4-DDR5</li>
      <li>ROM / BIOS-UEFI: memoria no volátil / firmware de arranque / POST</li>
      <li>Placa base: conecta todos los componentes / chipset / zócalo CPU / ranuras RAM / puertos</li>
      <li>SSD vs HDD:
        <ul>
          <li>HDD: magnético, partes móviles, gran capacidad a bajo coste, más lento y frágil</li>
          <li>SSD: flash, sin partes móviles, mucho más rápido, resistente, mayor precio por GB
            <ul>
              <li>→ Interfaces SSD: SATA (~550 MB/s) / M.2 NVMe PCIe (&gt;3.000 MB/s)</li>
            </ul></li>
        </ul></li>
      <li>Periféricos: entrada (teclado, ratón, escáner) / salida (monitor, impresora) / mixtos</li>
    </ul></li>
  <li>SOFTWARE
    <ul>
      <li>De sistema: SO + drivers + BIOS/UEFI + utilidades</li>
      <li>De aplicación: Word, Excel, navegadores, correo, ERP…</li>
      <li>De programación: compiladores, IDEs, depuradores</li>
      <li>Por licencia: propietario / libre (código abierto) / freeware / shareware / SaaS</li>
    </ul></li>
  <li>SISTEMAS OPERATIVOS
    <ul>
      <li>Funciones: gestión de CPU + RAM + almacenamiento + periféricos + usuarios + red + interfaz</li>
      <li>Tipos de interfaz: CLI (línea de comandos) vs. GUI (gráfica)</li>
      <li>Principales SO:
        <ul>
          <li>Windows 11 (Microsoft): dominante en escritorio y en AAPP españolas</li>
          <li>Linux (código abierto): dominante en servidores / múltiples distribuciones</li>
          <li>macOS (Apple): uso minoritario en entornos de trabajo administrativo</li>
          <li>Android / iOS: sistemas móviles</li>
        </ul></li>
      <li>Conceptos clave: proceso / multitarea / memoria virtual /
        <ul>
          <li>sistema de archivos (NTFS en Windows, ext4 en Linux) / usuarios y permisos</li>
        </ul></li>
      <li>Administrador vs. usuario estándar: el administrador tiene control total del sistema</li>
    </ul></li>
  <li>SISTEMAS DE ALMACENAMIENTO
    <ul>
      <li>HDD: magnético / 5.400-7.200 RPM / 1 TB-varios TB / lento / barato / frágil</li>
      <li>SSD: flash / sin partes móviles / muy rápido / robusto / más caro por GB</li>
      <li>Ópticos: CD (700 MB) / DVD (4,7-8,5 GB) / Blu-ray (25-50 GB) / en declive</li>
      <li>Flash portátil: USB/pendrive + tarjetas SD/microSD</li>
      <li>Almacenamiento en red: NAS (oficinas) / SAN (grandes empresas)</li>
      <li>Nube: OneDrive / Google Drive / iCloud / Dropbox</li>
      <li>Unidades: bit → byte (8b) → KB → MB → GB → TB → PB</li>
    </ul></li>
  <li>SEGURIDAD INFORMÁTICA
    <ul>
      <li>Triada CIA: Confidencialidad + Integridad + Disponibilidad</li>
      <li>Marco normativo AAPP: Esquema Nacional de Seguridad — ENS (RD 3/2010, actualiz. RD 311/2022)
        <ul>
          <li>→ Categorías: básica / media / alta según impacto del fallo</li>
        </ul></li>
      <li>Amenazas:
        <ul>
          <li>Malware: virus / gusano / troyano / RANSOMWARE (cifra y pide rescate) /
            <ul>
              <li>spyware / keylogger / rootkit</li>
            </ul></li>
          <li>Phishing / ingeniería social: suplantación de identidad para robar credenciales</li>
          <li>Ataques a contraseñas: fuerza bruta / diccionario / credential stuffing</li>
          <li>DoS/DDoS: saturación del servicio para hacerlo inaccesible</li>
        </ul></li>
      <li>Medidas de protección:
        <ul>
          <li>Antivirus / antimalware → actualizado (Windows: Defender integrado)</li>
          <li>Firewall (cortafuegos): controla tráfico de red</li>
          <li>Actualizaciones del SO y aplicaciones: corrigen vulnerabilidades</li>
          <li>Contraseñas seguras: larga + mixta (may/min/núm/especiales) + única por servicio</li>
          <li>2FA (doble factor): contraseña + OTP/biometría/token físico</li>
          <li>Copias de seguridad (backup): regla 3-2-1 (3 copias / 2 soportes / 1 offsite)</li>
          <li>Cifrado: BitLocker (disco) / HTTPS (navegación) / VPN (red)</li>
          <li>Buenas prácticas: no abrir adjuntos sospechosos / bloquear equipo / no conectar USB desconocidos /
            <ul>
              <li>no usar Wi-Fi pública sin VPN / reportar incidencias</li>
            </ul></li>
        </ul></li>
      <li>ENS: principios: seguridad integral / gestión de riesgos / prevención-detección-respuesta-recuperación / mejora continua</li>
    </ul></li>
</ul>
</div>

---

*Fin del Tema 36 — Administrativo C1 | Preparación OEP 2026*
