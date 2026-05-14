import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Bolt,
  Building2,
  Camera,
  CheckCircle,
  ClipboardCheck,
  Cpu,
  Handshake,
  Images,
  Leaf,
  Map,
  MapPin,
  MonitorSmartphone,
  Newspaper,
  Quote,
  Target,
  Zap,
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

const splitTextToChars = (text) => {
  return text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className="inline-block hero-char opacity-0 translate-y-12 rotate-12">
          {char}
        </span>
      ))}
    </span>
  ));
};

const REACH_IMAGE_LIMIT = 40;

const certificates = [
  { src: "/assets/certs/cert1.jpg", title: "DGCA RPTO Authorization Certificate" },
  { src: "/assets/certs/cert2.jpg", title: "Udhayam Registration Certificate" },
  { src: "/assets/certs/cert3.jpg", title: "Startup India Certificate of Recognition" },
  { src: "/assets/certs/cert4.jpeg", title: "Certificate of Incorporation" },
];

const clients = [
  { name: "NABARD", src: "/assets/clients/nabard-logo.png", type: "Institutional Partner" },
  { name: "MSME", src: "/assets/clients/msme-1.jpeg", type: "Government Ecosystem" },
  { name: "TSAW Drones", src: "/assets/clients/TSAW-Drones.webp", type: "Drone Technology" },
  { name: "VIL", src: "/assets/clients/VIL.jpg.jpeg", type: "Enterprise Network" },
];

const preloadImage = (src) =>
  new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve({
        src,
        width: image.naturalWidth,
        height: image.naturalHeight,
      });
    };
    image.onerror = () => resolve(null);
    image.src = src;
  });

const HomeSectionBanner = ({ eyebrow, icon: Icon, lines, color }) => (
  <div className="home-section-banner mb-6 flex min-h-[170px] items-center justify-center px-6 py-6 text-center section-reveal md:mb-8 md:min-h-[210px] md:py-8" style={{ '--banner-bg': color }}>
    <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
      <div className="mb-3 flex w-full max-w-[320px] items-center justify-center gap-3">
        <span className="h-px flex-1 bg-white/90" />
        <span className="text-lg font-semibold tracking-wide text-white md:text-xl">{eyebrow}</span>
        <span className="h-px flex-1 bg-white/90" />
      </div>
      <Icon size={30} strokeWidth={1.8} className="mb-3 text-slate-700/85" />
      <h2 className="font-sans leading-[0.98] tracking-wide text-white">
        <span className="block text-xl font-semibold md:text-2xl">
          {lines[0]}
        </span>
        {lines[1] && (
          <span className="mt-1 block text-2xl font-bold md:text-4xl">
            {lines[1]}
          </span>
        )}
      </h2>
    </div>
  </div>
);

const Home = () => {
  const mainRef = useRef(null);
  const dgcaBannerRef = useRef(null);
  const reachCarouselRef = useRef(null);
  const reachTrackRef = useRef(null);
  const [hoveredCert, setHoveredCert] = useState(null);
  const [reachImages, setReachImages] = useState([]);
  const statsSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadReachImages = async () => {
      const candidates = Array.from(
        { length: REACH_IMAGE_LIMIT },
        (_, index) => `/assets/how-high-we-are/${String(index + 1).padStart(2, '0')}.jpeg`
      );

      const loaded = (await Promise.all(candidates.map(preloadImage))).filter(Boolean);
      if (!isMounted) return;

      if (loaded.length > 0) {
        setReachImages(loaded);
        return;
      }

      setReachImages([
        { src: '/assets/training_hero.png', width: 1, height: 1 },
        { src: '/assets/services_hero.png', width: 1, height: 1 },
        { src: '/assets/manufacturing_hero.png', width: 1, height: 1 },
      ]);
    };

    loadReachImages();

    return () => {
      isMounted = false;
    };
  }, []);

  const reachSlides = reachImages.length > 0 ? [...reachImages, ...reachImages] : [];

  useEffect(() => {
    if (!reachCarouselRef.current || !reachTrackRef.current || reachSlides.length === 0) return;

    const carousel = reachCarouselRef.current;
    const track = reachTrackRef.current;
    const cards = Array.from(track.querySelectorAll('[data-reach-card]'));
    if (cards.length === 0) return;

    let offset = 0;
    let lastTime = performance.now();
    let frameId;
    let trackWidth = track.scrollWidth / 2;

    const updateTrackWidth = () => {
      trackWidth = track.scrollWidth / 2;
    };

    const updateCardScale = () => {
      const carouselRect = carousel.getBoundingClientRect();
      const carouselCenter = carouselRect.left + carouselRect.width / 2;
      const maxDistance = carouselRect.width / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(carouselCenter - cardCenter);
        const progress = Math.min(distance / maxDistance, 1);
        const scale = 1.22 - progress * 0.38;
        const lift = -18 + progress * 14;

        card.style.transform = `translateY(${lift}px) scale(${scale})`;
        card.style.opacity = `${0.72 + (1 - progress) * 0.28}`;
        card.style.zIndex = `${Math.round(scale * 1000)}`;
      });
    };

    const animate = (time) => {
      const delta = time - lastTime;
      lastTime = time;

      updateTrackWidth();
      offset += delta * 0.025;

      if (trackWidth > 0 && offset >= trackWidth) {
        offset -= trackWidth;
      }

      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
      updateCardScale();
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      updateTrackWidth();
      updateCardScale();
    };

    updateTrackWidth();
    updateCardScale();
    frameId = requestAnimationFrame(animate);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reachSlides.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      
      tl.to(".hero-char", {
        y: 0,
        opacity: 1,
        rotateZ: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: "back.out(1.7)"
      })
      .from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      }, "-=0.4");

      // Parallax Backgrounds
      const parallaxes = gsap.utils.toArray('.parallax-bg');
      parallaxes.forEach((bg) => {
        gsap.to(bg, {
          scrollTrigger: {
            trigger: bg.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
          yPercent: 30,
          ease: "none"
        });
      });

      // Floating Animation for Innovation Icons
      gsap.to(".floating-icon", {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.5
      });

      // Section Reveals
      const reveals = gsap.utils.toArray('.section-reveal');
      reveals.forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power3.out"
        });
      });

      // DGCA Banner Reveal
      gsap.from(dgcaBannerRef.current, {
        scrollTrigger: {
          trigger: dgcaBannerRef.current,
          start: "top 90%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Stats Counting
      if (statsSectionRef.current) {
        const stats = statsSectionRef.current.querySelectorAll('.stat-number');
        stats.forEach((stat) => {
          gsap.from(stat, {
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: "top 85%",
            },
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 }
          });
        });
      }

      // Testimonials Stagger
      if (testimonialsSectionRef.current) {
        gsap.from(testimonialsSectionRef.current.querySelectorAll('.testimonial-card'), {
          scrollTrigger: {
            trigger: testimonialsSectionRef.current,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out"
        });
      }

      const clientCards = gsap.utils.toArray('.client-logo-card');
      if (clientCards.length > 0) {
        gsap.from(clientCards, {
          scrollTrigger: {
            trigger: '.clients-showcase',
            start: 'top 82%',
          },
          y: 52,
          rotationX: -16,
          opacity: 0,
          duration: 0.9,
          stagger: { amount: 0.45, from: 'center' },
          ease: 'back.out(1.4)'
        });

        gsap.to(clientCards, {
          y: -10,
          duration: 2.6,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          stagger: { amount: 1.2, from: 'random' }
        });

        gsap.to('.client-orbit-ring', {
          rotation: 360,
          duration: 28,
          repeat: -1,
          ease: 'none',
          transformOrigin: '50% 50%'
        });
      }

      // Gallery Reveal
      if (gallerySectionRef.current) {
        gsap.from(gallerySectionRef.current.querySelectorAll('.gallery-item'), {
          scrollTrigger: {
            trigger: gallerySectionRef.current,
            start: "top 85%",
          },
          scale: 0.95,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden pt-16 parallax-container">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-bg w-full h-full object-cover object-center md:object-[center_75%] parallax-bg transform md:scale-[1.5] md:translate-x-[22%]"
            style={{ height: '130%', top: '-15%' }}
          >
            <source src="/assets/drone_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl w-full px-8">
          <div className="max-w-2xl">
            <span className="hero-reveal inline-block px-3.5 py-1 rounded-full bg-primary/10 text-primary font-sans text-xs font-semibold tracking-wide mb-5 md:text-sm">
              Dgca Approved Drone Academy
            </span>
            <h1
              className="hero-reveal text-4xl md:text-6xl font-bold text-on-background mb-6 leading-[1.12] tracking-tight overflow-hidden"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              Elevate Your Future With Professional Drone Training
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-sans">
              Obtain your Remote Pilot License from India's premier drone academy. Technical mastery, safety excellence, and expansive career freedom.
            </p>
            <div className="hero-reveal flex flex-wrap gap-4">
              <a href="/training" className="bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 group">
                Get Your License
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="bg-white/10 backdrop-blur-md border border-slate-200 text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION A — DGCA Trust Banner */}
      <section ref={dgcaBannerRef} className="bg-primary px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 text-center md:flex-row">
          <div className="w-24 h-24 rounded-2xl bg-white/95 shadow-lg ring-2 ring-white/30 flex items-center justify-center p-2 flex-shrink-0">
            <img
              src="/assets/dgca-badge.jpeg"
              alt="DGCA Approved RPTO badge"
              onError={(event) => {
                event.currentTarget.src = '/assets/logo.png';
              }}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Text */}
          <div className="flex max-w-3xl flex-col items-center justify-center">
            <h2 className="text-white text-2xl md:text-3xl font-bold font-[Space_Grotesk]">
              DGCA Approved RPTO
            </h2>
            <p className="text-white/80 mt-1">
              Certified under Rule 39 of Drone Rules 2021 • Directorate General of Civil Aviation, Government of India
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="bg-white pb-20 section-reveal">
        <HomeSectionBanner
          eyebrow="Our Journey"
          icon={Images}
          lines={['Field', 'stories in motion...']}
          color="#5CC5E6"
        />
        <div className="max-w-7xl mx-auto px-6">
          <div ref={reachCarouselRef} className="reach-carousel-mask reach-carousel-stage py-8 md:py-12">
            <div ref={reachTrackRef} className="reach-carousel-track reach-carousel-track--gallery py-6 md:py-8">
              {reachSlides.map((image, index) => (
                <article
                  key={`${image.src}-${index}`}
                  className="reach-carousel-card group relative h-[340px] w-[280px] flex-none overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl border border-slate-100 md:w-[360px]"
                  data-reach-card
                >
                  <div className="reach-carousel-card-inner absolute inset-0 overflow-hidden rounded-[2rem] transition-transform duration-300 ease-out will-change-transform">
                    <img
                      src={image.src}
                      alt={`De Drone World field gallery moment ${index + 1}`}
                      className="h-full w-full scale-[1.04] object-cover object-center transition-transform duration-700 group-hover:scale-[1.12]"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="About Us"
          icon={Newspaper}
          lines={['Who', 'we are...']}
          color="#1E9FD4"
        />

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Video Side */}
          <div className="flex-1 relative section-reveal w-full">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-[2rem] -z-10"></div>
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000" 
              >
                <source src="/assets/drone_logo_video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 section-reveal">
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8 bg-slate-50 rounded-r-2xl">
              <p className="text-xl md:text-2xl font-medium text-slate-800 italic mb-4 font-display leading-relaxed">
                "You Must Be Shapeless Formless Like Water. Water Can Drip And It Can Crash."
              </p>
              <footer className="text-sm font-bold text-slate-500  tracking-widest">
                — Bruce Lee
              </footer>
            </blockquote>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-sans">
              De Drone world is an entrepreneurial venture with a vision to become a global company by a team of aviation experts from the Indian armed forces and enthusiastic young technocrats with strong passion towards drones.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed font-sans">
              We aim to usher-in a new era in the development, adoption and bringing-in revolutionary changes in human lives with drone technology. Our ambition is to create an all-encompassing organization – <span className="font-bold text-navy">“De Drone World”</span>.
            </p>
          </div>
        </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Vision & Mission"
          icon={ClipboardCheck}
          lines={['Think', 'beyond limits...']}
          color="#3BC8BE"
        />

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="section-reveal bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/drone_precision.png" 
                  alt="Vision" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/35 transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-sm"></div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/30 via-white/10 to-slate-950/35"></div>
                <div className="absolute inset-4 rounded-3xl border border-white/0 transition-all duration-500 group-hover:border-white/35 group-hover:shadow-[inset_0_1px_24px_rgba(255,255,255,0.22)]"></div>
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <h3 className="px-8 py-4 text-center text-3xl font-bold text-white font-display tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] md:text-4xl">
                    Vision
                  </h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1">
                <p className="text-lg text-slate-600 leading-relaxed font-sans">
                  To advance the drone field through trusted training, practical innovation, and reliable aerial solutions that help industries work smarter, safer, and faster.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="section-reveal bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500 delay-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="/assets/services_hero.png" 
                  alt="Mission" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-950/35 transition-all duration-500 group-hover:bg-white/15 group-hover:backdrop-blur-sm"></div>
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br from-white/30 via-white/10 to-slate-950/35"></div>
                <div className="absolute inset-4 rounded-3xl border border-white/0 transition-all duration-500 group-hover:border-white/35 group-hover:shadow-[inset_0_1px_24px_rgba(255,255,255,0.22)]"></div>
                <div className="absolute inset-0 flex items-center justify-center px-6">
                  <h3 className="px-8 py-4 text-center text-3xl font-bold text-white font-display tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] md:text-4xl">
                    Mission
                  </h3>
                </div>
              </div>
              <div className="p-8 md:p-10 flex-1">
                <p className="text-lg text-slate-600 leading-relaxed font-sans">
                  To be the most collaborative and trusted team in drone industry and providing leading services and innovations to meet the needs of every customer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Centers Section */}
      <section className="py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Our Locations"
          icon={MapPin}
          lines={['Train', 'with confidence...']}
          color="#70D26B"
        />

        <div className="max-w-7xl mx-auto px-8 pb-24">
          {/* Coimbatore Center */}
          <div className="section-reveal bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500 flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b border-slate-100 relative">
              {/* Central Divider Line (Desktop only) */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-slate-300 to-transparent z-20 transform -translate-x-1/2 opacity-80"></div>
              
              {/* Photo Side */}
              <div className="h-64 md:h-80 relative overflow-hidden border-b md:border-b-0 md:border-r border-slate-200">
                <img 
                  src="/assets/hicet%20top%20view.jpeg" 
                  alt="Hindustan College of Engineering" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-0"></div>
                <div className="absolute bottom-6 left-8 flex items-center gap-3 text-white z-10 drop-shadow-lg">
                  <MapPin size={28} className="text-primary" />
                  <h3 className="text-4xl font-bold font-display tracking-tight text-white">Coimbatore</h3>
                </div>
              </div>
              
              {/* Map Side */}
              <div className="h-64 md:h-80 relative bg-slate-100">
                <iframe 
                  src="https://maps.google.com/maps?q=Hindustan%20College%20of%20Engineering%20and%20Technology%20Coimbatore&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hindustan College of Engineering Map"
                  className="w-full h-full grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <p className="text-2xl font-bold text-navy mb-2">Hindustan College of Engineering</p>
                <p className="text-slate-500 font-sans text-xl">Coimbatore, Tamil Nadu</p>
              </div>
              
              <a 
                href="https://maps.app.goo.gl/N2GkBCJcN43bh3hM6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden bg-slate-50 text-navy font-bold px-8 py-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3 hover:shadow-md transition-all duration-300 whitespace-nowrap w-full md:w-auto justify-center"
              >
                <div className="absolute inset-0 bg-primary translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
                <Map size={20} className="relative z-10 text-primary group-hover/btn:text-white transition-colors duration-300" />
                <span className="relative z-10 group-hover/btn:text-white transition-colors duration-300">Navigate in Maps</span>
                <ArrowRight size={18} className="relative z-10 text-slate-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-14 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Flight Assurance"
          icon={BadgeCheck}
          lines={['Ready', 'for every flight...']}
          color="#F4CE45"
        />
        <div className="mx-auto mb-12 flex max-w-4xl flex-wrap justify-center gap-3 px-6">
          <span className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/30">RPTO202500086</span>
          <span className="bg-navy/5 border border-primary/20 text-navy px-5 py-2 rounded-full font-bold text-sm backdrop-blur-sm">VLOS (Rotorcraft)</span>
          <span className="bg-navy/5 border border-primary/20 text-navy px-5 py-2 rounded-full font-bold text-sm backdrop-blur-sm">Class: Small</span>
        </div>

        <div className="reach-carousel-mask reach-carousel-stage py-4 md:py-8">
          <div className="reach-carousel-track py-6 md:py-8">
            {[...certificates, ...certificates].map((cert, index) => (
              <article
                key={`${cert.src}-${index}`}
                className="reach-carousel-card group w-[260px] flex-none cursor-zoom-in overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1 md:w-[340px]"
                onMouseEnter={() => setHoveredCert(cert)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-50">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 border-t border-slate-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  <p className="text-navy font-display text-sm">{cert.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our Infrastructure Section */}
      <section className="py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Our Infrastructure"
          icon={Building2}
          lines={['Built', 'for excellence...']}
          color="#39C8BE"
        />

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text Content */}
            <div className="flex-1 section-reveal">
              <p className="text-lg text-slate-600 mb-6 leading-relaxed font-sans">
                De Drone World is India's premier DGCA-authorized Remote Pilot Training Organisation (RPTO), built on a foundation of cutting-edge infrastructure and hands-on excellence.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-sans">
                From advanced drone simulation labs and modern ground theory classrooms to a fully-equipped open flying zone — our facilities are designed to produce industry-ready, certified drone pilots with real-world skills.
              </p>

              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: <Cpu size={22}/>, label: "Simulation Labs" },
                  { icon: <CheckCircle size={22}/>, label: "DGCA-Certified Instructors" },
                  { icon: <Target size={22}/>, label: "Live Drone Flying Zone" },
                  { icon: <Bolt size={22}/>, label: "Industry-Grade Equipment" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 rounded-2xl p-4 border border-slate-100 group hover:border-primary/30 hover:bg-primary/5 transition-all duration-300">
                    <div className="text-primary">{item.icon}</div>
                    <span className="font-bold text-slate-700 text-sm font-display">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="flex-1 section-reveal w-full">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video bg-slate-900">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/infra.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certificate Fullscreen Hover Overlay */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 pointer-events-none ${
          hoveredCert ? 'opacity-100 backdrop-blur-md bg-black/75' : 'opacity-0'
        }`}
      >
        {hoveredCert && (
          <div className="inline-flex flex-col rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 max-h-[90vh] max-w-[90vw]">
            <img
              src={hoveredCert.src}
              alt={hoveredCert.title}
              className="block max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain"
            />
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 flex items-center gap-3 shrink-0">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0"></div>
              <p className="font-bold text-white font-display text-lg">{hoveredCert.title}</p>
            </div>
          </div>
        )}
      </div>

      {/* SECTION B — Stats Strip */}
      <section ref={statsSectionRef} className="bg-white border-y border-[#BDDFF0] py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4 divide-x divide-[#BDDFF0] md:grid-cols-4 md:gap-6">
          <div className="flex flex-col items-center text-center px-2 md:px-4">
            <span className="whitespace-nowrap text-[clamp(1.55rem,3vw,2.25rem)] font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">500</span>+
            </span>
            <span className="mt-1 whitespace-nowrap text-xs text-[#555555] sm:text-sm">Pilots Trained</span>
          </div>
          <div className="flex flex-col items-center text-center px-2 md:px-4">
            <span className="whitespace-nowrap text-[clamp(1.55rem,3vw,2.25rem)] font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">5</span> Days
            </span>
            <span className="mt-1 whitespace-nowrap text-xs text-[#555555] sm:text-sm">Training Duration</span>
          </div>
          <div className="flex flex-col items-center text-center px-2 md:px-4">
            <span className="whitespace-nowrap text-[clamp(1.55rem,3vw,2.25rem)] font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">10</span> Years
            </span>
            <span className="mt-1 whitespace-nowrap text-xs text-[#555555] sm:text-sm">License Validity</span>
          </div>
          <div className="flex flex-col items-center text-center px-1 md:px-3">
            <span
              className="font-bold text-primary font-[Space_Grotesk]"
              style={{ fontSize: 'clamp(1.2rem, 2.25vw, 2rem)', whiteSpace: 'nowrap' }}
            >
              Upto&nbsp;₹<span className="stat-number">1</span>&nbsp;Lakh
            </span>
            <span className="mt-1 whitespace-nowrap text-xs text-[#555555] sm:text-sm">Monthly Earning Potential</span>
          </div>
        </div>
      </section>

      {/* SECTION C — Student Testimonials */}
      <section ref={testimonialsSectionRef} className="bg-[#F0FAFF] py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Pilot Outcomes"
          icon={Quote}
          lines={['Career', 'paths taking off...']}
          color="#58BFE0"
        />

        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="testimonial-card bg-white rounded-2xl border border-[#BDDFF0] p-8 shadow-[0_4px_16px_rgba(30,159,212,0.10)] text-center">
              <div className="w-20 h-20 rounded-full bg-[#1E9FD4] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                RK
              </div>
              <h3 className="font-bold text-navy text-lg">Ravi Kumar</h3>
              <p className="text-primary text-sm mt-1">Now earning ₹60,000/month as drone operator</p>
              <div className="text-primary text-lg my-3">★★★★★</div>
              <p className="text-[#555555] text-sm italic leading-relaxed">
                "The 7-day training completely changed my career. The DGCA certification opened so many doors for me."
              </p>
            </div>

            <div className="testimonial-card bg-white rounded-2xl border border-[#BDDFF0] p-8 shadow-[0_4px_16px_rgba(30,159,212,0.10)] text-center">
              <div className="w-20 h-20 rounded-full bg-[#1A2A3A] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                PL
              </div>
              <h3 className="font-bold text-navy text-lg">Priya Lakshmi</h3>
              <p className="text-primary text-sm mt-1">Started her own drone business</p>
              <div className="text-primary text-lg my-3">★★★★★</div>
              <p className="text-[#555555] text-sm italic leading-relaxed">
                "The instructors were phenomenal. I went from zero knowledge to confident pilot and business owner in weeks."
              </p>
            </div>

            <div className="testimonial-card bg-white rounded-2xl border border-[#BDDFF0] p-8 shadow-[0_4px_16px_rgba(30,159,212,0.10)] text-center">
              <div className="w-20 h-20 rounded-full bg-[#1E9FD4] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 flex-shrink-0">
                AS
              </div>
              <h3 className="font-bold text-navy text-lg">Arjun Selvam</h3>
              <p className="text-primary text-sm mt-1">Agricultural drone operator TN</p>
              <div className="text-primary text-lg my-3">★★★★★</div>
              <p className="text-[#555555] text-sm italic leading-relaxed">
                "Specialized precision agriculture training gave me the exact skills needed for modern farming solutions."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="bg-white py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Our Services"
          icon={MonitorSmartphone}
          lines={['Create', 'real impact...']}
          color="#70D26B"
        />

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="section-reveal mx-auto mb-12 flex max-w-4xl flex-col items-center gap-5 text-center">
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 font-sans">
              We don't just provide drones; we provide end-to-end aerial intelligence strategies that transform businesses.
            </p>
            <a href="/services" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white font-display text-sm  tracking-wide shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary/90">
              See all services <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Agriculture",
                subtitle: "Precision Crop Management",
                icon: <Leaf className="w-8 h-8" />,
                desc: "Advanced drone solutions for crop health monitoring, precision spraying, and yield optimization.",
                image: "/assets/services/fertilizer-spraying.jpeg",
                path: "/services/agriculture",
                color: "#1E9FD4",
                tint: "#EAF8FE",
              },
              {
                name: "Events",
                subtitle: "Aerial Coverage & Documentation",
                icon: <Camera className="w-8 h-8" />,
                desc: "Professional drone videography and photography for conferences, festivals, weddings, and productions.",
                image: "/assets/services/videography.jpeg",
                path: "/services/events",
                color: "#70D26B",
                tint: "#F0FBEF",
              },
              {
                name: "Inspection",
                subtitle: "Infrastructure & Asset Monitoring",
                icon: <Zap className="w-8 h-8" />,
                desc: "Safe, efficient inspections of solar farms, wind turbines, towers, power lines, and equipment.",
                image: "/assets/services/drone-thermography-service.jpeg",
                path: "/services/inspection",
                color: "#39C8BE",
                tint: "#EAFBFA",
              },
              {
                name: "Survey & Mapping",
                subtitle: "Geospatial Intelligence",
                icon: <Map className="w-8 h-8" />,
                desc: "High-accuracy topographic surveys and 3D mapping for planning and monitoring workflows.",
                image: "/assets/services/construction-service.jpeg",
                path: "/services/survey-mapping",
                color: "#F4CE45",
                tint: "#FFF9E6",
              }
            ].map((service, i) => (
              <Link key={service.name} to={service.path} className="section-reveal group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                  <div
                    className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                </div>
                <div className="min-h-[210px] p-6" style={{ backgroundColor: service.tint }}>
                  <h4 className="mb-3 text-2xl font-display tracking-tight text-navy">{service.name}</h4>
                  <p className="mb-3 text-sm text-primary font-display">{service.subtitle}</p>
                  <p className="text-sm leading-relaxed text-slate-600 font-sans">{service.desc}</p>
                  <div className="mt-6 h-1 w-16 rounded-full" style={{ backgroundColor: service.color }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-white py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Our Clients"
          icon={Handshake}
          lines={['Trusted', 'by growing teams...']}
          color="#8B83E6"
        />

        <div className="clients-showcase mx-auto max-w-7xl px-6 pb-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#DCD9FF] bg-[#F6F5FF] px-5 py-10 shadow-2xl shadow-[#8B83E6]/10 md:px-10 md:py-14">
            <div className="client-orbit-ring pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8B83E6]/20" />
            <div className="client-orbit-ring pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#39C8BE]/25" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(139,131,230,0.20),transparent_38%),linear-gradient(90deg,rgba(255,255,255,0.86),transparent_28%,transparent_72%,rgba(255,255,255,0.86))]" />

            <div className="relative z-10 mx-auto mb-10 max-w-3xl text-center">
              <p className="text-lg leading-relaxed text-slate-600 font-sans">
                A growing network of institutions, government ecosystems, and drone technology partners working with De Drone World.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {clients.map((client) => (
                <article key={client.name} className="client-logo-card group relative min-h-[230px] overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 text-center shadow-xl shadow-[#8B83E6]/10 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#8B83E6]/20">
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-[#8B83E6] opacity-70 transition-all duration-500 group-hover:inset-x-3" />
                  <div className="mx-auto mb-5 flex h-28 items-center justify-center rounded-2xl bg-white p-4 ring-1 ring-slate-100">
                    <img
                      src={client.src}
                      alt={`${client.name} logo`}
                      className="max-h-20 max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="mb-2 text-2xl text-navy font-display">{client.name}</h3>
                  <p className="text-sm text-slate-500 font-sans">{client.type}</p>
                </article>
              ))}
            </div>

            <div className="client-logo-marquee relative z-10 mt-10 overflow-hidden rounded-2xl border border-white/70 bg-white/60 py-4">
              <div className="client-logo-marquee-track flex w-max items-center gap-10">
                {[...clients, ...clients, ...clients].map((client, index) => (
                  <div key={`${client.name}-${index}`} className="flex h-14 w-36 shrink-0 items-center justify-center opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
                    <img src={client.src} alt={`${client.name} logo`} className="max-h-10 max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
