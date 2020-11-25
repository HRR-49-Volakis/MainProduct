import React from 'react';

var ProductIdentifier = function(props) {
  return (
    <div>
      <div id='productIdentifier'>{props.productIdentifier}</div>
      <div id='productIdentifierDivider'></div>
    </div>
  );
};

export default ProductIdentifier;