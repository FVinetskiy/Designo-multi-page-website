import React from 'react'
import './Navigation.scss'
import {Link} from 'react-router-dom'

const Navigation = ({dataNavigate, structure}) => {
  const listItems = dataNavigate.map((item) => (
    <Link
      to={item.path}
      className={`navigation__link navigation__link--${item.style}`}
      key={item.id}>
      <h2 className='navigation__title'>{item.title}</h2>
      <p className='navigation__description'>VIEW PROJECTS</p>
    </Link>
  ))

  return (
    <section className={!structure ? 'navigation' : `navigation ${structure}`}>
      {listItems}
    </section>
  )
}

export default Navigation
