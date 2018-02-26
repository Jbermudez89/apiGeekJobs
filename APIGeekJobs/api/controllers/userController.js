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
  // find the user by mail and password
  // check mail and password erquals to received data
  // return user _id
};
