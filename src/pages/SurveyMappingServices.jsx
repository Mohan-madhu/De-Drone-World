import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  CheckCircle,
  Cuboid,
  Map,
  MapPinned,
  Send,
} from 'lucide-react';

const surveyServices = [
  {
    title: 'Land Surveying',
    kicker: 'Fast land data collection',
    icon: MapPinned,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
    description:
      'Collect accurate land data quickly with high-resolution maps, elevation outputs, and GPS-enabled measurements for land parcels of any size.',
    points: [
      'High-resolution orthomosaic maps',
      'GPS-enabled precise measurements',
      'Contour mapping and elevation data',
      'Suitable for large and small land parcels',
    ],
    benefits: ['Faster than traditional surveying', 'High accuracy and reliability', 'Reduced manpower and cost'],
  },
  {
    title: 'Construction & Infrastructure Mapping',
    kicker: 'Smart project mapping',
    icon: Building2,
    image: '/assets/services/construction-service.jpeg',
    description:
      'Improve construction visibility with aerial maps, models, progress tracking, and accurate material volume calculations.',
    points: [
      'Track project progress with aerial mapping',
      'Generate 2D maps and 3D models',
      'Volume calculations for materials',
      'Improve planning and site management',
    ],
    benefits: ['Better project monitoring', 'Accurate reporting and documentation', 'Reduced delays and errors'],
  },
  {
    title: '3D Mapping & Modeling',
    kicker: 'Detailed spatial visualization',
    icon: Cuboid,
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80',
    description:
      'Turn aerial datasets into detailed 3D models, point clouds, and terrain outputs for planning, visualization, and analysis.',
    points: [
      'Photogrammetry-based 3D reconstruction',
      'Digital Surface Models (DSM) & Digital Terrain Models (DTM)',
      'Point cloud data generation',
      'High-detail visualization for planning',
    ],
    benefits: ['Enhanced project visualization', 'Accurate measurements and analysis', 'Better decision-making'],
  },
  {
    title: 'GIS & Data Analysis',
    kicker: 'Actionable aerial intelligence',
    icon: BarChart3,
    image:
      'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80',
    description:
      'Convert aerial mapping outputs into usable GIS layers, reports, and insights that support planning and operational decisions.',
    points: [
      'GIS-based mapping and analysis',
      'Layered data visualization',
      'Integration with existing systems',
      'Custom reports and insights',
    ],
    benefits: ['Data-driven planning', 'Improved accuracy in decisions', 'Efficient resource management'],
  },
  {
    title: 'Mining & Stockpile Analysis',
    kicker: 'Precise site measurement',
    icon: Boxes,
    image:
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1400&q=80',
    description:
      'Support mining and industrial operations with stockpile measurement, site monitoring, and safer aerial inspection workflows.',
    points: [
      'Stockpile volume calculations',
      'Site mapping and monitoring',
      'Safety inspection and analysis',
      'Regular progress tracking',
    ],
    benefits: ['Accurate volume estimation', 'Reduced manual risk', 'Improved operational efficiency'],
  },
];

const whyChooseUs = [
  'High-precision drone mapping technology',
  'DGCA-compliant operations',
  'Experienced survey and GIS team',
  'Fast data processing and delivery',
  'Customized solutions for every project',
];

function SurveyContactForm() {
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
        <option>Land Surveying</option>
        <option>Construction & Infrastructure Mapping</option>
        <option>3D Mapping & Modeling</option>
        <option>GIS & Data Analysis</option>
        <option>Mining & Stockpile Analysis</option>
        <option>Complete Survey & Mapping Package</option>
      </select>
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        placeholder="Project Location"
      />
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        placeholder="Approx. Area / Site Size"
      />
      <textarea
        className="min-h-36 resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 md:col-span-2"
        placeholder="Tell us about your project type, required outputs, timeline, and survey scope..."
      />
      <div className="md:col-span-2">
        <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
          Request Project Quote <Send size={18} />
        </button>
        {submitted && (
          <p className="mt-4 rounded-xl bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">
            Thanks. Your survey and mapping request has been captured.
          </p>
        )}
      </div>
    </form>
  );
}

export default function SurveyMappingServices() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.survey-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.survey-section-reveal').forEach((element) => {
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
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=2000&q=80"
          alt="Survey and 3D mapping services"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="survey-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
            <Map size={16} /> Survey & 3D Mapping Services
          </span>
          <h1 className="survey-hero-reveal mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:mt-7 md:text-7xl">
            High-precision aerial data for smarter projects
          </h1>
          <p className="survey-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:mt-6 md:text-xl">
            Transform your projects with accurate, fast, and cost-effective drone-based surveying for
            infrastructure, land development, mining, construction, and industrial applications.
          </p>
          <a
            href="#survey-contact"
            className="survey-hero-reveal mt-6 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] md:mt-8"
          >
            Get Project Quote <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="survey-section-reveal mb-12 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Mapping Solutions</span>
            <h2 className="text-4xl font-bold text-navy md:text-5xl">Survey outputs built for planning, analysis, and reporting</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {surveyServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="survey-section-reveal overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
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
                          <BadgeCheck size={18} className="text-primary" /> Key Features
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
          <div className="survey-section-reveal rounded-3xl bg-navy p-8 text-white md:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Why Choose Us</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white">
              Drone mapping support from field capture to final deliverables
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
            id="survey-contact"
            className="survey-section-reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10"
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Get Started</span>
            <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">Upgrade your surveying workflow</h2>
            <p className="mb-8 text-slate-600">
              Contact us today for a consultation or project quote for advanced drone mapping solutions.
            </p>
            <SurveyContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
