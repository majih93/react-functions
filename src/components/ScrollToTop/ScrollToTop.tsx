import { useEffect, useState } from "react";
import cx from "classnames";

import styles from "./scrollToTop.module.scss";

function ScrollToTop() {
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    // 최초 렌더링 이후에 윈도우 객체에 scroll event 등록
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    });

    // 컴포넌트 unmount 될 때 event 제거
    // 그렇지 않으면 불필요한 이벤트 구독 상태가 남게 됨
    return window.removeEventListener("scroll", () => {});
  }, []);

  // 클릭 시에 scrollTo 메서들 통해서 상단에서 0 만큼 떨어진 위치로 스크롤
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
