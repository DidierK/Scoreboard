var express = require('express');
var app = express();
var server = app.listen(3000);
var bodyParser = require('body-parser');
var jade = require('jade');
var Sequence = require('sequence');
var io = require('socket.io').listen(server);
var Game = require('./models/game');

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/Scoreboard');



io.on('connection', function(socket){
  socket.on('score_changed', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Team 1 Score: ' + result.team1_score);

    var stat_game_id = result.stat_game_id;
    var team1_score = result.team1_score;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {
      console.log(docs);

    Game.update({$set: {team1_score: team1_score}}, function(err, result){
      console.log("Updated successfully");
      console.log(result);
    });
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
