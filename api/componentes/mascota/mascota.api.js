'use strict';
const mascota_model = require ('./mascota.model');

module.exports.registrar = (req,res) =>{
    let nuevo_mascota = new mascota_model(
        {
            codigo : req.body.codigo,
            nombre : req.body.nombre,
            raza : req.body.raza,
            edad : req.body.edad,
            sexo : req.body.sexo
            
        }
    );
    nuevo_mascota.save(function(error){
        if(error){
            res.json(
                {
                    success : false,
                    msg : `No se pudo registrar el comentario, ocurrió el siguiente error ${error}`  
                }
            );
        }else{
            res.json(
                {
                    success : true,
                    msg : `Se envió correctamente el comentario`  
                }
            );
        }

    });
};

module.exports.listar_todos = (req, res) => {
    mascota_model.find().then(
        function(mascota){
            if(mascota.length > 0){
                res.json(
                    {
                        success: true,
                        mascota : mascota
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        mascota: 'No se encontraron comentarios'
                    }
                )
            }
        }
    )
};