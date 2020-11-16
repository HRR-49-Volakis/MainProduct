import React from 'react';
import PropTypes from 'prop-types';

var Image = function(props) {
  return (
    <div className='imageContainer'>
      <img className='image' src={props.imageUrl} alt={props.imageAlt}></img>
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string
};


export default Image;