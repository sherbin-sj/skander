import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Landscaping1, Landscaping2, Landscaping3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Landscaping = () => {
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
            Landscaping
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Landscape Design */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Landscape Design</h2>
              <p className="service-description service-animate">
                Our landscape design services create beautiful, functional outdoor spaces that complement your property and lifestyle. We combine artistic vision with horticultural expertise to design sustainable landscapes that enhance curb appeal and provide lasting enjoyment.
              </p>
              <ul className="service-features service-animate">
                <li>Custom Landscape Planning</li>
                <li>Garden & Hardscape Design</li>
                <li>Irrigation System Design</li>
                <li>Seasonal Planting Plans</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Landscaping1} alt="Landscape Design" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Installation Services */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Installation Services</h2>
              <p className="service-description service-animate">
                Our professional installation services bring your landscape design to life with precision and care. From planting trees and shrubs to installing hardscape features, we ensure every element is properly placed and maintained for optimal growth and aesthetic appeal.
              </p>
              <ul className="service-features service-animate">
                <li>Planting & Transplanting</li>
                <li>Hardscape Installation</li>
                <li>Irrigation System Installation</li>
                <li>Outdoor Lighting Setup</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={ Landscaping2 } alt="Installation Services" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Maintenance & Care */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Maintenance & Care</h2>
              <p className="service-description service-animate">
                Keep your landscape looking its best year-round with our comprehensive maintenance services. We provide ongoing care including pruning, fertilization, pest control, and seasonal cleanups to ensure your outdoor spaces remain healthy, vibrant, and beautiful.
              </p>
              <ul className="service-features service-animate">
                <li>Regular Lawn Care</li>
                <li>Pruning & Trimming</li>
                <li>Fertilization & Soil Care</li>
                <li>Seasonal Cleanup Services</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Landscaping3} alt="Maintenance & Care" />
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
          <h3>Ready to Transform Your Outdoor Space?</h3>
          <p>Contact us today to discuss your landscaping needs and get a customized solution that enhances your property's beauty.</p>
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

export default Landscaping;