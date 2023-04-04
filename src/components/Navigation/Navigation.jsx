import React from 'react'
import './Navigation.scss'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <section className='navigation'>
      <Link className='navigation__link' to='web-design'>
        <h2 className='navigation__title'>WEB DESIGN</h2>
        <p className='navigation__description'>VIEW PROJECTS</p>
      </Link>
      <Link className='navigation__link' to='web'>
        <h2 className='navigation__title'>WEB DESIGN</h2>
        <p className='navigation__description'>VIEW PROJECTS</p>
      </Link>
      <Link className='navigation__link' to='web'>
        <h2 className='navigation__title'>WEB DESIGN</h2>
        <p className='navigation__description'>VIEW PROJECTS</p>
      </Link>
    </section>
  )
}

export default Navigation
