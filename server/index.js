require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');
const Products = require('../db/Products');
const Styles = require('../db/Styles');
const { getProducts, getProductData, getStyles, getRelated } = require('../db');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/products', (req, res) => {
  const page = Number(req.query.page) || 1;
  const count = Number(req.query.count) || 5;

  getProducts(count, page)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).send(err.message))
})

app.get('/products/:product_id', (req, res) => {
  const product_id = Number(req.params.product_id);

  getProductData(product_id)
    .then((data) => {
      if (!product_id) {
        throw new Error('Invalid product id')
      }
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send(err.message))
})

app.get('/products/:product_id/styles', (req, res) => {
  const product_id = Number(req.params.product_id);

  getStyles(product_id)
    .then((data) => {
      if (!product_id) {
        throw new Error('Invalid product id')
      }
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send(err.message))
})

app.get('/products/:product_id/styles', (req, res) => {
  const product_id = Number(req.params.product_id);

  getRelated(product_id)
    .then((data) => {
      if (!product_id) {
        throw new Error('Invalid product id')
      }
      res.status(200).json(data)
    })
    .catch(err => res.status(404).send(err.message))
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
