import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ArrowRight, Leaf, Camera, Zap, Map } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);


const servicesData = [
  {
    id: 1,
    title: 'Agriculture',
    subtitle: 'Precision Crop Management',
    icon: <Leaf size={40} />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSGh_b64d1qjcvTuq38ziE2DwhyvYr5rZqpguYjRsYGSP3MqueJFraFeVzFbQC3e0oNLnAnR2ZptPLhTWMv2eUcCaMAFdtCK1c4L-LrDHztu_FocgrFD2AdVtQ55d8NUQ8HaR6MshQVhcJl1OCI7Cqb9ELgKMfu1EDEuHk-r-qE7dGTKGMrpFBv6CB6bh9LiADhTr3P7IT9UbdgJ-C4M9Lh3o0t9lGW2LYFFGNGew2YeXrN-kbbsJWVO2tH4bJZDwRfQGiXSjjtcw',
    description: 'Advanced drone solutions for crop health monitoring, precision spraying, and yield optimization. Our multispectral imaging and GPS-guided application systems reduce chemical waste by up to 30% while increasing productivity.',
    features: [
      'Real-time crop health monitoring with NDVI sensors',
      'Precision variable-rate spraying and seeding',
      'Multispectral analysis for nutrient deficiency detection',
      ' 3D field mapping for irrigation optimization',
      'Automated flight path generation based on field data',
      'Historical crop performance analytics'
    ],
    benefits: [
      '30% reduction in chemical usage',
      '25% improvement in crop yield',
      'Labor cost savings through automation',
      'Early pest and disease detection',
      'Better ROI through data-driven decisions'
    ],
    path: '/services/agriculture'
  },
  {
    id: 2,
    title: 'Events',
    subtitle: 'Aerial Coverage & Documentation',
    icon: <Camera size={40} />,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000&q=80',
    description: 'Professional drone videography and photography for conferences, festivals, weddings, corporate events, and large-scale productions. High-resolution 4K/8K capture with dynamic aerial perspectives that traditional crews cannot achieve.',
    features: [
      '4K and 8K video capture with professional color grading',
      'Real-time FPV piloting for dynamic shots',
      'Panoramic and time-lapse photography',
      'Live event streaming capability',
      'Multi-angle simultaneous filming',
      'Post-production editing and montage creation'
    ],
    benefits: [
      'Unique perspectives that engage audiences',
      'Professional quality at 40% lower cost',
      'Faster turnaround on post-production',
      'Complete aerial event coverage',
      'Shareable social media content',
      'Archive-quality documentation'
    ]
  },
  {
    id: 3,
    title: 'Inspection',
    subtitle: 'Infrastructure & Asset Monitoring',
    icon: <Zap size={40} />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK78P6BOnAzwTzS2brybHPRSzQ746PEXv5zNwmwQpe_YVIOWmNcV0Om7IRHc9OkoTllUXveiPBgoRwbCaeEwj6LSW2kmcbpnp24I9Xw5V81xvcdi59ZdIN9lqh0jKosk7YAJw5btz85ua17Stw5Xy3sDNYAHn9AOt9VPJfBdVKDJKTgKVTOcBAX_HHJA3SmqBmiJ9L-SVFb9_ebZezcHj-cGjVFwNIRgvyRMqStgkGQ5sm3NlHGCpBJSzxa_jJnCpV4rrMMf-WBKQ',
    description: 'Safe, efficient, and cost-effective inspections of solar farms, wind turbines, telecommunications towers, power lines, and industrial equipment. Thermal imaging and HD cameras detect issues before they become critical failures.',
    features: [
      'Thermal imaging for electrical anomalies',
      '4K HD close-up inspection footage',
      'Safe access to hard-to-reach infrastructure',
      'Real-time defect detection and mapping',
      'Automated inspection reporting',
      'Historical trend analysis for predictive maintenance'
    ],
    benefits: [
      '80% reduction in inspection time',
      'Eliminates dangerous manual climbing',
      'Early failure detection saves equipment',
      'Comprehensive documentation',
      'Minimal business disruption',
      'Lower inspection costs'
    ],
    path: '/services/inspection'
  },
  {
    id: 4,
    title: 'Survey & Mapping',
    subtitle: 'Geospatial Intelligence',
    icon: <Map size={40} />,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKE9ajFsVc3nn9WnzhqINdmr-IWQECLQYDR3CU9U2Gxcs2l81QBrJREvxgKQSor5kbgTPu0evm5lGbXej7FA13Kk8q9hn3l1K_E5B-xd4oG7qkQlOlTa3J1tqcn2dKQR5tpliTeQRLWWgxZ7xZqz5QINXC3ggPIIzgZiD0o37LAwEFIMpSqOhzw77JPWu2Gq4S2aB44n9jwSuPba0_R9GJ6oj9lWPY908WGoV0pXprvERaBu4kFLrLE1IJYSS6b4nwbEXCzb0yd3g',
    description: 'High-accuracy topographic surveys and 3D mapping for land development, infrastructure planning, and environmental monitoring. Centimeter-level precision with GIS-ready outputs for seamless integration into planning workflows.',
    features: [
      'RTK GPS positioning for centimeter accuracy',
      '3D orthomosaic map generation',
      'Digital elevation model (DEM) creation',
      'GIS data export (Shapefile, GeoTIFF)',
      'Volume calculations for stockpiles',
      'Change detection and progress tracking'
    ],
    benefits: [
      'Centimeter-level accuracy for critical projects',
      '60% faster surveying than traditional methods',
      'Complete area coverage in single flight',
      'GIS-compatible deliverables',
      'Reduced field time and costs',
      'Real-time project monitoring'
    ]
  }
];

const Services = () => {
  const mainRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleOpenService = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div ref={mainRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://images.unsplash.com/photo-1578926314433-ed0da05e0dd4?auto=format&fit=crop&w=2000&q=80" 
            alt="Services Hero"
            style={{ height: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
          <div className="max-w-2xl">
            <span className="hero-reveal font-bold text-[10px] tracking-[0.3em] text-blue-400 mb-6 block uppercase">Our Services</span>
            <h1 className="hero-reveal text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              Solutions for Every Mission
            </h1>
            <p className="hero-reveal text-lg md:text-xl text-slate-200 mb-10 leading-relaxed">
              From precision agriculture to infrastructure inspection, we deliver professional drone services tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="section-reveal text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Explore Our Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Click on any service card to learn more about capabilities, features, and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service) => {
              const CardWrapper = service.path ? Link : 'div';
              const wrapperProps = service.path
                ? { to: service.path }
                : { onClick: () => handleOpenService(service) };

              return (
              <CardWrapper
                key={service.id}
                {...wrapperProps}
                className="section-reveal group block cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200 hover:border-blue-400/50 transition-all duration-500 hover:shadow-2xl h-96">
                  {/* Background Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-10">
                    <div className="bg-blue-500 text-white rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-blue-100 text-lg mb-6">{service.subtitle}</p>
                    <div className="flex items-center gap-3 text-white font-bold group-hover:translate-x-2 transition-transform">
                      Explore <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for Expanded Service Details */}
      {isOpen && selectedService && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={handleCloseModal}>
          <div 
            className="bg-white rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Image */}
            <div className="relative h-96 md:h-[500px] overflow-hidden">
              <img 
                src={selectedService.image} 
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
              
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 bg-white/90 hover:bg-white text-slate-900 rounded-full p-3 transition-all shadow-lg hover:shadow-xl"
              >
                <X size={24} />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="bg-blue-500 text-white rounded-2xl p-4 w-fit mb-4">
                  {selectedService.icon}
                </div>
                <h2 className="text-5xl font-bold text-slate-900">{selectedService.title}</h2>
                <p className="text-xl text-slate-700 mt-2">{selectedService.subtitle}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 md:p-16">
              {/* Main Description */}
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                {selectedService.description}
              </p>

              {/* Features and Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                {/* Features */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-slate-900">Key Features</h3>
                  <ul className="space-y-4">
                    {selectedService.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-bold mb-8 text-slate-900">Benefits</h3>
                  <ul className="space-y-4">
                    {selectedService.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700 leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl">
                  Get Started
                </button>
                <button 
                  onClick={handleCloseModal}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="section-reveal bg-gradient-to-r from-blue-600 to-blue-500 rounded-[3rem] p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              Contact our team today for a consultation and discover how our drone solutions can elevate your business.
            </p>
            <button className="bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
