import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bot,
  BookOpen,
  Braces,
  BrainCircuit,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  CircuitBoard,
  Cpu,
  FileText,
  FlaskConical,
  GraduationCap,
  Handshake,
  HelpCircle,
  Lightbulb,
  Map,
  MapPin,
  Phone,
  Plane,
  Radar,
  Rocket,
  Send,
  Sparkles,
  Target,
  Users,
  Wrench,
  X,
  Zap,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ENROLL_URL = 'https://forms.gle/9SdLE62GTYY1o9Av7';

const infoGrid = [
  { icon: Handshake, label: 'Industry Partner', value: 'De Drone World Solutions Pvt. Ltd.' },
  { icon: Building2, label: 'University', value: 'PK DAS University' },
  { icon: Award, label: 'Duration', value: '4 Years (8 Semesters)' },
  { icon: GraduationCap, label: 'Degree', value: 'Bachelor of Technology (B.Tech)' },
  { icon: MapPin, label: 'Location', value: 'PK DAS University Campus' },
];

const differentiators = [
  'Industry-driven curriculum',
  'Practical learning from Semester 1',
  'Drone manufacturing exposure',
  'UAV research projects',
  'Flight training',
  'Industrial internships',
  'Live industrial projects',
  'Skill certifications',
  'Placement-focused learning',
  'Startup and innovation support',
];

const ddwSpecialties = [
  'DGCA Approved Drone Pilot Training',
  'Drone Manufacturing',
  'Drone Research & Development',
  'Industrial Drone Solutions',
  'Mapping & Survey',
  'Agriculture Drone Applications',
  'Drone Maintenance & Repair',
  'Aerospace Skill Development',
];

const highlights = [
  { icon: Handshake, label: 'Industry-Integrated Degree Programme' },
  { icon: BookOpen, label: 'Industry-Aligned Curriculum' },
  { icon: Wrench, label: '100% Practical Exposure' },
  { icon: FlaskConical, label: 'Drone Manufacturing Labs' },
  { icon: Cpu, label: 'Advanced Avionics Laboratory' },
  { icon: Plane, label: 'Flight Simulation Training' },
  { icon: Radar, label: 'UAV Design & Development' },
  { icon: Braces, label: 'Drone Programming' },
  { icon: BrainCircuit, label: 'Artificial Intelligence in Drones' },
  { icon: CircuitBoard, label: 'Embedded Systems' },
  { icon: Bot, label: 'Robotics & Automation' },
  { icon: Map, label: 'GIS & Drone Mapping' },
  { icon: Zap, label: 'Aerospace Electronics' },
  { icon: CalendarDays, label: 'Internship Every Year' },
  { icon: Building2, label: 'Industrial Visits' },
  { icon: Briefcase, label: 'Live Industry Projects' },
  { icon: Lightbulb, label: 'Research Opportunities' },
  { icon: Rocket, label: 'Entrepreneurship Support' },
  { icon: Target, label: 'Placement Assistance' },
];

const whyChooseUs = [
  { icon: Sparkles, title: 'Industry Expertise', desc: 'Learn directly from experienced drone professionals.' },
  { icon: FlaskConical, title: 'Modern Laboratories', desc: 'Advanced Drone, UAV, and Avionics Labs.' },
  { icon: Briefcase, title: 'Live Projects', desc: 'Work on real industrial assignments.' },
  { icon: Lightbulb, title: 'Research Opportunities', desc: 'Participate in innovation and research activities.' },
  { icon: GraduationCap, title: 'Internship Opportunities', desc: 'Gain industrial experience during the course.' },
  { icon: Target, title: 'Placement Support', desc: 'Dedicated placement and career guidance.' },
  { icon: Rocket, title: 'Startup Incubation', desc: 'Support for aspiring entrepreneurs.' },
  { icon: BadgeCheck, title: 'Professional Certifications', desc: 'Additional industry certifications alongside the degree.' },
  { icon: Handshake, title: 'Industry Mentorship', desc: 'Guidance from aerospace and drone industry experts.' },
  { icon: Cpu, title: 'Future-Ready Curriculum', desc: 'Designed according to emerging industry standards.' },
];

const careers = [
  'Drone Engineer', 'UAV Design Engineer', 'Avionics Engineer', 'Flight Test Engineer', 'Drone Pilot',
  'Drone Maintenance Engineer', 'Aerospace Engineer', 'Embedded Systems Engineer', 'Robotics Engineer',
  'AI & Autonomous Systems Engineer', 'GIS & Survey Engineer', 'Defence Drone Specialist',
  'Agriculture Drone Specialist', 'Drone Manufacturing Engineer', 'Drone Software Developer',
  'Research Engineer', 'Aviation Industry', 'Defence Sector', 'ISRO & Space Technology',
  'Private Aerospace Companies', 'Start Your Own Drone Company',
];

const learning = [
  'Aircraft Systems', 'Avionics', 'Aerodynamics', 'Flight Mechanics', 'Drone Technology', 'Drone Design',
  'Embedded Systems', 'IoT', 'AI & Machine Learning', 'Navigation Systems', 'Communication Systems',
  'Electronics', 'Control Systems', 'Programming', 'CAD Design', 'Simulation', 'Drone Manufacturing',
  'Drone Maintenance', 'GIS & Mapping', 'Remote Sensing', 'Research Methodology', 'Project Management',
];

const industryExposure = [
  'Industrial Visits', 'Factory Training', 'Drone Assembly Workshops', 'Drone Flying Practice',
  'Research Projects', 'Product Development', 'National Level Competitions', 'Hackathons',
  'Industry Certifications', 'Guest Lectures', 'International Seminars', 'Startup Mentoring',
];

const infrastructurePhotos = [
  { src: '/assets/infra/infra-06.jpeg', caption: 'Aerial View of the Campus', span: 'sm:col-span-2' },
  { src: '/assets/infra/infra-05.jpeg', caption: 'Modern Academic Block' },
  { src: '/assets/infra/infra-07.jpeg', caption: 'Smart Classrooms' },
  { src: '/assets/infra/infra-01.jpeg', caption: 'Fitness Centre' },
  { src: '/assets/infra/infra-03.jpeg', caption: 'Sports Courts' },
  { src: '/assets/infra/infra-04.jpeg', caption: 'Dining Hall' },
  { src: '/assets/infra/infra-02.jpeg', caption: 'Campus Dining & Recreation' },
];

const admissionSteps = [
  'Submit Application',
  'Verify Eligibility',
  'Admission Counselling',
  'Document Verification',
  'Fee Payment',
  'Confirm Admission',
];

const stats = [
  { icon: Users, value: '2', label: 'Students' },
  { icon: GraduationCap, value: '15+', label: 'Expert Faculty' },
  { icon: Briefcase, value: '100%', label: 'Industry Exposure' },
];

const faqs = [
  {
    q: 'Is this a regular B.Tech Degree?',
    a: 'Yes. It is a regular four-year B.Tech programme offered by PK DAS University with industry collaboration from De Drone World Solutions Pvt. Ltd.',
  },
  {
    q: 'Will students receive practical training?',
    a: 'Yes. The programme includes extensive practical sessions, industrial training, drone flying, internships, and live projects.',
  },
  {
    q: 'Are internships included?',
    a: 'Yes. Students receive industry exposure through internships and project-based learning.',
  },
  {
    q: 'Is placement assistance available?',
    a: 'Yes. Dedicated placement assistance and career guidance are provided.',
  },
  {
    q: 'Can students start their own drone company?',
    a: 'Yes. Students receive entrepreneurship guidance and startup support.',
  },
];

const SectionHeader = ({ eyebrow, title, light }) => (
  <div className="mb-10 max-w-2xl">
    <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{eyebrow}</p>
    <h2 className={`mt-2 text-2xl font-bold md:text-3xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
  </div>
);

const CheckList = ({ items, columns = 2 }) => (
  <ul className={`grid gap-x-8 gap-y-3 sm:grid-cols-${columns}`}>
    {items.map((item) => (
      <li key={item} className="flex items-start gap-3 text-slate-600">
        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const PillGrid = ({ items }) => (
  <div className="flex flex-wrap gap-3">
    {items.map((item) => (
      <span
        key={item}
        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-navy transition hover:border-primary/50 hover:bg-primary/10"
      >
        {item}
      </span>
    ))}
  </div>
);

export default function BTechAvionicsDrone() {
  const mainRef = useRef(null);
  const highlightsCountRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.btech-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.btech-section-reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
          },
          y: 32,
          opacity: 0,
          duration: 0.75,
          ease: 'power3.out',
        });
      });

      if (highlightsCountRef.current) {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: highlights.length,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: highlightsCountRef.current,
            start: 'top 85%',
            once: true,
          },
          onUpdate: () => {
            if (highlightsCountRef.current) {
              highlightsCountRef.current.textContent = Math.round(counter.value);
            }
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden bg-slate-50 pt-[104px]">
      {/* Collaboration bar */}
      <div className="btech-hero-reveal border-b border-slate-200 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 sm:gap-10">
          <img src="/assets/logo.png" alt="De Drone World" className="h-10 w-auto object-contain sm:h-12" />
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <X size={16} strokeWidth={3} />
          </span>
          <img src="/assets/clients/pkdas.png" alt="PK DAS University" className="h-10 w-auto object-contain sm:h-12" />
        </div>
      </div>

      {/* Hero */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <img
          src="/assets/pkdas-image.jpeg"
          alt="Avionics and Drone Engineering"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="btech-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold tracking-[0.2em] text-blue-200">
            <Rocket size={16} /> Admissions Open 2026–2027
          </span>
          <h1 className="btech-hero-reveal mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            India's First Industry-Integrated B.Tech in Avionics &amp; Drone Engineering
          </h1>
          <p className="btech-hero-reveal mt-4 text-lg font-bold text-primary">Learn. Build. Fly. Innovate.</p>
          <p className="btech-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            An innovative undergraduate engineering program jointly offered by <strong className="text-white">PK DAS University</strong> and{' '}
            <strong className="text-white">De Drone World Solutions Pvt. Ltd.</strong>, designed to bridge the gap between academic excellence
            and real-world aerospace and drone industry requirements.
          </p>

          <div className="btech-hero-reveal mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {infoGrid.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="group rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-primary/15 hover:shadow-xl hover:shadow-primary/20"
              >
                <Icon size={18} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-3 text-[11px] font-bold uppercase tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-slate-200">{label}</p>
                <p className="mt-1 text-sm font-bold text-white">{value}</p>
              </div>
            ))}
          </div>

          <div className="btech-hero-reveal mt-8 flex flex-wrap gap-3">
            <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary/90">
              Apply Now <ArrowRight size={19} />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
              <FileText size={18} /> Download Brochure
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-sm transition hover:bg-white/15">
              <Phone size={18} /> Contact Admission
            </a>
          </div>
        </div>
      </section>

      {/* About the Programme */}
      <section className="btech-section-reveal px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:grid-cols-2 md:items-center md:p-12">
          <div>
            <SectionHeader eyebrow="About the Programme" title="B.Tech in Avionics & Drone Engineering" />
            <p className="max-w-4xl leading-relaxed text-slate-600">
              The B.Tech in Avionics &amp; Drone Engineering is a next-generation engineering degree developed to prepare students for the
              rapidly growing Aerospace, Aviation, UAV, and Drone Technology industries.
            </p>
            <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
              This unique programme combines the academic strength of <strong className="text-navy">PK DAS University</strong> with the
              extensive industry expertise of <strong className="text-navy">De Drone World Solutions Pvt. Ltd.</strong>, providing students with
              hands-on practical learning, industrial exposure, live projects, internships, and professional certifications throughout their
              academic journey.
            </p>
            <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
              Unlike conventional engineering programmes that focus mainly on theory, this degree emphasizes experiential learning, innovation,
              research, and industry readiness from the very first year.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/btech/btech-02.jpeg"
              alt="Students assembling a drone in the engineering lab"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* India's First Industry-Integrated Degree Programme */}
      <section className="btech-section-reveal px-6 pb-4">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="A Revolutionary Engineering Education" title="India's First Industry-Integrated Degree Programme" />
          <p className="max-w-4xl leading-relaxed text-slate-600">
            This is one of India's pioneering Industry-Integrated B.Tech Degree Programmes in Avionics &amp; Drone Engineering, where academic
            education is integrated with continuous industry involvement.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-slate-600">
            Students learn directly from experienced aerospace professionals, certified drone experts, and industry mentors while working on
            real-world projects.
          </p>

          <div className="mt-8 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <h3 className="mb-5 font-bold text-navy">What Makes This Programme Different?</h3>
              <CheckList items={differentiators} />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/assets/btech/btech-04.jpeg"
                alt="Students building a drone with safety glasses in the lab"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration */}
      <section className="btech-section-reveal px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Collaboration" title="A Powerful Academic & Industry Partnership" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <img src="/assets/clients/pkdas.png" alt="PK DAS University" className="mb-5 h-10 w-auto object-contain" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">PK DAS University</p>
              <h3 className="mt-1 font-bold text-navy">PK DAS University</h3>
              <p className="mt-3 leading-relaxed text-slate-600">
                Established originally as part of the Nehru Group of Institutions in 1968, PKDAS Deemed to be University stands tall as
                a beacon of multidisciplinary education in Coimbatore, Tamil Nadu. Born from the visionary dream of our Founder
                Chairman, Late Shri. P.K. Das, our institution was created to nurture, guide, and ignite the spirit of young minds.
              </p>
              <p className="mt-3 leading-relaxed text-slate-600">
                Today, we continue to weather the fiercest of storms and challenges, emerging as a leading contender in the changing
                world of global education without compromising on our core ethics and principles.
              </p>
            </div>
            <div className="rounded-3xl bg-navy p-8 text-white shadow-sm">
              <img src="/assets/logo.png" alt="De Drone World" className="mb-5 h-10 w-auto object-contain brightness-0 invert" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">De Drone World</p>
              <h3 className="mt-1 font-bold text-white">De Drone World Solutions Pvt. Ltd.</h3>
              <p className="mt-3 leading-relaxed text-slate-300">A leading Drone Technology Company specializing in:</p>
              <ul className="mt-4 space-y-2">
                {ddwSpecialties.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center leading-relaxed text-slate-600">
            Together, this collaboration creates an education ecosystem where students graduate with both academic knowledge and industry
            experience.
          </p>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="Highlights" title="Course Highlights" />
            <div className="flex items-baseline gap-2 rounded-2xl bg-primary/5 px-6 py-4">
              <span ref={highlightsCountRef} className="text-4xl font-bold text-primary font-[Space_Grotesk]">0</span>
              <span className="font-bold text-slate-600">reasons this programme stands out</span>
            </div>
          </div>

          <div className="mb-10 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/assets/btech/btech-05.jpeg"
              alt="Drone manufacturing and electronics lab"
              className="h-64 w-full object-cover md:h-80"
            />
          </div>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="highlight-card group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:border-primary hover:bg-primary hover:shadow-xl hover:shadow-primary/20"
                style={{ animationDelay: `${(index % 6) * 0.3}s` }}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Icon size={22} />
                </span>
                <span className="text-sm font-bold text-navy transition-colors duration-300 group-hover:text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose This Course */}
      <section className="btech-section-reveal px-6 py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl p-8 text-white shadow-xl md:p-12">
          <img
            src="/assets/btech/btech-03.jpeg"
            alt="Future of autonomous drone technology"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-slate-950/80" />
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">Why Choose This Course?</p>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">The Future Starts Here</h2>
            <p className="mt-5 max-w-4xl leading-relaxed text-white/90">
              The global demand for skilled Drone and Aerospace Engineers is growing rapidly. Governments, defence organizations, agriculture,
              logistics, surveying, infrastructure, AI, and smart cities are increasingly adopting drone technology.
            </p>
            <p className="mt-4 max-w-4xl leading-relaxed text-white/90">
              This programme prepares students to become industry-ready engineers capable of designing, developing, manufacturing, operating,
              and managing advanced unmanned aerial systems. Students graduate with skills that employers actively seek.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Infrastructure" title="World-Class Campus Facilities" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {infrastructurePhotos.map((photo) => (
              <div key={photo.src} className={`group relative overflow-hidden rounded-2xl shadow-sm ${photo.span || ''}`}>
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Why Choose Us" title="Why Choose PK DAS University & De Drone World?" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-primary/40 hover:shadow-lg">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <h3 className="font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="btech-section-reveal px-6 py-16">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <SectionHeader eyebrow="Eligibility" title="Admission Eligibility" />
          <p className="max-w-3xl leading-relaxed text-slate-600">Candidates should have completed Higher Secondary (10+2) with:</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Physics', 'Chemistry', 'Mathematics (PCM)'].map((item) => (
              <span key={item} className="rounded-full bg-primary/10 px-5 py-2 font-bold text-primary">{item}</span>
            ))}
            <span className="rounded-full bg-slate-100 px-5 py-2 font-semibold text-slate-600">or equivalent qualification recognized by the university</span>
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-slate-600">
            Students passionate about Aviation, Aerospace, Electronics, Robotics, Artificial Intelligence, and Drone Technology are encouraged
            to apply.
          </p>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="btech-section-reveal relative overflow-hidden px-6 py-16 text-white">
        <img
          src="/assets/btech/btech-06.jpeg"
          alt="Survey drone over a construction site at sunset"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Build Your Career In</p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Career Opportunities</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {careers.map((item) => (
              <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary/50 hover:bg-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Experience */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[320px_1fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/btech/btech-07.jpeg"
              alt="Students working on embedded systems and electronics"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeader eyebrow="Learning Experience" title="What You'll Learn" />
            <PillGrid items={learning} />
          </div>
        </div>
      </section>

      {/* Industry Exposure */}
      <section className="btech-section-reveal px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_320px] lg:items-center md:p-12">
          <div>
            <SectionHeader eyebrow="Industry Exposure" title="Beyond Classroom Learning" />
            <CheckList items={industryExposure} columns={3} />
          </div>
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/assets/btech/btech-01.jpeg"
              alt="AI-powered drone technology"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Admissions Open 2026" title="Admission Process" />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {admissionSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:border-primary/40 hover:shadow-md">
                <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-bold text-navy">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="btech-section-reveal border-y border-[#BDDFF0] bg-[#F7FCFE] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[0.14em] text-primary">By the Numbers</p>
            <h2 className="mt-2 text-2xl font-bold text-navy md:text-3xl">This Programme at a Glance</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center rounded-2xl border border-[#BDDFF0] bg-white px-6 py-10 text-center shadow-sm">
                <Icon size={26} className="mb-4 text-primary" />
                <span className="text-4xl font-bold text-primary font-[Space_Grotesk]">{value}</span>
                <span className="mt-2 font-semibold text-[#555555]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="btech-section-reveal bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="Frequently Asked Questions" title="Questions About the Programme" />
          <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group p-6 open:bg-slate-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-navy">
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="shrink-0 text-primary" /> {faq.q}
                  </span>
                </summary>
                <p className="mt-3 pl-8 leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="btech-section-reveal px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-8 py-16 text-center text-white shadow-2xl md:px-16">
          <Plane className="mx-auto mb-4 text-white/80" size={32} />
          <h2 className="text-3xl font-bold text-white md:text-4xl">Shape the Future of Aviation &amp; Drone Technology</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Become a part of India's next generation of Aerospace and Drone Engineers.
          </p>
          <p className="mt-3 font-bold text-white">Admissions Open for Academic Year 2026–2027</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href={ENROLL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition hover:bg-slate-50">
              Apply Now <ArrowRight size={19} />
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-8 py-4 font-bold text-white transition hover:bg-white/10">
              <Send size={18} /> Contact Admissions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
