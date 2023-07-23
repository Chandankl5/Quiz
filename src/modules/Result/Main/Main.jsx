import styles from "./Main.module.css";
import TopBanner from "@/modules/common/components/TopBanner/TopBanner";
import Meter from "@/modules/common/components/Icons/Meter";
import CircleClip from "@/modules/common/components/Icons/CircleClip";
import Arrow from "@/modules/common/components/Icons/Arrow";
import Button from "@/modules/common/components/Button/Button";

function Main({ score, correctCount, incorrectCount, onStart }) {
  return (
    <div className={styles.result}>
      <TopBanner />
      <div className={styles.main}>
        <h3 className={styles.headerText}>Your Result</h3>
        <div className={styles.meterWrapper}>
          <Meter className={styles.meter} />
          <CircleClip className={styles.circleClip} />
          <Arrow className={styles.arrow} style={{ transform: `rotate(${((score * 140)/100) - 70}deg)`}} />
          <div className={styles.scoreWrapper} />
          <div className={styles.score}>{score}%</div>
        </div>
        <div className={styles.itemValid}>
          <span className={styles.itemValidCount}>{correctCount}</span>
          <span className={styles.countText}>Correct</span>
        </div>
        <div className={styles.itemInvalid}>
          <span className={styles.itemInvalidCount}>{incorrectCount}</span>
          <span className={styles.countText}>Incorrect</span>
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <Button text='Start Again' onClick={onStart} />
      </div>
    </div>
  );
}

export default Main;
