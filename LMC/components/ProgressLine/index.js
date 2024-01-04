import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import { getPointCoor } from "@/utils/index";
const ProgressLine = ({ ...props }) => {
  const smallBox = useRef(null);
  const bigBox = useRef(null);
  const [ball1, setBall1] = useState({ left: 0, top: 0 });
  const [ball2, setBall2] = useState({ left: 0, top: 0 });
  const [ball3, setBall3] = useState({ left: 0, top: 0 });
  const [freeBall, setFreeBall] = useState({ left: 0, top: 0 });

  const setPoint = () => {
    const b1 = getPointCoor(800, smallBox, bigBox);
    const b2 = getPointCoor(1500, smallBox, bigBox);
    const b3 = getPointCoor(2100, smallBox, bigBox);
    const fb = getPointCoor(308, smallBox, bigBox);
    setBall1(b1);
    setBall2(b2);
    setBall3(b3);
    setFreeBall(fb);
  };

  useEffect(() => {
    setPoint();
    window.addEventListener("resize", setPoint);
  }, []);

  return (
    <div className={styles["hidden-box"]}>
      <div ref={smallBox} className={styles["progress-line-box"]}>
        <div ref={bigBox} className={`${styles["big-box"]}`}></div>
        {/* ball1 */}
        <div
          style={{
            top: `${ball1.top}px`,
            left: `${ball1.left}px`,
          }}
          className={`${styles.ball} ${styles.ball1}`}
        >
          <span></span>{" "}
          <div className={styles.in}>
            No.800 Node
            <p>SPLIT 20,000U LMC</p>
          </div>
        </div>
        {/* ball2 */}
        <div
          style={{
            top: `${ball2.top}px`,
            left: `${ball2.left}px`,
          }}
          className={`${styles.ball} ${styles.ball2} ${styles.passed}`}
        >
          <span></span>{" "}
          <div className={styles.in}>
            No.1500 Node
            <p>SPLIT 40,000U LMC</p>
          </div>
        </div>

        {/* ball3 */}
        <div
          style={{
            top: `${ball3.top}px`,
            left: `${ball3.left}px`,
          }}
          className={`${styles.ball} ${styles.ball3}`}
        >
          <span></span>
          <div className={styles.in}>
            No.2100 Node
            <p>SPLIT 60,000U LMC</p>
          </div>
        </div>
        {/* freeBall */}
        <div
          style={{
            top: `${freeBall.top}px`,
            left: `${freeBall.left}px`,
          }}
          className={`${styles["free-ball"]}`}
        >
          <span></span>
          <p>903 Sold</p>
        </div>
      </div>
    </div>
  );
};
export default ProgressLine;
