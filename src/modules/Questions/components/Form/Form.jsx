import React from 'react'
import CheckBox from '../CheckBox/CheckBox'
import Option from '../Option/Option'
import Button from '@/modules/common/components/Button/Button'

import styles from './Form.module.css';

function Form({
  options = [],
  onOptionClick,
  selectedOptions = [],
  showCtaLoading,
  onSubmit
}) {

  return (
    <form className={styles.form}>
      {options.map(( {id, label} ) => {
        return (
          <div key={id} onClick={onOptionClick}>
            {/* Hidden Checkbox for accessibility*/}
            <CheckBox id={id} name={label} label={label} className='hide' required /> 
            <Option id={id} label={label} selected={selectedOptions.includes(id)} />
          </div>
        )
      })}
      {options.length > 0 ? 
        <div className={styles.ctaWrapper}>
          <Button text='Next' onClick={onSubmit} showLoading={showCtaLoading} disabled={selectedOptions.length === 0} />
        </div> : null}
    </form>
  )
}

export default Form