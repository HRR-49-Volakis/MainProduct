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

ProductSchema.index({ productId: 1, productName: 1 });
const ProductModel = mongoose.model('Products', ProductSchema);

const insertProducts = async (products) => {
  if (!products) return products;
  console.log(products)
  return ProductModel.insertMany(products);
};

const getProductById = (productId) => ProductModel.findOne({ productId });

module.exports = {
  insertProducts,
  getProductById
};