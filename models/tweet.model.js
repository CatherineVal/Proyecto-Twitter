const {Schema, model } = require('mongoose');

const esquemaTweet = new Schema({

    tweet: String,
    idUsuario: String,


});

module.exports = model('tweet', esquemaTweet);
