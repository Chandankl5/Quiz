import React from 'react';

import styles from './Progress.module.css';

function Progress({
  text,
  subText,
  progressPercent
}) {


  return (
    <div className={styles.progressOuter}>
      <div className={styles.progressInner}
         style={{ backgroundImage: `conic-gradient(#44B77B ${progressPercent}%, #F3F4FA ${progressPercent}%)`}}>
        <div className={styles.progressCore}>
          <sup className={styles.text}>{text}</sup>
          <sub className={styles.subText}>{subText}</sub>
        </div>
      </div>
    </div>
  )
}

export default Progress