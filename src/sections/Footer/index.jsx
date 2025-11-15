import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Logo from "../../components/logo";
import { footer } from "../../data";

function Footer() {
  return (
    <footer id="footer">
      <div className="overlay__div">
        <div className="container">
          <div className="column">
            <Logo />
            <p>
              Our mission is to build lasting spaces that inspire and uplift,
              combining quality craftsmanship with innovative solutions to meet
              the evolving needs of our clients and communities.
            </p>
          </div>
          {footer.map((foot, index) => (
            <div className="column" key={index}>
              <h4 className="title">{foot.title}</h4>
              {foot.routes.map((route, index) => (
                <Link to={route.href} className="route" key={index}>
                  {route.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;