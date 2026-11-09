import { FAQS } from './components/faqs';
import HomePage from './components/HomePage';
import JsonLd from './components/JsonLd';
import { BUSINESS, OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, pageMetadata } from './lib/site';

export const metadata = pageMetadata({
  title: 'Doggie Zen & Den | Dog Grooming & Boarding in Holmen, WI',
  description: SITE_DESCRIPTION,
  path: '/',
});

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo-full-clear.png`,
  image: [`${SITE_URL}${OG_IMAGE}`, `${SITE_URL}/assets/corgi-groomer.jpg`],
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.country,
  },
  hasMap: BUSINESS.maps,
  areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'City', name: `${name}, WI` })),
  sameAs: [BUSINESS.facebook],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Dog grooming and boarding',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Professional dog grooming', description: 'Bath, hair trim, nails, ears, teeth, and glands, tailored to each dog.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personalized dog boarding', description: 'Personalized boarding for senior dogs, anxious dogs, and pets with unique needs.' } },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#business` },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.text ?? f.a },
  })),
};

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Caveat+Brush&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <JsonLd data={businessSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={faqSchema} />
      <HomePage />
    </>
  );
}
