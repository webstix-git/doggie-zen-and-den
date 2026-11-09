import ThankYouPage from '../components/ThankYouPage';

export const metadata = {
  title: { absolute: 'Thank You | Doggie Zen & Den' },
  description: 'Thanks for contacting Doggie Zen & Den. We will get in touch with you shortly.',
  alternates: { canonical: '/thank-you' },
  robots: { index: false, follow: true },
};

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <ThankYouPage />
    </>
  );
}
