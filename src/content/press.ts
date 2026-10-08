import type { ImageMetadata } from 'astro';
import press1 from '../assets/images/press/press-1.webp';
import press2 from '../assets/images/press/press-2.webp';
import press3 from '../assets/images/press/press-3.webp';
import press4 from '../assets/images/press/press-4.webp';
import press5 from '../assets/images/press/press-5.webp';
import press6 from '../assets/images/press/press-6.webp';

export interface PressNote {
  title: string;
  image: ImageMetadata;
  /** Media outlet name, shown above the title. */
  outlet: string | null;
  /** Article URL without tracking params. "Leer más" renders disabled while null. */
  href: string | null;
}

export const pressSection = {
  eyebrow: 'Lo que dicen los medios sobre nosotros',
};

// Delivered by the client (2026-10-07), in the order of docs/PENDIENTES/notas_prensa/links.txt.
export const pressNotes: PressNote[] = [
  {
    title:
      '‘El Rey de las Anchetas’ cierra puntos físicos y le apuesta al e-commerce en temporada navideña',
    image: press1,
    outlet: 'La Nota Económica',
    href: 'https://lanotaeconomica.com.co/movidas-empresarial/el-rey-de-las-anchetas-cierra-puntos-fisicos-y-le-apuesta-al-e-commerce-en-temporada-navidena-2025/',
  },
  {
    title:
      'Orlando Ávila, el colombiano que convirtió su visión en un gigante conglomerado empresarial',
    image: press2,
    outlet: 'La Opinión',
    href: 'https://laopinion.co/economia/orlando-avila-el-colombiano-que-convirtio-su-vision-en-un-gigante-conglomerado-empresarial',
  },
  {
    title: 'El trabajo no es obligación, sino pasión: Orlando Ávila',
    image: press3,
    outlet: 'El Nuevo Siglo',
    href: 'https://www.elnuevosiglo.com.co/economia/el-trabajo-no-es-obligacion-sino-pasion-orlando-avila',
  },
  {
    title: 'Shalom garantiza abastecimiento de alimentos a entidades gubernamentales',
    image: press4,
    outlet: 'Technocio',
    href: 'https://www.technocio.com/shalom-garantiza-abastecimiento-de-alimentos-a-entidades-gubernamentales/',
  },
  {
    title: '¿Quién es el rey de las anchetas? Este empresario se corona cada diciembre',
    image: press5,
    outlet: 'Semana',
    href: 'https://www.semana.com/economia/empresas/articulo/quien-es-el-rey-de-las-anchetas-este-empresario-se-corona-cada-diciembre/202137/',
  },
  {
    title:
      'De vendedor de empanadas a facturar $50.000 millones a punta de anchetas: la historia del ‘rey de las anchetas’',
    image: press6,
    outlet: 'Forbes Colombia',
    href: 'https://forbes.co/negocios/esta-es-la-historia-del-rey-de-las-anchetas',
  },
];
