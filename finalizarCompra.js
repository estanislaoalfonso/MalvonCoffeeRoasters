let totalGastado = 0;
let productosLs = JSON.parse(localStorage.getItem("productosSeleccionados"));
console.log(productosLs);

const renderizarCards = () => {
    for (const producto of productosLs) {
        $("#cuerpoTicket").append(`<div id="ticket">
                                        <div id="imageContainer">
                                        <img id="ticketImage" src="${producto.productoImagen}"></img>
                                        </div>
                                        <div id="ticketDescriptionContainer">
                                        <h3 id="cardsTitle">${producto.nombreProducto}</h3>
                                        <p id="cardsDescription"> ${producto.descripcionProducto}</p>
                                        <p id="cardsPrecio"> Precio: $ ${producto.precioProducto}</p>
                                        <p id="cardsTipo"> Tipo de producto: ${producto.tipoProducto}</p>
                                        </div>
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


//FUNCION PARA SELECCIONAR UN BANCO y DAR DESCUENTO DEL 20%
$(`#bancoUsuario`).on('change', function () {
    let seleccionado = $(`#bancoUsuario`).val();
    if ((seleccionado == 'ciudad') || (seleccionado == 'itau') || (seleccionado == 'santa')) {
        totalGastado= totalGastado*80/100;
        $(`#tieneDescuento`).show(); //muestra el detalle que dice "tiene descuento".
        $('#totalGastado').empty(); //Vacía el total gastado sin descuento.
        $('#totalGastadoDescuento').empty(); //Vacía para que no quede un dato anterior.
        $('#enSeisCuotas').empty(); //Vacía para que no quede un dato anterior.
        $('#enDoceCuotas').empty()//Vacía para que no quede un dato anterior.
        $('#enUnPago').empty();//Vacía para que no quede un dato anterior.
        $('#enUnaCuotas').empty();//Vacía para que no quede un dato anterior.
        $('#totalGastadoDescuento').append(`<p>Total a pagar con descuento: $ ${totalGastado}</p>`);
    }
    else {
        $(`#tieneDescuento`).hide(); //Oculta el detalle que dice "tiene descuento"
        $('#totalGastado').empty();//Vacía para que no quede un dato anterior.
        $('#enSeisCuotas').empty();//Vacía para que no quede un dato anterior.
        $('#enDoceCuotas').empty()//Vacía para que no quede un dato anterior.
        $('#enUnPago').empty();//Vacía para que no quede un dato anterior.
        $('#enUnaCuotas').empty();//Vacía para que no quede un dato anterior.
        $('#totalGastadoDescuento').empty(); //para no duplicar.
        $('#totalGastado').append(`<p>Total a abonar: $ ${totalGastado}</p>`)
    }
})


//Funcion ON CHANGE CANTIDAD DE CUOTAS -----------------------------------
$(`#cantCuotas`).on('change', function () {
    let seleccionBanco = $(`#bancoUsuario`).val();
    if (seleccionBanco == "banco") {
        alert ("Elegir Banco");
        window.location.reload();
    } else {
        let seleccionado = $("#cantCuotas").val(); //llamo al boton select.
            if (seleccionado == "seisCuotas") {
                let enSeisCuotas = Math.round(totalGastado/6);
                $('#enSeisCuotas').append(`<p>En 6 cuotas sin interés de: $ ${enSeisCuotas}</p>`);
                $('#enDoceCuotas').empty()
                $('#enUnPago').empty();
                $('#enUnaCuotas').empty();
    
            } else if (seleccionado == "doceCuotas") {
                let enDoceCuotas = Math.round(totalGastado/12);
                $('#enDoceCuotas').append(`<p>En 12 cuotas sin interés de: $ ${enDoceCuotas}</p>`);
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
    }
});


//Button Seguir comprando
$(`#buttonVolverCarrito`).on('click', function () {
    window.location.href='carrito.html';
})
href="carrito.html"

//ABRIR MODAL
$(`#buttonComprar`).on("click", function () {
    let bancoUsuario = $(`#bancoUsuario`).val();
    if (bancoUsuario == "banco") {
        alert ('Seleccionar Banco');
        return false;
    }

    let cuotasUsuario = $(`#cantCuotas`).val();
    if (cuotasUsuario == "cantidadCuotas") {
        alert ("Seleccionar cantidad de cuotas");
        return false;
    }

    $(`#modalCompra`).modal("show");
});

// VALIDAR FORMULARIO
$(`#btnComprar`).on('click', function () {

    let nombre = $(`#txtNombre`).val();
    let apellido = $(`#txtApellido`).val();
    let dniEntrada= $(`#txtDni`).val();
    let localidad = $(`#txtLocalidad`).val();
    let nroTarjeta = $(`#txtNumeroTarjeta`).val();
    let correo = $(`#txtCorreo`).val();

    dniEntrada = parseInt(dniEntrada);
    nroTarjeta = parseInt (nroTarjeta) //paso a valor numérico el nro de tarjeta ingresado.
    
    if (nombre == "") {
        $(`#txtNombre`).css('border-color', 'red').fadeIn();
        return false; //Significa que cuando le de click, no va a pasar nada.
    } else {
        $(`#txtNombre`).css('border-color', 'green').fadeIn(); //Por si después lo rellena.
    }

    if (apellido == "") {
        $(`#txtApellido`).css('border-color', 'red').fadeIn();
        return false; //Significa que cuando le de click, no va a pasar nada.
    } else {
        $(`#txtApellido`).css('border-color', 'green').fadeIn(); //Por si después lo rellena.
    }  

    if (dniEntrada == "") {
        $(`#txtDni`).css('border-color', 'red').fadeIn();
        return false;
    } else if (!dniEntrada) {
        alert('Ingrese su número de DNI para continuar.');
        return false;
    } else if (dniEntrada < 15000000) {
        alert("DNI invalido")
        return false;
    } else {
        $(`#txtDni`).css('border-color', 'green').fadeIn();
    }

    if (localidad == "") {
        $(`#txtLocalidad`).css('border-color', 'red').fadeIn();
        return false; //Significa que cuando le de click, no va a pasar nada.
    } else {
        $(`#txtLocalidad`).css('border-color', 'green').fadeIn(); //Por si después lo rellena.
    }

    if (nroTarjeta == "") {
        $(`#txtNumeroTarjeta`).css('border-color', 'red').fadeIn();
        return false;
    } else if (!nroTarjeta) {
        alert('Ingrese el número de su tarjeta de crédito.');
        return false;
    } else if (nroTarjeta < 999999999999999) {
        alert("Nro. de tarjeta invalido. Por favor verificar.")
        return false;
    } else {
        $(`#txtNumeroTarjeta`).css('border-color', 'green').fadeIn();
    }

    if (correo == "") {
        $(`#txtCorreo`).css('border-color', 'red').fadeIn();
        alert ("Ingrese correo");
        return false;
    } else {   
        $(`#txtCorreo`).css('border-color', 'green').fadeIn();
    }
    // alert ('Compra finalizada');
    alert("Tu compra se procesó correctamente");
    window.location.href='compraFinalizada.html';
});

//VOLVER
$(`#btnCancelar`).on('click', function () {
    $(`#modalCompra`).modal("hide");
})

// ultimo commit Lunes 27 a las 08.41 en macbook.-