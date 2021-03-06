var express = require("express");
var path = require("path");
var server = require("http").Server(app);
var app = express();
app.get('/', function(req, res) {
 res.render("index");
})
var usernames = {};
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
// tell the express app to listen on port 8000
var server=app.listen(8000, function() {
 console.log("listening on port 8000");
})
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
 	socket.on("sendchat", function (data){
    io.sockets.emit('updatechat', socket.username, data);
	});
	

  //socket
});