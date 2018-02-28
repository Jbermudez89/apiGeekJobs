'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmpresaSchema = new Schema({
  email_emp:{
    type: String,
    required: 'email empresa'
  },
  password_emp:{
    type: String,
    required: 'password empresa'
  },
  nombre_emp: {
    type: String,
    required: 'nombre empresa'
  },
  apellido_emp: {
    type: String,
    required: 'apellido empresa'
  },
  cpassword_emp: {
    type: String,
    required: 'confirmacion password empresa'
  },
  empresa_emp:{
    type:String,
    required: 'nombre empresa'
  },
  nif_emp:{
      type: String,
      required: 'nif empresa'
  },
  telefono_emp: {
    type: String,
    required: 'telefono empresa'
  },
  stack_emp:{
    type: String
  }
});

module.exports = mongoose.model('Empresas', EmpresaSchema);