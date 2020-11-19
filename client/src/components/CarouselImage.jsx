import React from 'react';

let CarouselImage = function(props) {

  let currentImage = props.currentImageIndex === props.index;
  let difference = props.index - props.currentImageIndex;

  var clickHandler = function(event) {
    props.zoomClickHandler();
    console.log('clickevent: ', event);
  };

  var handleMouseEnter = function(event) {
    if (props.isZoomed) {
      console.log('mouseEnter event: ', event);
    }
  };

  var handleMouseMove = function(event) {
    if (props.isZoomed) {
      console.log('mouseMove event: ', event.pageX, event.pageY);
    }
  };

  return (
    <div onClick={clickHandler} className={currentImage ? 'carouselImageContainer' : 'notCurrentImageContainer'} style={currentImage ? {} : {position: 'absolute', left: difference < 0 ? difference * 2000 : '', right: difference > 0 ? difference * 2000 : ''} }>
      <img onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} className={props.isZoomed ? 'currentImage zoomedImage' : 'currentImage'} src={props.currentImage}></img>
    </div>
  );
};

export default CarouselImage;