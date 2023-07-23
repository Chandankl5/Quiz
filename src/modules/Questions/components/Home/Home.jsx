import React from 'react'
import TopBanner from '@/modules/common/components/TopBanner/TopBanner'
import Form from '../Form/FormContainer'

import styles from './Home.module.css';
import Progress from '../Progress/Progress';

function Home({
  questionLabel,
  questionIndex,
  totalQuestions,
  progressPercent
}) {
  return (
    <div className={styles.home}>
      <TopBanner />
      <div className={styles.main}>
        <div className={styles.formWrapper}>
          <div className={styles.progressWrapper}>
            <Progress
              text={questionIndex}
              subText={`/${totalQuestions}`}
              progressPercent={progressPercent}
            />
          </div>
          <h3 className={styles.header}>{questionLabel}</h3>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Home