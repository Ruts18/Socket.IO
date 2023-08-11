const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
  io.emit('message','User connected');
  socket.on('disconnect', () => {
    io.emit('message','User disconnected');
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast the message to all clients
  });
});


server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});


