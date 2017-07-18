const _ = require('lodash')

var products = [
  {
    id: 1,
    name: 'product1',
    description: 'product1 description',
    rating: 70
  },
  {
    id: 2,
    name: 'product2',
    description: 'product2 description',
    rating: 80
  },
  {
    id: 3,
    name: 'product3',
    description: 'product3 description',
    rating: 35
  }
];

function add (name, description, rating) {
  products.push({ name: name, description: description, rating: rating, id: products.length + 1 });
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
