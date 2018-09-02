//express
var express = require('express');
var app = express();
// Port
const port = process.env.PORT || 3000;
//middleware
var exphbs  = require('express-handlebars')

var mongoose = require('mongoose');

//bodyparser
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
require('./controllers/posts.js')(app);

// app.get('/', function (req, res) {
//     res.render('posts-index')
// });

app.get('/posts/new', function (req, res) {
    res.render('posts-new')
});

app.listen(port, function () {
    console.log('Website listening on port 3000!');
});

// use of promise to handle async transactions
mongoose.Promise = global.Promise
// Mongoose Connection
const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/reddit-clone";
mongoose.connect(
	mongoUri, { useNewUrlParser: true }
);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))
mongoose.set('debug', true);

// example code for a GET route with placeholder for variable 'name'
// app.get('/greetings/:name', function (req, res) {
//  var name = req.params.name;
//  res.render('greetings', {name: name});
// })
