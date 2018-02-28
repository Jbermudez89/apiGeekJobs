'use strict';
const mongoose = require('mongoose'),
  Empresas = mongoose.model('Empresas');

exports.create_a_company = function (req, res) {
  let new_company = new Empresas(req.body);
  new_company.save((err, emp) => {
    if (err)
      res.send(err);
    res.json(emp);
  });
};

exports.login = function (req, res) {
  console.log(req.body);
  console.log(req.body.email_emp);
  console.log(req.body.password_emp);

  
  Empresas.find({ email: req.body.email_emp, password: req.body.password_emp }, (err, empArr) => {
    console.log('respuesta Login:',err, empArr);
    if (empArr.length != 1) {
      res.status(401);
      res.send("Not found");
    }
    else if (empArr[0]['email'] != req.body.email_emp || empArr[0]['password'] != req.body.password_emp) {
      res.status(401);
      res.send("Email o password incorrectos");
    }
    else {
      res.send(empArr[0]['_id']);
    }
  });
};