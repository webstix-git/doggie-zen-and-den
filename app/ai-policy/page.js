import InfoPage, { DocHeading } from '../components/InfoPage';

export const metadata = {
  title: 'AI Policy | Doggie Zen & Den',
  description: 'How Doggie Zen & Den uses artificial intelligence, and the decisions our team still makes about your dog.',
};

const list = { margin: '10px 0 0', paddingLeft: 22 };

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <InfoPage title="AI Policy" lede="How we use artificial intelligence, and the decisions our team still makes about your dog." updated="October 23, 2026">
        <DocHeading>Our approach</DocHeading>
        <p>Doggie Zen & Den is a hands-on grooming and boarding business. The care your dog receives is decided by our team. We may use artificial intelligence (AI) tools to help with some office and website work. People stay in charge of every decision about your dog.</p>
        <DocHeading>How we use AI</DocHeading>
        <ul style={list}>
          <li>Drafting and editing website content</li>
          <li>Helping our website show up in search engines and AI-powered search tools</li>
          <li>Organizing notes, schedules, and routine office tasks</li>
        </ul>
        <p>Anything produced with the help of AI is checked by a member of our team before it is used.</p>
        <DocHeading>What we do not use AI for</DocHeading>
        <ul style={list}>
          <li>Deciding how your dog should be groomed or boarded</li>
          <li>Assessing your dog’s health, temperament, or special needs</li>
          <li>Setting prices</li>
        </ul>
        <p>Those calls are always made by our groomers and boarding team.</p>
        <DocHeading>Accuracy</DocHeading>
        <p>We do our best to keep everything on our website accurate. If you notice something that looks wrong, please tell us so we can fix it.</p>
        <DocHeading>Your information and AI tools</DocHeading>
        <p>We do not enter our customers’ personal information, such as names, phone numbers, or addresses, into public AI tools. See our <a href="/privacy-policy" style={{ fontWeight: 700 }}>Privacy Policy</a> for how we handle your information.</p>
        <DocHeading>AI assistants and our website</DocHeading>
        <p>Search engines and AI assistants may read the public pages of our website. To help them describe our business accurately, we publish an <a href="/ai-readiness" style={{ fontWeight: 700 }}>AI Readiness</a> page with a plain summary of who we are and what we do.</p>
        <DocHeading>Changes to this policy</DocHeading>
        <p>We will update this policy if the way we use AI changes. The date at the top of this page shows when it was last changed.</p>
        <DocHeading>Questions</DocHeading>
        <p>
          <strong>Doggie Zen & Den</strong><br />
          1805 Granary St., Unit 10<br />
          Holmen, WI 54636<br />
          Phone: <a href="tel:6083172961" style={{ fontWeight: 700 }}>608-317-2961</a><br />
          Email: <a href="mailto:zenandden@gmail.com" style={{ fontWeight: 700 }}>zenandden@gmail.com</a>
        </p>
      </InfoPage>
    </>
  );
}
