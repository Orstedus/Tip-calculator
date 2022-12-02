import React from 'react'
import cl from './SInputBtn.module.css'

export const SInputBtn = ({onChange, placeholder, value}) => {
  return (
    <input onChange={onChange} placeholder={placeholder} value={value} className={cl.input} type="text"/>
  )
}
