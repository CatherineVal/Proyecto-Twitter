const {Schema, model } = require('mongoose');

const esquemaHashtags = new Schema({

    idUsuario: String,
    hashtag: String

});

module.exports = model('hashtags', esquemaHashtags);
