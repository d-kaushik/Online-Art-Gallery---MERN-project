const mongoose = require("mongoose");
var art = mongoose.model(
  "Art",
  {
    painting_name: {
      type: String,
    },
    artist_name: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: String,
    },
    dimension: {
      type: String,
    },
    technique: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  "art"
);

module.exports = { art };