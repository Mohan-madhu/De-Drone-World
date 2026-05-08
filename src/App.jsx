import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Training from './pages/Training';
import ProgramDetail from './pages/ProgramDetail';
import Services from './pages/Services';
import AgricultureServices from './pages/AgricultureServices';
import InspectionServices from './pages/InspectionServices';
import EventServices from './pages/EventServices';
import SurveyMappingServices from './pages/SurveyMappingServices';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

const API_BASE = 'https://dine360.ca/api';

function getVisitorId() {
  let vid = localStorage.getItem('vid');

  if (!vid) {
    vid = crypto.randomUUID();
    localStorage.setItem('vid', vid);
  }

  return vid;
}

function postJson(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const visitorId = getVisitorId();
    const startTime = Date.now();

    postJson(`${API_BASE}/api/track`, {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      memory: navigator.deviceMemory || 'unknown',
      cores: navigator.hardwareConcurrency || 0,
      connection: navigator.connection?.effectiveType || 'unknown',
      visitorId,
      page: window.location.pathname
    });

    const handleVisibilityChange = () => {
      postJson(`${API_BASE}/api/visibility`, {
        visitorId,
        state: document.visibilityState
      });
    };

    const handleClick = (event) => {
      postJson(`${API_BASE}/api/click`, {
        visitorId,
        x: event.clientX,
        y: event.clientY
      });
    };

    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime;

      navigator.sendBeacon(
        `${API_BASE}/api/time`,
        new Blob(
          [JSON.stringify({ visitorId, timeSpent })],
          { type: 'application/json' }
        )
      );
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:programSlug" element={<ProgramDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/agriculture" element={<AgricultureServices />} />
          <Route path="/services/inspection" element={<InspectionServices />} />
          <Route path="/services/events" element={<EventServices />} />
          <Route path="/services/survey-mapping" element={<SurveyMappingServices />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  );
}