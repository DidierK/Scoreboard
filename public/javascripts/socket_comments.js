$(document).ready(function() {

  var socket = io.connect();
  var result = "";

  $("#inputComment").on("submit", function(e) {
      e.preventDefault();

      var stat_game_id = $("#stat_game_id").val();
      var game_comment = $("#game_comment").val();


      result = {
          "stat_game_id" : stat_game_id,
          "game_comment": game_comment
      };

      socket.emit('newComment', result);
      console.log(result);
  });

  socket.on('newComment', function(result){
    $('#messages').prepend($('<li>').text(result.game_comment));
  });

});
