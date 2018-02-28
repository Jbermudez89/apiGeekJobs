'use strict';
module.exports = function (app) {
  const empresaController = require('../controllers/empresaController');

  // todoList Routes
  app.route('/empresa/registro')
    .post(empresaController.create_a_company);

  app.route('/empresa/login')
    .post(empresaController.login_emp);
};