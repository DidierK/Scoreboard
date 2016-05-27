var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({

    team1: String,
    team2: String
});

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;
