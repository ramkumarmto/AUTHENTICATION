

import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className={`${props.className} button`}>{props.btnName}</button>
  )
}

export default Button