import React from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Grid from './Grid.jsx';
import Exit from './Exit.jsx';
import '../styles/styles.css';
import NavBar from './NavBar.jsx';
import ProductPath from './ProductPath.jsx';
import ProductIdentifier from './ProductIdentifier.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestedProductId: Math.floor(Math.random() * 100).toString(),
      productName: '',
      productId: '',
      productIdentifier: '',
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
      currentIndex: -1,
      numberOfImages: 0,
      isZoomed: false,
      xDelta: 0,
      yDelta: 0
    };
    this.addCarousel = this.addCarousel.bind(this);
    this.removeCarousel = this.removeCarousel.bind(this);
    this.arrowClickHandler = this.arrowClickHandler.bind(this);
    this.scrollBarClickHandler = this.scrollBarClickHandler.bind(this);
    this.zoomClickHandler = this.zoomClickHandler.bind(this);
    this.zoomPanHandler = this.zoomPanHandler.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/product/${this.state.requestedProductId}`)
      .then((response) => {
        this.setState({ productId: response.data.productId, productName: response.data.productName, productIdentifier: response.data.productIdentifier, productDetails: response.data.productDetails, images: response.data.images }, function() {
          this.setState({ numberOfImages: this.state.images.length });
        });
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  addCarousel(event, index) {
    this.setState({ currentImage: event.target.src, currentIndex: index }, function() {
      this.setState({ imageLayout: [<Carousel images={this.state.images} index={this.state.currentIndex} removeCarousel={this.removeCarousel} currentImage={this.state.currentImage} isZoomed={this.state.isZoomed} zoomClickHandler={this.zoomClickHandler} scrollBarClickHandler={this.scrollBarClickHandler} arrowClickHandler={this.arrowClickHandler} numberOfImages={this.state.numberOfImages} />, ...this.state.imageLayout] }, function() {
        document.querySelector('body').classList = 'bodyCarousel';
      });
    });
  }

  removeCarousel() {
    this.setState({ currentImage: '', isZoomed: false, imageLayout: [] }, function() {
      document.querySelector('body').classList = '';
    });
  }

  arrowClickHandler(isLeft) {
    let newImage = isLeft ? this.state.images[this.state.currentIndex - 1] : this.state.images[this.state.currentIndex + 1];
    let newIndex = isLeft ? this.state.currentIndex - 1 : this.state.currentIndex + 1;
    this.setState({ currentImage: newImage, currentIndex: newIndex, isZoomed: false, imageLayout: [<Carousel images={this.state.images} index={newIndex} removeCarousel={this.removeCarousel} currentImage={newImage} isZoomed={false} zoomClickHandler={this.zoomClickHandler} scrollBarClickHandler={this.scrollBarClickHandler} arrowClickHandler={this.arrowClickHandler} numberOfImages={this.state.numberOfImages} />] }, function() {
      console.log(this.state.currentIndex);
    });
    console.log(isLeft ? 'left' : 'right');
  }

  scrollBarClickHandler(index) {
    console.log('scroll index: ', index);
    if (this.state.currentIndex !== index) {
      let newImage = this.state.images[index];
      this.setState({ currentImage: newImage, currentIndex: index, isZoomed: false, imageLayout: [<Carousel images={this.state.images} index={index} removeCarousel={this.removeCarousel} currentImage={newImage} isZoomed={false} zoomClickHandler={this.zoomClickHandler} scrollBarClickHandler={this.scrollBarClickHandler} arrowClickHandler={this.arrowClickHandler} numberOfImages={this.state.numberOfImages} />] }, function() {
      });
    }
  }

  zoomClickHandler(xDelta, yDelta) {
    this.setState({ isZoomed: !this.state.isZoomed }, function() {
      if (this.state.isZoomed) {
        this.zoomPanHandler(xDelta, yDelta);
      }
    });
  }

  zoomPanHandler(xDelta, yDelta) {
    this.setState({ xDelta: xDelta, yDelta: yDelta, imageLayout: [<Carousel images={this.state.images} index={this.state.currentIndex} removeCarousel={this.removeCarousel} currentImage={this.state.currentImage} xDelta={xDelta} yDelta={yDelta} isZoomed={this.state.isZoomed} zoomPanHandler={this.zoomPanHandler} zoomClickHandler={this.zoomClickHandler} scrollBarClickHandler={this.scrollBarClickHandler} arrowClickHandler={this.arrowClickHandler} numberOfImages={this.state.numberOfImages} />] });

  }

  render() {
    return (
      <div>
        <NavBar />
        <ProductPath productName={this.state.productName} />
        <Grid addCarousel={this.addCarousel} productName={this.state.productName} images={this.state.images} />
        {this.state.imageLayout}
        <ProductIdentifier productIdentifier={this.state.productIdentifier} />
      </div>
    );
  }
}

export default App;