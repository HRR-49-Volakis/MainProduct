const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');
const photos = require('../../images');

const lines = argv.lines || 1000000;
const filename = argv.output || 'product_12345';

const random = () => Math.floor(Math.random() * 10000000) + 1;
let line = 1;

const createMaterial = () => {
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  return `${name}|${description}`;
};

const createDetail = () => {
  const designer = faker.name.firstName();
  const care = `${faker.lorem.words()}|${faker.lorem.words()}|${faker.lorem.words()}`;
  return `${designer}|${care}`;
};

const createPackage = () => {
  const name = faker.commerce.productMaterial();
  const description = faker.commerce.productDescription();
  const dimensions = `${faker.random.number()}x${faker.random.number()}x${faker.random.number()}`;
  const weight = `${faker.random.number()}`;
  return `${name}|${description}|${dimensions}|${weight}`;
};

const createProduct = () => {
  const id = line++;
  const name = faker.commerce.productName();
  const designer = faker.name.firstName();
  const care = `${faker.lorem.words()}|${faker.lorem.words()}|${faker.lorem.words()}`;
  const materials = [1, 2, 3].map(el => createMaterial());
  const package = createPackage();
  const images = photos.getFive();
  return `${id}#${name}#${designer}#${care}#[${materials}]#${package}#[${images}]`;
};



const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['id', 'name', 'designer', 'care', 'materials', 'package', 'images'], stream, createProduct, lines);