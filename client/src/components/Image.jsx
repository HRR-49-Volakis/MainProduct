import React from 'react';

var Image = function(props) {
  return(
    <div className='imageContainer'>
      <img className='image' src={props.imageUrl} alt={props.imageAlt}></img>
    </div>
  )
}

export default Image;