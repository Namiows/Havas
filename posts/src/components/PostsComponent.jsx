import React from 'react';
import PropTypes from 'prop-types';

function PostsComponent ({ element }) {
  
  const { body, title } = element;

  return (
    <div className='posts-cards'>
      <h4>{ title }</h4>
      <p>{ body }</p>
    </div>
  );
}

PostsComponent.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
  }).isRequired
}

export default PostsComponent;
