import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/Why-choose";
import Portfolio from "./sections/Portfolio";
import Video from "./sections/video";
import Footer from "./sections/Footer";
import MagneticCursor from "./components/MagneticCursor";

// Import new pages
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

// Import service category pages
import PlanApprovals from "./pages/services/PlanApprovals";
import CivilWorks from "./pages/services/CivilWorks";
import ResidentialCommercialProjects from "./pages/services/ResidentialCommercialProjects";
import MEP from "./pages/services/MEP";
import Renovations from "./pages/services/Renovations";
import Painting from "./pages/services/Painting";
import Landscaping from "./pages/services/Landscaping";
import RestaurantsHotels from "./pages/services/RestaurantsHotels";
import BarsLounges from "./pages/services/BarsLounges";

import "swiper/css";
import "lenis/dist/lenis.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis smooth scrolling
  useEffect(() => {
    // Create Lenis instance for buttery smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove();
    };
  }, []);

  return (
    <Router>
      {/* Premium magnetic cursor effect */}
      <MagneticCursor />
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Hero/>
            <WhyChoose/>
            <Portfolio/>
            <Video/>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service/plan-approvals" element={<PlanApprovals />} />
        <Route path="/service/civil-works" element={<CivilWorks />} />
        <Route path="/service/residential-commercial-projects" element={<ResidentialCommercialProjects />} />
        <Route path="/service/mep" element={<MEP />} />
        <Route path="/service/renovations" element={<Renovations />} />
        <Route path="/service/painting" element={<Painting />} />
        <Route path="/service/landscaping" element={<Landscaping />} />
        <Route path="/service/restaurants-hotels" element={<RestaurantsHotels />} />
        <Route path="/service/bars-lounges" element={<BarsLounges />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;