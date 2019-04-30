import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="content">
        <img src="https://luminous-landscape.com/wp-content/uploads/2012/11/LL_Landscape_11-12-12.jpg" />
        <Profile />
        <div className="posts">
          <h2>My posts</h2>
          <div className="new-post">
            <form action="" >
              <textarea placeholder="Have a news?"></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className="post-list">
            <div className="post">
              <img className="user-photo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB9CptkJ7bO74wyIwX7Bpt7VsFdoblMfSJJty46zy3lfkIkVKs" />
              <div className="post-text">Meow! Where's my Whiskas!?</div>
            </div>
            <div className="post">
              <img className="user-photo" src="data:image/jpeg;base64,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" />
              <div className="post-text">Woof! Where's my bone!?</div>
            </div>
            <div></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
