'use client';

import { El, FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from './el';
import LegalLinks from './LegalLinks';

const MAPS_URL = 'https://www.google.com/maps?q=Doggie+Zen+%26+Den,+1805+Granary+St+Unit+10,+Holmen,+WI+54636';

export default function ThankYouPage() {
  return (
    <div className="page-thanks">
      <header className="site-header">
        <nav>
          <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}><img className="site-logo" src="/assets/logo-full-clear.png" alt="Doggie Zen & Den" /></a>
          <div className="site-nav">
            <a href="index.html" style={{ textDecoration: 'none' }}>Home</a>
            <a href="index.html#about" style={{ textDecoration: 'none' }}>About Us</a>
            <div className="nav-drop">
              <a href="index.html#services">Our Services <span aria-hidden="true" style={{ fontSize: '0.75em' }}>▾</span></a>
              <div className="nav-drop-menu">
                <div className="nav-drop-menu-inner">
                  <a href="index.html#services">Grooming</a>
                  <a href="index.html#services">Boarding</a>
                </div>
              </div>
            </div>
            <a href="index.html#why" style={{ textDecoration: 'none' }}>Why Choose Us</a>
            <a href="index.html#gallery" style={{ textDecoration: 'none' }}>Gallery</a>
            <a href="index.html#reviews" style={{ textDecoration: 'none' }}>Testimonials</a>
            <a href="index.html#faq" style={{ textDecoration: 'none' }}>FAQ</a>
            <a href="index.html#contact" style={{ textDecoration: 'none' }}>Contact Us</a>
            <El tag="a" className="site-phone" href="tel:6083172961" s="text-decoration:none;background:#E99025;color:#29262B;border-radius:999px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:8px" hover="background:#29262B;color:#FFFFFF"><PhoneIcon />608-317-2961</El>
          </div>
        </nav>
      </header>

      <section data-screen-label="Contact - Thank You" style={{ background: '#FFFFFF', flex: 1 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(56px,8vw,96px) clamp(20px,4vw,48px) clamp(80px,12vw,140px)', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 28 }}>
          <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: '0.14em', lineHeight: 1, color: '#E99025', textTransform: 'uppercase' }}>Request received</div>
          <h1 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 850, fontSize: 'clamp(36px,4.6vw,56px)', lineHeight: 1.05, letterSpacing: '-0.02em', color: '#14183A', textTransform: 'uppercase' }}>Thanks for contacting us!</h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: '#6C6E83' }}>We will get in touch with you shortly.</p>
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
                  <a href="index.html" style={{ color: '#FFFFFF' }}>Home</a>
                  <a href="index.html#about" style={{ color: '#FFFFFF' }}>About Us</a>
                  <a href="index.html#services" style={{ color: '#FFFFFF' }}>Our services</a>
                  <a href="index.html#why" style={{ color: '#FFFFFF' }}>Why choose us</a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, fontWeight: 600 }}>
                  <a href="index.html#gallery" style={{ color: '#FFFFFF' }}>Gallery</a>
                  <a href="index.html#reviews" style={{ color: '#FFFFFF' }}>Testimonials</a>
                  <a href="index.html#faq" style={{ color: '#FFFFFF' }}>FAQ</a>
                  <a href="index.html#contact" style={{ color: '#FFFFFF' }}>Contact Us</a>
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
