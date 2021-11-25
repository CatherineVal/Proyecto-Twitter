const {Schema, model } = require('mongoose');

const esquemaLists = new Schema({

    nombre: String,
    usuario: String,
    descripcion: String,
    comentario: String


});

module.exports = model('lists', esquemaLists);
