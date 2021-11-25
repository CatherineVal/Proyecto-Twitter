var mongoose = require('mongoose');


var dataBase = "pruebaTecnica";

mongoose.connect(`mongodb+srv://root:1234@cluster0.m2qrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(conexion => {
        console.log("se conecto a mongoose");
    }).catch(error => {
        console.log(error);
    })




