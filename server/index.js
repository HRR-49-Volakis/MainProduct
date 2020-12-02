const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const { getInstance } = require('../database');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
getInstance();



app.post('/api/main', async function(req, res) {
  let response = await productsDB.ProductModel.create(req.body);
  res.status(200).send(response);
});

app.use('/api', routes.ProductRoutes);
app.use('/', routes.WebRoutes);

module.exports = app;