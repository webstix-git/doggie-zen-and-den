'use client';

import { useEffect, useState } from 'react';
import { ArrowIcon, El, FacebookIcon, PhoneIcon } from './el';
import LegalLinks from './LegalLinks';

const STATS = [
  { v: '10', l: 'years in business' },
  { v: '96%', l: 'recommend us' },
  { v: '218', l: 'Facebook reviews' },
  { v: '20 mi', l: 'service radius' },
];
const GROOM = ['Bath', 'Hair trim', 'Nails', 'Ears', 'Teeth', 'Glands'];
const BOARD = ['Senior dogs', 'Anxious dogs', 'Unique needs'];
const REASONS = [
  { n: '1', title: 'Compassionate, patient care', body: 'Especially for anxious, nervous, or difficult-to-groom dogs.' },
  { n: '2', title: 'Experienced, trusted groomers', body: 'Clients ask for their groomer by name and stay with them for years.' },
  { n: '3', title: 'Excellent grooming results', body: 'Dogs come home looking, smelling, and feeling great.' },
  { n: '4', title: 'Friendly, personalized service', body: 'Clear communication, flexibility, and attention to individual needs.' },
  { n: '5', title: 'Fair pricing', body: 'Quality care at reasonable prices.' },
];
const REVIEWS = [
  { quote: 'Kim and the staff take such great care of our 2 beagles when they get groomed! They have anxiety, and she shows them love when we get there and always tells me how they were. They have a genuine love for animals.', name: 'Google review', source: 'August 2024' },
  { quote: 'Love this place. Everyone is welcoming, happy, they treat my pets like their own. Great job grooming. We have been going to Kim for many years. Highly recommend.', name: 'Google review', source: 'January 2024' },
  { quote: 'Friendly and welcoming staff. Grooming service by Addison was great! Our puppy did awesome and looks awesome! Handsome boy!', name: 'Google review', source: 'July 2023' },
];
const FAQS = [
  { q: 'What grooming services do you offer?', a: 'Full grooming services including bath, hair trim, nails, ears, teeth and glands. Our groomers tailor each visit to your dog.', peek: true },
  { q: 'Can you handle anxious or nervous dogs?', a: 'Yes. Patience is at the heart of what we do, and many of our clients bring dogs that struggled with grooming elsewhere. Let us know about your dog when you book.' },
  { q: 'Do you board senior dogs or dogs with special needs?', a: 'Yes. Our boarding offers personalized care for senior dogs, anxious dogs, and pets with unique needs.' },
  { q: 'Do I need to book on a regular schedule?', a: 'No. We offer both one-time services and ongoing appointments, whichever suits you and your dog.' },
  { q: 'What areas do you serve?', a: 'We are located in Holmen and proudly serve Onalaska, La Crosse, and communities within about 20 miles.' },
  { q: 'How do I book?', a: 'Call 608-317-2961, email zenandden@gmail.com, message us on Facebook, or use the request form on this page.' },
];
const SVC = ['Grooming', 'Boarding', 'Both'];
const SHOTS = [
  '/assets/salon.jpg',
  '/assets/fb-abby.jpg',
  '/assets/poodle-park.jpg',
  '/assets/corgi-groomer.jpg',
  '/assets/fb-welcome.jpg',
  '/assets/sign-wood.webp',
  '/assets/corgi-table.jpg',
  '/assets/corgi-bath.jpg',
  '/assets/fb-maverick.jpg',
  '/assets/fb-inigo.jpg',
];

const inputS = "font:inherit;font-weight:500;font-size:16px;padding:15px 16px;border-radius:14px;border:1.5px solid #c9c2b9;background:#FFFFFF;color:#29262B;outline-color:#E99025";

const SECTIONS = ['about', 'services', 'why', 'gallery', 'faq'];

export default function HomePage() {
  const [svc, setSvc] = useState(0);
  const [shot, setShot] = useState(-1);
  const [section, setSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('header.site-header');
      if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
      const line = Math.min(180, window.innerHeight * 0.32);
      let current = '';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setSection((prev) => (prev === current ? prev : current));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    document.documentElement.style.scrollBehavior = 'smooth';
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(28px)';
      el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.2,1), transform .8s cubic-bezier(.2,.7,.2,1)';
      io.observe(el);
    });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (shot < 0) return;
      const n = SHOTS.length;
      if (e.key === 'Escape') setShot(-1);
      else if (e.key === 'ArrowRight') setShot((s) => (s + 1) % n);
      else if (e.key === 'ArrowLeft') setShot((s) => (s - 1 + n) % n);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shot]);

  return (
    <div className="page-home" style={{ minHeight: '100vh', overflowX: 'clip' }}>
      <div style={{ background: '#29262B', color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, flexWrap: 'wrap', padding: '10px 20px', fontSize: 15, textAlign: 'center' }}>
        <span style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 22, color: '#E99025', lineHeight: 1 }}>Holiday offer</span>
        <span>Watch the video for this season&apos;s special.</span>
        <a href="#holiday" style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none', textTransform: 'capitalize' }}><span style={{ textDecoration: 'underline', textDecorationColor: '#E99025', textUnderlineOffset: 3 }}>See the offer</span></a>
      </div>

      <header className="site-header">
        <nav>
          <a href="#top" style={{ display: 'flex', alignItems: 'center' }}><img className="site-logo" src="/assets/logo-full-clear.png" alt="Doggie Zen & Den" /></a>
          <div className="site-nav">
            <a href="#about" className={section === 'about' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>About</a>
            <a href="#services" className={section === 'services' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Services</a>
            <a href="#why" className={section === 'why' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Why Us</a>
            <a href="#gallery" className={section === 'gallery' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Gallery</a>
            <a href="#faq" className={section === 'faq' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>FAQ</a>
            <El tag="a" className="site-phone" href="tel:6083172961" s="text-decoration:none;background:#E99025;color:#29262B;border-radius:999px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:8px" hover="background:#29262B;color:#FFFFFF"><PhoneIcon />608-317-2961</El>
          </div>
        </nav>
      </header>

      <section id="top" data-screen-label="Hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/paw-pattern.svg')", backgroundSize: '560px 560px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,6vw,88px) clamp(20px,4vw,48px) clamp(56px,7vw,100px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }}>
          <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 30, color: '#80644F', lineHeight: 1 }}>Grooming & boarding · Holmen, WI</div>
            <h1 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 'clamp(42px,6.4vw,76px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Expert Grooming.<br /><span style={{ color: '#E99025' }}>Gentle Hands.</span><br />Happy Dogs.
            </h1>
            <p style={{ margin: 0, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.55, color: '#4a474d', maxWidth: 520, textWrap: 'pretty' }}>Professional dog grooming and personalized boarding in Holmen, Wisconsin.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <El tag="a" href="#contact" s="text-decoration:none;background:#29262B;color:#FFFFFF;padding:17px 28px;border-radius:999px;font-weight:700;font-size:17px" hover="background:#80644F;color:#FFFFFF">Book a grooming</El>
              <El tag="a" href="#services" s="text-decoration:none;border:2px solid #29262B;color:#29262B;padding:15px 26px;border-radius:999px;font-weight:700;font-size:17px" hover="background:#29262B;color:#FFFFFF">Ask about boarding</El>
            </div>
            <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', paddingTop: 8, borderTop: '1px solid rgba(41,38,43,0.15)' }}>
              <div style={{ paddingTop: 18 }}><div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 800, fontSize: 30 }}>10 years</div><div style={{ fontSize: 14, color: '#656268' }}>caring for local dogs</div></div>
              <div style={{ paddingTop: 18 }}><div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 800, fontSize: 30 }}>96%</div><div style={{ fontSize: 14, color: '#656268' }}>recommend us</div></div>
              <div style={{ paddingTop: 18 }}><div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 800, fontSize: 30 }}>218</div><div style={{ fontSize: 14, color: '#656268' }}>Facebook reviews</div></div>
            </div>
          </div>
          <div data-reveal="" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '340px 340px 28px 28px', overflow: 'hidden', aspectRatio: '4/4.6', boxShadow: '0 30px 60px -30px rgba(41,38,43,0.45)' }}>
              <img src="/assets/salon.jpg" alt="Groomers at work in the Doggie Zen & Den salon" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 50%', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', left: -18, bottom: 36, background: '#E99025', color: '#29262B', borderRadius: 20, padding: '16px 20px', transform: 'rotate(-4deg)', boxShadow: '0 14px 30px -12px rgba(41,38,43,0.5)', maxWidth: 220 }}>
              <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 26, lineHeight: 1 }}>Treated like family</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>Puppies, seniors & nervous pups welcome</div>
            </div>
            <div style={{ position: 'absolute', right: -10, top: 24, width: 96, height: 96, borderRadius: '50%', background: '#29262B', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 14px 30px -12px rgba(41,38,43,0.5)' }}>
              <img src="/assets/logo-mark.png" alt="" style={{ width: 58, height: 'auto', filter: 'invert(1)', mixBlendMode: 'screen' }} />
            </div>
          </div>
        </div>
      </section>

      <div aria-hidden="true" style={{ height: 72, backgroundImage: "url('/assets/sign-wood.webp')", backgroundSize: 'cover', backgroundPosition: '50% 62%', borderTop: '1px solid #56483c', borderBottom: '1px solid #56483c' }} />

      <section id="about" data-screen-label="About" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(48px,7vw,104px)', alignItems: 'center' }}>
        <div data-reveal="" style={{ position: 'relative', paddingBottom: '12%' }}>
          <img src="/assets/sign-wood.webp" alt="The Doggie Zen & Den sign on a reclaimed wood wall" style={{ width: '88%', aspectRatio: '4/4.2', objectFit: 'cover', objectPosition: '50% 25%', borderRadius: 32, display: 'block' }} />
          <div style={{ position: 'absolute', right: 0, bottom: 0, width: '50%', aspectRatio: '1/1', borderRadius: 28, overflow: 'hidden', border: '8px solid #E9E5DF', boxShadow: '0 30px 60px -24px rgba(41,38,43,0.5)' }}>
            <img src="/assets/corgi-bath.jpg" alt="Corgi enjoying a bubbly bath" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '45% 40%', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', left: 20, bottom: 'calc(12% + 20px)', background: '#29262B', color: '#FFFFFF', borderRadius: 16, padding: '14px 18px', fontSize: 14, lineHeight: 1.4, boxShadow: '0 18px 40px -20px rgba(41,38,43,0.6)' }}>
            <div style={{ fontWeight: 700 }}>1805 Granary St., Unit 10</div>
            <div style={{ color: '#d6d2cc' }}>Holmen, WI 54636</div>
          </div>
        </div>
        <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>About us</div>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em', textWrap: 'balance' }}>Every dog deserves <span style={{ fontFamily: "'Caveat Brush',cursive", fontWeight: 400, color: '#E99025', fontSize: '1.12em', letterSpacing: 0 }}>patience & kindness.</span></h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#4a474d', textWrap: 'pretty' }}>Doggie Zen & Den offers professional dog grooming and personalized boarding in Holmen, Wisconsin. Our caring, experienced team believes every dog deserves patience, kindness, and individualized attention. From puppies and senior dogs to nervous pups who need a little extra reassurance, we strive to make every visit a positive experience.</p>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#4a474d', textWrap: 'pretty' }}>Known for quality grooming, friendly service, and genuine love for animals, we&apos;re proud to care for the pets of Holmen, Onalaska, La Crosse, and surrounding communities.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 12, marginTop: 8 }}>
            {STATS.map((s) => (
              <div key={s.l} style={{ background: '#FFFFFF', borderRadius: 20, padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 34, lineHeight: 1, letterSpacing: '-0.02em' }}>{s.v}</div>
                <div style={{ fontSize: 14, color: '#656268', lineHeight: 1.35 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" data-screen-label="Services" style={{ background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,64px)' }}>
          <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18, maxWidth: 720 }}>
            <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Our services</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em' }}>Full pet care under one roof.</h2>
            <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: '#4a474d' }}>One-time visits or a regular schedule. Book a single groom, a boarding stay, or both.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 24 }}>
            <article data-reveal="" style={{ background: '#29262B', color: '#FFFFFF', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ aspectRatio: '16/11', position: 'relative', overflow: 'hidden' }}>
                <El tag="img" src="/assets/corgi-bath.jpg" alt="Corgi with shampoo bubbles during a bath" s="width:100%;height:100%;object-fit:cover;object-position:45% 40%;display:block;transition:transform .9s cubic-bezier(.2,.7,.2,1)" hover="transform:scale(1.05)" />
                <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: '50%', background: 'linear-gradient(180deg,rgba(41,38,43,0) 0%,rgba(41,38,43,1) 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 24, top: 24, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 15, background: '#E99025', color: '#29262B', padding: '8px 14px', borderRadius: 999, letterSpacing: '0.06em' }}>1 GROOMING</div>
              </div>
              <div style={{ padding: '0 clamp(24px,3vw,40px) clamp(28px,3vw,40px)', marginTop: -36, position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
                <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(30px,3vw,40px)', lineHeight: 1 }}>Professional dog grooming</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#d6d2cc' }}>Our experienced grooming team offers individualized attention to help dogs look and feel their best.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {GROOM.map((g) => <span key={g} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '8px 14px', fontSize: 14, fontWeight: 600 }}>{g}</span>)}
                </div>
                <El tag="a" href="#contact" s="margin-top:auto;align-self:flex-start;text-decoration:none;background:#E99025;color:#29262B;padding:15px 24px;border-radius:999px;font-weight:800;font-size:16px;line-height:1;display:inline-flex;align-items:center;gap:10px" hover="background:#FFFFFF;color:#29262B"><span style={{ display: 'inline-flex', alignItems: 'center' }}>Book a grooming</span><ArrowIcon /></El>
              </div>
            </article>
            <article data-reveal="" style={{ background: '#E9E5DF', color: '#29262B', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ aspectRatio: '16/11', position: 'relative', overflow: 'hidden' }}>
                <El tag="img" src="/assets/poodle-park.jpg" alt="Happy curly dog with its owner on the grass" s="width:100%;height:100%;object-fit:cover;object-position:40% 35%;display:block;transition:transform .9s cubic-bezier(.2,.7,.2,1)" hover="transform:scale(1.05)" />
                <div style={{ position: 'absolute', inset: 'auto 0 0 0', height: '50%', background: 'linear-gradient(180deg,rgba(233,229,223,0) 0%,rgba(233,229,223,1) 100%)', pointerEvents: 'none' }} />
                <div style={{ position: 'absolute', left: 24, top: 24, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 15, background: '#29262B', color: '#FFFFFF', padding: '8px 14px', borderRadius: 999, letterSpacing: '0.06em' }}>2 BOARDING</div>
              </div>
              <div style={{ padding: '0 clamp(24px,3vw,40px) clamp(28px,3vw,40px)', marginTop: -36, position: 'relative', display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
                <h3 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(30px,3vw,40px)', lineHeight: 1 }}>Personalized dog boarding</h3>
                <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#4a474d' }}>Unlike traditional boarding facilities, we offer personalized care for senior dogs, anxious dogs, and pets with unique needs.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {BOARD.map((b) => <span key={b} style={{ background: '#FFFFFF', border: '1px solid rgba(41,38,43,0.14)', borderRadius: 999, padding: '8px 14px', fontSize: 14, fontWeight: 600 }}>{b}</span>)}
                </div>
                <El tag="a" href="#contact" s="margin-top:auto;align-self:flex-start;text-decoration:none;background:#29262B;color:#FFFFFF;padding:15px 24px;border-radius:999px;font-weight:800;font-size:16px;line-height:1;display:inline-flex;align-items:center;gap:10px" hover="background:#E99025;color:#29262B"><span style={{ display: 'inline-flex', alignItems: 'center' }}>Ask about boarding</span><ArrowIcon /></El>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="why" data-screen-label="Why Choose Us" style={{ background: '#E9E5DF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,9vw,128px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 'clamp(40px,5vw,56px)' }}>
          <div data-reveal="" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: 32, alignItems: 'end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Why Choose Us</div>
              <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 'clamp(34px,4.2vw,56px)', lineHeight: 1.02, letterSpacing: '-0.02em', textWrap: 'balance' }}>Why dog owners trust us with their pets.</h2>
            </div>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#656268' }}>Many of our clients bring dogs that struggled with grooming elsewhere and found a positive experience here. These are the things they tell us matter most.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 20 }}>
            <div data-reveal="" style={{ gridRow: 'span 2', borderRadius: 32, overflow: 'hidden', minHeight: 420, position: 'relative' }}>
              <img src="/assets/corgi-groomer.jpg" alt="Smiling groomer with two corgis" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '45% 40%', display: 'block' }} />
              <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16, background: '#FFFFFF', borderRadius: 20, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src="/assets/logo-mark.png" alt="" style={{ width: 34, mixBlendMode: 'multiply' }} />
                <span style={{ fontSize: 15, lineHeight: 1.4, fontWeight: 600 }}>Clients follow their groomer by name for years.</span>
              </div>
            </div>
            {REASONS.map((r) => (
              <El key={r.n} data-reveal="" s="background:#FFFFFF;border-radius:28px;padding:28px;display:flex;flex-direction:column;gap:14px;transition:transform .4s ease" hover="transform:translateY(-4px);box-shadow:0 24px 50px -28px rgba(41,38,43,0.4)">
                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 52, height: 52, flex: 'none', borderRadius: 16, background: '#E99025', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 20, color: '#29262B' }}>{r.n}</span>
                  <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 108", fontWeight: 800, fontSize: 22, lineHeight: 1.15, textTransform: 'capitalize' }}>{r.title}</div>
                </div>
                <div style={{ fontSize: 16, lineHeight: 1.6, color: '#656268' }}>{r.body}</div>
              </El>
            ))}
          </div>
        </div>
      </section>

      <section id="holiday" data-screen-label="Holiday Offer" style={{ background: '#FFFFFF', padding: 'clamp(48px,6vw,88px) clamp(12px,2vw,24px) clamp(72px,9vw,128px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', background: '#E99025', color: '#29262B', borderRadius: 40, position: 'relative', overflow: 'hidden' }}>
          <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ position: 'absolute', right: '-6%', top: '-12%', width: '52%', maxWidth: 640, opacity: 0.1, mixBlendMode: 'multiply', pointerEvents: 'none' }} />
          <div id="holiday-grid" style={{ position: 'relative', padding: 'clamp(28px,4vw,56px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 'clamp(28px,4vw,48px)', alignItems: 'stretch' }}>
            <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ alignSelf: 'flex-start', background: '#FFFFFF', color: '#29262B', borderRadius: 999, padding: '8px 16px', fontSize: 13, fontWeight: 800, letterSpacing: '0.12em' }}>HOLIDAY SPECIAL</div>
              <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 'clamp(40px,5.4vw,76px)', lineHeight: 0.95, letterSpacing: '-0.025em' }}>Our holiday offer for your pup.</h2>
              <p style={{ margin: 0, fontSize: 19, lineHeight: 1.55, maxWidth: 440, fontWeight: 600 }}>Press play to see this season&apos;s offer, then call or message us to reserve your spot.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <El tag="a" href="tel:6083172961" s="text-decoration:none;background:#29262B;color:#FFFFFF;padding:18px 28px;border-radius:999px;font-weight:800;font-size:17px" hover="background:#FFFFFF;color:#29262B">Call 608-317-2961</El>
                <El tag="a" href="https://www.facebook.com/doggiezenandden" target="_blank" rel="noopener" s="text-decoration:none;background:#FFFFFF;color:#29262B;padding:18px 26px;border-radius:999px;font-weight:800;font-size:17px" hover="background:#29262B;color:#FFFFFF">Message on Facebook</El>
              </div>
            </div>
            <div data-reveal="" style={{ position: 'relative', alignSelf: 'center', width: '100%' }}>
              <div style={{ position: 'relative', background: '#FFFFFF', borderRadius: 28, padding: 8, boxShadow: '0 40px 70px -30px rgba(41,38,43,0.5)', zIndex: 1 }}>
                <video src="/assets/holiday-2025.mp4" controls playsInline preload="metadata" style={{ width: '100%', height: 'auto', aspectRatio: '16/9', display: 'block', background: '#29262B', borderRadius: 20, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" data-screen-label="Gallery" style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(64px,9vw,128px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Gallery</div>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 'clamp(34px,4.2vw,56px)', lineHeight: 1.02, letterSpacing: '-0.015em' }}>Fresh from the table.</h2>
        </div>
        <div id="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gridAutoRows: 260, gridAutoFlow: 'dense', gap: 16 }}>
          <div data-reveal="" onClick={() => setShot(0)} style={{ gridRow: 'span 2', borderRadius: 22, overflow: 'hidden' }}><img src="/assets/salon.jpg" alt="Three dogs being groomed" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '35% 50%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(1)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/fb-abby.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(2)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/poodle-park.jpg" alt="Curly dog smiling up at its owner" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '40% 30%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(3)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/corgi-groomer.jpg" alt="Corgi standing on the grooming table" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 40%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(4)} style={{ gridRow: 'span 2', borderRadius: 22, overflow: 'hidden' }}><img src="/assets/fb-welcome.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(5)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/sign-wood.webp" alt="Doggie Zen & Den logo on the wood wall" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 85%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(6)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/corgi-table.jpg" alt="Corgi with a groomer at the salon table" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(7)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/corgi-bath.jpg" alt="Corgi enjoying a bubbly bath" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '45% 40%', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(8)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/fb-maverick.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
          <div data-reveal="" onClick={() => setShot(9)} style={{ borderRadius: 22, overflow: 'hidden' }}><img src="/assets/fb-inigo.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
        </div>
        <El tag="a" href="https://www.facebook.com/doggiezenandden/photos" target="_blank" rel="noopener" s="align-self:center;text-decoration:none;background:#29262B;color:#FFFFFF;padding:15px 24px;border-radius:999px;font-weight:700;font-size:16px" hover="background:#E99025;color:#29262B">View more pictures on FB</El>
      </section>

      <section id="reviews" data-screen-label="Testimonials" style={{ background: '#29262B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div data-reveal="" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#E99025', lineHeight: 1 }}>Kind words</div>
              <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em' }}>What pet parents say.</h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 24, padding: '16px 22px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 48, lineHeight: 1, color: '#E99025' }}>96%</span>
              <span style={{ fontSize: 15, color: '#d6d2cc', maxWidth: 170, lineHeight: 1.35 }}>recommend us across 218 Facebook reviews</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 20 }}>
            <figure data-reveal="" style={{ margin: 0, background: '#E99025', color: '#29262B', borderRadius: 32, padding: 'clamp(32px,4vw,52px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 32 }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontWeight: 900, fontSize: 120, lineHeight: 0.5, height: 52 }}>“</div>
              <blockquote style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 104", fontWeight: 600, fontSize: 'clamp(22px,2.2vw,30px)', lineHeight: 1.3, letterSpacing: '-0.01em', textWrap: 'pretty' }}>Dani did an amazing job with Inigo. He can be a bit skittish and apprehensive. I was extremely happy with the results. We will be back and I will definitely recommend them as a great option for grooming!</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ width: 48, height: 48, borderRadius: '50%', background: '#29262B', color: '#E99025', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18 }}>G</span>
                <span style={{ display: 'flex', flexDirection: 'column' }}><b style={{ fontSize: 16 }}>Google review</b><span style={{ fontSize: 14 }}>★★★★★ June 2025</span></span>
              </figcaption>
            </figure>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {REVIEWS.map((t) => (
                <figure key={t.source} data-reveal="" style={{ margin: 0, background: '#353238', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 28, padding: '28px 30px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div style={{ color: '#E99025', letterSpacing: 3, fontSize: 15 }}>★★★★★</div>
                  <blockquote style={{ margin: 0, fontSize: 18, lineHeight: 1.55, textWrap: 'pretty' }}>{t.quote}</blockquote>
                  <figcaption style={{ fontSize: 15, color: '#d6d2cc' }}><b style={{ color: '#FFFFFF' }}>{t.name}</b> · {t.source}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <a href="https://www.facebook.com/doggiezenandden/reviews" target="_blank" rel="noopener" style={{ textDecoration: 'none', background: '#E99025', color: '#29262B', padding: '12px 18px', borderRadius: 999, fontWeight: 800, fontSize: 15, textTransform: 'none' }}>Write a Facebook Review</a>
            <a href="https://www.google.com/search?q=Doggie+Zen+%26+Den+Holmen&hl=en#lrd=0x87f94d9a9d559245:0xa2a172d7de00e050,1,,," target="_blank" rel="noopener" style={{ textDecoration: 'none', background: '#FFFFFF', color: '#29262B', padding: '12px 18px', borderRadius: 999, fontWeight: 800, fontSize: 15, textTransform: 'none' }}>Write a Google Review</a>
          </div>
        </div>
      </section>

      <section id="faq" data-screen-label="FAQ" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
        <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>FAQ</div>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,56px)', lineHeight: 1, letterSpacing: '-0.02em' }}>Good questions.</h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#4a474d' }}>Don&apos;t see yours? Give us a call at <a href="tel:6083172961" style={{ fontWeight: 700, whiteSpace: 'nowrap' }}><PhoneIcon faq />608-317-2961</a>.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, gridColumn: 'span 2', minWidth: 0 }}>
          {FAQS.map((f) => (
            <div key={f.q} style={{ position: 'relative' }}>
              {f.peek ? <img src="/assets/faq-dogs.png?v=8" alt="" style={{ position: 'absolute', right: '7%', bottom: '100%', transform: 'translateY(24%)', width: 'min(330px,46%)', height: 'auto', pointerEvents: 'none', zIndex: 2 }} /> : null}
              <div style={{ background: '#FFFFFF', borderRadius: 22, padding: '22px 26px' }}>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 106", fontWeight: 700, fontSize: 19, lineHeight: 1.25, textTransform: 'capitalize' }}>{f.q}</div>
                <p style={{ margin: '12px 0 0', fontSize: 17, lineHeight: 1.65, color: '#4a474d' }}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" data-screen-label="Contact" style={{ background: '#29262B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px) clamp(48px,6vw,80px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))', gap: 'clamp(40px,5vw,72px)' }}>
          <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#E99025', lineHeight: 1 }}>Contact</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 'clamp(42px,5.4vw,76px)', lineHeight: 0.92, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>Schedule your dog&apos;s next visit.</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#d6d2cc', maxWidth: 480 }}>Contact us to schedule your dog&apos;s next grooming appointment or inquire about boarding.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 12 }}>
              <El tag="a" href="tel:6083172961" s="text-decoration:none;color:#FFFFFF;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:18px 20px;display:flex;flex-direction:column;gap:6px" hover="background:rgba(233,144,37,0.16);color:#FFFFFF"><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>CALL</span><span style={{ fontSize: 19, fontWeight: 700 }}>608-317-2961</span></El>
              <El tag="a" href="mailto:zenandden@gmail.com" s="text-decoration:none;color:#FFFFFF;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:18px 20px;display:flex;flex-direction:column;gap:6px" hover="background:rgba(233,144,37,0.16);color:#FFFFFF"><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>EMAIL</span><span style={{ fontSize: 19, fontWeight: 700 }}>zenandden@gmail.com</span></El>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>VISIT</span><span style={{ fontSize: 17, lineHeight: 1.45 }}>1805 Granary St., Unit 10<br />Holmen, WI 54636</span></div>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>SERVING</span><span style={{ fontSize: 17, lineHeight: 1.45 }}>Holmen, Onalaska, La Crosse & a 20-mile radius</span></div>
            </div>
          </div>
          <div data-reveal="" style={{ background: '#E9E5DF', color: '#29262B', borderRadius: 32, padding: 'clamp(26px,3.6vw,44px)', boxShadow: '0 40px 80px -40px rgba(0,0,0,0.8)' }}>
            <form onSubmit={(e) => { e.preventDefault(); window.location.href = 'thank-you.html'; }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 28, textTransform: 'capitalize' }}>Request an appointment</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.4, color: '#4a474d' }}>Fields marked with an asterisk (<span style={{ color: '#C62828' }}>*</span>) are required.</p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {SVC.map((label, i) => (
                  <button key={label} type="button" onClick={() => setSvc(i)} style={{ font: 'inherit', cursor: 'pointer', border: '1.5px solid #29262B', background: svc === i ? '#29262B' : 'transparent', color: svc === i ? '#FFFFFF' : '#29262B', padding: '10px 16px', borderRadius: 999, fontWeight: 700, fontSize: 14 }}>{label}</button>
                ))}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}><span>Your name <span style={{ color: '#C62828' }}>*</span></span><input required name="name" style={cssInline(inputS)} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}><span>Phone <span style={{ color: '#C62828' }}>*</span></span><input required name="phone" type="tel" style={cssInline(inputS)} /></label>
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>Dog&apos;s name & breed<input name="dog" style={cssInline(inputS)} /></label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>Anything we should know?<textarea name="msg" rows={3} style={cssInline(inputS + ';resize:vertical')} /></label>
              <El tag="button" type="submit" s="font:inherit;cursor:pointer;border:none;background:#E99025;color:#29262B;padding:18px 28px;border-radius:999px;font-weight:800;font-size:17px" hover="background:#29262B;color:#FFFFFF">Send request</El>
            </form>
          </div>
        </div>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(20px,4vw,48px) clamp(48px,6vw,80px)' }}>
          <div style={{ height: 'min(420px,70vw)', borderRadius: 32, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
            <iframe title="Map to Doggie Zen & Den" src="https://www.google.com/maps?q=Doggie+Zen+%26+Den,+1805+Granary+St+Unit+10,+Holmen,+WI+54636&output=embed" style={{ width: '100%', height: '100%', border: 0, display: 'block', filter: 'grayscale(0.4) contrast(1.05)' }} loading="lazy" />
          </div>
        </div>
      </section>

      <footer style={{ background: '#29262B', color: '#FFFFFF', position: 'relative', overflow: 'hidden', borderTop: '1px solid rgba(233,229,223,0.35)' }}>
        <img src="/assets/logo-mark.png" alt="" aria-hidden="true" style={{ position: 'absolute', right: '-4%', bottom: '-30%', width: '30%', maxWidth: 380, filter: 'invert(1)', mixBlendMode: 'screen', opacity: 0.06, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '56px clamp(20px,4vw,48px) 28px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 32, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <img src="/assets/logo-full-white.png" alt="Doggie Zen & Den" style={{ height: 72, width: 'auto', display: 'block' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 22 }}>Doggie Zen & Den</span><span style={{ fontSize: 16, color: '#E9E5DF' }}>Professional Dog Grooming & Boarding in Holmen, WI</span></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ display: 'flex', gap: 'clamp(20px,3vw,36px)', flexWrap: 'wrap', fontSize: 16, fontWeight: 600, justifyContent: 'flex-end' }}>
                <a href="#about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</a>
                <a href="#services" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Services</a>
                <a href="#gallery" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Gallery</a>
                <a href="#reviews" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Reviews</a>
                <a href="#contact" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Contact</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 16, fontWeight: 600 }}>
                <span>Follow us on:</span>
                <a href="https://www.facebook.com/doggiezenandden" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: '#E99025', display: 'inline-flex' }}><FacebookIcon /></a>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', fontSize: 16, color: '#E9E5DF', paddingTop: 24, borderTop: '1px solid rgba(233,229,223,0.2)' }}>
            <span>© 2026 Doggie Zen & Den. All rights reserved.</span>
            <LegalLinks />
          </div>
        </div>
      </footer>

      {shot >= 0 ? (
        <div onClick={() => setShot(-1)} style={{ position: 'fixed', inset: 0, zIndex: 80, background: 'rgba(41,38,43,0.86)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 28 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '8px 64px' }}>
            <img src={SHOTS[shot]} alt="" style={{ display: 'block', maxWidth: 'min(960px,calc(100vw - 180px))', maxHeight: '82vh', width: 'auto', height: 'auto', borderRadius: 16, objectFit: 'contain', background: '#111' }} />
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot(-1); }} aria-label="Close" s="position:absolute;top:-8px;right:-58px;width:42px;height:42px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:24px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">×</El>
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot((s) => (s - 1 + SHOTS.length) % SHOTS.length); }} aria-label="Previous photo" s="position:absolute;left:-62px;top:50%;transform:translateY(-50%);width:46px;height:46px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:28px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">‹</El>
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot((s) => (s + 1) % SHOTS.length); }} aria-label="Next photo" s="position:absolute;right:-62px;top:50%;transform:translateY(-50%);width:46px;height:46px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:28px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">›</El>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function cssInline(cssText) {
  const style = {};
  cssText.split(';').forEach((decl) => {
    const i = decl.indexOf(':');
    if (i === -1) return;
    const prop = decl.slice(0, i).trim();
    const value = decl.slice(i + 1).trim();
    if (!prop || !value) return;
    style[prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = value;
  });
  return style;
}
