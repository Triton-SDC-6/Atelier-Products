require('dotenv').config();
const Products = require('./Products');
const Styles = require('./Styles');
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/sdcproducts';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

const getProducts = (count, page) => {
  return Products.find();
}
const getProductData = (product_id) => {
  return db.collection('productFeatures')
    .find({ "product_id": product_id })
}
const getStyles = (product_id) => {
  return db.collection('productsStyles')
  .find({ "product_id": product_id })
}
const getRelated = (product_id) => {
  return db.collection('related')
  .find({ "product_id": product_id })
}

module.exports = { db, getProducts, getProductData, getStyles, getRelated };