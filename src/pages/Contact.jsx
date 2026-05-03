import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-reveal", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="pt-24 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 contact-reveal">
          <h1 className="text-5xl font-bold text-slate-900 mb-6 tracking-tight">Connect with Our Experts</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you're looking for flight training, enterprise solutions, or indigenous drone manufacturing, our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="contact-reveal bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
              <p className="text-2xl font-bold text-primary mb-1">+91 6382405660</p>
              <p className="text-xl font-bold text-primary mb-4">+91 7708757581</p>
              <p className="text-sm text-slate-500">Available Monday to Saturday, 9:00 AM - 6:00 PM IST</p>
            </div>

            <div className="contact-reveal bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-lg font-bold text-slate-800 mb-4">md@thedroneworld.in</p>
              <p className="text-sm text-slate-500">Expect a response within 24 hours.</p>
            </div>

            <div className="contact-reveal bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-xl mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Presence</h3>
              <div className="space-y-4 text-sm text-slate-600">
                <p>De Drone World, Hindusthan Engineering College Campus, Malumichampatti, Coimbatore – 641028, Tamil Nadu</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 contact-reveal bg-white p-12 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Subject</label>
                <select className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none">
                  <option>Flight Training Enrollment</option>
                  <option>Enterprise Solutions</option>
                  <option>Indigenous Manufacturing</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">Your Message</label>
                <textarea rows="5" placeholder="Tell us how we can help..." className="w-full bg-slate-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="bg-primary text-white px-12 py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-primary/20">
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
