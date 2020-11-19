import React from 'react';
import Image from './Image.jsx';
import PropTypes from 'prop-types';

var Grid = function(props) {
  return (
    <div className='imageGrid'>
      {
        props.images.map((url, index) => {
          console.log(url);
          return (
            <Image key={index} index={index} addCarousel={props.addCarousel} imageUrl={url} imageAlt={props.productName} />
          );
        })
      }
    </div>
  );
};

export default Grid;

Image.propTypes = {
  addCarousel: PropTypes.func,
  productName: PropTypes.string,
  images: PropTypes.array,
};