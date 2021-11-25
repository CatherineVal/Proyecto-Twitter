var express = require('express');
var router = express.Router();

var Lists = require('../models/lists.model');
var conexion = require('../database/database');

router.post('/', function (req, res) {

    let body = req.body;

    let Lists = new Lists({
        nombre: body.nombre,
        descripcion: body.descripcion,
        usuario: body.usuario,
        comentario: body.comentario

    });

    role.save((error, nuevaLists) => {

        if(error) return res.json(error);
        res.json(nuevaLists);
    });

});

router.get('/', (req, res) => {

    Tweet.find({}, { nombre: true, descripcion: true, usuario:true }).then(lists => {
        res.json(lists);
        res.end()
    });

});

router.get('/:idLists', (req, res) => {
    let idLists = req.params.idLists;
    Lists.find({ _id: idLists }, { nombre: true, descripcion: true, usuario:true }).then(roles => {
        res.json(lists[0]);
        res.end()
    });

});


router.delete('/:idLists', (req, res) => {
    let idLists = req.params.idLists;
    Lists.remove({ _id: idLists }).then(data => {
        res.json(data);
        res.end()
    });

});




module.exports = router;