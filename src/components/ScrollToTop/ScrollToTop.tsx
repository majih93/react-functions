import { useEffect, useState } from "react";
import cx from "classnames";

import styles from "./scrollToTop.module.scss";

function ScrollToTop() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    });

    return window.removeEventListener("scroll", () => {});
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.container}>
      <div className={cx(styles.box, styles.box1)}></div>
      <div className={cx(styles.box, styles.box2)}></div>
      <div className={cx(styles.box, styles.box3)}></div>
      <div className={cx(styles.box, styles.box4)}></div>
      <div className={cx(styles.box, styles.box5)}></div>
      {showToTopButton && (
        <button
          className={styles.toTopButton}
          type="button"
          onClick={handleScrollToTop}
        >
          TOP
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;
