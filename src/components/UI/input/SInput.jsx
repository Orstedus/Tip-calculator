import React from 'react'
import cl from './SInput.module.css'

export const SInput = ({name, func, value, error, doll}) => {
  return (
    <div className={cl.base}>
      <p className={cl.title}>{doll?"People":"Bill"}</p>
      {error
      ?<p className={cl.errorTitle}>Must contain only numbers!</p>
      :''
      }
      <input onChange={func} placeholder={name} value={value} className={
        doll
        ?error?cl.inputHumanError:cl.inputHuman
        :error?cl.inputDollarError:cl.inputDollar
      } type="text"/>
    </div>
  )
}
