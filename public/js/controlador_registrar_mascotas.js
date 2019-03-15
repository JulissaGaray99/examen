'use strict';

const inputcodigo = document.querySelector('#txt_codigo');
const inputnombre = document.querySelector('#txt_nombre');
const inpuraza = document.querySelector('#slt_raza');
const inputedad = document.querySelector('#txt_edad');
const fieldset_sexo = document.querySelector('#rbt_sexo');
const botonRegistrar = document.querySelector('#btn_registrar');

let validar = () => {
     let error = false;
     let sexo_seleccionado = document.querySelector('#rbt_sexo input[type=radio]:checked');
     
     if (inputcodigo.value == ''){
         error = true;
         inputcodigo.classList.add('error_input');
     }else{
        inputcodigo.classList.remove('error_input');
     }

     if (inputnombre.value == ''){
        error = true;
        inputnombre.classList.add('error_input');
    }else{
        inputnombre.classList.remove('error_input');
    }

    if (inpuraza.value  == ''){
        error = true;
        inpuraza.classList.add('error_input');
    }else{
        inpuraza.classList.remove('error_input');
    }

    if (inputedad.value == ''){
        error = true;
        inputedad.classList.add('error_input');
    }else{
        inputedad.classList.remove('error_input');
    }

    if (sexo_seleccionado.value == null){
        error = true;
        fieldset_sexo.classList.add('error_input');
    }else{
        fieldset_sexo.classList.remove('error_input');
    }

    return error;

};


let obtener_datos = () => {

    if (validar() == false) {
        let codigo = (inputcodigo.value);
        let nombre = (inputnombre.value);
        let raza = (inpuraza.value);
        let edad = (inputedad.value);
        let sexo = document.querySelector('#rbt_sexo input[type=radio]:checked').value;
   
        registrar_mascota(codigo, nombre, raza, edad, sexo);
        console.log('El codigo es '+ codigo + 'el nombre de la mascota es'+ nombre + 'la raza es'+ raza + 'tiene una de edad de'+ edad + 'y su sexo es'+ sexo);

    }else {
        swal.fire({
            type: 'warning',
            title: 'El comentario no fue enviado',
            text: 'Por favor revise los campos resaltados'
        });
    }


};
botonRegistrar.addEventListener('click', obtener_datos);