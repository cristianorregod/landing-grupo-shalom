export interface HeroStat {
  /** Rendered in brand green before the value (e.g. "+"). */
  prefix?: string;
  value: string;
  label: string;
  /** Optional bold fragment appended to the label. */
  highlight?: string;
}

export const hero = {
  eyebrow: { accent: 'Suministro institucional', rest: 'Colombia' },
  title: 'Su aliado estratégico en distribución de consumo masivo',
  // PENDING P-C2: figures to be validated by the client.
  stats: [
    { prefix: '+', value: '150k', label: 'Mercados entregados durante la pandemia' },
    { prefix: '+', value: '100k', label: 'Estudiantes atendidos con el PAE' },
    { value: '5', label: 'Países con presencia', highlight: 'SHALOM' },
    { prefix: '+', value: '11', label: 'Años garantizando el abastecimiento de Colombia' },
  ] satisfies HeroStat[],
};
