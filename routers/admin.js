var express = require('express');
var router = express.Router();
var Game = require('../models/game');

router.get('/', function(req,res) {
  res.render('admin', { title: 'Admin' });
});

// ADD NEW GAME
router.post('/', function(req, res) {

    console.log('enter');

    var team1 = req.body.team1;
    var team2 = req.body.team2;

    new Game({


			"team1" : team1,
			"team2" : team2,
      "team1_score" : 0,
      "team2_score" : 0,
      "team1_shots" : 0,
      "team2_shots" : 0,
      "team1_fouls" : 0,
      "team2_fouls" : 0

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
