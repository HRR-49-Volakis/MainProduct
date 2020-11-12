const express = require('express');
const app = express();
const productsDB = require('../database/products.js');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/test", async (req, res) => {
//   res.json({ message: "pass!" });
// });

app.get('/api/products', async function(req, res) {
  // let products = await productsDB.ProductModel.find();
  // res.status(200).send(products);
  // res.json({ message: 'pass!' })
  res.send({test: "test"});
  console.log('products: ', products);
});

app.post('/api/products', async function(req, res) {
  console.log('req.body: ', req.body);
  let response = await productsDB.ProductModel.create(req.body);
  res.status(200).send(response);
  console.log('response: ', response);
});

module.exports = app;