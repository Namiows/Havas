import React, { useState, useEffect } from 'react';
import PostsComponent from '../components/PostsComponent';
import Header from '../components/HeaderComponent';

function Home () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      });
  }, [])

  return (
    <>
      <Header title='Posts' />
      <div className="posts-list">
        {posts.map((element, index) => (
          <div key={ element.id }>
            <PostsComponent
              element={ element }
              index={ index }
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home;