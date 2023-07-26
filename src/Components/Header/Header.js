import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Tools from "./Tools";

const Header = () => {
  const header = useRef();
  const [isOverlayActive, setIsOverlayActive] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      window.scrollY > "10"
        ? header.current.classList.add("active")
        : header.current.classList.remove("active");
    });
  }, []);

  return (
    <header ref={header}>
      <div className="container">
        <div
          className={`${styles.overlay} ${isOverlayActive ? `${styles.active}` : ""}`}
          onClick={() => {
            setIsOverlayActive(false);
            document.body.classList.remove("overflow");
          }}
        ></div>
        <Logo />
        <NavLinks
          isOverlayActive={isOverlayActive}
          setIsOverlayActive={setIsOverlayActive}
        />
        <Tools
          isOverlayActive={isOverlayActive}
          setIsOverlayActive={setIsOverlayActive}
        />
      </div>
    </header>
  );
};

export default Header;
