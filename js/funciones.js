// Funciones

const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

// FUNCION CARGAR CONTACTOS ********************************

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    for (clave of claves) {
        let contacto = JSON.parse(db.getItem(clave))
        crearContacto(parentNode, contacto, db);
    }
}
// FUNCION QUE CREA LOS CONTACTOS***************************
const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre
    numeroContacto.innerHTML = contacto.numero
    direccionContacto.innerHTML = contacto.direccion
    iconoBorrar.innerHTML = 'delete-forever'

    divContacto.classList.add('tarea')
    divContacto.classList.add('material-icons', 'icono')

    // FUNCION BORRAR DE LA LISTA
    iconoBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = '/'
    }

    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}