var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('scoreboard', { title: 'Live Scoreboard' });
});

module.exports = router;
