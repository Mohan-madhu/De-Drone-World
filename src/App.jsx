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

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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
    </Router>
  );
}

export default App;
