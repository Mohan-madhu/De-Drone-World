import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Camera,
  ChevronRight,
  Cuboid,
  Database,
  Flame,
  Flower2,
  Gauge,
  Hammer,
  Layers,
  Lightbulb,
  MapPinned,
  ShieldCheck,
  Sprout,
  Sun,
  UtilityPole,
  Wind,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const toServiceItemPath = (category, name) =>
  `${category.path}#${name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

const serviceGroups = [
  {
    name: 'Agriculture',
    path: '/services/agriculture',
    eyebrow: 'Precision farming',
    image: '/assets/services/fertilizer-spraying.jpeg',
    icon: <Sprout size={24} />,
    description: 'Drone-enabled agriculture services for spraying, sowing, crop monitoring, and precision farm operations.',
    items: [
      { name: 'Fertilizer Spraying', icon: <Sprout size={18} /> },
      { name: 'Seed Sowing', icon: <Layers size={18} /> },
      { name: 'Crop Monitoring', icon: <Gauge size={18} /> },
      { name: 'Precision Agriculture Using Drones', icon: <MapPinned size={18} /> },
    ],
  },
  {
    name: 'Events',
    path: '/services/events',
    eyebrow: 'Aerial experiences',
    image: '/assets/services/videography.jpeg',
    icon: <Camera size={24} />,
    description: 'Creative aerial coverage and drone-led event experiences for brands, institutions, celebrations, and public programs.',
    items: [
      { name: 'Drone Videography & Photography', icon: <Camera size={18} /> },
      { name: 'Drone Flower Showering', icon: <Flower2 size={18} /> },
      { name: 'Flag Towing', icon: <Layers size={18} /> },
      { name: 'Drone Light Show', icon: <Lightbulb size={18} /> },
      { name: 'Drone LED Panel Advertisement', icon: <BadgeCheck size={18} /> },
    ],
  },
  {
    name: 'Inspection',
    path: '/services/inspection',
    eyebrow: 'Industrial UAV operations',
    image: '/assets/services/drone-thermography-service.jpeg',
    icon: <ShieldCheck size={24} />,
    description: 'Safer infrastructure and asset inspection with aerial imaging, thermal workflows, and field documentation.',
    items: [
      { name: 'Windmill Inspection', icon: <Wind size={18} /> },
      { name: 'Solar Panel Inspection', icon: <Sun size={18} /> },
      { name: 'Power Line Inspection', icon: <UtilityPole size={18} /> },
      { name: 'Drone Thermography', icon: <Flame size={18} /> },
      { name: 'Construction Inspection', icon: <Hammer size={18} /> },
      { name: 'Pipeline Inspection', icon: <ShieldCheck size={18} /> },
    ],
  },
  {
    name: 'Survey & Mapping',
    path: '/services/survey-mapping',
    eyebrow: 'Geospatial intelligence',
    image: '/assets/services/construction-service.jpeg',
    icon: <MapPinned size={24} />,
    description: 'Drone survey, mapping, 3D modeling, GIS analysis, and measurement support for land and infrastructure teams.',
    items: [
      { name: 'Land Surveying', icon: <MapPinned size={18} /> },
      { name: 'Construction & Infrastructure Mapping', icon: <Hammer size={18} /> },
      { name: '3D Mapping & Modeling', icon: <Cuboid size={18} /> },
      { name: 'GIS & Data Analysis', icon: <Database size={18} /> },
      { name: 'Mining & Stockpile Analysis', icon: <Boxes size={18} /> },
    ],
  },
];

const Services = () => {
  const mainRef = useRef(null);
  const [activeService, setActiveService] = useState(serviceGroups[0].name);

  const selectedService = useMemo(
    () => serviceGroups.find((group) => group.name === activeService) || serviceGroups[0],
    [activeService]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.services-reveal', {
        autoAlpha: 0,
        y: 44,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('.service-selector-card', {
        scrollTrigger: {
          trigger: '.service-selector-section',
          start: 'top 82%',
        },
        autoAlpha: 0,
        y: 18,
        stagger: 0.09,
        duration: 0.55,
        ease: 'power2.out',
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden bg-[#F7FCFE] pt-[104px]">
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0">
          <img src="/assets/services_hero.png" alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7FCFE] via-[#F7FCFE]/90 to-[#F7FCFE]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="services-reveal font-bold uppercase tracking-[0.16em] text-primary">Service Categories</p>
            <h1 className="services-reveal mt-4 leading-tight text-navy">Choose the Right Drone Service for Your Operation</h1>
            <p className="services-reveal mt-5 max-w-2xl text-slate-600">
              Start from a service group, reveal its sub-services, and open the exact operation page your project needs.
            </p>
          </div>
        </div>
      </section>

      <section className="service-selector-section px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-bold uppercase tracking-[0.14em] text-primary">Services</p>
              <h2 className="mt-2">Hover or tap a group to view its service options</h2>
            </div>
            <p className="max-w-md text-slate-600">
              Each sub-service links to the relevant service page section for capabilities, applications, and enquiry flow.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceGroups.map((group) => {
              const isActive = activeService === group.name;
              return (
                <button
                  key={group.name}
                  type="button"
                  onMouseEnter={() => setActiveService(group.name)}
                  onFocus={() => setActiveService(group.name)}
                  onClick={() => setActiveService(group.name)}
                  className={`service-selector-card group relative h-72 overflow-hidden rounded-3xl border text-left shadow-sm transition-all duration-300 ${
                    isActive ? 'border-primary shadow-xl shadow-primary/15' : 'border-slate-200 hover:border-primary/50'
                  }`}
                >
                  <img src={group.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 transition-colors ${isActive ? 'bg-navy/48' : 'bg-navy/66 group-hover:bg-navy/55'}`} />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 text-white">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
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

          <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl">
            <div className="grid lg:grid-cols-[0.78fr_1.22fr]">
              <div className="relative min-h-80 overflow-hidden bg-slate-900">
                <img src={selectedService.image} alt={selectedService.name} className="absolute inset-0 h-full w-full object-cover opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-transparent" />
                <div className="relative z-10 flex h-full min-h-80 flex-col justify-end p-8 text-white">
                  <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                    {selectedService.icon}
                  </span>
                  <p className="font-bold uppercase tracking-[0.14em] text-primary">Selected Service Group</p>
                  <h2 className="mt-2 text-white">{selectedService.name}</h2>
                  <p className="mt-4 text-white/80">{selectedService.description}</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-bold uppercase tracking-[0.14em] text-primary">Service options</p>
                    <h3 className="mt-1">{selectedService.items.length} options available</h3>
                  </div>
                  <Link
                    to={selectedService.path}
                    className="hidden rounded-xl border border-primary/20 px-4 py-2 font-bold text-primary transition hover:bg-primary hover:text-white sm:inline-flex"
                  >
                    Open Category
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedService.items.map((item) => (
                    <Link
                      key={item.name}
                      to={toServiceItemPath(selectedService, item.name)}
                      className="group/item flex min-h-20 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-primary shadow-sm transition group-hover/item:bg-primary group-hover/item:text-white">
                        {item.icon}
                      </span>
                      <span className="flex-1 font-bold text-navy">{item.name}</span>
                      <ChevronRight size={18} className="text-slate-400 transition group-hover/item:translate-x-1 group-hover/item:text-primary" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl rounded-3xl bg-primary px-8 py-16 text-white shadow-2xl shadow-primary/20 md:px-12 md:py-20">
          <div className="flex flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="text-white">Ready to Transform Your Operations?</h2>
              <p className="mt-3 text-blue-100/85">
                Contact our team for agriculture, events, inspection, survey, mapping, and institutional UAV requirements.
              </p>
            </div>
            <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-primary shadow-xl transition hover:bg-slate-50 sm:w-auto">
              Talk to Our Team <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
