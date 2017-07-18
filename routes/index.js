const express = require('express');
const router = express.Router();

const products = require('../products');
//get top product
router.get('/', function(req, res, next){
  res.render( 'index', { product: products.max_rating() } );
});
//get all products
router.get('/products', function(req, res) {
  let allProducts = products.list();
  res.render( 'products', { allProducts: allProducts } );
});
//get 1 product
router.get('/products/:id', function(req, res) {
  let id = Number(req.params.id);
  let productByID = products.find( {id: id} );
  res.render( 'product', { product: productByID[0] } );
});
//add a product
router.post('/products', function(req, res) {
  var name = req.body.name;
  var text = req.body.description;
  var rating = req.body.rating;
  if (!name) {
    res.render('error', { error: "Name of the product is required"});
    return;
  } else if (!rating) {
    res.render('error', { error: "Rating is required"});
    return;
  } else if (isNaN(rating) || rating > 100) {
    res.render('error', { error: "Rating must be a number less than 100"});
    return;
  }
  products.add(name, text, rating);
  res.redirect('/products');
});
//delete a product
router.delete('/products/:id', function(req,res) {
  products.deleteProduct(req.params.id*1);
  res.redirect('/products');
})
module.exports = router;
