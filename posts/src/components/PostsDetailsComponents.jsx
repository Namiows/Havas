import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function PostsDetailsComponent ({element}) {
  const history = useHistory();
  const { body, title } = element;

  return (
    <>
      <h4>{ title }</h4>
      <p>{ body }</p>
      <Button 
        variant="success"
        type='button'
        onClick={() => history.push('/posts')}>
        Voltar
      </Button>
    </>
  );
}

PostsDetailsComponent.propTypes = {
  element: PropTypes.shape({
    body: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number.isRequired,
  }).isRequired
}

export default PostsDetailsComponent;
