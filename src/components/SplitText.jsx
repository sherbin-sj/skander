import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitText Component - Advanced text reveal animation
 * Splits text into words/chars and animates them with stagger effect
 */
const SplitText = ({ children, className = '', delay = 0, stagger = 0.02, type = 'words' }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    // Split text into individual elements
    const split = new SplitType(textRef.current, { 
      types: type === 'chars' ? 'chars' : 'words',
      tagName: 'span'
    });

    // Set initial state
    gsap.set(split[type], {
      opacity: 0,
      y: 20,
      rotateX: -90,
      transformOrigin: 'top center',
    });

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: textRef.current,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(split[type], {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: stagger,
          delay: delay,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      split.revert();
    };
  }, [delay, stagger, type]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default SplitText;
