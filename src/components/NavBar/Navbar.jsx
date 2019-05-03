import React from 'react';
import c from './NavBar.module.css';
console.log(c);

const Navbar = () => {
	return <nav className={c.nav}>
        <div className={`${c.item} ${c.active}`}>
          <a href="#">Profile</a>
        </div>
        <div className={`${c.item} ${c.active}`}>
          <a href="#">Messages</a>
        </div>
        <div className={`${c.item} ${c.active}`}>
          <a href="#">Feed</a>
        </div>
        <div className={`${c.item} ${c.active}`}>
          <a href="#">Playlist</a>
        </div>
        <div className={`${c.item} ${c.active}`}>
          <a href="#">Settings</a>
        </div>
      </nav>
}

export default Navbar;