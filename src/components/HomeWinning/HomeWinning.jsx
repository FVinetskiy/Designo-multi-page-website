import React from 'react'
import './HomeWinning.scss'
import Button from '../UI/Button/Button'

const HomeWinning = () => {
  return (
    <div className='winning'>
      <h1 className='winning__title'>
        Award-winning custom designs and digital branding solutions
      </h1>
      <p className='winning__text'>
        With over 10 years in the industry, we are experienced in creating fully
        responsive websites, app design, and engaging brand experiences. Find
        out more about our services.
      </p>
      <Button text='Learn more' />
      <img className='winning__img' src='./images/image-hero-phone.png' />
    </div>
  )
}

export default HomeWinning
