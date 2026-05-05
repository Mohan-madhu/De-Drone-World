import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Leaf, Monitor, Map, Hammer, Wheat, Zap, Radio } from 'lucide-react';

const Services = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(".hero-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      });

      // Parallax Background
      gsap.to(".parallax-bg", {
        scrollTrigger: {
          trigger: ".parallax-container",
          start: "top top",
          end: "bottom top",
          scrub: true
        },
        yPercent: 20,
        ease: "none"
      });

      // SVG Progress Animation
      const progressCircles = gsap.utils.toArray('.progress-circle');
      progressCircles.forEach((circle) => {
        const target = circle.getAttribute('data-target');
        const offset = 251.2 * (1 - target / 100);
        
        gsap.to(circle, {
          scrollTrigger: {
            trigger: circle,
            start: "top 90%",
          },
          strokeDashoffset: offset,
          duration: 1.5,
          ease: "power2.out"
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
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden parallax-container">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover parallax-bg" 
            src="/assets/services_hero.png" 
            alt="Agriculture Precision"
            style={{ height: '120%', top: '-10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="hero-reveal font-bold text-[10px] tracking-[0.3em] text-primary mb-6 block uppercase">ELEVATING AGRICULTURE</span>
            <h1 className="hero-reveal text-5xl md:text-7xl font-bold text-on-background mb-8 leading-[1.1] tracking-tight">
              Precision Agriculture Ecosystem
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Technical mastery meets expansive freedom. We redefine crop management through autonomous aerial intelligence and hyper-accurate data analytics.
            </p>
            <div className="hero-reveal flex flex-wrap gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-2xl shadow-primary/20 hover:bg-primary/90 transition-all">
                Explore Services
              </button>
              <button className="border border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                Download Arsenal Catalog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: "Strategy Efficiency", value: 89, desc: "Optimized flight paths and resource allocation protocols." },
            { label: "Predictive Analytics", value: 82, desc: "Early detection of pest infestations and nutrient deficiencies." },
            { label: "Yield Results", value: 95, desc: "Consistent improvement in crop quality and harvest volume." }
          ].map((stat, i) => (
            <div key={i} className="section-reveal glass-card p-10 rounded-2xl flex flex-col items-center text-center group">
              <div className="w-28 h-28 mb-8 relative flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle className="text-slate-100" cx="56" cy="56" r="50" fill="transparent" stroke="currentColor" strokeWidth="8" />
                  <circle 
                    className="text-primary progress-circle" 
                    cx="56" cy="56" r="50" 
                    fill="transparent" 
                    stroke="currentColor" 
                    strokeWidth="8" 
                    strokeDasharray="314.15" 
                    strokeDashoffset="314.15"
                    data-target={stat.value}
                  />
                </svg>
                <span className="absolute text-3xl font-bold text-primary">{stat.value}%</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">{stat.label}</h3>
              <p className="text-slate-500 leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid - Bento */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal text-center mb-20">
            <span className="font-bold text-[10px] tracking-widest text-primary mb-4 block uppercase">OUR CAPABILITIES</span>
            <h2 className="text-4xl md:text-5xl font-bold">Precision Agriculture Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[650px]">
            <div className="section-reveal md:col-span-8 group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGh_b64d1qjcvTuq38ziE2DwhyvYr5rZqpguYjRsYGSP3MqueJFraFeVzFbQC3e0oNLnAnR2ZptPLhTWMv2eUcCaMAFdtCK1c4L-LrDHztu_FocgrFD2AdVtQ55d8NUQ8HaR6MshQVhcJl1OCI7Cqb9ELgKMfu1EDEuHk-r-qE7dGTKGMrpFBv6CB6bh9LiADhTr3P7IT9UbdgJ-C4M9Lh3o0t9lGW2LYFFGNGew2YeXrN-kbbsJWVO2tH4bJZDwRfQGiXSjjtcw" 
                alt="Crop Spraying"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-3xl font-bold text-white mb-4">Autonomous Crop Spraying</h3>
                <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                  Targeted delivery of fertilizers and pesticides using GPS-gated swarming technology to reduce chemical waste by up to 30%.
                </p>
              </div>
            </div>

            <div className="section-reveal md:col-span-4 glass-card p-12 flex flex-col justify-center rounded-3xl">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Leaf className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Precision Seeding</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Micro-dispensing technology for reforestation and row-crop initiation with sub-centimeter accuracy.
              </p>
              <div className="h-px w-full bg-slate-100 mb-8"></div>
              <button className="flex items-center gap-3 text-primary font-bold group">
                Learn more <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="section-reveal md:col-span-4 glass-card p-12 flex flex-col justify-center rounded-3xl">
              <div className="bg-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8">
                <Monitor className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-6">Multispectral Monitoring</h3>
              <p className="text-slate-600 leading-relaxed">
                Real-time crop health assessment using NDVI sensors to visualize photosynthetic activity before human eyes can detect stress.
              </p>
            </div>

            <div className="section-reveal md:col-span-8 group relative overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKE9ajFsVc3nn9WnzhqINdmr-IWQECLQYDR3CU9U2Gxcs2l81QBrJREvxgKQSor5kbgTPu0evm5lGbXej7FA13Kk8q9hn3l1K_E5B-xd4oG7qkQlOlTa3J1tqcn2dKQR5tpliTeQRLWWgxZ7xZqz5QINXC3ggPIIzgZiD0o37LAwEFIMpSqOhzw77JPWu2Gq4S2aB44n9jwSuPba0_R9GJ6oj9lWPY908WGoV0pXprvERaBu4kFLrLE1IJYSS6b4nwbEXCzb0yd3g" 
                alt="Field Mapping"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-12">
                <h3 className="text-3xl font-bold text-white mb-4">Field Mapping & Topography</h3>
                <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                  High-resolution 3D terrain modeling for irrigation planning and drainage management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="section-reveal w-full lg:w-1/2">
            <span className="font-bold text-[10px] tracking-widest text-primary mb-4 block uppercase">VALUE PROPOSITION</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">Strategic Agricultural Benefits</h2>
            <ul className="space-y-8">
              {[
                { title: "Input Cost Reduction", desc: "Minimize the use of water, pesticides, and fertilizers through variable-rate application technologies.", icon: <Wheat /> },
                { title: "Labor Optimization", desc: "Automate dangerous or repetitive tasks, allowing your workforce to focus on high-level farm management.", icon: <Hammer /> },
                { title: "Environmental Stewardship", desc: "Promote sustainable farming practices by preventing over-application.", icon: <Leaf /> }
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-6">
                  <div className="mt-1 bg-primary text-white rounded-full p-1.5 flex-shrink-0">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                    <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="section-reveal w-full lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <img 
              className="rounded-3xl shadow-2xl relative z-10 w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrdhK6QVPpBUmzoZyT_PrMCXPq-6N-rq1_JLA02ZWHomIz0yFp-1C9h3gnXmTdQWO1TmQCdfhr7u1uGGKzK7WKe0hiDwg60x3K9xEjWThVLCRkYaGlnKUldCRAQVHS5_RQp_B0v6wloeRMRb-5QtbV5mWWsxtLWHWiAk1oJXBJbkjAHmy2zkfiIYHLGvd4hnrV4KudwMzSxWPW9X2aZLa4PXIpnf4OwYMDea48z-H7kuwRdetQNIGwikhIMKuSotCIbDicPoapYuI" 
              alt="Data Dashboard"
            />
          </div>
        </div>
      </section>

      {/* Technical Arsenal */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-bold text-[10px] tracking-widest text-blue-400 mb-4 block uppercase">HARDWARE & PAYLOAD</span>
              <h2 className="text-4xl font-bold leading-tight">The Technical Arsenal</h2>
              <p className="text-slate-400 mt-6 text-lg">Precision-engineered hardware designed for extreme agricultural conditions and mission-critical reliability.</p>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">
              Compare Models
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Aero-Core Propulsion", icon: <Hammer />, version: "V3.4", desc: "IP67-rated brushless motors designed for 1000+ flight hours in dusty, corrosive environments.", stat: "40 KG Payload", progress: 85 },
              { title: "Spectral-Eye Suite", icon: <Zap />, version: "Optic-X", desc: "10-band multispectral sensors capturing ultra-high resolution data across IR and visible spectrums.", stat: "1.2 CM/PX Res", progress: 92 },
              { title: "Nexus Link RTK", icon: <Radio />, version: "Pro-Link", desc: "Centimeter-level positioning accuracy via triple-redundant satellite link and ground stations.", stat: "< 10 MS Latency", progress: 98 }
            ].map((card, i) => (
              <div key={i} className="section-reveal bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all group">
                <div className="h-56 bg-slate-900 relative">
                  <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                    {React.cloneElement(card.icon, { size: 100, className: "text-blue-400" })}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-blue-400 border border-blue-400/20 backdrop-blur-sm">
                      {React.cloneElement(card.icon, { size: 36 })}
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold">{card.title}</h3>
                    <span className="bg-primary/20 text-blue-400 text-[10px] font-bold px-3 py-1 rounded-full">{card.version}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-8">{card.desc}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-slate-500 uppercase tracking-widest">{card.stat}</span>
                    </div>
                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-primary h-full transition-all duration-1000" style={{ width: `${card.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal bg-primary rounded-[3rem] p-16 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Optimize Your Harvest?</h2>
            <p className="text-xl text-blue-100/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a technical consultation with our agricultural specialists and discover the ROI of drone integration.
            </p>
            <button className="bg-white text-primary px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
