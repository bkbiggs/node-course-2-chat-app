const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  // socket.emit('newMessage' , {
  //   from: 'admin',
  //   text: 'Welcome to chat app!'
  // });

  socket.emit('newMessage',
    generateMessage('admin', 'Welcome to chat app!'));

  socket.broadcast.emit('newMessage',
    generateMessage('admin', 'New user joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);

    io.emit('newMessage',
      generateMessage(message.from, message.txt));

  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Service is up on port ${port}!`);
});
