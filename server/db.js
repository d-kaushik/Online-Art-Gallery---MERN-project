const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/KMPR"; //change db name

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("Mongodb connection succeded");
    else
      console.log(
        "Error while connecting MongoDB :" + JSON.stringify(err, undefined, 2)
      );
  }
);
