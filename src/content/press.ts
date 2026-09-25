import type { ImageMetadata } from 'astro';
import press1 from '../assets/images/press/press-1.webp';
import press2 from '../assets/images/press/press-2.webp';
import press3 from '../assets/images/press/press-3.webp';
import press4 from '../assets/images/press/press-4.webp';

export interface PressNote {
  title: string;
  image: ImageMetadata;
  /** PENDING P-C3: media outlet name. */
  outlet: string | null;
  /** PENDING P-L9: article URL. "Leer más" renders disabled while null. */
  href: string | null;
}

export const pressSection = {
  eyebrow: 'Lo que dicen los medios sobre nosotros',
};

export const pressNotes: PressNote[] = [
  {
    title:
      '‘El Rey de las Anchetas’ cierra puntos físicos y le apuesta al e-commerce en temporada navideña',
    image: press1,
    outlet: null,
    href: null,
  },
  {
    title:
      'De vendedor de empanadas a facturar $50.000 millones a punta de anchetas: la historia del ‘rey de las anchetas’',
    image: press2,
    outlet: null,
    href: null,
  },
  {
    title: 'El trabajo no es obligación, sino pasión: Orlando Ávila',
    image: press3,
    outlet: null,
    href: null,
  },
  {
    title:
      'Orlando Ávila, el colombiano que convirtió su visión en un gigante conglomerado empresarial',
    image: press4,
    outlet: null,
    href: null,
  },
];
