const faker = require('faker');
const argv = require('yargs').argv;
const generator = require('../../generator');

const lines = argv.lines || 1000000;
const filename = argv.output || 'member_12345';
let line = 1;

const createMember = () => {
  const id = line++;
  const name = faker.name.firstName();
  const last = faker.name.lastName();
  const username = faker.internet.userName();
  const password = faker.internet.password();
  const sex = 'M';
  const email = faker.internet.email();
  const city = faker.address.city();
  const state = faker.address.state();
  const zip = faker.address.zipCode();
  const created_at = new Date().getTime();
  const updated_at = new Date().getTime();
  return `${id}#${name}#${last}#${username}#${password}#${sex}#${email}#${city}#${state}#${zip}#${created_at}#${updated_at}`;
};

const stream = generator.setStream(__dirname + `/../csv/${filename}.csv`);
generator.init(['id', 'name', 'last', 'username', 'password', 'sex', 'email', 'city', 'state', 'zip', 'created_at', 'updated_at'], stream, createMember, lines);