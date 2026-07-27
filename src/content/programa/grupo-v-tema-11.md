---
grupo: "Grupo V. Competencias"
tema: 11
codigo: "Tema V.11"
titulo: "Correo electrónico: conceptos elementales y funcionamiento. La red Internet: conceptos elementales y servicios."
estado: "revisado"
---

## 1. Qué hay que dominar

El tema reúne dos bloques conectados, pero distintos: el **correo electrónico**, que intercambia mensajes entre buzones, y **Internet**, que es la red mundial de redes y ofrece muchos servicios. En un test hay que distinguir servicio, programa cliente, protocolo, dirección y canal administrativo.

### Mapa de conceptos

| Concepto | Qué es | Ejemplo |
| --- | --- | --- |
| Servicio | Prestación disponible en la red | correo, web, videoconferencia |
| Cliente | Programa con el que se usa un servicio | Outlook, navegador |
| Protocolo | Reglas de comunicación | SMTP, IMAP, HTTP |
| Dirección | Identificador o localizador | usuario@dominio, URL, IP |
| Servidor | Equipo o servicio que atiende peticiones | servidor de correo o web |

> **Regla de examen:** Outlook no es un protocolo; una URL no es una dirección de correo; HTTPS no es un navegador; y el correo ordinario no sustituye por sí solo al registro ni a la notificación administrativa.

## 2. Correo electrónico: concepto y elementos

El correo electrónico permite enviar y recibir mensajes mediante buzones gestionados por servidores. Una dirección tiene normalmente la forma `usuario@dominio`: la parte anterior a `@` identifica el buzón dentro del dominio y la posterior identifica el dominio del servicio.

Un mensaje puede contener:

1. **Remitente**, que lo envía; y destinatarios principales en **Para**.
2. **Asunto**, que resume el contenido y facilita su localización.
3. **Cuerpo**, con el texto del mensaje.
4. **CC**, para informar a destinatarios visibles para los demás receptores.
5. **CCO**, para enviar copias sin mostrar esas direcciones al resto.
6. **Adjuntos**, que incorporan archivos y deben comprobarse antes del envío.
7. Fecha, firma, respuesta, reenvío y, según el sistema, clasificación o prioridad.

| Campo | Uso | Trampa habitual |
| --- | --- | --- |
| Para | Destinatario principal | No oculta direcciones |
| CC | Destinatario informado y visible | No equivale a CCO |
| CCO | Copia oculta | <mark>No cifra el mensaje ni sus adjuntos</mark> |
| Asunto | Identificación rápida del mensaje | «Urgente» no explica el contenido |
| Adjunto | Archivo añadido al mensaje | No convierte el correo en registro |

En clientes como Outlook pueden existir carpetas de entrada, enviados, borradores, eliminados, correo no deseado y carpetas personalizadas. Las reglas, filtros, búsquedas, firmas y listas de distribución automatizan la gestión, pero no cambian la naturaleza jurídica del mensaje.

### Correo y actuación administrativa

Un correo puede servir para avisar, coordinar, remitir información o mantener una comunicación de trabajo. Sin embargo, deben utilizarse el **registro electrónico** para presentar solicitudes, escritos o documentos cuando proceda, y la **notificación electrónica** para comunicar formalmente actos administrativos conforme a sus reglas. La sede electrónica ofrece el punto oficial de acceso a trámites y servicios; no es sinónimo de buzón de correo.

> **Muy importante:** recibir un correo informativo no demuestra necesariamente que se haya practicado una notificación administrativa válida. Tampoco el adjunto de un correo acredita por sí solo la presentación en registro.

## 3. Funcionamiento y protocolos del correo

El mensaje no suele viajar directamente de un ordenador a otro. El cliente entrega el mensaje a un servidor de salida; los servidores localizan el dominio destinatario y el mensaje queda disponible en el buzón del receptor. El cliente receptor consulta o sincroniza ese buzón.

| Protocolo | Función esencial | Cómo recordarlo |
| --- | --- | --- |
| **SMTP** | Envío desde el cliente al servidor y transferencia entre servidores | **S**end / salida |
| **IMAP** | Acceso y sincronización del buzón conservado en el servidor | Varias vistas sincronizadas |
| **POP3** | Descarga de mensajes según la configuración del cliente | Descarga; no presupone siempre borrado |

SMTP se asocia al envío. IMAP permite que varios dispositivos vean carpetas, mensajes leídos y enviados de forma sincronizada. POP3 descarga el correo y su conservación o eliminación del servidor depende de la configuración; por eso no debe memorizarse como una eliminación obligatoria.

La seguridad del correo puede incluir cifrado de la conexión, autenticación, filtros antispam y análisis de adjuntos. Que un mensaje use una conexión segura no garantiza que el remitente sea legítimo ni que su contenido sea inocuo.

### Adjuntos y operaciones frecuentes

Antes de abrir o enviar un archivo se comprueba el destinatario, la versión, el formato, el tamaño, la confidencialidad y la existencia de datos personales innecesarios. Si el archivo es voluminoso o contiene información sensible, se utiliza el canal corporativo o la sede/plataforma que corresponda, con permisos y trazabilidad.

**Spam** es correo no solicitado, generalmente masivo. El filtro antispam ayuda a clasificarlo, pero no sustituye la prudencia. El **phishing** intenta engañar al destinatario para obtener credenciales, datos o pagos; la suplantación puede usar el nombre o la imagen de una organización real.

## 4. Internet y sus conceptos elementales

<mark>Internet es una red mundial de redes</mark> que interconecta equipos mediante la familia de protocolos TCP/IP. La **World Wide Web** es uno de sus servicios, no un sinónimo perfecto de Internet: también son servicios de Internet el correo, la transferencia de archivos, la mensajería, la nube y la videoconferencia.

### Origen y evolución que puede preguntarse

- **ARPANET** fue una red precursora; la primera conexión experimental citada habitualmente es del **29 de octubre de 1969**.
- TCP/IP se adoptó como estándar de ARPANET en **1983**.
- Tim Berners-Lee ideó la World Wide Web en el CERN; la web combina documentos enlazados, servidores web, HTTP y navegadores.

Las fechas históricas sirven como referencia, pero el núcleo del tema es comprender protocolos, direcciones y servicios. No deben confundirse ARPANET (red precursora), TCP/IP (familia de protocolos) y WWW (servicio de documentos web).

### TCP/IP, IP y DNS

**IP** proporciona direccionamiento y encaminamiento de paquetes. IPv4 utiliza direcciones de 32 bits; IPv6, de 128 bits. **TCP** aporta transmisión orientada a conexión y control de entrega/orden; **UDP** reduce controles y prioriza rapidez, por lo que puede ser útil en tiempo real aunque no garantice la misma fiabilidad.

**DNS** (Domain Name System) traduce nombres de dominio legibles, como `sede.ejemplo.es`, a direcciones IP que permiten localizar servidores. DNS no cifra por sí mismo la navegación, no es un navegador y no convierte una web en oficial.

### URL, dominio, IP y HTTP/HTTPS

Una **URL** localiza un recurso. En `https://sede.ejemplo.es/tramites?id=4#pago` pueden distinguirse:

- protocolo o esquema: `https`;
- host o dominio: `sede.ejemplo.es`;
- ruta: `/tramites`;
- parámetro: `id=4`;
- fragmento: `#pago`.

**HTTP** usa un modelo de petición y respuesta entre cliente y servidor. **HTTPS** añade TLS para proteger la comunicación en tránsito y ayudar a autenticar el servidor mediante su certificado. El candado o HTTPS no demuestra que una página sea oficial, veraz o segura en todos sus contenidos: hay que comprobar el dominio, el certificado, el contexto y la fuente.

| Código HTTP | Significado general |
| --- | --- |
| 200 | Petición atendida correctamente |
| 3xx | Redirección |
| 4xx | Error o problema atribuible a la petición/cliente |
| 5xx | Error del servidor |

## 5. Servicios de Internet

| Servicio | Función | Ejemplo administrativo |
| --- | --- | --- |
| Web/WWW | Consultar e interactuar con páginas y aplicaciones | sede, transparencia, normativa |
| Correo | Intercambiar mensajes y archivos | coordinación interna |
| Transferencia de archivos | Mover archivos entre sistemas | intercambio corporativo controlado |
| Videoconferencia y mensajería | Comunicación síncrona o rápida | reunión de trabajo |
| Nube | Usar almacenamiento, aplicaciones o infraestructura remota | colaboración corporativa |
| VPN | Crear un túnel protegido sobre otra red | acceso remoto autorizado |
| Sede electrónica | Tramitar ante una Administración | registro y consulta de expediente |
| Servicios de publicación y contratación | Difundir información y licitaciones | BOP, perfil del contratante |

En la nube se distinguen **IaaS** (infraestructura), **PaaS** (plataforma) y **SaaS** (software como servicio). Una aplicación web de correo o una suite ofimática accesible sin instalar toda la infraestructura es un ejemplo de SaaS. La nube no elimina la necesidad de permisos, copias, control de accesos, protección de datos ni archivo del expediente.

## 6. Navegador y uso práctico de Internet

El navegador interpreta recursos web y permite abrir pestañas, usar favoritos, consultar historial y descargas, buscar dentro de la página, imprimir y configurar privacidad. La barra de direcciones puede servir también para buscar, pero una búsqueda no equivale a una URL oficial.

Atajos generales frecuentes son `Ctrl+T` (nueva pestaña), `Ctrl+W` (cerrar), `Ctrl+Mayús+T` (reabrir la última cerrada), `Ctrl+D` (favorito), `Ctrl+H` (historial), `Ctrl+J` (descargas), `Ctrl+F` (buscar en la página), `Ctrl+P` (imprimir) y `Ctrl+0` (restablecer zoom). Pueden variar en funciones concretas según navegador y sistema.

Las **cookies** guardan datos del sitio en el navegador; la caché conserva recursos temporales para acelerar cargas. Borrar cookies puede cerrar sesiones y borrar preferencias; borrar caché no equivale a borrar el historial. Las extensiones añaden funciones y deben instalarse solo desde fuentes autorizadas.

La navegación privada o InPrivate evita que el navegador conserve determinados datos locales al cerrar la ventana, pero no hace anónimo al usuario frente a la organización, el proveedor de acceso, la red corporativa o los sitios visitados. Los archivos descargados y favoritos pueden conservarse.

## 7. Seguridad, privacidad y fuentes oficiales

Antes de introducir credenciales o descargar un archivo se verifica la URL completa, el dominio, el certificado, el remitente, el contexto y el canal. Son señales de alerta la urgencia artificial, enlaces acortados o parecidos al oficial, adjuntos inesperados, solicitud de contraseñas/códigos y cambios inusuales en la forma de pago.

Buenas prácticas en un puesto administrativo:

1. Usar cuentas, dispositivos, navegadores y almacenamiento corporativos autorizados.
2. Aplicar contraseñas robustas, MFA cuando exista y bloqueo de pantalla.
3. No reutilizar credenciales ni introducirlas desde enlaces sospechosos.
4. Mantener sistema, navegador y extensiones actualizados y limitar permisos.
5. Compartir la mínima información necesaria y revisar destinatarios y CCO.
6. Verificar la fuente oficial: **BOE**, **BOCYL**, **BOP**, sede o web institucional correspondiente.
7. Comunicar incidentes al soporte o responsable indicado; no borrar evidencias sin instrucciones.

> **Error típico de test:** <mark>HTTPS protege la conexión, pero no garantiza la oficialidad del sitio</mark>. La oficialidad se comprueba por el dominio y la fuente, no por el candado aislado.

## 8. Cómo resolver supuestos y esquema final

Ante un supuesto, identifica primero si se pregunta por un campo del mensaje, un protocolo, una dirección, un servicio o una medida de seguridad. Después aplica esta cadena: **correo (SMTP/IMAP/POP3) → red y localización (IP/DNS/URL) → web (HTTP/HTTPS) → servicio administrativo (correo, registro, sede o notificación)**.

> **Correo:** Para/CC/CCO → adjunto → SMTP envío → IMAP sincroniza / POP3 descarga.
>
> **Internet:** red de redes → TCP/IP → DNS resuelve dominio → URL localiza recurso → HTTP/HTTPS comunica.
>
> **Seguridad:** comprobar remitente y dominio → minimizar datos → no abrir enlaces/adjuntos dudosos → usar canal oficial → comunicar incidente.

La idea final es: **el protocolo explica cómo se comunica el sistema; la dirección indica dónde; el servicio dice para qué; y el canal administrativo determina qué garantías tiene la actuación**.
