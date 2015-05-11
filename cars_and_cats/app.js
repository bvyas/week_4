var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
	console.log('client request URL:', request.url);
	if(request.url == '/cats') {
		fs.readFile('./views/cats.html','utf8', function(errors, contents){
			response.writeHead(200, {'Content=Type':'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/cat1.jpg'){
		fs.readFile('./images/cat1.jpg',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/jpg'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/cat2.png'){
		fs.readFile('./images/cat2.png',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/png'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/cat3.png'){
		fs.readFile('./images/cat3.png',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/png'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/cars') {
		fs.readFile('./views/cars.html','utf8', function(errors, contents){
			response.writeHead(200, {'Content=Type':'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/car1.png'){
		fs.readFile('./images/car1.png',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/png'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/car2.png'){
		fs.readFile('./images/car2.png',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/png'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/images/car3.png'){
		fs.readFile('./images/car3.png',function(errors, contents){
			response.writeHead(200, {'Content=Type':'images/png'});
			response.write(contents);
			response.end();
		});
	}
	else if(request.url == '/index') {
		fs.readFile('./views/index.html','utf8', function(errors, contents){
			response.writeHead(200, {'Content=Type':'text/html'});
			response.write(contents);
			response.end();
		});
	}
	else{
		response.writeHead(404);
		response.end('File not found!!');
	}
});
server.listen(6789);
console.log("Running in localhost at port 6789");