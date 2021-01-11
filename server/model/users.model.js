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
    cart: {
      type: String,
    },
    wishlist: {
      type: String,
    },
  },
  "user"
);

module.exports = { user };
