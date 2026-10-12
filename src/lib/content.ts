import client from './sanity';
import type { Lang } from '../i18n/ui';

/*
 * One function per chunk of content. Each query receives the current language as $lang
 * and returns plain strings, so components never see the { en, es } structure.
 * The API version we use only returns published documents (never drafts).
 */

export interface SiteSettings {
  phone: string;
  callLabel: string;
  footerTagline: string;
  whatsapp: {
    enabled: boolean;
    number: string | null;
    message: string | null;
  };
}

export interface Hero {
  chips: string[];
  headlineLine1: string;
  headlineLine2: string;
  tagline: string;
  description: string;
}

export interface SanityImage {
  url: string;
  width: number;
  height: number;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface WhatWeDo {
  eyebrow: string;
  heading: string;
  intro: string;
  accentWord: string | null;
  image: SanityImage;
  items: Service[];
}

export interface ServiceArea {
  eyebrow: string;
  heading: string;
  intro: string;
  image: SanityImage;
}

const siteSettingsQuery = /* groq */ `
  *[_id == "siteSettings"][0]{
    phone,
    "callLabel": callLabel[$lang],
    "footerTagline": footerTagline[$lang],
    "whatsapp": {
      "enabled": coalesce(whatsapp.enabled, false),
      "number": whatsapp.number,
      "message": whatsapp.message[$lang]
    }
  }
`;

const heroQuery = /* groq */ `
  *[_id == "homePage"][0].hero{
    "chips": chips[]{ en, es },
    "headlineLine1": headlineLine1[$lang],
    "headlineLine2": headlineLine2[$lang],
    "tagline": tagline[$lang],
    "description": description[$lang]
  }
`;

const whatWeDoQuery = /* groq */ `
  *[_id == "homePage"][0].whatWeDo{
    "eyebrow": header.eyebrow[$lang],
    "heading": header.heading[$lang],
    "intro": header.intro[$lang],
    "accentWord": accentWord[$lang],
    "image": image{
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    },
    "items": items[]{
      icon,
      "title": title[$lang],
      "description": description[$lang]
    }
  }
`;

const serviceAreaQuery = /* groq */ `
  *[_id == "homePage"][0].serviceArea{
    "eyebrow": header.eyebrow[$lang],
    "heading": header.heading[$lang],
    "intro": header.intro[$lang],
    "image": image{
      "url": asset->url,
      "width": asset->metadata.dimensions.width,
      "height": asset->metadata.dimensions.height
    }
  }
`;

async function fetchOrThrow<T>(query: string, lang: Lang, what: string): Promise<T> {
  const result = await client.fetch<T | null>(query, { lang });
  if (!result) {
    throw new Error(
      `Sanity returned nothing for "${what}". Is the document published (not just a draft)? ` +
        `Are SANITY_PROJECT_ID and SANITY_DATASET set?`,
    );
  }
  return result;
}

export const getSiteSettings = (lang: Lang) =>
  fetchOrThrow<SiteSettings>(siteSettingsQuery, lang, 'siteSettings');

type HeroRaw = Omit<Hero, 'chips'> & { chips: Record<Lang, string>[] };

export async function getHero(lang: Lang): Promise<Hero> {
  const hero = await fetchOrThrow<HeroRaw>(heroQuery, lang, 'homePage.hero');
  // The list of chips arrives with both languages; pick ours here.
  return { ...hero, chips: (hero.chips ?? []).map((chip) => chip[lang]) };
}

export const getWhatWeDo = (lang: Lang) =>
  fetchOrThrow<WhatWeDo>(whatWeDoQuery, lang, 'homePage.whatWeDo');

export const getServiceArea = (lang: Lang) =>
  fetchOrThrow<ServiceArea>(serviceAreaQuery, lang, 'homePage.serviceArea');
