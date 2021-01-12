  
const express = require("express");
var routes = express.Router();
const bcrypt = require("bcryptjs");

var { user } = require("../model/users.model");

routes.route("/add").post(function (req, res) {
  let user_piece = new user(req.body);

  const name = user_piece.name;
  const email = user_piece.email;
  const number = user_piece.number;
  const password = user_piece.password;

  user.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already registered" });
  });

  const newUser = new user({ name, email, number, password });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          if (err) throw err;
          res.status(200).json({ newUser });
        })
        .catch((err) => {
          res.status(400).send("adding new user failed");
        });
    });
  });
});

routes.route("/").post(function (req, res) {
  let user_piece = new user(req.body);

  const email = user_piece.email;
  const password = user_piece.password;

  user.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User is not registered" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });
      else res.status(200).json(user);
    });
  });
});

module.exports = routes;