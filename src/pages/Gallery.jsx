import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, FileSignature, GraduationCap, Megaphone, Wrench, X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const mouPhotos = Array.from({ length: 7 }, (_, index) => `/assets/mou/mou-${String(index + 1).padStart(2, '0')}.jpeg`);

const dgcaPhotos = Array.from({ length: 28 }, (_, index) => `/assets/dgca/dgca-${String(index + 1).padStart(2, '0')}.jpeg`);

const studentTrainingPhotos = Array.from(
  { length: 36 },
  (_, index) => `/assets/student-training/student-training-${String(index + 1).padStart(2, '0')}.jpeg`
);

const outreachPhotos = Array.from({ length: 35 }, (_, index) => `/assets/outreach/outreach-${String(index + 1).padStart(2, '0')}.jpeg`);

const gallerySections = [
  {
    id: 'mou-signing',
    title: 'MOU Signing',
    icon: FileSignature,
    color: '#1E9FD4',
    description: 'Institutional and industry partnership agreements signed by De Drone World.',
    photos: mouPhotos,
  },
  {
    id: 'dgca-rpc-training',
    title: 'DGCA - RPC Training',
    icon: GraduationCap,
    color: '#70D26B',
    description: 'DGCA-approved Remote Pilot Certificate training sessions and flight practice.',
    photos: dgcaPhotos,
  },
  {
    id: 'student-training-workshops',
    title: 'Student Training Workshops',
    icon: Wrench,
    color: '#F4CE45',
    description: 'Hands-on drone building and skill workshops conducted for students.',
    photos: studentTrainingPhotos,
  },
  {
    id: 'outreach-events',
    title: 'Outreach Events',
    icon: Megaphone,
    color: '#8B83E6',
    description: 'Community outreach, demonstrations, and public awareness drone events.',
    photos: outreachPhotos,
  },
];

// Mix of tile spans for a masonry-style rhythm instead of a flat uniform grid
const tileSpanPattern = ['row-span-2', '', '', 'row-span-2', '', '', ''];

export default function Gallery() {
  const mainRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

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
            once: true,
          },
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
        });
      });

      // Photo tiles use a plain CSS fade-in (see .gallery-photo-card in index.css) instead
      // of a scroll-triggered GSAP tween: with 4 large grids (up to 36 tiles each) the
      // scroll-triggered version could get stuck at its initial opacity: 0 depending on
      // scroll position/anchor timing, leaving tiles invisible until clicked.
    }, mainRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightbox]);

  return (
    <div ref={mainRef} className="overflow-hidden bg-slate-50 pt-[104px]">
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

          <div className="gallery-hero-reveal mt-8 flex flex-wrap gap-3">
            {gallerySections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-all hover:border-transparent hover:text-white"
                style={{ '--pill-color': section.color }}
              >
                <span
                  className="h-2 w-2 rounded-full transition-transform group-hover:scale-125"
                  style={{ backgroundColor: section.color }}
                />
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-20 px-6 py-16">
        {gallerySections.map((section) => {
          const Icon = section.icon;

          return (
            <section key={section.id} id={section.id} className="gallery-section-reveal scroll-mt-24">
              <div className="mb-6 flex items-center gap-4">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                  style={{ backgroundColor: section.color, boxShadow: `0 12px 30px -8px ${section.color}66` }}
                >
                  <Icon size={22} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-navy md:text-3xl">{section.title}</h2>
                  <p className="mt-1 text-sm text-slate-600 md:text-base">{section.description}</p>
                </div>
                <span className="ml-auto hidden h-px flex-1 bg-slate-200 sm:block" />
              </div>

              <div className="gallery-photo-grid grid auto-rows-[140px] grid-cols-2 gap-4 sm:auto-rows-[170px] sm:grid-cols-3 lg:auto-rows-[190px] lg:grid-cols-4">
                {section.photos.map((photo, index) => (
                  <button
                    type="button"
                    key={`${section.id}-${photo}-${index}`}
                    onClick={() => setLightbox({ src: photo, title: section.title, index: index + 1 })}
                    className={`gallery-photo-card group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl ${tileSpanPattern[index % tileSpanPattern.length]}`}
                  >
                    <img
                      src={photo}
                      alt={`${section.title} photo ${index + 1}`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.15]"
                      loading="lazy"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ background: `linear-gradient(to top, ${section.color}CC, transparent 65%)` }}
                    />
                    <div className="pointer-events-none absolute inset-0 flex translate-y-3 flex-col justify-end p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white">
                        <ZoomIn size={14} /> {section.title}
                      </span>
                    </div>
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-300 group-hover:ring-white/30" />
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </main>

      {lightbox && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close preview"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-h-[85vh] max-w-[90vw] overflow-hidden rounded-3xl border-4 border-white/10 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="block max-h-[85vh] max-w-[90vw] w-auto h-auto object-contain"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
              <p className="font-bold text-white">{lightbox.title}</p>
              <p className="text-sm text-slate-300">Photo {lightbox.index}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
