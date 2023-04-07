import React from 'react'
import './Countries.scss'
import {Link} from 'react-router-dom'

const Countries = () => {
  return (
    <ul className='countries'>
      <li className='countries__item'>
        <img
          className='countries__img'
          src='images/illustration-canada.svg'
          alt=''
        />
        <p className='countries__text'>CANADA</p>
        <Link className='button button--light' to='/locations'>
          SEE LOCATION
        </Link>
      </li>
      <li className='countries__item'>
        <img
          className='countries__img'
          src='images/illustration-australia.svg'
          alt=''
        />
        <p className='countries__text'>AUSTRALIA</p>
        <Link className='button button--light' to='/locations'>
          SEE LOCATION
        </Link>
      </li>
      <li className='countries__item'>
        <img
          className='countries__img'
          src='images/illustration-united-kingdom.svg'
          alt=''
        />
        <p className='countries__text'>UNITED KINGDOM</p>
        <Link className='button button--light' to='/locations'>
          SEE LOCATION
        </Link>
      </li>
    </ul>
  )
}

export default Countries
