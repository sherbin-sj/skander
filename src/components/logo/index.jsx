import React from 'react'
import { logo } from "../../assets";
import "./Logo.css"

const Logo = () => {
  return (
    <div className="flex__center logo__container"> 
        <div className="logo">
            <img src = {logo} alt="" />
            </div>
            </div>
  );
}

export default Logo;