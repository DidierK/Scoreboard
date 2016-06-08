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
  socket.on('score_changed1', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Team 1 Score: ' + result.team1_score);

    var stat_game_id = result.stat_game_id;
    var team1_score = result.team1_score;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team1_score: team1_score}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('score_changed1', result);

    });
  });
  socket.on('score_changed2', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Team 2 Score: ' + result.team2_score);

    var stat_game_id = result.stat_game_id;
    var team2_score = result.team2_score;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team2_score: team2_score}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('score_changed2', result);

    });
  });
  socket.on('fouls_changed1', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Fouls 1 : ' + result.team1_fouls);

    var stat_game_id = result.stat_game_id;
    var team1_fouls = result.team1_fouls;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team1_fouls: team1_fouls}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('fouls_changed1', result);

    });
  });

  socket.on('fouls_changed2', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Fouls 2 : ' + result.team2_fouls);

    var stat_game_id = result.stat_game_id;
    var team2_fouls = result.team2_fouls;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team2_fouls: team2_fouls}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('fouls_changed2', result);

    });
  });

  socket.on('shots_changed1', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Shots 1 : ' + result.team1_shots);

    var stat_game_id = result.stat_game_id;
    var team1_shots = result.team1_shots;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team1_shots: team1_shots}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('shots_changed1', result);

    });
  });

  socket.on('shots_changed2', function(result){
    console.log('Game ID: ' + result.stat_game_id);
    console.log('Shots 2 : ' + result.team2_shots);

    var stat_game_id = result.stat_game_id;
    var team2_shots = result.team2_shots;

    Game.find({"_id" : result.stat_game_id}, function (err, docs) {

    Game.update({$set: {team2_shots: team2_shots}}, function(err, result){
      console.log("Updated successfully");

    });
    io.emit('shots_changed2', result);

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
