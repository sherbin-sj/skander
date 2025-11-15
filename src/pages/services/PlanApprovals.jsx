import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { renovationsImage, planApproval, planApproval2 } from "../../assets";
import "./ServicesDetails.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PlanApprovals = () => {
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
            Plan Approvals
          </motion.h1>
          
          <motion.div 
            className="title-decoration"
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        {/* Section 1: Regulatory Compliance */}
        <section 
          ref={addToRefs}
          className="service-section service-section-1"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Regulatory Compliance</h2>
              <p className="service-description service-animate">
                Our Plan Approvals service ensures that your construction projects meet all regulatory requirements and obtain the necessary permits for legal execution. We work closely with local authorities and regulatory bodies to streamline the approval process, saving you time and avoiding potential legal complications.
              </p>
              <ul className="service-features service-animate">
                <li>Building Permit Acquisition</li>
                <li>Zoning Compliance Verification</li>
                <li>Environmental Impact Assessment</li>
                <li>Code Compliance Documentation</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={renovationsImage} alt="Plan Approvals" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Documentation & Submission */}
        <section 
          ref={addToRefs}
          className="service-section service-section-2"
        >
          <div className="service-content reverse">
            <div className="service-text">
              <h2 className="service-title service-animate">Documentation & Submission</h2>
              <p className="service-description service-animate">
                We handle all aspects of documentation preparation and submission for your construction projects. Our experienced team prepares detailed plans, specifications, and supporting documents required for permit applications, ensuring accuracy and completeness to expedite the approval process.
              </p>
              <ul className="service-features service-animate">
                <li>Technical Drawing Preparation</li>
                <li>Application Form Completion</li>
                <li>Supporting Document Assembly</li>
                <li>Submission Tracking & Follow-up</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={planApproval} alt="Documentation & Submission" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </section>

        {/* Section 3: Approval Management */}
        <section 
          ref={addToRefs}
          className="service-section service-section-3"
        >
          <div className="service-content">
            <div className="service-text">
              <h2 className="service-title service-animate">Approval Management</h2>
              <p className="service-description service-animate">
                We manage the entire approval process from initial submission to final permit issuance. Our team coordinates with inspectors, addresses feedback, and ensures all revisions are completed promptly, keeping your project on schedule while maintaining compliance with all applicable regulations.
              </p>
              <ul className="service-features service-animate">
                <li>Inspector Coordination</li>
                <li>Revision Management</li>
                <li>Timeline Monitoring</li>
                <li>Final Permit Issuance</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={planApproval2} alt="Approval Management" />
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
          <p>Contact us today to discuss your plan approval needs and get your project moving forward.</p>
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

export default PlanApprovals;