import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Web3Forms Submit 
const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");

  const formDataToSend = new FormData(event.target);
  formDataToSend.append("access_key", "813c1d6c-d110-4fab-9ec4-d997e1b88050");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formDataToSend
  });

  const data = await response.json();

  if (data.success) {
    setResult("Form Submitted Successfully");

    // Reset the UI fields
    event.target.reset();

    // Reset React state
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });

    // Clear success message after 3 seconds
    setTimeout(() => setResult(""), 3000);

  } else {
    setResult("Error");
  }
};

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: "Kuzhithurai, Kanyakumari Dist, Tamil Nadu - 629 163"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: "+91 9894304987"
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "enquiry@skandarconstructions.com"
    },
  ];

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <motion.section 
      className="contact-page"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        
        {/* Header */}
        <motion.div className="page-header" variants={fadeInUp}>
          <h1 className="heading">Contact Us</h1>
          <p className="description">
            Have a project in mind or questions about our services? Let's Talk.
          </p>
        </motion.div>

        <div className="contact-container">

          {/* Contact info section */}
          <motion.div className="contact-info" variants={fadeInUp}>
            <h2 className="sub__heading">Get In Touch</h2>
            <p className="contact-description">
              We're here to answer any questions you may have about our services or projects.
              Reach out to us and we'll respond as soon as we can.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div 
                  className="contact-item"
                  key={index}
                  custom={index}
                  variants={contactItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 10, transition: { duration: 0.3 } }}
                >
                  <motion.div 
                    className="contact-icon"
                    whileHover={{ scale: 1.2, rotate: 5, transition: { duration: 0.3 } }}
                  >
                    {info.icon}
                  </motion.div>

                  <div className="contact-text">
                    <h3>{info.title}</h3>
                    <p>{info.details}</p>
                  </div>

                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div className="contact-form" variants={fadeInUp}>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name"
                  value={formData.name} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email"
                  value={formData.email} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <input type="tel" name="phone" placeholder="Your Phone Number"
                  value={formData.phone} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject"
                  value={formData.subject} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5"
                  value={formData.message} onChange={handleChange} required></textarea>
              </div>

              <button type="submit" className="btn primary">Send Message</button>
              <p>{result}</p>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;