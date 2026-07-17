import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

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

const quickLinks = [
  ['Home', '/'],
  ['Training', '/training'],
  ['Services', '/services'],
  ['Manufacturing', '/manufacturing'],
  ['Social Media Presence', '/social-media'],
  ['Contact', '/contact'],
];

const Footer = () => {
  return (
    <footer className="bg-[#1A2A3A] text-white">
      <div className="h-1 w-full bg-primary" />

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-14">
        <section className="mb-10 text-center">
          <div className="mx-auto mb-3 flex w-full max-w-[320px] items-center justify-center gap-3">
            <span className="h-px flex-1 bg-primary/70" />
            <span className="text-lg font-semibold tracking-wide text-primary md:text-xl">Contact Us</span>
            <span className="h-px flex-1 bg-primary/70" />
          </div>
          <h2 className="font-sans leading-[0.98] tracking-wide text-white">
            <span className="block text-xl font-semibold md:text-2xl">Get In</span>
            <span className="mt-1 block text-2xl font-bold md:text-4xl">touch...</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#AABBC8] md:text-base">
            Drone training, aerial services, and technology support from our Coimbatore campus.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.2fr_0.9fr_1.15fr_0.8fr]">
          <div>
            <img src="/assets/logo.png" alt="De Drone World Logo" className="mb-4 h-12 w-auto object-contain brightness-0 invert opacity-90" />
            <p className="mb-3 text-sm italic text-primary">Direct. Devise. Deliver.</p>
            <p className="max-w-sm text-sm leading-relaxed text-[#AABBC8]">
              Building India's next generation of certified remote pilots and drone technology professionals.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(([label, path]) => (
                <li key={path}>
                  <Link to={path} className="text-sm text-[#AABBC8] transition-colors hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Reach Us</h4>
            <div className="space-y-3 text-sm text-[#AABBC8]">
              <a href="tel:+916380806450" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone size={17} className="shrink-0 text-primary" /> +91 6380806450
              </a>
              <a href="tel:+917708757581" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Phone size={17} className="shrink-0 text-primary" /> +91 7708757581
              </a>
              <a href="mailto:md@thedroneworld.in" className="flex items-center gap-3 transition-colors hover:text-primary">
                <Mail size={17} className="shrink-0 text-primary" /> md@thedroneworld.in
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-1 shrink-0 text-primary" />
                <p>Idea Lab, First Floor, HICET Campus, Malumichampatti, Coimbatore</p>
              </div>
              <a
                href="https://maps.app.goo.gl/N2GkBCJcN43bh3hM6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-sm font-semibold text-primary hover:text-white"
              >
                Open In Google Maps
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-base font-semibold text-white">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit De Drone World on ${item.label}`}
                  title={item.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#243340] text-primary transition-all hover:bg-primary hover:text-white"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 border-t border-[#243340] px-6 py-4 md:flex-row">
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
