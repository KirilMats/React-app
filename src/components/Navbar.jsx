import React from 'react';
import c from './NavBar.module.css';

const Navbar = () => {
	return <nav className={c.nav}>
        <div className={c.item}>
          <a href="#">Profile</a>
        </div>
        <div className={c.item}>
          <a href="#">Messages</a>
        </div>
        <div className={c.item}>
          <a href="#">Feed</a>
        </div>
        <div className={c.item}>
          <a href="#">Playlist</a>
        </div>
        <div className={c.item}>
          <a href="#">Settings</a>
        </div>
      </nav>
}

export default Navbar;