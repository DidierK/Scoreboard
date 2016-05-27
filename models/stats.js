var mongoose = require('mongoose');

var statSchema = mongoose.Schema({

    stat_game_id: Number,
    stat_team1_score: Number
});

var Stat = mongoose.model('Stat', statSchema);

module.exports = Stat;
