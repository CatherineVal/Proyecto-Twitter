var express = require('express');
const { validateToken } = require('../middelware/validateToken');
var router = express.Router();

var Hashtags = require('../models/hashtags.model');

router.post('/', validateToken, function (req, res) {

    let body = req.body;
    const { id } = req;

    let Hashtag = new Hashtags({
        hashtag: body.hashtag,
        idUsuario: id
    });

    Hashtag.save((error, nuevoHashtag) => {

        if(error) return res.json(error);
        res.json(nuevoHashtag);
        
    });

});



router.get('/', validateToken, (req, res) => {

    const {id} = req;
    Hashtags.find({ idUsuario: id}).then(hashtags => {
        res.json(hashtags);
        res.end()
    });

});


router.delete('/:idHashtag', validateToken, (req, res) => {

    const {id} = req;
    let idHashtag = req.params.idHashtag;
    Hashtags.findOneAndRemove({ _id: idHashtag, idUsuario : id }).then(resul => {
        res.json(resul);
        res.end()
    });

});




module.exports = router;