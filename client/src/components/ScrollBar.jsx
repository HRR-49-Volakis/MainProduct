import React from 'react';

let ScrollBar = function(props) {
  var clickHandler = function(event) {
    props.scrollBarClickHandler(props.index);
  };

  return (
    <div onClick={clickHandler} className='scrollContainer' >
      <div className={props.index === props.currentImageIndex ? 'scrollBar highlightedScrollBar' : 'scrollBar'}></div>
    </div>
  );
};

export default ScrollBar;