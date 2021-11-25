var express = require('express');
const { validateToken } = require('../middelware/validateToken');
var router = express.Router();
var Tweet = require('../models/tweet.model');

router.post('/', validateToken, function (req, res) {

    let body = req.body;

    const { id } = req;

    let newTweet = new Tweet({
        tweet: body.tweet,
        idUsuario: id,
    });

    newTweet.save((error, nuevoTweet) => {

        if (error) return res.json(error);

        res.json(nuevoTweet);
    });

});

router.get('/', validateToken, (req, res) => {

    const { id } = req;

    Tweet.find({ idUsuario: id }).then(tweets => {
        res.json(tweets);
        res.end()
    });

});

router.delete('/:idTweet', validateToken, (req, res) => {

    const { id } = req;

    let idTweet = req.params.idTweet;

    Tweet.findOneAndDelete({ _id: idTweet, idUsuario: id }).then(data => {
        res.json(data);
        res.end()
    });
});



module.exports = router;