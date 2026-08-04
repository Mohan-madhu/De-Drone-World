import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, FileSignature, GraduationCap, Megaphone, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const placeholderPhotos = Array.from(
  { length: 7 },
  (_, index) => `/assets/how-high-we-are/${String(index + 1).padStart(2, '0')}.jpeg`
);

const gallerySections = [
  {
    id: 'mou-signing',
    title: 'MOU Signing',
    icon: FileSignature,
    description: 'Institutional and industry partnership agreements signed by De Drone World.',
    photos: placeholderPhotos,
  },
  {
    id: 'dgca-rpc-training',
    title: 'DGCA - RPC Training',
    icon: GraduationCap,
    description: 'DGCA-approved Remote Pilot Certificate training sessions and flight practice.',
    photos: placeholderPhotos,
  },
  {
    id: 'student-training-workshops',
    title: 'Student Training Workshops',
    icon: Wrench,
    description: 'Hands-on drone building and skill workshops conducted for students.',
    photos: placeholderPhotos,
  },
  {
    id: 'outreach-events',
    title: 'Outreach Events',
    icon: Megaphone,
    description: 'Community outreach, demonstrations, and public awareness drone events.',
    photos: placeholderPhotos,
  },
];

export default function Gallery() {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.gallery-hero-reveal', {
        y: 44,
        opacity: 0,
        duration: 1,
        stagger: 0.16,
        ease: 'power3.out',
      });

      gsap.utils.toArray('.gallery-section-reveal').forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 88%',
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden bg-slate-50 pt-16">
      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
        <img
          src="/assets/home_hero.png"
          alt="De Drone World gallery"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/30" />

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <span className="gallery-hero-reveal inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-2 text-xs font-bold tracking-[0.24em] text-blue-200">
            <Camera size={16} /> Gallery
          </span>
          <h1 className="gallery-hero-reveal mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Moments From the De Drone World Journey
          </h1>
          <p className="gallery-hero-reveal mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            Partnerships, training, workshops, and outreach — captured across our campus and field operations.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-16">
        {gallerySections.map((section) => {
          const Icon = section.icon;

          return (
            <section key={section.id} id={section.id} className="gallery-section-reveal scroll-mt-24">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-navy md:text-3xl">{section.title}</h2>
                  <p className="mt-1 text-sm text-slate-600 md:text-base">{section.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {section.photos.map((photo, index) => (
                  <div
                    key={`${section.id}-${photo}-${index}`}
                    className="group aspect-square overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-sm"
                  >
                    <img
                      src={photo}
                      alt={`${section.title} photo ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
