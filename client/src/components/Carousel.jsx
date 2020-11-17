import React from 'react';
import Exit from './Exit.jsx';
import PropTypes from 'prop-types';

var Carousel = function(props) {
  console.log(props.currentImage, ' currentImage');
  return (
    <div id='carousel' onClick={props.removeCarousel} className='carousel'>
      <div id='carouselImageContainer' className='carouselImageContainer'>
        <img id='currentImage' className='carouselImage' src={props.currentImage}></img>
      </div>
      <Exit />
    </div>

  );
};

export default Carousel;

Carousel.propTypes = {
  removeCarousel: PropTypes.func,
  currentImage: PropTypes.string,
};
