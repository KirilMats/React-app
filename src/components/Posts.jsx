import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';
import c from './Posts.module.css';

const Posts = () => {
	return <div className={c.posts}>
              <h2>My posts</h2>
              <NewPost />
              <PostList />
            </div>
}

export default Posts;