import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BadgeCheck,
  Briefcase,
  CalendarDays,
  Camera,
  ChevronRight,
  Cpu,
  Database,
  Gauge,
  GraduationCap,
  Hammer,
  Layers,
  MapPinned,
  Plane,
  ScanLine,
  Sprout,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const toTrainingPath = (name) =>
  `/training/${name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

const programGroups = [
  {
    name: 'DGCA Courses',
    eyebrow: 'Certified pilot pathway',
    image: '/assets/training/small-training.jpeg',
    icon: <Cpu size={22} />,
    description: 'Remote pilot certificate pathways for students and professionals who want regulated drone operation skills.',
    items: [
      { name: 'Small RPC', icon: <Plane size={18} /> },
      { name: 'Medium RPC', icon: <Gauge size={18} /> },
      { name: 'Small And Medium RPC', icon: <Layers size={18} /> },
      { name: 'Inspector Development Course', icon: <BadgeCheck size={18} /> },
    ],
  },
  {
    name: 'Skill Courses',
    eyebrow: 'Industry-ready specializations',
    image: '/assets/services/construction-service.jpeg',
    icon: <GraduationCap size={22} />,
    description: 'Focused UAV skill programs for mapping, GIS, agriculture, repair, data workflows, FPV and content production.',
    items: [
      { name: 'Aerial Mapping and Surveying', icon: <MapPinned size={18} /> },
      { name: 'FPV Flying', icon: <Trophy size={18} /> },
      { name: 'Agri Drone (Spray & Precision Agriculture)', icon: <Sprout size={18} /> },
      { name: 'Aerial Videography and Photography', icon: <Camera size={18} /> },
      { name: 'Drone Basics', icon: <GraduationCap size={18} /> },
      { name: 'GIS for Drone Data Processing', icon: <Database size={18} /> },
      { name: 'Drone Repair and Maintenance', icon: <Wrench size={18} /> },
      { name: 'Python for GIS', icon: <Cpu size={18} /> },
      { name: 'LiDAR & GIS', icon: <ScanLine size={18} /> },
    ],
  },
  {
    name: 'Drone Workshops',
    eyebrow: 'Hands-on build programs',
    image: '/assets/services/workshop-build-your-own-drone.jpeg',
    icon: <Users size={22} />,
    description: 'Short practical workshops for learners who want to build, configure, customize, and understand drones directly.',
    items: [
      { name: 'Build Your Own Drone', icon: <Hammer size={18} /> },
      { name: 'Build Your Racing Drone', icon: <Trophy size={18} /> },
      { name: 'Build Your Own Agri Drone', icon: <Sprout size={18} /> },
      { name: 'Drone Customization', icon: <Wrench size={18} /> },
    ],
  },
  {
    name: 'Diploma Courses',
    eyebrow: 'Long-form technical learning',
    image: '/assets/services/diplomo-course.jpeg',
    icon: <BadgeCheck size={22} />,
    description: 'Structured technical training for learners who want deeper exposure to UAV technology and operations.',
    items: [
      { name: 'Drone Technician (6 Months)', icon: <Wrench size={18} /> },
    ],
  },
  {
    name: 'Internships',
    eyebrow: 'Short-term exposure',
    image: '/assets/services/30days-drone-internship.jpeg',
    icon: <Briefcase size={22} />,
    description: 'Internship tracks for students who need practical exposure, projects, and guided drone technology learning.',
    items: [
      { name: '7 Days', icon: <CalendarDays size={18} /> },
      { name: '15 Days', icon: <CalendarDays size={18} /> },
      { name: '30 Days', icon: <CalendarDays size={18} /> },
    ],
  },
];

const Training = () => {
  const mainRef = useRef(null);
  const [activeProgram, setActiveProgram] = useState(programGroups[0].name);

  const selectedProgram = useMemo(
    () => programGroups.find((group) => group.name === activeProgram) || programGroups[0],
    [activeProgram]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.training-reveal', {
        autoAlpha: 0,
        y: 44,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.selector-card', {
        scrollTrigger: {
          trigger: '.selector-section',
          start: 'top 82%',
        },
        autoAlpha: 0,
        y: 18,
        stagger: 0.08,
        duration: 0.55,
        ease: 'power2.out',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const renderGroupSelector = (groups, activeName, setActiveName) => (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-5">
      {groups.map((group) => {
        const isActive = activeName === group.name;
        return (
          <button
            key={group.name}
            type="button"
            onMouseEnter={() => setActiveName(group.name)}
            onFocus={() => setActiveName(group.name)}
            onClick={() => setActiveName(group.name)}
            className={`selector-card group relative h-72 overflow-hidden rounded-3xl border text-left shadow-sm transition-all duration-300 ${
              isActive ? 'border-primary shadow-xl shadow-primary/15' : 'border-slate-200 hover:border-primary/50'
            }`}
          >
            <img src={group.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-navy/50' : 'bg-navy/65 group-hover:bg-navy/55'}`} />
            <div className="relative z-10 flex h-full flex-col justify-between p-5 text-white">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                {group.icon}
              </span>
              <div>
                <p className="mb-2 font-bold uppercase tracking-[0.12em] text-primary">{group.eyebrow}</p>
                <h3 className="text-white">{group.name}</h3>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );

  const renderDetails = (group, type) => (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
        <div className="relative min-h-80 overflow-hidden bg-slate-900">
          <img src={group.image} alt={group.name} className="absolute inset-0 h-full w-full object-cover opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
          <div className="relative z-10 flex h-full min-h-80 flex-col justify-end p-8 text-white">
            <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
              {group.icon}
            </span>
            <p className="font-bold uppercase tracking-[0.14em] text-primary">{type === 'program' ? 'Selected Program Group' : 'Selected Service Group'}</p>
            <h2 className="mt-2 text-white">{group.name}</h2>
            <p className="mt-4 text-white/80">{group.description}</p>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold uppercase tracking-[0.14em] text-primary">
                {type === 'program' ? 'Courses inside this group' : 'Services inside this group'}
              </p>
              <h3 className="mt-1">{group.items.length} options available</h3>
            </div>
            {type === 'program' ? (
              <a
                href="https://forms.gle/9SdLE62GTYY1o9Av7"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden rounded-xl border border-primary/20 px-4 py-2 font-bold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
              >
                Apply
              </a>
            ) : (
              <Link
                to={group.path}
                className="hidden rounded-xl border border-primary/20 px-4 py-2 font-bold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
              >
                Open
              </Link>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {group.items.map((item) => {
              const target = toTrainingPath(item.name);
              return (
                <Link
                  key={item.name}
                  to={target}
                  className="group/item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-sm transition group-hover/item:bg-primary group-hover/item:text-white">
                    {item.icon}
                  </span>
                  <span className="flex-1 font-bold text-navy">{item.name}</span>
                  <ChevronRight size={18} className="text-slate-400 transition group-hover/item:translate-x-1 group-hover/item:text-primary" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div ref={mainRef} className="overflow-hidden bg-[#F7FCFE] pt-[104px]">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0">
          <img src="/assets/training_hero.png" alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7FCFE] via-[#F7FCFE]/90 to-[#F7FCFE]/65" />
        </div>
        <div className="relative mx-auto max-w-7xl text-center">
          <p className="training-reveal font-bold uppercase tracking-[0.16em] text-primary">Our Programs</p>
          <h1 className="training-reveal mx-auto mt-4 max-w-4xl leading-tight text-navy">
            Choose the Right Drone Training Pathway
          </h1>
          <p className="training-reveal mx-auto mt-5 max-w-3xl text-slate-600">
            Start from the main group, explore the sub-categories, and open the exact course or service page you need.
          </p>
        </div>
      </section>

      <section className="selector-section px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold uppercase tracking-[0.14em] text-primary">Training Categories</p>
              <h2 className="mt-2">Hover or tap a group to view its courses</h2>
            </div>
            <p className="max-w-md text-slate-600">Every course card links to the actual course page for details, outcomes, FAQs, and application flow.</p>
          </div>
          {renderGroupSelector(programGroups, activeProgram, setActiveProgram)}
          {renderDetails(selectedProgram, 'program')}
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-8 py-16 shadow-2xl shadow-primary/20 md:px-12 md:py-20">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-white">Ready to become a certified pilot?</h2>
              <p className="mt-3 text-blue-100/85">Join our upcoming batch in Coimbatore or Madurai. Limited seats available.</p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <a href="https://forms.gle/9SdLE62GTYY1o9Av7" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-white px-8 py-4 text-center font-bold text-primary shadow-xl transition hover:bg-slate-50">
                Apply for Course
              </a>
              <Link to="/contact" className="rounded-xl border border-white/35 px-8 py-4 text-center font-bold text-white transition hover:bg-white/10">
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
