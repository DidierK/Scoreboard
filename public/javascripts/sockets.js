$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    $("#raiseScore1").on("submit", function(e) {
        e.preventDefault();

        team1_score = 2;
        $("#score1").val(team1_score);

        var stat_game_id = $("#stat_game_id").val();
        var team1_score = $("#score1").val();

        result = {
            "#stat_game_id" : stat_game_id,
            "team1_score": team1_score
        };

        socket.emit(result);
        console.log(result);
    });
});
