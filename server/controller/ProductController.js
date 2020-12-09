const { mongo, cassandra, postgress } = require('../../database');

exports.productById = (req, res, next) => {
  const productId = (req.params.productId && req.params.productId !== '') ? req.params.productId : 2;
  if (db === 'mongo') {
    mongo.ProductModel.getProductById(productId)
      .then(products => res.status(200).send(products))
      .catch(error => {
        console.log('error getting the product by id ', error);
        res.status(404).send();
      });
  } else if (db === 'postgress') {
    postgress.ProductModel.getProductsById()
      .then(products => res.status(200).send(products))
      .catch(error => {
        console.log('error getting the product by id ', error);
        res.status(404).send();
      });
  } else if (db === 'cassandra') {
    cassandra.ProductModel.getProductById(productId)
      .then(result => {
        if (result.rows.length > 0) {
          res.status(200).send(result.rows);
        } else {
          res.status(404).send({ message: 'error with products' });
        }
      })
      .catch(e => {
        console.log('error in cassandra ', e);
        res.status(404).send({ message: 'error with products' });
      });
  }
};