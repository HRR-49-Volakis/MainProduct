import React from 'react';
import Exit from './Exit.jsx';
import PropTypes from 'prop-types';

var Carousel = function(props) {
  console.log(props.currentImage, ' currentImage');
  return (
    <div>
      <div id='carousel' className='carousel'>
        <Exit removeCarousel={props.removeCarousel}/>
        <div id='carouselContainer'>
          <div id='carouselImageContainer' className='carouselImageContainer'>
            <img id='currentImage' className='carouselImage' src={props.currentImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

Carousel.propTypes = {
  removeCarousel: PropTypes.func,
  currentImage: PropTypes.string,
};
