import React from "react";
import { useMoviesContext } from "../../Contexts/MoviesContext";
import { useOverlayData } from "../../Contexts/OverlayContext";
import styles from "./Tools.module.scss";

const Tools = () => {
  const { isOverlayActive, setIsOverlayActive } = useOverlayData();
  const movies = useMoviesContext();

  return (
    <div className={styles.tools}>
      <div className={styles.searchInputContainer}>
        <input type="text" className={styles.searchInput} />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className={styles.selectLang}>
        <i className={`bi bi-globe2 ${styles.global}`}></i>
        <span className={styles.selectedLang}>EN</span>
        <i className="fa-solid fa-angle-down"></i>
        <nav className={styles.languages}>
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

      <button className={`${styles.signInButton} buttonEffect`} type="button">
        Sign in
      </button>
      <i
        className={`${styles.mobileNavIcon} fa-solid fa-bars`}
        onClick={() => {
          setIsOverlayActive(true);
          document.body.classList.add("overflow");
        }}
      ></i>
    </div>
  );
};

export default Tools;
