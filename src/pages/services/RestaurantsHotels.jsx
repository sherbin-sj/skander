import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Restaurants1, Restaurants2, Restaurants3 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const RestaurantsHotels = () => {
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
            Restaurants & Hotels
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Restaurant Construction */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Restaurant Construction</h2>
              <p className="service-description service-animate">
                We specialize in creating exceptional dining environments that combine functionality with aesthetic appeal. Our restaurant construction services encompass everything from initial design to final finishing, ensuring your establishment meets health codes, accommodates kitchen equipment, and provides an inviting atmosphere for guests.
              </p>
              <ul className="service-features service-animate">
                <li>Custom Kitchen Design & Installation</li>
                <li>Dining Area Layout & Furnishing</li>
                <li>Specialty Equipment Integration</li>
                <li>Health Code Compliance</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Restaurants1} alt="Restaurant Construction" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Hotel Development */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Hotel Development</h2>
              <p className="service-description service-animate">
                Our hotel development services create comfortable, efficient accommodations that enhance guest experiences. From boutique properties to large-scale resorts, we design and construct spaces that balance aesthetics with functionality, incorporating modern amenities while maintaining brand standards and operational efficiency.
              </p>
              <ul className="service-features service-animate">
                <li>Guest Room Design & Furnishing</li>
                <li>Lobby & Common Area Development</li>
                <li>Recreational Facility Construction</li>
                <li>Brand Standards Compliance</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Restaurants2} alt="Hotel Development" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Hospitality Renovation */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Hospitality Renovation</h2>
              <p className="service-description service-animate">
                Refresh and modernize your existing hospitality establishment with our comprehensive renovation services. We specialize in updating interiors, upgrading facilities, and implementing new design concepts that enhance guest satisfaction while minimizing operational disruption and maximizing return on investment.
              </p>
              <ul className="service-features service-animate">
                <li>Interior Redesign & Remodeling</li>
                <li>Equipment Upgrades & Installation</li>
                <li>Energy Efficiency Improvements</li>
                <li>Phased Renovation Planning</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={Restaurants3} alt="Hospitality Renovation" />
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
          <h3>Ready to Create Your Hospitality Space?</h3>
          <p>Contact us today to discuss your restaurant or hotel project and get a customized solution that exceeds guest expectations.</p>
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

export default RestaurantsHotels;