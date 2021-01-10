const express = require("express");
var routes = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
var { user } = require("../model/users.model");

routes.route("/").post(function (req, res) {
  let user_piece = new user(req.body);

  const email = user_piece.email;
  const password = user_piece.password;

  // let e = user_piece.email;
  user.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "USer Does not registered" });

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

      jwt.sign({ id: user.id }, "KMPR", { expiresIn: 3600 }, (err, token) => {
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
      });
    });
  });
});

routes.get("/user", auth, (req, res) => {
  user
    .findById(req.user.id)
    .select(-password)
    .then((user) => res.json(user));
});
module.exports = routes;
