import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { painting1, painting2, painting3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Painting = () => {
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
            Painting
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Interior Painting */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Interior Painting</h2>
              <p className="service-description service-animate">
                Our interior painting services transform your living or working spaces with precision and care. We use premium paints and techniques to deliver flawless finishes that enhance the beauty and value of your property while ensuring durability and long-lasting color.
              </p>
              <ul className="service-features service-animate">
                <li>Residential Interior Painting</li>
                <li>Commercial Space Painting</li>
                <li>Decorative Finishes & Textures</li>
                <li>Color Consultation Services</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={painting1} alt="Interior Painting" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Exterior Painting */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Exterior Painting</h2>
              <p className="service-description service-animate">
                Protect and beautify your property's exterior with our professional painting services. We specialize in weather-resistant coatings and techniques that withstand the elements while enhancing curb appeal and preserving the structural integrity of your building.
              </p>
              <ul className="service-features service-animate">
                <li>House & Building Painting</li>
                <li>Surface Preparation & Priming</li>
                <li>Weatherproof Coatings</li>
                <li>Specialty Exterior Finishes</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={painting2} alt="Exterior Painting" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Specialty Painting Services */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Specialty Painting Services</h2>
              <p className="service-description service-animate">
                Our specialty painting services cater to unique requirements and challenging surfaces. From industrial equipment coating to artistic murals, we provide expert solutions that require specialized techniques, materials, and attention to detail.
              </p>
              <ul className="service-features service-animate">
                <li>Industrial Equipment Coating</li>
                <li>Decorative Murals & Artwork</li>
                <li>Specialty Surface Painting</li>
                <li>Protective Coating Systems</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={painting3} alt="Specialty Painting Services" />
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
          <h3>Ready to Refresh Your Space?</h3>
          <p>Contact us today to discuss your painting needs and get a customized solution that brings your vision to life.</p>
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

export default Painting;