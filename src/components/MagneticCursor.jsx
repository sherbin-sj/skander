import { useEffect } from 'react';
import { gsap } from 'gsap';
import './MagneticCursor.css';

/**
 * MagneticCursor Component - Premium cursor effect
 * Creates a custom cursor that follows mouse with magnetic attraction to interactive elements
 */
const MagneticCursor = () => {
  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    const cursor = document.createElement('div');
    cursor.className = 'magnetic-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    cursor.appendChild(cursorDot);

    // Cursor movement
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Magnetic effect on hoverable elements
    const magneticElements = document.querySelectorAll('button, a, .project-card, .portfolio, .filter-btn');
    
    magneticElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 1.5,
          duration: 0.3,
          ease: 'power2.out',
        });
        cursor.classList.add('cursor-hover');
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out',
        });
        cursor.classList.remove('cursor-hover');
      });

      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.5,
          ease: 'power2.out',
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
        });
      });
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      if (cursor && cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
    };
  }, []);

  return null;
};

export default MagneticCursor;
