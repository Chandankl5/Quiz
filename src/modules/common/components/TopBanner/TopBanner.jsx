import Image from "next/image";
import React from "react";

import styles from './TopBanner.module.css';

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <Image className={styles.topBannerImg} src="/top-banner.svg" alt="Top Banner" width={100} height={100} />
    </div>
  );
}

export default TopBanner;
