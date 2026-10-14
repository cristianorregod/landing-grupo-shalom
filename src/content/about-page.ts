import warehouse from '../assets/images/about/warehouse.webp';
import orderPicking from '../assets/images/about/order-picking.webp';
import packing from '../assets/images/about/packing.webp';
import portrait from '../assets/images/about/portrait.webp';

// Content from docs/New/Web - Quiénes somos.pdf (client, 2026-10-14).
export const aboutPage = {
  seo: {
    title: 'Quiénes somos | Grupo Shalom',
    description:
      'Grupo Shalom es un proveedor integral de alimentación, suministros y servicios para entidades públicas y empresas privadas en Colombia desde 2013.',
  },
  hero: {
    intro: 'Alimentamos y abastecemos a Colombia desde 2013.',
    title: 'Quiénes somos',
    paragraphs: [
      'Grupo Shalom es un proveedor integral de alimentación, suministros y servicios para entidades públicas y empresas privadas.',
      'Experiencia en alimentación, catering, hotelería, lavandería, limpieza, jardinería y mantenimiento.',
    ],
    photos: [
      { src: warehouse, alt: 'Bodega de Grupo Shalom con mercancía organizada en estanterías' },
      { src: orderPicking, alt: 'Colaborador de Shalom alistando un pedido en la bodega' },
      { src: packing, alt: 'Colaboradoras de Shalom empacando productos' },
    ],
  },
  identity: {
    title: 'Shalom significa paz, y así entendemos el servicio.',
    body: 'Nacimos con la convicción de que servir a Colombia es un privilegio, y que ese servicio exige disciplina, orden y certeza.',
    image: portrait,
    imageAlt: 'Colaboradora de Grupo Shalom en la bodega',
    items: [
      {
        title: 'Nuestra misión',
        body: 'Somos una empresa de servicios y suministros integrales, centrada en la ética, los principios y los valores, para cubrir las expectativas y necesidades de nuestros clientes.',
      },
      {
        title: 'Nuestra visión',
        body: 'Obtener reconocimiento nacional, transformándonos junto a un mundo que construye nuevos paradigmas, con inteligencia emocional y artificial en la era de la revolución industrial.',
      },
    ],
  },
  services: {
    title: 'Servicios principales',
    lead: 'Alimentación institucional, alimentación escolar, puntos de venta y logística, bajo un mismo estándar de calidad.',
    items: [
      {
        title: 'Alimentación institucional',
        body: 'Atendemos más de 12.000 servicios diarios con equipos preparados para cada operación, como soporte adicional a la labor de nuestros clientes.',
        bullets: [
          'Alimentación transportada, para compañías que no tienen un lugar dispuesto para preparar alimentos.',
          'Venta retail con una amplia oferta: pastelería, bebidas calientes, carnes frías para comida rápida, postres, snacks y confitería.',
          'Administración de casinos y cafeterías con atención personalizada.',
          'Suministro de alimentación clínica.',
          'Asesoría nutricional.',
        ],
      },
      {
        title: 'Programa de Alimentación Escolar',
        body: 'Llevamos complemento alimentario a más de 100.000 niños, niñas y adolescentes en instituciones educativas, con un aporte nutricional que apoya su crecimiento y desarrollo cognitivo.',
        bullets: [
          'Suministro en todas las modalidades del programa: ración preparada en sitio, ración para preparar en casa y ración industrializada.',
          'Atención de profesionales calificados: ingenieros de alimentos, nutricionistas, chefs y manipuladores de alimentos.',
          'Aplicación de la norma técnica del programa escolar.',
          'Control de procesos e información en tiempo real sobre los beneficiarios, mediante herramientas tecnológicas.',
        ],
      },
      {
        title: 'Puntos de venta',
        body: 'Proveedores de suministros en alimentos, licores y aseo.',
      },
      {
        title: 'Logística y distribución',
        body: 'Transporte de suministros hasta el punto donde su operación los necesita.',
      },
    ],
  },
  certifications: {
    title: 'Certificaciones que respaldan cada servicio de alimentación.',
    lead: 'Aplicamos estos estándares en todos los servicios de alimentación que prestamos.',
    items: [
      {
        title: 'HACCP',
        body: 'Sistema de seguridad alimentaria basado en el análisis de peligros y puntos de control crítico.',
      },
      {
        title: 'BPM',
        body: 'Buenas Prácticas de Manufactura en la preparación y manipulación de alimentos.',
      },
      {
        title: 'ISO 9001:2015',
        body: 'Sistema de gestión de calidad aplicado a los servicios que ofrecemos.',
      },
    ],
  },
};
