const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'material_12345';

const createMaterial = () => {
  const name = faker.commerce.productName();
  const description = faker.commerce.productDescription();
  return `${name}#${description}`;
};

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['name', 'description'], stream, createMaterial, lines);