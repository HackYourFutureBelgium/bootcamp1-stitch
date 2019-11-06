import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>loading...</h2>;
  }
  return (
    <ul classname="list-group mb-8">
      {posts.map(post => (
        <li key={post.id} className="list-group-item" style={{ height: '50px', fontSize: '18px' }}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
