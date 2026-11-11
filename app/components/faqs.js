import { PhoneIcon } from './el';
import { BUSINESS } from '../lib/site';

export const FAQS = [
  { q: 'What grooming services do you offer?', a: 'Full grooming services including bath, hair trim, nails, ears, teeth and glands. Our groomers tailor each visit to your dog.' },
  { q: 'Can you handle anxious or nervous dogs?', a: 'Yes. Patience is at the heart of what we do, and many of our clients bring dogs that struggled with grooming elsewhere. Let us know about your dog when you book.' },
  { q: 'Do you board senior dogs or dogs with special needs?', a: 'Yes. Our boarding offers personalized care for senior dogs, anxious dogs, and pets with unique needs.' },
  { q: 'Do I need to book on a regular schedule?', a: 'No. We offer both one-time services and ongoing appointments, whichever suits you and your dog.' },
  { q: 'What areas do you serve?', a: 'We are located in Holmen and proudly serve Onalaska, and La Crosse.' },
  {
    q: 'How do I book?',
    text: 'Call 608-399-3500, email zenandden@gmail.com, message us on Facebook, visit us at 1805 Granary St., Unit 10, Holmen, WI, or use the request form on our website.',
    a: (
      <>
        Call <a href="tel:6083993500" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}><PhoneIcon faq />608-399-3500</a>
        , email <a href="mailto:zenandden@gmail.com" style={{ fontWeight: 700 }}>zenandden@gmail.com</a>
        , message us on Facebook, <a href={BUSINESS.maps} target="_blank" rel="noopener" style={{ fontWeight: 700 }}>visit us</a>
        , or use the <a href="#contact" style={{ fontWeight: 700 }}>request form</a> on this page.
      </>
    ),
  },
];
