# Aula Digital · OVA de Lengua Castellana y Didáctica Virtual
Sitio estático (HTML + CSS + JS + Three.js local). No necesita servidor ni hosting de pago.

## Estructura
`index.html` · `css/styles.css` · `js/data.js` (**todos los OVA**) · `js/app.js` · `js/universe.js` (3D) · `vendor/` (Three.js r160) · `assets/escudos/` · `assets/img/` · `poster/` (póster en PNG y SVG, no forma parte de la web)

## Publicar en GitHub Pages
1. Crea una cuenta en github.com y un repositorio **público** nuevo (p. ej. `aula-digital`).
2. Sube **el contenido** de esta carpeta a la raíz del repositorio (Add file → Upload files), incluido `.nojekyll`. Confirma con *Commit changes*.
3. Ve a **Settings → Pages**. En *Build and deployment* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` y guarda.
4. Espera 1–3 minutos. La URL pública aparece en esa misma pantalla: `https://TU-USUARIO.github.io/aula-digital/`.
5. Abre la URL y prueba menú, buscador, filtros, universo 3D y cada enlace.

## Agregar o editar un OVA
Edita `js/data.js` (nombre, grado, autores, descripción, enlace) y vuelve a subir ese archivo. El catálogo y el universo 3D se actualizan solos.

## Código QR
El póster ya incluye el QR de `https://valjul-web.github.io/OVAS/` (vector dentro de `poster/poster-aula-digital.svg`, grupo `qr-code`). También están sueltos: `poster/qr-aula-digital.svg` y `.png`. Si cambia la URL, genera un QR nuevo y reemplaza ese grupo.

## Sol del universo 3D
La imagen del sol ya está en `assets/img/sol.webp` (cuadrada, fondo negro puro o transparente). Si el archivo no existe, se muestra un sol provisional dorado. La ruta se configura en `js/data.js` → `imagenes.sol`.

## Orden de la página
Inicio (bienvenida + botón + universo 3D) → Explorar OVA (catálogo ordenado por grado, de menor a mayor) → Acerca del proyecto → Créditos. El menú sigue ese mismo orden.

## Notas
- El 3D se carga solo al acercarse a esa sección; en dispositivos de bajo rendimiento aparece un botón para activarlo. El catálogo siempre está disponible.
- Verifica que cada enlace externo siga activo y público.

## Añadir imágenes
1. Guarda las imágenes (WebP o JPG, idealmente < 150 KB cada una) en `assets/img/`.
2. En `js/data.js`: `imagenes.hero` y `imagenes.fondo` para portada y fondo; `imagen: "assets/img/ova-1.webp"` dentro de cada OVA .
3. Usa rutas **relativas** (sin `/` inicial) y respeta mayúsculas/minúsculas en los nombres. Sube la carpeta `assets/img/` y `js/data.js` a GitHub.

## Imágenes incluidas
`assets/img/`: `hero`, `fondo`, `ova-1` a `ova-8`,  `planetas`, `iconos` (WebP), ya conectadas en `js/data.js` (`planetas` e `iconos` son opcionales y hoy no se usan). Para cambiar una, reemplaza el archivo conservando el nombre. Las tarjetas usan proporción 16:10.

## Póster (carpeta `poster/`)
`poster-aula-digital.png` (2560×3840, proporción 2:3) y `poster-aula-digital.svg` (editable; el grupo `qr-code` es el QR). `base-ilustracion.png` es la ilustración original sin texto. El QR ya está incluido.
