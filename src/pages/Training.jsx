import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { School, Plane, Briefcase, CheckCircle, BarChart3, Settings, ShieldAlert, BadgeCheck } from 'lucide-react';

const Training = () => {
  const mainRef = useRef(null);
  const coursesRef = useRef(null);

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

      // Stats Counter
      gsap.from(".stat-count", {
        scrollTrigger: {
          trigger: ".stat-count",
          start: "top 90%",
        },
        textContent: 0,
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 1 },
      });

      // Schedule Animation
      gsap.from(".day-card", {
        scrollTrigger: {
          trigger: ".schedule-grid",
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Courses Animation
      if (coursesRef.current) {
        gsap.from('.course-card', {
          scrollTrigger: { trigger: coursesRef.current, start: 'top 85%' },
          opacity: 0,
          y: 50,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out'
        });
      }

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
      <section className="relative min-h-[560px] w-full flex items-center justify-center overflow-hidden bg-[#F0FAFF] parallax-container py-24 md:h-[76vh] md:min-h-[620px]">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover opacity-75 parallax-bg" 
            src="/assets/training_hero.png" 
            alt="Drone Training"
            style={{ height: '120%', top: '-10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/78 to-white/35"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F0FAFF] via-transparent to-white/15"></div>
        </div>
        
        <div className="relative z-10 text-center px-8 max-w-[1000px]">
          <div className="hero-reveal inline-flex items-center bg-primary/10 backdrop-blur-sm border border-primary/25 text-primary px-5 py-2 rounded-full mb-5">
            <BadgeCheck size={18} className="mr-2" />
            <span className="font-bold text-xs tracking-wide">Government of India Approved</span>
          </div>
          <h1 className="hero-reveal mx-auto max-w-4xl text-3xl font-bold text-navy mb-5 leading-[1.12] tracking-tight md:text-5xl">
            Master the Skies with DGCA Certified Training
          </h1>
          <p className="hero-reveal text-base md:text-lg text-slate-600 mb-7 max-w-2xl mx-auto leading-relaxed font-sans">
            Launch your career in the booming drone industry with India's premier flight academy. Technical mastery meets expansive freedom.
          </p>
          <div className="hero-reveal flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-2xl shadow-primary/30 hover:scale-105 transition-all">
              Enroll for Next Batch
            </a>
            <button className="bg-white/80 backdrop-blur-md border border-primary/25 text-primary px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white transition-all">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section ref={coursesRef} className="bg-[#F0FAFF] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center font-[Space_Grotesk] mb-2">
            Launch Your Career as a Drone Pilot
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-4 rounded-full" />
          <p className="text-center text-[#555555] mb-12 text-lg">
            DGCA Approved Courses — Start Flying Today
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CARD 1 */}
            <div className="course-card bg-white rounded-2xl border border-[#BDDFF0] overflow-hidden shadow-[0_2px_12px_rgba(30,159,212,0.10)] hover:shadow-[0_8px_24px_rgba(30,159,212,0.18)] transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/274939/pexels-photo-274939.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Small drone flying against blue sky"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  DGCA Certified
                </span>
                <h3 className="text-navy text-xl font-bold font-[Space_Grotesk] mb-2">
                  Remote Pilot Course — Small
                </h3>
                <p className="text-[#555555] text-sm mb-4">Duration: 7 Days</p>
                <p className="text-navy text-2xl font-bold mb-5">
                  ₹30,000<span className="text-sm font-normal text-[#555555] ml-1">+ GST</span>
                </p>
                <Link to="/contact" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="course-card bg-white rounded-2xl border border-[#BDDFF0] overflow-hidden shadow-[0_2px_12px_rgba(30,159,212,0.10)] hover:shadow-[0_8px_24px_rgba(30,159,212,0.18)] transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/8459532/pexels-photo-8459532.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Medium quadcopter drone in the air"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  DGCA Certified
                </span>
                <h3 className="text-navy text-xl font-bold font-[Space_Grotesk] mb-2">
                  Remote Pilot Course — Medium
                </h3>
                <p className="text-[#555555] text-sm mb-4">Duration: 7 Days</p>
                <p className="text-navy text-2xl font-bold mb-5">
                  ₹40,000<span className="text-sm font-normal text-[#555555] ml-1">+ GST</span>
                </p>
                <Link to="/contact" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="course-card bg-white rounded-2xl border border-[#BDDFF0] overflow-hidden shadow-[0_2px_12px_rgba(30,159,212,0.10)] hover:shadow-[0_8px_24px_rgba(30,159,212,0.18)] transition-shadow duration-300">
              <img
                src="https://images.pexels.com/photos/1093236/pexels-photo-1093236.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="White quadcopter drone flying"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  DGCA Certified
                </span>
                <h3 className="text-navy text-xl font-bold font-[Space_Grotesk] mb-2">
                  Remote Pilot Course — Small + Medium
                </h3>
                <p className="text-[#555555] text-sm mb-4">Duration: 10 Days</p>
                <p className="text-navy text-2xl font-bold mb-5">
                  ₹55,000<span className="text-sm font-normal text-[#555555] ml-1">+ GST</span>
                </p>
                <Link to="/contact" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="course-card bg-white rounded-2xl border border-[#BDDFF0] overflow-hidden shadow-[0_2px_12px_rgba(30,159,212,0.10)] hover:shadow-[0_8px_24px_rgba(30,159,212,0.18)] transition-shadow duration-300">
              <img
                src="/assets/services/diplomo-course.jpeg"
                alt="Advanced Diploma in Drone Technology and Operations"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Diploma Program
                </span>
                <h3 className="text-navy text-xl font-bold font-[Space_Grotesk] mb-2">
                  Advanced Diploma in Drone Technology & Operations
                </h3>
                <p className="text-[#555555] text-sm mb-4">Duration: 6 Months</p>
                <p className="text-navy text-base font-semibold leading-relaxed mb-5">
                  Professional training in drone technology, operations, assembly, mapping, and live projects.
                </p>
                <Link to="/training/drone-technician-6-months" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all">
                  View Diploma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-32 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: <School className="w-8 h-8 text-primary" />, title: "DGCA Approved", desc: "Our curriculum is strictly aligned with DGCA standards, ensuring you receive a valid Remote Pilot Certificate (RPC)." },
            { icon: <Plane className="w-8 h-8 text-primary" />, title: "Hands-on Training", desc: "Extensive flight time on professional grade micro and small category drones under expert supervision." },
            { icon: <Briefcase className="w-8 h-8 text-primary" />, title: "Career Focused", desc: "Post-training placement assistance and networking with industry leaders in surveying, mapping, and cinema." }
          ].map((item, i) => (
            <div key={i} className="section-reveal p-12 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 bg-primary/5 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4 font-display">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-sans text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="section-reveal relative">
            <img 
              className="rounded-3xl shadow-2xl w-full h-[550px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEOpqRcFU5xSv0s5wCkl0v3bPT7AwBFT4TWKDj6akqzPvQ8S9ACedO398vv1dCk1xUafBu3uz0ZAfpXGQJSbmz7rdP70jLo0gYpiZC1jAGJE4RKUuYc5ThQM-AAVgzqAgWt2VQB5GKTbuSELnnVXB7vCy0jTKOj8xDz_qFKNW3fVQ4ipOAerURDrcBokCnmkOTDa1pUcGVSpjhe5YEkqTMhwsr8Orq45XxXTKoiymvwwgMnJEunm47VW5wIV0b8u_4ie6Gwi0VhTk" 
              alt="Instructor and Students"
            />
            <div className="absolute -bottom-8 -right-8 glass-card p-10 rounded-3xl max-w-[280px] shadow-2xl">
              <p className="text-primary text-5xl font-bold mb-2 stat-count">500</p>
              <p className="text-sm font-bold text-slate-700 leading-tight  tracking-widest">Certified Pilots graduated this year</p>
            </div>
          </div>
          <div className="section-reveal">
            <span className="font-bold text-[10px] tracking-[0.2em] text-primary mb-4 block ">Expertise In Flight</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.2]">Setting the Standard for Excellence in Unmanned Aviation</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At De Drone World, we believe that becoming a drone pilot is about more than just moving sticks on a controller. It's about safety, regulatory knowledge, and technical proficiency.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Our training facility features a state-of-the-art flight simulator lab and a dedicated green-zone airfield for unrestricted practice.
            </p>
            <div className="space-y-5">
              {[
                "Advanced Navigation & Waypoint Planning",
                "Emergency Procedures & Safety Drills",
                "Payload Integration & Maintenance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-slate-800 font-semibold">
                  <CheckCircle size={20} className="text-primary" fill="currentColor" fillOpacity={0.1} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tactical Curriculum - Bento */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Tactical Curriculum</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">A comprehensive deep-dive into the science and art of drone operations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[650px]">
          <div className="section-reveal md:col-span-2 md:row-span-2 bg-slate-900 border border-slate-100 p-12 rounded-3xl flex flex-col justify-end relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo0NK-iKp4mt67N5k3y90GVly7lf_C4vHOOTIrjlZlqIKoRXLjJoDgl9IGQQPCe9sMRLzPrHLMjbSYu_nq2sinHh7t0ki8S6eKwUxvg1m79LRYgn0NDoiMds043twg4kV3btC3Sa3Wo6GGnTSsU9xf5qp6QmRecd7mf5LmyT_imgKKsD9MBnMljCT5zgUP-4aGpCGd44TGMoegtK9kHogi3LvFUl1nP2AvjQnbIH9yzltxA3NuztznKoTNnmL5AZnrmmi42DqQk74" 
              alt="Air Regulations"
            />
            <div className="relative z-10">
              <BarChart3 size={48} className="text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-4 text-white">Air Regulations & Air Traffic Control</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                In-depth study of the New Drone Rules 2021, airspace classification, and communication protocols with ATC.
              </p>
            </div>
          </div>

          <div className="section-reveal md:col-span-2 bg-slate-950 p-12 rounded-3xl flex items-center text-white relative overflow-hidden group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAELQOwEt0j8TgzAAD2A-lDMm3mPQ5s4yVtPx8LFCZeKSkF8XO1_oFNa3Xe1BnXtM9SorAC50GfJqD0Vv-Si1604XguDYRdtGw24ELEMdjQrMVqHOwnXJooXOexuVKeKOuqIPMxCzdzl8iFx8fT-hLyUUZfebztJ6pYn8CTh-epF8bhqr29a_x-tUQkj9pnYc71gQE5-LYAPG7zkFopwXGXzW2lP1Sf8omFb6c5BVHLhVsZkfT1T-FInVnw95qk-7RO-BjDJK4BINE" 
              alt="Telemetry"
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Meteorology & Flight Prep</h3>
              <p className="text-slate-300 leading-relaxed">Weather patterns, wind velocity analysis, and pre-flight checklists.</p>
            </div>
          </div>

          <div className="section-reveal relative overflow-hidden bg-slate-900 p-8 rounded-3xl flex flex-col justify-between group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqpYUNMb8dIsPZkYbUYlImzZXErEyLim-PWHstwc5pk4lXFxkf_2tZ0snmklNoPbHMEGgh4IzyoV3RvOchfB5jSaiaHA0n5JcuvDjtC5YxzHzBw3wn3kNaNh7Z2Cl1OjO_y4gsw80ML8yPY7WEjwN_-_Yxilv25Sn0or1HSx1MTAseMiX9omvuZj_aR1bl1p84PhlIy0dx5z0P_gFhz6a_rvlqtJ628dJmOdHTe6BEDxEQ6fChtfJp89c0XPcQy66pF9snBMaUb7A" 
              alt="Maintenance"
            />
            <div className="relative z-10">
              <Settings size={32} className="text-primary mb-4" />
              <h4 className="font-bold text-white mb-2  text-xs tracking-widest">Maintenance</h4>
              <p className="text-sm text-slate-300">Hardware troubleshooting & battery safety.</p>
            </div>
          </div>

          <div className="section-reveal relative overflow-hidden bg-slate-900 p-8 rounded-3xl flex flex-col justify-between group">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSGh_b64d1qjcvTuq38ziE2DwhyvYr5rZqpguYjRsYGSP3MqueJFraFeVzFbQC3e0oNLnAnR2ZptPLhTWMv2eUcCaMAFdtCK1c4L-LrDHztu_FocgrFD2AdVtQ55d8NUQ8HaR6MshQVhcJl1OCI7Cqb9ELgKMfu1EDEuHk-r-qE7dGTKGMrpFBv6CB6bh9LiADhTr3P7IT9UbdgJ-C4M9Lh3o0t9lGW2LYFFGNGew2YeXrN-kbbsJWVO2tH4bJZDwRfQGiXSjjtcw" 
              alt="Emergency"
            />
            <div className="relative z-10">
              <ShieldAlert size={32} className="text-primary mb-4" />
              <h4 className="font-bold text-white mb-2  text-xs tracking-widest">Emergency</h4>
              <p className="text-sm text-slate-300">Failsafe logic & manual override recovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Day Schedule */}
      <section className="py-24 bg-[#F0FAFF] text-navy">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-bold text-[10px] tracking-[0.2em] text-primary mb-4 block ">Course Timeline</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">5-Day Intensive Training Schedule</h2>
            </div>
            <p className="text-slate-600 text-lg max-w-sm leading-relaxed">A structured journey from theory to professional flight certification.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 schedule-grid">
            {[
              { day: "01", title: "Ground School", items: ["Intro to UAS", "DGCA Regulations", "Basic Aerodynamics"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBXDG1EqGi43JAo-RUM8sVJcwRs7edkyOf6BENFyxvRC6myNZ4jSOYdkXVtKYZpQUv9sw56TWpcuct6_yClNDE75gOojWbDUavXVXyyhF2lGyvIdGmleqGB_P7xqyYtSqBMiJGTnF3QfMKlnO8cF5rvXXY-qrGJ6sCgy3UlH7MvIJFquolksn0r3k483rTIRwIa6q2Ex5oa8Griey6JIdV4r9NwPjiYcAPzDv1Z2i6CGlXKilQiL-PKMo28VE5LOFMDw83Ua9Z1heE" },
              { day: "02", title: "Simulations", items: ["Simulator Training", "Basic Controls", "Flight Physics"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAELQOwEt0j8TgzAAD2A-lDMm3mPQ5s4yVtPx8LFCZeKSkF8XO1_oFNa3Xe1BnXtM9SorAC50GfJqD0Vv-Si1604XguDYRdtGw24ELEMdjQrMVqHOwnXJooXOexuVKeKOuqIPMxCzdzl8iFx8fT-hLyUUZfebztJ6pYn8CTh-epF8bhqr29a_x-tUQkj9pnYc71gQE5-LYAPG7zkFopwXGXzW2lP1Sf8omFb6c5BVHLhVsZkfT1T-FInVnw95qk-7RO-BjDJK4BINE" },
              { day: "03", title: "Field Flight I", items: ["Take-off & Landing", "Hovering Practice", "Figure-of-8"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_31Mq_r6CW6pjrSQ98gpZvy_e9fU28y2eD-DIEv4uNfGOarjGFGnXF9C88eoaPESkm8QX1SzkDcc-21jb23L6D_DVqU6YY7eotmb8R4Q46GeRxA4RMwJqJk7jYXq-5mlCpupdXxp2UixbVq2LM1C7Vjnlgf1jeWCl812QbYpfJV2JJpuJSj9D3RQpGyZDMGa0jcEj-gqiqFtSvz_p2G5zcz5tOBpwfh29ceB6Xx2uLffI_ELYfCL7gd5j4d7O3HP5_IvSRrMoU3E" },
              { day: "04", title: "Advanced Flight", items: ["Night Flying", "Payload Ops", "Beyond Line of Sight"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwMUKn5Yioj31PXRmF9pQFlpaozx1JlnooFf5aRNl9m22RTuCUnbRq0IZQWoQ2mR8ilp8Qv1j70R44HJqyYBcO8OylsCjCGsAaOVcip4xjiEOZxsCLl0epXoFU2OVa2N0Q_n5-arHJMP--laeKjwA5heaidwnqGcEmQ52SLU9UaClk7RfTIRvbWvG7NqeKPS1kXK6XcEg3_J4v3VpWRUo_R1_16Ma9S28BmMI5Gz0URBC_950MXzMSRViHu_sXj5sW0D1yk1BjyFI" },
              { day: "05", title: "Certification", items: ["Theory Exam", "Practical Flight Test", "Graduation"], img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSGh_b64d1qjcvTuq38ziE2DwhyvYr5rZqpguYjRsYGSP3MqueJFraFeVzFbQC3e0oNLnAnR2ZptPLhTWMv2eUcCaMAFdtCK1c4L-LrDHztu_FocgrFD2AdVtQ55d8NUQ8HaR6MshQVhcJl1OCI7Cqb9ELgKMfu1EDEuHk-r-qE7dGTKGMrpFBv6CB6bh9LiADhTr3P7IT9UbdgJ-C4M9Lh3o0t9lGW2LYFFGNGew2YeXrN-kbbsJWVO2tH4bJZDwRfQGiXSjjtcw" }
            ].map((d, i) => (
              <div key={i} className="day-card relative overflow-hidden bg-white p-8 border-l-4 border-primary rounded-r-2xl group transition-all duration-500 shadow-sm">
                <div className="absolute inset-0 z-0">
                  <img src={d.img} alt={d.title} className="w-full h-full object-cover opacity-[0.04] group-hover:opacity-10 transition-opacity" />
                </div>
                <div className="relative z-10">
                  <span className="font-bold text-[10px] tracking-widest text-primary block mb-4">Day {d.day}</span>
                  <h4 className="text-xl font-bold mb-6">{d.title}</h4>
                  <ul className="text-sm text-slate-600 space-y-3">
                    {d.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing Roadmap */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal text-center mb-20">
          <span className="font-bold text-[10px] tracking-[0.2em] text-primary mb-4 block  font-display">The Journey To Certification</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-display tracking-tight">Your Path to a DGCA Drone License</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto font-sans">
            We guide you through every step of the DigitalSky registration and certification process.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {[
              { step: "01", title: "Enrollment", desc: "Submit KYC and register on the DGCA DigitalSky portal." },
              { step: "02", title: "Ground School", desc: "Master aviation laws, meteorology, and UAS theory." },
              { step: "03", title: "Flight Lab", desc: "Intensive simulator training and hands-on field flight." },
              { step: "04", title: "Assessment", desc: "Pass the DGCA theory exam and practical check-ride." },
              { step: "05", title: "RPC Issued", desc: "Receive your official Remote Pilot Certificate." }
            ].map((item, i) => (
              <div key={i} className="section-reveal bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group text-center">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold font-display mb-6 mx-auto group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h4 className="font-bold text-slate-900 mb-3 font-display">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal bg-primary px-12 py-20 rounded-3xl flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="relative z-10 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to become a certified pilot?</h2>
            <p className="text-lg text-blue-100/80">Join our upcoming batch in Coimbatore or Madurai. Limited seats available.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 relative z-10 w-full lg:w-auto">
            <a href="/contact" className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl text-center">
              Apply for Course
            </a>
            <a href="/contact" className="border border-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center">
              Talk to Counselor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
