const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'detail_12345';

const createDetail = () => {
  const designer = faker.name.firstName();
  const care = `${faker.lorem.words()}|${faker.lorem.words()}|${faker.lorem.words()}`;
  return `${designer}#${care}`;
};

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['designer', 'care'], stream, createDetail, lines);