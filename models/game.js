var mongoose = require('mongoose');

var gameSchema = mongoose.Schema({

    team1: String,
    team2: String,
    team1_score: Number,
    team2_score: Number
});

var Game = mongoose.model('Game', gameSchema);

module.exports = Game;
