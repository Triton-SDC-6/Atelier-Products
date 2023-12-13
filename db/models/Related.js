const mongoose = require('mongoose');

const relatedSchema = new mongoose.Schema({
  related: [],
});

const Related = mongoose.model('Related', relatedSchema);

module.exports = Related;