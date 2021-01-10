const express = require("express");
var routes = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

var { user } = require("../model/users.model");

routes.route("/add").post(function (req, res) {
  let user_piece = new user(req.body);

  const name = user_piece.name;
  const email = user_piece.email;
  const number = user_piece.number;
  const password = user_piece.password;

  user.findOne({ email }).then((user) => {
    if (user) return res.status(400).json({ msg: "USer already registered" });
  });

  const newUser = new user({ name, email, number, password });
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          jwt.sign(
            { id: user.id },
            "KMPR",
            { expiresIn: 3600 },
            (err, token) => {
              if (err) throw err;
              res.status(200).json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  number: user.number,
                  password: user.password,
                },
              });
            }
          );
        })
        .catch((err) => {
          res.status(400).send("adding new user failed");
        });
    });
  });
});
module.exports = routes;
