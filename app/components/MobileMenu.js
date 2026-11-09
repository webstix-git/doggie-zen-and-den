'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { PhoneIcon } from './el';

const LINKS = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Our Services', sub: ['Grooming', 'Boarding'] },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Testimonials' },
  { id: 'faq', label: 'FAQs' },
  { id: 'contact', label: 'Contact Us' },
];

export default function MobileMenu({ base = '/', active = '' }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);
  const wasOpen = useRef(false);
  const pendingHash = useRef('');

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) toggleRef.current?.focus({ preventScroll: true });
      wasOpen.current = false;
      const hash = pendingHash.current;
      pendingHash.current = '';
      if (hash) {
        const target = document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        history.pushState(null, '', hash);
      }
      return undefined;
    }
    wasOpen.current = true;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const mq = window.matchMedia('(min-width: 1100px)');
    const onWide = () => { if (mq.matches) setOpen(false); };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  // Page scrolling is locked while the menu is open, so same-page jumps wait until it has closed.
  const go = (e) => {
    const url = new URL(e.currentTarget.href);
    if (url.hash && url.pathname === window.location.pathname) {
      e.preventDefault();
      pendingHash.current = url.hash;
    }
    setOpen(false);
  };

  const drawer = (
    <div className={`mobile-menu${open ? ' is-open' : ''}`} inert={!open}>
      <div className="mobile-menu-overlay" onClick={close} />
      <div id="mobile-menu-panel" className="mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-menu-top">
          <a href={base || '#top'} onClick={go} aria-label="Doggie Zen & Den home"><img src="/assets/logo-full-clear.png" alt="" className="mobile-menu-logo" /></a>
          <button ref={closeRef} type="button" className="mobile-menu-close" onClick={close} aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
        <nav className="mobile-menu-links" aria-label="Main">
          {LINKS.map((l) => (
            <div key={l.id}>
              <a href={`${base}#${l.id}`} onClick={go} className={active === l.id ? 'is-active' : undefined} aria-current={active === l.id ? 'true' : undefined}>{l.label}</a>
              {l.sub ? (
                <div className="mobile-menu-sub">
                  {l.sub.map((s) => <a key={s} href={`${base}#${l.id}`} onClick={go}>{s}</a>)}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <a href="tel:6083172961" className="mobile-menu-call" onClick={close}><PhoneIcon size={18} />608-317-2961</a>
      </div>
    </div>
  );

  return (
    <div className="menu-actions">
      <a href="tel:6083172961" className="menu-call" aria-label="Call 608-317-2961"><PhoneIcon size={18} /></a>
      <button ref={toggleRef} type="button" className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu-panel">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
      {mounted ? createPortal(drawer, document.body) : null}
    </div>
  );
}
