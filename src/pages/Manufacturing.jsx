import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Settings, Handshake, Box, Layers, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Manufacturing = () => {
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
      <section className="relative h-[70vh] min-h-[600px] flex items-center overflow-hidden pt-[104px] parallax-container">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover parallax-bg" 
            src="/assets/manufacturing_hero.png" 
            alt="Manufacturing Facility"
            style={{ height: '120%', top: '-10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="hero-reveal inline-block py-1.5 px-4 bg-primary/10 text-primary font-bold text-[10px] tracking-widest rounded-lg mb-6 ">
              Pioneering Indigenous Technology
            </span>
            <h1 className="hero-reveal text-4xl md:text-6xl font-bold text-on-surface mb-8 leading-[1.1] tracking-tight">
              Leading the 'Make in India' Drone Revolution
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              De Drone World is committed to strengthening the national ecosystem through local manufacturing, high-precision engineering, and scalable production capabilities.
            </p>
            <div className="hero-reveal flex flex-wrap gap-4">
              <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 transition-transform">
                Our Facilities
              </button>
              <button className="border border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Manufacturing - Bento */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contract Manufacturing Solutions</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Scalable and precise manufacturing tailored to your business needs, from component fabrication to full product assembly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[280px]">
          {/* Private Label */}
          <div className="section-reveal md:col-span-8 bg-slate-900 rounded-3xl p-10 flex flex-col justify-end relative overflow-hidden group">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK78P6BOnAzwTzS2brybHPRSzQ746PEXv5zNwmwQpe_YVIOWmNcV0Om7IRHc9OkoTllUXveiPBgoRwbCaeEwj6LSW2kmcbpnp24I9Xw5V81xvcdi59ZdIN9lqh0jKosk7YAJw5btz85ua17Stw5Xy3sDNYAHn9AOt9VPJfBdVKDJKTgKVTOcBAX_HHJA3SmqBmiJ9L-SVFb9_ebZezcHj-cGjVFwNIRgvyRMqStgkGQ5sm3NlHGCpBJSzxa_jJnCpV4rrMMf-WBKQ" 
              alt="Manufacturing" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div className="absolute top-0 right-0 p-12 text-primary/10 group-hover:text-primary/20 transition-colors">
              <Layers size={120} />
            </div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 text-white">Private Label Manufacturing</h3>
              <p className="text-slate-300 text-lg max-w-lg leading-relaxed">
                Launch your own brand with our flight-tested platforms. We handle the engineering; you own the brand identity.
              </p>
            </div>
          </div>

          {/* Individual Components */}
          <div className="section-reveal md:col-span-4 bg-slate-900 text-white rounded-3xl p-10 flex flex-col justify-between group relative overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPI3n_0-qvyXz3Yht1o5C-pOHJIk0dnorY8spJrME9zoDTNGypZjHOC0QIdWF2-5XalPzNAfEnNzabGTPN1z6-2cxouPyR28ayhcnZcxis9iRcV4AL4KMrXhvuUxaBTUH0gUz0AvLEEC3X1yX3pLn033uuWG0MT9M8S9nZ3oWhFORXc08TpkSdrtXdyZYjtzpUwFnTATwcdUXx_z5lnsbi3AO9lkLRWZ-8-E-ZL2AsQvjPVbWzacyKmHJ9edcThB7N6xAPKEWuIko" 
              alt="Components" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div className="relative z-10">
              <Settings size={40} className="mb-6 group-hover:rotate-90 transition-transform duration-1000 text-primary" />
              <div>
                <h3 className="text-2xl font-bold mb-4">Individual Components</h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  Precision fabrication of carbon fiber frames, PCB assembly, and motor enclosures.
                </p>
              </div>
            </div>
          </div>

          {/* Subcontracting */}
          <div className="section-reveal md:col-span-4 bg-slate-50 border border-slate-100 rounded-3xl p-10 flex flex-col justify-between hover:bg-slate-100 transition-colors group">
            <Handshake size={40} className="text-primary group-hover:scale-110 transition-transform" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Subcontracting</h3>
              <p className="text-slate-600 leading-relaxed">
                Expert capacity for overflow production or specific technical modules for your existing supply chain.
              </p>
            </div>
          </div>

          {/* End-to-End */}
          <div className="section-reveal md:col-span-8 glass-card rounded-3xl p-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden group">
            <div className="w-full md:w-2/5 h-full rounded-2xl overflow-hidden shrink-0">
              <img 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx0-n0omTLwFaQAHjg4StQkEc79slY_FXsvSH2-TrRmb7m6EJ7lqYUoCTBUhPkA2HYqE3YG2Baf3wtUscv-vjXOZLs4bbt792URiSLZiE7ZqmuZCuZ0acJLuVC8kcapqmF4mhgtc9H6ULpJKWK5gEOlUzcN-X-sub1Y58F2Cy3_z8LGJ1xysSZIomsW9ddDooC46gJAgF1pLCJq3leyt3EG44qX91vFjg2-eKBeXgY1Qu2b6t7BWzPoJFjN-6QI7wK3tjXB0ZESEQ" 
                alt="End-to-End Production"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-4">End-to-End Production</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                From initial CAD design and prototyping to final flight testing and packaging. A complete turnkey manufacturing solution.
              </p>
              <button className="text-primary font-bold flex items-center gap-2 group/btn">
                Learn more <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Assembly Kits Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Specialized Training & Assembly Kits</h2>
            <p className="text-lg text-slate-500">Industrial-grade kits for engineering schools and private research labs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Engineering Drone Kit",
                model: "X-Series Pro",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQhD9lar6W3N6tFdeVmvPi_6jJ4ueib09SKYdGHrHx_lZYprjhkPTv9Oa-S2JfhSTIIjmbWnDcRFFjxWTN1l8bpcU4_P80rxns-KbMhOleTJvmpCdsPO6kDh62lobDcULMfe96nL3laaQjQ0aEOyXB5oWZjOYdRndIp_pDibwDd4bNvQdJ8rypiqy6E3S7dqcYaU6fYGDL0VfVp_9r_ndXB_k_iT06-kROGv6mflP73TNKVYEBuw1X5hEBn11K_oIrHTxRAq10aTQ",
                badge: "Best Seller",
                specs: [
                  { label: "Frame Material", value: "3K Carbon Fiber" },
                  { label: "Flight Controller", value: "Pixhawk 6C Ready" },
                  { label: "Payload Capacity", value: "1.5kg Max" },
                  { label: "Assembly Time", value: "~4-6 Hours" }
                ]
              },
              {
                title: "Wooden Drone Kit",
                model: "Eco-Flyer v2",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpmTSs5QoxgiZN9vuK6yDS_a4YdYCM2RsZVOKyKAtvgvgZP-NsrgQm8xI9druYiWBd_4rEFBbvzvz5c6JC9KFbT5Pq9zyd-ZZp5fVVDhXVOU7S1Tx1zYG9TWSLvLS7sTUpKcUM0HZI1Wdx4X0E03nTPZWT7ldkrU7hemLEh1rR3IIEdRfQeE16_W5zz3khD8b0nviCchIWlKgun3Sv1mcYbGGS3I57FUGE9SiUScAX2SFsJtsTXAlcE8QPmaySD1ayaMJLRSH-IvA",
                badge: "Educational",
                secondary: true,
                specs: [
                  { label: "Frame Material", value: "Birch Plywood" },
                  { label: "Flight Controller", value: "Arduino Compatible" },
                  { label: "Focus", value: "STEM Learning" },
                  { label: "Sustainable", value: "100% Recyclable" }
                ]
              }
            ].map((kit, i) => (
              <div key={i} className="section-reveal bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
                <div className="h-80 overflow-hidden relative">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src={kit.img} alt={kit.title} />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-lg text-[10px] font-bold tracking-widest  backdrop-blur-md ${kit.secondary ? 'bg-slate-900/80 text-white' : 'bg-primary/90 text-white'}`}>
                    {kit.badge}
                  </div>
                </div>
                <div className="p-10">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-3xl font-bold">{kit.title}</h3>
                    <span className={`font-bold px-3 py-1 rounded-full text-xs ${kit.secondary ? 'text-slate-500 bg-slate-50' : 'text-primary bg-primary/5'}`}>{kit.model}</span>
                  </div>
                  <div className="space-y-4 mb-10">
                    {kit.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between py-3 border-b border-slate-50 text-sm">
                        <span className="text-slate-400">{spec.label}</span>
                        <span className="text-on-surface font-bold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-5 rounded-2xl font-bold transition-all ${kit.secondary ? 'border-2 border-primary text-primary hover:bg-primary/5' : 'bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20'}`}>
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPxNSJqStxTr_l5aJvvg_7q_OM-gVPpRf8UpHr1amEIedIilnO_5QVo3XAhUaeK9NQZi9HW_-4mBab_mPOTqPdO4XlgRicPGPL762dTUR18a7ng-_gj1fcw008jmXnordu9U1dJ5GbLZFf9s-mvIvUFqvU3-AGgyDvqfmt5Y8LeASiPx4EgmiFTz7Q3x4RWU-8PnYz-eDD8jxCWPoIQisGDjPAkmzl8qaIoohrDDo5PQAd6zjjZMmMbT2r31b-uo1t7Yr_EMRIhSg" 
            alt="Stats Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: "15,000+", label: "Units Produced", icon: <Box className="text-primary" size={32} /> },
              { value: "99.8%", label: "Qa Accuracy", icon: <ShieldCheck className="text-primary" size={32} /> },
              { value: "24/7", label: "Facility Monitoring", icon: <Zap className="text-primary" size={32} /> },
              { value: "ISO 9001", label: "Certified Processes", icon: <Layers className="text-primary" size={32} /> }
            ].map((stat, i) => (
              <div key={i} className="section-reveal text-center group">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] text-slate-400 ">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
