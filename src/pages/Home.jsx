import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Cpu,
  Handshake,
  Images,
  Leaf,
  Map,
  MonitorSmartphone,
  Quote,
  Wrench,
  Zap,
} from 'lucide-react';
import WhatsAppButton from '../components/WhatsAppButton';

gsap.registerPlugin(ScrollTrigger);

const REACH_IMAGE_LIMIT = 40;

const certificates = [
  { src: "/assets/certs/cert1.jpg", title: "DGCA RPTO Authorization Certificate" },
  { src: "/assets/certs/cert2.jpg", title: "Udhayam Registration Certificate" },
  { src: "/assets/certs/cert3.jpg", title: "Startup India Certificate of Recognition" },
  { src: "/assets/certs/cert4.jpeg", title: "Certificate of Incorporation" },
];

const clients = [
  { name: "Startup India", src: "/assets/clients/startup-india.jpg", category: "Government & Public Ecosystem" },
  { name: "DGCA", src: "/assets/clients/dgca.jpeg", category: "Government & Public Ecosystem" },
  { name: "Startup Tamil Nadu", src: "/assets/clients/startuptn.jpeg", category: "Government & Public Ecosystem" },
  { name: "TIDCO", src: "/assets/clients/tidco.jpeg", category: "Government & Public Ecosystem" },
  { name: "TN Skill Development Corporation", src: "/assets/clients/tnskill.jpeg", category: "Government & Public Ecosystem" },
  { name: "Ministry of MSME, Govt. of India", src: "/assets/clients/ministry-of-msme-govt-of-india.jpg", category: "Government & Public Ecosystem" },
  { name: "Naan Mudhalvan", src: "/assets/clients/naan-mudhalvan.jpg", category: "Government & Public Ecosystem" },
  { name: "NABARD", src: "/assets/clients/nabard.jpg", category: "Government & Public Ecosystem" },
  { name: "MABIF", src: "/assets/clients/mabif.jpg", category: "Government & Public Ecosystem" },
  { name: "Hindusthan College of Engineering and Technology", src: "/assets/clients/hindusthan-college-of-engineering-and-technology.jpg", category: "Academic & Institutional Network" },
  { name: "PIPMATE", src: "/assets/clients/pipmate.jpeg", category: "Academic & Institutional Network" },
  { name: "ASET Group of Institutions", src: "/assets/clients/aset.jpeg", category: "Academic & Institutional Network" },
  { name: "Vaigai College of Engineering", src: "/assets/clients/vaigai-college-of-engineering.jpg", category: "Academic & Institutional Network" },
  { name: "Dhaanish Ahmed Institute of Technology", src: "/assets/clients/dhaanish-ahmed-institute-of-technology.jpg", category: "Academic & Institutional Network" },
  { name: "Nehru Institute of Engineering and Technology", src: "/assets/clients/niet-logo.jpg", category: "Academic & Institutional Network" },
  { name: "PKDAS University", src: "/assets/clients/pkdas.png", category: "Academic & Institutional Network" },
  { name: "TSAW", src: "/assets/clients/tsaw.jpg", category: "Industry & Aviation Partners" },
  { name: "Skywalk Robotics Academy", src: "/assets/clients/skywalk-robotics-academy.jpg", category: "Industry & Aviation Partners" },
  { name: "VIL Aviation", src: "/assets/clients/vil-aviation.jpg", category: "Industry & Aviation Partners" },
  { name: "Altigator", src: "/assets/clients/altigator.jpeg", category: "Industry & Aviation Partners" },
  { name: "Drone Destination", src: "/assets/clients/drone-destination.jpeg", category: "Industry & Aviation Partners" },
  { name: "Eionic", src: "/assets/clients/eionic.jpeg", category: "Industry & Aviation Partners" },
  { name: "", src: "/assets/clients/flight.jpeg", category: "Industry & Aviation Partners" },
  { name: "Magic Myna", src: "/assets/clients/magic-myna.jpeg", category: "Industry & Aviation Partners" },
  { name: "", src: "/assets/clients/new.jpeg", category: "Industry & Aviation Partners" },
];
const clientCategories = [
  'Government & Public Ecosystem',
  'Academic & Institutional Network',
  'Industry & Aviation Partners',
];


const serviceAndTrainingCards = [
  {
    category: "Service",
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
    category: "Service",
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
    category: "Service",
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
    category: "Service",
    name: "Survey & Mapping",
    subtitle: "Geospatial Intelligence",
    icon: <Map className="w-8 h-8" />,
    desc: "High-accuracy topographic surveys and 3D mapping for planning and monitoring workflows.",
    image: "/assets/services/construction-service.jpeg",
    path: "/services/survey-mapping",
    color: "#F4CE45",
    tint: "#FFF9E6",
  },
  {
    category: "Training",
    name: "Remote Pilot Course - Small",
    subtitle: "DGCA Certified",
    icon: <BadgeCheck className="w-8 h-8" />,
    desc: "A 7-day DGCA approved program for professional small category drone operations.",
    image: "/assets/training/small-training.jpeg",
    path: "/training/small-rpc",
    color: "#8B83E6",
    tint: "#F6F5FF",
  },
  {
    category: "Training",
    name: "Remote Pilot Course - Small + Medium",
    subtitle: "DGCA Certified",
    icon: <Cpu className="w-8 h-8" />,
    desc: "A complete 10-day skill progression covering small and medium class drone operation.",
    image: "/assets/training/small-and-medium-training.jpeg",
    path: "/training/small-and-medium-rpc",
    color: "#1E9FD4",
    tint: "#EAF8FE",
  },
  {
    category: "Training",
    name: "Drone Technician",
    subtitle: "6-Month Diploma Program",
    icon: <Wrench className="w-8 h-8" />,
    desc: "Professional training in drone technology, operations, assembly, mapping, and live projects.",
    image: "/assets/services/diplomo-course.jpeg",
    path: "/training/drone-technician-6-months",
    color: "#70D26B",
    tint: "#F0FBEF",
  },
  {
    category: "Training",
    name: "Build Your Own Drone",
    subtitle: "Hands-on Workshop",
    icon: <MonitorSmartphone className="w-8 h-8" />,
    desc: "Learn drone assembly, configuration, calibration, and practical flight from the ground up.",
    image: "/assets/services/workshop-build-your-own-drone.jpeg",
    path: "/training/build-your-own-drone",
    color: "#F4CE45",
    tint: "#FFF9E6",
  },
];

const realNumbers = [
  { value: 15000, suffix: '+', label: 'Students Trained' },
  { value: 80, suffix: '+', label: 'DGCA Certifications' },
  { value: 60000, suffix: '+', label: 'Flight Hours' },
  { value: 10, suffix: '+', label: 'Institutional Tie-Ups' },
  { value: 300, suffix: '+', label: 'Drone Operations Completed' },
  { value: 6, suffix: '+', label: 'States Served' },
];

const formatIndianNumber = (value) => Number(value).toLocaleString('en-IN');

const ADMISSION_REGISTER_URL = 'https://forms.gle/9SdLE62GTYY1o9Av7';

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
  const [showAdmissionPopup, setShowAdmissionPopup] = useState(false);
  const [isAdmissionVisible, setIsAdmissionVisible] = useState(false);

  useEffect(() => {
    const popupTimeout = window.setTimeout(() => {
      setShowAdmissionPopup(true);
      requestAnimationFrame(() => setIsAdmissionVisible(true));
    }, 3200);

    return () => window.clearTimeout(popupTimeout);
  }, []);

  const closeAdmissionPopup = () => {
    setIsAdmissionVisible(false);

    window.setTimeout(() => {
      setShowAdmissionPopup(false);
    }, 220);
  };

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
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out"
      });

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
          const finalValue = Number(stat.dataset.value || stat.textContent);
          gsap.from(stat, {
            scrollTrigger: {
              trigger: statsSectionRef.current,
              start: "top 85%",
            },
            textContent: 0,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            onUpdate() {
              const currentValue = Number(stat.textContent.toString().replace(/,/g, '')) || 0;
              stat.textContent = formatIndianNumber(Math.round(currentValue));
            },
            onComplete() {
              stat.textContent = formatIndianNumber(finalValue);
            },
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
        gsap.fromTo(clientCards, {
          y: 58,
          scale: 0.82,
          rotationX: -18,
          rotationY: 10,
          opacity: 0,
          filter: 'blur(8px)'
        }, {
          scrollTrigger: {
            trigger: '.clients-showcase',
            start: 'top 82%',
          },
          y: 0,
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 0.95,
          stagger: { amount: 0.65, from: 'center' },
          ease: 'back.out(1.45)'
        });

        gsap.fromTo('.client-logo-image', {
          scale: 0.72,
          opacity: 0
        }, {
          scrollTrigger: {
            trigger: '.clients-showcase',
            start: 'top 78%',
          },
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: { each: 0.055, from: 'random' },
          ease: 'elastic.out(1, 0.55)'
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
      {showAdmissionPopup && (
        <div className={`fixed inset-0 z-[1180] flex items-center justify-center bg-slate-950/70 px-4 py-6 backdrop-blur-sm transition-opacity duration-200 ${isAdmissionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`relative w-full max-w-[496px] overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_100px_rgba(15,23,42,0.4)] transition-transform duration-200 ${isAdmissionVisible ? 'scale-100' : 'scale-95'}`}>
            <button
              type="button"
              onClick={closeAdmissionPopup}
              className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100"
              aria-label="Close admissions popup"
            >
              <span className="text-2xl leading-none">×</span>
            </button>

            <div className="flex flex-col items-center gap-3 p-1 pb-4">
              <div className="relative w-full">
                <div className="relative aspect-square overflow-hidden rounded-[1.5rem] bg-slate-100 shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
                  <img
                    src="/assets/admission-open-2026-2027.png"
                    alt="Admissions open poster for 2026 to 2027"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                </div>
              </div>

              <div className="w-full max-w-sm space-y-3">
                <a
                  href={ADMISSION_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-6 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition hover:bg-primary/90"
                >
                  Register Now
                </a>
                <p className="text-center text-sm text-slate-500">
                  Opens the admissions form in a new tab.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden pt-[104px] parallax-container">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-bg h-full w-full scale-[1.08] object-cover object-center translate-x-[3%] parallax-bg"
          >
            <source src="/assets/drone_video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14">
          <div className="max-w-2xl">
            <div className="hero-reveal mb-6 inline-flex items-center gap-3 rounded-2xl border border-primary/30 bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(30,159,212,0.22)] backdrop-blur-md md:gap-4 md:px-5 md:py-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/25 md:h-12 md:w-12">
                <BadgeCheck size={28} strokeWidth={2.4} />
              </span>
              <span className="flex flex-col text-left font-sans">
                <span className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-slate-500 md:text-xs">
                  Government Recognized
                </span>
                <span className="mt-0.5 text-base font-extrabold uppercase tracking-[0.035em] text-primary md:text-xl">
                  DGCA Approved Drone Academy
                </span>
              </span>
            </div>
            <h1
              className="hero-reveal text-4xl md:text-6xl font-bold text-on-background mb-6 leading-[1.12] tracking-tight overflow-hidden"
              style={{ fontFamily: '"Manrope", sans-serif' }}
            >
              Building India’s Future Drone Workforce &amp; UAV Solutions Ecosystem
            </h1>
            <p className="hero-reveal mb-10 max-w-2xl text-lg leading-relaxed text-slate-700 font-sans md:text-xl">
              Aviation-led drone training, industrial UAV operations, mapping, inspection, logistics, and institutional partnerships across India.
            </p>
            <div className="hero-reveal flex flex-wrap gap-3"></div>
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
        <div className="w-full">
          <div ref={reachCarouselRef} className="reach-carousel-mask carousel-full-bleed reach-carousel-stage py-8 md:py-12">
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

        <div className="mx-auto max-w-7xl px-6 py-4 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <article
                key={`${cert.src}-${index}`}
                className="group cursor-zoom-in overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setHoveredCert(cert)}
              >
                <div className="aspect-square overflow-hidden bg-slate-50">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-4 border-t border-slate-100 flex items-start gap-2 h-full bg-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5"></div>
                  <p className="text-navy font-display text-sm leading-snug font-medium">{cert.title}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Fullscreen Click Overlay */}
      <div
        className={`fixed inset-0 z-[999] flex items-center justify-center transition-all duration-300 ${
          hoveredCert ? 'opacity-100 backdrop-blur-md bg-black/75 pointer-events-auto cursor-zoom-out' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setHoveredCert(null)}
      >
        {hoveredCert && (
          <div 
            className="inline-flex flex-col rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 max-h-[90vh] max-w-[90vw] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
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
      <section ref={statsSectionRef} className="border-y border-[#BDDFF0] bg-[#F7FCFE] px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="font-bold uppercase tracking-[0.14em] text-primary">Real Numbers</p>
            <h2 className="mt-2">Proven Impact Across Training and Operations</h2>
          </div>
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-[#BDDFF0] bg-white sm:grid-cols-3 lg:grid-cols-6">
            {realNumbers.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-36 flex-col items-center justify-center border-b border-r border-[#BDDFF0] px-4 py-6 text-center last:border-r-0 sm:[&:nth-last-child(-n+3)]:border-b-0 lg:border-b-0"
              >
                <span className="whitespace-nowrap font-bold text-primary font-[Space_Grotesk]">
                  <span className="stat-number" data-value={stat.value}>{formatIndianNumber(stat.value)}</span>{stat.suffix}
                </span>
                <span className="mt-2 font-semibold text-[#555555]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enterprise Solutions Section — commented out per request, keep code for later re-enable */}
      {false && (
      <section className="bg-white py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Our Services"
          icon={MonitorSmartphone}
          lines={['Create', 'real impact...']}
          color="#70D26B"
        />

        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal mx-auto mb-12 flex max-w-4xl flex-col items-center gap-5 text-center">
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 font-sans">
              Explore drone services and hands-on training programs built for real industry outcomes.
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90">
              Partner With Us <ArrowRight size={19} />
            </Link>
          </div>
        </div>

        <div className="offer-carousel-mask pb-24">
          <div className="offer-carousel-track">
            {[...serviceAndTrainingCards, ...serviceAndTrainingCards].map((item, index) => (
              <Link key={`${item.name}-${index}`} to={item.path} className="offer-card group" style={{ '--offer-tint': item.tint }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
                  <div
                    className="absolute left-5 top-5 grid h-14 w-14 place-items-center rounded-2xl text-white shadow-lg"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="absolute right-5 top-5 rounded-full bg-white/95 px-3 py-1 text-xs text-navy shadow-sm font-display">
                    {item.category}
                  </span>
                </div>
                <div className="flex h-[260px] flex-col p-6" style={{ backgroundColor: item.tint }}>
                  <h4 className="mb-3 min-h-[58px] text-2xl font-display tracking-tight text-navy">{item.name}</h4>
                  <p className="mb-3 min-h-[28px] text-sm text-primary font-display">{item.subtitle}</p>
                  <p className="line-clamp-4 text-sm leading-relaxed text-slate-600 font-sans">{item.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="h-1 w-16 rounded-full" style={{ backgroundColor: item.color }} />
                    <ArrowRight size={18} className="text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Clients Section */}
      <section className="overflow-hidden bg-white py-0">
        <HomeSectionBanner
          eyebrow="Clients & Partners"
          icon={Handshake}
          lines={['Trusted across', 'India’s drone ecosystem...']}
          color="#8B83E6"
        />

        <div className="mx-auto max-w-7xl px-6 pb-24">
          <div className="mb-10 grid items-end gap-6 border-b border-slate-200 pb-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="font-bold uppercase tracking-[0.14em] text-primary">Credibility Through Collaboration</p>
              <h2 className="mt-2">Connected With Institutions That Shape Skills, Industry, and Innovation</h2>
              <p className="mt-4 text-slate-600">
                Our growing ecosystem spans public initiatives, educational institutions, aviation specialists, and technology collaborators.
              </p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <div className="rounded-2xl bg-navy px-5 py-4 text-center text-white">
                <span className="block font-bold text-primary">13</span>
                <span className="block text-slate-300">Organizations</span>
              </div>
              <div className="rounded-2xl bg-primary px-5 py-4 text-center text-white">
                <span className="block font-bold">3</span>
                <span className="block text-white/85">Ecosystems</span>
              </div>
            </div>
          </div>

          <div className="space-y-9">
            {clientCategories.map((category, categoryIndex) => (
              <div key={category}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-bold text-white">{categoryIndex + 1}</span>
                  <h3>{category}</h3>
                  <span className="h-px flex-1 bg-slate-200" />
                </div>
                <div className={`grid gap-4 sm:grid-cols-2 ${categoryIndex === 2 ? 'lg:grid-cols-3' : 'lg:grid-cols-4'}`}>
                  {clients.filter((client) => client.category === category).map((client) => (
                    <article key={client.name} className="group flex min-h-44 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                      <div className="flex h-24 w-full items-center justify-center rounded-xl bg-slate-50 p-3 transition-colors group-hover:bg-primary/5">
                        <img
                          src={client.src}
                          alt={`${client.name} logo`}
                          className="max-h-20 max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-4 font-semibold text-navy">{client.name}</p>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:flex-row md:text-left">
            <div>
              <h3>Build an Institutional or Industry Partnership</h3>
              <p className="mt-2 text-slate-600">Collaborate on drone training, research, operations, workforce development, or technology deployment.</p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary/90">
              Partner With Us <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
