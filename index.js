// var http = require('http');
//
// var server = http.createServer(function(request, response) {
//
//   response.writeHead(200, {"Content-Type": "text/plain"});
//   response.end("Hello World Not again123!");
//
// });
//
// var port = 3000;
// server.listen(port);
//
// console.log("Server running at http://localhost:%d", port);

//
// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;
//
// app.listen(port);
//
// console.log('todo list RESTful API server started on: ' + port);


var app = require('./app');
var port = 3000;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
