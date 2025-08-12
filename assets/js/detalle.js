// assets/js/detalle.js
const params = new URLSearchParams(window.location.search);
const idProducto = parseInt(params.get("id"));
const producto = productos.find(p => p.id === idProducto);

if (producto) {
    const imgElement = document.getElementById("producto-imagen");

    // Si falla la carga de la imagen, usar placeholder
    imgElement.onerror = () => {
        imgElement.onerror = null; // evita bucle infinito
        imgElement.src = "assets/media/images/placeholder.webp";
    };

    imgElement.src = producto.imagen;
    document.getElementById("producto-nombre").textContent = producto.nombre;
    document.getElementById("producto-precio").textContent = `$ ${producto.precio.toLocaleString()}`;
    document.getElementById("producto-descripcion").textContent = producto.descripcion;

    // Colores
    const coloresDiv = document.getElementById("producto-colores");
    producto.colores.forEach(color => {
        const span = document.createElement("span");
        span.style.backgroundColor = color;
        span.classList.add("color-option");
        coloresDiv.appendChild(span);
    });

    // Tallas
    const tallasSelect = document.getElementById("producto-tallas");
    producto.tallas.forEach(talla => {
        const option = document.createElement("option");
        option.value = talla;
        option.textContent = talla;
        tallasSelect.appendChild(option);
    });
} else {
    document.querySelector(".detalle-producto").innerHTML = "<p>Producto no encontrado</p>";
}
