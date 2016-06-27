$(function(){

  var socket = io();

  var denxchan = {

    jump: function(){
      $("#denxchan")
        .animate({ bottom: '20px'}, 150, 'swing')
        .animate({ bottom: '0px' }, 150, 'swing');
    },

    shake: function(){
      $("#denxchan")
        .animate({ left: '-10px' }, 60, 'swing')
        .animate({ left: '10px' }, 120, 'swing')
        .animate({ left: '0px' }, 60, 'swing');
    }

  };

  $('html').on('click touchstart', function(){
    socket.emit('jump', {});
  });

  socket.on('jump', function(message){
    denxchan.jump();
  })

  socket.on('shake', function(message){
    denxchan.shake();
  })

});
