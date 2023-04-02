import './Header.scss';
import { Logo } from '../../assets/img/logo';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <button class="burger">
        <span class="burger__line"></span>
        <span class="burger__line"></span>
        <span class="burger__line"></span>
      </button>
    </header>
  );
};

export default Header;
