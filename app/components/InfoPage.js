import { SITE_URL } from '../lib/site';
import JsonLd from './JsonLd';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export function DocHeading({ children }) {
  return <h2>{children}</h2>;
}

export default function InfoPage({ title, path, lede, updated, children }) {
  return (
    <div className="page-legal">
      {path ? (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: title, item: `${SITE_URL}${path}` },
          ],
        }} />
      ) : null}
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

      <SiteFooter />
    </div>
  );
}
