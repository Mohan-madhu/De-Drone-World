import React, { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { BadgeCheck, CalendarDays, CheckCircle, Clock, GraduationCap, MapPin, Plane, Send, ShieldCheck, Sparkles } from 'lucide-react';

const slugify = (value) =>
  value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const baseSections = {
  timeline: [
    'Day 1-2: Strong Foundation - Theory & Concepts',
    'Day 3: Simulator Mastery - Practice Before You Fly',
    'Day 4-5: Live Flight Training - Real Drone Operations',
  ],
  droneDetails: ['Category: Rotorcraft (Small)', 'Type: Quad-Copter (Dual Controller System)'],
  audience: [
    'Future Drone Pilots',
    'Survey & Mapping Experts',
    'Aerial Creators (Photo/Video)',
    'Defence & Security Personnel',
    'Students & Tech Enthusiasts',
    'Agri-Tech & Precision Farming Professionals',
    'Anyone aiming for DGCA-certified drone authorization',
  ],
  gains: [
    'Drone Rules 2021 & DGCA compliance',
    'UIN, UAOP & NPNT ecosystem simplified',
    'Aerodynamics & flight principles',
    'Fixed-wing vs multirotor systems',
    'Drone hardware breakdown',
    'Battery handling & safety protocols',
    'Emergency handling & fail-safe strategies',
    'Simulator-based skill building',
    'Pre-flight & post-flight workflows',
    'Hands-on field flying experience',
    'Mission planning & real-world operations',
    'DGCA portal & certification guidance',
  ],
  eligibility: [
    'Minimum 18 years old',
    '10th Pass as per DGCA norms',
    'Valid Government ID',
    'Medically fit for drone operations',
    'No prior experience required',
  ],
  why: [
    'Fully aligned with DGCA certification standards',
    'Balanced mix of theory, simulation, and real flying',
    'Designed for zero to professional level transformation',
    'Practical-first learning approach',
  ],
};

const programs = [
  {
    title: 'Remote Pilot Certificate - Small Class',
    menuTitle: 'Small RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'Power Your Flight Career',
    duration: '5 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Step into the world of professional drone aviation with a DGCA-compliant Remote Pilot Certification designed for Small Class drones. A perfect blend of theory, simulation, and real-time flying aligned with Drone Rules 2021 and DGCA standards.',
    image: '/assets/training/small-training.jpeg',
    ...baseSections,
  },
  {
    title: 'Remote Pilot Certificate - Medium Class',
    menuTitle: 'Medium RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'Advance to Heavy-Duty Drone Operations',
    duration: '5 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Upgrade your capabilities with a DGCA-approved Remote Pilot Certification for Medium Class drones. Engineered for professionals aiming to handle high-capacity, industrial-grade drone operations with confidence and compliance.',
    image: '/assets/services_hero.png',
    ...baseSections,
    timeline: [
      'Day 1-2: Advanced Theory & Regulatory Framework',
      'Day 3: High-Fidelity Simulator Training',
      'Day 4-5: Live Flight Operations (Medium Class Drone)',
    ],
    droneDetails: [
      'Category: Rotorcraft (Medium)',
      'Type: Industrial Multi-Rotor Platform (Dual Controller System)',
    ],
    audience: [
      'Certified Small Class Drone Pilots upgrading to Medium',
      'Industrial Drone Operators for logistics, surveillance, and inspection',
      'Surveying & Mapping Professionals for large-scale projects',
      'Defence & Security Personnel',
      'Infrastructure & Utility Inspectors',
      'Professionals targeting advanced DGCA drone certification',
    ],
    gains: [
      'Advanced Drone Rules 2021 & DGCA compliance for Medium Class operations',
      'Airspace structure, permissions & operational restrictions',
      'Medium drone flight dynamics & load handling',
      'System architecture for heavy-lift drones',
      'Advanced components & redundancy systems',
      'Payload integration for cameras, sensors, and delivery systems',
      'High-capacity battery systems & power management',
      'Emergency procedures & risk mitigation',
      'Simulator-based precision control for large drones',
      'Pre-flight planning for complex missions',
      'Live flying experience with Medium Class drones',
      'Industrial mission execution & safety protocols',
      'DGCA portal workflow for Medium category certification',
    ],
    eligibility: [
      'Minimum 18 years old',
      '10th Pass as per DGCA norms',
      'Valid Government ID',
      'Medically fit for drone operations',
      'Prior Small Class RPC certification recommended',
    ],
    why: [
      'Built for high-capacity industrial drone operations',
      'Focused on Medium Class compliance and operational safety',
      'Combines advanced theory, simulator training, and live flying',
      'Designed for pilots ready to upgrade their license and mission capability',
    ],
  },
  {
    title: 'Remote Pilot Certificate - Small + Medium Class',
    menuTitle: 'Small And Medium RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'From Foundation to Industrial Drone Mastery',
    duration: '8 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Build and upgrade your drone piloting expertise with a DGCA-certified program covering both Small and Medium categories. Designed to deliver complete skill progression from basic flying to advanced industrial operations.',
    image: '/assets/training/small-and-medium-training.jpeg',
    ...baseSections,
    timeline: [
      'Day 1-2: Theory & Core Concepts',
      'Day 3-4: Simulator Training',
      'Day 5-8: Hands-On Flying Practice',
    ],
    droneDetails: [
      'Category: Small + Medium',
      'Type: Quad-Copter & Hexacopter (Dual Controller System)',
    ],
    audience: [
      'Aspiring Drone Pilots from beginner to advanced level',
      'Survey & Mapping Professionals',
      'Industrial Drone Operators',
      'Aerial Photography / Videography Experts',
      'Defence & Security Personnel',
      'Agriculture & Infrastructure Professionals',
      'Anyone aiming for complete DGCA drone certification',
    ],
    gains: [
      'Drone Rules 2021 & DGCA compliance',
      'UIN, UAOP, NPNT ecosystem',
      'Flight principles & aerodynamics',
      'Small vs Medium drone operations',
      'Drone components & system architecture',
      'Battery systems & safety management',
      'Emergency handling & fail-safe systems',
      'Simulator-based precision flying',
      'Pre-flight & post-flight SOPs',
      'Live flying with Small + Medium drones',
      'Mission planning & execution',
      'Industrial drone applications',
      'DGCA portal & certification workflow',
    ],
    eligibility: [
      'Minimum 18 years old',
      '10th Pass',
      'Valid Government ID',
      'Medically fit for drone operations',
      'No prior experience required; training starts from basics',
    ],
    why: [
      'Covers both Small + Medium categories in one program',
      'Hands-on experience with Quad & Hexacopter platforms',
      'Industry-focused training for real-world applications',
      'DGCA-aligned certification pathway',
      'From beginner to professional-level expertise',
      'One Program -> Dual Certification Path',
      'Learn -> Practice -> Master -> Operate Professionally',
    ],
  },
  {
    title: 'Inspector Development Course',
    menuTitle: 'Inspector Development Course',
    eyebrow: 'DGCA Authorised',
    tagline: 'Become a DGCA-Ready Drone Instructor',
    duration: '3 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Step into a leadership role in the drone industry with this Instructor Development Program designed for certified RPC holders. This course builds advanced flight experience + professional teaching capability, aligning with DGCA standards under Drone Rules 2021.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Flight Logging & Theory Sessions - 20 Hours Program Foundation',
      'Day 2: Simulator Briefings & Student Assessment Techniques',
      'Day 3: Real-Time Flying Sessions & Mentoring Practice',
    ],
    droneDetails: [
      'Category: Rotorcraft (Small / Medium)',
      'Type: Quad & Hexacopter Training Platforms',
    ],
    audience: [
      'Certified Remote Pilot Certificate (RPC) holders',
      'Pilots aiming to become DGCA-certified instructors',
      'RPTO staff & training coordinators',
      'Experienced drone operators transitioning into training roles',
    ],
    gains: [
      '20 Hours Structured Flight Logging',
      'Verified logbook documentation for compliance',
      'Supervised real-time flying sessions',
      'Simulator-based performance evaluation',
      'Exposure to professional RPTO training workflows',
      'Delivering high-impact theory sessions',
      'Conducting simulator briefings & evaluations',
      'Practical flying instruction & student assessment techniques',
      'Communication, mentoring & classroom control',
      'Exam preparation & pilot performance coaching',
      'Batch planning & structured training delivery',
      'Safety protocols & operational risk management',
      'DGCA documentation & audit preparedness',
      'Maintaining quality standards in training operations',
    ],
    eligibility: [
      'Valid Remote Pilot Certificate (RPC)',
      'Minimum 18 years old',
      'Valid Government ID',
      'Medically fit for drone operations',
      'Prior flying experience with Small or Medium class drones',
    ],
    why: [
      'Combines flight mastery with instructional excellence',
      'Fully aligned with DGCA instructor qualification pathway',
      'Real-world exposure to training & evaluation environments',
      'Designed for immediate transition into instructor roles',
      'Achieve required flight logging benchmarks',
      'Position yourself for DGCA-recognised instructor opportunities',
    ],
  },
];

const simplePrograms = [
  'Aerial Mapping and Surveying',
  'FPV Flying',
  'Agri Drone (Spray & Precision Agriculture)',
  'Aerial Videography and Photography',
  'Drone Basics',
  'GIS for Drone Data Processing',
  'Drone Repair and Maintenance',
  'Python for GIS',
  'LiDAR & GIS',
  'Build Your Own Drone',
  'Build Your Racing Drone',
  'Build Your Own Agri Drone',
  'Drone Customization',
  'Drone Technician (6 Months)',
  '7 Days',
  '15 Days',
  '30 Days',
].map((title) => ({
  title,
  menuTitle: title,
  eyebrow: title.includes('Days') ? 'Internship Track' : 'Skill Program',
  tagline: 'Hands-On Drone Learning',
  duration: title.includes('6 Months') ? '6 Months' : title.includes('Days') ? title : 'Short-Term Program',
  certification: title.includes('RPC') ? 'DGCA Certified' : 'Completion Certificate',
  overview: `Build practical capability in ${title.toLowerCase()} through guided sessions, demonstrations, practice tasks, and project-style learning designed for real drone industry workflows.`,
  image: title.includes('Agri') ? '/assets/services_hero.png' : '/assets/training_hero.png',
  timeline: ['Concept Briefing and Safety Orientation', 'Tool Demonstration and Guided Practice', 'Project Task, Review, and Next Steps'],
  droneDetails: ['Category: Training / Skill Development', 'Mode: Classroom, simulator, and field practice as applicable'],
  audience: ['Students', 'Drone enthusiasts', 'Working professionals', 'Creators and survey teams', 'Anyone entering drone technology'],
  gains: ['Practical workflow understanding', 'Tool and equipment confidence', 'Safety-first operating mindset', 'Industry use-case exposure', 'Guided practice and feedback'],
  eligibility: ['Basic interest in drones', 'Valid ID for registration', 'No prior experience required unless specified'],
  why: ['Built around practical learning', 'Mentor-led sessions', 'Drone industry focused examples', 'Clear next-step guidance'],
}));

const programMap = [...programs, ...simplePrograms].reduce((acc, program) => {
  acc[slugify(program.menuTitle)] = program;
  return acc;
}, {});

function DetailBlock({ icon, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
        <h2 className="text-2xl font-bold text-navy font-display">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <CheckCircle size={18} className="mt-1 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EnrollmentCard({ program }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <aside className="self-start lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl shadow-primary/10">
        <div className="bg-navy p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Ready to Take Off?</p>
          <h3 className="mt-3 text-2xl font-bold font-display">Start your journey</h3>
          <p className="mt-2 text-sm text-slate-300">Share your details and get complete enrollment support.</p>
        </div>

        <form className="grid gap-4 p-6" onSubmit={handleSubmit}>
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Name" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" type="email" placeholder="Email" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Phone" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="City" required />
          <input type="hidden" value={program.title} readOnly />

          <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
            Submit Details <Send size={18} />
          </button>

          {submitted && (
            <p className="rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary">
              Thanks. Your interest has been captured for {program.menuTitle}.
            </p>
          )}

          <p className="text-center text-xs text-slate-500">Get certified. Own the sky.</p>
        </form>
      </div>
    </aside>
  );
}

export default function ProgramDetail() {
  const { programSlug } = useParams();
  const program = useMemo(() => programMap[programSlug], [programSlug]);

  if (!program) return <Navigate to="/training" replace />;

  return (
    <div className="bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(30,159,212,0.24),transparent_42%),radial-gradient(circle_at_82%_10%,rgba(8,47,73,0.55),transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <BadgeCheck size={16} /> {program.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] md:text-6xl font-display">
              {program.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-blue-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">{program.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold">
                <Clock size={18} /> {program.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold">
                <ShieldCheck size={18} /> {program.certification}
              </span>
            </div>
          </div>
          <div className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_20px_55px_rgba(2,6,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(2,6,23,0.62)] backdrop-blur-sm">
            <img
              src={program.image}
              alt={program.title}
              className="h-[360px] w-full rounded-2xl bg-slate-900 object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.35deg] md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <DetailBlock icon={<Sparkles size={20} />} title="Program Overview">
            <p className="text-lg leading-relaxed text-slate-600">{program.overview}</p>
          </DetailBlock>

          <DetailBlock icon={<CalendarDays size={20} />} title="Course Timeline">
            <BulletList items={program.timeline} />
          </DetailBlock>

          <DetailBlock icon={<Plane size={20} />} title="Drone Details">
            <BulletList items={program.droneDetails} />
          </DetailBlock>

          <DetailBlock icon={<MapPin size={20} />} title="Who Should Join">
            <BulletList items={program.audience} />
          </DetailBlock>

          <DetailBlock icon={<GraduationCap size={20} />} title="What You'll Gain">
            <BulletList items={program.gains} />
          </DetailBlock>

          <div className="grid gap-8 md:grid-cols-2">
            <DetailBlock icon={<BadgeCheck size={20} />} title="Eligibility">
              <BulletList items={program.eligibility} />
            </DetailBlock>
          </div>

          <DetailBlock icon={<Sparkles size={20} />} title="Why This Course Stands Out">
            <BulletList items={program.why} />
          </DetailBlock>
        </div>

        <EnrollmentCard program={program} />
      </section>
    </div>
  );
}
