//express
var express = require('express');
var app = express();

//middleware
var exphbs  = require('express-handlebars')

//bodyparser
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
require('./controllers/posts.js')(app);

app.get('/', function (req, res) {
    res.render('home')
});

app.get('/posts/new', function (req, res) {
    res.render('posts-new')
});

app.listen(3000, function () {
    console.log('Website listening on port 3000!');
});

// example code for a GET route with placeholder for variable 'name'
// app.get('/greetings/:name', function (req, res) {
//  var name = req.params.name;
//  res.render('greetings', {name: name});
// })
