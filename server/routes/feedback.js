const express = require("express");
var routes = express.Router();
var nodemailer = require('nodemailer');

// var { user, feedback } = require("../model/feedback.model");

let mailTransporter = nodemailer.createTransport({ 
  service: 'gmail', 
  auth: { 
      user: 'kmpr.art.gallery@gmail.com', 
      pass: 'KMPR@asdfg'
  } 
});
routes.route("/send").post(function (req, res,next) {
  var name = req.body.name
    var email = req.body.mail
    var subject = "Mail from ".concat(name) 
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    var mail = {
      from: name,
      to: "kmpr.art.gallery@gmail.com",
      subject: subject,
      text: content
    }
    
   mailTransporter.sendMail(mail, (err, data) => {
      if (err) {
       console.log(err)
      } else {
        console.log("Email sent sucessfully")
      }
    })
});



module.exports = routes;
