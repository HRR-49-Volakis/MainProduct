import React from 'react';
import PropTypes from 'prop-types';

let Exit = function(props) {
  return (
    <div onClick={props.removeCarousel} id='exitCarousel'>
      <svg viewBox='-42.5 -42.5 125 125' preserveAspectRatio="xMidYMid meet"><g id="C7CuOH.tif_1_"><g><path d="M19.8,15.3C24.9,10.2,30,5.1,35.1,0c1.5,1.5,2.9,2.9,4.4,4.4c-5.1,5.1-10.2,10.2-15.2,15.2c5.2,5.2,10.3,10.3,15.3,15.3c-1.6,1.6-3,3-4.5,4.5c-5-5-10.2-10.2-15.2-15.2C14.7,29.3,9.6,34.4,4.5,39.5c-1.5-1.5-3-3-4.4-4.4C5.2,30,10.3,24.9,15.3,19.9C10.2,14.7,5.1,9.6,0,4.5C1.6,3,3,1.5,4.5,0C9.5,5.1,14.7,10.2,19.8,15.3z"/></g></g></svg>
    </div>
  );
};

export default Exit;

Exit.propTypes = {
  removeCarousel: PropTypes.func,
};