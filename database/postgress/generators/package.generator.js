const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'package_12345';

const createPackage = () => {
  const name = faker.commerce.productMaterial();
  const description = faker.commerce.productDescription();
  const dimensions = `${faker.random.number()}x${faker.random.number()}x${faker.random.number()}`;
  const weight = `${faker.random.number()}`;
  return `${name}#${description}#${dimensions}#${weight}`;
};

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['name', 'description', 'dimensions', 'weight'], stream, createPackage, lines);