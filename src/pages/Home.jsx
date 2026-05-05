import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Bolt, Target, Cpu, CheckCircle, Construction, Map, Truck, MapPin } from 'lucide-react';
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

const altitudeHighlights = [
  {
    title: 'Training Missions',
    image: '/assets/training_hero.png',
  },
  {
    title: 'Aerial Operations',
    image: '/assets/services_hero.png',
  },
  {
    title: 'Drone Innovation',
    image: '/assets/manufacturing_hero.png',
  },
];

const Home = () => {
  const mainRef = useRef(null);
  const dgcaBannerRef = useRef(null);
  const [hoveredCert, setHoveredCert] = useState(null);
  const statsSectionRef = useRef(null);
  const testimonialsSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);

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
            <span className="hero-reveal inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-[10px] tracking-widest mb-6 uppercase">
              DGCA APPROVED DRONE ACADEMY
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-on-background mb-6 leading-[1.1] tracking-tight font-display overflow-hidden">
              {splitTextToChars("Elevate Your Future with Professional Drone Training")}
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
      <section ref={dgcaBannerRef} className="bg-primary py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-2xl bg-white/95 shadow-lg ring-2 ring-white/30 flex items-center justify-center p-2 flex-shrink-0">
            <img
              src="/assets/dgca-badge.png"
              alt="DGCA Approved RPTO badge"
              onError={(event) => {
                event.currentTarget.src = '/assets/logo.png';
              }}
              className="w-full h-full object-contain"
            />
          </div>
          {/* Text */}
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold font-[Space_Grotesk]">
              DGCA Approved RPTO
            </h2>
            <p className="text-white/80 mt-1">
              Certified under Rule 39 of Drone Rules 2021 • Directorate General of Civil Aviation, Government of India
            </p>
          </div>
        </div>
      </section>

      {/* How High We Are Section */}
      <section className="bg-white py-20 px-6 section-reveal">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">Our Reach</span>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-display tracking-tight">How High We Are</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {altitudeHighlights.map((item) => (
              <article key={item.title} className="group relative h-[340px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl border border-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent"></div>
                <h3 className="absolute bottom-7 left-7 right-7 text-2xl font-bold text-white font-display tracking-tight">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-0 overflow-hidden">
        {/* Section Header — Navy Banner */}
        <div className="bg-gradient-to-r from-navy via-slate-800 to-navy py-14 px-8 mb-16 text-center section-reveal">
          <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">ABOUT US</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">HI! WE ARE...</h2>
          <p className="text-slate-300 font-sans text-base md:text-lg max-w-xl mx-auto">
            An entrepreneurial venture powered by aviation experts and passionate technocrats
          </p>
        </div>

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
                "YOU MUST BE SHAPELESS FORMLESS LIKE WATER. WATER CAN DRIP AND IT CAN CRASH."
              </p>
              <footer className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                — BRUCE LEE
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
        {/* Section Header — Navy Banner */}
        <div className="bg-gradient-to-r from-navy via-slate-800 to-navy py-14 px-8 mb-16 text-center section-reveal">
          <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">OUR</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">Vision and Mission</h2>
          <p className="text-slate-300 font-sans text-base md:text-lg max-w-xl mx-auto">
            Driving meaningful change through innovation and collaboration in drone technology
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div className="section-reveal bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop" 
                  alt="Vision" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-8 text-3xl font-bold text-white font-display tracking-tight">Vision</h3>
              </div>
              <div className="p-8 md:p-10 flex-1">
                <p className="text-lg text-slate-600 leading-relaxed font-sans">
                  To bring the potential of drones for the betterment of life in this world. We invest and innovate to transform the way drones are made and utilized to bring positive and lasting change in human lives.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="section-reveal bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500 delay-100">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Mission" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <h3 className="absolute bottom-6 left-8 text-3xl font-bold text-white font-display tracking-tight">Mission</h3>
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
        {/* Section Header — Navy Banner */}
        <div className="bg-gradient-to-r from-navy via-slate-800 to-navy py-14 px-8 mb-16 text-center section-reveal">
          <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">OUR LOCATIONS</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">Training Center</h2>
          <p className="text-slate-300 font-sans text-base md:text-lg max-w-xl mx-auto">
            State-of-the-art campus equipped for world-class drone pilot training
          </p>
        </div>

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
        {/* Section Header — Navy Banner */}
        <div className="bg-gradient-to-r from-navy via-slate-800 to-navy py-14 px-8 mb-12 text-center section-reveal">
          <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">TRUST & SAFETY</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">Our Certification</h2>
          <p className="text-slate-300 font-sans text-base md:text-lg max-w-xl mx-auto mb-8">
            DGCA Approved Drone Training Institute · Government-certified instructors & authorized RPTO
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-primary text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg shadow-primary/30">RPTO202500086</span>
            <span className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full font-bold text-sm backdrop-blur-sm">VLOS (Rotorcraft)</span>
            <span className="bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full font-bold text-sm backdrop-blur-sm">Class: Small</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8">

          {/* 2x2 Certificate Grid */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { src: "/assets/certs/cert1.jpg", title: "DGCA RPTO Authorization Certificate" },
              { src: "/assets/certs/cert2.jpg", title: "Drone Pilot Training Approval" },
              { src: "/assets/certs/cert3.jpg", title: "Civil Aviation Certification" },
              { src: "/assets/certs/cert4.jpeg", title: "DGCA Ground Training Certificate" }
            ].map((cert, index) => (
              <div
                key={index}
                className="section-reveal bg-white rounded-2xl overflow-hidden shadow-md border border-slate-100 group hover:-translate-y-1 transition-all duration-300 cursor-zoom-in"
                onMouseEnter={() => setHoveredCert(cert)}
                onMouseLeave={() => setHoveredCert(null)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.src}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="px-4 py-3 border-t border-slate-100 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                  <p className="font-bold text-navy font-display text-sm">{cert.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Infrastructure Section */}
      <section className="py-0 overflow-hidden">
        {/* Section Header — Navy Banner */}
        <div className="bg-gradient-to-r from-navy via-slate-800 to-navy py-14 px-8 mb-16 text-center section-reveal">
          <span className="font-bold text-[11px] tracking-[0.35em] text-primary uppercase font-display block mb-4">WORLD-CLASS FACILITIES</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white tracking-tight mb-4">Our Infrastructure</h2>
          <p className="text-slate-300 font-sans text-base md:text-lg max-w-xl mx-auto">
            Built for excellence — from advanced simulation labs to a live drone flying zone
          </p>
        </div>

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

      {/* Academy Section - MOVED TO TOP */}
      <section className="py-32 max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center gap-20">
        <div className="section-reveal flex-1">
          <span className="font-bold text-xs tracking-[0.3em] text-primary mb-6 block uppercase font-display">WORLD-CLASS EDUCATION</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-[1.1] font-display tracking-tighter">Training Academy: Master the Skies</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed font-sans max-w-xl">
            Our DGCA-certified training programs provide the essential Remote Pilot Certificate (RPC) required to operate drones legally in India. From ground school to advanced field flight.
          </p>
          <div className="space-y-10 mb-12">
            <div className="flex items-start gap-6 group">
              <div className="mt-1 p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <CheckCircle size={24} />
              </div>
              <div>
                <span className="font-bold text-xl block mb-2 font-display">RPC Licensing Program</span>
                <p className="text-slate-500 font-sans leading-relaxed">Official DGCA certification for Small & Medium category drones.</p>
              </div>
            </div>
            <div className="flex items-start gap-6 group">
              <div className="mt-1 p-3 bg-primary/10 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <CheckCircle size={24} />
              </div>
              <div>
                <span className="font-bold text-xl block mb-2 font-display">Hands-on Flight Mastery</span>
                <p className="text-slate-500 font-sans leading-relaxed">Practice on industrial-grade drones with real-time instructor feedback.</p>
              </div>
            </div>
          </div>
          <a href="/contact" className="inline-block bg-primary text-white px-12 py-5 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 font-display text-lg tracking-wide hover:-translate-y-1">
            Register for Batch
          </a>
        </div>
        <div className="section-reveal flex-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/5 rounded-[3rem] -z-10"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-1000"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXDG1EqGi43JAo-RUM8sVJcwRs7edkyOf6BENFyxvRC6myNZ4jSOYdkXVtKYZpQUv9sw56TWpcuct6_yClNDE75gOojWbDUavXVXyyhF2lGyvIdGmleqGB_P7xqyYtSqBMiJGTnF3QfMKlnO8cF5rvXXY-qrGJ6sCgy3UlH7MvIJFquolksn0r3k483rTIRwIa6q2Ex5oa8Griey6JIdV4r9NwPjiYcAPzDv1Z2i6CGlXKilQiL-PKMo28VE5LOFMDw83Ua9Z1heE"
              alt="Drone Academy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
          </div>
          <div className="absolute -bottom-10 -right-10 dark-glass p-10 rounded-[2.5rem] shadow-2xl text-center min-w-[240px] border-white/20">
            <div className="text-5xl font-bold text-primary mb-2 font-display tracking-tighter">5000+</div>
            <div className="text-xs font-bold tracking-[0.2em] text-white/70 uppercase font-display">CERTIFIED PILOTS</div>
          </div>
        </div>
      </section>

      {/* Innovation Section - Bento Grid */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="section-reveal mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-on-surface font-display tracking-tighter">Innovation in Flight</h2>
          <div className="h-2 w-24 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Speed */}
          <div className="section-reveal md:col-span-8 glass-card rounded-[2rem] overflow-hidden p-10 group border-white/20">
            <div className="flex flex-col lg:flex-row gap-12 h-full">
              <div className="flex-1 flex flex-col justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 floating-icon border border-primary/20">
                  <Bolt size={32} fill="currentColor" />
                </div>
                <h3 className="text-3xl font-bold mb-4 font-display">Unmatched Speed</h3>
                <p className="text-slate-600 leading-relaxed font-sans text-lg">
                  Our propulsion systems redefine limits, delivering rapid response times for critical missions and time-sensitive aerial data collection.
                </p>
              </div>
              <div className="flex-1 rounded-2xl overflow-hidden h-64 lg:h-auto shadow-2xl">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPxNSJqStxTr_l5aJvvg_7q_OM-gVPpRf8UpHr1amEIedIilnO_5QVo3XAhUaeK9NQZi9HW_-4mBab_mPOTqPdO4XlgRicPGPL762dTUR18a7ng-_gj1fcw008jmXnordu9U1dJ5GbLZFf9s-mvIvUFqvU3-AGgyDvqfmt5Y8LeASiPx4EgmiFTz7Q3x4RWU-8PnYz-eDD8jxCWPoIQisGDjPAkmzl8qaIoohrDDo5PQAd6zjjZMmMbT2r31b-uo1t7Yr_EMRIhSg"
                  alt="Drone Speed"
                />
              </div>
            </div>
          </div>

          {/* Precision */}
          <div className="section-reveal md:col-span-4 glass-card rounded-[2rem] overflow-hidden p-10 group flex flex-col border-white/20">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 floating-icon border border-primary/20">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-bold mb-4 font-display">Surgical Precision</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-sans">
              Centimeter-level accuracy through advanced GPS and RTK integration for mapping and inspection.
            </p>
            <div className="mt-auto rounded-2xl overflow-hidden h-56 shadow-2xl">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHM55ccWTNYG-3Pn0mIloX_mZ4qUhiiQXuvkNNzCBRoZB_GJ8iwkAaGfgNAQFeVMk4ySbPw9E5DANnLQx0G_fr_GqO1siSvaOsYBeZrXu81THAwRkn_kZre-WESyp2TJeyR4SmcMm4HC44Lf8ioHii5fvD7DpOwQWrNvJrVwXHeliWB6zjvbiRoQN2l5qrA_JY16JFzeHiYgMVxlGI7rt4cPSY2eAhE4NtWWH3hgdCiv2IJfIzrBzkfJduBbLk4GEMv6OsuuvrWjA"
                alt="Precision Hover"
              />
            </div>
          </div>

          {/* Autonomy */}
          <div className="section-reveal md:col-span-12 glass-card rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between group gap-12 border-white/20">
            <div className="max-w-xl">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary floating-icon border border-primary/20">
                  <Cpu size={28} />
                </div>
                <h3 className="text-3xl font-bold font-display">Intelligent Autonomy</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-sans text-lg">
                AI-driven obstacle avoidance and path planning enable drones to operate safely in complex environments without human intervention.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="px-8 py-3 bg-primary/10 rounded-full border border-primary/20 text-xs font-bold tracking-[0.2em] text-primary uppercase font-display">PATHFINDER V2</div>
              <div className="px-8 py-3 bg-primary/10 rounded-full border border-primary/20 text-xs font-bold tracking-[0.2em] text-primary uppercase font-display">AI-CHIP INTEGRATED</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B — Stats Strip */}
      <section ref={statsSectionRef} className="bg-white border-y border-[#BDDFF0] py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-[#BDDFF0]">
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-4xl font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">500</span>+
            </span>
            <span className="text-sm text-[#555555] mt-1">Pilots Trained</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-4xl font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">7</span> Days
            </span>
            <span className="text-sm text-[#555555] mt-1">Training Duration</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-4xl font-bold text-primary font-[Space_Grotesk]">
              <span className="stat-number">10</span> Years
            </span>
            <span className="text-sm text-[#555555] mt-1">License Validity</span>
          </div>
          <div className="flex flex-col items-center text-center px-4">
            <span className="text-4xl font-bold text-primary font-[Space_Grotesk]">
              ₹<span className="stat-number">1</span> Lakh
            </span>
            <span className="text-sm text-[#555555] mt-1">Monthly Earning Potential</span>
          </div>
        </div>
      </section>

      {/* SECTION C — Student Testimonials */}
      <section ref={testimonialsSectionRef} className="bg-[#F0FAFF] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center font-[Space_Grotesk] mb-2">
            Success Stories from Our Pilots
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-center text-[#555555] mb-12">Real students. Real results.</p>

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

      {/* SECTION D — Photo Gallery (6 images) */}
      <section ref={gallerySectionRef} className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-navy text-center font-[Space_Grotesk] mb-10">
            Training in Action
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <img
              src="https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Drone flying against blue sky with camera"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
            <img
              src="https://images.pexels.com/photos/4355183/pexels-photo-4355183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Drone camera across open sky"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
            <img
              src="https://images.pexels.com/photos/997122/pexels-photo-997122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Worm eye view of quadcopter drone"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
            <img
              src="https://images.pexels.com/photos/67699/pexels-photo-67699.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Black and white quadcopter drone in sky"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
            <img
              src="https://images.pexels.com/photos/8459566/pexels-photo-8459566.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Drone flying with palm trees backdrop"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
            <img
              src="https://images.pexels.com/photos/8459526/pexels-photo-8459526.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Drone camera aerial view blue sky"
              className="gallery-item w-full h-full object-cover rounded-xl aspect-video"
            />
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="bg-slate-50 py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-on-surface font-display tracking-tighter">Our Enterprise Fleet</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mt-8 font-sans leading-relaxed">
              Precision-engineered hardware designed for diverse mission profiles, from cinematic production to thermal industrial inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "AeroGuardian X1",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK78P6BOnAzwTzS2brybHPRSzQ746PEXv5zNwmwQpe_YVIOWmNcV0Om7IRHc9OkoTllUXveiPBgoRwbCaeEwj6LSW2kmcbpnp24I9Xw5V81xvcdi59ZdIN9lqh0jKosk7YAJw5btz85ua17Stw5Xy3sDNYAHn9AOt9VPJfBdVKDJKTgKVTOcBAX_HHJA3SmqBmiJ9L-SVFb9_ebZezcHj-cGjVFwNIRgvyRMqStgkGQ5sm3NlHGCpBJSzxa_jJnCpV4rrMMf-WBKQ",
                specs: "45 MIN FLIGHT • 8K THERMAL",
                desc: "The ultimate tool for industrial inspections and long-range surveillance missions.",
                badge: "BEST SELLER"
              },
              {
                name: "SwiftCore Nano",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvA1hWOVoQEs_Gck2gGLw5gSvNk7d3-ZZz0AiXLAs__P4qsFC8BZFOTRSospghjgsXzUPg0ZwgkrI2f3BcRMCkn2bo-DbguwlW_ZXMVOUmTHkueg5CDYJ743Qip_aUOZXdsH-HenZ489Cf7kxLJmIa6lJVE-rt_0QJXzy2pUQQmOfDHPIS7Ste-iXdS5ctfaVZUDlGlaq3jXqY_-68tkbTU-4CFcJUmf6T6ttwVUGzQfMJyU4YbsRc0DrvsBwntap6aaMaf6ETkAg",
                specs: "15 MIN FLIGHT • ULTRA AGILE",
                desc: "Engineered for tight indoor spaces and high-speed tactical reconnaissance."
              },
              {
                name: "Atlas Carrier V3",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBwerRI6tiuoLteywf0imoiW5i82ApD-_8nL3Os1kQ19mwKqThWasf123T-mhhBDRRhp1GeZh3OQRiOPUdJfrh3dqZXHBaeZXJzbsgcEtBZdbQpPngGrZpE3yJnn0E5sX70igVg1z-osVuSKZtdEBpKai5Asrk0U648Tp8Wg00gIMzxolvEVASHKodpRBSsMQUWA0qmNyIIFbtIxueAMjnJa5c-F4J1CordMytAmKcWiB5sRky38DdAL7qp9xNyBF4KWDqZ9a4Hm8",
                specs: "30 MIN FLIGHT • 20KG PAYLOAD",
                desc: "Designed for heavy payloads and agricultural precision spraying applications.",
                badge: "HEAVY LIFT"
              }
            ].map((drone, index) => (
              <div key={index} className="section-reveal bg-white rounded-[2rem] p-10 border border-slate-200 hover:border-primary/40 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative mb-10 rounded-2xl overflow-hidden bg-slate-50 aspect-square flex items-center justify-center p-12">
                  <img className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-1000" src={drone.img} alt={drone.name} />
                  {drone.badge && (
                    <div className="absolute top-6 right-6 bg-primary text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] shadow-lg shadow-primary/20">{drone.badge}</div>
                  )}
                </div>
                <h4 className="text-3xl font-bold mb-4 font-display">{drone.name}</h4>
                <div className="text-xs font-bold tracking-[0.1em] text-primary mb-6 bg-primary/5 inline-block px-4 py-1 rounded-lg">{drone.specs}</div>
                <p className="text-slate-500 mb-10 leading-relaxed font-sans">{drone.desc}</p>
                <button className="w-full py-5 rounded-2xl border-2 border-slate-100 text-slate-900 font-bold hover:bg-primary hover:border-primary hover:text-white transition-all duration-300">
                  Technical Specs
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enterprise Solutions Section */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display tracking-tight">Enterprise Solutions</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-sans">
                We don't just provide drones; we provide end-to-end aerial intelligence strategies that transform businesses.
              </p>
            </div>
            <a href="/services" className="text-white border-b-2 border-white/20 hover:border-primary hover:text-primary transition-all font-bold py-2 font-display tracking-wider uppercase text-xs">
              See all services
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Industrial Inspection",
                icon: <Construction className="w-8 h-8" />,
                desc: "High-res thermal imaging for solar farms, cell towers, and energy grids.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSGh_b64d1qjcvTuq38ziE2DwhyvYr5rZqpguYjRsYGSP3MqueJFraFeVzFbQC3e0oNLnAnR2ZptPLhTWMv2eUcCaMAFdtCK1c4L-LrDHztu_FocgrFD2AdVtQ55d8NUQ8HaR6MshQVhcJl1OCI7Cqb9ELgKMfu1EDEuHk-r-qE7dGTKGMrpFBv6CB6bh9LiADhTr3P7IT9UbdgJ-C4M9Lh3o0t9lGW2LYFFGNGew2YeXrN-kbbsJWVO2tH4bJZDwRfQGiXSjjtcw"
              },
              {
                name: "Smart Agriculture",
                icon: <Bolt className="w-8 h-8" />,
                desc: "Precision spraying and multispectral crop health monitoring.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwMUKn5Yioj31PXRmF9pQFlpaozx1JlnooFf5aRNl9m22RTuCUnbRq0IZQWoQ2mR8ilp8Qv1j70R44HJqyYBcO8OylsCjCGsAaOVcip4xjiEOZxsCLl0epXoFU2OVa2N0Q_n5-arHJMP--laeKjwA5heaidwnqGcEmQ52SLU9UaClk7RfTIRvbWvG7NqeKPS1kXK6XcEg3_J4v3VpWRUo_R1_16Ma9S28BmMI5Gz0URBC_950MXzMSRViHu_sXj5sW0D1yk1BjyFI"
              },
              {
                name: "GIS & Mapping",
                icon: <Map className="w-8 h-8" />,
                desc: "3D topographical mapping and land survey with CM-level accuracy.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKE9ajFsVc3nn9WnzhqINdmr-IWQECLQYDR3CU9U2Gxcs2l81QBrJREvxgKQSor5kbgTPu0evm5lGbXej7FA13Kk8q9hn3l1K_E5B-xd4oG7qkQlOlTa3J1tqcn2dKQR5tpliTeQRLWWgxZ7xZqz5QINXC3ggPIIzgZiD0o37LAwEFIMpSqOhzw77JPWu2Gq4S2aB44n9jwSuPba0_R9GJ6oj9lWPY908WGoV0pXprvERaBu4kFLrLE1IJYSS6b4nwbEXCzb0yd3g"
              },
              {
                name: "Delivery Logistics",
                icon: <Truck className="w-8 h-8" />,
                desc: "Next-mile autonomous delivery systems for medical and retail.",
                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK78P6BOnAzwTzS2brybHPRSzQ746PEXv5zNwmwQpe_YVIOWmNcV0Om7IRHc9OkoTllUXveiPBgoRwbCaeEwj6LSW2kmcbpnp24I9Xw5V81xvcdi59ZdIN9lqh0jKosk7YAJw5btz85ua17Stw5Xy3sDNYAHn9AOt9VPJfBdVKDJKTgKVTOcBAX_HHJA3SmqBmiJ9L-SVFb9_ebZezcHj-cGjVFwNIRgvyRMqStgkGQ5sm3NlHGCpBJSzxa_jJnCpV4rrMMf-WBKQ"
              }
            ].map((service, i) => (
              <div key={i} className="section-reveal relative overflow-hidden rounded-[2.5rem] p-10 group cursor-default transition-all duration-700 hover:-translate-y-3 border border-white/10 hover:border-primary/50 shadow-2xl h-[450px] flex flex-col justify-end">
                {/* Background Image Layer */}
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700 scale-110 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                </div>

                {/* Glass Content Layer */}
                <div className="relative z-10 backdrop-blur-xl bg-white/[0.03] border border-white/10 p-8 rounded-3xl group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500">
                  <div className="text-primary mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 font-display tracking-tight text-white group-hover:text-primary transition-colors">{service.name}</h4>
                  <p className="text-slate-300 text-sm leading-relaxed font-sans opacity-90 group-hover:opacity-100">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppButton />
    </div>
  );
};

export default Home;
