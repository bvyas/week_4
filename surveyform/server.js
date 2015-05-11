// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
// require body-parser
var bodyParser = require('body-parser');
// use it!

var app = express();//here u are defining the app
app.use(bodyParser.urlencoded());//remember to use app only after its defined.
// static content 
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// post route for adding a user
app.post('/users', function(req, res) {

 console.log("POST DATA", req.body);
 var data = req.body;
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('results', {users: data});
})
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
})