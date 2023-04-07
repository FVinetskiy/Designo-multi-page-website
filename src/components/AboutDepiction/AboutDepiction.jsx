import React from 'react'
import './AboutDepiction.scss'

const AboutDepiction = ({src, title, text, textOption, reverse}) => {
  return (
    <div className={!reverse ? 'depiction' : 'depiction reverse'}>
      <img className='depiction__img' src={`images/${src}`} alt='' />
      <div className='depiction__content'>
        <p className='depiction__title'>{title}</p>
        <p className='depiction__text'>{text}</p>
        <p className='depiction__text'>{textOption}</p>
      </div>
    </div>
  )
}

export default AboutDepiction
