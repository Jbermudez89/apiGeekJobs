'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email:{
    type: String,
    required: 'email del usuario'
  },
  password:{
    type: String,
    required: 'password del usuario'
  },
  nombre: {
    type: String,
    required: 'nombre del usuario'
  },
  apellido: {
    type: String,
    required: 'apellido del usuario'
  },
  telefono: {
    type: String,
    required: 'telefono del usuario'
  },
  habilidades:{
    type: String,
    required: 'habilidades del usuario'
  },
  confirmacionpass: {
    type: String,
    required: 'confirmacionpass del usuario'
  },
  habilidadesPrincipales: {
    type: String,
  },
  formacion: {
    type: String,
  },
  experiencia: {
    type: String,
  },
  fotoPerfil: {
    type: String,
  },
  fotoCabecera: {
    type: String,
  },
  portafolio: {
    type: String,
  },
  descripcion: {
    type: String,
    required: 'descripcion del usuario'
  }

});

module.exports = mongoose.model('Users', UsersSchema);