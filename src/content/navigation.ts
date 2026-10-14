import { site } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  /** Section id used to highlight the item while that section is in view (anchors only). */
  section?: string;
  /** Open in a new tab (links that leave the site, e.g. WhatsApp). */
  newTab?: boolean;
}

export const navItems: NavItem[] = [
  // Same order as the sections on the home page (client request, 2026-10-14).
  { label: 'Trayectoria', href: site.anchors.trajectory, section: 'trayectoria' },
  { label: 'Garantía & Capacidad', href: site.anchors.guarantee, section: 'garantia' },
  { label: 'HoReCa', href: site.nav.horeca },
  { label: 'Catálogo', href: site.anchors.catalog, section: 'catalogo' },
  { label: 'Shalom', href: site.nav.shalom, section: 'quienes-somos' },
  { label: 'Contacto', href: site.nav.contact },
];
