import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from './el';
import LegalLinks from './LegalLinks';
import SiteHeader from './SiteHeader';

const MAPS_URL = 'https://www.google.com/maps?q=Doggie+Zen+%26+Den,+1805+Granary+St+Unit+10,+Holmen,+WI+54636';

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
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,220px),1fr))', gap: 'clamp(32px,4vw,56px)', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 320 }}>
              <img src="/assets/logo-full-white.png" alt="Doggie Zen & Den" style={{ height: 97, width: 184, display: 'block', objectFit: 'contain', objectPosition: 'left center' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 18 }}>Doggie Zen & Den</span>
                <span style={{ fontSize: 14, lineHeight: 1.45, color: '#E9E5DF' }}>Professional Dog Grooming & Boarding in Holmen,{'\u00A0'}WI</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600 }}>
                <span>Follow us on:</span>
                <a href="https://www.facebook.com/doggiezenandden" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: '#E99025', display: 'inline-flex' }}><FacebookIcon /></a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifySelf: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#E99025' }}>QUICK LINKS</div>
              <div style={{ display: 'flex', gap: 'clamp(28px,4vw,48px)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, fontWeight: 600 }}>
                  <a href="/" style={{ color: '#FFFFFF' }}>Home</a>
                  <a href="/#about" style={{ color: '#FFFFFF' }}>About Us</a>
                  <a href="/#services" style={{ color: '#FFFFFF' }}>Our services</a>
                  <a href="/#why" style={{ color: '#FFFFFF' }}>Why choose us</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, fontWeight: 600 }}>
                  <a href="/#gallery" style={{ color: '#FFFFFF' }}>Gallery</a>
                  <a href="/#reviews" style={{ color: '#FFFFFF' }}>Testimonials</a>
                  <a href="/#faq" style={{ color: '#FFFFFF' }}>FAQ</a>
                  <a href="/#contact" style={{ color: '#FFFFFF' }}>Contact Us</a>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifySelf: 'end' }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#E99025' }}>CONTACT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 16, fontWeight: 600, lineHeight: 1.45 }}>
                <a href="tel:6083172961" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: 10 }}><PhoneIcon size={18} /><span>608-317-2961</span></a>
                <a href={MAPS_URL} target="_blank" rel="noopener" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'flex-start', gap: 10, fontWeight: 600 }}>
                  <span style={{ marginTop: 2 }}><MapPinIcon size={18} /></span>
                  <span>1805 Granary St., Unit 10<br />Holmen, WI 54636</span>
                </a>
                <a href="mailto:zenandden@gmail.com" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: 10 }}><MailIcon size={18} /><span>zenandden@gmail.com</span></a>
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
