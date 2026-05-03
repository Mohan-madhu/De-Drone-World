import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sprout, Sun, Truck, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-row", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: "Precision Agriculture",
      desc: "Multispectral mapping and precision spraying to maximize yield and minimize chemical footprint.",
      icon: Sprout,
      img: "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Renewable Inspection",
      desc: "Automated solar panel and wind turbine diagnostics using high-resolution thermal imaging fusion.",
      icon: Sun,
      img: "https://images.unsplash.com/photo-1466611653911-95282ee3656b?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "UAV Logistics",
      desc: "Last-mile medical and e-commerce delivery networks with fully autonomous fleet management.",
      icon: Truck,
      img: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <section ref={containerRef} id="services" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4 tracking-tight">Global Industry <span className="text-primary">Solutions</span></h2>
          <div className="w-24 h-1 bg-primary" />
        </div>

        <div className="flex flex-col gap-12">
          {services.map((service, i) => (
            <div key={service.title} className="service-row group relative overflow-hidden glass-hud border-white/5 rounded-sm transition-all duration-700 hover:border-primary/30">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-8 lg:p-16 relative z-10">
                  <service.icon size={48} className="text-primary mb-8" />
                  <h3 className="text-3xl md:text-4xl font-bold uppercase mb-6 tracking-tight group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">{service.desc}</p>
                  <button className="flex items-center gap-2 text-primary font-display font-bold uppercase tracking-widest text-sm group/btn">
                    Explore Solution <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
                <div className="relative h-[300px] lg:h-full min-h-[400px] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
