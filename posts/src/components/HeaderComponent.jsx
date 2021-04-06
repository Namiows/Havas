import React from 'react';
import PropTypes from 'prop-types';

function HeaderComponent ({ title }) {
  return (
    <div className='header'>
      <h1>{ title }</h1>
    </div>
  )
}

HeaderComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderComponent;