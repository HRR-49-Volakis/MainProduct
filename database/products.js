const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  productId: { type: String, unique: true },
  productIdentifier: String,
  productName: String,
  productDetails: {
    designer: String,
    materials: [{
      materialName: String,
      materialDescription: String
    }],
    care: [String],
    Packaging: {
      packagingName: String,
      packagingDescription: String,
      width: String,
      height: String,
      length: String,
      weight: String,
      packages: String
    }
  },
  images: [String]
});

const getProductById = (productId) => ProductModel.findOne({ productId });

let ProductModel = mongoose.model('Products', ProductSchema);

module.exports = { getProductById };