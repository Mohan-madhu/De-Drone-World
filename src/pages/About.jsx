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
  Quote,
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const SocialIcon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    {children}
  </svg>
);

const teamSocialLinks = [
  {
    label: 'Facebook',
    href: 'https://share.google/Bvu6INCnOeOjR5R60',
    icon: (
      <SocialIcon>
        <path d="M22.7 12A10.7 10.7 0 1 0 10.3 22.6v-7.5H7.6V12h2.7V9.7c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3.1l-.5 3.1h-2.6v7.5A10.7 10.7 0 0 0 22.7 12Z" />
      </SocialIcon>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dedroneworld.in?igsh=MWQ4aWM2Ymd0bWczMQ==',
    icon: (
      <SocialIcon>
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm5.6-3.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </SocialIcon>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/de-drone-world-solutions-pvt-ltd/',
    icon: (
      <SocialIcon>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.8h4v10.7H3V9.8Zm6.2 0H13v1.5h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6v5.2h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.7h-4V9.8Z" />
      </SocialIcon>
    ),
  },
];

const TeamSocialRow = ({ dark }) => (
  <div className="flex items-center justify-center gap-2">
    {teamSocialLinks.map((item) => (
      <a
        key={item.label}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          dark ? 'bg-white/10 text-white hover:bg-primary hover:text-white' : 'bg-slate-100 text-slate-500 hover:bg-primary hover:text-white'
        }`}
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const reviews = [
  {
    name: "George Kamini",
    meta: "3 months ago",
    text: "Hi everyone go ahead and got drone certification from user friendly De drone world one the best training center in Tamilnadu. User friendly.",
  },
  {
    name: "Rahul Raj",
    meta: "10 months ago",
    text: "DE Drone World is an outstanding destination for drone enthusiasts, whether you're a beginner or a seasoned professional.",
  },
  {
    name: "Monish Dharan",
    meta: "4 months ago",
    text: "I had an excellent experience with this company. Their team is highly professional, responsive, and committed to delivering quality results.",
  },
  {
    name: "Swetha",
    meta: "4 months ago",
    text: "It is very useful to learn about drone technology. DE Drone World teaches with clear explanation and cleared all doubts from survey class.",
  },
  {
    name: "Dharini Jayaraj",
    meta: "4 months ago",
    text: "I attended a workshop on drone survey in De Drone World Solutions. It is a good place to gain knowledge about drones.",
  },
  {
    name: "Bhavavijayan",
    meta: "4 months ago",
    text: "I really enjoyed the drone survey workshop and all the information presented was relevant and important.",
  },
  {
    name: "Hari Krish",
    meta: "9 months ago",
    text: "I had an excellent experience in DE Drone World as a student of HICET. Their seminar was well explained and practical oriented.",
  },
  {
    name: "Vandhinika Senthilkumar",
    meta: "10 months ago",
    text: "I had a great learning experience interacting with Dedrone World Pvt Ltd as a student. The team was knowledgeable and the drone technology was impressive.",
  },
  {
    name: "Yamini Janardhanan",
    meta: "10 months ago",
    text: "Flying a drone for the first time was a new experience, and I learned a lot about how drones work from the one-day workshop.",
  },
  {
    name: "Karthikeyan K",
    meta: "5 months ago",
    text: "DE Drone World cleared my basic doubts about drones, and I enjoyed using their simulator.",
  },
  {
    name: "Apoorna Devaraj",
    meta: "5 months ago",
    text: "It was an excellent class to attend and I learned a lot in this class.",
  },
  {
    name: "Saravana Velu",
    meta: "10 months ago",
    text: "Best place to learn about drones. Great environment.",
  },
];

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

const [founder, ...restOfTeam] = teamMembers;

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
  return (
    <div className="min-h-screen bg-white pt-[104px]">
      <section className="relative overflow-hidden bg-[#F4FAFD] px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left Text */}
          <div className="relative z-10 max-w-3xl">
            <p className="font-bold uppercase tracking-[0.16em] text-primary">About De Drone World</p>
            <h1 className="mt-4 leading-tight text-navy">Aviation Discipline. Drone Skills. Industry Execution.</h1>
            <p className="mt-5 text-lg font-medium text-slate-700">
              De Drone World is built around a simple operating belief: drone training and UAV services need disciplined aviation thinking, practical field execution, and a team that can deliver consistently.
            </p>
            
            <div className="mt-8 rounded-r-2xl border-l-4 border-primary bg-white px-6 py-5 shadow-sm">
              <p className="font-bold uppercase tracking-[0.12em] text-primary">One Integrated Drone Ecosystem</p>
              <h2 className="mt-2 text-xl font-bold text-navy">Training. Operations. Industry Partnerships.</h2>
              <p className="mt-3 text-slate-600">
                We combine aviation discipline, DGCA-approved pilot development, field-ready UAV services, and institutional collaboration under one organization.
              </p>
            </div>
            
            <p className="mt-6 leading-relaxed text-slate-600">
              De Drone World is an entrepreneurial venture with a vision to become a global company, led by aviation experts from the Indian armed forces and enthusiastic young technocrats with strong passion for drone technology. We aim to usher in a new era in the development, adoption, and practical use of drones, creating meaningful change for industries, institutions, students, and field operations.
            </p>
            
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {pillars.map((item) => (
                <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-primary/50">
                  <span className="text-primary">{item.icon}</span>
                  <span className="text-sm font-bold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/training" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                Apply for DGCA Training <ArrowRight size={19} />
              </Link>
              <Link to="/contact" className="rounded-xl border border-navy/20 bg-white px-6 py-3.5 font-bold text-navy shadow-sm transition hover:border-primary hover:text-primary">
                Partner With Us
              </Link>
            </div>
          </div>
          
          {/* Right Video */}
          <div className="relative lg:ml-auto w-full max-w-lg mt-8 lg:mt-0">
             <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[2rem] bg-primary/10" />
             <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl">
               <video autoPlay loop muted playsInline className="aspect-square h-full w-full object-cover">
                 <source src="/assets/drone_logo_video.mp4" type="video/mp4" />
               </video>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
             </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <SectionBanner eyebrow="Vision & Mission" icon={ClipboardCheck} title="Think Beyond Limits" color="#8B83E6" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[2.5rem] bg-transparent transition-all duration-500">
            <div className="relative h-[22rem] w-full overflow-hidden rounded-[2.5rem] shadow-lg">
              <img 
                src="/assets/drone_precision.png" 
                alt="Vision" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-4xl font-bold tracking-wider text-white drop-shadow-2xl md:text-5xl">Vision</h3>
              </div>
            </div>
            <div className="relative z-10 -mt-20 mx-8 mb-4 rounded-3xl bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-center text-base leading-relaxed text-slate-600 font-medium">
                To advance the drone field through trusted training, practical innovation, and reliable aerial solutions that help industries work smarter, safer, and faster.
              </p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-[2.5rem] bg-transparent transition-all duration-500">
            <div className="relative h-[22rem] w-full overflow-hidden rounded-[2.5rem] shadow-lg">
              <img 
                src="/assets/services_hero.png" 
                alt="Mission" 
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-85" />
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-4">
                <h3 className="text-4xl font-bold tracking-wider text-white drop-shadow-2xl md:text-5xl">Mission</h3>
              </div>
            </div>
            <div className="relative z-10 -mt-20 mx-8 mb-4 rounded-3xl bg-white p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-center text-base leading-relaxed text-slate-600 font-medium">
                To be the most collaborative and trusted team in the drone industry, providing leading services and innovations to meet the needs of every customer.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 pt-8 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="font-bold uppercase tracking-[0.16em] text-primary">Team De Drone World</span>
            <h2 className="mt-4 text-3xl font-bold text-navy lg:text-4xl">Leadership, Operations & Training</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A practical team structure built for aviation discipline, reliable training delivery, drone manufacturing support, and smooth student coordination.
            </p>
          </div>

          {/* Founder — hexagon-badge card, larger scale */}
          <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="grid sm:grid-cols-[280px_1fr] sm:items-center">
              <div className="relative flex items-center justify-center bg-slate-100 px-8 py-10 sm:h-full">
                <span className="pointer-events-none absolute h-44 w-44 rounded-full border-2 border-dashed border-primary/25 sm:h-52 sm:w-52" />
                <div className="hexagon-frame relative h-36 overflow-hidden shadow-lg sm:h-44">
                  <TeamPhoto member={founder} />
                </div>
              </div>

              <div className="p-8 text-center sm:p-10 sm:text-left">
                {founder.tag && (
                  <span className="mb-2 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                    {founder.tag}
                  </span>
                )}
                <h3 className="text-2xl font-bold uppercase tracking-wide text-navy sm:text-3xl">{founder.name}</h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-primary">{founder.role}</p>
                <p className="mt-4 leading-relaxed text-slate-600">{founder.bio}</p>
                <div className="mt-6 sm:flex sm:justify-start">
                  <TeamSocialRow />
                </div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-primary" />
          </article>

          {/* Rest of the team — one row, 4 across, hexagon-badge cards */}
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-4">
            {restOfTeam.map((member, index) => {
              const accentColor = ['#1E9FD4', '#70D26B', '#F4CE45', '#8B83E6'][index % 4];

              return (
                <div
                  key={member.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative flex items-center justify-center bg-slate-100 py-8">
                    <span className="pointer-events-none absolute h-24 w-24 rounded-full border-2 border-dashed border-slate-300 sm:h-28 sm:w-28" />
                    <div className="hexagon-frame relative h-20 overflow-hidden shadow-md sm:h-24">
                      <TeamPhoto member={member} />
                    </div>
                  </div>

                  <div className="flex flex-col items-center px-4 py-5 text-center">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-navy">{member.name}</h3>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em]" style={{ color: accentColor }}>{member.role}</p>
                  </div>

                  <div className="h-1.5 w-full" style={{ backgroundColor: accentColor }} />
                </div>
              );
            })}
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

      {/* SECTION C — Student Testimonials */}
      <section className="bg-[#F0FAFF] py-0 overflow-hidden">
        <SectionBanner
          eyebrow="Google Reviews"
          icon={Quote}
          title="Voices from learners..."
          color="#58BFE0"
        />

        <div className="mx-auto max-w-7xl px-6 pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review, index) => (
              <article key={`${review.name}-${index}`} className="flex flex-col rounded-[2rem] border border-slate-100 bg-white p-8 shadow-[0_4px_20px_rgba(26,42,58,0.04)] transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(30,159,212,0.12)]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-lg font-bold text-white shadow-sm">
                    {getInitials(review.name)}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-navy">{review.name}</h3>
                    <p className="text-sm text-slate-500">{review.meta}</p>
                  </div>
                </div>
                <div className="mb-4 flex gap-1 text-primary text-xl">
                  ★★★★★
                </div>
                <p className="text-sm italic leading-relaxed text-slate-600">"{review.text}"</p>
              </article>
            ))}
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
