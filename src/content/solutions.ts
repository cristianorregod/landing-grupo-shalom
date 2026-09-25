export interface Solution {
  /** Tab id; also a deep-link anchor (e.g. `#horeca` from the nav). */
  id: string;
  label: string;
  pain: { title: string; body: string };
  answer: { title: string; body: string };
  /** PENDING P-L8: destination of "Conocer soluciones". Falls back to the quote link. */
  href: string | null;
}

export const solutionsSection = {
  eyebrow: 'Soluciones para su sector',
  title: 'Soluciones de abastecimiento por tipo de negocio.',
};

export const solutions: Solution[] = [
  {
    id: 'canal-tradicional',
    label: 'Canal tradicional',
    pain: {
      title: 'Quiebres, rotación y reposición.',
      body: 'Cuando falta disponibilidad, se pierde venta y confianza.',
    },
    answer: {
      title: 'Portafolio esencial + marcas líderes + volumen.',
      body: 'Un sistema de abastecimiento pensado para mantener la operación en movimiento.',
    },
    href: null,
  },
  // PENDING P-C1: draft copy for the next three tabs, to be validated or replaced by the client.
  {
    id: 'minimercados',
    label: 'Minimercados / supermercados',
    pain: {
      title: 'Surtido amplio, márgenes estrechos.',
      body: 'Cada referencia agotada en góndola es una venta que se va con la competencia.',
    },
    answer: {
      title: 'Surtido completo + entregas programadas.',
      body: 'Reposición constante para que sus góndolas nunca se queden vacías.',
    },
    href: null,
  },
  {
    id: 'distribuidores',
    label: 'Distribuidores regionales',
    pain: {
      title: 'Distancias largas, pedidos grandes.',
      body: 'Cuando el proveedor falla, se detiene toda la cadena que depende de usted.',
    },
    answer: {
      title: 'Volumen + cobertura + precio competitivo.',
      body: 'Capacidad logística para abastecer su operación regional sin interrupciones.',
    },
    href: null,
  },
  {
    id: 'horeca',
    label: 'HoReCa / institucional',
    pain: {
      title: 'Calidad constante, cero margen de error.',
      body: 'Una cocina o una institución no puede detenerse por falta de insumos.',
    },
    answer: {
      title: 'Insumos confiables + cumplimiento garantizado.',
      body: 'Suministro planificado para hoteles, restaurantes, casinos e instituciones, con trazabilidad de principio a fin.',
    },
    href: null,
  },
];
