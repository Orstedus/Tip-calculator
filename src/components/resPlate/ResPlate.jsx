import React from 'react'
import cl from './resPlate.module.css'

const ResPlate = ({children, title, disc}) => {
  return (
    <div className={cl.base}>
        <div className={cl.plate1}>
            <p className={cl.resTitle}>{title}</p>
            <p className={cl.resDisc}>{disc}</p>
        </div>
        <div className={cl.plate2}>
            <p className={cl.bigRes}>{children}</p>
        </div>
    </div>
  )
}

export default ResPlate