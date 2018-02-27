'use strict';
const mongoose = require('mongoose'),
  Users = mongoose.model('Users');

exports.create_a_user = function (req, res) {
  let new_user = new Users(req.body);
  new_user.save((err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.read_a_user = function (req, res) {
  Users.findById(req.params.userId, (err, user) => {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  Users.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err)
        res.send(err);
      res.json(user);
    });
};

exports.login = function (req, res) {
  console.log(req.body);
  console.log(req.body.email_geek);
  console.log(req.body.password_geek);

  
  Users.find({ email: req.body.email_geek, password: req.body.password_geek }, (err, userArr) => {
    console.log('respuesta Login:',err, userArr);
    if (userArr.length != 1) {
      res.status(401);
      res.send("Not found");
    }
    else if (userArr[0]['email'] != req.body.email_geek || userArr[0]['password'] != req.body.password_geek) {
      res.status(401);
      res.send("Usuari o password incorrectes");
    }
    else {
      res.send(userArr[0]['_id']);
    }
  });
};
