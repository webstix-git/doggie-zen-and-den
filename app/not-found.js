import { PhoneIcon } from './components/el';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

export const metadata = {
  title: { absolute: 'Page Not Found | Doggie Zen & Den' },
  description: 'The page you were looking for could not be found. Head back to Doggie Zen & Den for dog grooming and boarding in Holmen, WI.',
};

const POPULAR = [
  { href: '/#about', label: 'About Us' },
  { href: '/#services', label: 'Our Services' },
  { href: '/#why', label: 'Why Choose Us' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#reviews', label: 'Testimonials' },
  { href: '/#faq', label: 'FAQs' },
  { href: '/#contact', label: 'Contact Us' },
];

function Paw() {
  return (
    <svg viewBox="4 1 44 44" aria-hidden="true">
      <ellipse cx="10" cy="16" rx="5" ry="6.5" />
      <ellipse cx="20" cy="8" rx="5" ry="6.5" />
      <ellipse cx="32" cy="8" rx="5" ry="6.5" />
      <ellipse cx="42" cy="16" rx="5" ry="6.5" />
      <path d="M26 22c-9 0-15 9-15 15 0 5 4 7 8 6 2.5-.6 4.6-1.6 7-1.6s4.5 1 7 1.6c4 1 8-1 8-6 0-6-6-15-15-15z" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Caveat+Brush&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="page-legal">
        <SiteHeader />

        <main className="nf">
          <div className="nf-wrap">
            <img src="/assets/friendly_dogs.webp" alt="" width={800} height={400} className="nf-dogs" />
            <div className="nf-card">
              <div className="nf-eyebrow">Error 404</div>
              <div className="nf-code" aria-hidden="true">4<Paw />4</div>
              <h1>Page Not Found</h1>
              <p>The page you requested is unavailable or may have moved. Browse the site pages below to continue.</p>
              <nav aria-label="Site pages" className="nf-links">
                {POPULAR.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
              </nav>
              <div className="nf-actions">
                <a href="/" className="nf-btn nf-btn-dark">Back to Home</a>
                <a href="tel:6083172961" className="nf-btn nf-btn-orange"><PhoneIcon size={18} />608-317-2961</a>
              </div>
            </div>
          </div>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
