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
  Wrench,
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
  { name: "Startup India", src: "/assets/clients/startup-india.jpg", category: "Government & Public Ecosystem" },
  { name: "Ministry of MSME, Govt. of India", src: "/assets/clients/ministry-of-msme-govt-of-india.jpg", category: "Government & Public Ecosystem" },
  { name: "Naan Mudhalvan", src: "/assets/clients/naan-mudhalvan.jpg", category: "Government & Public Ecosystem" },
  { name: "NABARD", src: "/assets/clients/nabard.jpg", category: "Government & Public Ecosystem" },
  { name: "MABIF", src: "/assets/clients/mabif.jpg", category: "Academic & Institutional Network" },
  { name: "Hindusthan College of Engineering and Technology", src: "/assets/clients/hindusthan-college-of-engineering-and-technology.jpg", category: "Academic & Institutional Network" },
  { name: "Vaigai College of Engineering", src: "/assets/clients/vaigai-college-of-engineering.jpg", category: "Academic & Institutional Network" },
  { name: "Dhaanish Ahmed Institute of Technology", src: "/assets/clients/dhaanish-ahmed-institute-of-technology.jpg", category: "Academic & Institutional Network" },
  { name: "TSAW", src: "/assets/clients/tsaw.jpg", category: "Industry & Aviation Partners" },
  { name: "Skywalk Robotics Academy", src: "/assets/clients/skywalk-robotics-academy.jpg", category: "Industry & Aviation Partners" },
  { name: "VIL Aviation", src: "/assets/clients/vil-aviation.jpg", category: "Industry & Aviation Partners" },
];

const clientCategories = [
  'Government & Public Ecosystem',
  'Academic & Institutional Network',
  'Industry & Aviation Partners',
];

const reviews = [
  {
    name: "George Kamini",
    meta: "3 months ago",
    text: "Hi everyone go ahead and got drone certification from user friendly De drone world one the best training center in Tamilnadu. User friendly.",
  },
  {
    name: "Rahul Raj",
    meta: "10 months ago",
    text: "DE Drone World is an outstanding destination for drone enthusiasts, whether you're a beginner or a seasoned professional.",
  },
  {
    name: "Monish Dharan",
    meta: "4 months ago",
    text: "I had an excellent experience with this company. Their team is highly professional, responsive, and committed to delivering quality results.",
  },
  {
    name: "Swetha",
    meta: "4 months ago",
    text: "It is very useful to learn about drone technology. DE Drone World teaches with clear explanation and cleared all doubts from survey class.",
  },
  {
    name: "Dharini Jayaraj",
    meta: "4 months ago",
    text: "I attended a workshop on drone survey in De Drone World Solutions. It is a good place to gain knowledge about drones.",
  },
  {
    name: "Bhavavijayan",
    meta: "4 months ago",
    text: "I really enjoyed the drone survey workshop and all the information presented was relevant and important.",
  },
  {
    name: "Hari Krish",
    meta: "9 months ago",
    text: "I had an excellent experience in DE Drone World as a student of HICET. Their seminar was well explained and practical oriented.",
  },
  {
    name: "Vandhinika Senthilkumar",
    meta: "10 months ago",
    text: "I had a great learning experience interacting with Dedrone World Pvt Ltd as a student. The team was knowledgeable and the drone technology was impressive.",
  },
  {
    name: "Yamini Janardhanan",
    meta: "10 months ago",
    text: "Flying a drone for the first time was a new experience, and I learned a lot about how drones work from the one-day workshop.",
  },
  {
    name: "Karthikeyan K",
    meta: "5 months ago",
    text: "DE Drone World cleared my basic doubts about drones, and I enjoyed using their simulator.",
  },
  {
    name: "Apoorna Devaraj",
    meta: "5 months ago",
    text: "It was an excellent class to attend and I learned a lot in this class.",
  },
  {
    name: "Saravana Velu",
    meta: "10 months ago",
    text: "Best place to learn about drones. Great environment.",
  },
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
  { value: 100, suffix: '+', label: 'DGCA Certifications' },
  { value: 12000, suffix: '+', label: 'Flight Hours' },
  { value: 10, suffix: '+', label: 'Institutional Tie-Ups' },
  { value: 1000, suffix: '+', label: 'Drone Operations Completed' },
  { value: 15, suffix: '+', label: 'States Served' },
];

const leadershipTeam = [
  {
    name: 'Capt. Arjun Rao',
    role: 'Founder & Chief Executive Officer',
    image: '/assets/leadership/founder-aviation-mock.png',
    experience: '20+ years in military aviation and flight operations',
    credentials: ['Former Defence Aviation Officer', 'DGCA aviation ecosystem specialist'],
    achievement: 'Led multi-region aviation training and operational readiness programs.',
    vision: 'Build a trusted national bridge between aviation discipline, drone careers, and industrial UAV adoption.',
  },
  {
    name: 'Dr. Meera Nair',
    role: 'Co-Founder & Chief Technology Officer',
    image: '/assets/leadership/founder-technology-mock.png',
    experience: '15+ years in aerospace systems and UAV engineering',
    credentials: ['Aerospace Systems Specialist', 'UAV platform and payload integration lead'],
    achievement: 'Directed the development of field-ready drone systems and technical training frameworks.',
    vision: 'Make safe, indigenous drone technology accessible to institutions, industries, and emerging professionals.',
  },
  {
    name: 'Vikram Iyer',
    role: 'Co-Founder & Director of Operations',
    image: '/assets/leadership/founder-operations-mock.png',
    experience: '12+ years in UAV missions and enterprise deployment',
    credentials: ['Certified Remote Pilot', 'Survey, inspection, and field operations leader'],
    achievement: 'Planned and delivered complex UAV missions across infrastructure and geospatial applications.',
    vision: 'Set a measurable standard for safe, scalable, and outcome-driven drone operations across India.',
  },
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
            <div className="hero-reveal flex flex-wrap gap-3">
              <Link to="/training" className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary/90">
                Apply for DGCA Training
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="rounded-xl border border-navy/20 bg-white/90 px-6 py-3.5 font-bold text-navy shadow-sm backdrop-blur-md transition-all hover:border-primary hover:text-primary">
                Partner With Us
              </Link>
              <Link to="/services" className="rounded-xl border border-navy/20 bg-white/55 px-6 py-3.5 font-bold text-navy backdrop-blur-md transition-all hover:border-primary hover:bg-white hover:text-primary">
                Explore Drone Services
              </Link>
            </div>
            <div className="hero-reveal mt-6 flex max-w-xl items-center gap-4 rounded-2xl border border-white/70 bg-white/75 px-4 py-3 shadow-lg backdrop-blur-md">
              <div className="flex -space-x-2">
                {leadershipTeam.map((leader) => (
                  <img
                    key={leader.name}
                    src={leader.image}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    style={{ objectPosition: 'center 35%' }}
                  />
                ))}
              </div>
              <div>
                <p className="font-bold text-navy">Led by aviation, defence &amp; UAV professionals</p>
                <p className="text-slate-600">Leadership profiles below are temporary mock content.</p>
              </div>
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

      {/* Founder Leadership — temporary mock content */}
      <section className="bg-[#F4FAFD] px-6 py-16 section-reveal">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 font-bold uppercase tracking-[0.12em] text-amber-800">
              Mock Leadership Content — Replace Before Publishing
            </span>
            <p className="mt-5 font-bold uppercase tracking-[0.14em] text-primary">Founder Leadership</p>
            <h2 className="mt-2">Aviation Discipline. Operational Experience. Industry Vision.</h2>
            <p className="mt-4 text-slate-600">
              A leadership team built around defence credibility, technical depth, and real-world UAV execution.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {leadershipTeam.map((leader) => (
              <article key={leader.name} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_45px_rgba(26,42,58,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_26px_65px_rgba(30,159,212,0.2)]">
                <div className="relative h-80 overflow-hidden bg-slate-200">
                  <img
                    src={leader.image}
                    alt={`Temporary mock portrait for ${leader.name}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: 'center 35%' }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent opacity-50 transition-opacity duration-500 group-hover:opacity-20" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute left-4 top-4 rounded-full bg-amber-100 px-3 py-1 font-bold uppercase text-amber-800 shadow-sm">Mock Profile</span>
                </div>
                <div className="p-6">
                  <h3>{leader.name}</h3>
                  <p className="mt-1 font-bold text-primary">{leader.role}</p>
                  <p className="mt-4 border-l-2 border-primary pl-4 font-semibold text-slate-700">{leader.experience}</p>

                  <div className="mt-5 space-y-3">
                    {leader.credentials.map((credential) => (
                      <div key={credential} className="flex items-start gap-3 text-slate-600">
                        <BadgeCheck size={20} className="mt-0.5 shrink-0 text-primary" />
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="font-bold text-navy">Operational achievement</p>
                    <p className="mt-2 text-slate-600">{leader.achievement}</p>
                  </div>
                  <div className="mt-5 rounded-2xl bg-primary/5 p-4">
                    <p className="font-bold text-primary">Industry vision</p>
                    <p className="mt-2 text-slate-600">{leader.vision}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-navy p-6 text-center text-white md:flex-row md:text-left">
            <div>
              <h3 className="text-white">Build With an Aviation-Led Drone Partner</h3>
              <p className="mt-2 text-slate-300">Discuss institutional training, UAV operations, technology programs, or strategic partnerships.</p>
            </div>
            <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary/90">
              Partner With Us <ArrowRight size={19} />
            </Link>
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
            <div className="mb-8 rounded-r-2xl border-l-4 border-primary bg-slate-50 px-6 py-5">
              <p className="font-bold uppercase tracking-[0.12em] text-primary">One Integrated Drone Ecosystem</p>
              <h2 className="mt-2 text-navy">Training. Operations. Industry Partnerships.</h2>
              <p className="mt-3 text-slate-600">
                We combine aviation discipline, DGCA-approved pilot development, field-ready UAV services, and institutional collaboration under one organization.
              </p>
            </div>

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

        <div className="reach-carousel-mask carousel-full-bleed reach-carousel-stage py-4 md:py-8">
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
                  <span className="stat-number">{stat.value}</span>{stat.suffix}
                </span>
                <span className="mt-2 font-semibold text-[#555555]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C — Student Testimonials */}
      <section ref={testimonialsSectionRef} className="bg-[#F0FAFF] py-0 overflow-hidden">
        <HomeSectionBanner
          eyebrow="Google Reviews"
          icon={Quote}
          lines={['Voices', 'from learners...']}
          color="#58BFE0"
        />

        <div className="mx-auto pb-20">
          <div className="review-carousel-mask carousel-full-bleed">
            <div className="review-carousel-track">
              {[...reviews, ...reviews].map((review, index) => (
                <article key={`${review.name}-${index}`} className="testimonial-card review-card">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-lg text-white font-display">
                      {review.name
                        .split(' ')
                        .map((part) => part[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xs text-navy font-display sm:text-sm">{review.name}</h3>
                      <p className="text-xs text-slate-500 font-sans">{review.meta}</p>
                    </div>
                  </div>
                  <div className="mb-4 text-lg text-primary">★★★★★</div>
                  <p className="text-sm italic leading-relaxed text-[#555555] font-sans">"{review.text}"</p>
                </article>
              ))}
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

        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal mx-auto mb-12 flex max-w-4xl flex-col items-center gap-5 text-center">
            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 font-sans">
              Explore drone services and hands-on training programs built for real industry outcomes.
            </p>
          </div>
        </div>

        <div className="offer-carousel-mask pb-24">
          <div className="offer-carousel-track">
            {[...serviceAndTrainingCards, ...serviceAndTrainingCards].map((item, index) => (
              <Link key={`${item.name}-${index}`} to={item.path} className="offer-card group">
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
                <div className="min-h-[230px] p-6" style={{ backgroundColor: item.tint }}>
                  <h4 className="mb-3 text-2xl font-display tracking-tight text-navy">{item.name}</h4>
                  <p className="mb-3 text-sm text-primary font-display">{item.subtitle}</p>
                  <p className="text-sm leading-relaxed text-slate-600 font-sans">{item.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="h-1 w-16 rounded-full" style={{ backgroundColor: item.color }} />
                    <ArrowRight size={18} className="text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
                <span className="block font-bold text-primary">11</span>
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
