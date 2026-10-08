/**
 * Single source of truth for every link, CTA target and external ID.
 *
 * Values marked `PENDING` come from the client pending tracker in
 * IMPLEMENTATION_PLAN.md (P-L* / P-C*). Components must handle `null`
 * gracefully: hide the element, render it as plain text, or fall back
 * to the documented placeholder behavior.
 */

type Href = string | null;

export interface SiteConfig {
  name: string;
  locale: string;
  title: string;
  description: string;
  analytics: { ga4Id: string | null };
  anchors: Record<
    'guarantee' | 'trajectory' | 'solutions' | 'catalog' | 'about' | 'contact',
    string
  >;
  nav: { horeca: string; shalom: string; contact: string };
  links: {
    quote: string;
    catalog: Href;
    portfolioPdf: Href;
    quoteByCategory: Href;
    advisor: Href;
    privacyPolicy: Href;
    values: Href;
  };
  hero: {
    youtubeId: string | null;
    variant: 'text-over-video' | 'video-only';
    capacityHref: string;
  };
  improvise: { mode: 'images-only' | 'image-and-text' };
  contact: {
    email: string;
    /** WhatsApp redirect link (the prefilled message is managed by the provider). */
    whatsapp: string | null;
    mapsUrl: Href;
    formMode: 'placeholder' | 'embed' | 'button';
    formUrl: Href;
  };
  clients: { visible: boolean };
  social: { label: string; href: string }[];
}

/**
 * Client decision (2026-10-03): every quote, contact and WhatsApp link goes to
 * this single WhatsApp redirect. The contact form card is still pending (P-L15).
 */
const WHATSAPP_URL = 'https://gruposhalom.trb.ai/wa/13ukPvL7';

/** Catalog brochure delivered by the client (2026-10-07), served from `public/`. */
const CATALOG_PDF = '/catalogo-grupo-shalom.pdf';

const anchors = {
  guarantee: '#garantia',
  trajectory: '#trayectoria',
  solutions: '#soluciones',
  catalog: '#catalogo',
  about: '#quienes-somos',
  contact: '#contacto',
} as const;

export const site: SiteConfig = {
  name: 'Grupo Shalom',
  locale: 'es-CO',
  title: 'Grupo Shalom | Garantía & Capacidad en distribución de consumo masivo',
  description:
    'Suministro institucional de alimentos y servicios integrales para el sector público y privado en Colombia y la región.',

  // PENDING P-C8: GA4 measurement ID (e.g. "G-XXXXXXXXXX").
  analytics: { ga4Id: null },

  anchors,

  nav: {
    // P-L2 (client, 2026-09-29): external HoReCa page, outside this landing.
    horeca: 'https://gruposhalom.com.co/horeca/',
    // PENDING P-L3
    shalom: anchors.about,
    // P-L4 (client, 2026-10-03)
    contact: WHATSAPP_URL,
  },

  links: {
    // P-L1 (client, 2026-10-03): all "Solicitar cotización" buttons.
    quote: WHATSAPP_URL,
    // P-L10 (client, 2026-10-07): "Ver catálogo completo" opens the brochure PDF.
    catalog: CATALOG_PDF,
    // P-L11 (client, 2026-10-07)
    portfolioPdf: CATALOG_PDF,
    // P-L12 (client, 2026-10-03)
    quoteByCategory: WHATSAPP_URL,
    // P-L14 (client, 2026-10-03)
    advisor: WHATSAPP_URL,
    // PENDING P-L20: data policy (Ley 1581 de 2012).
    privacyPolicy: null,
    // PENDING P-L16: hidden while null.
    values: null,
  },

  hero: {
    // PENDING P-L5: temporary test video until the client delivers the final one.
    youtubeId: 'IXWEQHCKR20',
    variant: 'text-over-video',
    capacityHref: anchors.guarantee,
  },

  // PENDING P-L7
  improvise: { mode: 'images-only' },

  contact: {
    // PENDING P-L17: confirm address.
    email: 'contacto@gruposhalom.com.co',
    // P-L21 (client, 2026-09-29)
    whatsapp: WHATSAPP_URL,
    // PENDING P-L18
    mapsUrl: null,
    // PENDING P-L15
    formMode: 'placeholder',
    formUrl: null,
  },

  // PENDING P-C4: authorization to display client logos.
  clients: { visible: true },

  // PENDING P-L19: hidden while empty.
  social: [],
};

export function whatsappHref(): string | null {
  return site.contact.whatsapp;
}
