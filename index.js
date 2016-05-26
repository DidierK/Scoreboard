var express = require('express');
var bodyParser = require('body-parser');
var jade = require('jade');

var app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use('/',require('./routers/index'));
app.use('/scoreboard',require('./routers/scoreboard'));
app.use('/admin',require('./routers/admin'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
