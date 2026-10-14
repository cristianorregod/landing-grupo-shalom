import team from '../assets/images/team/team-1.webp';
import office from '../assets/images/improvise/improvise-2.webp';
import packing from '../assets/images/improvise/improvise-3.webp';

export interface Vacancy {
  title: string;
  area: string;
  location: string;
  description: string;
}

export const jobAreas = [
  {
    title: 'Alimentación y cocina',
    body: 'Chefs, ingenieros de alimentos, nutricionistas y manipuladores de alimentos, en casinos, cafeterías, alimentación transportada y alimentación clínica.',
  },
  {
    title: 'Programa de Alimentación Escolar',
    body: 'Equipos que preparan y entregan raciones en instituciones educativas, con control de procesos en tiempo real.',
  },
  {
    title: 'Logística y distribución',
    body: 'Transporte, bodega y despacho de suministros y mercados.',
  },
  {
    title: 'Puntos de venta',
    body: 'Atención y reposición en puntos de venta de alimentos, licores y aseo.',
  },
  {
    title: 'Administración',
    body: 'Equipo de oficina que sostiene la operación y atiende a nuestros clientes.',
  },
];

// Content from docs/New/WEB - JOBS.pdf (client, 2026-10-14).
export const jobsPage = {
  seo: {
    title: 'Trabaja con nosotros | Grupo Shalom',
    description:
      'Construya su carrera en Grupo Shalom: alimentación y cocina, alimentación escolar, logística, puntos de venta y administración. Envíenos su hoja de vida.',
  },
  hero: {
    title: 'Construya su carrera en una empresa que sirve a Colombia.',
    body: 'En Grupo Shalom trabajan chefs, ingenieros de alimentos, nutricionistas y equipos de bodega, logística y administración. Si comparte nuestra disciplina y vocación de servicio, queremos conocerlo.',
    photos: [
      { src: team, alt: 'Equipo de operaciones de Grupo Shalom en la bodega' },
      { src: office, alt: 'Colaboradora de Shalom en su puesto de trabajo' },
      { src: packing, alt: 'Colaboradores de Shalom alistando mercados' },
    ],
  },
  vacancies: {
    title: 'Vacantes abiertas',
    lead: 'Aquí publicamos las ofertas vigentes de Grupo Shalom.',
    emptyTitle: 'Hoy no hay vacantes publicadas.',
    emptyBody:
      'Eso no impide que nos conozcamos. Envíenos su hoja de vida y el área que le interesa; la tendremos en cuenta cuando se abra una vacante.',
    // Add open positions here; while empty the page shows the message above.
    items: [] as Vacancy[],
  },
  areas: {
    title: 'Áreas en las que trabaja nuestro equipo',
    lead: 'Estos son los frentes de operación de Grupo Shalom. Indique en su mensaje cuál se parece más a su experiencia.',
  },
  apply: {
    title: 'Envíenos su perfil.',
    lead: 'No necesita crear una cuenta. Arme su mensaje aquí y envíelo por WhatsApp o por correo.',
    steps: [
      'Complete sus datos y elija cómo enviarlos.',
      'Adjunte su hoja de vida en el chat o en el correo.',
      'La tendremos en cuenta cuando se abra una vacante en su área.',
    ],
    formTitle: 'Sus datos',
    subject: 'Hoja de vida – {area}',
    lines: [
      'Hola, quiero postularme para trabajar en Grupo Shalom.',
      'Nombre: {name}',
      'Ciudad: {city}',
      'Área de interés: {area}',
      'Adjunto mi hoja de vida.',
    ],
  },
};
