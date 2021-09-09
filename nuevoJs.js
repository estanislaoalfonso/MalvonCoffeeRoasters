//genero un array global de productos, para que cuando tome los datos del JSON, se puedan cargar los productos en un array global, para hacer funcionar todas las demas funciones que tengo.
let productos = [];

$(document).ready(function () {
    obtenerJsonProductos ();
})

const obtenerJsonProductos = () => {
    //Primero busco la ruta donde están alojados los objetos
    const urlProductos = "productos.json";
    $.getJSON (urlProductos, function (respuesta, estado) {
        if (estado == "success") {
            productos = respuesta.product; //acá lo que hago es cargar los productos en la variable QUE ES GLOBAL.
            renderizarCards (); //acá renderízo las cards, porque si está todo ok para mostrarlas, las muestra. Si no, se hace una llamada asincrónica y pueden no verse cuando yo las necesito.
        }
    });
}


//Creo la funcion para crear cards y recorro los objetos con un for of para crearlas:

const renderizarCards = () => {
    for (const producto of productos) {
        $("#cardsGeneral").append(`<div class="cards${producto.tipo}">
                                        <img src="${producto.imagen}"></img>
                                        <h3 class="cardsTitle">${producto.nombre}</h3>
                                        <p class="cardsDescription"> ${producto.descripcion}</p>
                                        <p class="cardsPrecio"> $ ${producto.precio}</p>
                                        <div class="buttonDivs">
                                            <button id="btnComprar${producto.id}"> CARRITO </button>
                                            <button id="btnBorrar${producto.id}"> BORRAR </button>
                                        </div>
                                    </div>`);

        //Creo las funciones que van a corresponder al boton del carrito.                                
        $(`#btnComprar${producto.id}`).click (function () {
            function contadorProducto () {
                    contadorDeProductos = producto.contador + contadorDeProductos;
                    console.log ("Cantidad de productos comprados: " + contadorDeProductos);
                    return contadorDeProductos;
            };

            function sumarProductos () {
                sumaProductos = producto.precio + sumaProductos;
                console.log ("Lleva gastado: $" + sumaProductos);
                return sumaProductos;
            };

            function sumarAlLocalStorage () {
                let nombreProducto = producto.nombre;
                let descripcionProducto = producto.descripcion;
                let precioProducto = producto.precio;
                let idProducto = producto.id;
                const productoSeleccionado = {nombreProducto, descripcionProducto, precioProducto,idProducto}; //Creo array de productos con los datos que quiero mostrar en mi localstorage
                    if (localStorage.getItem("productosSeleccionados") === null) {
                        let productosSeleccionadosArray = [];
                        productosSeleccionadosArray.push (productoSeleccionado);
                        localStorage.setItem ("productosSeleccionados", JSON.stringify(productosSeleccionadosArray));
                    } else {
                        let productosYaEnLocalStorage = JSON.parse(localStorage.getItem("productosSeleccionados"));
                        productosYaEnLocalStorage.push(productoSeleccionado);
                        localStorage.setItem("productosSeleccionados",JSON.stringify(productosYaEnLocalStorage));
                    }
            }
            
            function crearTabla () {
                $(".tablaBody").append(`<tr id="table${producto.id}">
                                        <td>${producto.tipo}</td>
                                        <td>${producto.nombre}</td>
                                        <td style="text-align: center">${contadorDeProductos}</td>
                                        <td><b> $ ${producto.precio}</b></td>
                                        </tr>`);
                                        
            };
            
            contadorProducto ();
            sumarProductos ();
            sumarAlLocalStorage ();
            crearTabla();
            compraRealizada();
        });

        $(`#btnBorrar${producto.id}`).click (function () {
            function borrarFilaTabla () {
                $(`#table${producto.id}`).remove();
            }
            //recorro el localStorage
            function borrarDelLocalStorage () {
                let productosStorage = JSON.parse (localStorage.getItem("productosSeleccionados"));
                console.log (productosStorage);
                let newProductosStorage = productosStorage.filter(item => {
                    return item.idProducto !== producto.id;
                });
                localStorage.clear();
                console.log(newProductosStorage);
                let newProductosSeleccionadosArray = [];
                newProductosSeleccionadosArray.push(newProductosStorage);
                localStorage.setItem ("newProductosStorage", JSON.stringify(newProductosSeleccionadosArray));
            };
            borrarFilaTabla();
            borrarDelLocalStorage ();
        });

    };
}

let sumaProductos = 0
let contadorDeProductos = 0 


//Animación de la librería de JQuery
const compraRealizada = () => { 
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Tu producto se agregó al carrito!',
        showConfirmButton: false,
        timer: 800
    })
}

// Creo la tabla de productos. 1.44

$("#tablasGeneral").append(`<table class="table table-striped">
<tbody class="tablaBody">
<tr>
<tr>
<td style ="background-color: black; color: white;">Total de productos comprados: ${contadorDeProductos}</td>
</tr>
<tr>
<td>Total: ${sumaProductos}</td>
</tr>
<td>Tipo</td>
<td>Nombre</td>
<td>Cantidad</td>
<td>Precio</td>
</tr>
</tbody>
</table>`);

//Creo la función ordenar para poder ordenar los productos.
const ordenar = () => {
    let seleccionado = $("#sortBy").val(); //llamo al boton select.
    if (seleccionado == "menorPrecio") { //condicion para que ordene de menor a mayor
        productos.sort (function (a,b) {
            return a.precio - b.precio;
        });
    } else if (seleccionado == "mayorPrecio") { //condición para que ordene de mayor a menor
        productos.sort (function (a,b) {
            return b.precio - a.precio;
        });
    }

    $(".cardsCafé").remove(); //Para que no me duplique el renderizado sino que solo se mantenga uno. Elimina el 1ro y genera uno nuevo.
    $(".cardsMétodo").remove();
    renderizarCards (); //renderizo las cards con la función para renderizar.
};


//Botón para vaciar todo el carrito.-
$(".allButtonDelete").click (function () {
    localStorage.clear();
    window.location.reload();
});

//Botones para mostrar/quitar los cafés y métodos.-
$("#btnVerCafe").click(function() { 
    $(".cardsCafé").toggle(900, function () {
        if ($("#btnVerCafe").html()=="Ocultar Cafés") {
            $("#btnVerCafe").html("MOSTRAR CAFÉS");
        }
    });
});
$("#btnVerMetodo").click(function() { 
    $(".cardsMétodo").toggle(900, function () {
        if ($("#btnVerMetodo").html()=="Ocultar Métodos") {
            $("#btnVerMetodo").html("MOSTRAR MÉTODOS");
        }
    });
});
