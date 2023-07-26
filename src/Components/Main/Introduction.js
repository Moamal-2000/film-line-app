import React from "react";
import styles from "./Introduction.module.scss";

const Introduction = () => {
  return (
    <section className={styles.websiteIntroduction}>
      <div className="container">
        <h1 className={styles.websiteName}>Filmlane</h1>
        <h2>
          Unlimited <span>Movie</span>, TVs Shows \& More.
        </h2>
        <div className={styles.box}>
          <span className={styles.pg}>PG 18</span>
          <span className={styles.resolution}>HD</span>
          <div className={styles.content}>
            <span className={styles.type}>Romance, Drama</span>
            <div>
              2022 <span>128min</span>
            </div>
          </div>
        </div>
        <button className={styles.buttonEffect} type="button">
          Watch Now
        </button>
      </div>
    </section>
  );
};

export default Introduction;
