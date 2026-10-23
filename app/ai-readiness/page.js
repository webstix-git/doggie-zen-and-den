import InfoPage, { DocHeading } from '../components/InfoPage';

export const metadata = {
  title: 'AI Readiness | Doggie Zen & Den',
  description: 'A plain summary of Doggie Zen & Den for search engines and AI assistants: who we are, where we are, and the grooming and boarding we offer.',
};

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
      <InfoPage title="AI Readiness" lede="A plain summary of Doggie Zen & Den so search engines and AI assistants can describe the business accurately." updated="October 23, 2026">
        <DocHeading>Business profile</DocHeading>
        <Row label="Business name">Doggie Zen & Den</Row>
        <Row label="Business type">Professional dog grooming and personalized boarding</Row>
        <Row label="In business">10 years</Row>
        <Row label="Address">1805 Granary St., Unit 10, Holmen, WI 54636</Row>
        <Row label="Service area">Holmen, Onalaska, La Crosse, and communities within about 20 miles</Row>
        <Row label="Phone"><a href="tel:6083172961" style={{ fontWeight: 700 }}>608-317-2961</a></Row>
        <Row label="Email"><a href="mailto:zenandden@gmail.com" style={{ fontWeight: 700 }}>zenandden@gmail.com</a></Row>
        <Row label="Facebook"><a href="https://www.facebook.com/doggiezenandden" style={{ fontWeight: 700 }}>facebook.com/doggiezenandden</a></Row>
        <Row label="Appointments">Call, email, message on Facebook, or use the request form on the contact section of the home page. One-time visits and regular schedules are both welcome.</Row>
        <DocHeading>Services</DocHeading>
        <Row label="Professional dog grooming">Bath, hair trim, nails, ears, teeth, and glands. Each visit is tailored to the dog. Puppies, seniors, and nervous dogs are welcome.</Row>
        <Row label="Personalized dog boarding">Care for senior dogs, anxious dogs, and pets with unique needs.</Row>
        <DocHeading>What sets us apart</DocHeading>
        <ul style={list}>
          <li>Compassionate, patient care, especially for anxious or difficult-to-groom dogs</li>
          <li>Experienced groomers that clients ask for by name</li>
          <li>Dogs go home looking, smelling, and feeling great</li>
          <li>Clear communication and attention to each dog</li>
          <li>Fair pricing</li>
        </ul>
        <DocHeading>Key pages</DocHeading>
        <ul style={list}>
          <li><a href="/" style={{ fontWeight: 700 }}>Home</a></li>
          <li><a href="/#about" style={{ fontWeight: 700 }}>About</a></li>
          <li><a href="/#services" style={{ fontWeight: 700 }}>Services</a></li>
          <li><a href="/#why" style={{ fontWeight: 700 }}>Why us</a></li>
          <li><a href="/#gallery" style={{ fontWeight: 700 }}>Gallery</a></li>
          <li><a href="/#reviews" style={{ fontWeight: 700 }}>Reviews</a></li>
          <li><a href="/#faq" style={{ fontWeight: 700 }}>FAQ</a></li>
          <li><a href="/#contact" style={{ fontWeight: 700 }}>Contact</a></li>
          <li><a href="/privacy-policy" style={{ fontWeight: 700 }}>Privacy Policy</a></li>
          <li><a href="/ai-policy" style={{ fontWeight: 700 }}>AI Policy</a></li>
        </ul>
        <DocHeading>Common questions</DocHeading>
        <Row label="Where is Doggie Zen & Den?">1805 Granary St., Unit 10, Holmen, WI 54636.</Row>
        <Row label="What areas do you serve?">Holmen, Onalaska, La Crosse, and communities within about 20 miles.</Row>
        <Row label="Do you groom anxious or nervous dogs?">Yes. Many clients bring dogs that struggled with grooming elsewhere.</Row>
        <Row label="Do you board senior dogs or dogs with special needs?">Yes. Boarding includes personalized care for senior dogs, anxious dogs, and pets with unique needs.</Row>
        <Row label="Do I need a regular schedule?">No. One-time services and ongoing appointments are both available.</Row>
        <Row label="How do I book?">Call 608-317-2961, email zenandden@gmail.com, message the Facebook page, or use the request form on the home page.</Row>
      </InfoPage>
    </>
  );
}
