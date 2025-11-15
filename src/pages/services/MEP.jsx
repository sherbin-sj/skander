import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { mep1, mep2, mep3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const MEP = () => {
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
            MEP
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Mechanical Systems */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Mechanical Systems</h2>
              <p className="service-description service-animate">
                Our mechanical engineering services encompass the design, installation, and maintenance of all heating, ventilation, and air conditioning systems. We ensure optimal indoor air quality, energy efficiency, and thermal comfort for residential and commercial buildings through innovative HVAC solutions.
              </p>
              <ul className="service-features service-animate">
                <li>Heating & Cooling Systems</li>
                <li>Ventilation & Air Quality</li>
                <li>Energy Recovery Systems</li>
                <li>Building Automation Controls</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={mep1} alt="Mechanical Systems" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Electrical Systems */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Electrical Systems</h2>
              <p className="service-description service-animate">
                We provide comprehensive electrical engineering services including power distribution, lighting design, and electrical safety systems. Our solutions ensure reliable, efficient, and code-compliant electrical installations that meet the specific needs of your residential or commercial project.
              </p>
              <ul className="service-features service-animate">
                <li>Power Distribution Systems</li>
                <li>Lighting Design & Installation</li>
                <li>Emergency Power Systems</li>
                <li>Electrical Safety & Compliance</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={mep2} alt="Electrical Systems" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Plumbing Systems */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Plumbing Systems</h2>
              <p className="service-description service-animate">
                Our plumbing services cover water supply, drainage, and sanitation systems for all types of buildings. We implement sustainable solutions that conserve water, ensure hygiene, and provide reliable performance while meeting all local codes and environmental standards.
              </p>
              <ul className="service-features service-animate">
                <li>Water Supply & Distribution</li>
                <li>Drainage & Waste Management</li>
                <li>Sanitation Systems</li>
                <li>Water Heating Solutions</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={mep3} alt="Plumbing Systems" />
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
          <h3>Need MEP Services?</h3>
          <p>Contact us today to discuss your mechanical, electrical, and plumbing needs for a comprehensive solution.</p>
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

export default MEP;