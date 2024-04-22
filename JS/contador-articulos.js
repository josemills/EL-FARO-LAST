function actualizarContadorArticulos() {
    const contadorArticulosElemento = document.getElementById("contador-articulos");
    contadorArticulosElemento.textContent = `Cantidad de artículos: ${cantidadArticulos}`;
}

function agregarArticulo(evento) {
    evento.preventDefault(); 
    
    cantidadArticulos++;

    actualizarContadorArticulos();

    
}

actualizarContadorArticulos();