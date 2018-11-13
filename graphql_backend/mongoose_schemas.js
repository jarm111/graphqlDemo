var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    msg:		String,
    user:       { type: String, default: "Anon"},
    dateTime:	{ type: Date, default: Date.now },
    title:		{ type: String, default: ""}
});
module.exports = mongoose.model('Messages', MessageSchema, 'messages');