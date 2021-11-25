const {Schema, model } = require('mongoose');

const esquemaUsuario = new Schema({

    nombre: String,
    apellido: String,
    usuario: String,
    correo: String,
    contra: String,
    fechaNacimiento: Date,
    estado:{ type: Boolean, default:true}

});

module.exports = model('usuario', esquemaUsuario);
