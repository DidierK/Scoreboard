var team1_score = $("#score1").val();

$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    $("#score1").val(team1_score);

    $("#raiseScore1").on("submit", function(e) {
        e.preventDefault();

        team1_score ++;
        $("#score1").val(team1_score);

        var stat_game_id = $("#stat_game_id").val();
        var stat_team1_score = $("#score1").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team1_score": team1_score
        };

        socket.emit('score_changed', result);
        console.log(result);


    });

    $("#lowerScore1").on("submit", function(e) {
        e.preventDefault();

        team1_score --;
        $("#score1").val(team1_score);

        var stat_game_id = $("#stat_game_id").val();
        var stat_team1_score = $("#score1").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team1_score": team1_score
        };

        socket.emit('score_changed', result);
        console.log(result);

    });

    socket.on('score_changed', function(result){
      $('#score1value').text(result.team1_score);
    });
});
