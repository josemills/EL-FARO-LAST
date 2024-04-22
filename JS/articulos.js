document.addEventListener("DOMcontentLoad", function() {
    const formulario  = document.getElementById("formulario-articulo");
    const articulosContenedor = document.getElementById("articulos");

    function agregarArticulo(evento) {
        evento.preventDefault();

        const titulo = formulario.elements["titulo"].value;
        const descripcion = formulario.elements["descripcion"].value;

        const articuloDiv = document.createElement("div");
        articuloDiv.classList.add("articulo");
        
        const tituloElemento = document.createElement("h2");
        tituloElemento.textContent = titulo;
        articuloDiv.appendChild(tituloElemento);

        const descripcionElemento = document.createElement("p");
        descripcionElemento.textContent = descripcion;
        articuloDiv.appendChild(descripcionElemento);

        articulosContenedor.appendChild(articuloDiv);

        formulario.elements["titulo"].value = "";
        formulario.elements["descripcion"].value = "";
    }

    formulario.addEventListener("submit", agregarArticulo);
});

