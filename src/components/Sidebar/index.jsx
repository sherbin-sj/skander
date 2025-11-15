import React from "react";
import "./Sidebar.css";
import Logo from "../logo";
import { navigations } from "../../data";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ openSidebar, onClose }) => {
  return (
    <div className={`sidebar ${openSidebar ? "visible" : ""}`}>
      <div className="sidebar__wrapper">
        <div className="flex__center top">
          <Logo />
          <button className="flex__center icon" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        <div className="middle navlinks">
          {navigations.map((nav, index) => (
            <NavLink
              to={nav.to}
              className="navitem"
              onClick={onClose}
              key={index}
            >
              {nav.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;