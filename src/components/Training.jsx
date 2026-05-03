import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, MapPin, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Training = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stats = gsap.utils.toArray('.stat-number');
      stats.forEach(stat => {
        const value = parseInt(stat.getAttribute('data-value'));
        gsap.to(stat, {
          scrollTrigger: {
            trigger: stat,
            start: "top 90%",
          },
          innerText: value,
          duration: 2,
          snap: { innerText: 1 },
          ease: "power2.out"
        });
      });

      gsap.from(".training-content", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Pilots Certified", value: "500", suffix: "+", icon: Users },
    { label: "Flight Hours", value: "12", suffix: "k+", icon: Clock },
    { label: "Hub Locations", value: "15", suffix: "", icon: MapPin },
    { label: "Safety Record", value: "100", suffix: "%", icon: ShieldCheck }
  ];

  return (
    <section ref={sectionRef} id="training" className="py-24 relative overflow-hidden bg-surface-container">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="training-content">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
              DGCA CERTIFIED <br />
              <span className="text-primary">PILOT TRAINING</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
              Master the skies with India's leading RPTO. Gain professional certification and hands-on operational experience with industrial fleet standards.
            </p>
            <div className="flex flex-col gap-6">
              <div className="glass-hud p-6 rounded-sm border-primary/20 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-display mb-1">Authorization No.</div>
                  <div className="text-xl font-display font-bold text-primary">RPTO202500086</div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <button className="btn-primary py-4 uppercase tracking-widest text-sm font-bold">
                ENROLL IN ACADEMY
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="glass-hud p-8 rounded-sm group hover:border-primary/30 transition-all flex flex-col items-center text-center">
                <s.icon size={20} className="text-primary/40 mb-4 group-hover:text-primary transition-colors" />
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <span className="stat-number" data-value={s.value}>0</span>{s.suffix}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-display">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
