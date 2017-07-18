const _ = require('lodash')

var products = [];

const name = ['product1', 'product2', 'product3']
const description = ['product1 description', 'product2 description', 'product3 description']
const rating = [20, 45, 67]

function add (name, description, rating) {
  products.push({ name: name, description: description, rating: rating, id: products.length });
  return _.clone(products[products.length - 1]);
}

function list () {
  return _.cloneDeep(products);
}

function find (properties) {
  return _.cloneDeep(_.filter(products, properties));
}

function max_rating() {
  return max = products.reduce(function(a,b) {
    return a.rating > b.rating ? a : b
  })
}

function deleteProduct(id) {
  products = products.filter(function(product){
    return product.id !== id;
  });
}

module.exports = { add: add, list: list, find: find, max_rating: max_rating, deleteProduct: deleteProduct };

for (let i = 0; i < 3; i++) {
  module.exports.add(name[i], description[i], rating[i]);
}
