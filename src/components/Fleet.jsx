import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wind, Box, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Fleet = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fleet-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        x: (i) => (i % 2 === 0 ? -100 : 100),
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "expo.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const drones = [
    {
      id: "VX-1",
      name: "Vortex X-1",
      category: "Intercept & Surveillance Specialist",
      specs: [
        { label: "Max Velocity", value: "140 KM/H" },
        { label: "Flight Time", value: "45 MIN" }
      ],
      icon: Wind,
      img: "https://images.unsplash.com/photo-1527977966376-1c8418f9f108?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "THL-25",
      name: "Titan Heavy-Lift",
      category: "Industrial Logistics Titan",
      specs: [
        { label: "Payload Cap", value: "25 KG" },
        { label: "Redundancy", value: "HEX-FLOW" }
      ],
      icon: Box,
      img: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "NS-S4",
      name: "Nightshade S4",
      category: "Zero-Signature Reconnaissance",
      specs: [
        { label: "Acoustic Sign", value: "32 dB" },
        { label: "Sensor Suite", value: "GEN-IV" }
      ],
      icon: ShieldCheck,
      img: "https://images.unsplash.com/photo-1473960103265-9aa439266175?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold  mb-4 tracking-tighter">The 2124 <span className="text-primary">Fleet</span></h2>
          <p className="text-white/40 font-display tracking-[0.4em]  text-sm">Engineering the Future</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {drones.map((drone) => (
            <div key={drone.id} className="fleet-card flex flex-col group">
              <div className="relative aspect-[4/5] mb-8 overflow-hidden rounded-sm glass-hud border-primary/10">
                <img 
                  src={drone.img} 
                  alt={drone.name} 
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-110 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60" />
                <div className="absolute top-6 right-6 px-3 py-1 glass-hud rounded-sm text-[10px] text-primary font-display font-bold  tracking-widest border-primary/20">
                  Unit {drone.id}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold  mb-1 tracking-tight">{drone.name}</h3>
                  <p className="text-white/60 text-xs font-display  tracking-widest">{drone.category}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {drone.specs.map((spec) => (
                  <div key={spec.label} className="flex items-center justify-between p-4 glass-hud border-white/5 rounded-sm group-hover:border-primary/20 transition-all">
                    <span className="text-[10px] text-white/40  tracking-widest font-display">{spec.label}</span>
                    <span className="text-sm font-display font-bold text-primary">{spec.value}</span>
                  </div>
                ))}
                <button className="btn-secondary w-full py-4  tracking-[0.2em] text-xs font-bold mt-4">
                  View Dossier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
