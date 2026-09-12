/**
 * Route table. Slugs match the old site's URLs exactly so nothing that is
 * already linked or indexed breaks; `key` points at the locale subtree that
 * holds that page's copy.
 */

export interface ProductEntry {
  slug: string;
  key: string;
  /** Locale path holding the detail-page copy, when one exists. */
  detailKey?: string;
}

export interface ServiceEntry {
  slug: string;
  key: string;
  icon: string;
}

export const products: ProductEntry[] = [
  { slug: 'd-sql', key: 'products.netterDSQL', detailKey: 'netterDSQL' },
  { slug: 'obstack', key: 'products.obstack' },
  { slug: 'hadron', key: 'products.hadron' },
  { slug: 'dcache', key: 'products.dcache' },
];

/** 24px stroke-grid icon paths — one consistent style, never emoji. */
export const services: ServiceEntry[] = [
  {
    slug: 'observability-sre',
    key: 'services.observabilitySRE',
    icon: 'M3 17l5-6 4 4 5-8 4 5',
  },
  {
    slug: 'backend',
    key: 'services.backend',
    icon: 'M8 6l-5 6 5 6M16 6l5 6-5 6',
  },
  {
    slug: 'frontend',
    key: 'services.frontend',
    icon: 'M3 5h18v11H3zM9 20h6',
  },
  {
    slug: 'dba',
    key: 'services.dba',
    icon: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6',
  },
  {
    slug: 'virtualization',
    key: 'services.virtualization',
    icon: 'M3 4h18v7H3zM3 13h18v7H3z',
  },
  {
    slug: 'networking',
    key: 'services.networking',
    icon: 'M12 3v6M5 21v-5h14v5M12 9l-7 7M12 9l7 7',
  },
  {
    slug: 'vdi',
    key: 'services.vdi',
    icon: 'M4 4h16v12H4zM10 20h4M12 16v4',
  },
  {
    slug: 'desktop-fleet',
    key: 'services.desktopFleet',
    icon: 'M3 4h8v8H3zM13 4h8v8h-8zM3 14h8v6H3zM13 14h8v6h-8z',
  },
];

export const company = {
  name: 'Netter S.r.l.',
  street: 'Via Indipendenza',
  city: '06081 Assisi, Italy',
  vat: 'VAT code: IT03569900545',
  email: 'info@netter.io',
  domain: 'www.netter.io',
};


/** Carried over from the previous site — same Formspree form, same key. */
export const contactForm = {
  endpoint: 'https://formspree.io/f/xldpvnoe',
  recaptchaSiteKey: '6Ldo0oIUAAAAAGcNGTtp-6kruWAddaznK0hRrogH',
};

/**
 * The achievement strings ship as one sentence ("50+ Tech Companies Served"),
 * so the leading token is the figure and the rest is its label.
 */
export function splitStat(value: string): { value: string; label: string } {
  const at = value.indexOf(' ');
  if (at === -1) return { value, label: '' };
  return { value: value.slice(0, at), label: value.slice(at + 1) };
}
