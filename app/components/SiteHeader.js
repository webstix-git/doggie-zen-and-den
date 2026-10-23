'use client';

import { useEffect } from 'react';
import { El, PhoneIcon } from './el';

export default function SiteHeader() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('header.site-header');
      if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="site-header">
      <nav>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}><img className="site-logo" src="/assets/logo-full-clear.png" alt="Doggie Zen & Den" /></a>
        <div className="site-nav">
          <a href="/#about" style={{ textDecoration: 'none' }}>About</a>
          <a href="/#services" style={{ textDecoration: 'none' }}>Services</a>
          <a href="/#why" style={{ textDecoration: 'none' }}>Why Us</a>
          <a href="/#gallery" style={{ textDecoration: 'none' }}>Gallery</a>
          <a href="/#faq" style={{ textDecoration: 'none' }}>FAQ</a>
          <El tag="a" className="site-phone" href="tel:6083172961" s="text-decoration:none;background:#E99025;color:#29262B;border-radius:999px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:8px" hover="background:#29262B;color:#FFFFFF"><PhoneIcon />608-317-2961</El>
        </div>
      </nav>
    </header>
  );
}
