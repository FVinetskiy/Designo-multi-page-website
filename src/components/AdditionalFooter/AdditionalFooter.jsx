import React from 'react'
import Button from '../UI/Button/Button'
import './AdditionalFooter.scss'

const AdditionalFooter = () => {
  return (
    <div className='additional'>
      <p className='additional__title'>Let’s talk about your project</p>
      <p className='additional__description'>
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Button text='Get in touch' />
    </div>
  )
}

export default AdditionalFooter
