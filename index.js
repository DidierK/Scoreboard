var express = require('express');
var app = express();
var server = app.listen(3000);
var bodyParser = require('body-parser');
var jade = require('jade');
var Sequence = require('sequence');
var io = require('socket.io').listen(server);

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Scoreboard');

var statSchema = mongoose.Schema({

    stat_game_id: String,
    stat_team1_score: Number
});

var Stat = mongoose.model('Stat', statSchema);


io.on('connection', function(socket){
  socket.on('score_changed', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Team 1 Score: ' + result.team1_score);

    var stat_game_id = result.stat_game_id;
    var team1_score = result.team1_score;

    Stat.find().where("stat_game_id", stat_game_id).exec(function(err, stat){
  		if (err) {
        console.log("No game ID found!");
        /*var newScore = new Stat({
          "stat_game_id": stat_game_id,
          "stat_team1_score": team1_score});

          newScore.save(function(err,resp) {
            if(err) {
                console.log(err);

            } else {
                console.log("score insert succes");
            }
        });*/

  			} else {
  				console.log("Game ID found!");

          /*var updateScore = new Stat({
            "stat_game_id": stat_game_id,
            "stat_team1_score": team1_score});

            updateScore.update(function(err,resp) {
              if(err) {
                  console.log(err);

              } else {
                  console.log("score insert succes");
              }
          });*/
  				}
  		});
  });
});



app.use(express.static(__dirname + '/public'));
// Connection


// view engine setup
app.set('view engine', 'jade');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/',require('./routers/index'));
app.use('/scoreboard',require('./routers/scoreboard'));
app.use('/admin',require('./routers/admin'));
