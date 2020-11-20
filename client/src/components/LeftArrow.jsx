import React from 'react';

let LeftArrow = function(props) {
  var clickHandler = function() {
    props.arrowClickHandler(true);
  };
  return (
    <div onClick={clickHandler} id='leftArrow'>
      <svg viewBox='-38 -31 110 110' preserveAspectRatio="xMidYMid meet"><g>	<path d="M22.4,45.2c-0.3-0.3-0.5-0.4-0.7-0.7C14.6,37.4,7.6,30.4,0.5,23.3c-0.6-0.6-0.7-1,0-1.7C6.6,15.6,12.7,9.5,18.8,3.4
		c1-1,2-2,3-3c0.5-0.5,0.8-0.5,1.3,0c0.8,0.9,1.7,1.7,2.6,2.6c0.9,0.9,0.9,0.9,0,1.8c-2.7,2.7-5.3,5.3-8,8c-3,3-5.9,5.9-8.9,8.9
		c-0.6,0.6-0.7,1,0,1.7c5.6,5.6,11.2,11.2,16.8,16.8c1,1,1,1,0,1.9c-0.8,0.8-1.7,1.7-2.5,2.5C22.9,44.8,22.7,44.9,22.4,45.2z"/></g></svg>
    </div>
  );
};

export default LeftArrow;