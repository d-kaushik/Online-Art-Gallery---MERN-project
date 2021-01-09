var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

// var   transporter=nodemailer.createTransport({
//     host: "smtp.gmail.com", //replace with your email provider
//     port: 5000,
//     auth: {
//       user: "kmpr.art.gallery@gmail.com", //replace with the email address
//       pass: "KMPR@asdfg" //replace with the password
//     }
//   });

  let mailTransporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: 'kmpr.art.gallery@gmail.com', 
        pass: 'KMPR@asdfg'
    } 
});

//   transporter.verify(function(error, success) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Server is ready to take our messages");
//     }
//   });

// let mailDetails = { 
//     cc:'kaushik.despacito@gmail.com',
//     to: 'apal19973@gmail.com', 
//     subject: 'Test mail', 
//     text: 'Kaushik Test'
// }; 
  

  router.post('/send', (req, res, next) => {
    var name = req.body.name
    var email = req.body.email
    var subject = "Mail"
    var message = req.body.message
    var content = `name: ${name} \n email: ${email} \n subject: ${subject} \n message: ${message} `
    var mail = {
      from: name,
      to: "kaushik.daspute98@gmail.com",
      subject: subject,
      text: content
    }
    mailTransporter.sendMail(mail, function(err, data) { 
        if(err) { 
            console.log(err); 
        } else { 
            console.log('Email sent successfully'); 
        } 
    });
    // transporter.sendMail(mail, (err, data) => {
    //   if (err) {
    //     res.json({
    //       status: 'fail'
    //     })
    //   } else {
    //     res.json({
    //      status: 'success'
    //     })
    //   }
    // })
  })