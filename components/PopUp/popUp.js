import { useEffect } from "react";

import styles from "./popUp.module.scss";

export default function PopUp({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div id="pop-up-root">
      <div className={styles.popUp__backdrop} onClick={handleBackdropClick}>
        <div className={styles.popUp__content}>{children}</div>
      </div>
    </div>
  );
}
