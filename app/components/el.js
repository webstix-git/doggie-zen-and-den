'use client';

import { useState } from 'react';

export function cssToObj(cssText) {
  if (!cssText) return undefined;
  const style = {};
  String(cssText).split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i === -1) return;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) return;
    const camel = prop.startsWith('--')
      ? prop
      : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    style[camel] = value;
  });
  return style;
}

export function El({ tag: Tag = 'div', s, hover, children, ...rest }) {
  const [hot, setHot] = useState(false);
  const style = {
    ...cssToObj(s),
    ...(hot && hover ? cssToObj(hover) : null),
  };
  return (
    <Tag
      {...rest}
      style={style}
      onMouseEnter={(e) => {
        setHot(true);
        rest.onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        setHot(false);
        rest.onMouseLeave?.(e);
      }}
    >
      {children}
    </Tag>
  );
}

export function PhoneIcon({ faq }) {
  return (
    <svg viewBox="0 0 24 24" width={faq ? 16 : undefined} height={faq ? 16 : undefined} fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={faq ? { display: 'inline-block', verticalAlign: '-3px', marginRight: 6 } : undefined}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function ArrowIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'block', flex: 'none' }}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function FacebookIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.24 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.1 22 12.07z" />
    </svg>
  );
}
