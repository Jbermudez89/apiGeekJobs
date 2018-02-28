'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
  email:{
    type: String,
    required: 'email empresa'
  },
  password:{
    type: String,
    required: 'password empresa'
  },
  nombre: {
    type: String,
    required: 'nombre empresa'
  },
  apellido: {
    type: String,
    required: 'apellido empresa'
  },
  cpassword: {
    type: String,
    required: 'confirmacion password empresa'
  },
  empresa:{
    type:String,
    required: 'nombre empresa'
  },
  nif:{
      type: String,
      required: 'nif empresa'
  },
  telefono: {
    type: String,
    required: 'telefono del usuario'
  },
  stack:{
    type: String
  }
});

module.exports = mongoose.model('Empresas', EmpresaSchema);