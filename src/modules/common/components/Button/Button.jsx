import React from 'react'

import styles from './Button.module.css';

function Button({
  text,
  onClick,
  className = '',
  showLoading = false,
  loadingText = 'Loading..'
}) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {!showLoading ? text : null}
      {showLoading ? loadingText : null}
    </button>
  )
}

export default Button