import React from "react";
import LogoImg from "../../assets/logo.svg";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href="index.html">
        <img src={LogoImg} alt="" />
      </a>
    </div>
  );
};

export default Logo;
