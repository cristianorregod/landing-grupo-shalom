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
  url: string;
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
    whatsapp: { number: string | null; message: string };
    mapsUrl: Href;
    formMode: 'placeholder' | 'embed' | 'button';
    formUrl: Href;
  };
  clients: { visible: boolean };
  social: { label: string; href: string }[];
}

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
  // PENDING P-C7: final domain.
  url: 'https://gruposhalom.com.co',
  locale: 'es-CO',
  title: 'Grupo Shalom | Garantía & Capacidad en distribución de consumo masivo',
  description:
    'Suministro institucional de alimentos y servicios integrales para el sector público y privado en Colombia y la región.',

  // PENDING P-C8: GA4 measurement ID (e.g. "G-XXXXXXXXXX").
  analytics: { ga4Id: null },

  anchors,

  nav: {
    // PENDING P-L2: no dedicated section; defaults to Solutions with HoReCa tab.
    horeca: '#horeca',
    // PENDING P-L3
    shalom: anchors.about,
    // PENDING P-L4
    contact: anchors.contact,
  },

  links: {
    // PENDING P-L1: external quote form URL.
    quote: anchors.contact,
    // PENDING P-L10
    catalog: null,
    // PENDING P-L11
    portfolioPdf: null,
    // PENDING P-L12
    quoteByCategory: null,
    // PENDING P-L14: defaults to WhatsApp when null.
    advisor: null,
    // PENDING P-L20: data policy (Ley 1581 de 2012).
    privacyPolicy: null,
    // PENDING P-L16: hidden while null.
    values: null,
  },

  hero: {
    // PENDING P-L5: YouTube video ID and layout decision.
    youtubeId: null,
    variant: 'text-over-video',
    capacityHref: anchors.guarantee,
  },

  // PENDING P-L7
  improvise: { mode: 'images-only' },

  contact: {
    // PENDING P-L17: confirm address.
    email: 'contacto@gruposhalom.com.co',
    // PENDING P-L21: number in international format without "+" (e.g. "573001234567").
    whatsapp: {
      number: null,
      message: 'Hola, quisiera recibir información sobre sus soluciones de abastecimiento.',
    },
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
  const { number, message } = site.contact.whatsapp;
  if (!number) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
