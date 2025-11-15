import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./Achivement.css";
import { FaCheckCircle, FaClock, FaLeaf } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Achivement = () => {
  const achievementRef = useRef(null);

  useEffect(() => {
    // Set initial visible state
    if (achievementRef.current) {
      gsap.set(achievementRef.current.children, {
        opacity: 1,
        y: 0,
        scale: 1
      });
    }

    // Card reveal animation
    gsap.from(achievementRef.current?.children, {
      scrollTrigger: {
        trigger: achievementRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 50,
      scale: 0.9,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="achivements" ref={achievementRef}>
      {/* Premium Quality Card with counter */}
      <div className="achivement__card">
        <div className="flex__center icon">
          <FaCheckCircle />
        </div>
        <h3 className="title">
          Premium Quality
        </h3>
      </div>
      
      {/* On-Time Delivery Card with counter */}
      <div className="achivement__card">
        <div className="flex__center icon">
          <FaClock />
        </div>
        <h3 className="title">
          On-Time Delivery
        </h3>
      </div>
      
      {/* Eco-Friendly Card with counter */}
      <div className="achivement__card">
        <div className="flex__center icon">
          <FaLeaf />
        </div>
        <h3 className="title">
          Eco-Friendly
        </h3>
      </div>
    </div>
  )
}

export default Achivement