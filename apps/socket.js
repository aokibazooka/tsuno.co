module.exports = (io)=>{

  io.on('connection', function (socket) {
    io.sockets.emit('shake', {});
    socket.on('jump', data=>{
      io.sockets.emit('jump', data);
    });
  });

}
