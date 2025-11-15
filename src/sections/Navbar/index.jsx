import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../components/logo";
import { navigations } from "../../data";
import SocialHandles from "../../components/SocialHandles";
import { FaArrowTurnDown } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../../components/Sidebar";
import useNavbar from "../../hook/useNavbar";

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showNavbar } = useNavbar();

  return (
    <>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(false)}
      />
      <nav className={`flex__center navbar ${showNavbar ? "drop" : ""}`}
      >
        <Logo />
        <div className="navbar__links">
          {navigations.map((item, index) => (
            <NavLink
              to={item.to}
              className={({ isActive }) => `nav__item ${isActive ? "active" : ""}`}
              key={index}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
        <SocialHandles />
        <div className="flex-center">
          <NavLink to="/contact" className="flex__center btn primary">
            {" "}
            get a quote
            <FaArrowTurnDown />{" "}
          </NavLink>
          <button
            className="flex__center icon menu__btn"
            onClick={() => setOpenSidebar(true)}>
            <FiMenu />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;