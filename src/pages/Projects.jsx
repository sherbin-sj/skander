import React from "react";
import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolio } from "../data";
import "./Projects.css";

const Projects = () => {
  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  // Project card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const [viewMode, setViewMode] = React.useState("grid");
  const [filter, setFilter] = React.useState("all");

  // Updated categories to match the new service categories
  const categories = [
    "all",
    "plan approvals",
    "civil works",
    "residential commercial project",
    "mep",
    "renovations",
    "painting",
    "landscaping",
    "restaurants hotels",
    "bars lounges"
  ];

  // Map categories to their corresponding routes
  const categoryRoutes = {
    "plan approvals": "/service/plan-approvals",
    "civil works": "/service/civil-works",
    "residential commercial project": "/service/residential-commercial-projects",
    "mep": "/service/mep",
    "renovations": "/service/renovations",
    "painting": "/service/painting",
    "landscaping": "/service/landscaping",
    "restaurants hotels": "/service/restaurants-hotels",
    "bars lounges": "/service/bars-lounges"
  };

  // Filter projects based on category
  const filteredProjects = filter === "all" 
    ? portfolio 
    : portfolio.filter(project => {
        // Map project categories to the new categories
        const categoryMap = {
          "residential": "residential commercial project",
          "commercial": "residential commercial project",
          "retail": "residential commercial project",
          "hospitality": "restaurants hotels",
          "restaurants & hotels": "restaurants hotels",
          "industrial": "civil works"
        };
        
        const projectCategory = project.category.toLowerCase();
        const mappedCategory = categoryMap[projectCategory] || projectCategory;
        return mappedCategory === filter;
      });

  return (
    <motion.section 
      className="projects-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <motion.div 
          className="page-header"
          variants={fadeInUp}
        >
          <h1 className="heading">Our Projects</h1>
          <p className="description">
            Explore our portfolio of successfully completed projects across various sectors and industries.
          </p>
        </motion.div>

        <motion.div 
          className="projects-controls"
          variants={fadeInUp}
        >
          <div className="filter-controls">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${filter === category ? "active" : ""}`}
                onClick={() => setFilter(category)}
              >
                {category === "all" ? "All Projects" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          <div className="view-controls">
            <button 
              className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={20} />
            </button>
            <button 
              className={`view-btn ${viewMode === "list" ? "active" : ""}`}
              onClick={() => setViewMode("list")}
            >
              <List size={20} />
            </button>
          </div>
        </motion.div>

        <motion.div 
          className={`projects-grid ${viewMode === "list" ? "list-view" : ""}`}
          variants={fadeInUp}
        >
          {filteredProjects.map((project, index) => {
            // Get the route for the project's category
            const projectCategory = project.category.toLowerCase();
            const categoryMap = {
              "residential": "residential commercial project",
              "commercial": "residential commercial project",
              "retail": "residential commercial project",
              "hospitality": "restaurants hotels",
              "restaurants & hotels": "restaurants hotels",
              "industrial": "civil works"
            };
            const mappedCategory = categoryMap[projectCategory] || projectCategory;
            const route = categoryRoutes[mappedCategory] || "/projects";
            
            return (
              <motion.div 
                className="project-card"
                key={index}
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
                <motion.div 
                  className="project-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <div className="project-content">
                  <div className="project-meta">
                    <motion.span 
                      className="project-category"
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="line__clamp__2">{project.description}</p>
                  <Link to={route} className="btn">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      View Details
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;