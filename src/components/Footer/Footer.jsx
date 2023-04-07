import './Footer.scss'
import {Logo} from '../icons/logo'
import {Link} from 'react-router-dom'
import {Fb} from '../icons/fb'
import {Youtobe} from '../icons/youtobe'
import {Twitter} from '../icons/twitter'
import {Pinterest} from '../icons/pinterest'
import {Instagram} from '../icons/instagram'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__head'>
          <div className='footer__wrap-logo'>
            <Logo color={'#fff'} />
          </div>
          <ul className='footer__list'>
            <li className='footer__item'>
              <Link to='/our-company'>OUR COMPANY</Link>
            </li>
            <li className='footer__item'>
              <Link to='/locations'>LOCATIONS</Link>
            </li>
            <li className='footer__item'>
              <Link to='/contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className='footer__bottom-content'>
          <div className='footer__text-item'>
            <p className='footer__title'>Designo Central Office</p>
            <p className='footer__text'>3886 Wellington Street</p>
            <p className='footer__text'>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className='footer__text-item'>
            <p className='footer__title'>Contact Us (Central Office)</p>
            <p className='footer__text'>P : +1 253-863-8967 </p>
            <p className='footer__text'>M : contact@designo.co</p>
          </div>
          <ul className='social-list'>
            <li>
              <a className='social-list__link'>
                <Fb />
              </a>
            </li>
            <li>
              <a className='social-list__link'>
                <Youtobe />
              </a>
            </li>
            <li>
              <a className='social-list__link'>
                <Twitter />
              </a>
            </li>
            <li>
              <a className='social-list__link'>
                <Pinterest />
              </a>
            </li>
            <li>
              <a className='social-list__link'>
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
