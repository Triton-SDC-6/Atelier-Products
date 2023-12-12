const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  feature: String,
  value: String,
});

const productsFeaturesSchema = new mongoose.Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  defaultPrice: String,
  features: [featureSchema],
});

const ProductsFeatures = mongoose.model('ProductsFeatures', productsFeaturesSchema);

module.exports = ProductsFeatures;