import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  BarChart3,
  Building2,
  GraduationCap,
  Cpu,
  Users,
  Award,
  Briefcase,
  Plane,
  Gauge,
  Layers,
  RefreshCw,
  Flower2,
  Flag,
  Lightbulb,
  Megaphone,
  MapPinned,
  Gamepad2,
  Sprout,
  Camera,
  BookOpen,
  Database,
  Wrench,
  Code2,
  ScanLine,
  Flame,
  ShieldCheck,
  Sun,
  UtilityPole,
  Wind,
  Hammer,
  Trophy,
  BadgeCheck,
  CalendarDays,
  Cuboid,
  Boxes,
} from 'lucide-react';

const trainingSubLinks = [
  { name: 'DGCA Courses', icon: <Cpu size={16} /> },
  { name: 'Skill Courses', icon: <GraduationCap size={16} /> },
  { name: 'Drone Workshops', icon: <Users size={16} /> },
  { name: 'Diploma Courses', icon: <Award size={16} /> },
  { name: 'Internships', icon: <Briefcase size={16} /> },
];

const dgcaCourseTitles = [
  { name: 'Small RPC', icon: <Plane size={16} /> },
  { name: 'Medium RPC', icon: <Gauge size={16} /> },
  { name: 'Small And Medium RPC', icon: <Layers size={16} /> },
  { name: 'Inspector Development Course', icon: <RefreshCw size={16} /> },
];

const trainingSubMenus = {
  'DGCA Courses': dgcaCourseTitles,
  'Skill Courses': [
    { name: 'Aerial Mapping and Surveying', icon: <MapPinned size={16} /> },
    { name: 'FPV Flying', icon: <Gamepad2 size={16} /> },
    { name: 'Agri Drone (Spray & Precision Agriculture)', icon: <Sprout size={16} /> },
    { name: 'Aerial Videography and Photography', icon: <Camera size={16} /> },
    { name: 'Drone Basics', icon: <BookOpen size={16} /> },
    { name: 'GIS for Drone Data Processing', icon: <Database size={16} /> },
    { name: 'Drone Repair and Maintenance', icon: <Wrench size={16} /> },
    { name: 'Python for GIS', icon: <Code2 size={16} /> },
    { name: 'LiDAR & GIS', icon: <ScanLine size={16} /> },
  ],
  'Drone Workshops': [
    { name: 'Build Your Own Drone', icon: <Hammer size={16} /> },
    { name: 'Build Your Racing Drone', icon: <Trophy size={16} /> },
    { name: 'Build Your Own Agri Drone', icon: <Sprout size={16} /> },
    { name: 'Drone Customization', icon: <Wrench size={16} /> },
  ],
  'Diploma Courses': [
    { name: 'Drone Technician (6 Months)', icon: <BadgeCheck size={16} /> },
  ],
  Internships: [
    { name: '7 Days', icon: <CalendarDays size={16} /> },
    { name: '15 Days', icon: <CalendarDays size={16} /> },
    { name: '30 Days', icon: <CalendarDays size={16} /> },
  ],
};

const toTrainingPath = (name) => `/training/${name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

const serviceCategories = [
  { name: 'Agriculture', path: '/services/agriculture', icon: <Sprout size={16} /> },
  { name: 'Events', path: '/services/events', icon: <Camera size={16} /> },
  { name: 'Inspection', path: '/services/inspection', icon: <ShieldCheck size={16} /> },
  { name: 'Survey & Mapping', path: '/services/survey-mapping', icon: <MapPinned size={16} /> },
];

const serviceSubMenus = {
  Agriculture: [
    { name: 'Fertilizer Spraying', icon: <Sprout size={16} /> },
    { name: 'Seed Sowing', icon: <Layers size={16} /> },
    { name: 'Crop Monitoring', icon: <BarChart3 size={16} /> },
    { name: 'Precision Agriculture Using Drones', icon: <Gauge size={16} /> },
  ],
  Events: [
    { name: 'Drone Videography & Photography', icon: <Camera size={16} /> },
    { name: 'Drone Flower Showering', icon: <Flower2 size={16} /> },
    { name: 'Flag Towing', icon: <Flag size={16} /> },
    { name: 'Drone Light Show', icon: <Lightbulb size={16} /> },
    { name: 'Drone LED Panel Advertisement', icon: <Megaphone size={16} /> },
  ],
  Inspection: [
    { name: 'Windmill Inspection', icon: <Wind size={16} /> },
    { name: 'Solar Panel Inspection', icon: <Sun size={16} /> },
    { name: 'Power Line Inspection', icon: <UtilityPole size={16} /> },
    { name: 'Drone Thermography', icon: <Flame size={16} /> },
    { name: 'Construction Inspection', icon: <Hammer size={16} /> },
    { name: 'Pipeline Inspection', icon: <ShieldCheck size={16} /> },
  ],
  'Survey & Mapping': [
    { name: 'Land Surveying', icon: <MapPinned size={16} /> },
    { name: 'Construction & Infrastructure Mapping', icon: <Building2 size={16} /> },
    { name: '3D Mapping & Modeling', icon: <Cuboid size={16} /> },
    { name: 'GIS & Data Analysis', icon: <Database size={16} /> },
    { name: 'Mining & Stockpile Analysis', icon: <Boxes size={16} /> },
  ],
};

const toServiceItemPath = (category, name) =>
  `${category.path}#${name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

const announcements = [
  'Admissions Open for B.Tech Avionics and Drone Engineering',
  'Admissions Open for DGCA Approved Small Class Drone License',
  'Internships for One Month',
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Training', path: '/training', hasDropdown: 'training' },
    { name: 'Services', path: '/services', hasDropdown: 'services' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full h-[3px] bg-primary"></div>

      <nav className="grid h-16 w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:px-6 xl:px-8">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="De Drone World Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden xl:flex items-center justify-center gap-5 2xl:gap-6 h-full">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const isServicesDropdown = link.hasDropdown === 'services';
              const dropdownItems = isServicesDropdown ? serviceCategories : trainingSubLinks;
              const dropdownMenus = isServicesDropdown ? serviceSubMenus : trainingSubMenus;
              const dropdownLabel = isServicesDropdown ? 'Service Categories' : 'Our Programs';

              return (
              <div
                key={link.path}
                className="relative h-full flex items-center group/training"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-display text-[0.98rem] font-semibold text-navy hover:text-primary transition-colors h-full flex items-center gap-1 border-b-2 ${
                      isActive ? 'border-primary text-primary' : 'border-transparent'
                    }`
                  }
                >
                  {link.name}
                  <ChevronDown size={14} className="transition-transform duration-150 group-hover/training:rotate-180" />
                </NavLink>

                <div
                  className="absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 opacity-0 -translate-y-2 pointer-events-none transition-all duration-150 group-hover/training:opacity-100 group-hover/training:translate-y-0 group-hover/training:pointer-events-auto"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[220px]">
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100">
                      <span className="font-display text-sm font-bold text-slate-500  tracking-[0.14em]">{dropdownLabel}</span>
                    </div>
                    {dropdownItems.map((sub, i) => {
                      const submenu = dropdownMenus[sub.name];

                      return (
                      <div
                        key={i}
                        className="relative group/sub"
                      >
                        <Link
                          to={sub.path || link.path}
                          className="w-full flex items-center gap-3 px-4 py-3 font-display text-[0.98rem] font-semibold text-navy hover:bg-primary/5 hover:text-primary transition-all duration-150 group"
                        >
                          <span className="text-primary/60 group-hover:text-primary transition-colors">{sub.icon}</span>
                          <span className="flex-1 text-left">{sub.name}</span>
                          {submenu && (
                            <ChevronDown size={14} className="-rotate-90 text-slate-400 transition-colors group-hover:text-primary" />
                          )}
                        </Link>

                        {submenu && (
                          <div className="absolute left-[calc(100%-1px)] top-0 min-w-[280px] rounded-2xl border border-slate-100 bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 -translate-x-2 pointer-events-none group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto">
                            {submenu.map((item) => (
                              <Link
                                key={item.name}
                                to={isServicesDropdown ? toServiceItemPath(sub, item.name) : toTrainingPath(item.name)}
                                className="group/course flex w-full items-center gap-3 px-4 py-3 text-left font-display text-[0.95rem] font-semibold text-navy transition-colors hover:bg-primary/5 hover:text-primary"
                              >
                                <span className="text-primary/60 transition-colors group-hover/course:text-primary">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-display text-[0.98rem] font-semibold text-navy hover:text-primary transition-colors h-full flex items-center border-b-2 ${
                    isActive ? 'border-primary text-primary' : 'border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </div>

        <div className="flex items-center justify-end space-x-4">
          <Link to="/contact" className="hidden xl:block bg-primary text-white px-5 py-2 rounded-lg font-display text-[0.95rem] font-bold hover:bg-opacity-90 transition-all">
            Enroll Now
          </Link>
          <button
            className="xl:hidden text-navy p-2 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div className="announcement-marquee bg-transparent text-red-600 mt-4">
        <div className="announcement-marquee-track">
          {[...announcements, ...announcements, ...announcements].map((item, index) => (
            <a 
              href="https://forms.gle/j39nA4HWN6jgmYgt7"
              target="_blank"
              rel="noopener noreferrer"
              key={`${item}-${index}`} 
              className="announcement-marquee-item hover:underline"
            >
              <span className="announcement-marquee-dot" style={{ background: '#dc2626', boxShadow: '0 0 0 5px rgba(220, 38, 38, 0.2)' }} aria-hidden="true" />
              {item}
            </a>
          ))}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col">
          {navLinks.map((link) => {
            if (link.hasDropdown) {
              const isServicesDropdown = link.hasDropdown === 'services';
              const dropdownItems = isServicesDropdown ? serviceCategories : trainingSubLinks;
              const dropdownMenus = isServicesDropdown ? serviceSubMenus : trainingSubMenus;
              const isOpen = isServicesDropdown ? mobileServicesOpen : mobileTrainingOpen;
              const setIsOpen = isServicesDropdown ? setMobileServicesOpen : setMobileTrainingOpen;

              return (
              <div key={link.path}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-center justify-between px-8 py-4 font-display text-base font-semibold text-navy hover:text-primary hover:bg-slate-50 border-b border-slate-50 transition-colors"
                >
                  {link.name}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="bg-slate-50 border-b border-slate-100">
                    {dropdownItems.map((sub, i) => {
                      const submenu = dropdownMenus[sub.name];

                      return (
                      <div key={i}>
                        <Link
                          to={sub.path || link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="w-full flex items-center gap-3 px-12 py-3 font-display text-[0.98rem] font-semibold text-slate-700 hover:text-primary hover:bg-primary/5 transition-colors"
                        >
                          <span className="text-primary/60">{sub.icon}</span>
                          {sub.name}
                        </Link>
                        {submenu && (
                          <div className="bg-white/70">
                            {submenu.map((item) => (
                              <Link
                                key={item.name}
                                to={isServicesDropdown ? toServiceItemPath(sub, item.name) : toTrainingPath(item.name)}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex w-full items-center gap-3 px-16 py-2.5 text-left font-display text-[0.92rem] font-semibold text-slate-600 hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                <span className="text-primary/60">{item.icon}</span>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-8 py-4 font-display text-base font-semibold transition-colors border-b border-slate-50 ${
                    isActive ? 'text-primary bg-primary/5 border-l-4 border-l-primary' : 'text-navy hover:text-primary hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
          <div className="p-8">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-primary text-white px-5 py-3 rounded-lg font-display text-base font-bold text-center hover:bg-opacity-90 transition-all">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
