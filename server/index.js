require("./db");
var artRoutes = require("./routes/arts");
var userRoutes = require("./routes/users");
var feedbackRoute = require("./routes/feedback");

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});

app.use("/artRoutes", artRoutes);
app.use("/userRoutes", userRoutes);
app.use("/feedbackRoutes", feedbackRoute);
