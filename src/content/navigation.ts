import { site } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  /** Section id used to highlight the item while that section is in view. */
  section: string;
}

export const navItems: NavItem[] = [
  { label: 'Garantía & Capacidad', href: site.anchors.guarantee, section: 'garantia' },
  { label: 'Trayectoria', href: site.anchors.trajectory, section: 'trayectoria' },
  { label: 'HoReCa', href: site.nav.horeca, section: 'soluciones' },
  { label: 'Catálogo', href: site.anchors.catalog, section: 'catalogo' },
  { label: 'Shalom', href: site.nav.shalom, section: 'quienes-somos' },
  { label: 'Contacto', href: site.nav.contact, section: 'contacto' },
];
