const mongoose = require('mongoose');

const skuSchema = new mongoose.Schema({
  quantity: String,
  size: String,
});

const Skus = mongoose.model('Skus', skuSchema);

module.exports = Skus;