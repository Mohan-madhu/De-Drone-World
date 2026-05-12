import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero = (props) => {
  const containerRef = useRef(null);
  const bgRef = useRef(null);
  const chipRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const btnsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.to(bgRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        yPercent: 20,
        ease: "none"
      });

      // Staggered Content Animation
      gsap.from([chipRef.current, headlineRef.current, subRef.current, btnsRef.current], {
        opacity: 0, 
        y: 40, 
        duration: 0.8, 
        stagger: 0.15, 
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen overflow-hidden bg-white pt-16"
      {...props}
    >
      {/* Background Media Area */}
      <img
        ref={bgRef}
        src="https://images.pexels.com/photos/3722737/pexels-photo-3722737.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
        alt="Drone flying against clear blue sky"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ height: '120%', top: '-10%' }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

      {/* Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl">
          <div 
            ref={chipRef} 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-flux text-sm font-normal mb-6"
          >
            DGCA Approved RPTO • Direct. Devise. Deliver.
          </div>
          
          <h1 
            ref={headlineRef} 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy font-[Space_Grotesk] leading-tight mb-6 max-w-2xl"
          >
            Become a DGCA Certified Drone Pilot
          </h1>
          
          <p 
            ref={subRef} 
            className="text-lg md:text-xl text-[#555555] mb-8 max-w-xl leading-relaxed"
          >
            India's premier remote pilot training — 7-day program, hands-on flying, lifetime career opportunities.
          </p>
          
          <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-opacity-90 transition-all shadow-lg shadow-primary/25 text-center"
            >
              Enroll Now
            </Link>
            <Link 
              to="/training" 
              className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary/10 transition-all text-center"
            >
              View Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
