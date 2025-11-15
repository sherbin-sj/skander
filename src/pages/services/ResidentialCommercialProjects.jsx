import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Residential1, Residential2, Residential3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ResidentialCommercialProjects = () => {
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
            Residential & Commercial Projects
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Residential Construction */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Residential Construction</h2>
              <p className="service-description service-animate">
                We specialize in creating beautiful, functional residential spaces that reflect your lifestyle and preferences. From custom single-family homes to multi-unit developments, our team delivers exceptional craftsmanship and attention to detail, ensuring your dream home becomes a reality.
              </p>
              <ul className="service-features service-animate">
                <li>Custom Home Design</li>
                <li> Remodeling</li>
                <li>Residential Development</li>
                <li>Energy-Efficient</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Residential1} alt="Residential Construction" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Commercial Projects */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Commercial Projects</h2>
              <p className="service-description service-animate">
                Our commercial construction services deliver innovative, sustainable solutions for businesses of all sizes. We create functional, inspiring workspaces that enhance productivity and reflect your brand identity, from office buildings to retail spaces and industrial facilities.
              </p>
              <ul className="service-features service-animate">
                <li>Office Building Construction</li>
                <li>Retail Space Development</li>
                <li>Industrial Facility Construction</li>
                <li>Corporate Interior Design</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Residential2} alt="Commercial Projects" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Project Management */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Comprehensive Project Management</h2>
              <p className="service-description service-animate">
                We provide end-to-end project management for both residential and commercial projects, ensuring seamless coordination from concept to completion. Our experienced team manages timelines, budgets, and quality control, allowing you to focus on your core business while we handle the construction details.
              </p>
              <ul className="service-features service-animate">
                <li>Design-Build Services</li>
                <li>Construction Management</li>
                <li>Quality Assurance & Control</li>
                <li>Post-Construction Support</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Residential3} alt="Project Management" />
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
          <h3>Ready to Start Your Project?</h3>
          <p>Contact us today to discuss your residential or commercial construction needs and get a customized solution.</p>
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

export default ResidentialCommercialProjects;