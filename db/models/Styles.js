const mongoose = require('mongoose');

const StyleSchema = new mongoose.Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  isDefault: Boolean,
  // photos: [photoSchema],
  // skus: { type: Map, of: skuSchema },
});

const Styles = mongoose.model('Styles', StyleSchema);

module.exports = Styles;