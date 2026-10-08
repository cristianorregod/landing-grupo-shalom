import type { ImageMetadata } from 'astro';
import kelloggs from '../assets/logos/clients/kelloggs.webp';
import unilever from '../assets/logos/clients/unilever.webp';
import pepsico from '../assets/logos/clients/pepsico.webp';
import zenu from '../assets/logos/clients/zenu.webp';
import diana from '../assets/logos/clients/diana.webp';
import tostao from '../assets/logos/clients/tostao.webp';
import comapan from '../assets/logos/clients/comapan.webp';
import elCarriel from '../assets/logos/clients/el-carriel.webp';
import cocaCola from '../assets/logos/clients/coca-cola.webp';
import alqueria from '../assets/logos/clients/alqueria.webp';
import postobon from '../assets/logos/clients/postobon.webp';
import colombina from '../assets/logos/clients/colombina.webp';
import ramo from '../assets/logos/clients/ramo.webp';
import fritoLay from '../assets/logos/clients/frito-lay.webp';
import nutresa from '../assets/logos/clients/nutresa.webp';
import colanta from '../assets/logos/clients/colanta.webp';
import nestle from '../assets/logos/clients/nestle.webp';
import bimbo from '../assets/logos/clients/bimbo.webp';
import monterojo from '../assets/logos/clients/monterojo.webp';
import xoe from '../assets/logos/clients/xoe.webp';
import laNieve from '../assets/logos/clients/la-nieve.webp';
import hazDeOros from '../assets/logos/clients/haz-de-oros.webp';
import corona from '../assets/logos/clients/corona.webp';
import alpina from '../assets/logos/clients/alpina.webp';
import bavaria from '../assets/logos/clients/bavaria.webp';
import chivas from '../assets/logos/clients/chivas.webp';
import aguila from '../assets/logos/clients/aguila.webp';

export interface Client {
  name: string;
  logo: ImageMetadata;
  /** PENDING P-L6: external link, if the client wants logos to be clickable. */
  href: string | null;
}

// Brand set delivered by the client (2026-10-07). Order follows the delivered files.
export const clients: Client[] = [
  { name: "Kellogg's", logo: kelloggs, href: null },
  { name: 'Unilever', logo: unilever, href: null },
  { name: 'PepsiCo', logo: pepsico, href: null },
  { name: 'Zenú', logo: zenu, href: null },
  { name: 'Diana', logo: diana, href: null },
  { name: "Tostao'", logo: tostao, href: null },
  { name: 'Comapan', logo: comapan, href: null },
  { name: 'El Carriel', logo: elCarriel, href: null },
  { name: 'Coca-Cola', logo: cocaCola, href: null },
  { name: 'Alquería', logo: alqueria, href: null },
  { name: 'Postobón', logo: postobon, href: null },
  { name: 'Colombina', logo: colombina, href: null },
  { name: 'Ramo', logo: ramo, href: null },
  { name: 'Frito Lay', logo: fritoLay, href: null },
  { name: 'Grupo Nutresa', logo: nutresa, href: null },
  { name: 'Colanta', logo: colanta, href: null },
  { name: 'Nestlé', logo: nestle, href: null },
  { name: 'Bimbo', logo: bimbo, href: null },
  { name: 'Monterojo Gourmet', logo: monterojo, href: null },
  { name: 'XOE Vida Abundante', logo: xoe, href: null },
  { name: 'La Nieve', logo: laNieve, href: null },
  { name: 'Haz de Oros', logo: hazDeOros, href: null },
  { name: 'Corona', logo: corona, href: null },
  { name: 'Alpina', logo: alpina, href: null },
  { name: 'Bavaria', logo: bavaria, href: null },
  { name: 'Chivas', logo: chivas, href: null },
  { name: 'Cerveza Águila', logo: aguila, href: null },
];
