import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Portfolio.css";
import { portfolio } from '../../data';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const portfolioRefs = useRef([]);

  // Add element to refs array
  const addToRefs = (el) => {
    if (el && !portfolioRefs.current.includes(el)) {
      portfolioRefs.current.push(el);
    }
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // GSAP scroll animations
  useEffect(() => {
    // Animate each portfolio item on scroll with parallax
    portfolioRefs.current.forEach((item, index) => {
      if (!item) return;

      // Card reveal animation
      gsap.fromTo(item,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image parallax effect
      const img = item.querySelector('.image__container img');
      if (img) {
        gsap.to(img, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <section id='portfolio' ref={sectionRef}>
        <div className="container">
            {/* Header with fade-in animation */}
            <motion.div 
              className="section__header"
              variants={headerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
                <motion.h3 
                  className="sub__heading"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  Crafting Space, Building Dreams
                </motion.h3>
                <motion.p 
                  className="description"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                    {" "}
                    Explore our innovative design concepts that transform spaces into extraordinary experiences

                </motion.p>
            </motion.div>
            {/* Portfolio items with staggered animations and hover effects */}
            <div className="portfolio__container">
                {portfolio.slice(0, 3).map((item,index)=>(
                <motion.div 
                  className="flex portfolio" 
                  key={index}
                  ref={addToRefs}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                   {/* Image with hover scale effect */}
                   <motion.div 
                     className="image__container"
                     whileHover={{ scale: 1.05 }}
                     transition={{ duration: 0.3 }}
                   >
                    <img src={item.image} alt="" />
                   </motion.div> 
                   {/* Details with hover highlight */}
                   <motion.div 
                     className="details"
                     whileHover={{ backgroundColor: "rgba(255, 170, 0, 0.02)" }}
                     transition={{ duration: 0.3 }}
                   >
                        <motion.h4 
                          className="title"
                          whileHover={{ color: "var(--primary)", x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.title}
                        </motion.h4>
                        <p className="line__clamp__2 description">{item.description}</p>
                        <div className="flex item__category">
                        <motion.p 
                          className='category'
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.category}
                        </motion.p>
                        </div>
                   </motion.div>
                </motion.div>
                ))}
                </div>
        </div>
    </section>
  )
}

export default Portfolio