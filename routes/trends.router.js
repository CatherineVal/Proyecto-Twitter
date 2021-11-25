var express = require('express');
const { validateToken } = require('../middelware/validateToken');
var router = express.Router();
var Trends = require('../models/trends.model');


router.post('/', validateToken, function (req, res) {

    let body = req.body;

    const { id } = req;

    let newTrend = new Trends({
        idHashtag: body.idHashtag,
        descripcion: body.descripcion,
        idUsuario: id
        

    });

    newTrend.save((error, nuevaTrend) => {

        if(error) return res.json(error);
        res.json(nuevaTrend);
    });

});


router.get('/', validateToken, (req, res) => {
    
    const {id} = req;
    
    Trends.find({ idUsuario: id }).then(data => {
        res.json(data);
        res.end()
    });

});


router.delete('/:idTrend', (req, res) => {
    let idTrend = req.params.idTrend;
    Trends.findByIdAndRemove({ _id: idTrend }).then(data => {
        res.json(data);
        res.end()
    });

});




module.exports = router;