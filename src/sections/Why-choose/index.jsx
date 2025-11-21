import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Why-choose.css";
import { about1 } from "../../assets";
import { keypoints } from "../../data";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const keypointRefs = useRef([]);

  // Add element to refs
  const addToKeypointRefs = (el) => {
    if (el && !keypointRefs.current.includes(el)) {
      keypointRefs.current.push(el);
    }
  };

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  // GSAP animations on mount
  useEffect(() => {
    // Parallax effect on image
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Staggered keypoint animations
    keypointRefs.current.forEach((keypoint, index) => {
      if (!keypoint) return;

      gsap.fromTo(keypoint,
        {
          opacity: 0,
          x: -30,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: keypoint,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section id="Why-choose" ref={sectionRef}>
      <div className="overlay__div">
        <div className="container">
          {/* Image with slide-in and parallax effect */}
          <motion.div 
            className="choose__image"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            ref={imageRef}
          >
            <motion.img 
              src={about1} 
              alt="About us" 
              className="object__contain"
              whileHover={{ scale: 1.03, rotate: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
          {/* Section header with staggered text animations */}
          <motion.div 
            className="section__header"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 
              className="title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Why Choose Us
            </motion.h3>
            <motion.h1 
              className="sub__heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Committed to Quality, Precision, and Innovation
            </motion.h1>
            <motion.p 
              className="description"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Skander, we believe construction is more than building
              structures — it's about creating lasting value and trust. With a
              dedicated team of professionals and a passion for excellence, we
              deliver high-quality residential, commercial, and civil projects
              that stand the test of time. Every project we undertake reflects
              our commitment to precision, innovation, and sustainability.
            </motion.p>
            {/* Keypoints with individual hover effects */}
            <div className="keypoints__container">
              {keypoints.slice(0, 3).map((keypoint, index) => (
                <motion.div 
                  className="flex keypoint" 
                  key={index}
                  ref={addToKeypointRefs}
                  whileHover={{ 
                    scale: 1.05,
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="flex__center primary icon"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.5 }
                    }}
                  >
                    {keypoint.icon}
                  </motion.div>
                  <motion.h4 
                    className="title"
                    whileHover={{ color: "var(--primary)", x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {keypoint.title}
                  </motion.h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;