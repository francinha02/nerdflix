import React from 'react'
import Logo from "../../assets/img/logo.png";
import Button from '../Button';

// import ButtonLink from './components/ButtonLink';
import './Menu.css';

function Menu() {
  return (
    <nav className='Menu'>
      <a href='/'>
        <img className="Logo" src={Logo} alt='Logo Nerdflix' />
      </a>
      <Button as='a' href='/' className='ButtonLink'>
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;