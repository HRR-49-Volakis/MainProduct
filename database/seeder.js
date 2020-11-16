const faker = require('faker');
const db = require('./products.js');

let images = ['https://fec-bucket.s3.us-east-2.amazonaws.com/3.jpg', 'https://fec-bucket.s3.us-east-2.amazonaws.com/1.jpeg?versionId=o3SgkIxbI_knJSYZBhQUXbMXbBxMcFwM', 'https://fec-bucket.s3.us-east-2.amazonaws.com/2.webp?versionId=FaRu0AgkJ0fpnj7GrvG8n_MfcJKvKEJ6', 'https://fec-bucket.s3.us-east-2.amazonaws.com/4.webp?versionId=ngmKVQTee1cFMLnIjgl45vj47CQL2410', 'https://fec-bucket.s3.us-east-2.amazonaws.com/5.jpg?versionId=8.mB1zX__f9P90s4pYnzoTBkbqOM_COq', 'https://fec-bucket.s3.us-east-2.amazonaws.com/6.jpg?versionId=9m39SHXytOvpWaeJzQUavKRkwb8.bV_8', 'https://fec-bucket.s3.us-east-2.amazonaws.com/7.jpg?versionId=HdkFJZ1zCalZzyIINIFCUtWaB7SRV7Kp', 'https://fec-bucket.s3.us-east-2.amazonaws.com/8.jpg?versionId=rLK_ajRyOrihgRzraxhITLp2S7L5GVfz', 'https://fec-bucket.s3.us-east-2.amazonaws.com/9.webp?versionId=pyCAZ8h3x7ATZdE7j1uvT7mCGRqtun9u'];

const seed = async function() {
  for (let i = 1; i <= 100; i++) {
    let product = {};
    product.productId = i;
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
    let entry = await db.ProductModel.create(product);
  }
};
seed();

