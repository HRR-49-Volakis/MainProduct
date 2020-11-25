const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Products', { useNewUrlParser: true, useUnifiedTopology: true });

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

let ProductModel = mongoose.model('Products', ProductSchema);

module.exports = {ProductModel};