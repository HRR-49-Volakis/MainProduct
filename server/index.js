const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
// const { getInstance } = require('../database/mongo');
// const { getInstance, getProducts } = require('../database/postgress');
const { cassandra, mongo, postgress } = require('../database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/hey', (req, res, next) => {
  getProducts()
    .then(result => result.rows)
    .then(rows => console.log(rows))
    .catch(e => {
      console.log('the error is ', e);
    });
});

app.post('/api/main', async function(req, res) {
  let response = await productsDB.ProductModel.create(req.body);
  res.status(200).send(response);
});

app.use('/api/product', routes.ProductRoutes);
app.use('/api/user', routes.UserRoutes);
app.use('/db', routes.DBRoutes);
app.use('/', routes.WebRoutes);

module.exports = app;