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
      images: [],
      currentImage: '',
    };
    this.addCarousel = this.addCarousel.bind(this);
    this.removeCarousel = this.removeCarousel.bind(this);
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

  addCarousel(event) {
    this.setState({currentImage: event.target.src}, function() {
      let img = document.createElement('img');
      let container = document.createElement('div');
      let currentImage = this.state.currentImage;
      let carousel = document.getElementById('carousel');
      img.setAttribute('id', 'currentImage');
      img.setAttribute('src', `${currentImage}`);
      img.setAttribute('className', 'carouselImage');
      container.setAttribute('className', 'carouselImageContainer');
      container.setAttribute('id', 'carouselImageContainer');
      document.querySelector('body').classList = 'bodyCarousel';
      carousel.classList = 'carousel';
      carousel.appendChild(container);
      container.appendChild(img);
    });
  }

  removeCarousel() {
    this.setState({currentImage: ''}, function() {
      let node = document.getElementById('carouselImageContainer');
      let carousel = document.getElementById('carousel');
      carousel.removeChild(node);
      carousel.classList = '';
      document.querySelector('body').classList = '';
    });
  }

  render() {
    return (
      <div>
        <div id='carousel' onClick={this.removeCarousel} className =''></div>
        <div className='imageGrid'>
          {
            this.state.images.map((url, index) => {
              return (
                <Image key={index} addCarousel={this.addCarousel} imageUrl={url} imageAlt={this.state.productName} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;