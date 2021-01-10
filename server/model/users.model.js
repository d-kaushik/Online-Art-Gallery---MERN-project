const mongoose = require("mongoose");
var user = mongoose.model(
  "User",
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    number: {
      type: String,
    },
    password: {
      type: String,
      require: true,
    },
  },
  "user"
);

module.exports = { user };
