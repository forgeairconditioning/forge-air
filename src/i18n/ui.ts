/**
 * Static UI text (labels that never change), in both languages.
 * Content the client edits (headlines, services, etc.) lives in Sanity instead.
 * Add a key to `en`, and TypeScript will force you to add it to `es` too.
 */
export const locales = ['en', 'es'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'en';

const en = {
  meta: {
    title: 'Forge Air Conditioning | AC Repair & Installation in Miami',
  },
  nav: {
    label: 'Main',
    whyUs: 'Why Us',
    serviceArea: 'Service Area',
    reviews: 'Reviews',
    contact: 'Contact',
  },
  menu: {
    open: 'Open menu',
    close: 'Close menu',
  },
  language: {
    label: 'Language',
    en: 'English',
    es: 'Español',
  },
  actions: {
    whatsapp: 'WhatsApp',
    callNow: 'Call Now',
  },
};

const es: typeof en = {
  meta: {
    title: 'Forge Air Conditioning | Reparación e instalación de A/C en Miami',
  },
  nav: {
    label: 'Principal',
    whyUs: 'Por qué nosotros',
    serviceArea: 'Zona de servicio',
    reviews: 'Reseñas',
    contact: 'Contacto',
  },
  menu: {
    open: 'Abrir menú',
    close: 'Cerrar menú',
  },
  language: {
    label: 'Idioma',
    en: 'English',
    es: 'Español',
  },
  actions: {
    whatsapp: 'WhatsApp',
    callNow: 'Llamar ahora',
  },
};

const dictionaries = { en, es };

export function getUi(lang: Lang) {
  return dictionaries[lang];
}
