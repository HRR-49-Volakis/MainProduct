import React from 'react';
import axios from 'axios';
import Image from './Image.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedProductId: '4',
      productName: 'productName goes here',
      productId: '',
      productDetails: {
        designer: '',
        materials: [],
        care: [],
        Packaging: {
          packagingName: '',
          packagingDescription: '',
          width: '',
          height: '',
          length: '',
          weight: '',
          packages: ''
        }
      },
      images: []
    };
  }

  componentDidMount() {
    axios.get(`/api/products/${this.state.requestedProductId}`)
      .then((response) => {
        this.setState({productId: response.data.productId, productDetails: response.data.productDetails, images: response.data.images});
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div className='imageGrid'>
          {
            this.state.images.map((url, index) => {
              return (
                <Image key={index} imageUrl={url} imageAlt={this.state.productName} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;