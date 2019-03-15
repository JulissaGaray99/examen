'use strict';
const mongoose = require('mongoose');

let schema_mascota = new mongoose.Schema(
    {
        codigo : {type: String, required : true},
        nombre : {type: String, required : true},
        raza : {type: String, required : true},
        edad : {type: Number, required : true},
        sexo : {type: String, required : true}
    }
);
 module.exports = mongoose.model('mascota', schema_mascota);