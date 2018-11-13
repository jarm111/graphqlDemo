var mongoose = require("mongoose");
var Messages = mongoose.model("Messages");

var resolver = {
  info() {
    return 'Tämä on QraphQL API';
  },

  allMessages() {
    return Messages.find().sort({_id: -1});
  },

  createMessage(req) {
    return Messages.create(req);
  },

  message(req) {
    return Messages.findById(req);
  }


};

module.exports = resolver;