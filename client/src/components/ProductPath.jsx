import React from 'react';
import Arrow from './Arrow.jsx';

var ProductPath = function(props) {

  let productPath = ['Products', 'Furniture', 'Beds', 'Full, Queen and King beds'];
  return (
    <div>
      <div id='productPath'>
        {
          productPath.map(function(path, index) {
            return (
              <div className='singlePath'>
                <div key={index}>{path}</div>
                <Arrow />
              </div>
            );
          })
        }
        <div className='productName'>{props.productName}</div>
      </div>
      <div id='navDivider'>
      </div>
    </div>
  );
};

export default ProductPath;