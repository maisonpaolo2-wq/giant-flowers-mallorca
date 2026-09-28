# Giant Flowers Mallorca · web

Next.js 15 (App Router) + CSS puro + Framer Motion. Formularios vía Resend.

```bash
npm install
npm run dev          # http://localhost:3625
npm run photos       # recorta/optimiza photos-src/ -> public/photos/ y genera og-image.jpg
npm run build
```

- Contenido editable: `content/data.ts`
- Leads: `app/api/lead/route.ts` (sin `RESEND_API_KEY` solo se registran en consola). Ver `.env.local.example`.
- En este PC (Norton intercepta TLS) usar `NODE_OPTIONS=--use-system-ca` para que next/font descargue Google Fonts.

## Pendiente de confirmar con el cliente

- Email, WhatsApp, dominio y nombre de la fundadora (marcados como `PENDIENTE` en `content/data.ts`).
- Los testimonios son inventados y provisionales. Sustituirlos por reales antes de publicar (también alimentan el JSON-LD).
- Fotos sacadas del Instagram público (@giant.flowers.mallorca). Algunas son fotogramas de reels a 720px: pedir los originales.
