import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle,
  Flag,
  Flower2,
  Lightbulb,
  Megaphone,
  Send,
  Sparkles,
} from 'lucide-react';

const eventServices = [
  {
    title: 'Drone Videography & Photography',
    kicker: 'Cinematic event coverage',
    icon: Camera,
    image: '/assets/services/videography.jpeg',
    description:
      'Capture stunning aerial moments with cinematic visuals, smooth movement, and professional event storytelling.',
    points: [
      'High-resolution 4K video and professional photography',
      'Cinematic shots for weddings, events, and promotions',
      'Dynamic angles and smooth aerial footage',
      'Edited deliverables with professional quality',
    ],
    benefits: ['Unique perspective and storytelling', 'Premium visual content', 'Memorable event coverage'],
  },
  {
    title: 'Drone Flower Showering',
    kicker: 'Magical aerial moments',
    icon: Flower2,
    image: '/assets/services/flower-showering.jpeg',
    description:
      'Create elegant ceremonies and unforgettable entries with controlled aerial flower petal drops.',
    points: [
      'Controlled aerial flower petal drops',
      'Perfect for weddings, temple events, and ceremonies',
      'Custom timing for grand entries and key moments',
      'Safe and precise operation',
    ],
    benefits: ['Unique and elegant experience', 'Enhances visual appeal', 'Crowd engagement'],
  },
  {
    title: 'Flag Towing',
    kicker: 'High-visibility aerial display',
    icon: Flag,
    image: '/assets/services/flag-towing.jpeg',
    description:
      'Make inaugurations, rallies, public gatherings, and brand events stand out with aerial flag displays.',
    points: [
      'Carry national, corporate, or event flags',
      'Ideal for inaugurations, rallies, and celebrations',
      'Eye-catching aerial branding',
      'Operated with safety and compliance',
    ],
    benefits: ['Strong visual impact', 'Brand promotion', 'Unique event attraction'],
  },
  {
    title: 'Drone Light Show',
    kicker: 'Next-generation sky entertainment',
    icon: Lightbulb,
    image: '/assets/services/light-show.jpeg',
    description:
      'Deliver a coordinated aerial spectacle with drone swarm light displays customized for your audience and occasion.',
    points: [
      'Coordinated drone swarm light displays',
      'Custom animations, logos, and messages',
      'Perfect alternative to fireworks',
      'Ideal for large-scale events and festivals',
    ],
    benefits: ['Eco-friendly and safe', 'Highly engaging visual spectacle', 'Customizable branding'],
  },
  {
    title: 'Drone LED Panel Advertisement',
    kicker: 'Aerial advertising innovation',
    icon: Megaphone,
    image: '/assets/services/drone-led-panel.jpeg',
    description:
      'Promote launches, campaigns, and announcements with drone-mounted LED displays that command attention.',
    points: [
      'LED display mounted on drones',
      'Live promotions, ads, and announcements',
      'Ideal for product launches and campaigns',
      'High visibility in crowded events',
    ],
    benefits: ['Unique marketing strategy', 'High audience reach', 'Modern brand positioning'],
  },
];

const whyChooseUs = [
  'Advanced drone fleet and technology',
  'DGCA-compliant and safe operations',
  'Experienced pilots and event coordination team',
  'Customizable packages for all event types',
  'Reliable execution with high-quality output',
];

function EventBookingForm() {
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
        <option>Drone Videography & Photography</option>
        <option>Drone Flower Showering</option>
        <option>Flag Towing</option>
        <option>Drone Light Show</option>
        <option>Drone LED Panel Advertisement</option>
        <option>Complete Event Drone Package</option>
      </select>
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        placeholder="Event Location"
      />
      <input
        className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
        type="date"
      />
      <textarea
        className="min-h-36 resize-none rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 md:col-span-2"
        placeholder="Tell us about your event type, expected crowd size, timing, and drone service requirement..."
      />
      <div className="md:col-span-2">
        <button className="inline-flex items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
          Book Your Event <Send size={18} />
        </button>
        {submitted && (
          <p className="mt-4 rounded-xl bg-primary/10 px-5 py-3 text-sm font-semibold text-primary">
            Thanks. Your event drone service request has been captured.
          </p>
        )}
      </div>
    </form>
  );
}

export default function EventServices() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.event-section-reveal').forEach((element) => {
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
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80"
          alt="Drone event services"
          className="absolute inset-0 h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="event-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-blue-200">
            <Sparkles size={16} /> Drone Event Services
          </span>
          <h1 className="event-hero-reveal mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white md:mt-7 md:text-7xl">
            Make your events unforgettable from the sky
          </h1>
          <p className="event-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:mt-6 md:text-xl">
            We provide creative, safe, and high-impact aerial services for weddings, corporate events,
            celebrations, launches, and public gatherings.
          </p>
          <a
            href="#event-contact"
            className="event-hero-reveal mt-6 inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white shadow-2xl shadow-primary/20 transition-transform hover:scale-[1.02] md:mt-8"
          >
            Book Your Event <ArrowRight size={19} />
          </a>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="event-section-reveal mb-12 max-w-3xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Our Experiences</span>
            <h2 className="text-4xl font-bold text-navy md:text-5xl">Creative drone services for memorable events</h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {eventServices.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="event-section-reveal overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/50"
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
                          <Sparkles size={18} className="text-primary" /> Benefits
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
          <div className="event-section-reveal rounded-3xl bg-navy p-8 text-white md:p-10">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Why Choose Us</span>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-white">
              Event-ready drone operations with creative precision
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
            id="event-contact"
            className="event-section-reveal rounded-3xl border border-slate-100 bg-white p-8 shadow-xl md:p-10"
          >
            <span className="mb-3 block text-xs font-bold uppercase tracking-[0.28em] text-primary">Book Your Event</span>
            <h2 className="mb-3 text-3xl font-bold text-navy md:text-4xl">Elevate your event with drone experiences</h2>
            <p className="mb-8 text-slate-600">
              Contact us today to plan drone coverage, flower showering, flag displays, light shows, or aerial advertising.
            </p>
            <EventBookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
