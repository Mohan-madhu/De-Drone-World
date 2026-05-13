import React, { useEffect, useRef } from 'react';
import { Cpu, Target, Network } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "Neural Obstacle Avoidance",
      description: "Process millions of spatial data points per second with our custom onboard AI chips, allowing for sub-millisecond reactions.",
      icon: Cpu,
      stats: "2.4 Petaflops"
    },
    {
      title: "Millimeter Accuracy",
      description: "Utilizing multi-band RTK and LIDAR fusion, our systems maintain position with absolute fidelity, even in turbulence.",
      icon: Target,
      stats: "0.2mm Precision"
    },
    {
      title: "Neural Link Telemetry",
      description: "Swarm intelligence algorithms that enable autonomous mission planning and self-healing communication networks.",
      icon: Network,
      stats: "Sub-1ms Latency"
    }
  ];

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-surface-container/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">Advanced Core <span className="text-primary">Systems</span></h2>
            <p className="text-white/60">Proprietary technology stack engineered for mission-critical reliability.</p>
          </div>
          <div className="h-[2px] flex-grow bg-primary/10 mx-8 hidden lg:block" />
          <div className="text-right">
            <span className="text-primary font-display font-bold text-6xl opacity-20">01</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div 
              key={f.title} 
              className="feature-card glass-hud p-8 group hover:bg-primary/5 transition-all duration-500 rounded-sm relative overflow-hidden"
            >
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/20 group-hover:border-primary transition-colors" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/20 group-hover:border-primary transition-colors" />
              
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <f.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold mb-4  tracking-tight">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8">{f.description}</p>
              
              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px]  tracking-widest text-white/30 font-display">Benchmark</span>
                <span className="text-sm font-display font-bold text-primary">{f.stats}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
