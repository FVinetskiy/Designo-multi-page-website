import React from 'react'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className='about'>
      <img src='images/image-about-hero.jpg' className='about__img' />
      <div className='about__content'>
        <h1 className='about__title'>About Us</h1>
        <p className='about__text'>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
