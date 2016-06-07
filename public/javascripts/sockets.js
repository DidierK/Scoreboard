var team1_score = $("#score1").val();
var team2_score = $("#score2").val();
var team1_fouls = $("#fouls1").val();
var team2_fouls = $("#fouls2").val();

$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    $("#score1").val(team1_score);
    $("#score2").val(team2_score);
    $("#fouls1").val(team1_fouls);
    $("#fouls2").val(team2_fouls);

    /* ---

    RAISE SCORE 1

    --- */

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

    /* ---

    LOWER SCORE 1

    --- */

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

    /* ---

    RAISE SCORE 2

    --- */

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

    /* ---

    LOWER SCORE 2

    --- */

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

    /* ---

    RAISE FOULS 1

    --- */

    $("#raiseFouls1").on("submit", function(e) {

        e.preventDefault();

        team1_fouls ++;
        $("#fouls1").val(team1_fouls);

        var stat_game_id = $("#stat_game_id").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team1_fouls": team1_fouls
        };

        socket.emit('fouls_changed1', result);
        console.log(result);


    });

    /* ---

    LOWER FOULS 1

    --- */

    $("#lowerFouls1").on("submit", function(e) {
        e.preventDefault();
        console.log("test");
        team1_fouls --;
        $("#fouls1").val(team1_fouls);

        var stat_game_id = $("#stat_game_id").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team1_fouls": team1_fouls
        };

        socket.emit('fouls_changed1', result);
        console.log(result);

    });

    /* ---

    RAISE FOULS 2

    --- */

    $("#raiseFouls2").on("submit", function(e) {
        e.preventDefault();

        team2_fouls ++;
        $("#fouls2").val(team2_fouls);

        var stat_game_id = $("#stat_game_id").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team2_fouls": team2_fouls
        };

        socket.emit('fouls_changed2', result);
        console.log(result);


    });

    /* ---

    LOWER FOULS 2

    --- */

    $("#lowerFouls2").on("submit", function(e) {
        e.preventDefault();

        team2_fouls --;
        $("#fouls2").val(team2_fouls);

        var stat_game_id = $("#stat_game_id").val();

        result = {
            "stat_game_id" : stat_game_id,
            "team2_fouls": team2_fouls
        };

        socket.emit('fouls_changed2', result);
        console.log(result);

    });

    socket.on('score_changed1', function(result){
      $('#score1value').text(result.team1_score);
    });

    socket.on('score_changed2', function(result){
      $('#score2value').text(result.team2_score);
    });

    socket.on('fouls_changed1', function(result){
      $('#fouls1value').text(result.team1_fouls);
    });

    socket.on('fouls_changed2', function(result){
      $('#fouls2value').text(result.team2_fouls);
    });
});
