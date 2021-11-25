const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var Usuario = require('../models/usuario.model');
const { validateToken } = require('../middelware/validateToken');

router.post('/', async function (req, res) {

    let body = req.body;

    const user = await Usuario.findOne({ correo: body.coreo });

    if (user) {
        return res.json({ mensaje: 'Correo ya existe' });
    }

    let usuario = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        usuario: body.usario,
        correo: body.correo,
        contra: body.contra,
        fechaNacimiento: body.fecha,
        estado: true,
    });

    const salt = bcrypt.genSaltSync();

    usuario.contra = bcrypt.hashSync(body.contra, salt);

    usuario.save(async (error, nuevoUsuario) => {

        if (error) return res.json(error);

        res.json({
            token: await getToken(nuevoUsuario.id),
            ok: true
        });
    });

});

router.post('/login', async function (req, res) {

    const { correo, contra } = req.body;

    try {
        const user = await Usuario.findOne({ correo });

        if (!user) {
            return res.status(500).json({
                msg: 'El nombre de usuario no existe',
                ok: false
            });
        }

        const compararContra = bcrypt.compareSync(contra, user.contra);

        if (!compararContra) {
            return res.status(500).json({
                msg: 'Contraseña invalida',
                ok: false
            });
        }

        const token = await getToken(user.id);

        res.json({
            ok: true,
            token
        });

    } catch (error) {
        return res.status(500).json({
            msg: error,
            ok: false
        });
    }

});


router.get('/', validateToken, (req, res) => {
    const { id } = req;

    Usuario.find().then(data => {
        const users = data.filter(user=>user._id != id);

        res.json(users);

        res.end()
    });

});
 
const getToken = (id) => {

    return new Promise((resolve, reject) => {
        const payload = { id }

        jwt.sign(payload, 'secretpass', {
            expiresIn: '2h'
        }, (error, token) => {

            if (error) {
                reject('No se pudo crear el token');
            }
            resolve(token);
        });
    });

}

module.exports = router;