const express = require("express");
var routes = express.Router();
var ObjectID = require("mongoose").Types.ObjectId;

var { user } = require("../model/users.model");

routes.route("/").get(function (req, res) {
  user.find(function (err, user_piece) {
    if (err) {
      console.log(err);
    } else {
      res.json(user_piece);
      
    }
  });
});
routes.route("/add").post(function (req, res) {
  let user_piece = new user(req.body);
  user_piece
    .save()
    .then((user_piece) => {
      res.status(200).json({ user_piece: "user added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new user failed");
    });
});
routes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  user.findById(id, function (err, user_piece) {
    res.json(user_piece);
  });
});
routes.route("/delete/:id").delete(function (req, res) {
  user
    .findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("user deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

routes.route("/update/:id").post(function (req, res) {
  user.findById(req.params.id, function (err, user_piece) {
    if (!user_piece) res.status(404).send("user is not found");
    else user_piece.name = req.body.name;
    user_piece.email = req.body.email;
    user_piece.number = req.body.number;
    user_piece.password = req.body.password;
    user_piece
      .save()
      .then((user_piece) => {
        res.json("user updated!");
      })
      .catch((err) => {
        res.status(400).send("user update not possible");
      });
  });
});
module.exports = routes;
