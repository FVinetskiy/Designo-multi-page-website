import './Header.scss'
import {Logo} from '../icons/logo'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  const [opened, setOpened] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const toggleMenu = () => {
    if (width <= 768) {
      setOpened(!opened)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (width >= 768) {
      setOpened(true)
    } else {
      setOpened(false)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [width])

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__content'>
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
                  <Link onClick={toggleMenu} to='/our-company'>
                    OUR COMPANY
                  </Link>
                </li>
                <li className='navigation-mobile__item'>
                  <Link onClick={toggleMenu} to='/locations'>
                    LOCATIONS
                  </Link>
                </li>
                <li className='navigation-mobile__item'>
                  <Link onClick={toggleMenu} to='/contact'>
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Header
