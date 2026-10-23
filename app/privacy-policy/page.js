import InfoPage, { DocHeading } from '../components/InfoPage';

export const metadata = {
  title: 'Privacy Policy | Doggie Zen & Den',
  description: 'How Doggie Zen & Den collects, uses, and protects the information you share when you visit our website or book grooming and boarding.',
};

const list = { margin: '10px 0 0', paddingLeft: 22 };

export default function Page() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..125,400..900&family=Figtree:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <InfoPage title="Privacy Policy" lede="How we collect, use, and protect the information you share with us." updated="October 23, 2026">
        <DocHeading>Overview</DocHeading>
        <p>Doggie Zen & Den (“we,” “us,” or “our”) respects your privacy. This policy explains what information we collect when you visit our website, contact us, or book grooming or boarding, how we use it, and the choices you have.</p>
        <DocHeading>Information we collect</DocHeading>
        <p><strong>Information you give us.</strong> When you call, email, message us, or use the request form, you may share your name, phone number, email address, your dog’s name and breed, and notes about your dog or your visit.</p>
        <p><strong>Information collected automatically.</strong> Like most websites, ours may collect basic technical details when you visit, such as your browser, your device, the pages you view, and the site that sent you here. This helps us keep the site working.</p>
        <DocHeading>How we use information</DocHeading>
        <ul style={list}>
          <li>To answer your questions and schedule grooming or boarding</li>
          <li>To care for your dog the way you asked us to</li>
          <li>To keep records of appointments and stays</li>
          <li>To improve our website and our service</li>
          <li>To meet legal, tax, and accounting requirements</li>
        </ul>
        <DocHeading>Cookies</DocHeading>
        <p>Our website may use cookies and similar tools to keep things running smoothly. You can set your browser to refuse cookies. Some parts of the site may not work the same way without them.</p>
        <DocHeading>How we share information</DocHeading>
        <p>We do not sell your personal information. We share it only when it is needed to serve you, for example with:</p>
        <ul style={list}>
          <li>Companies that help us run our website, such as our web host</li>
          <li>Services that help us answer messages and keep our records</li>
          <li>Authorities when the law requires it</li>
        </ul>
        <DocHeading>Data security and retention</DocHeading>
        <p>We use reasonable safeguards to protect your information. No method of sending or storing data is completely secure. We keep information only as long as we need it for the reasons in this policy, or as long as the law requires.</p>
        <DocHeading>Your choices</DocHeading>
        <p>You can ask us to see, correct, or delete the personal information we hold about you. Contact us using the details below.</p>
        <DocHeading>Children’s privacy</DocHeading>
        <p>Our website is meant for adults and is not directed to children under 13. We do not knowingly collect personal information from children.</p>
        <DocHeading>Third-party links</DocHeading>
        <p>Our website may link to other sites, including Facebook and Google, and it shows a map from Google. We are not responsible for the privacy practices of those sites.</p>
        <DocHeading>Changes to this policy</DocHeading>
        <p>We may update this policy from time to time. The date at the top of this page shows when it was last changed.</p>
        <DocHeading>Contact us</DocHeading>
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
