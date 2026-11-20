import './globals.css';
import GoogleAnalytics, { GoogleTagManagerNoScript } from './components/GoogleAnalytics';
import ScrollTop from './components/ScrollTop';
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, ogImages } from './lib/site';

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
    images: ogImages(),
  },
  twitter: { card: 'summary_large_image', title: DEFAULT_TITLE, description: SITE_DESCRIPTION, images: [OG_IMAGE] },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || 'Y2UjoxjE7nUMnBnOroE8tJztcEYeUpn6StYcAiMoBrs' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="43888569aea14ba5"
          data-endpoint="https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/track-event"
          src="https://midwestfamilyportal.com/track.js"
        />
      </head>
      <body>
        <GoogleTagManagerNoScript />
        {children}
        <ScrollTop />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
