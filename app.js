var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

  //send the index.html file for all requests
  res.sendFile(__dirname + '/client.html');

});

http.listen(3001, function(){

  console.log('listening on *:3001');

});

//send data to the client every second
setInterval( function() {

  var msg = Math.random();
  io.emit('message', msg);
  console.log (msg);

}, 1000);
