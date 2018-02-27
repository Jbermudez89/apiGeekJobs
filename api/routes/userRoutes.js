'use strict';
module.exports = function (app) {
  const userController = require('../controllers/userController');

  // todoList Routes
  app.route('/usuario/registro')
    .post(userController.create_a_user);

  app.route('/usuario/login')
    .post(userController.login);

  app.route('/usuario/:userId')
    .get((userController.read_a_user))
    .put(userController.update_a_user);
};
