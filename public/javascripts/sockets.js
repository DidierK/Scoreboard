$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    var team1_score = 0;

    $("#raiseScore1").on("submit", function(e) {
        e.preventDefault();

        team1_score++;

        result = {
            "team1_score": team1_score
        };

        socket.emit(result);
        console.log(result);

        $("#score1").val(team1_score);

        
    });
});
