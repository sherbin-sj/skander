import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Services.css";

// Import images
import { 
  portfolio1, 
  portfolio2, 
  portfolio3, 
  portfolio4, 
  portfolio5, 
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9
} from "../assets";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const serviceRefs = useRef([]);
  const sectionRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const addToRefs = (el) => {
    if (el && !serviceRefs.current.includes(el)) {
      serviceRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Kill any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Animate each service section on scroll
    serviceRefs.current.forEach((service, index) => {
      if (!service) return;

      const imageEl = service.querySelector('.service-image-wrapper');
      const contentEl = service.querySelector('.service-content-wrapper');
      const titleEl = service.querySelector('.service-section-title');
      const descEl = service.querySelector('.service-section-description');

      // Main section animation
      gsap.fromTo(
        service,
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: service,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image parallax effect
      if (imageEl) {
        gsap.fromTo(
          imageEl,
          {
            y: 60,
            scale: 1.1
          },
          {
            y: -60,
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: service,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            }
          }
        );
      }

      // Content reveal animation
      if (contentEl) {
        gsap.fromTo(
          contentEl,
          {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 75%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Text reveal animations
      if (titleEl) {
        gsap.fromTo(
          titleEl,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      if (descEl) {
        gsap.fromTo(
          descEl,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: service,
              start: "top 70%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      title: "Plan Approvals",
      description: "Expert assistance with obtaining all necessary permits and approvals for your construction projects, ensuring compliance with local regulations and building codes.",
      image: portfolio1,
      features: ["Building Permits", "Zoning Approvals", "Regulatory Compliance", "Documentation"],
      route: "/service/plan-approvals"
    },
    {
      title: "Civil Works",
      description: "Comprehensive civil construction services including site preparation, foundation work, drainage systems, and infrastructure development.",
      image: portfolio2,
      features: ["Site Development", "Foundation Work", "Infrastructure", "Earthworks"],
      route: "/service/civil-works"
    },
    {
      title: "Residential & Commercial Projects",
      description: "End-to-end construction solutions for both residential and commercial properties, from initial design to final delivery.",
      image: portfolio3,
      features: ["Residential Buildings", "Commercial Spaces", "Project Management", "Quality Assurance"],
      route: "/service/residential-commercial-projects"
    },
    {
      title: "MEP",
      description: "Mechanical, Electrical, and Plumbing services ensuring efficient and code-compliant installation of all essential building systems.",
      image: portfolio4,
      features: ["Electrical Systems", "Plumbing Solutions", "HVAC Installation", "System Integration"],
      route: "/service/mep"
    },
    {
      title: "Renovations",
      description: "Complete renovation services to transform your existing space, updating layouts, finishes, and systems to meet your current needs.",
      image: portfolio5,
      features: ["Space Transformation", "Modern Updates", "Layout Optimization", "Interior Refresh"],
      route: "/service/renovations"
    },
    {
      title: "Painting",
      description: "Professional painting services for both interior and exterior spaces, using high-quality materials for a flawless finish.",
      image: portfolio6,
      features: ["Interior Painting", "Exterior Coating", "Premium Finishes", "Color Consultation"],
      route: "/service/painting"
    },
    {
      title: "Landscaping",
      description: "Beautiful outdoor spaces designed and installed to complement your property, including hardscaping, softscaping, and irrigation systems.",
      image: portfolio7,
      features: ["Garden Design", "Hardscaping", "Irrigation Systems", "Outdoor Living"],
      route: "/service/landscaping"
    },
    {
      title: "Restaurants & Hotels",
      description: "Specialized construction and renovation services for hospitality venues, ensuring functionality, aesthetics, and compliance with industry standards.",
      image: portfolio8,
      features: ["Hospitality Design", "Kitchen Setup", "Guest Spaces", "Compliance Standards"],
      route: "/service/restaurants-hotels"
    },
    {
      title: "Bars & Lounges",
      description: "Custom construction and design solutions for bars and lounges, creating inviting spaces that enhance the customer experience.",
      image: portfolio9,
      features: ["Bar Design", "Lounge Spaces", "Lighting Design", "Atmosphere Creation"],
      route: "/service/bars-lounges"
    }
  ];

  return (
    <motion.section 
      className="services-page page-background"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      ref={sectionRef}
    >
      <div className="container services-container">
        {/* Header Section */}
        <motion.div 
          className="services-page-header"
          variants={fadeInUp}
        >
          <h1 className="services-main-heading">Our Services</h1>
          <p className="services-main-description">
            Comprehensive construction solutions tailored to meet your unique project needs and exceed expectations. With a commitment to quality, innovation, and timely delivery, we provide end-to-end services that cover planning, design, execution, and final handover.
          </p>
          <motion.div 
            className="scroll-indicator"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={26} />
          </motion.div>
        </motion.div>

        {/* Services Sections - Side by Side Grid Layout */}
        <div className="services-sections">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-section"
              ref={addToRefs}
            >
              {/* Image Side */}
              <div className="service-image-container">
                  <img src={service.image} alt={service.title} />
                  <div className="image-overlay"></div>
              </div>

              {/* Content Side */}
              <div className="service-content-container">
                <div className="service-content-wrapper">
                  <div className="service-number">0{index + 1}</div>
                  <h2 className="service-section-title">{service.title}</h2>
                  <p className="service-section-description">{service.description}</p>
                  
                  <div className="service-features">
                    <div className="service-features-left">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="feature-item">
                          <div className="feature-dot"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="service-features-right">
                      {service.features.slice(2, 4).map((feature, idx) => (
                        <div key={idx + 2} className="feature-item">
                          <div className="feature-dot"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to={service.route}>
                    <motion.button 
                      className="service-cta-button"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <motion.div 
          className="process-section"
          variants={fadeInUp}
        >
          <h2 className="sub__heading text-center">Our Work Process</h2>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We discuss your vision, requirements, and budget to understand your project goals.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Planning & Design</h3>
              <p>Our experts create detailed plans and designs that align with your vision and needs.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>We bring the project to life with precision, quality materials, and expert craftsmanship.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Delivery & Support</h3>
              <p>We deliver the completed project and provide ongoing support to ensure your satisfaction.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;