import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Target,
  Focus,
  Calendar,
  Hammer,
  Home,
  Wrench,
  ArrowRight,
  Phone,
} from "lucide-react";
import "./About.css";

// Import images
import heroImage from "../assets/image/about_house.png";
import team1 from "../assets/img/team/1.png";
import team2 from "../assets/img/team/2.png";
import team3 from "../assets/img/team/3.png";
import process1 from "../assets/img/Technical Consultation.jpg";
import process2 from "../assets/img/Design and Planning.jpg";
import process3 from "../assets/img/construction.jpg";
import process4 from "../assets/img/move in.jpg";

// Import GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const missionVisionData = [
    {
      icon: <Target className="mission-icon" size={40} />,
      title: "Our Mission",
      description:
        "To deliver innovative, sustainable, and high-quality construction solutions that reflect our clients’ vision. We combine modern technology, thoughtful design, and trusted partnerships to turn ideas into reality with excellence and timely delivery.",
    },
    {
      icon: <Focus className="mission-icon" size={40} />,
      title: "Our Vision",
      description:
        "To become a leading name in South India’s construction industry through innovation, integrity, and customer satisfaction — building lasting relationships while embracing technology and sustainable practices to set new standards in quality and trust.",
    },
    {
      icon: <Building2 className="mission-icon" size={40} />,
      title: "Focused",
      description:
        "We specialize in sustainable, eco-friendly buildings that blend with nature. Our designs focus on energy efficiency, recyclable materials, and healthier spaces — creating harmony between the built environment and the natural world.",
    },
  ];

  const leadershipData = [
    {
      image: team1,
      name: "Dr. Sachin Thickurissy",
      designation: "Founder & CEO",
      description:
        "Dr. Sachin Thickurissy, Founder, Chairman and Managing Director of the Tejaswi Group of Companies, established Skandar Construction as a symbol of quality, trust, and innovation in the infrastructure sector.",
    },
    {
      image: team2,
      name: "Mr. Abdul Kareem M",
      designation: "Project Manager",
      description:
        "Mr. Abdul Kareem M, Project Manager at Skandar Construction, is a skilled leader with strong expertise in planning, coordinating, and executing construction projects.",
    },
    {
      image: team3,
      name: "Mrs.Rohini Sarath M",
      designation: "Chief Architect",
      description:
        "Mrs. Rohini M, Chief Architect at Skandar Construction, is a visionary professional known for her expertise in architectural design and sustainable planning.",
    },
  ];

  const processSteps = [
    {
      icon: <Calendar className="process-icon" size={30} />,
      image: process1,
      title: "Technical Consultation",
      description:
        "We begin with a comprehensive consultation to understand your needs, budget, and timeline. Our experts assess the project requirements and provide technical insights.",
    },
    {
      icon: <Wrench className="process-icon" size={30} />,
      image: process2,
      title: "Design and Planning",
      description:
        "Our design team creates detailed plans and blueprints, ensuring every aspect meets your vision while adhering to safety standards and building codes.",
    },
    {
      icon: <Hammer className="process-icon" size={30} />,
      image: process3,
      title: "Construction",
      description:
        "Skilled craftsmen and engineers execute the project with precision, using quality materials and following best practices throughout the construction phase.",
    },
    {
      icon: <Home className="process-icon" size={30} />,
      image: process4,
      title: "Delivery",
      description:
        "We deliver your project on time with full quality checks and handover procedures ensuring a smooth transition into your finished space.",
    },
  ];

  // Refs for GSAP
  const processSectionRef = useRef(null);
  const processCardsRef = useRef([]);
  const heroSectionRef = useRef(null);
  const heroImageRef = useRef(null);
  const heroTextRef = useRef(null);

  // GSAP ScrollTrigger effect for hero section
  useEffect(() => {
    // Ensure GSAP plugins are registered
    gsap.registerPlugin(ScrollTrigger);

    const processSection = processSectionRef.current;
    const processCards = processCardsRef.current;
    const heroSection = heroSectionRef.current;
    const heroImg = heroImageRef.current;
    const heroText = heroTextRef.current;

    // Kill any existing ScrollTriggers to prevent conflicts
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Hero section animation
    let heroTimeline;
    if (heroSection) {
      // Set initial state
      gsap.set([heroImg, heroText], { autoAlpha: 0, y: 30 });

      // Create timeline for hero section
      heroTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroSection,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate elements
      heroTimeline
        .to(heroImg, {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        .to(
          heroText,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        ); // Start 0.4s before previous animation ends
    }

    if (!processSection || processCards.length === 0) return;

    // Hide all cards initially with opacity 0 and slight downward offset
    gsap.set(processCards, {
      autoAlpha: 0,
      y: 50,
      scale: 0.95,
    });

    // Create ScrollTrigger for each card to show one by one
    processCards.forEach((card, index) => {
      if (!card) return;

      // Create animation for each card
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%", // Trigger when card is 85% from top of viewport
        end: "top 50%",
        toggleActions: "play none none reverse",
        onEnter: () => {
          gsap.to(card, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            delay: index * 0.15, // Stagger the animations
          });
        },
        onLeaveBack: () => {
          gsap.to(card, {
            autoAlpha: 0,
            y: 50,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.in",
          });
        },
      });
    });

    // Cleanup function
    return () => {
      if (heroTimeline) {
        heroTimeline.kill();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.section
      className="about-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero-section" id="about" ref={heroSectionRef}>
          <div className="about-hero-content">
            <div className="about-hero-text" ref={heroTextRef}>
              <h1 className="heading">About Us</h1>
              <p className="description">
                At Skandar Constructions, we're excited to be a fresh and
                evolving presence in the constructions industry, committed to
                delivering innovative, quality-driven solutions that exceed
                expectations, driven by a passion to build spaces that inspire.
                At Skandar Constructions, we are a growing start-up driven by
                new ideas, modern technology and a strong focus on quality,
                honesty and customer satisfaction. Skandar Constructions is a
                unit under the Tejaswi Group of Companies. We bring together
                innovation and strong values to deliver construction solutions
                that meet the needs of today's world. Every project we
                undertake, whether residential, commercial or interior spaces,
                is an opportunity for us to create meaningful, lasting value for
                our clients. With a skilled team, advanced technology and a
                client-first approach, we are redefining what a start-up can
                achieve in the world of construction building not just
                structures, but lasting relationships.
              </p>
              <div className="about-hero-buttons">
                <a href="/services" className="btn primary">
                  Our Services <ArrowRight size={18} />
                </a>
                <a href="/contact" className="btn">
                  <Phone size={18} /> Contact Us
                </a>
              </div>
            </div>
            <div className="about-hero-image" ref={heroImageRef}>
              <img src={heroImage} alt="Construction Project" />
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <motion.div className="mission-section" variants={fadeInUp}>
          <h2 className="sub__heading">Our Mission & Vision</h2>
          <div className="mission-grid">
            {missionVisionData.map((item, index) => (
              <motion.div
                className="mission-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.icon}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div className="leadership-section" variants={fadeInUp}>
          <h2 className="sub__heading">Meet Our Leadership</h2>
          <div className="leadership-grid">
            {leadershipData.map((leader, index) => (
              <motion.div
                className="leader-card"
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="leader-image">
                  <img src={leader.image} alt={leader.name} />
                </div>
                <div className="leader-info">
                  <h3>{leader.name}</h3>
                  <p className="designation">{leader.designation}</p>
                  <p className="description">{leader.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process Section - Updated to match Services.jsx design */}
        <motion.div className="process-section" variants={fadeInUp}>
          <h2 className="sub__heading text-center">How It Works</h2>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div className="process-step" key={index}>
                <div className="process-icon-wrapper">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
