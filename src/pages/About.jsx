import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  CheckCircle,
  ClipboardCheck,
  Cpu,
  Map,
  MapPin,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: 'Satish Kumar A',
    role: 'CEO & Founder',
    tag: 'Retd. Wing Commander',
    image: '/assets/team/satish-kumar-a.jpg',
    photoPosition: 'center 32%',
    bio: 'Satish Kumar A brings defence aviation discipline, operational decision-making, and safety-first leadership into De Drone World’s training and UAV solutions ecosystem.',
  },
  {
    name: 'Abishek T',
    role: 'Operations Manager',
    image: '/assets/team/abishek-t.jpg',
    photoPosition: 'center 30%',
    bio: 'Abishek T coordinates the operational flow of De Drone World, keeping training batches, field teams, documentation, and delivery schedules aligned.',
  },
  {
    name: 'Vishali P',
    role: 'Manufacturing Head',
    image: '/assets/team/vishali-p.jpg',
    photoPosition: 'center 36%',
    bio: 'Vishali P leads the manufacturing function, focusing on drone assembly quality, component readiness, and reliable support for training and custom UAV builds.',
  },
  {
    name: 'Vinoth R',
    role: 'Remote Pilot Instructor',
    image: '/assets/team/vinoth-r.jpg',
    photoPosition: 'center 28%',
    bio: 'Vinoth R trains learners through simulator practice, live flight discipline, and practical UAV handling so students gain confidence before real-world operations.',
  },
  {
    name: 'Jayaram R',
    role: 'Admin',
    image: '/assets/team/jayaram-r.jpg',
    photoPosition: 'center 32%',
    bio: 'Jayaram R supports the administrative backbone of De Drone World, handling student coordination, records, communication, and training process support.',
  },
];

const pillars = [
  { icon: <ShieldCheck size={22} />, label: 'Aviation-led safety culture' },
  { icon: <BadgeCheck size={22} />, label: 'DGCA-approved training focus' },
  { icon: <Wrench size={22} />, label: 'Manufacturing and technical depth' },
  { icon: <Users size={22} />, label: 'Student and partner coordination' },
];

const infrastructure = [
  { icon: <Cpu size={22} />, label: 'Simulation Labs' },
  { icon: <CheckCircle size={22} />, label: 'DGCA-Certified Instructors' },
  { icon: <Target size={22} />, label: 'Live Drone Flying Zone' },
  { icon: <Bolt size={22} />, label: 'Industry-Grade Equipment' },
];

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2);

const TeamPhoto = ({ member }) => {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/20 via-white to-navy/20" aria-label={member.name}>
        <span className="text-5xl font-bold text-navy">{getInitials(member.name)}</span>
      </div>
    );
  }

  return (
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      decoding="async"
      onError={() => setImageFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      style={{ objectPosition: member.photoPosition }}
    />
  );
};

const SectionBanner = ({ eyebrow, icon: Icon, title, subtitle, color = '#1E9FD4' }) => (
  <div className="mb-10 flex min-h-[150px] items-center justify-center px-6 py-8 text-center" style={{ backgroundColor: color }}>
    <div className="mx-auto max-w-4xl">
      <div className="mb-3 flex items-center justify-center gap-3 text-white">
        <span className="h-px w-16 bg-white/80" />
        <span className="font-bold uppercase tracking-[0.14em]">{eyebrow}</span>
        <span className="h-px w-16 bg-white/80" />
      </div>
      <Icon size={30} className="mx-auto mb-3 text-slate-700/80" />
      <h2 className="text-white">{title}</h2>
      {subtitle && <p className="mx-auto mt-3 max-w-2xl text-white/85">{subtitle}</p>}
    </div>
  </div>
);

const About = () => {
  const teamSectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = teamSectionRef.current;
      const stage = section?.querySelector('.team-3d-stage');
      const cards = gsap.utils.toArray('.team-3d-card');
      const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!section || !stage || cards.length === 0) {
        return;
      }

      if (isReducedMotion) {
        gsap.set(cards, { autoAlpha: 1, clearProps: 'transform' });
        return;
      }

      gsap.set(stage, {
        perspective: 1400,
        transformStyle: 'preserve-3d',
      });

      cards.forEach((card, index) => {
        gsap.fromTo(card, {
          autoAlpha: 0,
          x: index % 2 === 0 ? -56 : 56,
          y: 34,
          z: -90,
          rotationX: 3.5,
          rotationY: index % 2 === 0 ? 4 : -4,
          scale: 0.97,
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
        }, {
          autoAlpha: 1,
          x: 0,
          y: 0,
          z: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            end: 'bottom 28%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, teamSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white pt-[104px]">
      <section className="relative overflow-hidden bg-[#F4FAFD] px-6 py-20">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 overflow-hidden lg:block">
          <img src="/assets/home_hero.png" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F4FAFD] via-[#F4FAFD]/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.16em] text-primary">About De Drone World</p>
            <h1 className="mt-4 leading-tight text-navy">Aviation Discipline. Drone Skills. Industry Execution.</h1>
            <p className="mt-5 max-w-2xl text-slate-700">
              De Drone World is built around a simple operating belief: drone training and UAV services need disciplined aviation thinking, practical field execution, and a team that can deliver consistently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/training" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary/90">
                Apply for DGCA Training <ArrowRight size={19} />
              </Link>
              <Link to="/contact" className="rounded-xl border border-navy/20 bg-white px-6 py-3.5 font-bold text-navy shadow-sm transition hover:border-primary hover:text-primary">
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-0">
        <SectionBanner eyebrow="Vision & Mission" icon={ClipboardCheck} title="Think Beyond Limits" color="#8B83E6" />
        <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 md:grid-cols-2">
          <article className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl transition hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/drone_precision.png" alt="Vision" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white drop-shadow-lg">Vision</h3>
              </div>
            </div>
            <p className="p-8 leading-relaxed text-slate-600">
              To advance the drone field through trusted training, practical innovation, and reliable aerial solutions that help industries work smarter, safer, and faster.
            </p>
          </article>
          <article className="overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl transition hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img src="/assets/services_hero.png" alt="Mission" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              <div className="absolute inset-0 bg-slate-950/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white drop-shadow-lg">Mission</h3>
              </div>
            </div>
            <p className="p-8 leading-relaxed text-slate-600">
              To be the most collaborative and trusted team in the drone industry, providing leading services and innovations to meet the needs of every customer.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-6 pt-14 pb-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[2rem] bg-primary/10" />
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
              <video autoPlay loop muted playsInline className="aspect-square h-full w-full object-cover">
                <source src="/assets/drone_logo_video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
          </div>
          <div>
            <div className="mb-8 rounded-r-2xl border-l-4 border-primary bg-slate-50 px-6 py-5">
              <p className="font-bold uppercase tracking-[0.12em] text-primary">One Integrated Drone Ecosystem</p>
              <h2 className="mt-2 text-navy">Training. Operations. Industry Partnerships.</h2>
              <p className="mt-3 text-slate-600">
                We combine aviation discipline, DGCA-approved pilot development, field-ready UAV services, and institutional collaboration under one organization.
              </p>
            </div>
            <p className="mb-6 leading-relaxed text-slate-600">
              De Drone World is an entrepreneurial venture with a vision to become a global company, led by aviation experts from the Indian armed forces and enthusiastic young technocrats with strong passion for drone technology.
            </p>
            <p className="leading-relaxed text-slate-600">
              We aim to usher in a new era in the development, adoption, and practical use of drones, creating meaningful change for industries, institutions, students, and field operations.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={teamSectionRef} className="team-3d-section overflow-visible bg-[#F4FAFD]">
        <div className="team-3d-pin py-0">
          <div className="team-3d-heading bg-[#39C8BE] px-6 py-10 text-center shadow-sm">
            <div className="mx-auto max-w-4xl">
              <div className="mb-3 flex items-center justify-center gap-3 text-white">
                <span className="h-px w-16 bg-white/80" />
                <span className="font-bold uppercase tracking-[0.14em]">Team De Drone World</span>
                <span className="h-px w-16 bg-white/80" />
              </div>
              <Users size={30} className="mx-auto mb-3 text-slate-700/80" />
              <h2 className="text-white">Leadership, Operations, Manufacturing and Pilot Training Under One Roof</h2>
              <p className="mx-auto mt-3 max-w-2xl text-white/85">
                A practical team structure built for aviation discipline, reliable training delivery, drone manufacturing support, and smooth student coordination.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-16">
            <div className="team-3d-stage flex flex-col gap-16">
              {teamMembers.map((member, index) => {
                const isReverse = index % 2 === 1;

                return (
                  <div key={member.name} className="team-sticky-row min-h-[520px]">
                    <article className="team-3d-card group sticky top-24 block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(26,42,58,0.08)] transition-all duration-500 will-change-transform hover:border-primary/50 hover:shadow-[0_30px_75px_rgba(30,159,212,0.22)]">
                      <div className={`grid min-h-[380px] lg:h-[400px] lg:grid-cols-[0.92fr_1.08fr] ${isReverse ? 'lg:[&>*:first-child]:order-2 lg:grid-cols-[1.08fr_0.92fr]' : ''}`}>
                        <div className="relative min-h-[320px] overflow-hidden bg-slate-200 lg:h-full">
                          <TeamPhoto member={member} />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-35" />
                          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                          {member.tag && (
                            <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 font-bold uppercase text-primary shadow-sm">{member.tag}</span>
                          )}
                          <span className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-white/15 px-4 py-2 font-bold text-white backdrop-blur-md">
                            0{index + 1}
                          </span>
                        </div>

                        <div className="flex min-h-[320px] flex-col justify-center p-7 md:p-10 lg:h-full lg:min-h-0 lg:p-12">
                          <p className="font-bold uppercase tracking-[0.14em] text-primary">Team De Drone World</p>
                          <h3 className="mt-3 tracking-wide">{member.name}</h3>
                          <p className="mt-2 flex items-center gap-2 font-bold text-primary">
                            <BadgeCheck size={18} className="shrink-0" /> {member.role}
                          </p>
                          <p className="mt-6 max-w-2xl text-slate-600">{member.bio}</p>
                          <div className="mt-8 h-1 w-20 rounded-full bg-primary" />
                        </div>
                      </div>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FCFE] px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="font-bold uppercase tracking-[0.14em] text-primary">Infrastructure</p>
            <h2 className="mt-2">Built for Practical Drone Learning and Field Readiness</h2>
            <p className="mt-5 text-slate-600">
              From advanced drone simulation labs and ground theory classrooms to live flying exposure, our facilities are designed to produce industry-ready, certified drone pilots with real-world skills.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infrastructure.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="text-primary">{item.icon}</span>
                  <span className="font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
            <video autoPlay loop muted playsInline className="aspect-video h-full w-full object-cover">
              <source src="/assets/infra.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-xl">
          <div className="grid md:grid-cols-2">
            <div className="relative h-72 overflow-hidden md:h-96">
              <img src="/assets/hicet%20top%20view.jpeg" alt="Idea Lab at HICET Campus, Malumichampatti, Coimbatore" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-8 flex items-center gap-3 text-white">
                <MapPin size={28} className="text-primary" />
                <p className="font-bold tracking-wide text-white">Coimbatore</p>
              </div>
            </div>
            <div className="p-8 md:p-10">
              <p className="font-bold uppercase tracking-[0.14em] text-primary">Our Location</p>
              <h2 className="mt-2">Train With Confidence at HICET Campus</h2>
              <p className="mt-4 text-slate-600">Idea Lab, First Floor, HICET Campus, Malumichampatti, Coimbatore.</p>
              <a
                href="https://maps.app.goo.gl/N2GkBCJcN43bh3hM6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary/90"
              >
                Navigate in Maps <Map size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </div>
  );
};

export default About;
