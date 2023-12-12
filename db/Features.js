const mongoose = require('mongoose');

const featureSchema = new mongoose.Schema({
  feature: String,
  value: String,
});

const Features = mongoose.model('Features', featureSchema);

export default Features;