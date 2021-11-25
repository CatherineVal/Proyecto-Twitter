var express = require('express');
var cors = require('cors')
var conexion = require('./database/database');


var app = express();
app.use(express.static(__dirname + '/'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('puerto', process.env.PORT || 3000);

//nuevas rutas
var rutaUsuario = require('./routes/usuario.router');
var rutaLists = require('./routes/lists.router');
var rutaHashtags = require('./routes/hashtags.router');
var rutaTweet = require('./routes/tweet.router');
var trends = require('./routes/trends.router');



//usar rura
app.use('/usuario', rutaUsuario);
app.use('/lists', rutaLists);
app.use('/hashtags', rutaHashtags);
app.use('/tweet', rutaTweet);
app.use('/trends', trends);



app.listen(app.get('puerto'), () => {
    console.log("Servidor corriendo en el puerto 3000");
});