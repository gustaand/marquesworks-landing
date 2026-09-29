# Marques Works · Landing

Landing oficial con Next.js 16, App Router, TypeScript, Tailwind CSS 4 y Manrope mediante `next/font/local`. Esta versión actualiza la landing anterior: cinco secciones, composición del producto con capturas reales, fondo navy y scroll reveal ligero.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`. Comprueba la versión de producción con `npm run lint`, `npm run typecheck`, `npm run build` y `npm run start`.

## Contenido y contacto

- La home contiene Hero, Todo conectado, Beneficios, Demo y Contacto, más header y footer mínimos.
- Las demos públicas apuntan a `/demo/belleza` y `/demo/barberia` en `mw-demo-six.vercel.app`. No hay enlaces a los paneles de gestión.
- El panel aparece únicamente mediante capturas reales sin interacción.
- WhatsApp: `https://wa.me/34603976985`.
- Email: `mailto:marquesworks.mw@gmail.com`.
- Las URL y datos de contacto tienen valores por defecto y se pueden sustituir mediante `.env.example` o `lib/site-config.ts`.

## Desplegar en Vercel

Importa la carpeta como proyecto Next.js. Si está dentro de un repositorio mayor, selecciona `marques-works-landing` como Root Directory. Configura `marquesworks.com` como dominio principal y redirige `www` al dominio principal. Las variables de entorno son opcionales mientras los enlaces y contactos actuales sigan vigentes.

## SEO y rutas

Se conservan canonical, title template, descripción, Open Graph, Twitter Card, imagen social, iconos, `robots.txt`, `sitemap.xml`, HTML semántico y `Organization` JSON-LD. La home tiene un H1. Las páginas legales provisionales llevan `noindex` y quedan fuera del sitemap. Rutas: `/`, `/aviso-legal`, `/privacidad`, `/cookies`, `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`, `/opengraph-image` y los iconos.

Antes de lanzar oficialmente, completa con tus datos reales `/aviso-legal`, `/privacidad` y `/cookies`. No hay cookies de analítica activas; `lib/analytics.ts` solo emite eventos locales listos para conectar con un proveedor.

## Rendimiento y animación

Las capturas se sirven mediante `next/image` con tamaños declarados. La imagen principal del hero tiene prioridad; el resto carga de forma diferida. Manrope se incluye localmente. El efecto de entrada usa `IntersectionObserver` y se desactiva con `prefers-reduced-motion`. El contenido permanece visible si JavaScript está desactivado.
