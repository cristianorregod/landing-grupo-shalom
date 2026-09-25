import type { ImageMetadata } from 'astro';
import improvise1 from '../assets/images/improvise/improvise-1.webp';
import improvise2 from '../assets/images/improvise/improvise-2.webp';
import improvise3 from '../assets/images/improvise/improvise-3.webp';
import team1 from '../assets/images/team/team-1.webp';
import team2 from '../assets/images/team/team-2.webp';
import team3 from '../assets/images/team/team-3.webp';
import team4 from '../assets/images/team/team-4.webp';

export interface Slide {
  image: ImageMetadata;
  alt: string;
}

/** "Mientras unos improvisan, nosotros garantizamos." */
export const improvise = {
  intro:
    'Distribuimos consumo masivo con un sistema diseñado para rotación, disponibilidad y compra ágil.',
  title: 'Mientras unos improvisan, nosotros garantizamos.',
  body: '**Desde 2013** convertimos el caos de la cadena de suministro en un sistema de certeza para el sector **público y privado,** en **todo el territorio nacional.**',
  // PENDING P-L7 / P-C5: images only change; more photos may be added.
  slides: [
    { image: improvise1, alt: 'Colaboradores de Shalom verificando un pedido en la bodega' },
    { image: improvise2, alt: 'Colaboradora de Shalom en su puesto de trabajo' },
    { image: improvise3, alt: 'Equipo de Shalom alistando mercados para despacho' },
  ] satisfies Slide[],
};

export interface Milestone {
  period: string;
  title: string;
  description: string;
  tone: 'blue' | 'green';
}

export const trajectory = {
  eyebrow: 'Trayectoria',
  title: 'De 1.500 anchetas a 150.000 mercados.',
  lead: 'Once años de crecimiento sostenido, construidos sobre una convicción: **la confiabilidad no se improvisa, se sistematiza.**',
  milestones: [
    {
      period: '2013',
      title: 'El origen',
      description: 'Fundación de Compañía de Alimentos Shalom. Primera entrega: 1.500 anchetas.',
      tone: 'blue',
    },
    {
      period: '2014 – 2017',
      title: 'Marca propia',
      description:
        'Lanzamiento de XOE "Vida Abundante". Al cuarto año, 17 referencias en el mercado.',
      tone: 'blue',
    },
    {
      period: '2020 – 2022',
      title: 'El mayor salto',
      description:
        'Más de 150.000 mercados entregados durante la pandemia. Expansión con el Ministerio del Interior, la Alcaldía Mayor y centros penitenciarios.',
      tone: 'green',
    },
    {
      period: '2022 – Hoy',
      title: 'Escala regional',
      description:
        'Uniones temporales y consorcios. Presencia internacional en Perú, Ecuador, El Salvador y Panamá.',
      tone: 'green',
    },
  ] satisfies Milestone[],
  // PENDING P-C5: more team photos may be added.
  team: [
    { image: team1, alt: 'Equipo de operaciones de Shalom en la bodega' },
    { image: team2, alt: 'Equipo administrativo de Shalom en la oficina' },
    { image: team3, alt: 'Bodega de Shalom con pedidos listos para despacho' },
    { image: team4, alt: 'Integrantes del equipo de Shalom' },
  ] satisfies Slide[],
};

export const promise = {
  eyebrow: 'Nuestra promesa',
  title: 'Garantía & Capacidad.',
  lead: 'Simple de decir, complejo de ejecutar. Es la razón por la que entidades de gobierno, cadenas HoReCa y grandes distribuidores **confían su operación a Shalom.**',
  pillars: [
    {
      label: '01 — Garantía',
      title: 'Cada pedido, donde debe estar.',
      body: 'No es suerte, es sistema. Trazabilidad de principio a fin sobre cada entrega, para que su operación tenga la certeza que necesita y su equipo, la tranquilidad de saber que nada se detiene.',
    },
    {
      label: '02 — Capacidad',
      title: 'Escala para absorber su demanda.',
      body: 'La estructura para responder a los grandes jugadores sin que su operación se vea afectada. La fuerza logística que impulsa el crecimiento de quienes construyen su negocio junto a nosotros.',
    },
  ],
};
