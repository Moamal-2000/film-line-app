import React from "react";
import "./Logo.css"
import LogoImg from "../../assets/logo.svg"

const Logo = () => {
  return (
    <div className="logo">
      <a href="index.html">
        <img src={LogoImg} alt="" />
      </a>
    </div>
  );
};

export default Logo;
