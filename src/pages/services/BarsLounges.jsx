import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bar1, Bar2, Bar3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const BarsLounges = () => {
  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // GSAP Animations
    sectionRefs.current.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Stagger animation for elements within each section
      tl.fromTo(
        section.querySelectorAll('.service-animate'),
        { 
          opacity: 0, 
          y: 50 
        },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2,
          ease: "power2.out"
        }
      );

      // Image animation
      tl.fromTo(
        section.querySelector('.service-image'),
        { 
          opacity: 0, 
          scale: 1.1 
        },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1,
          ease: "power2.out"
        },
        "-=0.5"
      );
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="service-details-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        {/* Header Section */}
        <motion.div 
          className="service-header"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >  
          <motion.h1 
            className="service-main-title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Bars & Lounges
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Bar Design & Construction */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Bar Design & Construction</h2>
              <p className="service-description service-animate">
                We create captivating bar environments that blend functionality with ambiance. Our design and construction services focus on creating efficient layouts, installing premium bar equipment, and crafting atmospheric spaces that enhance the guest experience while supporting smooth operations.
              </p>
              <ul className="service-features service-animate">
                <li>Custom Bar Fabrication</li>
                <li>Equipment Installation & Integration</li>
                <li>Lighting & Ambiance Design</li>
                <li>Storage & Workflow Optimization</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Bar1} alt="Bar Design & Construction" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Lounge Development */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Lounge Development</h2>
              <p className="service-description service-animate">
                Our lounge development services create sophisticated spaces that encourage relaxation and socialization. We design comfortable seating areas, implement acoustic solutions, and integrate entertainment systems to craft environments that appeal to your target clientele while maintaining operational efficiency.
              </p>
              <ul className="service-features service-animate">
                <li>Comfortable Seating Design</li>
                <li>Acoustic Treatment Solutions</li>
                <li>Entertainment System Integration</li>
                <li>Atmospheric Lighting Control</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Bar2} alt="Lounge Development" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Entertainment Venue Services */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Entertainment Venue Services</h2>
              <p className="service-description service-animate">
                Transform your bar or lounge into a dynamic entertainment destination with our specialized services. We provide solutions for stage installations, sound systems, lighting effects, and crowd management features that create memorable experiences while ensuring safety and regulatory compliance.
              </p>
              <ul className="service-features service-animate">
                <li>Stage & Performance Areas</li>
                <li>Professional Sound Systems</li>
                <li>Dynamic Lighting Effects</li>
                <li>Crowd Management Features</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Bar3} alt="Entertainment Venue Services" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.div 
          className="service-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>Ready to Create Your Entertainment Space?</h3>
          <p>Contact us today to discuss your bar or lounge project and get a customized solution that attracts and delights your guests.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BarsLounges;