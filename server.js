var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
users = [];
connections = [];

server.listen(process.env.port || 3000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('connected: %s sockets connected', connections.lenght)

  //Disconnect
  connections.splice(connections.indexOf(sockets), 1);
  console.log('Disconnected: %s sockets connected', connections.lenght);
});
