'use strict';
const tabla = document.querySelector('#tbl_mascotas tbody');

let mostrar_mascotas = () => {
    let mascota = listar_mascota();

    for (let i = 0; i < mascota.length; i++) {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = mascota[i]['codigo'];
        fila.insertCell().innerHTML = mascota[i]['nombre'];
        fila.insertCell().innerHTML = mascota[i]['raza'];
        fila.insertCell().innerHTML = mascota[i]['edad'];
        fila.insertCell().innerHTML = mascota[i]['sexo'];
    };
};
mostrar_mascotas();