import './globals.css';
import ScrollTop from './components/ScrollTop';

export const metadata = {
  title: 'Doggie Zen & Den | Dog Grooming & Boarding in Holmen, WI',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ScrollTop />
      </body>
    </html>
  );
}
