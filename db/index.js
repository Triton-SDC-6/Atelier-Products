require('dotenv').config();
const Products = require('./Products');
const ProductsFeatures = require('./ProductsFeatures');
const Styles = require('./Styles');
const Related = require('./Related');
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/atelier';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

const getProducts = (count, page) => {
  return Products.find().sort({id: 1}).limit(count)
}
const getProductData = (product_id) => {
  return ProductsFeatures.find({ id: product_id })
}
const getStyles = (product_id) => {
  return Styles.find({ id: product_id })
}
const getRelated = (product_id) => {
  return Related.find({ id: product_id })
}

module.exports = { db, getProducts, getProductData, getStyles, getRelated };