const mongoose = require("mongoose");
var user = mongoose.model(
  "User",
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    number: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  "user"
);

module.exports = { user };
