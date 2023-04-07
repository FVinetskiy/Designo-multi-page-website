import React from 'react'
import './Portfolio.scss'

const Portfolio = ({dataPortfolio}) => {
  const listItems = dataPortfolio.map((item) => (
    <div className='portfolio-item' key={item.id}>
      <img className='portfolio-item__img' src={item.src} alt='' />
      <div className='portfolio-item__content'>
        <p className='portfolio-item__title'>{item.title}</p>
        <p className='portfolio-item__text'>{item.text}</p>
      </div>
    </div>
  ))

  return <section className='portfolio'>{listItems}</section>
}

export default Portfolio
