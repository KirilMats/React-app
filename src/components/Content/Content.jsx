import React from 'react';
import Profile from './Profile/Profile';
import c from './Content.module.css';

const Content = () => {
	return <main className={c.content}>
            <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
              <Profile />
          </main>
}

export default Content;