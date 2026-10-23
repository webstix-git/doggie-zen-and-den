import { FacebookIcon } from './el';
import LegalLinks from './LegalLinks';
import SiteHeader from './SiteHeader';

export function DocHeading({ children }) {
  return <h2>{children}</h2>;
}

export default function InfoPage({ title, lede, updated, children }) {
  return (
    <div className="page-legal">
      <SiteHeader />

      <section className="legal-hero">
        <div className="legal-hero-inner">
          <h1>{title}</h1>
          <p>{lede}</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="legal-crumb">
          <a href="/">Home</a>
          <span aria-hidden="true">/</span>
          <span>{title}</span>
        </div>
        <div className="legal-col">
          <p className="legal-date">Last updated: {updated}</p>
          <article className="legal-prose">{children}</article>
          <div className="legal-back"><a href="/">Back to Home</a></div>
        </div>
      </section>

      <footer style={{ background: '#29262B', color: '#FFFFFF', borderTop: '1px solid rgba(233,229,223,0.35)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px clamp(20px,4vw,48px) 28px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="/assets/logo-full-white.png" alt="Doggie Zen & Den" style={{ height: 72, width: 'auto', display: 'block' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 22 }}>Doggie Zen & Den</span><span style={{ fontSize: 16, color: '#E9E5DF' }}>Professional Dog Grooming & Boarding in Holmen, WI</span></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ display: 'flex', gap: 'clamp(20px,3vw,36px)', flexWrap: 'wrap', fontSize: 16, fontWeight: 600 }}>
                <a href="/#about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a>
                <a href="/#services" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Services</a>
                <a href="/#gallery" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Gallery</a>
                <a href="/#reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Reviews</a>
                <a href="/#contact" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contact</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, fontWeight: 600 }}>
                <span>Follow us on:</span>
                <a href="https://www.facebook.com/doggiezenandden" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: '#E99025', display: 'inline-flex' }}><FacebookIcon /></a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 16, color: '#E9E5DF', paddingTop: 24, borderTop: '1px solid rgba(233,229,223,0.2)' }}>
            <span>© 2026 Doggie Zen & Den. All rights reserved.</span>
            <LegalLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}
