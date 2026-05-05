import React from 'react';
import { Link } from 'react-router-dom';

const Icon = ({ children }) => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden="true">
    {children}
  </svg>
);

const YouTubeIcon = () => (
  <Icon>
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
  </Icon>
);

const FacebookIcon = () => (
  <Icon>
    <path d="M22.7 12A10.7 10.7 0 1 0 10.3 22.6v-7.5H7.6V12h2.7V9.7c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3.1l-.5 3.1h-2.6v7.5A10.7 10.7 0 0 0 22.7 12Z" />
  </Icon>
);

const InstagramIcon = () => (
  <Icon>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8Zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8Zm5.6-3.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
  </Icon>
);

const LinkedInIcon = () => (
  <Icon>
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.8h4v10.7H3V9.8Zm6.2 0H13v1.5h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.7 2.6 4.7 6v5.2h-4v-4.6c0-1.1 0-2.6-1.6-2.6s-1.9 1.2-1.9 2.5v4.7h-4V9.8Z" />
  </Icon>
);

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://youtube.com/@dedroneworld?si=tQ_fppIIpyRcgAjJ',
    icon: <YouTubeIcon />,
  },
  {
    label: 'Facebook',
    href: 'https://share.google/Bvu6INCnOeOjR5R60',
    icon: <FacebookIcon />,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/dedroneworld.in?igsh=MWQ4aWM2Ymd0bWczMQ==',
    icon: <InstagramIcon />,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/de-drone-world-solutions-pvt-ltd/',
    icon: <LinkedInIcon />,
  },
];

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
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit De Drone World on ${item.label}`}
                title={item.label}
                className="w-9 h-9 rounded-full bg-[#243340] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                {item.icon}
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
