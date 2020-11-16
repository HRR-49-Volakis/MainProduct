const app = require('../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
const db = require('./products.js');

// jest.setTimeout(3000);

let testEntry = {
  'productId': '2',
  'productDetails': {
    'designer': 'Jacob',
    'materials': [{
      'materialName': 'tweed',
      'materialDescription': 'rough'
    }],
    'care': ['wash', 'dry', 'fold'],
    'Packaging': {
      'packagingName': 'bag',
      'packagingDescription': 'small',
      'width': '1 inch',
      'height': '1 inch',
      'length': '1 inch',
      'weight': '1 inch',
      'packages': '2'
    }
  },
  'images': ['https://cdn.shopify.com/s/files/1/0951/7126/products/linen_white_core-sheet-set_silo_1200x.jpg?v=1589917164","https://cdn.shopify.com/s/files/1/0951/7126/products/linen_white_detail_1200x.jpg?v=1589917164']
};

it('Gets the api/products endpoint', async done =>{
  // Sends Get request to /test endpoint

  // Drop the db to start fresh? I can't figure out the node code for this. Have to drop database in mongo shell before running test.
  // const drop = await db.ProductModel.drop();

  // Add one entry
  let entry = await db.ProductModel.create(testEntry);

  // Check db
  const result = request.get('/api/products');
  expect(result).resolves.toEqual(testEntry);
  done();
});
