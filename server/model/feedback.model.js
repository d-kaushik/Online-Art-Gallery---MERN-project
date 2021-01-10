const mongoose = require("mongoose");
var feedback = mongoose.model(
  "message",
  {
    name: {
      type: String,
    },
    mail: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  "message"
);

module.exports = { feedback };