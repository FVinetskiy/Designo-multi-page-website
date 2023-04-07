import React from 'react'
import './TitleBlock.scss'

const TitleBlock = ({title, description}) => {
  return (
    <div className='title-block'>
      <h1 className='title-block__title'>{title}</h1>
      <p className='title-block__description'>{description}</p>
    </div>
  )
}

export default TitleBlock
