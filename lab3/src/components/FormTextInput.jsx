import React from 'react'

const FormTextInput = ({label, idName}) => {
  return (
    <p className='field required'>
        <label className='label required' htmlFor={idName}>{label}</label>
        <input className='text-input' id={idName} name={idName} required type='text'></input>
    </p>
  )
}

export default FormTextInput