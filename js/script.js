function guardarDatosFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    var datosFormulario = {
        nombre: nombre,
        email: email,
        asunto: asunto,
        mensaje: mensaje
    };

    var datosJSON = JSON.stringify(datosFormulario);

    localStorage.setItem('formularioDatos', datosJSON);

    return true;
}

function limpiarFormulario() {
    var nombreInput = document.getElementById('nombre');
    var emailInput = document.getElementById('email');
    var asuntoInput = document.getElementById('asunto');
    var mensajeInput = document.getElementById('mensaje');

    nombreInput.value = '';
    emailInput.value = '';
    asuntoInput.value = '';
    mensajeInput.value = '';

}