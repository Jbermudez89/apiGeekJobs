'use strict';
const mongoose = require('mongoose'),
  Empresas = mongoose.model('Empresas');

exports.create_a_company = function (req, res) {
  console.log(req,res);
  let new_company = new Empresas(req.body);
  console.log(req.body);
  new_company.save((err, emp) => {
    if (err)
      res.send(err);
    res.json(emp);
  });
};

exports.login_emp = function (req, res) {
  console.log(req.body);

  Empresas.find({ email_emp: req.body.email_emp, password_emp: req.body.password_emp }, (err, empArr) => {
    console.log('respuesta Login:',err, empArr);
    if (empArr.length != 1) {
      res.status(401);
      res.send("Not found");
    }
    else if (empArr[0]['email_emp'] != req.body.email_emp || empArr[0]['password_emp'] != req.body.password_emp) {
      res.status(401);
      res.send("Email o password incorrectos");
    }
    else {
      res.send(empArr[0]['_id']);
    }
  });
};