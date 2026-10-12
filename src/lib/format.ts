/** "(786) 813-6856" -> "tel:+17868136856". Assumes US numbers (+1). */
export function telHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `tel:+${digits.length === 10 ? '1' : ''}${digits}`;
}

/** wa.me link with a pre-filled message. `number` is digits only with country code. */
export function whatsappHref(number: string, message?: string): string {
  const digits = number.replace(/\D/g, '');
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}

/**
 * Splits a heading around the accent word so the word can be styled on its own.
 * "We Turn Up The Cool", "Cool" -> ["We Turn Up The ", "Cool", ""].
 * If the word isn't found (typo in the CMS), returns null and the heading renders plain.
 */
export function splitAccent(heading: string, accent?: string | null): [string, string, string] | null {
  if (!accent) return null;
  const i = heading.indexOf(accent);
  if (i === -1) return null;
  return [heading.slice(0, i), accent, heading.slice(i + accent.length)];
}

/** Sanity image URL with a width and automatic modern format (webp/avif where supported). */
export function sanityImg(url: string, width: number): string {
  return `${url}?w=${width}&auto=format`;
}
