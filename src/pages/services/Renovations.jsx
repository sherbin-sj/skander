import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Renovations1, Renovations2, Renovations3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Renovations = () => {
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
            Renovations
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Residential Renovations */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Residential Renovations</h2>
              <p className="service-description service-animate">
                Transform your existing home with our comprehensive residential renovation services. From kitchen and bathroom upgrades to complete home makeovers, we bring new life to your living spaces while preserving the character and integrity of your property.
              </p>
              <ul className="service-features service-animate">
                <li>Kitchen & Bathroom Remodeling</li>
                <li>Basement Finishing</li>
                <li>Roof & Exterior Renovations</li>
                <li>Energy Efficiency Upgrades</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Renovations1} alt="Residential Renovations" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Commercial Renovations */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Commercial Renovations</h2>
              <p className="service-description service-animate">
                Revitalize your commercial space with our expert renovation services. We specialize in office upgrades, retail space transformations, and industrial facility improvements that enhance functionality, aesthetics, and productivity while minimizing disruption to your business operations.
              </p>
              <ul className="service-features service-animate">
                <li>Office Space Redesign</li>
                <li>Retail Store Renovations</li>
                <li>Industrial Facility Upgrades</li>
                <li>Tenant Improvement Services</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Renovations2} alt="Commercial Renovations" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Specialized Renovation Services */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Specialized Renovation Services</h2>
              <p className="service-description service-animate">
                Our specialized renovation services address unique challenges and requirements. From historic building preservation to accessibility modifications, we provide expert solutions that meet specific needs while maintaining the highest standards of quality and craftsmanship.
              </p>
              <ul className="service-features service-animate">
                <li>Historic Building Restoration</li>
                <li>Accessibility Modifications</li>
                <li>Structural Renovations</li>
                <li>Specialized Trade Services</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Renovations3} alt="Specialized Renovation Services" />
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
          <h3>Ready to Transform Your Space?</h3>
          <p>Contact us today to discuss your renovation project and get a customized solution that fits your vision and budget.</p>
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

export default Renovations;