const {Schema, model } = require('mongoose');

const esquemaTrends = new Schema({

    idUsuario: String,
    idHashtag: String,
    descripcion: String

});

module.exports = model('trends', esquemaTrends);
