import React from 'react';
import Profile from './Profile';
import Posts from './Posts';

const Content = () => {
	return <main className="content">
            <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
            <Profile />
            <Posts />
          </main>
}

export default Content;