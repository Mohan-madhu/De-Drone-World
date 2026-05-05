import { useMemo, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { BadgeCheck, CalendarDays, CheckCircle, Clock, GraduationCap, MapPin, Plane, Send, ShieldCheck, Sparkles } from 'lucide-react';

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
    image: '/assets/training_hero.png',
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
  'Build Your Own Drone',
  'Build Your Racing Drone',
  'Build Your Own Agri Drone',
  'Drone Customization',
  'Drone Technician (6 Months)',
  '7 Days',
  '15 Days',
  '30 Days',
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

const programMap = [...programs, ...simplePrograms, ...skillPrograms].reduce((acc, program) => {
  acc[slugify(program.menuTitle)] = program;
  return acc;
}, {});

function DetailBlock({ icon, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">{icon}</span>
        <h2 className="text-2xl font-bold text-navy font-display">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="grid gap-3 text-slate-600">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <CheckCircle size={18} className="mt-1 shrink-0 text-primary" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function EnrollmentCard({ program }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <aside className="self-start lg:sticky lg:top-28">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-white shadow-2xl shadow-primary/10">
        <div className="bg-navy p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Ready to Take Off?</p>
          <h3 className="mt-3 text-2xl font-bold font-display">Start your journey</h3>
          <p className="mt-2 text-sm text-slate-300">Share your details and get complete enrollment support.</p>
        </div>

        <form className="grid gap-4 p-6" onSubmit={handleSubmit}>
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Name" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" type="email" placeholder="Email" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="Phone" required />
          <input className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary focus:ring-4 focus:ring-primary/10" placeholder="City" required />
          <input type="hidden" value={program.title} readOnly />

          <button className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 font-bold text-white shadow-xl shadow-primary/20 transition-transform hover:scale-[1.02]">
            Submit Details <Send size={18} />
          </button>

          {submitted && (
            <p className="rounded-xl bg-primary/10 p-3 text-sm font-medium text-primary">
              Thanks. Your interest has been captured for {program.menuTitle}.
            </p>
          )}

          <p className="text-center text-xs text-slate-500">Get certified. Own the sky.</p>
        </form>
      </div>
    </aside>
  );
}

export default function ProgramDetail() {
  const { programSlug } = useParams();
  const program = useMemo(() => programMap[programSlug], [programSlug]);

  if (!program) return <Navigate to="/training" replace />;

  return (
    <div className="bg-slate-50 pt-16">
      <section className="relative overflow-hidden bg-slate-950 px-6 py-16 text-white md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(30,159,212,0.24),transparent_42%),radial-gradient(circle_at_82%_10%,rgba(8,47,73,0.55),transparent_40%)]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              <BadgeCheck size={16} /> {program.eyebrow}
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.75)] md:text-6xl font-display">
              {program.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-blue-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)]">{program.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold">
                <Clock size={18} /> {program.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 font-semibold">
                <ShieldCheck size={18} /> {program.certification}
              </span>
            </div>
          </div>
          <div className="group mx-auto w-full max-w-[420px] overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-[0_20px_55px_rgba(2,6,23,0.5)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(2,6,23,0.62)] backdrop-blur-sm">
            <img
              src={program.image}
              alt={program.title}
              className="h-[360px] w-full rounded-2xl bg-slate-900 object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-[0.35deg] md:h-[420px]"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-8">
          <DetailBlock icon={<Sparkles size={20} />} title="Program Overview">
            <p className="text-lg leading-relaxed text-slate-600">{program.overview}</p>
          </DetailBlock>

          <DetailBlock icon={<CalendarDays size={20} />} title="Course Timeline">
            <BulletList items={program.timeline} />
          </DetailBlock>

          <DetailBlock icon={<Plane size={20} />} title="Drone Details">
            <BulletList items={program.droneDetails} />
          </DetailBlock>

          <DetailBlock icon={<MapPin size={20} />} title="Who Should Join">
            <BulletList items={program.audience} />
          </DetailBlock>

          <DetailBlock icon={<GraduationCap size={20} />} title="What You'll Gain">
            <BulletList items={program.gains} />
          </DetailBlock>

          <div className="grid gap-8 md:grid-cols-2">
            <DetailBlock icon={<BadgeCheck size={20} />} title="Eligibility">
              <BulletList items={program.eligibility} />
            </DetailBlock>
          </div>

          <DetailBlock icon={<Sparkles size={20} />} title="Why This Course Stands Out">
            <BulletList items={program.why} />
          </DetailBlock>
        </div>

        <EnrollmentCard program={program} />
      </section>
    </div>
  );
}
