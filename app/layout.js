import './globals.css';
import GoogleAnalytics from './components/GoogleAnalytics';
import ScrollTop from './components/ScrollTop';
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './lib/site';

const DEFAULT_TITLE = 'Doggie Zen & Den | Dog Grooming & Boarding in Holmen, WI';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: DEFAULT_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1440, height: 1080, alt: 'Groomers at work in the Doggie Zen & Den salon' }],
  },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: SITE_DESCRIPTION, images: [OG_IMAGE] },
  ...(process.env.GOOGLE_SITE_VERIFICATION ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } } : null),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollTop />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
