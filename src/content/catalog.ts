import alimentos from '../assets/icons/catalog/alimentos.svg?url';
import panaderia from '../assets/icons/catalog/panaderia.svg?url';
import cafeteria from '../assets/icons/catalog/cafeteria.svg?url';
import hogar from '../assets/icons/catalog/hogar.svg?url';
import ferreteria from '../assets/icons/catalog/ferreteria.svg?url';
import papeleria from '../assets/icons/catalog/papeleria.svg?url';
import empaques from '../assets/icons/catalog/empaques.svg?url';
import tecnologicos from '../assets/icons/catalog/tecnologicos.svg?url';
import electrodomesticos from '../assets/icons/catalog/electrodomesticos.svg?url';
import aseo from '../assets/icons/catalog/aseo.svg?url';
import higienicos from '../assets/icons/catalog/higienicos.svg?url';
import menaje from '../assets/icons/catalog/menaje.svg?url';
import muebles from '../assets/icons/catalog/muebles.svg?url';
import apoyoLogistico from '../assets/icons/catalog/apoyo-logistico.svg?url';

export interface Category {
  name: string;
  description: string;
  /** SVG icon URL (rendered with <img>: the icons share CSS class names). */
  icon: string;
  /** PENDING P-L13: category destination. Cards are static while null. */
  href: string | null;
}

export const catalogSection = {
  eyebrow: 'Catálogo',
  title: 'Adquiera los bienes y servicios que su entidad necesita.',
  lead: 'Un portafolio amplio, **un solo proveedor.** Cubrimos desde requerimientos puntuales hasta operaciones de suministro de gran escala, para el sector público y privado.',
};

export const categories: Category[] = [
  {
    name: 'Alimentos',
    description: 'Frescos, procesados y envasados. Consistencia en cada entrega.',
    icon: alimentos,
    href: null,
  },
  {
    name: 'Panadería',
    description: 'Materia prima con la frescura que su operación requiere.',
    icon: panaderia,
    href: null,
  },
  {
    name: 'Cafetería',
    description: 'Desde granos de café hasta complementos, con suministro constante.',
    icon: cafeteria,
    href: null,
  },
  {
    name: 'Hogar',
    description: 'Productos de limpieza y aseo. Stock permanente, entregas oportunas.',
    icon: hogar,
    href: null,
  },
  {
    name: 'Ferretería',
    description: 'Herramientas, materiales y suministros para mantenimiento y construcción.',
    icon: ferreteria,
    href: null,
  },
  {
    name: 'Papelería',
    description: 'Inventario completo para pedidos administrativos, recurrentes o puntuales.',
    icon: papeleria,
    href: null,
  },
  {
    name: 'Empaques',
    description: 'Desechables en plástico y cartón para el sector gastronómico e industrial.',
    icon: empaques,
    href: null,
  },
  {
    name: 'Tecnológicos',
    description: 'Computadores, periféricos y soluciones digitales, con soporte incluido.',
    icon: tecnologicos,
    href: null,
  },
  {
    name: 'Electrodomésticos',
    description: 'Para hogar, oficina e instituciones, con respaldo logístico garantizado.',
    icon: electrodomesticos,
    href: null,
  },
  {
    name: 'Aseo',
    description: 'Aseo industrial e institucional. Stock permanente, sin interrupciones.',
    icon: aseo,
    href: null,
  },
  {
    name: 'Higiénicos',
    description: 'Papel, dotación y productos de higiene para su operación diaria.',
    icon: higienicos,
    href: null,
  },
  {
    name: 'Menaje',
    description: 'Vajilla, cristalería y utensilios para cocinas institucionales y hogares.',
    icon: menaje,
    href: null,
  },
  {
    name: 'Muebles',
    description: 'Escritorios, sillas y archivos. Entrega y montaje sin fricción.',
    icon: muebles,
    href: null,
  },
  {
    name: 'Apoyo logístico',
    description: 'Coordinación y ejecución de eventos institucionales, de principio a fin.',
    icon: apoyoLogistico,
    href: null,
  },
];
