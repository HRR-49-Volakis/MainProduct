const faker = require('faker');
const { getInstance, shutDownInstance } = require('./index');
const { ProductsModel } = require('../database/model');

let images = ['https://fec-bucket.s3.us-east-2.amazonaws.com/ikea1.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea2.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/2.webp?versionId=FaRu0AgkJ0fpnj7GrvG8n_MfcJKvKEJ6', 'https://fec-bucket.s3.us-east-2.amazonaws.com/4.webp?versionId=ngmKVQTee1cFMLnIjgl45vj47CQL2410', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea5.jpeg', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea6.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea7.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea8.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea10.webp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/ikea9.webp'];

let names = ['vecka', 'idag', 'imorgon', 'Hornavan', 'Virihaure', 'Siljan', 'Torneträsk', 'Kallsjön', 'Djungelskog', 'Mälaren', 'Tjörn', 'Öland', 'Gräsö'];


const seed = function() {
  getInstance();
  const products = [];
  for (let i = 1; i <= 100; i++) {
    let productIdentifier = '';
    let first = Math.floor(Math.random() * 1000);
    first = first.toString();
    while (first.length < 3) { first = '0' + first; }
    let second = Math.floor(Math.random() * 1000);
    second = second.toString();
    while (second.length < 3) { second = '0' + second; }
    productIdentifier = first + '.' + second + '.' + i;
    let product = {};
    product.productId = i;
    product.productIdentifier = productIdentifier;
    product.productName = names[Math.floor(Math.random() * (names.length - 1))].toUpperCase();
    product.productDetails = {};
    product.productDetails.designer = faker.name.findName();
    product.productDetails.materials = [];
    product.productDetails.materials[0] = {};
    product.productDetails.materials[0].materialName = faker.commerce.productMaterial();
    product.productDetails.materials[0].materialDescription = faker.commerce.productDescription();
    product.productDetails.materials[1] = {};
    product.productDetails.materials[1].materialName = faker.commerce.productMaterial();
    product.productDetails.materials[1].materialDescription = faker.commerce.productDescription();
    product.productDetails.materials[2] = {};
    product.productDetails.materials[2].materialName = faker.commerce.productMaterial();
    product.productDetails.materials[2].materialDescription = faker.commerce.productDescription();
    product.productDetails.care = [];
    product.productDetails.care[0] = faker.lorem.words();
    product.productDetails.care[1] = faker.lorem.words();
    product.productDetails.care[2] = faker.lorem.words();
    product.productDetails.Packaging = {};
    product.productDetails.Packaging.packagingName = faker.commerce.productMaterial();
    product.productDetails.Packaging.packagingDescription = faker.commerce.productDescription();
    product.productDetails.Packaging.width = faker.random.number() + ' inches';
    product.productDetails.Packaging.height = faker.random.number() + ' inches';
    product.productDetails.Packaging.length = faker.random.number() + ' inches';
    product.productDetails.Packaging.width = faker.random.number() + ' inches';
    product.productDetails.Packaging.packages = faker.random.number();
    product.images = [];
    product.images[0] = images[Math.floor(Math.random() * (images.length - 1))];
    product.images[1] = images[Math.floor(Math.random() * (images.length - 1))];
    product.images[2] = images[Math.floor(Math.random() * (images.length - 1))];
    product.images[3] = images[Math.floor(Math.random() * (images.length - 1))];
    product.images[4] = images[Math.floor(Math.random() * (images.length - 1))];
    products.push(product);
  }
  ProductsModel.insertProducts(products)
    .then(result => {
      shutDownInstance();
    })
    .catch(e => console.log('there was an error ', e));

};
seed();

