// Codigo JavaScript

const nombre = document.querySelector('.nombre');
const numero = document.querySelector('.numero');
const direccion = document.querySelector('.direccion');
const btnAgregarTarea = document.querySelector('.btn-agregar-tarea');
const listadoTarea = document.querySelector('.listado-tareas');

// Accedemos al local storage
const db = window.localStorage

// Agregamos evento al btn
btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        nombre: nombre.value,
        numero: numero.value,
        direccion: direccion.value,
    }
    guardarContacto(db, contacto);
}

// FUNCION CARGAR CONTACTOS
cargarContactos(db, listadoTarea);