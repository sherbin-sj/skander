import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { civilWork, designSolutionsImage, projectManagementImage } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const CivilWorks = () => {
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
            Civil Works
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Civil Works */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Civil Works</h2>
              <p className="service-description service-animate">
                We manage all aspects of civil construction — from structural design to project execution — 
                ensuring durability, precision, and quality craftsmanship. Our comprehensive approach 
                covers every phase of development, delivering robust infrastructure that stands the test of time.
              </p>
              <ul className="service-features service-animate">
                <li>Structural Design & Analysis</li>
                <li>Site Preparation & Earthworks</li>
                <li>Foundation Construction</li>
                <li>Quality Assurance & Control</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={civilWork} alt="Civil Works Construction" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Customized Design Solutions */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Customized Design Solutions</h2>
              <p className="service-description service-animate">
                Our team provides tailored civil design plans based on project requirements, site conditions, 
                and client vision. We combine technical expertise with creative problem-solving to deliver 
                innovative solutions that optimize functionality, sustainability, and aesthetic appeal.
              </p>
              <ul className="service-features service-animate">
                <li>Site-Specific Design Solutions</li>
                <li>3D Modeling & Visualization</li>
                <li>Sustainable Design Integration</li>
                <li>Client-Centric Approach</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={designSolutionsImage} alt="Customized Design Solutions" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Expert Project Management */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Expert Project Management</h2>
              <p className="service-description service-animate">
                We ensure seamless coordination, time management, and quality control in every civil work phase — 
                from foundation to finishing. Our project management expertise guarantees that projects are 
                delivered on time, within budget, and to the highest quality standards.
              </p>
              <ul className="service-features service-animate">
                <li>Comprehensive Project Planning</li>
                <li>Real-Time Progress Monitoring</li>
                <li>Risk Management & Mitigation</li>
                <li>Stakeholder Communication</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={projectManagementImage} alt="Expert Project Management" />
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
          <h3>Ready to Start Your Civil Project?</h3>
          <p>Contact us today to discuss your civil construction needs and get a customized solution.</p>
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

export default CivilWorks;