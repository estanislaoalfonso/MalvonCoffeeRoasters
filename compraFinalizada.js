let productosLs = JSON.parse(localStorage.getItem("productosSeleccionados"));
console.log(productosLs);

const renderizarCards = () => {
    for (const producto of productosLs) {
        $("#ticketFinal").append(`<div id="ticketFinalProducto2">
                                        <div id="imageContainer2">
                                        <img id="ticketImage2" src="${producto.productoImagen}"></img>
                                        </div>
                                        <div id="ticketDescriptionContainer2"> 
                                        <h3 id="cardsTitle2" class="cardsTitle">${producto.nombreProducto}</h3>
                                        <p class="cardsDescription"> ${producto.descripcionProducto}</p>
                                        </div>
                                    </div>`);
    }
}
renderizarCards ();

$(`#buttonPaginaPpal`).on("click", function () {
    window.location.href='index.html';
    localStorage.clear();
});

$(`#buttonVolverAlCarrito`).on("click", function () {
    window.location.href='carrito.html';
    localStorage.clear();
});
