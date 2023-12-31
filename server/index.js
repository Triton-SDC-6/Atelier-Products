require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db');
// const Products = require('../db/Products');
// const Styles = require('../db/Styles');
const contollers = require('./controllers/products.js');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/products', contollers.getProducts)
app.get('/products/:product_id', contollers.getProductData)
app.get('/products/:product_id/styles', contollers.getStyles)
app.get('/products/:product_id/related', contollers.getRelated)
app.get('/loaderio-4144e7b9da2201ca710888fd3e7f5cf3/', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-4144e7b9da2201ca710888fd3e7f5cf3.txt'))
})

// app.get('/products', (req, res) => {
//   const page = req.query.page || 1;
//   const count = req.query.count || 5;

//   getProducts(count, page)
//     .then(data => res.status(200).json(data))
//     .catch(err => res.status(404).send(err.message, 'error fetching products'))
// })

// app.get('/products/:product_id', async (req, res) => {
//   const product_id = req.params.product_id;

//   getProductData(product_id)
//     .then((data) => {
//       // console.log('data:', data)
//       if (!data) {
//         // maybe throw
//         res.send(404)
//       } else {
//         res.status(200).json(data)
//       }
//     })
//     .catch(err => res.status(500).send(err.message))
// })

// app.get('/products/:product_id/styles', (req, res) => {
//   const product_id = req.params.product_id;

//   getStyles(product_id)
//     .then((data) => {
//       if (!data) {
//         response.send(404)
//       } else {
//         res.status(200).json(data)
//       }
//     })
//     .catch(err => res.status(500).send(err.message, 'error fetching styles'))
// })

// app.get('/products/:product_id/related', (req, res) => {
//   const product_id = req.params.product_id;

//   getRelated(product_id)
//     .then((data) => {
//       if (!data) {
//         response.send(404)
//       } else {
//         res.status(200).json(data)
//       }
//     })
//     .catch(err => res.status(500).send(err.message, 'error fetching related products'))
// })

const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Listening at http://localhost:${PORT}`);
