---
tema: 40
titulo: "La Red Internet: origen, evolución y estado actual. Conceptos elementales sobre protocolos y servicios en Internet. Funcionalidades básicas de los navegadores web."
---

> **Referencia del programa:** Adams 2026. Versión de referencia: navegadores actuales (Microsoft Edge, Google Chrome, Mozilla Firefox).

---

## 1. ORIGEN Y EVOLUCIÓN DE INTERNET

### 1.1 Los orígenes: ARPANET (1969)

Internet tiene su origen en **ARPANET** (Advanced Research Projects Agency Network), la red desarrollada por el Departamento de Defensa de los Estados Unidos a finales de los años 60. ARPANET fue la primera red de ordenadores que utilizó la **conmutación de paquetes** (técnica que divide la información en pequeños fragmentos llamados paquetes, que se transmiten de forma independiente y se reensamblan en el destino), en lugar de la conmutación de circuitos utilizada en la telefonía tradicional.

La primera conexión de ARPANET se estableció el **29 de octubre de 1969** entre la Universidad de California en Los Ángeles (UCLA) y el Stanford Research Institute. El mensaje que se intentó enviar fue «login», pero el sistema se bloqueó tras las dos primeras letras: la primera comunicación real de internet fue, literalmente, «lo».

### 1.2 Los protocolos TCP/IP (1974-1983)

El gran salto hacia la internet moderna se produjo con el desarrollo del protocolo **TCP/IP** (Transmissión Control Protocol / Internet Protocol) por Vinton Cerf y Robert Kahn, publicado en 1974 y adoptado como estándar de ARPANET en **1983**. TCP/IP resolvió el problema de la interoperabilidad: permitió que redes distintas, con tecnologías diferentes, pudieran comunicarse entre sí siguiendo un protocolo común. Por eso se considera a Cerf y Kahn los «padres de internet».

### 1.3 La World Wide Web y la expansión civil (1991)

Internet era hasta finales de los años 80 una red de uso fundamentalmente académico y militar. El salto a la sociedad civil se produjo con la invención de la **World Wide Web (WWW)** por **Tim Berners-Lee**, investigador del CERN (Ginebra), en **1991**.

Berners-Lee ideó un sistema de documentos de hipertexto interconectados mediante enlaces (**hipervínculos**), accesibles a través de internet mediante un protocolo específico (HTTP) y visualizados en un programa llamado **navegador web** (browser). La primera página web de la historia se publicó en agosto de 1991 en el servidor del CERN.

En 1993, el navegador **Mosaic** (desarrollado por el NCSA) popularizó la web al ser el primero en mostrar imágenes junto al texto, haciendo la experiencia visual y accesible para el público general. Le siguieron **Netscape Navigator** (1994), **Internet Explorer** (1995) y otros.

### 1.4 La expansión de los años 90 y la burbuja .com

Durante la segunda mitad de los años 90 se produjo una expansión explosiva de internet: aparecieron los primeros buscadores (Yahoo!, AltaVista, Google en 1998), el comercio electrónico (Amazon en 1994, eBay en 1995), el correo electrónico comercial y los primeros portales web. Este período terminó con el estallido de la **burbuja punto com** en 2000-2001, cuando muchas empresas de internet sin modelo de negocio sostenible quebraron.

### 1.5 La Web 2.0 y las redes sociales (2004 en adelante)

El concepto de **Web 2.0** (término popularizado en 2004) describe la evolución de la web hacia la **participación activa de los usuarios**: en lugar de ser solo consumidores de contenido, los usuarios pasan a ser también productores. Surgen los blogs, las wikis (Wikipedia, 2001), las redes sociales (Facebook 2004, Twitter 2006, YouTube 2005, Instagram 2010) y los servicios en la nube.

### 1.6 La Web Móvil y el IoT (2007 en adelante)

El lanzamiento del **iPhone** en 2007 y la expansión de los smartphones transformaron el acceso a internet: por primera vez más de la mitad del tráfico web proviene de dispositivos móviles. Paralelamente, el **Internet de las cosas (IoT)** conecta a internet dispositivos cotidianos (electrodomésticos, sensores, wearables, vehículos), ampliando la red más allá de los ordenadores tradicionales.

### 1.7 Estado actual

En la actualidad, internet es una infraestructura global que conecta a más de **5.000 millones de usuarios** en todo el mundo. Sus carácterísticas actuales son:

- **Ubicuidad:** accesible desde smartphones, tabletas, ordenadores, televisores y todo tipo de dispositivos.
- **Velocidad:** las conexiones de banda ancha (fibra óptica) alcanzan velocidades de 1 Gbps o más; las redes móviles 5G superan los 100 Mbps.
- **Servicios en la nube:** el almacenamiento, el procesamiento y las aplicaciones se trasladan progresivamente a servidores remotos.
- **Inteligencia artificial:** los motores de búsqueda, los asistentes virtuales, la personalización de contenidos y los servicios de traducción están impulsados por IA.
- **Ciberseguridad:** la creciente dependencia de internet ha convertido la seguridad en una prioridad global.
- **Regulación:** la Unión Europea lidera la regulación de internet con normas como el RGPD (privacidad), la DSA (servicios digitales) y la DMA (mercados digitales).

---

## 2. CONCEPTOS ELEMENTALES SOBRE PROTOCOLOS Y SERVICIOS EN INTERNET

### 2.1 Qué es un protocolo de red

Un **protocolo de red** es un conjunto de reglas y estándares que definen cómo se comunican los dispositivos en una red: el formato de los mensajes, el orden en que se intercambian, cómo se gestionan los errores y cómo se establece y cierra una conexión. Los protocolos permiten que equipos de fabricantes distintos, con sistemas operativos diferentes, puedan comunicarse sin problemas.

Los protocolos de internet se organizan en capas (modelo OSI o modelo TCP/IP), de forma que cada capa se encarga de una función específica y proporciona servicios a la capa superior.

### 2.2 El protocolo TCP/IP

**TCP/IP** es el protocolo fundamental de internet, en realidad una suite (conjunto) de protocolos que trabajan juntos:

**IP (Internet Protocol):** se encarga del **direccionamiento** y el **enrutamiento** de los paquetes de datos. Cada dispositivo conectado a internet tiene asignada una **dirección IP** (Internet Protocol Address) que lo identifica de forma única en la red.

- **IPv4:** dirección de 32 bits, expresada en cuatro grupos de números decimales separados por puntos (ej. 192.168.1.1). Permite algo más de 4.000 millones de direcciones únicas, insuficiente para el número actual de dispositivos.
- **IPv6:** dirección de 128 bits, expresada en ocho grupos de cuatro dígitos hexadecimales separados por dos puntos (ej. 2001:0db8:85a3:0000:0000:8a2e:0370:7334). Prácticamente ilimitada en número de direcciones.

**TCP (Transmissión Control Protocol):** se encarga de la **transmisión fiable** de los datos. Divide los datos en paquetes, garantiza que todos llegan al destino, los reordena si llegan desordenados y solicita la retransmisión de los que se pierden.

**UDP (User Datagram Protocol):** alternativa a TCP para aplicaciones que priorizan la velocidad sobre la fiabilidad (videollamadas, streaming, juegos online): envía los paquetes sin garantizar su entrega ni su orden.

### 2.3 El Sistema de Nombres de Dominio (DNS)

Las personas recordamos las direcciones web por su nombre (www.diputaciondeburgos.es), no por su dirección IP (un número como 85.32.149.5). El **DNS** (Domain Name System — Sistema de Nombres de Dominio) es el sistema que traduce los nombres de dominio en direcciones IP.

Cuándo el usuario escribe una URL en el navegador, este consulta al servidor DNS para obtener la dirección IP correspondiente y poder conectarse al servidor web. El DNS funciona como una agenda telefónica distribuida de internet.

**Estructura de un nombre de dominio:**

Un nombre de dominio se lee de derecha a izquierda, en niveles jerárquicos:

| Parte | Ejemplo | Significado |
|---|---|---|
| **Dominio de nivel superior (TLD)** | .es / .com / .org / .gov / .eu | Tipo de entidad o país |
| **Dominio de segundo nivel** | diputaciondeburgos | Nombre de la organización |
| **Subdominio** | www / correo / sede | Servicio específico |

La URL completa sería: https://sede.diputaciondeburgos.es

**TLD más habituales:**

| TLD | Uso |
|---|---|
| **.com** | Organizaciones comerciales (uso generalizado) |
| **.org** | Organizaciones sin ánimo de lucro |
| **.net** | Redes e infraestructuras |
| **.gov** | Administración pública de EEUU |
| **.gob.es** | Administración pública española |
| **.es** | Dominio de España |
| **.eu** | Unión Europea |
| **.edu** | Instituciones educativas (EEUU) |

### 2.4 Protocolo HTTP y HTTPS

**HTTP** (HyperText Transfer Protocol) es el protocolo que define cómo se comunican el navegador web del usuario (cliente) y el servidor web donde está alojada la página que se quiere consultar. Funciona mediante un modelo de petición-respuesta:

1. El navegador envía una **petición HTTP** al servidor (GET, POST, etc.).
2. El servidor responde con un **código de estado** y el contenido solicitado (la página HTML, la imagen, etc.).

**Códigos de estado HTTP más habituales:**

| Código | Significado |
|---|---|
| **200 OK** | La petición se ha completado correctamente |
| **301 / 302** | Redirección permanente / temporal a otra URL |
| **400 Bad Request** | La petición del cliente es incorrecta |
| **401 Unauthorized** | Se requiere autenticación |
| **403 Forbidden** | El servidor rechaza la petición (acceso denegado) |
| **404 Not Found** | El recurso solicitado no existe en el servidor |
| **500 Internal Server Error** | Error en el servidor |

**HTTPS** (HTTP Secure) es la versión segura del protocolo HTTP: añade una capa de **cifrado SSL/TLS** que protege la comunicación entre el navegador y el servidor, garantizando la **confidencialidad** (nadie puede interceptar los datos en tránsito), la **integridad** (los datos no pueden modificarse durante la transmisión) y la **autenticidad** (el certificado SSL garantiza que el servidor es quien dice ser).

Se identifica por el **prefijo https://** en la URL y por el **icono de candado** en la barra de direcciones del navegador. Es obligatorio para cualquier web que maneje datos personales o transacciones económicas. Las sedes electrónicas de las Administraciones Públicas deben usar siempre HTTPS.

### 2.5 Otros protocolos y servicios de internet

#### 2.5.1 Correo electrónico

El correo electrónico utiliza varios protocolos complementarios:

| Protocolo | Función |
|---|---|
| **SMTP** (Simple Mail Transfer Protocol) | Protocolo para el **envío** de correos electrónicos desde el cliente al servidor de correo y entre servidores |
| **POP3** (Post Office Protocol v3) | Protocolo para **recibir** correos: descarga los mensajes del servidor al cliente y (por defecto) los elimina del servidor |
| **IMAP** (Internet Message Access Protocol) | Protocolo para **acceder** a los correos: los mensajes permanecen en el servidor y el cliente los consulta remotamente; permite acceso desde múltiples dispositivos |

En el entorno actual, **IMAP** ha desplazado a POP3 porque permite sincronizar el correo entre varios dispositivos (ordenador, smartphone, tablet), lo que es fundamental en el entorno de trabajo moderno.

#### 2.5.2 FTP

**FTP** (File Transfer Protocol) es el protocolo para la **transferencia de archivos** entre sistemas en una red. Permite subir y descargar archivos a un servidor remoto. Su variante segura es **FTPS** (FTP Secure, con cifrado SSL/TLS) o **SFTP** (SSH File Transfer Protocol, que usa el protocolo SSH para el cifrado).

En el entorno de las Administraciones Públicas, FTP/SFTP se utiliza para intercambiar grandes volúmenes de archivos con otras entidades o para subir actualizaciones a servidores web.

#### 2.5.3 VPN

Una **VPN** (Virtual Private Network — Red Privada Virtual) es una conexión cifrada que se establece a través de internet entre el dispositivo del usuario y un servidor VPN, creando un túnel seguro que protege el tráfico de datos. Permite:

- Acceder de forma segura a la red interna de una organización desde el exterior (teletrabajo).
- Proteger la conexión cuando se usa una red Wi-Fi pública.
- Ocultar la dirección IP real del usuario.

En las Administraciones Públicas, las VPN son la solución habitual para el acceso remoto seguro de los empleados públicos en situaciones de teletrabajo.

#### 2.5.4 Wi-Fi y otras formas de conexión a internet

| Tecnología | Descripción |
|---|---|
| **ADSL** | Conexión a internet a través de la línea telefónica convencional; velocidades de hasta 20-50 Mbps |
| **Fibra óptica** | Conexión a través de cable de fibra óptica; velocidades de 100 Mbps a 10 Gbps; la más extendida actualmente |
| **Wi-Fi** | Conexión inalámbrica de área local (LAN); los equipos se conectan al router mediante ondas de radio. Estándares: Wi-Fi 5 (802.11ac) y Wi-Fi 6 (802.11ax) |
| **4G / 5G** | Redes móviles de cuarta y quinta generación; 5G supera los 100 Mbps y reduce la latencia por debajo de 1 ms |
| **Ethernet** | Conexión por cable de red (RJ-45); muy estable y rápida, habitual en entornos de oficina |

#### 2.5.5 La dirección URL

La **URL** (Uniform Resource Locator — Localizador Uniforme de Recursos) es la dirección completa que identifica un recurso en internet. Su estructura es:

<div class="study-list study-list-summary">
<ul>
  <li><code>https://sede.diputaciondeburgos.es/carpeta/página.html</code>
    <ul>
      <li><strong>Protocolo:</strong> <code>https://</code></li>
      <li><strong>Nombre de dominio:</strong> <code>sede.diputaciondeburgos.es</code></li>
      <li><strong>Directorio:</strong> <code>/carpeta/</code></li>
      <li><strong>Ruta del recurso:</strong> <code>página.html</code></li>
    </ul></li>
</ul>
</div>

Partes de una URL:
- **Protocolo:** https://, http://, ftp://, etc.
- **Nombre de host / dominio:** la dirección del servidor (www.ejemplo.es).
- **Ruta:** la ubicación del recurso en el servidor (/carpeta/pagina.html).
- **Parámetros** (opcional): información adicional enviada al servidor (?id=123&categoria=noticias).
- **Ancla o fragmento** (opcional): referencia a una sección específica de la página (#seccion2).

### 2.6 La Nube (Cloud Computing)

La **computación en la nube** (cloud computing) es el modelo de prestación de servicios informáticos (almacenamiento, servidores, software, bases de datos, redes) a través de internet, con facturación por uso.

Los tres modelos principales de servicio en la nube son:

| Modelo | Significado | Ejemplos |
|---|---|---|
| **IaaS** (Infrastructure as a Service) | Infraestructura física virtualizada (servidores, almacenamiento, redes) | Amazon AWS, Microsoft Azure, Google Cloud |
| **PaaS** (Platform as a Service) | Plataforma para desarrollar y desplegar aplicaciones sin gestionar la infraestructura subyacente | Google App Engine, Azure App Service |
| **SaaS** (Software as a Service) | Software accesible desde el navegador sin instalación local | Microsoft 365, Google Workspace, Salesforce |

---

## 3. FUNCIONALIDADES BÁSICAS DE LOS NAVEGADORES WEB

### 3.1 Qué es un navegador web

Un **navegador web** (browser) es el programa que permite al usuario acceder, visualizar e interactuar con los recursos disponibles en la World Wide Web. El navegador interpreta el código HTML, CSS y JavaScript de las páginas web y los muestra de forma visual e interactiva.

### 3.2 Principales navegadores actuales

| Navegador | Desarrollador | Motor de renderizado | Cuota de mercado (aprox.) |
|---|---|---|---|
| **Google Chrome** | Google | Blink | ~65% (el más usado) |
| **Microsoft Edge** | Microsoft | Blink (desde 2020) | ~13% |
| **Mozilla Firefox** | Mozilla Foundation | Gecko | ~3-5% |
| **Safari** | Apple | WebKit | ~19% (mayoritariamente en dispositivos Apple) |
| **Opera** | Opera Software | Blink | ~2% |

**Microsoft Edge** es el navegador predeterminado de Windows 11 y la opción recomendada en el entorno corporativo de Microsoft. Está basado en el mismo motor que Chrome (Chromium/Blink), lo que garantiza compatibilidad con la mayoría de las páginas web y con las extensiones disponibles para Chrome.

### 3.3 Elementos de la interfaz del navegador

| Elemento | Descripción |
|---|---|
| **Barra de dirección (omnibox)** | Campo donde se escribe la URL de la página que se quiere visitar o los términos de búsqueda (en los navegadores modernos, actúa también como barra de búsqueda). En Chrome y Edge se denomina **omnibox** |
| **Botones de navegación** | **← (Atrás):** vuelve a la página anterior / **→ (Adelante):** avanza a la página siguiente / **↺ (Actualizar):** recarga la página actual |
| **Inicio** | Botón (configurable) que lleva a la página de inicio definida por el usuario |
| **Pestañas (tabs)** | Permiten tener varias páginas abiertas simultáneamente en la misma ventana del navegador |
| **Barra de marcadores (favoritos)** | Barra con accesos directos a las páginas guardadas como favoritos/marcadores |
| **Botón de extensiones** | Acceso a las extensiones instaladas en el navegador |
| **Menú principal (≡ o ...)** | Acceso a todas las opciones del navegador: historial, descargas, configuración, herramientas, etc. |
| **Icono de seguridad / candado** | Indica si la conexión con el sitio web es segura (HTTPS con certificado válido) o no |

### 3.4 Funcionalidades básicas del navegador

#### 3.4.1 Navegación por páginas web

- **Escribir una URL:** hacer clic en la barra de dirección, escribir la URL y pulsar **Enter**.
- **Buscar desde la barra de dirección:** escribir los términos de búsqueda (sin URL completa); el navegador los envía al motor de búsqueda predeterminado (por defecto, Google en Chrome, Bing en Edge).
- **Navegar entre páginas:** usar los botones **← Atrás** y **→ Adelante** o los atajos **Alt + ← / Alt + →**.
- **Actualizar la página:** botón **↺** o tecla **F5**. Para actualización forzada (sin caché): **Ctrl + F5** o **Ctrl + Mayúsculas + R**.
- **Detener la carga:** tecla **Esc**.
- **Ir a la página de inicio:** botón de inicio (si está visible) o **Alt + Inicio**.

#### 3.4.2 Gestión de pestañas

| Acción | Atajo |
|---|---|
| Nueva pestaña | Ctrl + T |
| Cerrar pestaña activa | Ctrl + W |
| Reabrir la última pestaña cerrada | Ctrl + Mayúsculas + T |
| Cambiar a la siguiente pestaña | Ctrl + Tab |
| Cambiar a una pestaña concreta | Ctrl + 1 a 9 |
| Nueva ventana | Ctrl + N |
| Nueva ventana de incógnito / InPrivate | Ctrl + Mayúsculas + N |

**Pestañas ancladas:** al hacer clic derecho en una pestaña → **Anclar pestaña**, esta queda fijada a la izquierda de la barra de pestañas y no puede cerrarse accidentalmente.

#### 3.4.3 Favoritos / Marcadores

Los **favoritos** (llamados **marcadores** en Firefox y en la terminología técnica) permiten guardar la URL de una página para acceder a ella rápidamente en el futuro.

- **Añadir favorito:** clic en el icono de estrella (☆) en la barra de dirección, o **Ctrl + D**.
- **Ver favoritos guardados:** barra de marcadores (Ctrl + Mayúsculas + B para mostrarla/ocultarla) o desde el menú principal → Favoritos/Marcadores.
- **Organizar favoritos:** se pueden crear carpetas para agrupar los favoritos por categorías.
- **Importar/Exportar favoritos:** el navegador permite importar marcadores de otro navegador o exportarlos a un archivo HTML.

#### 3.4.4 Historial de navegación

El **historial** registra las páginas web visitadas por el usuario, con la fecha y hora de cada visita. Se accede desde el menú principal o con **Ctrl + H**.

Funciones del historial:
- Ver las páginas visitadas recientemente.
- Volver a visitar una página buscándola en el historial.
- Eliminar entradas individuales o todo el historial.

El historial forma parte de los **datos de navegación** que puede borrarse desde la configuración del navegador.

#### 3.4.5 Descargas

El **gestor de descargas** lleva un registro de los archivos descargados desde el navegador. Se accede con **Ctrl + J** o desde el menú principal → Descargas.

Desde el gestor de descargas se puede:
- Ver el progreso de las descargas en curso.
- Abrir los archivos descargados.
- Abrir la carpeta donde se han guardado.
- Cancelar o reintentar descargas.

La carpeta de descarga predeterminada puede cambiarse en la configuración del navegador.

#### 3.4.6 Búsqueda en la página

Para buscar un texto concreto dentro de la página que se está visualizando: **Ctrl + F**. Abre la barra de búsqueda dentro de la página, donde se puede escribir el término buscado; el navegador resalta todas las coincidencias y permite navegar entre ellas.

#### 3.4.7 Zoom

- **Aumentar zoom:** Ctrl + / Ctrl + rueda del ratón hacia arriba.
- **Reducir zoom:** Ctrl - / Ctrl + rueda del ratón hacia abajo.
- **Restaurar zoom al 100%:** Ctrl + 0.

El nivel de zoom afecta solo a la visualización, no al contenido real de la página.

#### 3.4.8 Guardar la página web

- **Guardar como:** Ctrl + S. Permite guardar la página web completa (HTML + recursos) o solo el HTML en el equipo local para consultarla sin conexión.
- **Imprimir:** Ctrl + P. El navegador abre la vista de impresión desde la que se puede imprimir la página o guardarla como PDF.

#### 3.4.9 Modo pantalla completa

**F11** activa el modo de pantalla completa, ocultando la interfaz del navegador para que la página ocupe toda la pantalla. Se desactiva volviendo a pulsar **F11** o la tecla **Esc**.

### 3.5 Privacidad y seguridad en el navegador

#### 3.5.1 Borrar datos de navegación

Desde **Configuración → Privacidad y seguridad** (o con **Ctrl + Mayúsculas + Supr**) se pueden eliminar:

| Dato | Descripción |
|---|---|
| **Historial de navegación** | Registro de páginas visitadas |
| **Cookies** | Pequeños archivos que los sitios web guardan en el navegador para recordar preferencias, sesiones iniciadas, etc. |
| **Caché** | Copias de páginas e imágenes almacenadas localmente para acelerar la carga en visitas sucesivas |
| **Contraseñas guardadas** | Credenciales de inicio de sesión almacenadas en el navegador |
| **Datos de formularios** | Texto introducido anteriormente en formularios web |

#### 3.5.2 Navegación privada / InPrivate / Incógnito

La **navegación privada** (InPrivate en Edge, Incógnito en Chrome, Ventana privada en Firefox) abre una ventana de navegación en la que:
- No se guarda el historial de navegación.
- No se guardan cookies ni datos de formularios al cerrar la ventana.
- Los favoritos añadidos y los archivos descargados **sí** se conservan.

**Importante:** la navegación privada NO hace al usuario anónimo en internet: el proveedor de acceso a internet (ISP), el empleador (si se usa la red corporativa) y los sitios web visitados pueden seguir registrando la actividad.

#### 3.5.3 Las cookies

Las **cookies** son pequeños archivos de texto que los sitios web almacenan en el navegador del usuario para distintos propósitos:

| Tipo | Función |
|---|---|
| **Cookies de sesión** | Mantienen la sesión iniciada mientras el usuario navega; se eliminan al cerrar el navegador |
| **Cookies persistentes** | Permanecen en el equipo durante un tiempo determinado; recuerdan preferencias, idioma, inicio de sesión, etc. |
| **Cookies propias** | Las crea el sitio web que se está visitando |
| **Cookies de terceros** | Las crean dominios distintos al que se visita; usadas habitualmente para publicidad dirigida y seguimiento del usuario entre sitios |

El RGPD exige que los sitios web informen a los usuarios sobre el uso de cookies y obtengan su consentimiento para las cookies no esenciales, de ahí los ubicuos **banners de cookies** que aparecen en todas las páginas web.

#### 3.5.4 Las extensiones o complementos

Las **extensiones** (extensions o add-ons) son pequeños programas que se instalan en el navegador para añadir funcionalidades adicionales:

- Bloqueadores de publicidad (uBlock Origin).
- Gestores de contraseñas (LastPass, Bitwarden).
- Traductores.
- Comprobadores de gramática y ortografía.
- Herramientas de accesibilidad.
- Integraciones con servicios específicos.

Las extensiones se instalan desde la tienda de extensiones del navegador (Chrome Web Store para Chrome, Microsoft Edge Add-ons para Edge).

**Precaución:** instalar extensiones de fuentes no confiables puede suponer un riesgo para la seguridad y la privacidad, ya que algunas extensiones maliciosas pueden robar datos o redirigir el tráfico de navegación.

### 3.6 Herramientas del navegador para el entorno administrativo

En el entorno de las Administraciones Públicas, los navegadores web son la puerta de entrada a:

- Las **sedes electrónicas** y portales de tramitación de las Administraciones (interna y de otras AAPP).
- Los sistemas de **gestión de expedientes** accesibles vía web.
- El **Portal de Transparencia** y otros portales de información pública.
- Los servicios de **Microsoft 365** accesibles vía web (Outlook Web, SharePoint, Teams).
- La **Carpeta Ciudadana** y el sistema de notificaciones electrónicas (DEHú).

Para acceder a las sedes electrónicas con certificado digital o DNI electrónico, es habitual que el navegador requiera la instalación de software adicional (como **AutoFirma**, la aplicación del Ministerio de Asuntos Económicos que permite firmar documentos con certificado electrónico desde el navegador).

---

## RESUMEN ESQUEMÁTICO PARA REPASAR

<div class="study-list study-list-summary">
<ul>
  <li>ORIGEN Y EVOLUCIÓN DE INTERNET
    <ul>
      <li>1969: ARPANET — primera red con conmutación de paquetes (Dpto. Defensa EE.UU.)
        <ul>
          <li>Primera conexión: UCLA ↔ Stanford Research Institute (29/10/1969)</li>
        </ul></li>
      <li>1974-1983: TCP/IP — Vinton Cerf y Robert Kahn / estándar de ARPANET en 1983</li>
      <li>1991: World Wide Web — Tim Berners-Lee (CERN) / hipertexto + HTTP + navegador
        <ul>
          <li>Primera página web: agosto 1991 / Primer navegador visual: Mosaic (1993)</li>
        </ul></li>
      <li>1990s: buscadores (Yahoo!, AltaVista, Google 1998) / e-commerce / burbuja .com (2000)</li>
      <li>2004+: Web 2.0 — participación del usuario / blogs / wikis / redes sociales
        <ul>
          <li>(Facebook 2004, YouTube 2005, Twitter 2006)</li>
        </ul></li>
      <li>2007+: Web móvil (iPhone) → más tráfico desde móvil que desde PC / IoT</li>
      <li>Actualidad: +5.000 M usuarios / fibra / 5G / IA / cloud / regulación UE (RGPD, DSA, DMA)</li>
    </ul></li>
  <li>PROTOCOLOS Y SERVICIOS
    <ul>
      <li>TCP/IP: protocolo fundamental de internet
        <ul>
          <li>IP: direccionamiento y enrutamiento de paquetes
            <ul>
              <li>→ IPv4: 32 bits / cuatro grupos decimales (ej. 192.168.1.1) / ~4.000 M dir. → IPv6: 128 bits / ocho grupos hexadecimales / prácticamente ilimitado</li>
            </ul></li>
          <li>TCP: transmisión FIABLE (garantiza entrega, orden y retransmisión)</li>
          <li>UDP: transmisión rápida sin garantía de entrega (streaming, videollamadas)</li>
        </ul></li>
      <li>DNS: traduce nombres de dominio en direcciones IP
        <ul>
          <li>→ Estructura: protocolo://subdominio.dominio.TLD/ruta → TLD: .com / .org / .es / .gob.es / .eu / .edu</li>
        </ul></li>
      <li>HTTP / HTTPS
        <ul>
          <li>HTTP: protocolo de transferencia de hipertexto (petición-respuesta cliente-servidor)
            <ul>
              <li>→ Códigos: 200 OK / 301-302 redirección / 404 no encontrado / 500 error servidor</li>
            </ul></li>
          <li>HTTPS: HTTP + cifrado SSL/TLS → confidencialidad + integridad + autenticidad
            <ul>
              <li>→ Candado en el navegador / obligatorio para sedes electrónicas y datos personales</li>
            </ul></li>
        </ul></li>
      <li>Correo electrónico:
        <ul>
          <li>SMTP: envío de correos (cliente → servidor y entre servidores)</li>
          <li>POP3: descarga mensajes del servidor (los elimina del servidor por defecto)</li>
          <li>IMAP: accede a mensajes en el servidor sin descargarlos (sincronización multi-dispositivo)
            <ul>
              <li>→ IMAP ha desplazado a POP3 por permitir acceso desde varios dispositivos</li>
            </ul></li>
        </ul></li>
      <li>FTP / SFTP: transferencia de archivos entre sistemas</li>
      <li>VPN: túnel cifrado a través de internet → acceso remoto seguro (teletrabajo)</li>
      <li>URL: protocolo + dominio + ruta (+ parámetros + ancla)</li>
      <li>Cloud Computing: IaaS / PaaS / SaaS
        <ul>
          <li>→ SaaS relevante: Microsoft 365, Google Workspace (acceso vía navegador)</li>
        </ul></li>
    </ul></li>
  <li>NAVEGADORES WEB
    <ul>
      <li>Concepto: programa que interpreta HTML/CSS/JS y muestra páginas web</li>
      <li>Principales: Chrome (Blink, ~65%) / Edge (Blink, pred. Windows 11) /
        <ul>
          <li>Firefox (Gecko) / Safari (WebKit, Apple)</li>
        </ul></li>
      <li>Interfaz: barra de dirección (omnibox) / botones ←→↺ / pestañas /
        <ul>
          <li>barra de favoritos / candado de seguridad / menú principal</li>
        </ul></li>
      <li>FUNCIONALIDADES
        <ul>
          <li>Navegación: escribir URL / buscar desde omnibox / Atrás-Adelante / F5 (actualizar) /
            <ul>
              <li>Ctrl+F5 (actualización forzada sin caché) / Esc (detener)</li>
            </ul></li>
          <li>Pestañas: Ctrl+T (nueva) / Ctrl+W (cerrar) / Ctrl+Mayúsc+T (reabrir cerrada)
            <ul>
              <li>Ctrl+Mayúsc+N (incógnito/InPrivate)</li>
            </ul></li>
          <li>Favoritos/Marcadores: Ctrl+D (añadir) / organizar en carpetas / importar-exportar</li>
          <li>Historial: Ctrl+H / ver y eliminar páginas visitadas</li>
          <li>Descargas: Ctrl+J / gestionar archivos descargados</li>
          <li>Búsqueda en página: Ctrl+F → resalta coincidencias</li>
          <li>Zoom: Ctrl+ / Ctrl- / Ctrl+0 (restaurar 100%)</li>
          <li>Pantalla completa: F11</li>
        </ul></li>
      <li>PRIVACIDAD Y SEGURIDAD
        <ul>
          <li>Borrar datos (Ctrl+Mayúsc+Supr): historial / cookies / caché / contraseñas</li>
          <li>Navegación privada/incógnito: no guarda historial ni cookies al cerrar
            <ul>
              <li>¡ATENCIÓN! No hace anónimo al usuario frente al ISP, empleador ni sitios web</li>
            </ul></li>
          <li>Cookies: sesión / persistentes / propias / terceros (publicidad)
            <ul>
              <li>→ RGPD: banner de cookies + consentimiento para no esenciales</li>
            </ul></li>
          <li>Extensiones: añaden funcionalidades / solo instalar de fuentes confiables</li>
        </ul></li>
      <li>En el entorno administrativo:
        <ul>
          <li>→ Acceso a sedes electrónicas / expedientes / Portal Transparencia / Microsoft 365 web / DEHú / Carpeta Ciudadana → AutoFirma: aplicación para firmar con certificado electrónico desde el navegador</li>
        </ul></li>
    </ul></li>
</ul>
</div>

---

*Fin del Tema 40 — Administrativo C1 | Preparación OEP 2026*

---

**¡TEMARIO COMPLETO! Temas 1-40 desarrollados.**
