let totalGastado = 0;
let productosLs = JSON.parse(localStorage.getItem("productosSeleccionados"));
console.log(productosLs);

const renderizarCards = () => {
    for (const producto of productosLs) {
        $("#cuerpoTicket").append(`<div class="ticket">
                                        <img src="${producto.productoImagen}"></img>
                                        <h3 class="cardsTitle">${producto.nombreProducto}</h3>
                                        <p class="cardsDescription"> ${producto.descripcionProducto}</p>
                                        <p class="cardsPrecio"> $ ${producto.precioProducto}</p>
                                        <p class="cardsTipo"> Tipo de producto: ${producto.tipoProducto}</p>
                                    </div>`);
    }
}
renderizarCards ();

function totalGastadoStorage () {
    //Reincio a CERO para que con cada vuelta del for, no se sume lo acumulado en el ambito global.
    totalGastado = totalGastado * 0;
    for (let producto of productosLs) { 
        totalGastado = producto.precioProducto + totalGastado;
    }    
    $('#totalGastado').prepend(`<p>Total a abonar: $ ${totalGastado}</p>`);
}
totalGastadoStorage ();


//Funcion ON CHANGE CANTIDAD DE CUOTAS -----------------------------------
$('#enUnPago').append(`<p>En un solo pago: $ ${totalGastado}</p>`)
$(`#cantCuotas`).on('change', function () {
    let seleccionado = $("#cantCuotas").val(); //llamo al boton select.
        if (seleccionado == "seisCuotas") {
            let enSeisCuotas = totalGastado/6;
            $('#enSeisCuotas').append(`<p>En 6 cuotas de: $ ${enSeisCuotas}</p>`);
            $('#enDoceCuotas').empty()
            $('#enUnPago').empty();
            $('#enUnaCuotas').empty();

        } else if (seleccionado == "doceCuotas") {
            let enDoceCuotas = totalGastado/12;
            $('#enDoceCuotas').append(`<p>En 12 cuotas de: $ ${enDoceCuotas}</p>`);
            $('#enSeisCuotas').empty()
            $('#enUnPago').empty();
            $('#enUnaCuotas').empty();

        } else if (seleccionado == "unaCuotas"){
            let enUnaCuota = totalGastado;
            $('#enUnaCuotas').append(`<p>En un solo pago: $ ${enUnaCuota}</p>`);
            $('#enSeisCuotas').empty();
            $('#enDoceCuotas').empty();
            $('#enUnPago').empty();
        }
});


//FUNCION PARA SELECCIONAR UN BANCO y DAR DESCUENTO DEL 20%
$(`#bancoUsuario`).on('change', function () {
    let seleccionado = $(`#bancoUsuario`).val();
    if ((seleccionado == 'ciudad') || (seleccionado == 'itau') || (seleccionado == 'santa')) {
        let totalGastadoDescuento = totalGastado*80/100;
        $(`#tieneDescuento`).show();
        $('#totalGastado').empty();
        $('#totalGastadoDescuento').append(`<p>Total a pagar con descuento: $ ${totalGastadoDescuento}</p>`);
    }
    else{
        $(`#tieneDescuento`).hide();
        $('#totalGastadoDescuento').empty();
        $('#totalGastado').empty();
        $('#totalGastado').prepend(`<p>Total a abonar: $ ${totalGastado}</p>`)
    }
})

//deje en macbook 21.54hs.