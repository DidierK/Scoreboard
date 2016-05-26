var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('index', { title: 'Live Scoreboard' });
});

router.post('/admin', function(req, res) {

  var password = req.body.password;

  if(password == "test"){
    res.render('admin', { title: 'Create' });
    console.log('Admin enter succesful');
  }
  else{
    console.log('Wrong password');
  }

});

module.exports = router;
