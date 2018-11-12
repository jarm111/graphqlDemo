var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    msg:		String,
    user:       String
});
module.exports = mongoose.model('Messages', MessageSchema, 'messages');