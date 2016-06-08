var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({

    stat_game_id: String,
    game_comment: String,

});

var Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
