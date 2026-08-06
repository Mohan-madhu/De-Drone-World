import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Factory,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';

const inquiryTypes = [
  {
    icon: GraduationCap,
    title: 'Training & Certification',
    description: 'DGCA courses, skill programs, workshops, and internships.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Drone Services',
    description: 'Agriculture, inspection, events, survey, and mapping.',
  },
  {
    icon: Factory,
    title: 'Manufacturing',
    description: 'Drone kits, private-label products, and custom builds.',
  },
];

const inputClass =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-navy outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10';

export default function Contact() {
  const mainRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      { reduceMotion: '(prefers-reduced-motion: reduce)' },
      ({ conditions }) => {
        if (conditions.reduceMotion) return;

        gsap.from('.contact-reveal', {
          y: 24,
          autoAlpha: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        });
      },
      mainRef.current,
    );

    return () => mm.revert();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry: ${data.get('inquiry')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Organisation: ${data.get('organisation') || 'Not provided'}`,
      `Inquiry: ${data.get('inquiry')}`,
      '',
      data.get('message'),
    ].join('\n');

    window.location.href = `mailto:md@thedroneworld.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div ref={mainRef} className="min-h-screen bg-[#F5FAFC] pt-[132px] text-navy">
      <section className="relative overflow-hidden border-b border-primary/15 bg-navy px-6 py-16 text-white">
        <div className="absolute inset-0">
          <img src="/assets/services_hero.png" alt="" className="h-full w-full object-cover object-[60%_35%]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/25" />
        <div className="contact-reveal relative mx-auto max-w-7xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-bold text-primary">
            <ShieldCheck size={18} />
            Talk to a drone specialist
          </div>
          <h1 className="max-w-3xl text-white">Plan Your Next Drone Mission With Us</h1>
          <p className="mt-5 max-w-2xl text-slate-200">
            Tell us whether you need professional training, an aerial service, or a manufacturing partner. Our team will direct your enquiry to the right specialist.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="tel:+916380806450" className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-bold text-white transition hover:bg-primary/90">
              <Phone size={19} /> Call our team
            </a>
            <a href="https://wa.me/917708757581" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
              <MessageCircle size={19} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-14">
        <section className="contact-reveal mb-12">
          <div className="mb-6 max-w-2xl">
            <p className="font-bold uppercase tracking-[0.12em] text-primary">Choose your enquiry</p>
            <h2 className="mt-2">How Can We Help?</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {inquiryTypes.map(({ icon: Icon, title, description }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={23} />
                </span>
                <h3>{title}</h3>
                <p className="mt-3 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.8fr)]">
          <div className="contact-reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_55px_rgba(26,42,58,0.08)] md:p-9">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <p className="font-bold uppercase tracking-[0.12em] text-primary">Project brief</p>
              <h2 className="mt-2">Send Your Enquiry</h2>
              <p className="mt-3 text-slate-600">Provide the essentials and your preferred contact details.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 font-bold text-navy">
                Full name
                <input className={inputClass} name="name" type="text" autoComplete="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 font-bold text-navy">
                Phone number
                <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" required />
              </label>
              <label className="grid gap-2 font-bold text-navy">
                Email address
                <input className={inputClass} name="email" type="email" autoComplete="email" placeholder="name@company.com" required />
              </label>
              <label className="grid gap-2 font-bold text-navy">
                Organisation
                <input className={inputClass} name="organisation" type="text" autoComplete="organization" placeholder="Company or institution" />
              </label>
              <label className="grid gap-2 font-bold text-navy md:col-span-2">
                I need help with
                <select className={inputClass} name="inquiry" defaultValue="Training & Certification">
                  <option>Training & Certification</option>
                  <option>Drone Services</option>
                  <option>Manufacturing & Custom Builds</option>
                  <option>Partnership or Institutional Program</option>
                  <option>General Enquiry</option>
                </select>
              </label>
              <label className="grid gap-2 font-bold text-navy md:col-span-2">
                Tell us about your requirement
                <textarea className={`${inputClass} min-h-36 resize-y`} name="message" placeholder="Course, project location, timeline, drone requirement, or any questions..." required />
              </label>
              <div className="flex flex-col gap-4 pt-2 md:col-span-2 md:flex-row md:items-center md:justify-between">
                <p className="text-slate-500">Submitting opens your email application with the enquiry prepared.</p>
                <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                  <Send size={19} /> Send enquiry
                </button>
              </div>
            </form>
          </div>

          <aside className="contact-reveal space-y-5">
            <div className="rounded-3xl bg-navy p-7 text-white shadow-xl">
              <p className="font-bold uppercase tracking-[0.12em] text-primary">Direct contact</p>
              <h2 className="mt-2 text-white">Speak With Our Team</h2>
              <div className="mt-6 space-y-3">
                <a href="tel:+916380806450" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-base font-bold leading-relaxed text-white transition hover:border-primary/50">
                  <Phone className="shrink-0 text-primary" size={20} />
                  <span className="text-base">+91 6380806450</span>
                </a>
                <a href="tel:+917708757581" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-base font-bold leading-relaxed text-white transition hover:border-primary/50">
                  <Phone className="shrink-0 text-primary" size={20} />
                  <span className="text-base">+91 7708757581</span>
                </a>
                <a href="mailto:md@thedroneworld.in" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-base font-bold leading-relaxed text-white transition hover:border-primary/50">
                  <Mail className="shrink-0 text-primary" size={20} />
                  <span className="break-all text-base">md@thedroneworld.in</span>
                </a>
              </div>
              <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5 text-slate-300">
                <Clock3 className="mt-0.5 shrink-0 text-primary" size={20} />
                <p>Monday–Saturday<br />9:00 AM–6:00 PM IST</p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin size={23} />
              </span>
              <h3>Visit Our Campus</h3>
              <p className="mt-3 text-slate-600">
                Idea Lab, First Floor, HICET Campus, Malumichampatti, Coimbatore.
              </p>
              <a href="https://maps.app.goo.gl/N2GkBCJcN43bh3hM6" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-primary hover:text-navy">
                Open in Google Maps <ArrowUpRight size={18} />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
