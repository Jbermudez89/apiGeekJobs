const express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  mongoose = require('mongoose'), 
  Users = require('./api/models/userModel'),
  Empresas = require('./api/models/empresaModel'),
  cors = require('cors'), 
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/UsersDb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const routesUser = require('./api/routes/userRoutes'); //importing route
const routesEmp = require('./api/routes/empresaRoutes'); //importing route
routesUser(app); //register the route
routesEmp(app); //register the route

app.options('*',cors());
app.listen(port);

console.log('users RESTful API server started on: ' + port);