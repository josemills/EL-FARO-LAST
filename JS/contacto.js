document.addEventListener("DOMContentLoaded", function () {
    
    const formularioContacto = document.getElementById("formulario-contacto");
    const mensajeConfirmacion = document.getElementById("confirmacion");

    
    function manejarEnvio(evento) {
        evento.preventDefault(); 
        
        const nombre = formularioContacto.elements["nombre"].value;
        const mensaje = formularioContacto.elements["mensaje"].value;


        mensajeConfirmacion.style.display = "block";

        formularioContacto.elements["nombre"].value = "";
        formularioContacto.elements["mensaje"].value = "";
    }


    formularioContacto.addEventListener("submit", manejarEnvio);
});