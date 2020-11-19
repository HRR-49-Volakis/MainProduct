import React from 'react';
import Exit from './Exit.jsx';
import PropTypes from 'prop-types';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import ScrollBar from './ScrollBar.jsx';
import CarouselImage from './CarouselImage.jsx';

var Carousel = function(props) {
  console.log(props.index, ' currentindex');
  return (
    <div>
      <div id='carousel' className='carousel'>
        <Exit removeCarousel={props.removeCarousel}/>
        <div id='carouselContainer'>
          <div id='imageAndArrowContainer'>
            {props.index > 0 ? <LeftArrow arrowClickHandler={props.arrowClickHandler}/> : ''}
            {/* <div id='carouselImageContainer' className='carouselImageContainer'>
              <img id='currentImage' className='carouselImage' src={props.currentImage}></img>
            </div> */}
            {props.images.map(function(image, index) {
              return (
                <CarouselImage key={index} zoomClickHandler={props.zoomClickHandler} isZoomed={props.isZoomed} index={index} currentImageIndex={props.index} currentImage={image}/>
              );
            })}
            {props.index < props.numberOfImages - 1 ? <RightArrow arrowClickHandler={props.arrowClickHandler}/> : ''}
          </div>
          <div id='scrollBarContainer'>
            {props.images.map(function(image, index) {
              return (
                <ScrollBar key={index} index={index} currentImageIndex={props.index} scrollBarClickHandler={props.scrollBarClickHandler}/>
              );
            })
            }
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
  images: PropTypes.array
};
