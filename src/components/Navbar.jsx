import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Training', path: '/training' },
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
      {/* Top Accent Bar */}
      <div className="w-full h-[3px] bg-primary"></div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center h-16 px-8 max-w-7xl mx-auto w-full">
        {/* Logo Area */}
        <Link to="/" className="flex items-center">
          <img src="/assets/logo.png" alt="De Drone World Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center h-full">
          {navLinks.map((link) => (
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
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Enroll Now Button */}
          <Link 
            to="/contact" 
            className="hidden md:block bg-primary text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-opacity-90 transition-all"
          >
            Enroll Now
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-navy p-2 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-slate-100 flex flex-col animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
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
          ))}
          <div className="p-8">
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold text-center hover:bg-opacity-90 transition-all"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
