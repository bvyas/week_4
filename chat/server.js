var express = require("express");
var app = express();
var port = 8000;
 
app.get("/", function(req, res){
    res.send("It works!");
});

app.listen(8000, function() {
	console.log("__dirname");
})
	
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.emit('message', { message: 'welcome to the chat' });
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
