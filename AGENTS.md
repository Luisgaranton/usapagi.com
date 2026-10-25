<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Estilo visual de PAGI

Aplicar estas reglas a las nuevas pantallas y componentes del proyecto. Fuente: [Figma · Foundations](https://www.figma.com/design/yMyJrwXhx9uNJoOOu5C0hB/Design-System-and-Brand?node-id=6-60), frame `7:2` y manual de variables `205:2`. Consultar `docs/visual-style.md` para la escala tipográfica completa y distinguir las reglas del sistema de las propuestas para la landing.

### Tipografía

- Usar **Plus Jakarta Sans**, integrada con `next/font/google` en `src/app/layout.tsx` y con la variable `--font-plus-jakarta-sans` y `font-sans` en `src/app/globals.css`.
- Display y Headline: Bold 700; Title: SemiBold 600; Body: Regular 400; Label: Medium 500. Light 300 es opcional para textos breves de Body Large, no para títulos o controles.
- Aplicar cada rol con su tamaño, interlineado, tracking y peso completos. Referencias: Display Large 57/64 px y tracking -0.25 px; Headline Large 32/40 px; Body Large 16/24 px y tracking 0.5 px; Label Large 14/20 px y tracking 0.1 px.

### Paleta y contraste

- Naranja principal `#E86836`: acciones principales, foco, bordes de selección y acentos de marca.
- Naranjas complementarios: alternativo `#E97439` y suave `#E8844B`.
- Tinta `#1C1D1C`: texto principal y superficies inversas. Blanco `#FFFFFF`: fondo y superficies principales.
- Crema `#FCF1EA`: selección suave y fondos de apoyo. Texto secundario: `#767676`.
- Usar texto en tinta sobre naranja principal, especialmente en botones y texto pequeño. No usar blanco para texto pequeño sobre ese naranja.
- Acompañar los estados con texto o iconos; el color no debe ser su única señal. Mantener foco visible en controles interactivos.
- El sistema define solo modo claro. No añadir modo oscuro automático sin una especificación propia; las superficies inversas no constituyen un tema oscuro.

### Espaciado y componentes

- Usar la escala de espaciado de base 8: 0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32, 36, 40, 48, 56, 64 y 72 px.
- Radios: botones e inputs 12 px; tarjetas 16 px; avisos 10 px; checkbox 6 px. Reservar radio completo para controles circulares definidos por el diseño.
- Mantener una interfaz plana con bordes sutiles y espacio entre grupos. No añadir sombras generales a las tarjetas ni efectos Liquid Glass por referencia al marco de demostración iOS.
- Usar iconos lineales de terminales redondos, trazo de 1.3–1.5 px y tamaños de referencia de 14, 18 y 20 px. Mantener etiquetas en acciones y navegación.
- Reutilizar componentes y tokens existentes. Al incorporar valores del sistema, centralizarlos en CSS/Tailwind en vez de repetir valores literales en cada componente.

### Marca y alcance

- Usar únicamente los archivos oficiales del logo; no reconstruirlo con texto o una P. Mantener proporciones y área de seguridad: una letra a alrededor del logo y 25% de la altura por lado para el símbolo.
- El logo principal es blanco sobre naranja. No recolorear, rotar, deformar ni añadir sombras o contornos a los logos.
- La página inicial todavía contiene estilos de la plantilla de Next.js. Sus colores zinc, modo oscuro y botones redondos no son referencias de marca; sustituirlos al implementar la landing.
- Para la landing, priorizar superficies claras, texto en tinta y naranja en los llamados a la acción. Las decisiones de composición o adaptación responsive deben distinguirse de las especificaciones confirmadas en Figma.
