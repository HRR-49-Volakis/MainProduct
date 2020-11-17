import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Grid from './Grid.jsx';

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
      images: [],
      currentImage: '',
      imageLayout: [],
    };
    this.addCarousel = this.addCarousel.bind(this);
    this.removeCarousel = this.removeCarousel.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/products/${this.state.requestedProductId}`)
      .then((response) => {
        this.setState({productId: response.data.productId, productDetails: response.data.productDetails, images: response.data.images}, function() {
          this.setState({imageLayout: [<Grid addCarousel= {this.addCarousel} productName={this.state.productName} images={this.state.images}/>]});
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  addCarousel(event) {
    console.log('event: ', event.target.src);
    this.setState({currentImage: event.target.src}, function() {
      this.setState({imageLayout: [<Carousel removeCarousel={this.removeCarousel} currentImage={this.state.currentImage}/>, ...this.state.imageLayout]}, function() {
        document.querySelector('body').classList = 'bodyCarousel';
      });
    });
  }

  removeCarousel() {
    this.setState({currentImage: '', imageLayout: [<Grid addCarousel= {this.addCarousel} productName={this.state.productName} images={this.state.images}/>]}, function() {
      document.querySelector('body').classList = '';
    });
  }

  render() {
    return (
      <div>
        {this.state.imageLayout}
      </div>
    );
  }
}

export default App;