const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'product_12345';

const random = () => Math.floor(Math.random() * 10000000) + 1;

const getImageIds = () => [1, 2, 3, 4, 5].map(el => random() - 1);
const getMaterialIds = () => [1, 2, 3].map(el => random() - 1);

const createProduct = () => {
  const name = faker.commerce.productName();
  return `${name}#{${getMaterialIds()}}#{${getImageIds()}}#${random()}#${random()}`;
};

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['name', 'material_ids', 'image_ids', 'detail_id', 'package_id'], stream, createProduct, lines);