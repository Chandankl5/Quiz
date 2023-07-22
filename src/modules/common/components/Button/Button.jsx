import React from 'react'

import styles from './Button.module.css';

function Button({
  text,
  onClick,
  className = '',
  disabled = false,
  showLoading = false,
  loadingText = 'Loading..'
}) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick} disabled={disabled}>
      {!showLoading ? text : null}
      {showLoading ? loadingText : null}
    </button>
  )
}

export default React.memo(Button)