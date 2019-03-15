'use strict';
let registrar_mascota = (pcodigo, pnombre, praza, pedad, psexo ) =>{

    let request = $.ajax({

        url: "http://localhost:4000/api/registrar_mascota",
        method: "POST",
        data: {
            codigo: pcodigo,
            nombre: pnombre,
            raza: praza,
            edad: pedad,
            sexo: psexo
        },
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        dataType: "json"
    });
    request.done(function (msg) {

        swal.fire({
            type: 'success',
            title: 'Comentario enviado correctamente',
            text: `El codigo es${pcodigo} el cul tiene un nombre de ${pnombre} con el tipo de raza de ${praza} tiene un edad de ${pedad} y su sexo es ${psexo}`
        });

    });

    request.fail(function (jqXHR, textStatus) {

    });
};
let listar_mascota = () => {
    let lista_mascota = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_mascota",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_mascota = res.mascota;
        
    });

    request.fail(function (jqXHR, textStatus) {

    });

    return lista_mascota;
};

