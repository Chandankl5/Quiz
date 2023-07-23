import React from "react";

import styles from "./Option.module.css";
import CircleUncheck from "@/modules/common/components/Icons/CircleUncheck";
import CircleCheck from "@/modules/common/components/Icons/CircleCheck";

function Option({ id, label, selected }) {
  return (
    <div
      id={id}
      className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
    >
      {!selected ? (
        <CircleUncheck className={styles.radioVirtual} />
      ) : (
        <CircleCheck className={styles.radioVirtualSelected} />
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Option;
