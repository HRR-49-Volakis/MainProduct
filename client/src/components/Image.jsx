import React from 'react';
import PropTypes from 'prop-types';

var Image = function(props) {
  let handleClick = (event) => {
    props.addCarousel(event);
  };
  return (
    <div className='imageContainer'>
      <img className='image' onClick={handleClick} src={props.imageUrl} alt={props.imageAlt}></img>
    </div>
  );
};

Image.propTypes = {
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  addCarousel: PropTypes.func,
};


export default Image;