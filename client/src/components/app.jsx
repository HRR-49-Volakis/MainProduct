import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedProductId: '4',
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
    }
  }

  componentDidMount() {
    axios.get(`/api/products/${this.state.requestedProductId}`)
      .then((response) => {
        this.setState({productId: response.data.productId})
        this.setState({productDetails: response.data.productDetails})
        this.setState({images: response.data.images})
      })
      .catch(function(err){
        console.log(err);
      });
  }

  render() {
    return(
      <div>
        <img src={this.state.images[0]}>
        </img>
        {this.state.images}
      </div>

    )
  }
}

export default App;