import { useMemo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { BadgeCheck, Briefcase, Building2, CalendarDays, CheckCircle, Clock, GraduationCap, HelpCircle, IndianRupee, MapPin, Plane, Quote, Route, Send, ShieldCheck, Sparkles, Wrench } from 'lucide-react';

const slugify = (value) =>
  value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const baseSections = {
  timeline: [
    'Day 1-2: Strong Foundation - Theory & Concepts',
    'Day 3: Simulator Mastery - Practice Before You Fly',
    'Day 4-5: Live Flight Training - Real Drone Operations',
  ],
  droneDetails: ['Category: Rotorcraft (Small)', 'Type: Quad-Copter (Dual Controller System)'],
  audience: [
    'Future Drone Pilots',
    'Survey & Mapping Experts',
    'Aerial Creators (Photo/Video)',
    'Defence & Security Personnel',
    'Students & Tech Enthusiasts',
    'Agri-Tech & Precision Farming Professionals',
    'Anyone aiming for DGCA-certified drone authorization',
  ],
  gains: [
    'Drone Rules 2021 & DGCA compliance',
    'UIN, UAOP & NPNT ecosystem simplified',
    'Aerodynamics & flight principles',
    'Fixed-wing vs multirotor systems',
    'Drone hardware breakdown',
    'Battery handling & safety protocols',
    'Emergency handling & fail-safe strategies',
    'Simulator-based skill building',
    'Pre-flight & post-flight workflows',
    'Hands-on field flying experience',
    'Mission planning & real-world operations',
    'DGCA portal & certification guidance',
  ],
  eligibility: [
    'Minimum 18 years old',
    '10th Pass as per DGCA norms',
    'Valid Government ID',
    'Medically fit for drone operations',
    'No prior experience required',
  ],
  why: [
    'Fully aligned with DGCA certification standards',
    'Balanced mix of theory, simulation, and real flying',
    'Designed for zero to professional level transformation',
    'Practical-first learning approach',
  ],
};

const programs = [
  {
    title: 'Remote Pilot Certificate - Small Class',
    menuTitle: 'Small RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'Power Your Flight Career',
    duration: '5 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Step into the world of professional drone aviation with a DGCA-compliant Remote Pilot Certification designed for Small Class drones. A perfect blend of theory, simulation, and real-time flying aligned with Drone Rules 2021 and DGCA standards.',
    image: '/assets/training/small-training.jpeg',
    ...baseSections,
  },
  {
    title: 'Remote Pilot Certificate - Medium Class',
    menuTitle: 'Medium RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'Advance to Heavy-Duty Drone Operations',
    duration: '5 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Upgrade your capabilities with a DGCA-approved Remote Pilot Certification for Medium Class drones. Engineered for professionals aiming to handle high-capacity, industrial-grade drone operations with confidence and compliance.',
    image: '/assets/services_hero.png',
    ...baseSections,
    timeline: [
      'Day 1-2: Advanced Theory & Regulatory Framework',
      'Day 3: High-Fidelity Simulator Training',
      'Day 4-5: Live Flight Operations (Medium Class Drone)',
    ],
    droneDetails: [
      'Category: Rotorcraft (Medium)',
      'Type: Industrial Multi-Rotor Platform (Dual Controller System)',
    ],
    audience: [
      'Certified Small Class Drone Pilots upgrading to Medium',
      'Industrial Drone Operators for logistics, surveillance, and inspection',
      'Surveying & Mapping Professionals for large-scale projects',
      'Defence & Security Personnel',
      'Infrastructure & Utility Inspectors',
      'Professionals targeting advanced DGCA drone certification',
    ],
    gains: [
      'Advanced Drone Rules 2021 & DGCA compliance for Medium Class operations',
      'Airspace structure, permissions & operational restrictions',
      'Medium drone flight dynamics & load handling',
      'System architecture for heavy-lift drones',
      'Advanced components & redundancy systems',
      'Payload integration for cameras, sensors, and delivery systems',
      'High-capacity battery systems & power management',
      'Emergency procedures & risk mitigation',
      'Simulator-based precision control for large drones',
      'Pre-flight planning for complex missions',
      'Live flying experience with Medium Class drones',
      'Industrial mission execution & safety protocols',
      'DGCA portal workflow for Medium category certification',
    ],
    eligibility: [
      'Minimum 18 years old',
      '10th Pass as per DGCA norms',
      'Valid Government ID',
      'Medically fit for drone operations',
      'Prior Small Class RPC certification recommended',
    ],
    why: [
      'Built for high-capacity industrial drone operations',
      'Focused on Medium Class compliance and operational safety',
      'Combines advanced theory, simulator training, and live flying',
      'Designed for pilots ready to upgrade their license and mission capability',
    ],
  },
  {
    title: 'Remote Pilot Certificate - Small + Medium Class',
    menuTitle: 'Small And Medium RPC',
    eyebrow: 'DGCA Authorised',
    tagline: 'From Foundation to Industrial Drone Mastery',
    duration: '8 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Build and upgrade your drone piloting expertise with a DGCA-certified program covering both Small and Medium categories. Designed to deliver complete skill progression from basic flying to advanced industrial operations.',
    image: '/assets/training/small-and-medium-training.jpeg',
    ...baseSections,
    timeline: [
      'Day 1-2: Theory & Core Concepts',
      'Day 3-4: Simulator Training',
      'Day 5-8: Hands-On Flying Practice',
    ],
    droneDetails: [
      'Category: Small + Medium',
      'Type: Quad-Copter & Hexacopter (Dual Controller System)',
    ],
    audience: [
      'Aspiring Drone Pilots from beginner to advanced level',
      'Survey & Mapping Professionals',
      'Industrial Drone Operators',
      'Aerial Photography / Videography Experts',
      'Defence & Security Personnel',
      'Agriculture & Infrastructure Professionals',
      'Anyone aiming for complete DGCA drone certification',
    ],
    gains: [
      'Drone Rules 2021 & DGCA compliance',
      'UIN, UAOP, NPNT ecosystem',
      'Flight principles & aerodynamics',
      'Small vs Medium drone operations',
      'Drone components & system architecture',
      'Battery systems & safety management',
      'Emergency handling & fail-safe systems',
      'Simulator-based precision flying',
      'Pre-flight & post-flight SOPs',
      'Live flying with Small + Medium drones',
      'Mission planning & execution',
      'Industrial drone applications',
      'DGCA portal & certification workflow',
    ],
    eligibility: [
      'Minimum 18 years old',
      '10th Pass',
      'Valid Government ID',
      'Medically fit for drone operations',
      'No prior experience required; training starts from basics',
    ],
    why: [
      'Covers both Small + Medium categories in one program',
      'Hands-on experience with Quad & Hexacopter platforms',
      'Industry-focused training for real-world applications',
      'DGCA-aligned certification pathway',
      'From beginner to professional-level expertise',
      'One Program -> Dual Certification Path',
      'Learn -> Practice -> Master -> Operate Professionally',
    ],
  },
  {
    title: 'Inspector Development Course',
    menuTitle: 'Inspector Development Course',
    eyebrow: 'DGCA Authorised',
    tagline: 'Become a DGCA-Ready Drone Instructor',
    duration: '3 Days Intensive',
    certification: 'DGCA Certified',
    overview:
      'Step into a leadership role in the drone industry with this Instructor Development Program designed for certified RPC holders. This course builds advanced flight experience + professional teaching capability, aligning with DGCA standards under Drone Rules 2021.',
    image: '/assets/services/diplomo-course.jpeg',
    timeline: [
      'Day 1: Flight Logging & Theory Sessions - 20 Hours Program Foundation',
      'Day 2: Simulator Briefings & Student Assessment Techniques',
      'Day 3: Real-Time Flying Sessions & Mentoring Practice',
    ],
    droneDetails: [
      'Category: Rotorcraft (Small / Medium)',
      'Type: Quad & Hexacopter Training Platforms',
    ],
    audience: [
      'Certified Remote Pilot Certificate (RPC) holders',
      'Pilots aiming to become DGCA-certified instructors',
      'RPTO staff & training coordinators',
      'Experienced drone operators transitioning into training roles',
    ],
    gains: [
      '20 Hours Structured Flight Logging',
      'Verified logbook documentation for compliance',
      'Supervised real-time flying sessions',
      'Simulator-based performance evaluation',
      'Exposure to professional RPTO training workflows',
      'Delivering high-impact theory sessions',
      'Conducting simulator briefings & evaluations',
      'Practical flying instruction & student assessment techniques',
      'Communication, mentoring & classroom control',
      'Exam preparation & pilot performance coaching',
      'Batch planning & structured training delivery',
      'Safety protocols & operational risk management',
      'DGCA documentation & audit preparedness',
      'Maintaining quality standards in training operations',
    ],
    eligibility: [
      'Valid Remote Pilot Certificate (RPC)',
      'Minimum 18 years old',
      'Valid Government ID',
      'Medically fit for drone operations',
      'Prior flying experience with Small or Medium class drones',
    ],
    why: [
      'Combines flight mastery with instructional excellence',
      'Fully aligned with DGCA instructor qualification pathway',
      'Real-world exposure to training & evaluation environments',
      'Designed for immediate transition into instructor roles',
      'Achieve required flight logging benchmarks',
      'Position yourself for DGCA-recognised instructor opportunities',
    ],
  },
];

const simplePrograms = [
  'Aerial Mapping and Surveying',
  'FPV Flying',
  'Agri Drone (Spray & Precision Agriculture)',
  'Aerial Videography and Photography',
  'Drone Basics',
  'GIS for Drone Data Processing',
  'Drone Repair and Maintenance',
  'Python for GIS',
  'LiDAR & GIS',
].map((title) => ({
  title,
  menuTitle: title,
  eyebrow: title.includes('Days') ? 'Internship Track' : 'Skill Program',
  tagline: 'Hands-On Drone Learning',
  duration: title.includes('6 Months') ? '6 Months' : title.includes('Days') ? title : 'Short-Term Program',
  certification: title.includes('RPC') ? 'DGCA Certified' : 'Completion Certificate',
  overview: `Build practical capability in ${title.toLowerCase()} through guided sessions, demonstrations, practice tasks, and project-style learning designed for real drone industry workflows.`,
  image: title.includes('Agri') ? '/assets/services_hero.png' : '/assets/training_hero.png',
  timeline: ['Concept Briefing and Safety Orientation', 'Tool Demonstration and Guided Practice', 'Project Task, Review, and Next Steps'],
  droneDetails: ['Category: Training / Skill Development', 'Mode: Classroom, simulator, and field practice as applicable'],
  audience: ['Students', 'Drone enthusiasts', 'Working professionals', 'Creators and survey teams', 'Anyone entering drone technology'],
  gains: ['Practical workflow understanding', 'Tool and equipment confidence', 'Safety-first operating mindset', 'Industry use-case exposure', 'Guided practice and feedback'],
  eligibility: ['Basic interest in drones', 'Valid ID for registration', 'No prior experience required unless specified'],
  why: ['Built around practical learning', 'Mentor-led sessions', 'Drone industry focused examples', 'Clear next-step guidance'],
}));

const diplomaPrograms = [
  {
    title: 'Advanced Diploma in Drone Technology & Operations',
    menuTitle: 'Drone Technician (6 Months)',
    eyebrow: 'Diploma Program',
    tagline: '6-Month Professional Drone Training Program',
    duration: '6 Months',
    certification: 'Advanced Diploma',
    overview:
      'Transform your passion for drones into a professional career with our 6-Month Advanced Diploma Program in Drone Technology & Operations. Designed with an industry-focused curriculum, this program combines technical knowledge, practical flying, drone assembly, mapping, mission planning, and industrial applications to prepare students for real-world opportunities in the rapidly growing drone sector.',
    image: '/assets/services/workshop-build-your-own-drone.jpeg',
    courseDuration: [
      'Duration: 6 Months',
      'Mode: Offline + Practical Training',
      'Training Style: Classroom + Simulator + Field Operations',
    ],
    droneDetails: [
      'Drone Category: Small Class Drones',
      'Drone Category: Medium Class Drones',
      'Platform: Quad-Copter',
      'Platform: Hexacopter',
      'Platform: Fixed-Wing Basics',
    ],
    audience: [
      'Students & Freshers',
      'Engineering / Polytechnic Students',
      'Drone Enthusiasts',
      'Survey & Mapping Aspirants',
      'Photographers & Videographers',
      'Agriculture Professionals',
      'Entrepreneurs & Startup Founders',
      'Anyone seeking a career in drone technology',
    ],
    modules: [
      'Drone Fundamentals',
      'Drone Components & Assembly',
      'Flight Training',
      'Surveying & Mapping',
      'Industrial Applications',
      'Aerial Media Production',
      'Software & Mission Planning',
      'Internship & Live Projects',
    ],
    facilities: [
      'Advanced Drone Lab',
      'Flight Simulators',
      'Dedicated Flying Zone',
      'Mapping & Processing Systems',
      'Industry-Standard Drone Platforms',
    ],
    highlights: [
      'Industry-Oriented Curriculum',
      'Hands-On Practical Training',
      'Real-Time Flying Experience',
      'Drone Assembly & Maintenance',
      'Survey & Mapping Exposure',
      'Industrial Application Training',
      'Internship & Project Support',
      'Career Guidance & Skill Development',
    ],
    careers: [
      'Drone Pilot',
      'Survey & Mapping Operator',
      'Drone Service Technician',
      'Aerial Photographer / Videographer',
      'Agriculture Drone Operator',
      'Inspection & Monitoring Specialist',
      'Drone Instructor',
      'UAV Project Coordinator',
    ],
    finalTakeaway: 'Learn. Build. Fly. Lead the Future of Aviation.',
  },
];

const workshopPrograms = [
  {
    title: 'Build Your Own Drone Workshop',
    menuTitle: 'Build Your Own Drone',
    eyebrow: 'Drone Workshop',
    tagline: 'Design - Assemble - Fly',
    duration: '1 Day / 2 Days / Weekend Workshop',
    certification: 'Workshop Participation',
    overview:
      'Experience the excitement of building and flying your own drone from scratch in this hands-on practical workshop designed for beginners, students, innovators, and drone enthusiasts. Learn the complete process of assembling, configuring, calibrating, and flying a drone with guidance from industry professionals. This workshop blends technical learning with real-time practical exposure to help participants understand how drones actually work beyond just flying them.',
    image: '/assets/services/fpv-drone-building.jpeg',
    durationTitle: 'Workshop Duration',
    courseDuration: [
      '1 Day / 2 Days / Weekend Workshop',
      'Offline Practical Session',
    ],
    buildTitle: 'What You Will Build',
    buildItems: [
      'Quad-Copter Drone',
      'Flight-Ready DIY Drone System',
    ],
    audience: [
      'School & College Students',
      'Engineering / Polytechnic Students',
      'Drone Enthusiasts',
      'Beginners with no prior experience',
      'Robotics & Tech Club Members',
      'Startup & Innovation Aspirants',
    ],
    highlightTitle: 'Workshop Highlights',
    highlights: [
      'Introduction to Drone Technology',
      'Understanding Drone Components',
      'Frame Assembly & Wiring',
      'Flight Controller Setup',
      'ESC & Motor Connections',
      'Propeller Installation & Balancing',
      'GPS & Receiver Integration',
      'Battery & Power Management',
      'Drone Calibration & Configuration',
      'Safety Procedures & Pre-Flight Checks',
      'Basic Flight Controls',
      'Hands-On Flying Experience',
      'Troubleshooting & Maintenance Basics',
    ],
    skills: [
      'Practical Drone Assembly Knowledge',
      'Hardware Integration Skills',
      'Basic Electronics & Wiring Understanding',
      'Flight Safety Awareness',
      'Real-Time Problem Solving',
      'Drone Operation Confidence',
    ],
    facilitiesTitle: 'Workshop Facilities',
    facilities: [
      'Fully Equipped Drone Lab',
      'Professional Tools & Components',
      'Simulator Support',
      'Dedicated Flying Area',
      'Industry-Standard Equipment',
    ],
    why: [
      'Learn by Building',
      'Practical Hands-On Experience',
      'Beginner-Friendly Training',
      'Interactive Learning Environment',
      'Real Drone Flying Exposure',
      'Industry-Oriented Guidance',
    ],
    outcomes: [
      'Understand drone architecture',
      'Assemble a working drone',
      'Configure and calibrate systems',
      'Perform safe take-off & landing',
      'Gain confidence in drone technology fundamentals',
    ],
    finalTakeaway: "Don't just fly a drone. Build one yourself.",
  },
  {
    title: 'FPV Racing Drone Building Workshop',
    menuTitle: 'Build Your Racing Drone',
    eyebrow: 'Drone Workshop',
    tagline: 'Build Fast - Fly Smart - Race Hard',
    duration: '1 Day / 2 Days / Weekend Workshop',
    certification: 'Workshop Participation',
    overview:
      'Dive into the thrilling world of FPV (First Person View) Racing Drones with this intensive hands-on workshop designed for speed enthusiasts, makers, and future drone racers. Learn how to build, tune, configure, and fly a high-performance FPV racing drone from the ground up. This workshop combines electronics, aerodynamics, flight control systems, and real-time FPV flying experience to give participants a complete introduction to competitive drone racing technology.',
    image: '/assets/training_hero.png',
    durationTitle: 'Workshop Duration',
    courseDuration: [
      '1 Day / 2 Days / Weekend Workshop',
      'Offline Practical Training',
    ],
    buildTitle: 'What You Will Build',
    buildItems: [
      'FPV Racing Drone',
      'High-Speed Quad-Copter Platform',
    ],
    audience: [
      'Drone Enthusiasts',
      'Engineering & Polytechnic Students',
      'FPV Beginners',
      'Robotics & Tech Club Members',
      'Gamers & Racing Enthusiasts',
      'DIY Electronics Learners',
      'Innovation & Startup Aspirants',
    ],
    highlightTitle: 'Workshop Highlights',
    highlights: [
      'Introduction to FPV Drone Ecosystem',
      'Understanding Racing Drone Architecture',
      'Frame Assembly & Carbon Fiber Setup',
      'Flight Controller & ESC Integration',
      'Motor Installation & Wiring',
      'FPV Camera & Video Transmission System',
      'Receiver & Radio Controller Setup',
      'Soldering Techniques & Circuit Safety',
      'Betaflight Configuration & Tuning',
      'Battery Management & Power Distribution',
      'Propeller Selection & Balancing',
      'Drone Calibration & Testing',
      'FPV Goggles Setup & Usage',
      'Flight Modes & Racing Techniques',
      'Hands-On FPV Flying Practice',
      'Safety Procedures & Crash Recovery Basics',
    ],
    skills: [
      'FPV Drone Building Expertise',
      'Soldering & Electronics Skills',
      'Flight Controller Configuration',
      'FPV System Setup Knowledge',
      'Real-Time Racing Drone Handling',
      'Troubleshooting & Maintenance Skills',
    ],
    facilitiesTitle: 'Workshop Facilities',
    facilities: [
      'Professional FPV Drone Lab',
      'Racing Drone Components & Tools',
      'FPV Goggles & Controllers',
      'Dedicated Practice Arena',
      'Simulator Support for Beginners',
    ],
    why: [
      'Learn to Build Your Own Racing Drone',
      'Real FPV Flying Experience',
      'Beginner-Friendly Practical Training',
      'Exposure to Competitive Drone Racing',
      'Hands-On Electronics & Tuning Skills',
      'Industry & Hobby Level Learning',
    ],
    outcomes: [
      'Build a functional FPV racing drone',
      'Configure and tune flight systems',
      'Understand FPV communication systems',
      'Perform controlled FPV flights',
      'Gain confidence in drone racing technology',
    ],
    finalTakeaway: 'Build the machine. Wear the goggles. Own the race.',
  },
  {
    title: 'Agri Drone Building Workshop',
    menuTitle: 'Build Your Own Agri Drone',
    eyebrow: 'Drone Workshop',
    tagline: 'Build Smart Farming Solutions with Drone Technology',
    duration: '1 Day / 2 Days / Weekend Workshop',
    certification: 'Workshop Participation',
    overview:
      'Step into the future of precision agriculture with our Agri Drone Building Workshop designed for innovators, students, farmers, and drone enthusiasts. Learn how to assemble, configure, calibrate, and operate agricultural spraying drones used in modern smart farming applications. This hands-on workshop provides practical exposure to drone technology for agriculture, including spraying systems, payload integration, and field operation techniques.',
    image: '/assets/services/agri-drone-workshop.jpeg',
    durationTitle: 'Workshop Duration',
    courseDuration: [
      '1 Day / 2 Days / Weekend Workshop',
      'Offline Practical Training',
    ],
    buildTitle: 'What You Will Build',
    buildItems: [
      'Agricultural Spraying Drone',
      'Multi-Rotor Agri Drone Platform',
    ],
    audience: [
      'Agriculture Students & Professionals',
      'Drone Enthusiasts',
      'Engineering & Polytechnic Students',
      'Farmers & Agri-Tech Innovators',
      'Startup Founders & Entrepreneurs',
      'Precision Farming Aspirants',
    ],
    highlightTitle: 'Workshop Highlights',
    highlights: [
      'Introduction to Agricultural Drone Technology',
      'Smart Farming & Precision Agriculture Concepts',
      'Agri Drone Frame Assembly',
      'Motor, ESC & Propeller Integration',
      'Flight Controller Configuration',
      'GPS & Navigation System Setup',
      'Sprayer Tank & Nozzle Integration',
      'Pump & Spraying Mechanism Setup',
      'Battery & Power Distribution System',
      'Wiring & Safety Procedures',
      'Drone Calibration & System Testing',
      'Payload Management & Spraying Control',
      'Mission Planning for Agriculture Operations',
      'Field Demonstration & Flying Practice',
      'Maintenance & Troubleshooting Basics',
    ],
    skills: [
      'Agri Drone Assembly Knowledge',
      'Spraying System Integration Skills',
      'Precision Agriculture Understanding',
      'Flight & Payload Management',
      'Basic Electronics & Wiring Skills',
      'Drone Maintenance & Operational Safety',
    ],
    facilitiesTitle: 'Workshop Facilities',
    facilities: [
      'Advanced Drone Lab',
      'Agricultural Drone Components',
      'Professional Tools & Equipment',
      'Dedicated Flying & Demonstration Area',
      'Real-Time Practical Training Environment',
    ],
    why: [
      'Learn Future Farming Technology',
      'Hands-On Drone Building Experience',
      'Industry-Oriented Practical Training',
      'Exposure to Smart Agriculture Solutions',
      'Beginner-Friendly Learning Approach',
      'Real-World Agricultural Applications',
    ],
    outcomes: [
      'Understand agricultural drone systems',
      'Build and configure an agri drone',
      'Operate spraying mechanisms safely',
      'Perform basic mission planning',
      'Gain confidence in precision farming technology',
    ],
    finalTakeaway: 'Build smarter drones. Empower smarter farming.',
  },
  {
    title: 'Drone Customization Workshop',
    menuTitle: 'Drone Customization',
    eyebrow: 'Drone Workshop',
    tagline: 'Design - Modify - Upgrade Your Drone',
    duration: '1 Day / 2 Days / Weekend Workshop',
    certification: 'Workshop Participation',
    overview:
      'Unlock the next level of drone technology with our Drone Customization Workshop, designed for drone enthusiasts, makers, engineers, and innovators who want to personalize and upgrade drone systems for specific applications. Learn how to modify drone frames, integrate advanced components, optimize performance, and customize drones for industrial, cinematic, racing, and agricultural operations through hands-on practical sessions.',
    image: '/assets/services/drone-customization.jpeg',
    durationTitle: 'Workshop Duration',
    courseDuration: [
      '1 Day / 2 Days / Weekend Workshop',
      'Offline Practical Training',
    ],
    buildTitle: 'Customization Areas Covered',
    buildItems: [
      'Performance Upgrades',
      'Payload Integration',
      'Camera & Gimbal Setup',
      'FPV System Customization',
      'Battery & Power Optimization',
      'Frame Modification & Tuning',
    ],
    audience: [
      'Drone Enthusiasts',
      'Engineering & Polytechnic Students',
      'FPV & Racing Drone Builders',
      'Aerial Photography Creators',
      'Agri Drone Operators',
      'Industrial Drone Professionals',
      'DIY Tech Innovators & Startup Founders',
    ],
    highlightTitle: 'Workshop Highlights',
    highlights: [
      'Introduction to Drone Customization',
      'Understanding Drone Architecture',
      'Frame Selection & Modifications',
      'Flight Controller Configuration',
      'ESC & Motor Upgrades',
      'Battery & Power Distribution Optimization',
      'Payload & Sensor Integration',
      'Camera, Gimbal & FPV System Setup',
      'GPS & Telemetry Configuration',
      'Firmware Installation & Tuning',
      'Flight Performance Optimization',
      'Weight Balancing & Aerodynamics',
      'Mission-Based Drone Customization',
      'Safety Checks & System Calibration',
      'Live Testing & Flying Demonstration',
      'Troubleshooting & Maintenance Techniques',
    ],
    skills: [
      'Drone Modification Expertise',
      'Hardware Integration Skills',
      'Performance Tuning Knowledge',
      'Payload Configuration Techniques',
      'Flight Stability Optimization',
      'Real-Time Troubleshooting Ability',
    ],
    facilitiesTitle: 'Workshop Facilities',
    facilities: [
      'Advanced Drone Lab',
      'Professional Tools & Components',
      'Flight Simulators',
      'Dedicated Flying Zone',
      'Industry-Standard Equipment Access',
    ],
    why: [
      'Hands-On Technical Experience',
      'Learn Real Drone Upgrade Techniques',
      'Beginner to Advanced Friendly',
      'Exposure to Multiple Drone Applications',
      'Practical Industry-Oriented Learning',
      'Build & Customize Based on Your Mission Needs',
    ],
    outcomes: [
      'Understand drone customization workflows',
      'Upgrade and optimize drone systems',
      'Configure mission-specific setups',
      'Improve flight performance & stability',
      'Gain confidence in advanced drone modification',
    ],
    finalTakeaway: "Don't just fly drones. Customize them your way.",
  },
];

const internshipPrograms = [
  {
    title: '7-Day Drone Internship Program',
    menuTitle: '7 Days',
    eyebrow: 'Internship Program',
    tagline: 'Learn - Build - Fly - Innovate',
    duration: '7 Days',
    certification: 'Internship Certificate',
    overview:
      'Kickstart your journey into the world of drone technology with our 7-Day Intensive Drone Internship Program designed for students, beginners, and technology enthusiasts. This internship delivers a powerful blend of drone fundamentals, practical flying, drone assembly, mission planning, and real-time field exposure to help participants gain industry-oriented skills in a short duration.',
    image: '/assets/services/7days-drone-internship.jpeg',
    durationTitle: 'Internship Duration',
    courseDuration: [
      'Duration: 7 Days',
      'Mode: Offline Practical Training',
      'Training Style: Classroom + Simulator + Live Flying Sessions',
    ],
    fee: 'Rs. 3,499/- Only',
    feeNote: 'Inclusive of Training Materials & Practical Sessions',
    buildTitle: 'Training Areas Covered',
    buildItems: [
      'Drone Basics & UAV Technology',
      'Drone Components & Working Systems',
      'Drone Assembly Fundamentals',
      'Flight Simulator Training',
      'Hands-On Flying Practice',
      'Safety Procedures & Flight Protocols',
      'Drone Applications & Industry Use Cases',
    ],
    audience: [
      'School & College Students',
      'Engineering / Polytechnic Students',
      'Drone Enthusiasts',
      'Beginners with No Experience',
      'Robotics & Tech Club Members',
      'Startup & Innovation Aspirants',
    ],
    highlightTitle: 'Internship Highlights',
    highlights: [
      'Introduction to Drone Technology',
      'Drone Rules & Safety Awareness',
      'Understanding Motors, ESC, GPS & Flight Controllers',
      'Basic Drone Assembly',
      'Flight Simulator Practice',
      'Manual Drone Flying Techniques',
      'Pre-flight & Post-flight Checks',
      'Industrial Drone Applications',
      'Team Activities & Practical Sessions',
      'Live Flying Demonstration',
    ],
    skills: [
      'Drone Operation Fundamentals',
      'Basic Flying Confidence',
      'Hardware & System Understanding',
      'Safety & Maintenance Knowledge',
      'Practical Exposure to Drone Industry',
    ],
    facilitiesTitle: 'Training Facilities',
    facilities: [
      'Advanced Drone Lab',
      'Flight Simulator Access',
      'Dedicated Flying Zone',
      'Practical Learning Environment',
      'Industry-Standard Drone Platforms',
    ],
    why: [
      'Beginner-Friendly Program',
      'Practical Hands-On Training',
      'Industry-Oriented Learning',
      'Exposure to Real Drone Operations',
      'Skill Development & Career Awareness',
      'Internship Certificate Provided',
    ],
    outcomes: [
      'Understand drone technology fundamentals',
      'Fly drones with confidence',
      'Perform basic assembly',
      'Gain exposure to industrial drone applications',
      'Build a strong foundation for future drone careers',
    ],
    outcomeTitle: 'Internship Outcome',
    finalTakeaway: 'Your drone journey starts here. Learn today, fly tomorrow.',
  },
  {
    title: '15-Day Drone Internship Program',
    menuTitle: '15 Days',
    eyebrow: 'Internship Program',
    tagline: 'Learn - Build - Fly - Explore the Future of Aviation',
    duration: '15 Days',
    certification: 'Internship Certificate',
    overview:
      'Take your first major step into the drone industry with our 15-Day Intensive Drone Internship Program crafted for students, beginners, and aspiring drone professionals. This program combines technical learning, practical flying, drone assembly, mapping, mission planning, and industrial applications to provide a complete hands-on learning experience.',
    image: '/assets/services/15days-drone-workshop.jpeg',
    durationTitle: 'Internship Duration',
    courseDuration: [
      'Duration: 15 Days',
      'Mode: Offline Practical Training',
      'Training Style: Classroom + Simulator + Live Field Sessions',
    ],
    fee: 'Rs. 6,999/- Only',
    feeNote: 'Inclusive of Training Materials & Practical Sessions',
    buildTitle: 'Training Areas Covered',
    buildItems: [
      'Drone Fundamentals & UAV Technology',
      'Drone Components & Electronics',
      'Drone Assembly & Calibration',
      'Flight Simulator Training',
      'Basic to Advanced Flying Techniques',
      'Mission Planning & Flight Operations',
      'Aerial Photography & Videography',
      'Surveying & Mapping Basics',
      'Industrial Drone Applications',
      'Safety Procedures & Maintenance',
    ],
    audience: [
      'School & College Students',
      'Engineering / Polytechnic Students',
      'Drone Enthusiasts',
      'Beginners & Tech Learners',
      'Robotics Club Members',
      'Startup & Innovation Aspirants',
    ],
    highlightTitle: 'Internship Highlights',
    highlights: [
      'Introduction to Drone Ecosystem',
      'Drone Rules & Airspace Awareness',
      'Flight Principles & Aerodynamics',
      'Understanding ESC, Motors, GPS & Flight Controllers',
      'Hands-On Drone Assembly Sessions',
      'Simulator Flying Practice',
      'Live Drone Flying Training',
      'Pre-flight & Post-flight SOPs',
      'Emergency Handling Techniques',
      'Mapping & Survey Workflow Basics',
      'Agriculture & Industrial Drone Applications',
      'FPV & Advanced Drone Introduction',
      'Team Projects & Field Activities',
      'Real-Time Mission Demonstration',
      'Career Guidance in Drone Industry',
    ],
    skills: [
      'Drone Flying Confidence',
      'Basic Assembly & Wiring Skills',
      'Flight Safety Awareness',
      'Mission Planning Understanding',
      'Technical Knowledge of UAV Systems',
      'Real-Time Operational Exposure',
    ],
    facilitiesTitle: 'Training Facilities',
    facilities: [
      'Advanced Drone Lab',
      'Professional Flight Simulators',
      'Dedicated Flying Field',
      'Industry-Standard Drone Platforms',
      'Practical Learning Environment',
    ],
    why: [
      'Hands-On Practical Experience',
      'Industry-Oriented Curriculum',
      'Beginner-Friendly Learning Approach',
      'Exposure to Real Drone Operations',
      'Skill Development & Career Growth',
      'Internship Certificate Provided',
    ],
    outcomes: [
      'Understand drone technology fundamentals',
      'Assemble and configure basic drones',
      'Perform safe drone operations',
      'Execute basic mapping & mission planning',
      'Gain confidence for advanced drone learning',
    ],
    outcomeTitle: 'Internship Outcome',
    finalTakeaway: 'Build skills. Fly smarter. Shape the future with drones.',
  },
  {
    title: '30-Day Drone Internship Program',
    menuTitle: '30 Days',
    eyebrow: 'Internship Program',
    tagline: 'Master Drone Technology with Real-Time Practical Training',
    duration: '30 Days',
    certification: 'Internship Certificate',
    overview:
      'Step into the world of advanced drone technology with our 30-Day Intensive Drone Internship Program designed for students, aspiring drone pilots, and technology enthusiasts. This comprehensive program offers a perfect blend of theory, simulator practice, drone assembly, live flying, mapping, mission planning, and industrial applications to provide complete industry-oriented exposure.',
    image: '/assets/services/30days-drone-internship.jpeg',
    durationTitle: 'Internship Duration',
    courseDuration: [
      'Duration: 30 Days',
      'Mode: Offline Practical Training',
      'Training Style: Classroom + Simulator + Field Operations',
    ],
    fee: 'Rs. 10,000/- Only',
    feeNote: 'Inclusive of Training Materials & Practical Sessions',
    buildTitle: 'Training Areas Covered',
    buildItems: [
      'Drone Fundamentals & UAV Technology',
      'Drone Components & Electronics',
      'Drone Assembly & Configuration',
      'Flight Simulator Training',
      'Basic to Advanced Flying Techniques',
      'Mission Planning & Flight Operations',
      'Surveying & Mapping Basics',
      'Aerial Photography & Videography',
      'Industrial Drone Applications',
      'Safety Procedures & Maintenance',
      'FPV Drone Introduction',
      'Agriculture Drone Basics',
      'Live Field Operations & Team Projects',
    ],
    audience: [
      'School & College Students',
      'Engineering / Polytechnic Students',
      'Drone Enthusiasts',
      'Beginners & Tech Learners',
      'Robotics Club Members',
      'Startup & Innovation Aspirants',
      'Anyone interested in drone technology careers',
    ],
    highlightTitle: 'Internship Highlights',
    highlights: [
      'Introduction to Drone Ecosystem',
      'Drone Rules & Airspace Awareness',
      'Flight Principles & Aerodynamics',
      'ESC, Motors, GPS & Flight Controller Systems',
      'Hands-On Drone Assembly Sessions',
      'Simulator Flying Practice',
      'Live Drone Flying Training',
      'Pre-flight & Post-flight SOPs',
      'Emergency Handling & Safety Procedures',
      'Mapping & Survey Workflow Introduction',
      'Agriculture & Industrial Drone Exposure',
      'Mission Planning & Data Collection Basics',
      'Team-Based Practical Activities',
      'Real-Time Flying Demonstrations',
      'Career Guidance & Industry Exposure',
    ],
    skills: [
      'Drone Flying Confidence',
      'Assembly & Calibration Skills',
      'Mission Planning Knowledge',
      'Flight Safety Awareness',
      'Technical Understanding of Drone Systems',
      'Real-Time Operational Experience',
    ],
    facilitiesTitle: 'Training Facilities',
    facilities: [
      'Advanced Drone Lab',
      'Professional Flight Simulators',
      'Dedicated Flying Field',
      'Industry-Standard Drone Platforms',
      'Practical Learning Environment',
    ],
    why: [
      'Complete Hands-On Practical Training',
      'Industry-Oriented Learning Approach',
      'Beginner-Friendly to Advanced Exposure',
      'Real Drone Flying Experience',
      'Skill Development & Career Enhancement',
      'Internship Certificate Provided',
    ],
    outcomes: [
      'Understand drone technology fundamentals',
      'Assemble and configure drones',
      'Perform safe and controlled drone operations',
      'Execute basic mapping & mission workflows',
      'Gain confidence for advanced drone careers',
    ],
    outcomeTitle: 'Internship Outcome',
    finalTakeaway: 'Learn the technology. Fly the future. Build your drone career.',
  },
];

const skillPrograms = [
  {
    title: 'Aerial Mapping & Surveying Program',
    menuTitle: 'Aerial Mapping and Surveying',
    eyebrow: 'Skill Program',
    tagline: 'Professional Drone Mapping & Geospatial Training',
    duration: '7 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Master the complete workflow of drone-based mapping and surveying, from flight planning to data processing and analysis. This program builds real-world skills in photogrammetry, GIS, and industrial mapping applications.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Mapping Fundamentals & Photogrammetry Basics',
      'Day 2: Drone Systems & Sensor Setup',
      'Day 3: Flight Planning & Mission Design',
      'Day 4: Field Data Acquisition (Live Flying)',
      'Day 5: Data Processing & Map Generation',
      'Day 6: GIS Analysis & Measurements',
      'Day 7: Live Project + Output Presentation',
    ],
    droneDetails: [
      'Drone Type: Mapping-Optimized UAVs',
      'Sensors: RGB Camera',
      'Introductory exposure to LiDAR workflows',
    ],
    tools: ['Pix4Dmapper', 'DroneDeploy', 'Agisoft Metashape', 'QGIS'],
    audience: [
      'Surveyors & Civil Engineers',
      'Drone Pilots upgrading their skills',
      'Construction & Infrastructure Professionals',
      'Mining & Land Development Teams',
      'Agriculture & GIS Enthusiasts',
      'Anyone interested in drone mapping & geospatial technology',
    ],
    gains: [
      'Photogrammetry fundamentals',
      'Ground Control Points (GCP) setup',
      'Flight planning for grid and corridor missions',
      'Overlap, sidelap & GSD optimization',
      'Automated mapping missions',
      'Orthomosaic map generation',
      'Digital Elevation Model (DEM) creation',
      '3D modeling & reconstruction',
      'Area, distance & volume calculations',
      'GIS-based data analysis',
      'Exporting professional survey outputs',
      'End-to-end mapping workflow',
    ],
    practical: [
      'Real-time field survey experience',
      'Hands-on drone flight for mapping missions',
      'Complete data-to-delivery workflow',
      'Industry-use case projects',
    ],
    eligibility: [
      'Minimum 18 years',
      'Basic understanding of drones preferred, not mandatory',
      'Open to beginners & professionals',
    ],
    why: [
      'Complete end-to-end mapping training',
      'Hands-on with industry-standard tools',
      'Focus on real-world applications & outputs',
      'Ideal for career and business opportunities',
      'Learn to deliver client-ready mapping data',
    ],
    finalTakeaway: 'Capture -> Process -> Analyze -> Deliver. Turn drone data into actionable insights.',
  },
  {
    title: 'FPV Drone Flying',
    menuTitle: 'FPV Flying',
    eyebrow: 'Skill Program',
    tagline: 'From First Flight to Pro-Level FPV Control',
    duration: '7 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Step into First Person View drone flying, where speed meets precision. This program takes you from basic controls to advanced freestyle and cinematic flying with a strong focus on safety and real-world use.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: FPV Basics & Drone Components',
      'Day 2: Simulator Training & Controls',
      'Day 3: Manual Mode (Acro) Fundamentals',
      'Day 4: Real-Time Flying Practice (Beginner)',
      'Day 5: Advanced Maneuvers & Freestyle',
      'Day 6: Cinematic Flying Techniques',
      'Day 7: Live Project + Performance Evaluation',
    ],
    droneDetails: [
      'Type: FPV Racing & Cinematic Drones',
      'Configuration: Quadcopters',
      'System: Analog / Digital FPV Systems',
    ],
    tools: ['Liftoff', 'DRL Simulator'],
    audience: [
      'Drone Enthusiasts & Beginners',
      'Aerial Cinematographers',
      'Content Creators / Filmmakers',
      'Racing Drone Aspirants',
      'Freestyle FPV Pilots',
      'Anyone passionate about high-speed drone flying',
    ],
    gains: [
      'FPV drone components & setup',
      'Radio transmitter controls & tuning',
      'Flight modes including Angle, Horizon, and Acro',
      'Simulator-based training',
      'Manual (Acro) flight control',
      'Takeoff, hovering & landing techniques',
      'High-speed navigation & obstacle flying',
      'Freestyle tricks including rolls, flips, and dives',
      'Cinematic FPV movements',
      'Camera angles & shot composition',
      'Safety protocols & crash handling',
      'Basic troubleshooting & maintenance',
    ],
    practical: [
      'Hands-on real FPV drone flying',
      'Progressive skill-building from simulator to real-world',
      'Practice in controlled and outdoor environments',
      'Final performance-based flying challenge',
    ],
    eligibility: ['Minimum 16+ years recommended', 'No prior FPV experience required', 'Basic drone knowledge is a plus'],
    why: [
      'Step-by-step progression from beginner to advanced FPV',
      'Focus on both freestyle and cinematic flying',
      'Real-world training with industry-relevant scenarios',
      'Learn precision control and confidence flying',
      'Perfect for content creation and professional use',
    ],
    finalTakeaway: 'Train -> Practice -> Control -> Create. Fly with speed, skill, and creativity.',
  },
  {
    title: 'Agri Drone',
    menuTitle: 'Agri Drone (Spray & Precision Agriculture)',
    eyebrow: 'Skill Program',
    tagline: 'From Smart Farming Basics to Professional Spray Operations',
    duration: '5 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Step into the future of farming with drone-based agriculture solutions. This program equips learners to perform precision spraying, crop monitoring, and smart farm management using agri drones.',
    image: '/assets/services_hero.png',
    timeline: [
      'Day 1: Agriculture Drone Basics & Regulations',
      'Day 2: Drone Setup & Spray System Calibration',
      'Day 3: Flight Training & Spray Operations (Practice)',
      'Day 4: Precision Agriculture & Field Mapping',
      'Day 5: Live Field Project + Performance Evaluation',
    ],
    droneDetails: [
      'Type: Agriculture Spraying Drones',
      'Capacity: 10L - 30L Tank Systems',
      'Features: GPS-based autonomous spraying, terrain following',
    ],
    tools: ['DroneDeploy', 'Pix4Dfields'],
    audience: [
      'Farmers & Agri-Entrepreneurs',
      'Agriculture Graduates',
      'Drone Pilots upskilling',
      'Agri Service Providers',
      'Rural Business Owners',
      'Anyone interested in smart farming technologies',
    ],
    gains: [
      'Basics of precision agriculture',
      'Drone Rules & operational safety',
      'Agri drone components & spray mechanisms',
      'Tank setup, nozzle types & calibration',
      'Spray planning for coverage, dosage, and efficiency',
      'Autonomous flight for spraying',
      'Battery management & field operations',
      'Crop monitoring & health analysis',
      'Basic mapping for agriculture insights',
      'Pesticide handling & safety practices',
      'Maintenance & troubleshooting',
    ],
    practical: [
      'Live spray operation training in real fields',
      'Hands-on drone calibration & mission execution',
      'Exposure to real farming scenarios',
      'End-to-end spray workflow practice',
    ],
    eligibility: [
      'Minimum 18 years',
      'Basic understanding of farming preferred',
      'Open to beginners & professionals',
    ],
    why: [
      'Focus on real agricultural applications',
      'Hands-on training with spray drones',
      'Learn precision farming techniques',
      'High-demand skill in modern agriculture sector',
      'Opportunity to start agri drone services business',
    ],
    finalTakeaway: 'Spray Smart -> Save Resources -> Increase Yield. Transform farming with drone technology.',
  },
  {
    title: 'Aerial Videography & Photography',
    menuTitle: 'Aerial Videography and Photography',
    eyebrow: 'Skill Program',
    tagline: 'From Basic Shots to Professional Drone Cinematics',
    duration: '5 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Learn the art of capturing stunning aerial visuals using drones. Build skills in composition, camera control, and cinematic storytelling for real-world photo and video projects.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Drone Camera Basics & Photography Principles',
      'Day 2: Flight Controls for Cinematic Shots',
      'Day 3: Aerial Photography Techniques',
      'Day 4: Cinematic Videography & Movements',
      'Day 5: Editing + Final Project',
    ],
    droneDetails: [
      'Drone Type: Camera Drones (Gimbal Stabilized)',
      'Camera: 4K / 5K Video and High-Resolution Photo Capture',
      'Stabilization: 3-Axis Gimbal System',
    ],
    tools: ['Adobe Premiere Pro', 'DaVinci Resolve'],
    audience: [
      'Content Creators & YouTubers',
      'Photographers & Videographers',
      'Drone Pilots upgrading creative skills',
      'Marketing & Media Professionals',
      'Travel & Lifestyle Creators',
      'Anyone passionate about visual storytelling',
    ],
    gains: [
      'Camera settings including ISO, shutter, and aperture basics',
      'Composition techniques including rule of thirds, framing, and leading lines',
      'Drone movement for cinematic shots',
      'Smooth flying techniques',
      'Aerial photography styles',
      'Cinematic video shots including orbit, reveal, tracking, and top-down',
      'Lighting & golden hour shooting',
      'ND filters & exposure control',
      'Shot planning & storytelling',
      'Basic color grading & video editing',
      'Exporting content for social media and clients',
    ],
    practical: [
      'Hands-on outdoor shooting sessions',
      'Real-time cinematic shot practice',
      'Guided creative project execution',
      'Portfolio-ready final output creation',
    ],
    eligibility: ['Minimum 16+ years', 'No prior experience required', 'Basic interest in photography/videography'],
    why: [
      'Focus on creative and technical skills',
      'Learn real cinematic techniques',
      'Hands-on with professional workflows',
      'Build a strong visual portfolio',
      'Ideal for freelancing and content creation careers',
    ],
    finalTakeaway: 'Capture -> Create -> Edit -> Inspire. Turn your vision into cinematic aerial content.',
  },
  {
    title: 'Drone Basics',
    menuTitle: 'Drone Basics',
    eyebrow: 'Skill Program',
    tagline: 'From Zero Knowledge to Confident Drone Flying',
    duration: '5 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Start your journey into drones with a beginner-friendly foundation program covering drone technology, controls, and safe flying practices for advanced drone applications.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Introduction to Drones & Industry Overview',
      'Day 2: Drone Components & Working Principles',
      'Day 3: Controls, Flight Modes & Simulator Training',
      'Day 4: Hands-On Flying Practice',
      'Day 5: Safety, Maintenance & Final Assessment',
    ],
    droneDetails: [
      'Type: Beginner Camera Drones',
      'Configuration: Quadcopters',
      'Features: GPS Stabilization, Auto Hover, Return-to-Home',
    ],
    tools: ['DRL Simulator', 'Liftoff'],
    audience: [
      'Students & Beginners',
      'Drone Enthusiasts',
      'Aspiring Drone Pilots',
      'Content Creators (Beginners)',
      'Anyone curious about drone technology',
    ],
    gains: [
      'Basics of drone technology',
      'Types of drones & applications',
      'Drone components including motors, ESC, flight controller, and GPS',
      'Basic aerodynamics',
      'Remote controller functions',
      'Flight modes including Beginner, GPS, and Manual basics',
      'Pre-flight & post-flight checks',
      'Safe takeoff, hovering & landing',
      'Basic maneuvering & control',
      'Battery handling & charging safety',
      'Basic troubleshooting',
    ],
    practical: [
      'Guided hands-on flying sessions',
      'Practice in safe and controlled environments',
      'Step-by-step confidence building approach',
      'Final basic flying assessment',
    ],
    eligibility: ['Minimum 15+ years', 'No prior experience required', 'Open to all beginners'],
    why: [
      'Perfect starting point for all drone careers',
      'Simple and easy-to-understand training approach',
      'Hands-on learning from Day 1',
      'Builds strong foundation for advanced courses',
      'Ideal for students and hobbyists',
    ],
    finalTakeaway: 'Learn -> Practice -> Fly with Confidence. Build your foundation to explore advanced drone skills.',
  },
  {
    title: 'GIS for Drone Data Processing',
    menuTitle: 'GIS for Drone Data Processing',
    eyebrow: 'Skill Program',
    tagline: 'From Raw Drone Data to Professional Geospatial Analysis',
    duration: '7 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Learn how to convert drone-captured data into meaningful geospatial outputs using GIS tools. This program focuses on processing, mapping, analysis, and visualization for industry-ready results.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Introduction to GIS & Drone Data',
      'Day 2: Coordinate Systems & Georeferencing',
      'Day 3: Data Processing & Orthomosaic Generation',
      'Day 4: DEM, DSM & 3D Data Handling',
      'Day 5: GIS Analysis & Measurements',
      'Day 6: Mapping, Visualization & Reporting',
      'Day 7: Live Project + Final Output',
    ],
    droneDetails: [
      'Data Types: RGB, elevation, and point cloud datasets',
      'Outputs: Orthomosaics, DEM, DSM, maps, and reports',
      'Mode: Drone data processing and GIS analysis workflow',
    ],
    tools: ['QGIS', 'ArcGIS', 'Pix4Dmapper', 'Agisoft Metashape'],
    audience: [
      'Surveyors & GIS Professionals',
      'Drone Pilots in mapping/data processing',
      'Civil & Geomatics Engineers',
      'Urban Planners & Infrastructure Teams',
      'Environmental & Agriculture Analysts',
      'Anyone interested in geospatial data analysis',
    ],
    gains: [
      'GIS fundamentals & concepts',
      'Types of drone data including RGB, elevation, and point cloud',
      'Coordinate systems & projections',
      'Georeferencing techniques',
      'Orthomosaic generation & correction',
      'DEM and DSM creation',
      'Contour creation & terrain analysis',
      'Area, distance & volume calculations',
      'Raster & vector data handling',
      'Data layering & map creation',
      'Spatial analysis & interpretation',
      'Exporting maps & professional reports',
    ],
    practical: [
      'Hands-on real drone dataset processing',
      'Step-by-step GIS workflow training',
      'Real-world mapping and analysis projects',
      'Creation of client-ready outputs',
    ],
    eligibility: [
      'Minimum 18 years',
      'Basic computer knowledge required',
      'Drone or mapping knowledge is a plus, not mandatory',
    ],
    why: [
      'Strong focus on data processing and analysis',
      'Hands-on with industry-standard GIS tools',
      'Real-world project-based learning',
      'High-demand skill in surveying and mapping industry',
      'Ideal for career growth and technical specialization',
    ],
    finalTakeaway: 'Process -> Analyze -> Visualize -> Deliver. Turn raw drone data into powerful geospatial insights.',
  },
  {
    title: 'Drone Repair & Maintenance',
    menuTitle: 'Drone Repair and Maintenance',
    eyebrow: 'Skill Program',
    tagline: 'From Basic Troubleshooting to Advanced Drone Servicing',
    duration: '7 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Gain hands-on expertise in drone repair, maintenance, and system diagnostics. Learn drone hardware, electronics, troubleshooting, and performance optimization.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Drone Fundamentals & Components Overview',
      'Day 2: Electronics & Soldering Basics',
      'Day 3: Flight Controller Setup & Firmware',
      'Day 4: Motors, ESCs & Power Systems',
      'Day 5: Troubleshooting & Diagnostics',
      'Day 6: Advanced Repairs & Calibration',
      'Day 7: Live Repair Project + Assessment',
    ],
    droneDetails: [
      'Drone Types: FPV, Camera Drones, Mapping Drones',
      'Configuration: Quadcopters & Basic Multi-rotors',
      'Core Systems: Flight Controller, ESC, Motors, GPS, Receiver',
    ],
    tools: ['Betaflight Configurator', 'Mission Planner'],
    audience: [
      'Drone Enthusiasts & Hobbyists',
      'FPV Pilots & Builders',
      'Drone Service Technicians',
      'Electronics Students',
      'Drone Business Owners',
      'Anyone interested in drone hardware & repair',
    ],
    gains: [
      'Drone architecture & component functions',
      'Reading wiring diagrams & circuit basics',
      'Soldering techniques & safety',
      'Flight controller setup & firmware flashing',
      'ESC calibration & motor testing',
      'Battery systems (LiPo) & power management',
      'GPS, receiver & transmitter troubleshooting',
      'Identifying common hardware failures',
      'Crash damage assessment & repair',
      'Sensor calibration including IMU and compass',
      'Preventive maintenance practices',
      'Performance optimization',
    ],
    practical: [
      'Hands-on drone disassembly & reassembly',
      'Real-time fault diagnosis & repair practice',
      'Work on damaged and live drone systems',
      'Final repair-based project evaluation',
    ],
    eligibility: [
      'Minimum 16+ years',
      'Basic electronics interest preferred',
      'No prior repair experience required',
    ],
    why: [
      'Strong focus on practical repair skills',
      'Hands-on training with real drone components',
      'Learn to handle real-world technical issues',
      'High-demand skill for service and maintenance business',
      'Ideal for technicians and drone professionals',
    ],
    finalTakeaway: 'Diagnose -> Repair -> Maintain -> Optimize. Become confident in handling drone technical issues.',
  },
  {
    title: 'Python for GIS',
    menuTitle: 'Python for GIS',
    eyebrow: 'Skill Program',
    tagline: 'From Manual GIS Tasks to Smart Automation',
    duration: '10 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Unlock the power of Python in geospatial analysis. Learn to automate repetitive GIS tasks, process large datasets, and build efficient workflows for mapping and spatial analysis.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Python Basics for GIS',
      'Day 2: Working with Geospatial Data (Raster & Vector)',
      'Day 3: Coordinate Systems & Projections in Python',
      'Day 4: Data Processing with Python',
      'Day 5: Spatial Analysis & Geoprocessing',
      'Day 6: Working with Shapefiles & GeoJSON',
      'Day 7: Raster Analysis & DEM Processing',
      'Day 8: Automation & Batch Processing',
      'Day 9: Visualization & Mapping with Python',
      'Day 10: Final Project + Workflow Automation',
    ],
    droneDetails: [
      'Focus: GIS automation and geospatial programming',
      'Data Types: Raster, vector, shapefile, GeoJSON, TIFF',
      'Outputs: Automated maps, analysis workflows, and reports',
    ],
    tools: ['Python', 'QGIS', 'ArcGIS', 'GeoPandas', 'GDAL', 'Rasterio'],
    audience: [
      'GIS Professionals & Analysts',
      'Survey & Mapping Experts',
      'Drone Data Processing Specialists',
      'Developers entering geospatial field',
      'Students in Geomatics / Geography / Engineering',
      'Anyone interested in GIS automation & scripting',
    ],
    gains: [
      'Python fundamentals for GIS',
      'Handling raster & vector datasets',
      'Spatial data structures & formats',
      'Coordinate transformations using Python',
      'Geoprocessing automation',
      'Spatial queries & analysis',
      'Working with shapefiles, GeoJSON, and TIFF',
      'DEM processing & terrain analysis',
      'Batch processing of large datasets',
      'Data visualization & mapping',
      'Integrating Python with GIS tools',
      'Building automated GIS workflows',
    ],
    practical: [
      'Hands-on coding sessions for real GIS tasks',
      'Automation of repetitive mapping workflows',
      'Working with real-world geospatial datasets',
      'Final project-based implementation',
    ],
    eligibility: [
      'Minimum 18 years',
      'Basic computer knowledge required',
      'No prior coding experience required; starts from basics',
      'GIS knowledge is a plus',
    ],
    why: [
      'Combines GIS and programming skills',
      'High-demand skill for automation and data analysis roles',
      'Hands-on with industry-standard libraries',
      'Learn to handle large-scale geospatial data efficiently',
      'Ideal for career growth in GIS and tech fields',
    ],
    finalTakeaway: 'Code -> Automate -> Analyze -> Scale. Turn GIS workflows into smart, efficient systems.',
  },
  {
    title: 'LiDAR & GIS',
    menuTitle: 'LiDAR & GIS',
    eyebrow: 'Skill Program',
    tagline: 'From Point Clouds to Intelligent Mapping Solutions',
    duration: '10 Days Intensive',
    certification: 'Completion Certificate',
    overview:
      'Dive into advanced geospatial technology with LiDAR and GIS integration. Learn to capture, process, and analyze high-accuracy 3D data for surveying, infrastructure, forestry, and urban planning.',
    image: '/assets/training_hero.png',
    timeline: [
      'Day 1: Introduction to LiDAR & GIS Fundamentals',
      'Day 2: LiDAR Sensors & Data Acquisition',
      'Day 3: Point Cloud Basics & File Formats',
      'Day 4: Data Preprocessing & Noise Filtering',
      'Day 5: Classification (Ground, Vegetation, Buildings)',
      'Day 6: DEM, DSM & Terrain Modeling',
      'Day 7: 3D Visualization & Feature Extraction',
      'Day 8: GIS Integration & Spatial Analysis',
      'Day 9: Volume, Height & Infrastructure Analysis',
      'Day 10: Live Project + Final Output',
    ],
    droneDetails: [
      'Technology: LiDAR and GIS integration',
      'Data Formats: LAS / LAZ point clouds',
      'Outputs: DEM, DSM, 3D terrain models, and mapping deliverables',
    ],
    tools: ['LAStools', 'CloudCompare', 'QGIS', 'ArcGIS'],
    audience: [
      'Surveyors & GIS Professionals',
      'Drone Mapping Specialists',
      'Civil & Infrastructure Engineers',
      'Urban Planners & Environmental Analysts',
      'Forestry & Mining Professionals',
      'Anyone interested in advanced geospatial technologies',
    ],
    gains: [
      'LiDAR technology & working principles',
      'Types of LiDAR including airborne, terrestrial, and drone-based',
      'Point cloud data handling using LAS/LAZ formats',
      'Noise removal & data cleaning',
      'Classification of terrain & objects',
      'Digital Elevation Models and Surface Models',
      '3D terrain visualization',
      'Feature extraction including buildings, trees, and powerlines',
      'Volume & height calculations',
      'Integration with GIS platforms',
      'Spatial analysis using LiDAR data',
      'Generating professional mapping outputs',
    ],
    practical: [
      'Hands-on LiDAR dataset processing',
      'Real-world point cloud analysis projects',
      'End-to-end workflow from raw data to final output',
      'Creation of high-accuracy 3D maps',
    ],
    eligibility: [
      'Minimum 18 years',
      'Basic GIS or drone knowledge recommended',
      'Open to professionals & learners',
    ],
    why: [
      'Advanced skill in high-precision mapping',
      'Hands-on with industry-grade LiDAR tools',
      'Real-world project-based learning',
      'High demand in surveying, mining and infrastructure sectors',
      'Strong career advantage in geospatial industry',
    ],
    finalTakeaway: 'Scan -> Process -> Analyze -> Model. Turn LiDAR data into powerful 3D insights.',
  },
];

const programMap = [...programs, ...simplePrograms, ...diplomaPrograms, ...workshopPrograms, ...internshipPrograms, ...skillPrograms].reduce((acc, program) => {
  acc[slugify(program.menuTitle)] = program;
  return acc;
}, {});

const learnerTestimonials = [
  {
    name: 'George Kamini',
    source: 'Google review',
    text: 'One of the best training centres in Tamil Nadu, with a user-friendly learning environment for drone certification.',
  },
  {
    name: 'Rahul Raj',
    source: 'Google review',
    text: 'The trainers explained the concepts clearly and supported practical learning throughout the program.',
  },
];

function getProgramFamily(program) {
  const title = program.title.toLowerCase();
  if (title.includes('remote pilot certificate')) return 'rpc';
  if (title.includes('instructor')) return 'instructor';
  if (title.includes('diploma')) return 'diploma';
  if (title.includes('internship')) return 'internship';
  if (title.includes('workshop')) return 'workshop';
  if (title.includes('mapping') || title.includes('survey')) return 'mapping';
  if (title.includes('lidar')) return 'lidar';
  if (title.includes('gis') || title.includes('python')) return 'gis';
  if (title.includes('agri')) return 'agriculture';
  if (title.includes('videography') || title.includes('photography')) return 'media';
  if (title.includes('repair') || title.includes('maintenance')) return 'maintenance';
  if (title.includes('fpv')) return 'fpv';
  return 'foundation';
}

const careerProfiles = {
  rpc: {
    careers: ['Commercial Drone Pilot', 'Agriculture Drone Operator', 'Survey Flight Operator', 'Inspection Pilot', 'UAV Operations Coordinator'],
    tools: ['Flight simulator', 'Egca and airspace workflow', 'Mission-planning applications', 'Pre-flight checklists and flight logbook', 'Small / medium rotorcraft controls'],
    uses: ['Precision agriculture', 'Land survey and mapping', 'Infrastructure inspection', 'Aerial media', 'Public-safety and enterprise missions'],
    salary: 'Indicative India market range: approximately ₹3.5–7.5 LPA for salaried pilot roles. Specialisation, aircraft class, location, project exposure, and additional GIS or inspection skills materially affect earnings.',
    flight: 'Simulator sessions and supervised live flying are included according to the approved course schedule. Exact logged flight allocation is confirmed for each batch based on category, weather, safety, and DGCA/RPTO requirements.',
  },
  instructor: {
    careers: ['RPTO Drone Instructor', 'Flight Evaluator', 'Ground Theory Trainer', 'Simulator Instructor', 'Training Operations Coordinator'],
    tools: ['Instructor flight logbook', 'Simulator assessment workflow', 'Student evaluation sheets', 'DGCA/RPTO documentation', 'Small and medium training platforms'],
    uses: ['RPTO instruction', 'Pilot assessment', 'Batch planning', 'Safety supervision', 'Compliance and audit preparation'],
    salary: 'Indicative potential: approximately ₹4–8 LPA depending on valid credentials, logged flying experience, teaching responsibility, aircraft class, and RPTO location.',
    flight: 'The current curriculum specifies a structured 20-hour flight-logging foundation with supervised flying, simulator briefing, evaluation, and mentoring practice.',
  },
  mapping: {
    careers: ['Drone Survey Operator', 'Photogrammetry Technician', 'GIS Field Executive', 'Mapping Project Assistant', 'UAV Data-Capture Specialist'],
    tools: ['Mission Planner / equivalent', 'QGIS', 'Photogrammetry processing workflow', 'Ground-control-point workflow', 'Orthomosaic and elevation-model tools'],
    uses: ['Land records', 'Construction progress', 'Stockpile measurement', 'Corridor mapping', 'Urban and infrastructure planning'],
    salary: 'Indicative early-career potential: approximately ₹2.5–6 LPA. Combined flying, GIS, CAD, photogrammetry, and client-reporting capability can improve progression.',
    flight: 'Field mission planning and supervised data-capture practice are included where weather and site permissions allow. The counsellor confirms scheduled field hours before enrollment.',
  },
  lidar: {
    careers: ['LiDAR Data Technician', '3D Mapping Associate', 'Geospatial Analyst', 'Point-Cloud Processing Executive', 'Survey Data Specialist'],
    tools: ['LiDAR mission workflow', 'QGIS', 'Point-cloud classification tools', 'Digital elevation model workflow', '3D inspection and measurement tools'],
    uses: ['Mining', 'Forestry', 'Transmission corridors', 'Topographic survey', 'Infrastructure digital twins'],
    salary: 'Indicative early-career potential: approximately ₹3–7 LPA, varying significantly with surveying knowledge, point-cloud software proficiency, portfolio quality, and project responsibility.',
    flight: 'Practical exposure covers LiDAR mission planning and data workflow. Aircraft time depends on sensor availability, site access, weather, and the announced batch plan.',
  },
  gis: {
    careers: ['GIS Technician', 'Drone Data Processor', 'Geospatial Project Assistant', 'Mapping Analyst', 'Python GIS Automation Associate'],
    tools: ['QGIS', 'Python', 'Raster and vector processing', 'Coordinate reference systems', 'Drone imagery and geospatial reporting'],
    uses: ['Asset mapping', 'Environmental monitoring', 'Agriculture analytics', 'Infrastructure planning', 'Automated geospatial reporting'],
    salary: 'Indicative early-career potential: approximately ₹2.5–6 LPA depending on software depth, coding ability, portfolio, domain knowledge, and location.',
    flight: 'This is primarily a data-processing track. Drone field demonstrations may be included, but it does not replace a DGCA remote-pilot certification or promise logged pilot hours.',
  },
  agriculture: {
    careers: ['Agriculture Drone Operator', 'Spraying Mission Coordinator', 'Crop-Monitoring Executive', 'Precision Agriculture Technician', 'Agri-Drone Service Entrepreneur'],
    tools: ['Agriculture mission-planning application', 'Spray calibration workflow', 'Field boundary mapping', 'Battery and payload checklist', 'Crop-monitoring data workflow'],
    uses: ['Fertilizer and nutrient spraying', 'Seed sowing', 'Crop-health monitoring', 'Field mapping', 'Farm service operations'],
    salary: 'Indicative salaried potential: approximately ₹3–7 LPA. Seasonal contracting and entrepreneurship are project-based and must not be treated as guaranteed monthly income.',
    flight: 'Supervised field practice focuses on mission setup, payload safety, calibration, and operating procedures. Exact aircraft hours depend on field permissions and batch conditions.',
  },
  media: {
    careers: ['Aerial Camera Operator', 'Drone Videographer', 'Real-Estate Media Pilot', 'Event Drone Operator', 'Aerial Content Producer'],
    tools: ['Camera and gimbal controls', 'Shot planning', 'Flight-path planning', 'Media transfer workflow', 'Editing and colour-workflow orientation'],
    uses: ['Events', 'Real estate', 'Tourism', 'Construction documentation', 'Film and branded content'],
    salary: 'Indicative salaried potential: approximately ₹2.5–6 LPA. Freelance revenue varies by portfolio, equipment, permissions, production scope, and local demand.',
    flight: 'Guided flight practice covers safe framing, smooth movement, camera settings, and repeatable shot paths. Scheduled hours are confirmed in the batch plan.',
  },
  maintenance: {
    careers: ['Drone Service Technician', 'UAV Assembly Technician', 'Field Support Executive', 'Battery and Power-System Technician', 'Drone Lab Assistant'],
    tools: ['Multimeter and soldering tools', 'Firmware and calibration utilities', 'Flight-controller setup', 'ESC and motor diagnostics', 'Preventive-maintenance checklist'],
    uses: ['Service centres', 'Fleet maintenance', 'Training labs', 'Manufacturing support', 'Field troubleshooting'],
    salary: 'Indicative early-career potential: approximately ₹2.4–5.5 LPA depending on electronics fundamentals, diagnostics, platform familiarity, and practical portfolio.',
    flight: 'Flight testing is used for diagnosis and validation where appropriate; this technical program is not a substitute for DGCA pilot certification.',
  },
  fpv: {
    careers: ['FPV Pilot', 'Drone Event Operator', 'Cinematic FPV Assistant', 'FPV Build Technician', 'Practice-Coach Assistant'],
    tools: ['FPV simulator', 'Radio and receiver configuration', 'Betaflight / equivalent setup', 'Goggle and video-link workflow', 'Battery and propeller safety tools'],
    uses: ['Cinematic fly-throughs', 'Sports coverage', 'Drone racing', 'Indoor media', 'Prototype testing'],
    salary: 'FPV income is usually portfolio- and project-based rather than a fixed entry salary. Broader RPC, media-production, and repair skills improve employability.',
    flight: 'Simulator progression precedes supervised FPV flight practice. Actual live-flight time depends on learner readiness, safety, equipment, and venue conditions.',
  },
  diploma: {
    careers: ['Drone Pilot Trainee', 'UAV Technician', 'Survey Operations Assistant', 'Drone Service Executive', 'UAV Project Coordinator'],
    tools: ['Flight simulator', 'Mission-planning tools', 'QGIS and mapping workflow', 'Assembly and diagnostic tools', 'Flight logs and safety documentation'],
    uses: ['Training operations', 'Survey and mapping', 'Agriculture', 'Inspection', 'Maintenance and manufacturing support'],
    salary: 'Indicative entry-level potential: approximately ₹2.5–6 LPA depending on completed certifications, role, portfolio, technical depth, location, and employer.',
    flight: 'The six-month pathway combines simulator, field operations, assembly, and live-project exposure. The institute should confirm the batch-specific logged-flight plan in writing.',
  },
  internship: {
    careers: ['UAV Project Intern', 'Drone Lab Intern', 'Survey Support Intern', 'Operations Trainee', 'Technical Documentation Intern'],
    tools: ['Flight simulator', 'Basic mission planning', 'Drone components and safety checklist', 'Project documentation', 'Introductory data workflow'],
    uses: ['Career exploration', 'Academic projects', 'Portfolio development', 'Lab support', 'Entry-level operational exposure'],
    salary: 'An internship is a skill and portfolio pathway, not a salary qualification. Stipends or later job compensation depend on the employer, duration, capability, and completed certifications.',
    flight: 'Supervised demonstrations and practical exposure vary by internship duration. Logged flight hours and aircraft access must be confirmed for the selected batch.',
  },
  workshop: {
    careers: ['Foundation for UAV Technician Training', 'Robotics Club Project Lead', 'Drone Lab Assistant Pathway', 'Prototype Builder', 'Further RPC / Diploma Progression'],
    tools: ['Assembly tools', 'Soldering and wiring workflow', 'Flight-controller configuration', 'Calibration software', 'Pre-flight safety checklist'],
    uses: ['STEM education', 'Prototype development', 'College innovation labs', 'Robotics clubs', 'Startup concept validation'],
    salary: 'A short workshop alone does not qualify a participant for a specific salary. It provides a portfolio project and foundation for advanced technical or DGCA-certified pathways.',
    flight: 'A supervised test flight may follow assembly and calibration. This is not logged commercial-pilot training and does not replace an RPC.',
  },
  foundation: {
    careers: ['Drone Operations Trainee', 'UAV Lab Assistant', 'Technical Support Trainee', 'Further RPC / Skill Program Pathway'],
    tools: ['Flight simulator', 'Basic drone controls', 'Safety checklist', 'Mission-planning introduction', 'Component identification tools'],
    uses: ['Career exploration', 'Academic projects', 'Basic aerial operations', 'Technology orientation'],
    salary: 'This foundation program develops entry skills but does not guarantee a role or salary. Career potential improves through DGCA certification, specialisation, and documented project experience.',
    flight: 'Introductory simulator and supervised practical exposure are included as applicable. Confirm the batch-specific aircraft schedule before enrollment.',
  },
};

function getProgramInsights(program) {
  const family = getProgramFamily(program);
  const profile = careerProfiles[family] || careerProfiles.foundation;
  const learning = program.gains || program.skills || program.modules || program.highlights || [
    'Safety-first drone workflow',
    'Equipment and tool familiarisation',
    'Guided practical tasks',
    'Industry application awareness',
  ];
  const isDgca = program.certification.toLowerCase().includes('dgca') || program.eyebrow.toLowerCase().includes('dgca');

  return {
    ...profile,
    learning,
    dgca: isDgca
      ? 'Directly aligned with the stated DGCA/RPTO certification pathway. Eligibility, attendance, assessment, documentation, and operating-category requirements apply.'
      : 'This is a skill-development program and does not independently grant a DGCA Remote Pilot Certificate. Commercial flying eligibility requires the applicable DGCA pathway.',
    certification: `${program.certification}. Certificate scope depends on successful attendance, practical work, assessment, and the program terms. Verify whether the credential is DGCA-issued, RPTO-issued, or an institute completion certificate before payment.`,
    placement: 'Career support includes role mapping, resume and portfolio guidance, interview preparation, project-readiness feedback, and employer introductions where available. Assistance is provided; employment or salary is not guaranteed.',
    faqs: [
      { q: 'Do I need previous drone experience?', a: program.eligibility?.join(' ') || 'Most learners can begin without prior experience unless the listed eligibility states otherwise.' },
      { q: 'Will I receive a DGCA certificate?', a: isDgca ? 'This program follows the stated DGCA/RPTO pathway, subject to eligibility, attendance, assessments, and applicable rules.' : 'No. This program provides skill or completion certification and does not replace an RPC.' },
      { q: 'How much practical exposure is included?', a: profile.flight },
      { q: 'Is placement guaranteed?', a: 'No. Placement assistance supports preparation and introductions, but hiring decisions and compensation remain with employers.' },
      { q: 'What should I verify before enrolling?', a: 'Confirm batch dates, fees, aircraft category, exact practical hours, certificate issuer, assessment rules, accommodation, and refund terms in writing.' },
    ],
  };
}

function DetailBlock({ icon, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
      <div className="grid grid-cols-[40px_1fr] items-center gap-x-3 gap-y-4">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
        <h2 className="program-detail-title font-semibold text-navy font-display">{title}</h2>
        <div className="col-start-2">
          {children}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 leading-relaxed">
          <CheckCircle size={18} className="mt-1 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EnrollmentCard({ program }) {
  return (
    <aside id="apply" className="self-start scroll-mt-28 lg:sticky lg:top-24">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl shadow-primary/10">
        <div className="bg-navy p-5 text-white">
          <p className="text-xs font-extrabold tracking-[0.12em] text-primary">Ready to Take Off?</p>
          <h3 className="mt-2 text-2xl font-bold font-display text-white">Start your journey</h3>
          <p className="mt-2 text-sm font-medium leading-relaxed text-slate-200">
            Apply for {program.menuTitle} through our enrollment form and our admissions team will get in touch.
          </p>
        </div>

        <div className="grid gap-3 p-5">
          <a
            href="https://forms.gle/9SdLE62GTYY1o9Av7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-extrabold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]"
          >
            Apply Now <Send size={18} />
          </a>

          <p className="text-center text-xs font-semibold text-slate-500">Get certified. Own the sky.</p>
        </div>
      </div>
    </aside>
  );
}

export default function ProgramDetail() {
  const { programSlug } = useParams();
  const program = useMemo(() => programMap[programSlug], [programSlug]);
  const insights = useMemo(() => (program ? getProgramInsights(program) : null), [program]);

  if (!program) return <Navigate to="/training" replace />;

  return (
    <div className="bg-slate-50 pt-[104px]">
      <section className="relative overflow-hidden bg-[#F0FAFF] px-6 py-16 text-navy md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(30,159,212,0.16),transparent_42%),radial-gradient(circle_at_82%_10%,rgba(255,255,255,0.85),transparent_42%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold tracking-wide text-primary">
              <BadgeCheck size={16} /> {program.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-navy md:text-5xl font-display">
              {program.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-slate-600">{program.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-3 font-semibold text-navy shadow-sm">
                <Clock size={18} /> {program.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-primary/20 bg-white/80 px-5 py-3 font-semibold text-navy shadow-sm">
                <ShieldCheck size={18} /> {program.certification}
              </span>
            </div>
          </div>
          <div className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-primary/15 bg-white/80 p-3 shadow-xl shadow-primary/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/15 backdrop-blur-sm">
            <img
              src={program.image}
              alt={program.title}
              className="h-[360px] w-full rounded-2xl bg-slate-50 object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.35deg] md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <DetailBlock icon={<Sparkles size={20} />} title="Program Overview">
            <p className="text-lg leading-relaxed text-slate-600">{program.overview}</p>
          </DetailBlock>

          <DetailBlock icon={<GraduationCap size={20} />} title="1. What You Learn">
            <BulletList items={insights.learning} />
          </DetailBlock>

          <DetailBlock icon={<Clock size={20} />} title="2. Duration">
            <p className="font-semibold text-slate-700">{program.duration}</p>
            {program.courseDuration && <div className="mt-4"><BulletList items={program.courseDuration} /></div>}
          </DetailBlock>

          <DetailBlock icon={<ShieldCheck size={20} />} title="3. DGCA Relevance">
            <p className="leading-relaxed text-slate-600">{insights.dgca}</p>
          </DetailBlock>

          <DetailBlock icon={<Briefcase size={20} />} title="4. Career Opportunities">
            <BulletList items={program.careers || insights.careers} />
          </DetailBlock>

          <DetailBlock icon={<IndianRupee size={20} />} title="5. Salary Potential">
            <p className="leading-relaxed text-slate-600">{insights.salary}</p>
            <p className="mt-4 rounded-xl bg-amber-50 p-4 font-semibold text-amber-900">Indicative market guidance only—not a placement, freelance-income, or salary guarantee.</p>
          </DetailBlock>

          <DetailBlock icon={<Wrench size={20} />} title="6. Tools & Software Covered">
            <BulletList items={program.tools || insights.tools} />
          </DetailBlock>

          <DetailBlock icon={<Plane size={20} />} title="7. Real Flight Hours & Practical Exposure">
            <p className="leading-relaxed text-slate-600">{insights.flight}</p>
          </DetailBlock>

          <DetailBlock icon={<Building2 size={20} />} title="8. Industry Use Cases">
            <BulletList items={insights.uses} />
          </DetailBlock>

          <DetailBlock icon={<BadgeCheck size={20} />} title="9. Certification">
            <p className="leading-relaxed text-slate-600">{insights.certification}</p>
          </DetailBlock>

          <DetailBlock icon={<Route size={20} />} title="10. Placement Assistance">
            <p className="leading-relaxed text-slate-600">{insights.placement}</p>
          </DetailBlock>

          <DetailBlock icon={<Quote size={20} />} title="11. Learner Testimonials">
            <div className="grid gap-4 md:grid-cols-2">
              {learnerTestimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                  <p className="leading-relaxed text-slate-700">“{testimonial.text}”</p>
                  <footer className="mt-4 font-bold text-navy">{testimonial.name} · <span className="font-medium text-slate-500">{testimonial.source}</span></footer>
                </blockquote>
              ))}
            </div>
          </DetailBlock>

          <DetailBlock icon={<HelpCircle size={20} />} title="12. Frequently Asked Questions">
            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200">
              {insights.faqs.map((faq) => (
                <details key={faq.q} className="group p-5 open:bg-slate-50">
                  <summary className="cursor-pointer list-none font-bold text-navy">{faq.q}</summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </DetailBlock>

          <section className="rounded-3xl bg-navy p-7 text-white shadow-xl">
            <p className="font-bold uppercase tracking-[0.12em] text-primary">13. Apply for This Program</p>
            <h2 className="mt-2 text-white">Discuss Eligibility, Batch Dates, and Practical Hours</h2>
            <p className="mt-3 text-slate-300">Speak with the admissions team and verify the complete written course terms before enrollment.</p>
            <a href="#apply" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-bold text-white transition hover:bg-primary/90">
              Apply Now <Send size={18} />
            </a>
          </section>

          {program.fee && (
            <DetailBlock icon={<BadgeCheck size={20} />} title="Internship Fee">
              <p className="text-3xl font-bold text-primary">{program.fee}</p>
              {program.feeNote && <p className="mt-3 text-slate-600">{program.feeNote}</p>}
            </DetailBlock>
          )}

          {program.timeline && (
            <DetailBlock icon={<CalendarDays size={20} />} title="Course Timeline">
              <BulletList items={program.timeline} />
            </DetailBlock>
          )}

          {program.droneDetails && (
            <DetailBlock icon={<Plane size={20} />} title="Drone Details">
              <BulletList items={program.droneDetails} />
            </DetailBlock>
          )}

          {program.buildItems && (
            <DetailBlock icon={<Plane size={20} />} title={program.buildTitle || 'What You Will Build'}>
              <BulletList items={program.buildItems} />
            </DetailBlock>
          )}

          {program.modules && (
            <DetailBlock icon={<GraduationCap size={20} />} title="Course Modules">
              <BulletList items={program.modules} />
            </DetailBlock>
          )}

          <DetailBlock icon={<MapPin size={20} />} title="Who Should Join">
            <BulletList items={program.audience} />
          </DetailBlock>

          {program.practical && (
            <DetailBlock icon={<Plane size={20} />} title="Practical Training Highlights">
              <BulletList items={program.practical} />
            </DetailBlock>
          )}

          {program.facilities && (
            <DetailBlock icon={<MapPin size={20} />} title={program.facilitiesTitle || 'Training Facilities'}>
              <BulletList items={program.facilities} />
            </DetailBlock>
          )}

          {program.highlights && (
            <DetailBlock icon={<Sparkles size={20} />} title={program.highlightTitle || 'Key Highlights'}>
              <BulletList items={program.highlights} />
            </DetailBlock>
          )}

          {program.skills && (
            <DetailBlock icon={<GraduationCap size={20} />} title="Skills You'll Gain">
              <BulletList items={program.skills} />
            </DetailBlock>
          )}

          {program.eligibility && (
            <DetailBlock icon={<BadgeCheck size={20} />} title="Eligibility">
              <BulletList items={program.eligibility} />
            </DetailBlock>
          )}

          {program.why && (
            <DetailBlock icon={<Sparkles size={20} />} title="Why This Course Stands Out">
              <BulletList items={program.why} />
            </DetailBlock>
          )}

          {program.outcomes && (
            <DetailBlock icon={<BadgeCheck size={20} />} title={program.outcomeTitle || 'Workshop Outcome'}>
              <BulletList items={program.outcomes} />
            </DetailBlock>
          )}

          {program.finalTakeaway && (
            <DetailBlock icon={<Sparkles size={20} />} title="Final Takeaway">
              <p className="text-lg font-semibold leading-relaxed text-slate-700">{program.finalTakeaway}</p>
            </DetailBlock>
          )}
        </div>

        <EnrollmentCard program={program} />
      </section>
    </div>
  );
}
