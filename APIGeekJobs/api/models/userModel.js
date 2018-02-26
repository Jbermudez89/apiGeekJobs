'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email:{
    type: String,
    required: 'Email'
  },
  password:{
    type: String,
    required: 'Password'
  },
  nombre: {
    type: String,
    required: 'Nombre del usuario'
  },
  apellido: {
    type: String,
    required: 'Apellido del usuario'
  },
  telefono: {
    type: String,
    required: 'Teléfono del usario'
  },
  habilidad:{
    type: String,
    required: 'Habilidad del usuario'
  },
  hobby: {
    type: String,
    required: 'Hobby del usuario'
  }
});

module.exports = mongoose.model('Users', UsersSchema);