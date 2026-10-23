'use client';

import { El, FacebookIcon, PhoneIcon } from './el';
import LegalLinks from './LegalLinks';

export default function ThankYouPage() {
  return (
    <div className="page-thanks">
      <header className="site-header">
        <nav>
          <a href="index.html" style={{ display: 'flex', alignItems: 'center' }}><img className="site-logo" src="/assets/logo-full-clear.png" alt="Doggie Zen & Den" /></a>
          <div className="site-nav">
            <a href="index.html#about" style={{ textDecoration: 'none' }}>About</a>
            <a href="index.html#services" style={{ textDecoration: 'none' }}>Services</a>
            <a href="index.html#why" style={{ textDecoration: 'none' }}>Why Us</a>
            <a href="index.html#gallery" style={{ textDecoration: 'none' }}>Gallery</a>
            <a href="index.html#faq" style={{ textDecoration: 'none' }}>FAQ</a>
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="/assets/logo-full-white.png" alt="Doggie Zen & Den" style={{ height: 72, width: 'auto', display: 'block' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 22 }}>Doggie Zen & Den</span><span style={{ fontSize: 16, color: '#E9E5DF' }}>Professional Dog Grooming & Boarding in Holmen, WI</span></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ display: 'flex', gap: 'clamp(20px,3vw,36px)', flexWrap: 'wrap', fontSize: 16, fontWeight: 600 }}>
                <a href="index.html#about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a>
                <a href="index.html#services" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Services</a>
                <a href="index.html#gallery" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Gallery</a>
                <a href="index.html#reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Reviews</a>
                <a href="index.html#contact" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contact</a>
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
