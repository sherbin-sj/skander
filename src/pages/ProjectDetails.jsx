import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { portfolio } from "../data";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = portfolio[projectId];

  // If project not found, redirect to projects page
  useEffect(() => {
    if (!project) {
      navigate("/projects");
    }
  }, [project, navigate]);

  if (!project) {
    return null;
  }

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

  return (
    <motion.section 
      className="project-details-page blur__effect"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div variants={fadeInUp}>
          <button className="back-button" onClick={() => navigate("/projects")}>
            <ArrowLeft size={20} />
            Back to Projects
          </button>
        </motion.div>

        <motion.div 
          className="project-details-header"
          variants={fadeInUp}
        >
          <h1 className="heading">{project.title}</h1>
          <div className="project-meta">
            <div className="meta-item">
              <Calendar size={18} />
              <span>{project.date}</span>
            </div>
            <div className="meta-item">
              <Tag size={18} />
              <span>{project.category}</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="project-details-image"
          variants={fadeInUp}
        >
          <img src={project.image} alt={project.title} />
        </motion.div>

        <motion.div 
          className="project-details-content"
          variants={fadeInUp}
        >
          <h2>Project Overview</h2>
          <p className="description">{project.description}</p>
          
          <h3>Project Details</h3>
          <div className="project-details-grid">
            <div className="detail-item">
              <h4>Category</h4>
              <p>{project.category}</p>
            </div>
            <div className="detail-item">
              <h4>Completion Date</h4>
              <p>{project.date}</p>
            </div>
            <div className="detail-item">
              <h4>Scope of Work</h4>
              <p>Full project lifecycle from planning to completion</p>
            </div>
            <div className="detail-item">
              <h4>Location</h4>
              <p>Various locations</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProjectDetails;