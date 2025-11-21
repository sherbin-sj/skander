import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Achivement from "../../components/Achivement";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { Home } from "../../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const imageElementRef = useRef(null);

  // Framer Motion animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // GSAP scroll animations on mount
  useEffect(() => {
    // Parallax effect on hero image element only (not container)
    if (imageElementRef.current) {
      gsap.to(imageElementRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section id="hero" ref={heroRef}>
      <div className="overlay__div">
        <div className="container">
          {/* Left column with staggered fade-in animations */}
          <motion.div 
            className="column left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero__content" variants={fadeInRight}>
              <motion.h1 
                className="heading" 
                ref={headingRef}
                variants={fadeInUp}
              >
                Building Dreams, Creating Spaces
              </motion.h1>
              <motion.p 
                className="description" 
                ref={descriptionRef}
                variants={fadeInUp}
              >
                Skandar Constructions brings together decades of expertise with
                cutting-edge technology to deliver exceptional construction
                solutions. Our commitment to quality and client satisfaction has
                made us a trusted name in the industry.{" "}
              </motion.p>
            </motion.div>
            {/* Achievement component with fade-in */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Achivement />
            </motion.div>
            {/* Buttons with hover animations */}
            <motion.div 
              className="flex__center buttons__wrapper" 
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link to="/projects" className="btn">
                  Projects{" "}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  className="flex__center btn primary">
                  Get a quote <IoCall />{" "}
                </ScrollLink>
              </motion.div>
            </motion.div>
          </motion.div>
          {/* Hero image with scale-in animation and parallax */}
          <motion.div 
            className="column hero__image-container"
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            ref={imageRef}
          >
            <motion.img 
              src={Home} 
              alt="" 
              className="object__contain"
              ref={imageElementRef}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;