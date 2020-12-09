const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/product', routes.ProductRoutes);
app.use('/api/user', routes.UserRoutes);
app.use('/db', routes.DBRoutes);
app.use('/', routes.WebRoutes);

module.exports = app;