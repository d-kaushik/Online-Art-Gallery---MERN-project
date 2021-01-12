const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/KMPR"; //change db name
var MONOGODB_URL =
  "mongodb+srv://KMPR:MERNProject@cluster0.rizmn.mongodb.net/OnlineArtGallery?retryWrites=true&w=majority";
mongoose.connect(
  MONOGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeded");
    else
      console.log(
        "Error while connecting MongoDB :" + JSON.stringify(err, undefined, 2)
      );
  }
);