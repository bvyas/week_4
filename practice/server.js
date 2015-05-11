var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());
app.get('/', function(request, response){
	
	response.send("<h1>Hello Express</h1> <a href='/users'>go to users</a>");
})
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get("/users", function(request, response){
	var users_array = [
		{name: "Michael", email:"micheaell@dojo.com"},
		{name: "Jay", email:"Jay@dojo.com"},
		{name: "Andre", email:"Andre@dojo.com"},
		{name: "bob", email:"bob@dojo.com"},
	];
	response.render('users', {users: users_array});
})
app.post("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    //code to add user to db goes here!
    // redirect the user back to the root route.  
    res.redirect('/')
});
app.listen(8000, function() {
	console.log("__dirname");
})
