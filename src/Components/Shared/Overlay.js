import { useOverlayData } from "../../Contexts/OverlayContext";
import styles from "./Overlay.module.scss";

const Overlay = () => {
  const { isOverlayActive, setIsOverlayActive } = useOverlayData();

  return (
    <div
      className={`${styles.overlay} ${
        isOverlayActive ? `${styles.active}` : ""
      }`}
      onClick={() => {
        setIsOverlayActive(false);
        document.body.classList.remove("overflow");
      }}
    ></div>
  );
};

export default Overlay;
