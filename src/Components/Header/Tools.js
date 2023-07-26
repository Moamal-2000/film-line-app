import React from "react";
import { useMoviesContext } from "../../App";
import "./Tools.css";

const Tools = ({ isOverlayActive, setIsOverlayActive }) => {
  const movieContext = useMoviesContext();

  return (
    <div className="tools">
      <div className="search-input-container">
        <input type="text" className="search-input" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="select-lang">
        <i className="bi bi-globe2 global"></i>
        <span className="selected-lang">EN</span>
        <i className="fa-solid fa-angle-down"></i>
        <nav className="languages">
          <ul>
            <li>
              <a href="/#">EN</a>
            </li>
            <li>
              <a href="/#">AR</a>
            </li>
            <li>
              <a href="/#">AU</a>
            </li>
            <li>
              <a href="/#">TU</a>
            </li>
            <li>
              <a href="/#">RU</a>
            </li>
          </ul>
        </nav>
      </div>

      <button className="sign-in-button button-effect">Sign in</button>
      <i
        className="fa-solid fa-bars mobile-nav-icon"
        onClick={() => {
          setIsOverlayActive(true);
          document.body.classList.add("overflow");
        }}
      ></i>
    </div>
  );
};

export default Tools;
