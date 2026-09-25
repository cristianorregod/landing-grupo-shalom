import type { ImageMetadata } from 'astro';
import nutresa from '../assets/logos/clients/nutresa.png';
import bavaria from '../assets/logos/clients/bavaria.png';
import nectar from '../assets/logos/clients/nectar.png';
import buchanans from '../assets/logos/clients/buchanans.png';

export interface Client {
  name: string;
  logo: ImageMetadata;
  /** PENDING P-L6: external link, if the client wants logos to be clickable. */
  href: string | null;
}

export const clients: Client[] = [
  { name: 'Grupo Nutresa', logo: nutresa, href: null },
  { name: 'Bavaria', logo: bavaria, href: null },
  { name: 'Aguardiente Néctar', logo: nectar, href: null },
  { name: "Buchanan's", logo: buchanans, href: null },
];
