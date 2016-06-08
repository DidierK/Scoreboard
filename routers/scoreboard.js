var express = require('express');
var router = express.Router();
var Game = require('../models/game');
var Comment = require('../models/comment');

router.get('/', function(req,res) {
  var db = req.db;
	Game.find().exec(function(err, games){
		res.render('scoreboard', {
			"all_games" : games,
			"title": "Scoreboard"
		});
	});
});

router.get('/:id', function(req, res, next) {

	// ID VAN URL
	var game_id = req.params.id;

	// ZOEK GAME OP ID
	Game.findOne().where("_id", game_id).exec(function(err, game){
		if (err) {
			console.log("No discussion with given ID found.");
			} else {
        console.log("Game Id found");
        Comment.find().sort({ game_comment: 'desc' }).where("stat_game_id", game_id).exec(function(err, comments){
            console.log(comments);
                res.render('scoreboard_detail', {
                "all_comments" : comments,
                game : game
              });
          });
				}
		});

});

module.exports = router;
