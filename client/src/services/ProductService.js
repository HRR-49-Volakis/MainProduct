import ServiceInstance from './ServiceInstance.js';
import { product_endpoint } from '../endpoint';

const ProductService = {
  getProductService: (id) => {
    return new Promise((resolve, reject) => {
      ServiceInstance.request({ url: `${product_endpoint.GET_PRODUCT}${id}`, params: null, method: 'GET' })
        .then(response => {
          if (response === undefined) {
            reject({ message: 'Connection error or configuration' });
          } else {
            resolve(response);
          }
        })
        .catch(error => {
          console.log('this error comes from (getProductService) ', error);
          reject({ message: 'error getting the product, please try again.' })
        });
    });
  }
};

export default ProductService;