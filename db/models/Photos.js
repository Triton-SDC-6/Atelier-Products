const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  thumbnail_url: String,
  url: String,
});

const Photos = mongoose.model('Photos', photoSchema);

module.exports = Photos;