var team1_score = $("#score1").val();
var team2_score = $("#score2").val();

$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    $("#score1").val(team1_score);
    $("#score2").val(team2_score);

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

        socket.emit('score_changed1', result);
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

        socket.emit('score_changed1', result);
        console.log(result);

    });

    $("#raiseScore2").on("submit", function(e) {
        e.preventDefault();

        team2_score ++;
        $("#score1").val(team1_score);

        var stat_game_id = $("#stat_game_id").val();
        var stat_team2_score = $("#score2").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team2_score": team2_score
        };

        socket.emit('score_changed2', result);
        console.log(result);


    });

    $("#lowerScore2").on("submit", function(e) {
        e.preventDefault();

        team2_score --;
        $("#score2").val(team2_score);

        var stat_game_id = $("#stat_game_id").val();
        var stat_team2_score = $("#score2").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team2_score": team2_score
        };

        socket.emit('score_changed2', result);
        console.log(result);

    });

    socket.on('score_changed1', function(result){
      $('#score1value').text(result.team1_score);
    });

    socket.on('score_changed2', function(result){
      $('#score2value').text(result.team2_score);
    });
});
