import React from "react";
import "./Services.css";
import { Link } from "react-scroll";
import { sketch } from "../../assets";
import { useNavigate } from "react-router-dom";

const Services = () => {
  // Define the service categories with their corresponding routes
  const serviceCategories = [
    { title: "Plan Approvals", route: "/service/plan-approvals" },
    { title: "Civil Works", route: "/service/civil-works" },
    { title: "Residential & Commercial Projects", route: "/service/residential-commercial-projects" },
    { title: "MEP", route: "/service/mep" },
    { title: "Renovations", route: "/service/renovations" },
    { title: "Painting", route: "/service/painting" },
    { title: "Landscaping", route: "/service/landscaping" },
    { title: "Restaurants & Hotels", route: "/service/restaurants-hotels" },
    { title: "Bars & Lounges", route: "/service/bars-lounges" },
  ];

  const navigate = useNavigate();

  return (
    <section id="services">
      <div className="overlay__div">
        <div className="container">
          {/* Intro Section */}
          <div className="grid">
            <div className="section__header">
              <div className="sub__heading">Plan Your Dream Project with Us</div>
              <p className="muted description">
                At Skander, we believe every great structure begins with a
                vision — and we're here to turn that vision into reality. Our
                expert team works closely with you from concept to completion,
                ensuring every detail reflects your goals, lifestyle, and
                budget. Whether it's a residential, commercial, or civil
                project, we combine innovation, precision, and trusted expertise
                to deliver results that stand the test of time. Let's build your
                dream project together — the smart way, the Skander way.
              </p>
              <Link to="contact" className="btn primary" smooth={true} duration={500}>
                Book Consultation
              </Link>
            </div>
            <div className="object__contain">
              <img src={sketch} alt="Architectural Sketch" />
            </div>
          </div>

          {/* Services Grid - Only first 3 services */}
          <div className="grid services">
            {serviceCategories.slice(0, 3).map((service, index) => (
              <div className="service" key={index}>
                <div className="flex top">
                  <div className="flex__center icon">
                    {/* Placeholder icon - you can replace with FontAwesome or React Icons */}
                    <span className="service-icon">🏗️</span>
                  </div>
                  <h4 className="title">{service.title}</h4>
                </div>

                <div className="middle">
                  {/* Fixed typo: "decription" → "description" */}
                  <p className="description">
                    Professional construction services tailored to your specific needs.
                  </p>
                </div>

                <div className="flex bottom">
                  <button
                    className="btn"
                    onClick={() => navigate(service.route)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;