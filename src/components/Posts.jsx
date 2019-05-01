import React from 'react';
import NewPost from './NewPost';
import PostList from './PostList';

const Posts = () => {
	return <div className="posts">
              <h2>My posts</h2>
              <NewPost />
              <PostList />
            </div>
}

export default Posts;