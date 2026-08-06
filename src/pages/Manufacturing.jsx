import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Flame,
  FlaskConical,
  GraduationCap,
  Handshake,
  HardHat,
  Mountain,
  Package,
  Phone,
  Plane,
  Radar,
  Send,
  Shield,
  ShieldCheck,
  Siren,
  Sprout,
  Target,
  TreePine,
  Users,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const focusAreas = [
  'Educational UAV Systems',
  'Industrial Inspection Drones',
  'Survey & Mapping Platforms',
  'Agricultural Drones',
  'Heavy Lift UAV Systems',
  'Research & Development',
  'Custom Drone Solutions',
];

const products = [
  {
    id: 'ddw-cutti',
    name: 'DDW CUTTI™',
    tagline: 'Nano Educational Drone',
    quote: 'The Perfect First Drone for Future Innovators.',
    image: '/assets/services/workshop-build-your-own-drone.jpeg',
    description:
      'Designed especially for school students, beginners, STEM education, and drone enthusiasts, DDW CUTTI™ introduces young learners to the exciting world of drone technology in a safe and engaging way.',
    listALabel: 'Applications',
    listA: ['STEM Education', 'Robotics Workshops', 'Coding & Programming', 'Indoor Drone Flying', 'Science Exhibitions', 'Drone Competitions', 'Kids Learning Platform'],
    listBLabel: 'Highlights',
    listB: ['Lightweight Nano Drone', 'Beginner Friendly', 'Safe Indoor Flying', 'Durable Design', 'Easy to Operate', 'Rechargeable Battery', 'Educational Platform', 'Perfect for Schools'],
  },
  {
    id: 'aideen',
    name: 'AIDEEN™',
    tagline: 'Intelligent Micro Drone',
    quote: 'Compact Size. Professional Performance.',
    image: '/assets/services/videography.jpeg',
    description:
      'AIDEEN™ is a compact micro drone designed for professional aerial photography, surveillance, emergency response, and rapid deployment missions. Its lightweight design and stable flight capabilities make it suitable for various commercial and public safety applications.',
    listALabel: 'Applications',
    listA: ['Aerial Photography', 'Videography', 'Disaster Management', 'Emergency Response', 'Event Coverage', 'Search Operations', 'Infrastructure Monitoring'],
    listBLabel: 'Highlights',
    listB: ['High Stability Flight', 'HD Camera Integration', 'Compact & Portable', 'Intelligent Flight Modes', 'Long Flight Endurance', 'Easy Deployment', 'Professional Imaging'],
  },
  {
    id: 'argus',
    name: 'ARGUS™',
    tagline: 'Survey & Inspection Drone',
    quote: 'Precision Above Everything.',
    image: '/assets/drone_precision.png',
    description:
      'ARGUS™ is a professional UAV platform built for surveying, mapping, industrial inspections, thermal imaging, and infrastructure monitoring. With its tethered flight capability, ARGUS™ can remain airborne for extended missions of up to 24 hours, making it ideal for continuous surveillance and monitoring.',
    listALabel: 'Applications',
    listA: ['Land Survey', 'GIS Mapping', 'Thermal Inspection', 'Infrastructure Inspection', 'Powerline Monitoring', 'Mining Survey', 'Smart City Monitoring', 'Border Surveillance'],
    listBLabel: 'Highlights',
    listB: ['Tethered Flight (Up to 24 Hours)', 'High-Precision Mapping', 'RTK Compatible', 'Thermal Camera Support', 'LiDAR Ready', 'AI-Based Mission Planning', 'Industrial Grade Design', 'Weather Resistant'],
  },
  {
    id: 'engineering-drone-kit',
    name: 'Engineering Drone Assembly Kit',
    tagline: 'Learn by Building',
    quote: null,
    image: '/assets/services/fpv-drone-building.jpeg',
    description:
      'The Engineering Drone Assembly Kit is specially developed for engineering colleges, universities, training institutes, and drone enthusiasts. Students gain practical experience by assembling a complete drone from individual components while understanding each subsystem.',
    listALabel: 'Kit Includes',
    listA: ['BLDC Motors', 'Electronic Speed Controllers (ESC)', 'Flight Controller', 'GPS Module', 'Radio Controller & Receiver', 'Drone Frame', 'Landing Gear', 'Propellers', 'Battery', 'Power Module', 'Wiring Accessories', 'Assembly Manual'],
    listBLabel: 'Highlights',
    listB: ['Hands-on Learning', 'Industry Standard Components', 'Step-by-Step Assembly', 'Drone Programming Support', 'Flight Testing', 'Maintenance Training', 'Perfect for Practical Labs'],
    listBSecondary: ['Engineering Colleges', 'Polytechnic Institutions', 'Drone Workshops', 'Skill Development Centres', 'UAV Research Labs', 'Final Year Projects', 'Drone Clubs'],
  },
  {
    id: 'delphia',
    name: 'DELPHIA™',
    tagline: 'Agriculture Drone',
    quote: 'Empowering Smart Farming.',
    image: '/assets/services/fertilizer-spraying.jpeg',
    description:
      'DELPHIA™ is an intelligent agricultural drone designed to improve farming efficiency through precision spraying and automated seed dispensing. Built for modern agriculture, it helps farmers reduce manual effort while increasing productivity and accuracy.',
    listALabel: 'Applications',
    listA: ['Fertilizer Spraying', 'Pesticide Spraying', 'Seed Dispensing', 'Crop Health Monitoring', 'Precision Agriculture', 'Plantation Management'],
    listBLabel: 'Highlights',
    listB: ['High Capacity Spray Tank', 'Precision Spraying', 'Uniform Coverage', 'GPS Flight Planning', 'Autonomous Mission Support', 'Easy Maintenance', 'High Efficiency', 'Farmer Friendly Design'],
  },
  {
    id: 'godaavan',
    name: 'GODAAVAN™',
    tagline: 'Heavy Lift Logistics Drone',
    quote: "Delivering Where Others Can't.",
    image: '/assets/home_hero.png',
    description:
      'GODAAVAN™ is a heavy-lift UAV designed for logistics, emergency response, and disaster relief operations. Capable of transporting essential supplies to difficult and inaccessible locations, it plays a vital role in humanitarian missions and industrial logistics.',
    listALabel: 'Applications',
    listA: ['Medical Supply Delivery', 'Disaster Relief', 'Emergency Logistics', 'Cargo Transportation', 'Defence Applications', 'Remote Area Delivery', 'Humanitarian Missions'],
    listBLabel: 'Highlights',
    listB: ['Heavy Payload Capacity', 'Long Flight Range', 'Autonomous Navigation', 'Emergency Deployment', 'Rugged Industrial Design', 'Reliable Flight Performance', 'Mission Planning Software', 'High Safety Standards'],
  },
];

const whyChooseUs = [
  'Designed & Manufactured in India',
  'Advanced R&D Team',
  'Industry-Tested Designs',
  'High-Quality Components',
  'Customizable Solutions',
  'Reliable After-Sales Support',
  'Training & Technical Assistance',
  'Spare Parts Availability',
  'Scalable Platforms',
  'Built for Indian Operating Conditions',
];

const industries = [
  { icon: Sprout, label: 'Agriculture' },
  { icon: GraduationCap, label: 'Education' },
  { icon: Shield, label: 'Defence' },
  { icon: Target, label: 'Surveying' },
  { icon: HardHat, label: 'Construction' },
  { icon: Mountain, label: 'Mining' },
  { icon: Flame, label: 'Oil & Gas' },
  { icon: Zap, label: 'Power Transmission' },
  { icon: Building2, label: 'Smart Cities' },
  { icon: Siren, label: 'Disaster Management' },
  { icon: ShieldCheck, label: 'Public Safety' },
  { icon: Package, label: 'Logistics' },
  { icon: TreePine, label: 'Environmental Monitoring' },
  { icon: Radar, label: 'Infrastructure Inspection' },
];

const ENROLL_URL = 'https://forms.gle/9SdLE62GTYY1o9Av7';

export default function Manufacturing() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.mfg-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.mfg-section-reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
            once: true,
          },
          y: 32,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden bg-slate-50 pt-[104px]">
      {/* Hero */}
      <section className="relative flex min-h-[600px] items-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <img
          src="/assets/manufacturing_hero.png"
          alt="De Drone World manufacturing"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/40" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="mfg-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold tracking-[0.2em] text-blue-200">
            <Cpu size={16} /> Indian Drone Manufacturer
          </span>
          <h1 className="mfg-hero-reveal mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Innovating the Future of Indian Drone Technology
          </h1>
          <p className="mfg-hero-reveal mt-4 text-lg font-bold text-primary">
            Designed. Engineered. Manufactured by De Drone World Solutions Pvt. Ltd.
          </p>
          <p className="mfg-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            From educational drone kits to advanced industrial UAVs, we develop intelligent drone solutions for education,
            agriculture, surveying, aerial imaging, logistics, and public safety.
          </p>

          <div className="mfg-hero-reveal mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Our Manufacturing Division Focuses On</p>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mfg-hero-reveal mt-8 flex flex-wrap gap-3">
            <a href="#products" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary/90">
              Explore Products <ArrowRight size={19} />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
              <Send size={18} /> Request a Demo
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
              <Phone size={18} /> Contact Sales
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mfg-section-reveal px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">About Our Manufacturing Division</p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Building India's Next Generation of Drone Technology</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-slate-600">
            At De Drone World Solutions Pvt. Ltd., we are committed to designing and manufacturing innovative drone solutions that
            meet the growing demands of education, agriculture, surveying, logistics, disaster management, and industrial
            inspection.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Every drone is developed with a focus on reliability, safety, performance, and real-world usability. Our in-house
            research and development team continuously works on creating intelligent UAV platforms that support India's vision of
            technological advancement and self-reliance.
          </p>
        </div>
      </section>

      {/* Product Portfolio */}
      <section id="products" className="mfg-section-reveal scroll-mt-24 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Our Product Portfolio</p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">The DDW Aerospace Series</h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <article key={product.id} id={product.id} className="group flex scroll-mt-24 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">{product.tagline}</p>
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  {product.quote && <p className="mb-3 font-bold italic text-primary">&ldquo;{product.quote}&rdquo;</p>}
                  <p className="text-sm leading-relaxed text-slate-600">{product.description}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{product.listALabel}</p>
                      <ul className="space-y-2">
                        {product.listA.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">{product.listBLabel}</p>
                      <ul className="space-y-2">
                        {product.listB.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {product.listBSecondary && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary">Ideal For</p>
                      <div className="flex flex-wrap gap-2">
                        {product.listBSecondary.map((item) => (
                          <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-navy shadow-sm">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Drones */}
      <section className="mfg-section-reveal bg-navy px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Why Choose Our Drones?</p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Engineered for Real-World Reliability</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <CheckCircle2 size={18} className="shrink-0 text-primary" />
                <span className="text-sm font-bold text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="mfg-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Industries We Serve</p>
          <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">Drone Solutions Across Sectors</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {industries.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:border-primary/40 hover:shadow-md">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-bold text-navy">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D */}
      <section className="mfg-section-reveal px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary p-8 text-white shadow-xl md:p-12">
          <FlaskConical className="mb-4 text-white/80" size={30} />
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">Research &amp; Development</p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Innovation Drives Everything We Create</h2>
          <p className="mt-5 max-w-4xl leading-relaxed text-white/90">
            Our dedicated Research &amp; Development division continuously develops next-generation UAV technologies, autonomous
            flight systems, intelligent payloads, AI-powered mission planning, and advanced aerial solutions to meet evolving
            industry needs.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mfg-section-reveal px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-950 px-8 py-16 text-center text-white shadow-2xl md:px-16">
          <Plane className="mx-auto mb-4 text-primary" size={32} />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to Experience the Future of Drone Technology?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Whether you're an educational institution, government organization, enterprise, or industry partner, our
            manufacturing division delivers innovative drone solutions tailored to your needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary/90">
              Request a Product Demo <ArrowRight size={19} />
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 font-bold text-white transition hover:bg-white/10">
              <Handshake size={18} /> Talk to Our Experts
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 font-bold text-white transition hover:bg-white/10">
              <Users size={18} /> Become a Distribution Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
