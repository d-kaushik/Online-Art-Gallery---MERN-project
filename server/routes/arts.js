const express = require("express");
var routes = express.Router();
var ObjectID = require("mongoose").Types.ObjectId;
var { art } = require("../model/art.model");

routes.route("/").get(function (req, res) {
  art.find(function (err, art_piece) {
    if (err) {
      console.log(err);
    } else {
      res.json(art_piece);
    }
  });
});
routes.route("/add").post(function (req, res) {
  let art_piece = new art(req.body);
  art_piece
    .save()
    .then((art_piece) => {
      res.status(200).json({ art_piece });
    })
    .catch((err) => {
      res.status(400).send("adding new Art failed");
    });
});
routes.route("/:id").get(function (req, res) {
  let id = req.params.id;
  art.findById(id, function (err, art_piece) {
    res.json(art_piece);
  });
});
routes.route("/delete/:id").delete(function (req, res) {
  art
    .findByIdAndDelete(req.params.id)
    .then((exercise) => res.json("Art deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

routes.route("/update/:id").post(function (req, res) {
  art.findById(req.params.id, function (err, art_piece) {
    if (!art_piece) res.status(404).send("Art is not found");
    else art_piece.painting_name = req.body.painting_name;
    art_piece.artist_name = req.body.artist_name;
    art_piece.category = req.body.category;
    art_piece.price = req.body.price;
    art_piece.dimension = req.body.dimension;
    art_piece.technique = req.body.technique;
    art_piece.description = req.body.description;
    art_piece
      .save()
      .then((art_piece) => {
        res.json("Art updated!");
      })
      .catch((err) => {
        res.status(400).send("Art update not possible");
      });
  });
});
module.exports = routes;