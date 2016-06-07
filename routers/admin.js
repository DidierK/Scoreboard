var express = require('express');
var router = express.Router();
var Game = require('../models/game');
var Sequence = require('sequence');



router.get('/', function(req,res) {
  var db = req.db;
	Game.find().exec(function(err, games){
		res.render('admin', {
			"all_games" : games,
			"title": "Admin management"
		});
	});
});

router.get('/:id', function(req, res) {

	// ID VAN URL
	var game_id = req.params.id;

	// ZOEK VRAAG OP ID
	Game.findOne().where("_id", game_id).exec(function(err, game){
		if (err) {
			console.log("No discussion with given ID found.");
			} else {
				console.log("ID found!");
				res.render("management", {game : game});
				}
		});
});

// ADD NEW GAME
router.post('/', function(req, res) {

    console.log('enter');

    var db = req.db;

    var id = Sequence.next;

		//sequence uid+1
		Sequence.next+=1;
    var team1 = req.body.team1;
    var team2 = req.body.team2;
    var team1_score = 0;
    var team2_score = 0;
    var team1_fouls = 0;
    var team2_fouls = 0;
    var team1_shots = 0;
    var team2_shots = 0;

    new Game({

      "id": id,
			"team1" : team1,
			"team2" : team2,
      "team1_score" : team1_score,
      "team2_score" : team2_score,
      "team1_fouls" : team1_fouls,
      "team2_fouls" : team2_fouls,
      "team1_shots" : team1_shots,
      "team2_shots" : team2_shots

		}).save(function (err, doc) {
			if (err) {
				res.send("Database submit error");
				console.log("Database insert FAILED");
			}
			else {
				console.log("Database insert SUCCESS");
				res.redirect("/admin");
			}
		});
});


module.exports = router;
