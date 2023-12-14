const Products = require('../../db/models/Products');
const ProductsFeatures = require('../../db/models/ProductsFeatures');
const Styles = require('../../db/models/Styles');
const Related = require('../../db/models/Related');

const getProducts = (count, page) => {
  return Products.find().sort({id: 1}).limit(count)
}

const getProductData = (req, res) => {
  const product_id = req.params.product_id;
  return ProductsFeatures.findOne({ id: product_id }, {_id: 0})
    .then((data) => {
      if (!data) {
        // maybe throw
        res.send(404)
      } else {
        res.status(200).json(data)
      }
    })
    .catch(err => res.status(500).send(err.message))
}

const getStyles = (product_id) => {
  return Styles.find({ id: product_id })
}
const getRelated = (product_id) => {
  return Related.find({ id: product_id })
}

// const getLoader = () => {
//   return
// }

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

module.exports = { getProducts, getProductData, getStyles, getRelated };