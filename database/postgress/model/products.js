const postgress = require('../index');

const getProductsById = (id = 2) => {
  return postgress.client.query(`SELECT
      prd.id,
      prd.name,
      dtl.designer,
      dtl.care,
      pkg.name AS package_name,
      pkg.dimensions AS package_dimensions,
      pkg.weight AS package_weight,
      mts.name AS material_name,
      mts.description AS material_desc,
      img.url AS img_url
  FROM product AS prd
  RIGHT JOIN detail AS dtl ON dtl.id = prd.detail_id
  RIGHT JOIN package AS pkg ON pkg.id = prd.package_id
  RIGHT JOIN material AS mts ON mts.id = ANY(prd.material_ids)
  RIGHT JOIN image as img ON img.id = ANY(prd.image_ids)
  WHERE prd.id = ${id};`);
};

const createMaterial = ({ name, description }) => {
  return client.query(`INSERT INTO material (name, description) VALUES ('${name}', '${description}');`);
};
const createImage = (url) => {
  return client.query(`INSERT INTO image (url) VALUES ('${url}')`);
};
const createPackage = ({ name, description, dimensions, weight }) => {
  return client.query(`INSERT INTO package (name, description, dimensions, weight) VALUES
		('${name}', '${description}', '${dimensions}', '${weight}');`);
};
const createDetail = ({ designer, care, package_id }) => {
  return client.query(`INSERT INTO detail (designer, care, package_id) VALUES ('${designer}', '${care}', '${package_id}');`);
};
const createProduct = ({ name, detail_id, material_ids, package_id, image_ids }) => {
  return client.query(`INSERT INTO product (name, detail_id, material_ids, package_id, image_ids) VALUES
		('${name}', ${detail_id}, ARRAY[${material_ids}], '${package_id}', ARRAY[${image_ids}]);`);
};

module.exports.getProductsById = getProductsById;
module.exports.createMaterial = createMaterial;
module.exports.createPackage = createPackage;
module.exports.createDetail = createDetail;
module.exports.createProduct = createProduct;