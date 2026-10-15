# Grupo Shalom — Sitio web

Sitio web corporativo de Grupo Shalom, construido con Astro y Tailwind CSS. Es un sitio estático: no requiere backend ni base de datos.

## Alcance

- **Inicio (`/`):** landing con banner principal, trayectoria, garantía y capacidad, HoReCa, catálogo, sección Shalom y contacto.
- **Quiénes somos (`/quienes-somos`):** misión, visión, servicios y certificaciones.
- **Trabaja con nosotros (`/trabaja-con-nosotros`):** áreas de trabajo y formulario de postulación.
- **Contacto (`/contacto`):** canales de atención, sedes y formulario de mensaje.
- **Política de privacidad (`/politica-de-privacidad`).**

Los formularios no usan servidor: arman el mensaje y lo abren en WhatsApp o en el correo del usuario. Los enlaces y datos de contacto están en `src/config/site.ts` y los textos en `src/content/*.ts`.

## Desarrollo

Requiere Node `>=22.12.0` y pnpm.

```bash
pnpm install
pnpm dev       # servidor local
pnpm build     # astro check + build en dist/
pnpm preview   # sirve dist/ localmente
```

## Despliegue (nginx)

El build es completamente estático: el servidor solo debe servir la carpeta `dist/`, sin Node.

1. **Revisar el dominio.** `site` en `astro.config.mjs` (y en `src/config/site.ts`) define las URL canónicas, el sitemap y las imágenes para redes sociales. Si el dominio final es otro, actualizarlo antes del build.
2. **Generar el build.**
   ```bash
   pnpm install --frozen-lockfile
   pnpm build
   ```
3. **Subir `dist/` al servidor.**
   ```bash
   rsync -avz --delete dist/ usuario@servidor:/var/www/gruposhalom/
   ```
4. **Configurar nginx** y recargar (`sudo nginx -t && sudo systemctl reload nginx`):

   ```nginx
   server {
       server_name gruposhalom.com.co www.gruposhalom.com.co;
       root /var/www/gruposhalom;
       index index.html;

       # URL del sitio anterior (public/_redirects solo funciona en Netlify)
       location = /about-us { return 301 /quienes-somos; }
       location = /jobs     { return 301 /trabaja-con-nosotros; }
       location = /privacy  { return 301 /politica-de-privacidad; }

       # Las páginas se generan como /contacto.html pero se enlazan como /contacto
       location / {
           try_files $uri $uri.html $uri/ =404;
       }

       # Archivos con hash: caché larga
       location /_astro/ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       gzip on;
       gzip_types text/css application/javascript image/svg+xml application/xml;
   }
   ```

**Por qué `try_files $uri $uri.html`:** la configuración usa `build.format: 'file'` con `trailingSlash: 'never'`, así que cada página se genera como `nombre.html`. Sin esa regla, nginx responde 404 en `/contacto`.
