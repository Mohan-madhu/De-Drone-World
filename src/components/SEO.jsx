import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://thedroneworld.in';
const DEFAULT_IMAGE = `${SITE_URL}/assets/home_hero.png`;

const routeMeta = {
  '/': ['DGCA Drone Training in Tamil Nadu | De Drone World', 'DGCA-approved drone training, UAV operations, mapping, inspection and agriculture drone solutions from Coimbatore, Tamil Nadu.', 'DGCA drone training Tamil Nadu, drone pilot course Coimbatore, drone training India, DGCA RPTO Tamil Nadu'],
  '/training': ['Drone Pilot Course in Coimbatore | DGCA RPTO Tamil Nadu', 'Explore DGCA drone pilot courses, UAV skill training, workshops, internships and practical flight programs in Coimbatore, Tamil Nadu.', 'drone pilot course Coimbatore, DGCA RPTO Tamil Nadu, UAV training institute, drone training India'],
  '/services': ['Professional Drone Services in Tamil Nadu | De Drone World', 'Commercial drone services for agriculture, inspection, events, land survey, mapping and enterprise UAV operations across Tamil Nadu.', 'drone services Tamil Nadu, UAV operations India, drone inspection, drone survey mapping'],
  '/services/agriculture': ['Agriculture Drone Services & Training in Tamil Nadu', 'Agriculture drone solutions for spraying, seed sowing, crop monitoring and precision farming, supported by trained UAV operators.', 'agriculture drone training, drone spraying Tamil Nadu, precision agriculture drones, agri drone operator course'],
  '/services/inspection': ['Industrial Drone Inspection Services in Tamil Nadu', 'UAV inspection services for solar panels, windmills, power lines, construction, pipelines and thermal monitoring across Tamil Nadu.', 'drone inspection Tamil Nadu, solar inspection drone, windmill inspection, UAV thermography'],
  '/services/events': ['Event Drone Videography & Aerial Shows in Tamil Nadu', 'Professional event drone videography, flower showering, flag towing, light shows and aerial LED advertising services.', 'event drone videography Tamil Nadu, drone light show, aerial photography Coimbatore'],
  '/services/survey-mapping': ['Drone Survey & Mapping Services in Tamil Nadu', 'Drone land survey, GIS analysis, 3D mapping, construction mapping and stockpile measurement for accurate project intelligence.', 'drone mapping Tamil Nadu, drone land survey Coimbatore, GIS drone mapping, UAV survey services'],
  '/manufacturing': ['Drone Manufacturing & UAV Kits in India | De Drone World', 'Drone assembly kits, UAV components, private-label manufacturing and custom drone development for institutions and enterprises.', 'drone manufacturing India, UAV kits, custom drone development, drone components Tamil Nadu'],
  '/contact': ['Contact De Drone World | Drone Training Coimbatore', 'Contact De Drone World in Coimbatore for DGCA drone training, UAV services, institutional partnerships and drone manufacturing.', 'drone training contact Coimbatore, DGCA RPTO Coimbatore, drone institute Tamil Nadu'],
  '/social-media': ['De Drone World Videos, Reels & Company Updates', 'Watch De Drone World training videos, UAV operations, institutional events and company updates across LinkedIn, YouTube and Instagram.', 'De Drone World videos, drone operations reels, UAV training videos, drone events Coimbatore'],
};

const courseNames = {
  'small-rpc': 'Small Class Remote Pilot Certificate',
  'medium-rpc': 'Medium Class Remote Pilot Certificate',
  'small-and-medium-rpc': 'Small and Medium Remote Pilot Certificate',
  'inspector-development-course': 'Drone Instructor Development Course',
  'drone-technician-6-months': 'Drone Technician Diploma',
  'aerial-mapping-and-surveying': 'Drone Mapping and Surveying',
  'fpv-flying': 'FPV Drone Flying',
  'agri-drone-spray-and-precision-agriculture': 'Agriculture Drone Training',
  'aerial-videography-and-photography': 'Aerial Videography and Photography',
  'drone-basics': 'Drone Basics',
  'gis-for-drone-data-processing': 'GIS for Drone Data Processing',
  'drone-repair-and-maintenance': 'Drone Repair and Maintenance',
  'python-for-gis': 'Python for GIS',
  'lidar-and-gis': 'LiDAR and GIS',
};

const mainCourses = [
  ['Small Class Remote Pilot Certificate', '/training/small-rpc'],
  ['Small and Medium Remote Pilot Certificate', '/training/small-and-medium-rpc'],
  ['Agriculture Drone Training', '/training/agri-drone-spray-and-precision-agriculture'],
  ['Drone Mapping and Surveying', '/training/aerial-mapping-and-surveying'],
];

const titleFromSlug = (slug) => courseNames[slug] || slug.split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const courseSlug = pathname.startsWith('/training/') ? pathname.split('/').filter(Boolean).pop() : null;
    const courseName = courseSlug ? titleFromSlug(courseSlug) : null;
    const values = courseName
      ? [`${courseName} Course in Coimbatore | De Drone World`, `Learn ${courseName.toLowerCase()} with practical training, career pathways and industry applications at our UAV training institute in Coimbatore.`, `${courseName} course, drone training Coimbatore, UAV training institute, drone course Tamil Nadu`]
      : routeMeta[pathname] || routeMeta['/'];
    const [title, description, keywords] = values;
    const canonical = `${SITE_URL}${pathname === '/' ? '' : pathname.replace(/\/$/, '')}`;

    document.title = title;
    [['name', 'description', description], ['name', 'keywords', keywords], ['name', 'robots', 'index, follow, max-image-preview:large'], ['property', 'og:type', courseName ? 'article' : 'website'], ['property', 'og:title', title], ['property', 'og:description', description], ['property', 'og:url', canonical], ['property', 'og:image', DEFAULT_IMAGE], ['property', 'og:site_name', 'De Drone World'], ['name', 'twitter:card', 'summary_large_image'], ['name', 'twitter:title', title], ['name', 'twitter:description', description], ['name', 'twitter:image', DEFAULT_IMAGE]].forEach(([attribute, key, content]) => upsertMeta(attribute, key, content));

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const schemas = [{
      '@context': 'https://schema.org', '@type': ['EducationalOrganization', 'LocalBusiness'], '@id': `${SITE_URL}/#organization`, name: 'De Drone World', url: SITE_URL, logo: `${SITE_URL}/assets/logo.png`, telephone: ['+91 6382405660', '+91 7708757581'], email: 'md@thedroneworld.in',
      address: { '@type': 'PostalAddress', streetAddress: 'Idea Lab, First Floor, HICET Campus, Malumichampatti', addressLocality: 'Coimbatore', addressRegion: 'Tamil Nadu', addressCountry: 'IN' },
      areaServed: ['Tamil Nadu', 'India'],
      sameAs: ['https://www.instagram.com/dedroneworld.in', 'https://www.linkedin.com/company/de-drone-world-solutions-pvt-ltd/', 'https://youtube.com/@dedroneworld'],
    }];

    const parts = pathname.split('/').filter(Boolean);
    if (parts.length) schemas.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: parts.map((part, index) => ({ '@type': 'ListItem', position: index + 1, name: index === parts.length - 1 && courseName ? courseName : titleFromSlug(part), item: `${SITE_URL}/${parts.slice(0, index + 1).join('/')}` })) });
    if (pathname === '/training') schemas.push({ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Drone Training Courses in Coimbatore', itemListElement: mainCourses.map(([name, url], index) => ({ '@type': 'ListItem', position: index + 1, url: `${SITE_URL}${url}`, name })) });
    if (courseName) schemas.push({ '@context': 'https://schema.org', '@type': 'Course', name: courseName, description: description.slice(0, 60), url: canonical, provider: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: 'De Drone World', sameAs: SITE_URL } });

    let script = document.getElementById('route-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'route-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemas);
  }, [pathname]);

  return null;
}
