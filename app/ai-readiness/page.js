import InfoPage, { DocHeading } from '../components/InfoPage';
import { BUSINESS, pageMetadata } from '../lib/site';

export const metadata = pageMetadata({
  title: 'AI Readiness | Doggie Zen & Den',
  description: 'How Doggie Zen & Den is set up for search engines and AI assistants: business profile, contact details, and what sets us apart.',
  path: '/ai-readiness',
});

const rowLabel = { fontWeight: 800, color: '#14183A' };
const list = { margin: '10px 0 0', paddingLeft: 22 };

function Row({ label, children }) {
  return (
    <p style={{ margin: '12px 0 0' }}>
      <span style={rowLabel}>{label}. </span>
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <InfoPage title="AI Readiness" path="/ai-readiness" lede="A plain summary of Doggie Zen & Den so search engines and AI assistants can describe the business accurately." updated="November 11, 2026">
        <DocHeading>Business profile</DocHeading>
        <Row label="Business name">Doggie Zen & Den</Row>
        <Row label="Business type">Professional dog grooming and personalized boarding</Row>
        <Row label="In business">10 years</Row>
        <Row label="Address"><a href={BUSINESS.maps} target="_blank" rel="noopener" style={{ fontWeight: 700 }}>1805 Granary St., Unit 10, Holmen, WI 54636</a></Row>
        <Row label="Service area">Holmen, Onalaska, and La Crosse</Row>
        <Row label="Phone"><a href="tel:6083993500" style={{ fontWeight: 700 }}>608-399-3500</a></Row>
        <Row label="Email"><a href="mailto:zenandden@gmail.com" style={{ fontWeight: 700 }}>zenandden@gmail.com</a></Row>
        <Row label="Facebook"><a href={BUSINESS.facebook} target="_blank" rel="noopener" style={{ fontWeight: 700 }}>facebook.com/doggiezenandden</a></Row>
        <Row label="Appointments">Call, email, message on Facebook, or use the request form on the contact section of the home page. One-time visits and regular schedules are both welcome.</Row>
        <DocHeading>What sets us apart</DocHeading>
        <ul style={list}>
          <li>Compassionate, patient care, especially for anxious or difficult-to-groom dogs</li>
          <li>Experienced groomers that clients ask for by name</li>
          <li>Dogs go home looking, smelling, and feeling great</li>
          <li>Clear communication and attention to each dog</li>
          <li>Fair pricing</li>
        </ul>
      </InfoPage>
    </>
  );
}
