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
    services: 'Services',
    whyUs: 'Why Us',
    serviceArea: 'Service Area',
    reviews: 'Reviews',
    contact: 'Contact',
  },
  skip: 'Skip to content',
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
  form: {
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    service: 'Service needed',
    servicePlaceholder: 'Select a service',
    // value = what Renzo reads in the notification email (always English); label = what the visitor sees.
    services: [
      { value: 'AC Repair', label: 'AC Repair' },
      { value: 'AC Installation', label: 'AC Installation' },
      { value: 'Maintenance Plan', label: 'Maintenance Plan' },
      { value: 'Emergency Service', label: 'Emergency Service' },
      { value: 'Other', label: 'Other' },
    ],
    message: "Tell us what's going on (optional)",
    send: 'Send Message',
    sending: 'Sending…',
    success: "Thanks! We got your message and will call you back soon.",
    failure: 'Something went wrong and your message was not sent. Please call us or try again.',
    errors: {
      required: 'This field is required.',
      email: 'Enter a valid email address.',
      phone: 'Enter a valid phone number.',
    },
  },
  footer: {
    nav: 'Footer',
    rights: 'All rights reserved.',
  },
  reviews: {
    stars: (n: number) => `${n} out of 5 stars`,
  },
};

const es: typeof en = {
  meta: {
    title: 'Forge Air Conditioning | Reparación e instalación de A/C en Miami',
  },
  nav: {
    label: 'Principal',
    services: 'Servicios',
    whyUs: 'Por qué nosotros',
    serviceArea: 'Zona de servicio',
    reviews: 'Reseñas',
    contact: 'Contacto',
  },
  skip: 'Saltar al contenido',
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
  form: {
    name: 'Nombre',
    phone: 'Teléfono',
    email: 'Correo electrónico',
    service: 'Servicio que necesita',
    servicePlaceholder: 'Seleccione un servicio',
    services: [
      { value: 'AC Repair', label: 'Reparación de A/C' },
      { value: 'AC Installation', label: 'Instalación de A/C' },
      { value: 'Maintenance Plan', label: 'Plan de mantenimiento' },
      { value: 'Emergency Service', label: 'Servicio de emergencia' },
      { value: 'Other', label: 'Otro' },
    ],
    message: 'Cuéntenos qué está pasando (opcional)',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos su mensaje y le llamaremos pronto.',
    failure: 'Algo salió mal y su mensaje no se envió. Por favor llámenos o inténtelo de nuevo.',
    errors: {
      required: 'Este campo es obligatorio.',
      email: 'Ingrese un correo electrónico válido.',
      phone: 'Ingrese un número de teléfono válido.',
    },
  },
  footer: {
    nav: 'Pie de página',
    rights: 'Todos los derechos reservados.',
  },
  reviews: {
    stars: (n: number) => `${n} de 5 estrellas`,
  },
};

const dictionaries = { en, es };

export function getUi(lang: Lang) {
  return dictionaries[lang];
}
