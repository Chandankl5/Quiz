import React from 'react'
import { Logo } from '../../../common/components/Logo'
import Image from 'next/image'

import styles from './Home.module.css';
import Button from '@/modules/common/components/Button/Button';

function Home({
  quizLabel,
  showCtaLoading,
  ctaText,
  onStart
}) {
  return (
    <div className={styles.home}>
      <Logo />
      <div className={styles.main}>
        <div className={styles.quizLabelWrapper}>
          <div className={styles.quizLabel}>
          {quizLabel}
          </div>
        </div>
      </div>
      <Button 
        text={ctaText}
        showLoading={showCtaLoading}
        onClick={onStart} 
      />
    </div>
  )
}

export default Home