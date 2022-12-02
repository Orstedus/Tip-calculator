import React from 'react'

const SButton = ({func, children, styl}) => {
  return (
    <button className={styl} onClick={func}>{children}</button>
  )
}

export default SButton