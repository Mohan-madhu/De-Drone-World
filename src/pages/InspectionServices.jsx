import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Construction,
  Flame,
  Send,
  ShieldCheck,
  Sun,
  UtilityPole,
  Wind,
} from 'lucide-react';

const inspectionServices = [
  {
    title: 'Windmill Inspection',
    kicker: 'Wind turbine asset health',
    icon: Wind,
    image:
      'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1400&q=80',
    description:
      'Safely inspect wind turbine blades, nacelles, and towers with detailed aerial imagery that helps detect faults without manual climbing.',
    points: [
      'High-resolution imaging of blades, nacelle, and tower',
      'Detect cracks, erosion, and structural damage',
      'Eliminates need for manual climbing',
      'Rapid inspection with minimal downtime',
    ],
    benefits: ['Improved worker safety', 'Reduced maintenance costs', 'Faster fault detection'],
  },
  {
    title: 'Solar Panel Inspection',
    kicker: 'Solar performance monitoring',
    icon: Sun,
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1400&q=80',
    description:
      'Monitor solar power systems quickly and accurately using aerial inspection and thermal analysis for performance-impacting defects.',
    points: [
      'Detect hotspots, faults, and panel defects',
      'Thermal imaging for performance analysis',
      'Coverage of large solar farms quickly',
      'Prevent energy loss and downtime',
    ],
    benefits: ['Increased energy efficiency', 'Early fault detection', 'Reduced maintenance effort'],
  },
  {
    title: 'Power Line Inspection',
    kicker: 'Transmission and distribution safety',
    icon: UtilityPole,
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1400&q=80',
    description:
      'Inspect transmission lines, distribution towers, cables, and insulators with safer aerial workflows in hazardous or hard-to-reach zones.',
    points: [
      'Inspect cables, towers, and insulators',
      'Identify wear, corrosion, and vegetation risks',
      'Reduce need for manual patrols',
      'Safe inspection in hazardous zones',
    ],
    benefits: ['Minimized outage risks', 'Enhanced safety', 'Faster inspection cycles'],
  },
  {
    title: 'Drone Thermography',
    kicker: 'Thermal issue detection',
    icon: Flame,
    image: '/assets/services/drone-thermography-service.jpeg',
    description:
      'Use infrared drone imaging to uncover hidden thermal issues, overheating, insulation failures, and leak patterns before they escalate.',
    points: [
      'Infrared imaging to detect heat anomalies',
      'Identify electrical faults and overheating',
      'Detect insulation failures and leakages',
      'Applicable across multiple industries',
    ],
    benefits: ['Preventive maintenance', 'Early detection of failures', 'Reduced downtime'],
  },
  {
    title: 'Construction Inspection',
    kicker: 'Site progress intelligence',
    icon: Construction,
    image: '/assets/services/construction-service.jpeg',
    description:
      'Track construction progress with real-time aerial documentation, site mapping, and visual records for planning and compliance.',
    points: [
      'Track project progress with aerial views',
      'Generate 2D maps and 3D models',
      'Improve site planning and documentation',
      'Ensure compliance and safety',
    ],
    benefits: ['Better project management', 'Reduced delays', 'Accurate reporting'],
  },
  {
    title: 'Pipeline Inspection',
    kicker: 'Long-distance infrastructure monitoring',
    icon: ShieldCheck,
    image: '/assets/services/pipeline-service.jpeg',
    description:
      'Monitor pipelines and industrial corridors efficiently, including remote stretches where manual inspection is slow, risky, or expensive.',
    points: [
      'Inspect long-distance pipelines quickly',
      'Detect leaks, corrosion, and damage',
      'Monitor remote and inaccessible areas',
      'Reduce inspection time and risks',
    ],
    benefits: ['Enhanced safety and compliance', 'Early leak detection', 'Cost-effective operations'],
  },
];

const whyChooseUs = [
  'Advanced drone and sensor technology',
  'DGCA-compliant operations',
  'Experienced pilots and certified team',
  'High-precision data and reporting',
  'Scalable solutions for all industries',
];

function InspectionContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit}>
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        placeholder="Full Name"
        required
      />
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        type="tel"
        placeholder="Phone Number"
        required
      />
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        type="email"
        placeholder="Email Address"
      />
      <select className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10">
        <option>Windmill Inspection</option>
        <option>Solar Panel Inspection</option>
        <option>Power Line Inspection</option>
        <option>Drone Thermography</option>
        <option>Construction Inspection</option>
        <option>Pipeline Inspection</option>
        <option>Complete Inspection Package</option>
      </select>
      <textarea
        className="min-h-36 resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 md:col-span-2"
        placeholder="Tell us about your asset type, location, inspection scope, and reporting requirement..."
      />
      <div className="md:col-span-2">
        <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
          Request Inspection Demo <Send size={18} />
        </button>
        {submitted && (
          <p className="mt-4 rounded-xl bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">
            Thanks. Your inspection service request has been captured.
          </p>
        )}
      </div>
    </form>
  );
}

export default function InspectionServices() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.inspection-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.inspection-section-reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
          },
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden bg-slate-50">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-slate-950 px-6 pb-12 pt-24 text-white md:min-h-[620px]">
        <img
          src="https://images.unsplash.com/photo-1578926314433-ed0da05e0dd4?auto=format&fit=crop&w=2000&q=80"
          alt="Drone inspection service"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-slate-950/10" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="inspection-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
            <ShieldCheck size={16} /> Drone Inspection Services
          </span>
          <h1 className="inspection-hero-reveal mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:mt-7 md:text-7xl">
            Safer, faster inspections for critical infrastructure
          </h1>
          <p className="inspection-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:mt-6 md:text-xl">
            Enhance safety, reduce downtime, and improve operational efficiency with fast, accurate, and
            cost-effective drone-based inspection solutions across multiple industries.
          </p>
          <a
            href="#inspection-contact"
            className="inspection-hero-reveal mt-6 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] md:mt-8"
          >
            Schedule a Demo <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="inspection-section-reveal mb-12 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Solutions</span>
            <h2 className="text-4xl font-bold text-navy md:text-5xl">Inspection services for industrial assets</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {inspectionServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="inspection-section-reveal overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
                >
                  <div className="relative h-72 overflow-hidden bg-slate-200">
                    <img
                      src={service.image}
                      alt={service.title}
                      onError={(event) => {
                        event.currentTarget.src = '/assets/services_hero.png';
                      }}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30">
                        <Icon size={23} />
                      </div>
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">{service.kicker}</p>
                      <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>

                  <div className="p-7 md:p-9">
                    <p className="mb-7 text-base leading-relaxed text-slate-600">{service.description}</p>

                    <div className="grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-4 flex items-center gap-2 font-bold text-navy">
                          <ShieldCheck size={18} className="text-primary" /> Key Features
                        </h4>
                        <ul className="space-y-3">
                          {service.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                              <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="mb-4 flex items-center gap-2 font-bold text-navy">
                          <BarChart3 size={18} className="text-primary" /> Benefits
                        </h4>
                        <ul className="space-y-3">
                          {service.benefits.map((benefit) => (
                            <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-slate-600">
                              <CheckCircle size={16} className="mt-0.5 shrink-0 text-primary" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="inspection-section-reveal rounded-3xl bg-navy p-8 text-white md:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Why Choose Us</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white">
              Reliable inspection support from flight to final report
            </h2>
            <ul className="space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle size={18} className="shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            id="inspection-contact"
            className="inspection-section-reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10"
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Get Started</span>
            <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">Upgrade your inspection process</h2>
            <p className="mb-8 text-slate-600">
              Contact us today for a consultation or demo using cutting-edge drone inspection technology.
            </p>
            <InspectionContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
