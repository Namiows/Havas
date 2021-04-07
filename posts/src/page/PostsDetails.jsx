import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import Header from '../components/HeaderComponent';
import PostsDetailsComponents from '../components/PostsDetailsComponents';

function PostsDetailsComponent() {
  const { id } = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        if(!data) console.error('message: Não tem dados')
        setDetails(data);
      });
  }, [])
  
  return (
    <>
      <Header title={`Post num ${id}`} />
      <PostsDetailsComponents element={ details } />
    </>
  );
}

export default PostsDetailsComponent;