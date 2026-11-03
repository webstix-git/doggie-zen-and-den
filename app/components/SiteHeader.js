'use client';

import { useEffect, useLayoutEffect } from 'react';
import { El, PhoneIcon } from './el';

export default function SiteHeader() {
  useLayoutEffect(() => {
    const header = document.querySelector('header.site-header');
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
  }, []);

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
          <a href="/" style={{ textDecoration: 'none' }}>Home</a>
          <a href="/#about" style={{ textDecoration: 'none' }}>About Us</a>
          <div className="nav-drop">
            <a href="/#services">Our Services <span aria-hidden="true" style={{ fontSize: '0.75em' }}>▾</span></a>
            <div className="nav-drop-menu">
              <div className="nav-drop-menu-inner">
                <a href="/#services">Grooming</a>
                <a href="/#services">Boarding</a>
              </div>
            </div>
          </div>
          <a href="/#why" style={{ textDecoration: 'none' }}>Why Choose Us</a>
          <a href="/#gallery" style={{ textDecoration: 'none' }}>Gallery</a>
          <a href="/#reviews" style={{ textDecoration: 'none' }}>Testimonials</a>
          <a href="/#faq" style={{ textDecoration: 'none' }}>FAQ</a>
          <a href="/#contact" style={{ textDecoration: 'none' }}>Contact Us</a>
          <El tag="a" className="site-phone" href="tel:6083172961" s="text-decoration:none;background:#E99025;color:#29262B;border-radius:999px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:8px" hover="background:#29262B;color:#FFFFFF"><PhoneIcon />608-317-2961</El>
        </div>
      </nav>
    </header>
  );
}
