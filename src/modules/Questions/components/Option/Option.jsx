import React from "react";

import styles from "./Option.module.css";

function Option({ id, label, selected }) {
  return (
    <div
      id={id}
      className={`${styles.option} ${selected ? styles.optionSelected : ""}`}
    >
      {!selected ? (
        <svg
          className={styles.radioVirtual}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            opacity="0.0829846"
            d="M46 24C46 36.1503 36.1503 46 24 46C11.8497 46 2 36.1503 2 24C2 11.8497 11.8497 2 24 2C36.1503 2 46 11.8497 46 24Z"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      ) : (
        <svg
          className={styles.radioVirtualSelected}
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM37.3137 14.3431L39.435 16.4645L25.2929 30.6066L22.4645 33.435L19.636 30.6066L12.565 23.5355L14.6863 21.4142L22.38 28.0821L37.3137 14.3431Z"
            fill="#44B77B"
          />
        </svg>
      )}
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Option;
