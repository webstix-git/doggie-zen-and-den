'use client';

import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

let scriptPromise;
function loadScript() {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      s.defer = true;
      s.onload = resolve;
      s.onerror = () => { scriptPromise = undefined; reject(); };
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

const Turnstile = forwardRef(function Turnstile({ onVerify }, ref) {
  const box = useRef(null);
  const widget = useRef(null);
  const onVerifyRef = useRef(onVerify);
  onVerifyRef.current = onVerify;

  useImperativeHandle(ref, () => ({
    enabled: Boolean(SITE_KEY),
    reset: () => { if (widget.current != null) window.turnstile?.reset(widget.current); },
  }), []);

  useEffect(() => {
    if (!SITE_KEY) return undefined;
    let cancelled = false;
    loadScript().then(() => {
      if (cancelled || !box.current) return;
      widget.current = window.turnstile.render(box.current, {
        sitekey: SITE_KEY,
        theme: 'light',
        size: 'flexible',
        callback: (token) => onVerifyRef.current?.(token),
      });
    }).catch(() => {});
    return () => {
      cancelled = true;
      if (widget.current != null) window.turnstile?.remove(widget.current);
      widget.current = null;
    };
  }, []);

  if (!SITE_KEY) return null;
  return <div ref={box} style={{ minHeight: 65 }} />;
});

export default Turnstile;
