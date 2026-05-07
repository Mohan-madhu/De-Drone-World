import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowRight, BarChart3, CheckCircle, Leaf, Send, Sprout } from 'lucide-react';

const agricultureServices = [
  {
    title: 'Fertilizer Spraying',
    kicker: 'Uniform nutrient application',
    image: '/assets/services/fertilizer-spraying.jpeg',
    description:
      'Optimize nutrient application with high-precision aerial spraying that gives crops consistent coverage while reducing waste and farmer exposure.',
    points: [
      'High-precision spraying ensures even distribution',
      'Reduces chemical wastage and environmental impact',
      'Covers large areas in minimal time',
      'Safe for farmers with no direct chemical exposure',
      'Suitable for pesticides, fertilizers, and micronutrients',
    ],
    benefits: ['Up to 30-40% chemical savings', 'Faster than manual spraying', 'Increased crop yield and health'],
  },
  {
    title: 'Seed Sowing',
    kicker: 'Fast aerial seeding',
    image: '/assets/services/seed-sowing.jpeg',
    description:
      'Deploy seeds quickly across large or difficult terrain using automated aerial dispersal designed for better coverage and reduced labor.',
    points: [
      'Automated seed dispersal over large fields',
      'Ideal for difficult terrains and inaccessible areas',
      'Uniform seed distribution improves germination rates',
      'Saves labor and field operation time',
    ],
    benefits: ['Rapid coverage of hectares in minutes', 'Reduced manpower requirement', 'Better crop establishment'],
  },
  {
    title: 'Crop Monitoring',
    kicker: 'Real-time crop intelligence',
    image: '/assets/services/fertilizer-spraying.jpeg',
    description:
      'Use aerial imaging and crop surveillance to detect field issues early, understand plant health, and support faster farm decisions.',
    points: [
      'High-resolution aerial imaging',
      'Detect pest infestations and diseases early',
      'Monitor crop growth stages',
      'Identify water stress and nutrient deficiencies',
    ],
    benefits: ['Early problem detection', 'Data-driven decision making', 'Improved farm management'],
  },
  {
    title: 'Precision Agriculture Using Drones',
    kicker: 'Data-led farm automation',
    image: '/assets/services/fertilizer-spraying.jpeg',
    description:
      'Turn field data into practical action plans with mapping, multispectral crop insights, and targeted input planning.',
    points: [
      'Field mapping and 3D terrain analysis',
      'NDVI and multispectral imaging for crop insights',
      'Variable rate application planning',
      'Integration with farm management systems',
    ],
    benefits: [
      'Maximized productivity with minimal input',
      'Cost-efficient farming practices',
      'Sustainable agriculture solutions',
    ],
  },
];

const whyChooseUs = [
  'Advanced drone technology',
  'DGCA-compliant operations',
  'Experienced pilots and technicians',
  'Fast, reliable, and scalable services',
  'Customized solutions for every farm',
];

function AgricultureContactForm() {
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
        <option>Fertilizer Spraying</option>
        <option>Seed Sowing</option>
        <option>Crop Monitoring</option>
        <option>Precision Agriculture</option>
        <option>Complete Agriculture Drone Package</option>
      </select>
      <textarea
        className="min-h-36 resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 md:col-span-2"
        placeholder="Tell us about your farm size, crop type, location, and service requirement..."
      />
      <div className="md:col-span-2">
        <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
          Request Consultation <Send size={18} />
        </button>
        {submitted && (
          <p className="mt-4 rounded-xl bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">
            Thanks. Your agriculture service request has been captured.
          </p>
        )}
      </div>
    </form>
  );
}

export default function AgricultureServices() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.agri-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.agri-section-reveal').forEach((element) => {
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
          src="/assets/services_hero.png"
          alt="Agriculture drone service"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="agri-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
            <Leaf size={16} /> Agriculture Drone Services
          </span>
          <h1 className="agri-hero-reveal mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:mt-7 md:text-7xl">
            Precision farming powered by advanced drone solutions
          </h1>
          <p className="agri-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:mt-6 md:text-xl">
            Enhance farm productivity, reduce operational costs, and make better field decisions with efficient,
            data-driven agriculture drone services built for modern farming needs.
          </p>
          <a
            href="#agri-contact"
            className="agri-hero-reveal mt-6 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] md:mt-8"
          >
            Schedule a Demo <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="agri-section-reveal mb-12 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Solutions</span>
            <h2 className="text-4xl font-bold text-navy md:text-5xl">Agriculture services for every farm operation</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {agricultureServices.map((service) => (
              <article
                key={service.title}
                className="agri-section-reveal overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-200">{service.kicker}</p>
                    <h3 className="text-3xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>

                <div className="p-7 md:p-9">
                  <p className="mb-7 text-base leading-relaxed text-slate-600">{service.description}</p>

                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h4 className="mb-4 flex items-center gap-2 font-bold text-navy">
                        <Sprout size={18} className="text-primary" /> Key Features
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="agri-section-reveal rounded-3xl bg-navy p-8 text-white md:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Why Choose Us</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white">Smart farming support from planning to field execution</h2>
            <ul className="space-y-4">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-200">
                  <CheckCircle size={18} className="shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="agri-contact" className="agri-section-reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10">
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Get Started</span>
            <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">Transform your farming with drone solutions</h2>
            <p className="mb-8 text-slate-600">
              Contact us today to schedule a demo or consultation for your agriculture drone service requirement.
            </p>
            <AgricultureContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
