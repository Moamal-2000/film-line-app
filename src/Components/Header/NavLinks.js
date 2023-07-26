import React, { useEffect, useState } from "react";
import LogoImg from "../../assets/logo.svg";
import "./NavLinks.css";

const NavLinks = ({ isOverlayActive, setIsOverlayActive }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <nav className={`links ${isOverlayActive && "active"}`}>
      {screenWidth <= 1200 && (
        <div className="logo-container">
          <div className="logo">
            <a href="index.html">
              <img src={LogoImg} alt="" />
            </a>
          </div>
          <i
            className="fa-solid fa-xmark"
            onClick={() => {
              setIsOverlayActive(false);
              document.body.classList.remove("overflow");
            }}
          ></i>
        </div>
      )}
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Movie</a>
        </li>
        <li>
          <a href="/#">Tv show</a>
        </li>
        <li>
          <a href="/#">Web series</a>
        </li>
        <li>
          <a href="/#">Pricing</a>
        </li>
      </ul>
      {screenWidth <= 1200 && (
        <div className="social-media">
          <a href="/#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavLinks;
