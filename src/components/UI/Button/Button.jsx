import React from 'react'
import './Button.scss'

const Button = ({onClick, text, light}) => {
  return (
    <button
      onClick={onClick}
      className={!light ? 'button' : 'button button--light'}>
      {text}
    </button>
  )
}

export default Button
