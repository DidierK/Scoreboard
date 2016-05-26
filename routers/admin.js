var express = require('express');
var router = express.Router();

router.get('/', function(req,res) {
  res.render('admin', { title: 'Admin' });
});

router.post('/', function(req, res) {

  var password = req.body.password;

  if(password == "test"){
    res.render('create', { title: 'Create' });
    console.log('Admin enter succesful');
  }
  else{
    console.log('Wrong password');
  }

});

module.exports = router;
