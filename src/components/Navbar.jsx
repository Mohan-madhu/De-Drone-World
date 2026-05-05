import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Cpu,
  Users,
  Award,
  Briefcase,
  Plane,
  Gauge,
  Layers,
  RefreshCw,
  MapPinned,
  Gamepad2,
  Sprout,
  Camera,
  BookOpen,
  Database,
  Wrench,
  Code2,
  ScanLine,
  Hammer,
  Trophy,
  BadgeCheck,
  CalendarDays,
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
  { name: 'RPC Upgradation', icon: <RefreshCw size={16} /> },
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

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Training', path: '/training', hasDropdown: true },
    { name: 'Services', path: '/services' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="w-full h-[3px] bg-primary"></div>

      <nav className="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="De Drone World Logo" className="h-12 w-auto object-contain" />
        </Link>

        <div className="hidden md:flex space-x-8 items-center h-full">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.path}
                className="relative h-full flex items-center group/training"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-navy hover:text-primary text-sm font-medium transition-colors h-full flex items-center gap-1 border-b-2 ${
                      isActive ? 'border-primary text-primary' : 'border-transparent'
                    }`
                  }
                >
                  {link.name}
                  <ChevronDown size={14} className="transition-transform duration-150 group-hover/training:rotate-180" />
                </NavLink>

                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 -translate-y-2 pointer-events-none transition-all duration-150 group-hover/training:opacity-100 group-hover/training:translate-y-0 group-hover/training:pointer-events-auto"
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 min-w-[220px]">
                    <div className="px-4 py-2 bg-slate-50 border-b border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Our Programs</span>
                    </div>
                    {trainingSubLinks.map((sub, i) => {
                      const submenu = trainingSubMenus[sub.name];

                      return (
                      <div
                        key={i}
                        className="relative group/sub"
                      >
                        <button
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-navy hover:bg-primary/5 hover:text-primary transition-all duration-150 group"
                        >
                          <span className="text-primary/60 group-hover:text-primary transition-colors">{sub.icon}</span>
                          <span className="flex-1 text-left">{sub.name}</span>
                          {submenu && (
                            <ChevronDown size={14} className="-rotate-90 text-slate-400 transition-colors group-hover:text-primary" />
                          )}
                        </button>

                        {submenu && (
                          <div className="absolute left-full top-0 ml-2 min-w-[280px] rounded-2xl border border-slate-100 bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 -translate-x-2 pointer-events-none group-hover/sub:translate-x-0 group-hover/sub:opacity-100 group-hover/sub:pointer-events-auto">
                            {submenu.map((course) => (
                              <Link
                                key={course.name}
                                to={toTrainingPath(course.name)}
                                className="group/course flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium text-navy transition-colors hover:bg-primary/5 hover:text-primary"
                              >
                                <span className="text-primary/60 transition-colors group-hover/course:text-primary">{course.icon}</span>
                                {course.name}
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
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-navy hover:text-primary text-sm font-medium transition-colors h-full flex items-center border-b-2 ${
                    isActive ? 'border-primary text-primary' : 'border-transparent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/contact" className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all">
            Enroll Now
          </Link>
          <button
            className="md:hidden text-navy p-2 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.path}>
                <button
                  onClick={() => setMobileTrainingOpen(!mobileTrainingOpen)}
                  className="w-full flex items-center justify-between px-8 py-4 text-sm font-medium text-navy hover:text-primary hover:bg-slate-50 border-b border-slate-50 transition-colors"
                >
                  {link.name}
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileTrainingOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileTrainingOpen && (
                  <div className="bg-slate-50 border-b border-slate-100">
                    {trainingSubLinks.map((sub, i) => {
                      const submenu = trainingSubMenus[sub.name];

                      return (
                      <div key={i}>
                        <button className="w-full flex items-center gap-3 px-12 py-3 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary/5 transition-colors">
                          <span className="text-primary/60">{sub.icon}</span>
                          {sub.name}
                        </button>
                        {submenu && (
                          <div className="bg-white/70">
                            {submenu.map((course) => (
                              <Link
                                key={course.name}
                                to={toTrainingPath(course.name)}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex w-full items-center gap-3 px-16 py-2.5 text-left text-xs font-medium text-slate-500 hover:bg-primary/5 hover:text-primary transition-colors"
                              >
                                <span className="text-primary/60">{course.icon}</span>
                                {course.name}
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
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-8 py-4 text-sm font-medium transition-colors border-b border-slate-50 ${
                    isActive ? 'text-primary bg-primary/5 border-l-4 border-l-primary' : 'text-navy hover:text-primary hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            )
          )}
          <div className="p-8">
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:bg-opacity-90 transition-all">
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
