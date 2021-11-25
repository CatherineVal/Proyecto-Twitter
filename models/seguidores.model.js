const {Schema, model } = require('mongoose');

const esquemaSeguidores = new Schema({

    nombre: String,
    usuario: String,
    correo: String,


});

module.exports = model('seguidores', esquemaSeguidores);
