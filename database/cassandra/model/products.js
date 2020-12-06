const cassandra = require('../index');

const createTableProduct = () => {
  return cassandra.client.execute(`CREATE TABLE ikea.product (
    id TEXT PRIMARY KEY,
    name TEXT,
    designer TEXT,
    care TEXT,
    materials LIST<TEXT>,
    details LIST<TEXT>,
    package TEXT,
    images LIST<TEXT> );`);
};

const createProductIndex = () => {
  return cassandra.client.execute(`CREATE INDEX product_index ON ikea.product (name);`);
};

const createProduct = ({ id, name, designer, care, materials, details, package, images }) => {
  return cassandra.client.execute(`INSERT INTO ikea.product (id, name, designer, care, materials, details, package, images)
	VALUES (
		'${id}',
		'${name}',
		'${designer}',
		'${care}',
		${materials},
		${details},
		'${package}',
		${images});`);
};

const getProductId = (id) => {
  return cassandra.client.execute(`SELECT * FROM product WHERE id = '${id}' ALLOW FILTERING;`);
};

const getProductById = (id) => {
  return cassandra.client.execute(`SELECT * FROM product WHERE id = '${id}'`);
};

module.exports = {
  createTableProduct,
  createProductIndex
};

module.exports.getProductId = getProductId;
module.exports.getProductById = getProductById;


