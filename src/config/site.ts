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
  /** Internal pages. */
  pages: Record<'about' | 'jobs' | 'contact' | 'privacy', string>;
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
    /** Direct WhatsApp line shown in the footer and the contact page. */
    phone: { display: string; digits: string; whatsappHref: string };
    /** WhatsApp redirect link (the prefilled message is managed by the provider). */
    whatsapp: string | null;
    mapsUrl: Href;
    /**
     * Contact form submission endpoint (form service that accepts a FormData
     * POST and answers JSON, e.g. Web3Forms or Formspree). While null the form
     * validates but does not send, and points the visitor to WhatsApp instead.
     */
    formEndpoint: Href;
    /** Extra hidden fields required by the form service (e.g. its access key). */
    formHiddenFields: Record<string, string>;
  };
  clients: { visible: boolean };
  social: { label: string; href: string; icon: 'instagram' | 'facebook' | 'youtube' | 'tiktok' }[];
}

/**
 * Client decision (2026-10-03): every quote, contact and WhatsApp link goes to
 * this single WhatsApp redirect.
 */
const WHATSAPP_URL = 'https://gruposhalom.trb.ai/wa/13ukPvL7';

/** Catalog brochure delivered by the client (2026-10-07), served from `public/`. */
const CATALOG_PDF = '/catalogo-grupo-shalom.pdf';

// Home section anchors are root-relative so they also work from internal pages.
const anchors = {
  guarantee: '/#garantia',
  trajectory: '/#trayectoria',
  solutions: '/#soluciones',
  catalog: '/#catalogo',
  about: '/#quienes-somos',
  contact: '/#contacto',
} as const;

const pages = {
  about: '/quienes-somos',
  jobs: '/trabaja-con-nosotros',
  contact: '/contacto',
  privacy: '/politica-de-privacidad',
} as const;

// Client data (2026-10-14): direct WhatsApp line with a prefilled greeting.
const PHONE_DIGITS = '573142555518';
const WHATSAPP_DIRECT =
  'https://api.whatsapp.com/send?phone=573142555518&text=%C2%A1Hola%21%20%F0%9F%91%8B%20Vengo%20desde%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20productos%20y%20servicios%20%F0%9F%93%A6';

export const site: SiteConfig = {
  name: 'Grupo Shalom',
  locale: 'es-CO',
  title: 'Grupo Shalom | Garantía & Capacidad en distribución de consumo masivo',
  description:
    'Suministro institucional de alimentos y servicios integrales para el sector público y privado en Colombia y la región.',

  // PENDING P-C8: GA4 measurement ID (e.g. "G-XXXXXXXXXX").
  analytics: { ga4Id: null },

  anchors,
  pages,

  nav: {
    // P-L2 (client, 2026-09-29): external HoReCa page, outside this landing.
    horeca: 'https://gruposhalom.com.co/horeca/',
    // PENDING P-L3
    shalom: anchors.about,
    // Client request (2026-10-14): the menu item opens the contact page.
    contact: pages.contact,
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
    // P-L20 (client, 2026-10-14): internal page with the current site's policy.
    privacyPolicy: pages.privacy,
    // PENDING P-L16: hidden while null.
    values: null,
  },

  hero: {
    // P-L5 (client, 2026-10-14): video disabled, static image for now.
    // Set the YouTube ID again to re-enable the background video.
    youtubeId: null,
    variant: 'text-over-video',
    capacityHref: anchors.guarantee,
  },

  // PENDING P-L7
  improvise: { mode: 'images-only' },

  contact: {
    // P-L17 (client, 2026-10-14)
    email: 'pedidos@gruposhalom.com.co',
    phone: {
      display: '+57 314 255 5518',
      digits: PHONE_DIGITS,
      whatsappHref: WHATSAPP_DIRECT,
    },
    // P-L21 (client, 2026-09-29)
    whatsapp: WHATSAPP_URL,
    // PENDING P-L18
    mapsUrl: null,
    // PENDING P-L15: form is built (name, WhatsApp, email); destination not decided yet.
    formEndpoint: null,
    formHiddenFields: {},
  },

  // PENDING P-C4: authorization to display client logos.
  clients: { visible: true },

  // P-L19 (client, 2026-10-14)
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/shalom_ges', icon: 'instagram' },
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=100063710364616',
      icon: 'facebook',
    },
    { label: 'YouTube', href: 'https://www.youtube.com/@GrupoShalom-i6i', icon: 'youtube' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@shalom_ges', icon: 'tiktok' },
  ],
};

export function whatsappHref(): string | null {
  return site.contact.whatsapp;
}
