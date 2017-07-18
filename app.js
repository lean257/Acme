const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const bodyParser = require('body-parser');
var path = require('path');
var products = require('./products');


app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});

app.use(function(req, res, next){
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('method-override')('_method'));
app.use('/', routes);
app.use(function(err, req, res, next){
  res.render('error', { error: err });
});
app.listen(port, function(){
  console.log(`listening on port ${ port }`);
});
