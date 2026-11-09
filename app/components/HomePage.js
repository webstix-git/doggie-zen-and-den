'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowIcon, El, FacebookIcon, MailIcon, MapPinIcon, PhoneIcon } from './el';
import { FAQS } from './faqs';
import LegalLinks from './LegalLinks';
import MobileMenu from './MobileMenu';
import Turnstile from './Turnstile';

const STATS = [
  { v: '10', l: 'years in business' },
  { v: '20 mi', l: 'service radius' },
];
const MAPS_URL = 'https://www.google.com/maps?q=Doggie+Zen+%26+Den,+1805+Granary+St+Unit+10,+Holmen,+WI+54636';
const GROOM = ['Bath', 'Hair trim', 'Nails', 'Ears', 'Teeth', 'Glands'];
const BOARD = ['Senior dogs', 'Anxious dogs', 'Unique needs'];
const REASONS = [
  { n: '1', title: <><span style={{ whiteSpace: 'nowrap' }}>Compassionate,</span><br /><span style={{ whiteSpace: 'nowrap' }}>patient care</span></>, body: 'Especially for anxious, nervous, or difficult-to-groom dogs.' },
  { n: '2', title: <>Experienced, trusted{'\u00A0'}groomers</>, body: 'Clients ask for their groomer by name and stay with them for\u00A0years.' },
  { n: '3', title: <>Excellent<br /><span style={{ whiteSpace: 'nowrap' }}>grooming results</span></>, body: 'Dogs come home looking, smelling, and feeling\u00A0great.' },
  { n: '4', title: <>Friendly, personalized{'\u00A0'}service</>, body: 'Clear communication, flexibility, and attention to individual\u00A0needs.' },
  { n: '5', title: 'Fair pricing', body: 'Quality care at reasonable\u00A0prices.' },
];
const REVIEWS = [
  { quote: 'Kim and the staff take such great care of our 2 beagles when they get groomed! They have anxiety, and she shows them love when we get there and always tells me how they were. They have a genuine love for animals.', name: 'Google review', source: 'August 2024' },
  { quote: 'Love this place. Everyone is welcoming, happy, they treat my pets like their own. Great job grooming. We have been going to Kim for many years. Highly recommend.', name: 'Google review', source: 'January 2024' },
  { quote: 'Friendly and welcoming staff. Grooming service by Addison was great! Our puppy did awesome and looks awesome! Handsome boy!', name: 'Google review', source: 'July 2023' },
];
const SVC = ['Grooming', 'Boarding', 'Both'];
const SHOTS = [
  // Spring / cherry blossom
  '/images-new/684745948_1572259728241593_3737129147181242563_n.jpg',
  '/images-new/685936628_1572262701574629_623599799378289251_n.jpg',
  '/images-new/686183254_1572251918242374_2545798712660880906_n.jpg',
  '/images-new/686295464_1572139554920277_1109727149676777114_n.jpg',
  // Farm / barn
  '/images-new/743541419_1674843270413678_2301326152599441399_n.jpeg',
  '/images-new/748718981_1025545183802632_343023940380264957_n.jpeg',
  '/images-new/749432672_1509577237003831_5961666031294141734_n.jpeg',
  '/images-new/753145688_2067958493852535_1115693096067545367_n.jpeg',
  // Sunset / cornfield
  '/images-new/762372437_1407835941197864_8271008587082124663_n.jpeg',
  '/images-new/763119712_1019662797705546_2181251117695170663_n.jpeg',
  '/images-new/763918473_1555997435551169_5285354757435899059_n.jpeg',
  '/images-new/768361386_28256551800643076_7089430914872924579_n.jpeg',
  // City night / moon
  '/images-new/773624246_1031871796288223_653109384547104159_n.jpeg',
  '/images-new/774475675_1674781084656123_3947626137564277904_n.jpg',
  '/images-new/775154288_1701347674255369_8631172163731394577_n.jpeg',
  '/images-new/777801080_1535468737882365_2104710154492282357_n.jpeg',
];
const GALLERY_TALL = new Set([0, 4, 8, 12]);

const inputS = "font:inherit;font-weight:500;font-size:16px;padding:15px 16px;border-radius:14px;border:1.5px solid #c9c2b9;background:#FFFFFF;color:#29262B;outline-color:#E99025";

const SECTIONS = ['about', 'services', 'why', 'gallery', 'reviews', 'faq', 'contact'];

export default function HomePage() {
  const [svc, setSvc] = useState('');
  const [formStatus, setFormStatus] = useState('idle');
  const [shot, setShot] = useState(-1);
  const captcha = useRef(null);

  const submitRequest = async (e) => {
    e.preventDefault();
    if (formStatus === 'sending') return;
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (captcha.current?.enabled && !data['cf-turnstile-response']) {
      setFormStatus('captcha');
      return;
    }
    setFormStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(`Form submit failed: ${res.status}`);
      window.location.href = '/thank-you';
    } catch {
      captcha.current?.reset();
      setFormStatus('error');
    }
  };
  const [section, setSection] = useState('');

  useLayoutEffect(() => {
    const header = document.querySelector('header.site-header');
    if (header) header.classList.toggle('is-stuck', window.scrollY > 8);
  }, []);

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
        <span className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 22, color: '#E99025', lineHeight: 1 }}>Holiday offer</span>
        <span>Watch the video for this season&apos;s special.</span>
        <a href="#holiday" style={{ color: '#FFFFFF', fontWeight: 600, textDecoration: 'none', textTransform: 'capitalize' }}><span style={{ textDecoration: 'underline', textDecorationColor: '#E99025', textUnderlineOffset: 3 }}>See the offer</span></a>
      </div>

      <header className="site-header">
        <nav>
          <a href="#top" style={{ display: 'flex', alignItems: 'center' }}><img className="site-logo" src="/assets/logo-full-clear.png" alt="Doggie Zen & Den" /></a>
          <div className="site-nav">
            <a href="#about" className={section === 'about' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>About Us</a>
            <div className={`nav-drop${section === 'services' ? ' is-section' : ''}`}>
              <a href="#services" className={section === 'services' ? 'is-section' : undefined}>Our Services <span aria-hidden="true" style={{ fontSize: '0.75em' }}>▾</span></a>
              <div className="nav-drop-menu">
                <div className="nav-drop-menu-inner">
                  <a href="#services">Grooming</a>
                  <a href="#services">Boarding</a>
                </div>
              </div>
            </div>
            <a href="#why" className={section === 'why' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Why Choose Us</a>
            <a href="#gallery" className={section === 'gallery' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Gallery</a>
            <a href="#reviews" className={section === 'reviews' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Testimonials</a>
            <a href="#faq" className={section === 'faq' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>FAQs</a>
            <a href="#contact" className={section === 'contact' ? 'is-section' : undefined} style={{ textDecoration: 'none' }}>Contact Us</a>
            <El tag="a" className="site-phone" href="tel:6083172961" s="text-decoration:none;background:#E99025;color:#29262B;border-radius:999px;font-weight:700;white-space:nowrap;display:inline-flex;align-items:center;gap:8px" hover="background:#29262B;color:#FFFFFF"><PhoneIcon />608-317-2961</El>
          </div>
          <MobileMenu base="" active={section} />
        </nav>
      </header>

      <section id="top" data-screen-label="Hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundImage: "url('/assets/paw-pattern.svg')", backgroundSize: '560px 560px', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: 'clamp(40px,6vw,88px) clamp(20px,4vw,48px) clamp(56px,7vw,100px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 'clamp(40px,5vw,72px)', alignItems: 'center' }}>
          <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 30, color: '#80644F', lineHeight: 1 }}>Grooming & boarding · Holmen, WI</div>
            <h1 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 'clamp(42px,6.4vw,76px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Expert Grooming.<br /><span style={{ color: '#E99025' }}>Gentle Hands.</span><br />Happy Dogs.
            </h1>
            <p style={{ margin: 0, fontSize: 'clamp(18px,1.6vw,21px)', lineHeight: 1.55, color: '#4a474d', maxWidth: 520, textWrap: 'pretty' }}>Professional dog grooming and personalized boarding in Holmen, Wisconsin.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <El tag="a" href="#contact" className="btn-text" s="text-decoration:none;background:#29262B;color:#FFFFFF;padding:17px 28px;border-radius:999px;font-weight:700;font-size:17px" hover="background:#80644F;color:#FFFFFF">Book a grooming</El>
              <El tag="a" href="#services" className="btn-text" s="text-decoration:none;border:2px solid #29262B;color:#29262B;padding:15px 26px;border-radius:999px;font-weight:700;font-size:17px" hover="background:#29262B;color:#FFFFFF">Ask about boarding</El>
            </div>
          </div>
          <div data-reveal="" style={{ position: 'relative' }}>
            <div style={{ borderRadius: '340px 340px 28px 28px', overflow: 'hidden', aspectRatio: '4/4.6', boxShadow: '0 30px 60px -30px rgba(41,38,43,0.45)' }}>
              <img src="/assets/salon.jpg" alt="Groomers at work in the Doggie Zen & Den salon" width={1440} height={1080} fetchPriority="high" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '60% 50%', display: 'block' }} />
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
          <img src="/assets/sign-wood.webp" alt="The Doggie Zen & Den sign on a reclaimed wood wall" width={1360} height={1020} loading="lazy" decoding="async" style={{ width: '88%', aspectRatio: '4/4.2', objectFit: 'cover', objectPosition: '50% 25%', borderRadius: 32, display: 'block' }} />
          <div style={{ position: 'absolute', right: 0, bottom: 0, width: '50%', aspectRatio: '1/1', borderRadius: 28, overflow: 'hidden', border: '8px solid #E9E5DF', boxShadow: '0 30px 60px -24px rgba(41,38,43,0.5)' }}>
            <img src="/images/862431484_1442652258037121_8866427928447707797_n.jpg" alt="Freshly groomed dog on the salon table" width={881} height={1024} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 58%', display: 'block' }} />
          </div>
          <div style={{ position: 'absolute', left: 20, bottom: 'calc(12% + 20px)', background: '#29262B', color: '#FFFFFF', borderRadius: 16, padding: '14px 18px', fontSize: 14, lineHeight: 1.4, textAlign: 'center', boxShadow: '0 18px 40px -20px rgba(41,38,43,0.6)' }}>
            <div style={{ fontWeight: 700 }}>1805 Granary St., Unit 10</div>
            <div style={{ color: '#d6d2cc' }}>Holmen, WI 54636</div>
          </div>
        </div>
        <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>About us</div>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em', textWrap: 'balance' }}>Every dog deserves <span style={{ fontFamily: "'Caveat Brush',cursive", fontWeight: 400, color: '#E99025', fontSize: '1.12em', letterSpacing: 0 }}>patience & kindness.</span></h2>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#4a474d', textWrap: 'pretty' }}>Doggie Zen & Den offers professional dog grooming and personalized boarding in Holmen, Wisconsin. Our caring, experienced team believes every dog deserves patience, kindness, and individualized attention. From puppies and senior dogs to nervous pups who need a little extra reassurance, we strive to make every visit a positive experience.</p>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7, color: '#4a474d', textWrap: 'pretty' }}>Known for quality grooming, friendly service, and genuine love for animals, we&apos;re proud to care for the pets of Holmen, Onalaska, La Crosse, and surrounding communities.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 12, marginTop: 8 }}>
            {STATS.map((s) => (
              <div key={s.l} style={{ background: '#FFFFFF', borderRadius: 20, padding: '20px 18px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4 }}>
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
            <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Our services</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em' }}>Full pet care under one roof.</h2>
            <p style={{ margin: 0, maxWidth: 520, fontSize: 17, lineHeight: 1.6, color: '#4a474d' }}>One-time visits or a regular schedule. Book a single groom, a boarding stay, or both.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,460px),1fr))', gap: 24 }}>
            <article data-reveal="" style={{ background: '#29262B', color: '#FFFFFF', borderRadius: 32, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ aspectRatio: '16/11', position: 'relative', overflow: 'hidden' }}>
                <El tag="img" src="/assets/corgi-bath.jpg" alt="Corgi with shampoo bubbles during a bath" width={540} height={360} loading="lazy" decoding="async" s="width:100%;height:100%;object-fit:cover;object-position:45% 40%;display:block;transition:transform .9s cubic-bezier(.2,.7,.2,1)" hover="transform:scale(1.05)" />
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
                <El tag="img" src="/assets/poodle-park.jpg" alt="Happy curly dog with its owner on the grass" width={1600} height={1065} loading="lazy" decoding="async" s="width:100%;height:100%;object-fit:cover;object-position:40% 35%;display:block;transition:transform .9s cubic-bezier(.2,.7,.2,1)" hover="transform:scale(1.05)" />
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 520 }}>
              <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Why Choose Us</div>
              <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 'clamp(32px,3.8vw,48px)', lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: '14ch' }}>Why dog owners trust us with their pets.</h2>
            </div>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#656268' }}>Many of our clients bring dogs that struggled with grooming elsewhere and found a positive experience here. These are the things they tell us matter most.</p>
          </div>
          <div id="why-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(260px,380px) minmax(0,1fr)', gap: 20, alignItems: 'stretch' }}>
            <div data-reveal="" style={{ borderRadius: 32, overflow: 'hidden', minHeight: 360, position: 'relative' }}>
              <img src="/assets/corgi-groomer.jpg" alt="Smiling groomer with two corgis" width={1000} height={1223} loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '45% 40%', display: 'block' }} />
              <div style={{ position: 'absolute', left: 12, right: 12, bottom: 12, background: '#FFFFFF', borderRadius: 18, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <img src="/assets/logo-mark.png" alt="" style={{ width: 28, flex: 'none', mixBlendMode: 'multiply' }} />
                <span style={{ fontSize: 13, lineHeight: 1.35, fontWeight: 600, textWrap: 'pretty' }}>Clients follow their groomer by name for{'\u00A0'}years.</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16, minWidth: 0 }}>
              {REASONS.map((r) => (
                <El key={r.n} data-reveal="" s="background:#FFFFFF;border-radius:28px;padding:22px;display:flex;flex-direction:column;gap:12px;width:100%;min-width:0;box-sizing:border-box;transition:transform .4s ease" hover="transform:translateY(-4px);box-shadow:0 24px 50px -28px rgba(41,38,43,0.4)">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, minWidth: 0 }}>
                    <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 14, background: '#E99025', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 18, color: '#29262B' }}>{r.n}</span>
                    <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 108", fontWeight: 800, fontSize: 18, lineHeight: 1.25, minWidth: 0, textWrap: 'pretty' }}>{r.title}</div>
                  </div>
                  <div style={{ fontSize: 15, lineHeight: 1.55, color: '#656268', textWrap: 'pretty' }}>{r.body}</div>
                </El>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="holiday" data-screen-label="Holiday Offer" style={{ background: '#FFFFFF', padding: 'clamp(48px,6vw,88px) clamp(12px,2vw,24px) clamp(72px,9vw,128px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', background: '#E99025', color: '#29262B', borderRadius: 40, position: 'relative', overflow: 'hidden' }}>
          <img src="/assets/logo-mark.png" alt="" aria-hidden="true" loading="lazy" decoding="async" style={{ position: 'absolute', right: '-6%', top: '-12%', width: '52%', maxWidth: 640, opacity: 0.1, mixBlendMode: 'multiply', pointerEvents: 'none' }} />
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
          <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>Gallery</div>
          <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 'clamp(34px,4.2vw,56px)', lineHeight: 1.02, letterSpacing: '-0.015em' }}>Fresh from the table.</h2>
        </div>
        <div id="gallery-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(min(100%,260px),1fr))', gridAutoRows: 260, gridAutoFlow: 'dense', gap: 16 }}>
          {SHOTS.map((src, i) => (
            <div key={src} data-reveal="" onClick={() => setShot(i)} style={{ ...(GALLERY_TALL.has(i) ? { gridRow: 'span 2' } : null), borderRadius: 22, overflow: 'hidden' }}>
              <img src={src} alt={`Dog groomed at Doggie Zen & Den, Holmen WI (photo ${i + 1})`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 35%', display: 'block' }} />
            </div>
          ))}
        </div>
        <El tag="a" href="https://www.facebook.com/doggiezenandden/photos" target="_blank" rel="noopener" s="align-self:center;text-decoration:none;background:#29262B;color:#FFFFFF;padding:15px 24px;border-radius:999px;font-weight:700;font-size:16px" hover="background:#E99025;color:#29262B">View more pictures on FB</El>
      </section>

      <section id="reviews" data-screen-label="Testimonials" style={{ background: '#29262B', color: '#FFFFFF' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'flex', flexDirection: 'column', gap: 48 }}>
          <div data-reveal="" style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#E99025', lineHeight: 1 }}>Kind words</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,60px)', lineHeight: 1, letterSpacing: '-0.02em' }}>What pet parents say.</h2>
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

      <section id="faq" data-screen-label="FAQ" style={{ maxWidth: 1180, margin: '0 auto', padding: 'clamp(72px,10vw,140px) clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,320px),1fr))', gap: 28, alignItems: 'start' }}>
        <div data-reveal="" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', columnGap: 24, rowGap: 12, gridColumn: '1 / -1' }}>
          <div style={{ flex: '1 1 0', display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#80644F', lineHeight: 1 }}>FAQs</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 114", fontWeight: 800, fontSize: 'clamp(36px,4.4vw,56px)', lineHeight: 1, letterSpacing: '-0.02em' }}>Good questions.</h2>
          </div>
          <img src="/assets/friendly_dogs.webp" alt="" width={800} height={400} loading="lazy" decoding="async" style={{ display: 'block', marginLeft: 'auto', marginRight: '7%', marginBottom: 'calc(-28px - min(330px,46%) * 0.055)', width: 'min(330px,46%)', height: 'auto', pointerEvents: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, gridColumn: '1 / -1', minWidth: 0 }}>
          {FAQS.map((f) => (
            <div key={f.q} style={{ position: 'relative' }}>
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
            <div className="eyebrow" style={{ fontFamily: "'Caveat Brush',cursive", fontSize: 32, color: '#E99025', lineHeight: 1 }}>Contact</div>
            <h2 style={{ margin: 0, fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 120", fontWeight: 850, fontSize: 'clamp(42px,5.4vw,76px)', lineHeight: 0.92, letterSpacing: '-0.025em', textTransform: 'uppercase' }}>Schedule your dog&apos;s next visit.</h2>
            <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#d6d2cc', maxWidth: 480 }}>Contact us to schedule your dog&apos;s next grooming appointment or inquire about boarding.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 12 }}>
              <El tag="a" href="tel:6083172961" s="text-decoration:none;color:#FFFFFF;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:18px 20px;display:flex;flex-direction:column;gap:6px" hover="background:rgba(233,144,37,0.16);color:#FFFFFF"><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>CALL</span><span style={{ fontSize: 19, fontWeight: 700 }}>608-317-2961</span></El>
              <El tag="a" href="mailto:zenandden@gmail.com" s="text-decoration:none;color:#FFFFFF;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:20px;padding:18px 20px;display:flex;flex-direction:column;gap:6px" hover="background:rgba(233,144,37,0.16);color:#FFFFFF"><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>EMAIL</span><span style={{ fontSize: 19, fontWeight: 700 }}>zenandden@gmail.com</span></El>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>VISIT</span><span style={{ fontSize: 17, lineHeight: 1.45 }}>1805 Granary St.<br />Unit 10<br />Holmen, WI 54636</span></div>
              <div style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}><span style={{ fontSize: 12, letterSpacing: '0.12em', color: '#E99025', fontWeight: 800 }}>SERVING</span><span style={{ fontSize: 17, lineHeight: 1.45 }}>Holmen, Onalaska, La Crosse & a 20-mile radius</span></div>
            </div>
          </div>
          <div data-reveal="" style={{ background: '#E9E5DF', color: '#29262B', borderRadius: 32, padding: 'clamp(26px,3.6vw,44px)', boxShadow: '0 40px 80px -40px rgba(0,0,0,0.8)' }}>
            <form method="post" onSubmit={submitRequest} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 112", fontWeight: 800, fontSize: 28, textTransform: 'capitalize' }}>Request an appointment</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.4, color: '#4a474d' }}>Fields marked with an asterisk (<span style={{ color: '#C62828' }}>*</span>) are required.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 14 }}>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}><span>Name: <span style={{ color: '#C62828' }}>*</span></span><input required name="name" style={cssInline(inputS)} /></label>
                <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}><span>Phone: <span style={{ color: '#C62828' }}>*</span></span><input required name="phone" type="tel" style={cssInline(inputS)} /></label>
              </div>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>Dog&apos;s name & breed:<input name="dog" style={cssInline(inputS)} /></label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>
                <span>Service interested in: <span style={{ color: '#C62828' }}>*</span></span>
                <select required name="service" value={svc} onChange={(e) => setSvc(e.target.value)} className="contact-service-select" style={cssInline(inputS.replace('background:#FFFFFF', 'background-color:#FFFFFF') + ';padding-right:44px')}>
                  <option value="" disabled>Select a service</option>
                  {SVC.map((label) => <option key={label} value={label}>{label}</option>)}
                </select>
              </label>
              <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14, fontWeight: 600 }}>Anything we should know?<textarea name="message" rows={3} style={cssInline(inputS + ';resize:vertical')} /></label>
              <Turnstile ref={captcha} onVerify={() => setFormStatus((s) => (s === 'captcha' ? 'idle' : s))} />
              {formStatus === 'captcha' && (
                <p role="alert" style={{ margin: 0, padding: '12px 16px', borderRadius: 14, background: '#FBE9E7', color: '#B71C1C', fontSize: 15, fontWeight: 600, lineHeight: 1.45 }}>
                  Please complete the security check above before sending.
                </p>
              )}
              {formStatus === 'error' && (
                <p role="alert" style={{ margin: 0, padding: '12px 16px', borderRadius: 14, background: '#FBE9E7', color: '#B71C1C', fontSize: 15, fontWeight: 600, lineHeight: 1.45 }}>
                  Sorry, your request didn&apos;t go through. Please try again or call us at <a href="tel:6083172961" style={{ color: 'inherit', whiteSpace: 'nowrap' }}>608-317-2961</a>.
                </p>
              )}
              <El tag="button" type="submit" disabled={formStatus === 'sending'} aria-busy={formStatus === 'sending'} s={'font:inherit;border:none;background:#E99025;color:#29262B;padding:18px 28px;border-radius:999px;font-weight:800;font-size:17px' + (formStatus === 'sending' ? ';opacity:0.7' : '')} hover={formStatus === 'sending' ? undefined : 'background:#29262B;color:#FFFFFF'}>{formStatus === 'sending' ? 'Sending…' : 'Send request'}</El>
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
        <img src="/assets/logo-mark.png" alt="" aria-hidden="true" loading="lazy" decoding="async" style={{ position: 'absolute', right: '-4%', bottom: '-30%', width: '30%', maxWidth: 380, filter: 'invert(1)', mixBlendMode: 'screen', opacity: 0.06, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '56px clamp(20px,4vw,48px) 28px', display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="footer-grid" style={{ display: 'grid', gap: 'clamp(32px,4vw,56px)', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 320 }}>
              <img src="/assets/logo-full-white.png" alt="Doggie Zen & Den" loading="lazy" decoding="async" style={{ height: 97, width: 184, display: 'block', objectFit: 'contain', objectPosition: 'left center' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span style={{ fontFamily: "'Archivo',sans-serif", fontVariationSettings: "'wdth' 118", fontWeight: 850, fontSize: 18 }}>Doggie Zen & Den</span>
                <span style={{ fontSize: 14, lineHeight: 1.45, color: '#E9E5DF' }}>Professional Dog Grooming & Boarding in Holmen,{'\u00A0'}WI</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600 }}>
                <span>Follow us on:</span>
                <a href="https://www.facebook.com/doggiezenandden" target="_blank" rel="noopener" aria-label="Facebook" style={{ color: '#E99025', display: 'inline-flex' }}><FacebookIcon /></a>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifySelf: 'center' }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#E99025' }}>QUICK LINKS</div>
              <nav aria-label="Quick links" style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 16, fontWeight: 600 }}>
                <a href="#about" style={{ color: '#FFFFFF' }}>About Us</a>
                <a href="#services" style={{ color: '#FFFFFF' }}>Our Services</a>
                <a href="#why" style={{ color: '#FFFFFF' }}>Why Choose Us</a>
                <a href="#gallery" style={{ color: '#FFFFFF' }}>Gallery</a>
                <a href="#reviews" style={{ color: '#FFFFFF' }}>Testimonials</a>
                <a href="#faq" style={{ color: '#FFFFFF' }}>FAQs</a>
                <a href="#contact" style={{ color: '#FFFFFF' }}>Contact Us</a>
              </nav>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, justifySelf: 'end' }}>
              <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.12em', color: '#E99025' }}>CONTACT</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 16, fontWeight: 600, lineHeight: 1.45 }}>
                <a href="tel:6083172961" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: 10 }}><PhoneIcon size={18} /><span>608-317-2961</span></a>
                <a href={MAPS_URL} target="_blank" rel="noopener" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'flex-start', gap: 10, fontWeight: 600 }}>
                  <span style={{ marginTop: 2 }}><MapPinIcon size={18} /></span>
                  <span>1805 Granary St.<br />Unit 10<br />Holmen, WI 54636</span>
                </a>
                <a href="mailto:zenandden@gmail.com" style={{ color: '#FFFFFF', display: 'inline-flex', alignItems: 'center', gap: 10 }}><MailIcon size={18} /><span>zenandden@gmail.com</span></a>
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
            <img src={SHOTS[shot]} alt={`Dog groomed at Doggie Zen & Den, Holmen WI (photo ${shot + 1} of ${SHOTS.length})`} style={{ display: 'block', maxWidth: 'min(960px,calc(100vw - 180px))', maxHeight: '82vh', width: 'auto', height: 'auto', borderRadius: 16, objectFit: 'contain', background: '#111' }} />
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot(-1); }} aria-label="Close" s="position:absolute;top:-8px;right:-58px;width:42px;height:42px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:24px;line-height:1;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">×</El>
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot((s) => (s - 1 + SHOTS.length) % SHOTS.length); }} aria-label="Previous photo" s="position:absolute;left:-62px;top:50%;transform:translateY(-50%);width:46px;height:46px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:28px;line-height:1;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">‹</El>
            <El tag="button" onClick={(e) => { e.stopPropagation(); setShot((s) => (s + 1) % SHOTS.length); }} aria-label="Next photo" s="position:absolute;right:-62px;top:50%;transform:translateY(-50%);width:46px;height:46px;border:0;border-radius:50%;background:#29262B;color:#FFFFFF;font-size:28px;line-height:1;display:flex;align-items:center;justify-content:center" hover="background:#E99025;color:#29262B">›</El>
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
