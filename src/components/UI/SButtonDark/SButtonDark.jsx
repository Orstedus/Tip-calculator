import React from 'react'
import cl from './SButtonDark.module.css'

const SButton_dark = ({func, children}) => {
    return (
      <button className={cl.SButton} onClick={func}>{children}</button>
    )
  }
  
  export default SButton_dark