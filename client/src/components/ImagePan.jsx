import React from 'react';

var ImagePan = function(currentX, currentY) {
  let imageHeight = window.innerHeight / 1.35;
  let imageWidth = window.innerHeight / 1.35;
  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;
  let topMargin = (windowHeight - imageHeight) / 2;
  let leftMargin = (windowWidth - imageWidth) / 2;
  let zoom = 2;
  let yDelta = 0;
  yDelta = ((currentY - topMargin) / imageHeight) * ((imageHeight * zoom) - imageHeight);
  let xDelta = 0;
  xDelta = ((currentX - leftMargin) / imageWidth) * ((imageWidth * zoom) - imageWidth);
  console.log('yDelta: ', yDelta);
  console.log(currentY);
  // console.log('xDelta: ', xDelta);
  return {xDelta: -xDelta, yDelta: -yDelta};
};

export default ImagePan;