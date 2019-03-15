'use strict';
const express = require ('express');
const router = express.Router();
const api_mascota = require('./mascota.api');

router.route('/registrar_mascota')
    .post(
        function(req,res){
            api_mascota.registrar(req, res);
        }
    );
    router.route('/listar_mascota')
    .get(
        function(req,res){
            api_mascota.listar_todos(req,res);
        }
    );
module.exports = router;