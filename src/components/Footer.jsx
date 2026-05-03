import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A2A3A] text-white">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-primary" />

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Column 1 — Brand */}
        <div>
          {/* Logo */}
          <img src="/assets/logo.png" alt="De Drone World Logo" className="h-12 w-auto object-contain mb-4 brightness-0 invert opacity-90" />
          <p className="text-primary text-sm italic mb-3">Direct. Devise. Deliver.</p>
          <p className="text-[#AABBC8] text-sm leading-relaxed">
            DGCA Approved drone pilot training — building India's next generation of certified remote pilots.
          </p>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              ['Home', '/'],
              ['Training', '/training'],
              ['Services', '/services'],
              ['Manufacturing', '/manufacturing'],
              ['Contact', '/contact']
            ].map(([label, path]) => (
              <li key={path}>
                <Link to={path} className="text-[#AABBC8] hover:text-primary text-sm transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <div className="space-y-2 text-sm text-[#AABBC8]">
            <p>+91 6382405660</p>
            <p>+91 7708757581</p>
            <p className="text-primary">md@thedroneworld.in</p>
            <p>De Drone World, Hindusthan Engineering College Campus, Malumichampatti, Coimbatore – 641028, Tamil Nadu</p>
          </div>
        </div>

        {/* Column 4 — Follow Us */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-3 flex-wrap">
            {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map(platform => (
              <a key={platform} href="#" className="w-9 h-9 rounded-full bg-[#243340] flex items-center justify-center text-primary text-xs hover:bg-primary hover:text-white transition-all">
                {platform[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#243340] px-6 py-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[#AABBC8] text-xs">
          © 2025 De Drone World. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-[#AABBC8] hover:text-primary text-xs">Privacy Policy</a>
          <a href="#" className="text-[#AABBC8] hover:text-primary text-xs">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
