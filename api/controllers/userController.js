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
<<<<<<< HEAD
  // find the user by mail and password
  // check mail and password equals to received data
  // return user _id
=======
  Users.find({ email: req.body.email, password: req.body.password }, (err, userArr) => {
    if (userArr.length != 1) {
      res.status(401);
      res.send("Not found");
    }
    else if (userArr[0]['email'] != req.body.email || userArr[0]['password'] != req.body.password) {
      res.status(401);
      res.send("Usuari o password incorrectes");
    }
    else {
      res.send(userArr[0]['_id']);
    }
  });
>>>>>>> c10dd048565bcd231fd0cdccf611a2ddc039bb5c
};
