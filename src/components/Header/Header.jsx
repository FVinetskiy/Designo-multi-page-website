import './Header.scss'
import {Logo} from '../icons/logo'
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  const [opened, setOpened] = React.useState(false)
  const sortRef = React.useRef(null)

  const toggleMenu = () => {
    setOpened(!opened)
  }

  return (
    <header className='header'>
      <Link to='/'>
        <Logo color={'#333136'} />
      </Link>
      <button
        onClick={toggleMenu}
        className={opened ? 'menu-toggle is-active' : 'menu-toggle'}>
        Menu
      </button>
      {opened ? (
        <nav onClick={toggleMenu} className='navigation-mobile'>
          <ul
            onClick={(e) => {
              e.stopPropagation()
            }}
            className='navigation-mobile__list'>
            <li className='navigation-mobile__item'>
              <Link to='/our-company'>OUR COMPANY</Link>
            </li>
            <li className='navigation-mobile__item'>
              <Link to='/locations'>LOCATIONS</Link>
            </li>
            <li className='navigation-mobile__item'>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}

export default Header
