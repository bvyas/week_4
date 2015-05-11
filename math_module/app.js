var http = require('http');
var fs = require('fs');
var mathlib = require('mathlib');
server = http.createServer(function (request, response){
response.writeHead(200, {'Content-type': 'text/html'});
var s = 'add 5 and 1 ' + mathlib.add(5,1) + '<br>'
 + 'mul 5 and 2 ' + mathlib.multiply(5,2) + '<br>'
  + 'random 2 and 5 ' + mathlib.random(2,5) + '<br>'
 + 'square 16 ' + mathlib.square(16) + '<br>';
response.end(s);
console.log(var s);
});
//server.listen(6789);
//console.log("Running in localhost at port 6789");