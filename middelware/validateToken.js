const { request, response } = require("express");
const jwt = require('jsonwebtoken');

const validateToken = (req = request, res = response, netx) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token'
        });
    }

    try {

        const payload = jwt.verify(token, 'secretpass');

        const { id } = payload;

        req.id = id;

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'token no valido'
        });
    }

    netx();
}

module.exports = {
    validateToken
}