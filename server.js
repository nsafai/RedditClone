var express = require('express');
var app = express();
var exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('home')
});

app.listen(3000, function () {
  console.log('Website listening on port 3000!');
});

// example code for a GET route with placeholder for variable 'name'
// app.get('/greetings/:name', function (req, res) {
//  var name = req.params.name;
//  res.render('greetings', {name: name});
// })
