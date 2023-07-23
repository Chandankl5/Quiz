import React from 'react'

function CheckBox({
  id,
  name,
  label,
  className,
  required
}) {
  return (
    <>
      <input type="checkbox" className={className} name={name} id={id} required />
      <label htmlFor={label} />
    </>
  )
}

export default CheckBox