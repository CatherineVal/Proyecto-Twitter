const {Schema, model } = require('mongoose');

const esquemaSiguiendo = new Schema({

    nombre: String,
    usuario: String,
    correo: String,


});

module.exports = model('siguiendo', esquemaSiguiendo);
