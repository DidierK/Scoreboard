var express = require('express');
var app = express();
var server = app.listen(3000);
var bodyParser = require('body-parser');
var jade = require('jade');
var io = require('socket.io').listen(server);

var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
// Connection
mongoose.connect('mongodb://localhost/Scoreboard');

// view engine setup
app.set('view engine', 'jade');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/',require('./routers/index'));
app.use('/scoreboard',require('./routers/scoreboard'));
app.use('/admin',require('./routers/admin'));
