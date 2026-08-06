import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEO from './components/SEO';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import ProgramDetail from './pages/ProgramDetail';
import Services from './pages/Services';
import AgricultureServices from './pages/AgricultureServices';
import InspectionServices from './pages/InspectionServices';
import EventServices from './pages/EventServices';
import SurveyMappingServices from './pages/SurveyMappingServices';
import Manufacturing from './pages/Manufacturing';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import BTechAvionicsDrone from './pages/BTechAvionicsDrone';

gsap.registerPlugin(ScrollTrigger);

const API_BASE = 'https://dine360.ca'; 

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
  const [showStartupLoader, setShowStartupLoader] = useState(true);
  const loaderContainerRef = useRef(null);
  const loaderInstanceRef = useRef(null);
  const isLocalDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

  useEffect(() => {
    if (isLocalDevelopment) {
      return undefined;
    }

    const visitorId = getVisitorId();
    const startTime = Date.now();

    void postJson(`${API_BASE}/api/track`, {
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
    }).catch(() => {});

    const handleVisibilityChange = () => {
      void postJson(`${API_BASE}/api/visibility`, {
        visitorId,
        state: document.visibilityState
      }).catch(() => {});
    };

    const handleClick = (event) => {
      void postJson(`${API_BASE}/api/click`, {
        visitorId,
        x: event.clientX,
        y: event.clientY
      }).catch(() => {});
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
  }, [pathname, isLocalDevelopment]);

  useEffect(() => {
    const minimumLoaderDuration = 2800;
    const startedAt = Date.now();
    let timeoutId;

    const finishLoader = () => {
      const elapsed = Date.now() - startedAt;
      const waitTime = Math.max(minimumLoaderDuration - elapsed, 0);

      timeoutId = window.setTimeout(() => {
        setShowStartupLoader(false);
      }, waitTime);
    };

    if (document.readyState === 'complete') {
      finishLoader();
    } else {
      window.addEventListener('load', finishLoader, { once: true });
    }

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('load', finishLoader);
    };
  }, []);

  useEffect(() => {
    let isMounted = true;

    fetch('/assets/drone-pilot-loader.json')
      .then((response) => response.json())
      .then((animationData) => {
        if (!isMounted || !loaderContainerRef.current) {
          return;
        }

        if (loaderInstanceRef.current) {
          loaderInstanceRef.current.destroy();
        }

        loaderInstanceRef.current = lottie.loadAnimation({
          container: loaderContainerRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData,
        });
      })
      .catch(() => {});

    return () => {
      isMounted = false;

      if (loaderInstanceRef.current) {
        loaderInstanceRef.current.destroy();
        loaderInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {showStartupLoader && (
        <div className="fixed inset-0 z-[1200] flex items-center justify-center overflow-hidden bg-white/20 px-6 text-center backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.5),transparent_45%),radial-gradient(circle_at_bottom,rgba(30,159,212,0.18),transparent_52%)]" />
          <div className="relative z-10 flex w-full max-w-md flex-col items-center rounded-[2rem] border border-white/35 bg-white/20 px-6 py-8 shadow-[0_24px_80px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:px-8 sm:py-10">
            <div className="w-full max-w-[320px]">
              <div ref={loaderContainerRef} className="min-h-[320px]" />
            </div>
            <div className="mt-2 space-y-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700/75">Loading De Drone World</p>
              <h2 className="text-3xl text-slate-900 sm:text-4xl">Please wait a moment</h2>
            </div>
          </div>
        </div>
      )}
      <SEO />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/:programSlug" element={<ProgramDetail />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/agriculture" element={<AgricultureServices />} />
          <Route path="/services/inspection" element={<InspectionServices />} />
          <Route path="/services/events" element={<EventServices />} />
          <Route path="/services/survey-mapping" element={<SurveyMappingServices />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/btech-avionics-and-drone-engineering" element={<BTechAvionicsDrone />} />
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
