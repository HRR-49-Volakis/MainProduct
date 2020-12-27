const path = require('path');
const cors = require('cors');
const newRelic = require('newrelic');
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
app.get('/loaderio-*', (req, res) => {
	res.status(200).send('loaderio-9e27104dca91a190f156d50d59241165');
});
app.use('/', routes.WebRoutes);

module.exports = app;