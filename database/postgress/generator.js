const fs = require('fs');
const faker = require('faker');
const argv = require('yargs').argv;
const photos = require('../images');

const lines = argv.lines || 1000000;
const filename = argv.output || 'products.csv';
const stream = fs.createWriteStream(filename);

const createMaterial = () => {
  const name = faker.commerce.productMaterial();
  const description = faker.commerce.productDescription();
  return `${name},${description}`;
};
const createPackage = () => {
  const name = faker.commerce.productMaterial();
  const description = faker.commerce.productDescription();
  const dimensions = `${faker.random.number()}x${faker.random.number()}x${faker.random.number()}`;
  const weight = `${faker.random.number()}`;
  return `${name},${description},${description},${dimensions},${weight}`;
};
const createDetail = () => {
  const designer = faker.name.firstName();
  const care = `${faker.lorem.words()}|${faker.lorem.words()}|${faker.lorem.words()}`;
  return `${designer},${care}`;
};
const createImages = () => {
  const images = photos.getFive();
  return images.join(',');
};
const createProduct = ({ material_ids, image_ids, detail_id, package_id }) => {
  const name = faker.commerce.productName();
  return `${name},[${material_ids}],[${image_ids}],${detail_id},${package_id}`;
};

const createMember = () => {
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
  return `${name},${last},${username},${password},${sex},${email},${city},${state},${zip},${created_at},${updated_at}`;
};

const startWriting = (writeStream, encoding, done) => {
  let index = lines;
  const writing = () => {
    let canWrite = true;
    do {
      index--;
      const newMaterials = createMaterial();
      const newImages = createImages();
      const newDetailId = createDetail();
      const newPackageId = createPackage();
      const newProduct = createProduct({ materials_id: newMaterials, image_ids: newImages, detail_id: newDetailId, package_id: newPackageId });
      const newMember = createMember();
      const record = `${newProduct},${newMember}\n`;
      if (index === 0) {
        // we are done
        writeStream.write(record, encoding, done);
      } else {
        // we are not done so don't fire callback
        writeStream.write(record, encoding);
      }
      // check if the lines are done
    } while (index > 0 && canWrite)

    if (index > 0 && !canWrite) {
      writeStream.once('drain', writing);
    }
  };
  writing();
};

//write our `header` line before we invoke the loop
stream.write(`name,material_ids,image_ids,detail_id,package_id,name,last,username,password,sex,email,city,state,zip,created_at,updated_at\n`, 'utf-8');
startWriting(stream, 'utf-8', () => {
  stream.end()
});
// https://hashinteractive.com/blog/bash-script-and-node-js-generator-for-seeding-postgres-database/