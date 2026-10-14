import { site } from '../config/site';

export interface Location {
  name: string;
  /** PENDING: address requested from the client. While null the card says it is coming soon. */
  address: string | null;
  city: string;
}

// Structure based on docs/New/contactus-grupo-shalom (1).html; contact data
// from docs/New/changes.md, which takes precedence (client, 2026-10-14).
export const contactPage = {
  seo: {
    title: 'Contacto | Grupo Shalom',
    description:
      'Escríbanos sobre cotizaciones, pedidos o cualquier tema de nuestros servicios. WhatsApp, correo y sedes de Grupo Shalom en Bogotá.',
  },
  hero: {
    eyebrow: 'Contáctenos',
    title: 'Cuéntenos qué necesita su operación.',
    body: 'Escríbanos sobre cotizaciones, pedidos o cualquier tema de nuestros servicios. Un equipo especializado le responde en menos de 24 horas hábiles.',
    fastest: 'La forma más rápida de escribirnos',
  },
  paths: {
    title: '¿Qué necesita?',
    lead: 'Elija el camino más corto para su caso.',
    items: [
      {
        title: 'Solicitar una cotización',
        body: 'Cuéntenos qué productos o servicios requiere su empresa o entidad.',
        cta: 'Cotizar por WhatsApp',
        href: site.links.quote,
      },
      {
        title: 'Hacer o consultar un pedido',
        body: 'Escriba al equipo de pedidos con los productos que necesita o los datos de su pedido.',
        cta: 'Escribir a pedidos',
        href: `mailto:${site.contact.email}?subject=${encodeURIComponent('Pedido')}`,
      },
      {
        title: 'Revisar el catálogo',
        body: 'Consulte el portafolio completo por categoría antes de escribirnos.',
        cta: 'Descargar catálogo',
        href: site.links.catalog,
      },
      {
        title: 'Trabajar con nosotros',
        body: 'Conozca las áreas del equipo y envíenos su hoja de vida.',
        cta: 'Ver oportunidades',
        href: site.pages.jobs,
      },
    ],
  },
  locations: {
    title: 'Nuestras sedes',
    lead: 'Encuéntrenos en nuestras plantas y en nuestra tienda.',
    items: [
      { name: 'Planta Montevideo', address: null, city: 'Bogotá' },
      { name: 'Planta Veraguas', address: null, city: 'Bogotá' },
      { name: 'Tienda de la 31', address: null, city: 'Bogotá' },
    ] satisfies Location[],
  },
  message: {
    title: 'Envíenos un mensaje.',
    lead: 'Complete los datos, escriba su consulta y envíela por WhatsApp o por correo, el canal que le resulte más cómodo.',
    formTitle: 'Su mensaje',
    topics: [
      'Solicitar una cotización',
      'Pedido en curso',
      'Alimentación institucional o escolar',
      'Servicio HoReCa',
      'Otro tema',
    ],
    subject: '{topic} – {name}',
    lines: [
      'Hola, les escribo desde la página web de Grupo Shalom.',
      'Nombre: {name}',
      'Empresa: {company}',
      'Teléfono: {phone}',
      'Correo: {email}',
      'Asunto: {topic}',
      '',
      '{message}',
    ],
  },
};
