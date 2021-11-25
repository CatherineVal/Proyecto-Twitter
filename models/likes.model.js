const {Schema, model } = require('mongoose');

const esquemaLikes = new Schema({

    idUsuario: String,
    usuario: String

});

module.exports = model('likes', esquemaLikes);
