import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Tools from "./Tools";

const Header = () => {
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > "10"
        ? setIsHeaderActive(true)
        : setIsHeaderActive(false);
    });
  }, []);

  return (
    <header className={isHeaderActive ? `${styles.active}` : ""}>
      <div className={`${styles.container} container`}>
        <Logo />
        <NavLinks />
        <Tools />
      </div>
    </header>
  );
};

export default Header;
