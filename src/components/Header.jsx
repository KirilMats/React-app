import React from 'react';
import c from './Header.module.css';

const Header = () => {
	return <header className={c.header}>
        <a className={c.logo_link} href="#">
          <img className={c.app_logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png" />
        </a>
      </header>
}

export default Header;