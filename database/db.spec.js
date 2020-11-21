const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const db = require('./products.js');

it('Gets the api/products endpoint', async done =>{
  const response = await request.get('/api/main/1');
  expect(response.status).toEqual(200);
  expect(response.body.productId).toEqual('1');
  done();
});
