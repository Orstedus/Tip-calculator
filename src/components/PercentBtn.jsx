import React from 'react'
import { SInputBtn } from './UI/inputBtn/SInputBtn'
import SButton from './UI/SButton/SButton'
import '../styles/app.css'
import cl from './UI/SButton/SButton.module.css'

const PercentBtn = ({func, funcInput, name, value, percent}) => {
  return (
    <div className='percentBtn'>
        <p className='title'>Select Tip %</p>
            <SButton styl={percent===5?cl.SButtonLight:cl.SButton} func={()=>func(5)}>5%</SButton>
            <SButton styl={percent===10?cl.SButtonLight:cl.SButton} func={()=>func(10)}>10%</SButton>
            <SButton styl={percent===15?cl.SButtonLight:cl.SButton} func={()=>func(15)}>15%</SButton>
            <SButton styl={percent===25?cl.SButtonLight:cl.SButton} func={()=>func(25)}>25%</SButton>
            <SButton styl={percent===50?cl.SButtonLight:cl.SButton} func={()=>func(50)}>50%</SButton>
            <SInputBtn onChange={funcInput} placeholder={name} value={value}/>
    </div>
  )
}

export default PercentBtn