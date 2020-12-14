import React from 'react';
import ImagePan from './ImagePan.jsx';

let CarouselImage = function(props) {

  let currentImage = props.currentImageIndex === props.index;
  let difference = props.index - props.currentImageIndex;

  var clickHandler = function(event) {
    let { xDelta, yDelta } = ImagePan(event.clientX, event.clientY);
    props.zoomClickHandler(xDelta, yDelta);
  };

  var handleMouseMove = function(event) {
    if (props.isZoomed) {
      let { xDelta, yDelta } = ImagePan(event.clientX, event.clientY);
      props.zoomPanHandler(xDelta, yDelta);
    }
  };

  return (
    <div onClick={clickHandler} className={currentImage ? 'carouselImageContainer' : 'notCurrentImageContainer'} style={currentImage ? {} : { position: 'absolute', left: difference < 0 ? difference * 2000 : '', right: difference > 0 ? difference * 2000 : '' }}>
      <img onMouseMove={handleMouseMove} className={props.isZoomed && currentImage ? 'currentImage zoomedImage' : 'currentImage'} style={props.isZoomed ? { transform: `translate(${props.xDelta}px, ${props.yDelta}px)` } : {}} src={props.currentImage}></img>
    </div>
  );
};

export default CarouselImage;