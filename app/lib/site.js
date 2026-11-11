export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.doggiezenandden.com').replace(/\/+$/, '');
export const SITE_NAME = 'Doggie Zen & Den';
export const SITE_DESCRIPTION = 'Professional dog grooming and personalized boarding in Holmen, WI. Patient care for puppies, seniors, and anxious dogs. Serving Onalaska and La Crosse.';
export const OG_IMAGE = '/assets/salon.jpg';

export const BUSINESS = {
  phone: '+1-608-399-3500',
  email: 'zenandden@gmail.com',
  street: '1805 Granary St., Unit 10',
  city: 'Holmen',
  region: 'WI',
  postalCode: '54636',
  country: 'US',
  facebook: 'https://www.facebook.com/doggiezenandden',
  maps: 'https://www.google.com/maps?q=Doggie+Zen+%26+Den,+1805+Granary+St+Unit+10,+Holmen,+WI+54636',
  areaServed: ['Holmen', 'Onalaska', 'La Crosse'],
};

export const PAGES = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/ai-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/ai-readiness', changeFrequency: 'monthly', priority: 0.5 },
];

export function pageMetadata({ title, description, path }) {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', siteName: SITE_NAME, locale: 'en_US', title, description, url: path, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  };
}
