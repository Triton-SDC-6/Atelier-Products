const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  defaultPrice: String,
  // features: [featureSchema],
  // styles: [styleSchema],
  // relatedIds: [Number],
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;