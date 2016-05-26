$(document).ready(function() {

    console.log("socket init ok");
    var socket = io.connect();
    var result = "";

    $("#raiseScore1").on("submit", function(e) {
        e.preventDefault();

        var team1_score = 1;

        //mongo schema includen
        result = {
            "team1_score": team1_score,
        };

        socket.emit("postScore", result);
        console.log(result);
    });

});
