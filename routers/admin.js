var express = require('express');
var router = express.Router();
var Game = require('../models/game');
var Stat = require('../models/stats');
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

    new Game({

      "id": id,
			"team1" : team1,
			"team2" : team2

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

router.post('/:id', function(req, res) {
	console.log("score post received");

	var db = req.db;

	Discussion.findOne().where('', '').exec(function(err, comment){

		//form vals
		var stat_team1_score = req.body.score1;


		// new Comment({
		// 	"cmt_author": cmt_author,
		// 	"cmt_body": cmt_body,
		// 	"cmt_date": cmt_date
		// }).save(function (err, doc){
		// 	if (err) {
		// 		res.send("Comment submit to DB failed");
		// 		console.log("Comment insert FAILED");
		// 	}
		// 	else {
		// 		console.log("Comment insert SUCCESS");
		// 		res.redirect("/discussions/"+uid);
		// 	}
		// });


	});
});



module.exports = router;
