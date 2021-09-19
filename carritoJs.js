//genero un array global de productos, para que cuando tome los datos del JSON, se puedan cargar los productos en un array global, para hacer funcionar todas las demas funciones que tengo.
let productos = [];
let cantProdComprados = 0;
let cantProdAdquiridos = 0;
let totalGastado = 0;


$(document).ready(function () {
    obtenerJsonProductos ();
})

//Tomo del JSON los productos para crear las cards.
const obtenerJsonProductos = () => {
    //Primero busco la ruta donde están alojados los objetos
    const urlProductos = "productos.json";
    $.getJSON (urlProductos, function (respuesta, estado) {
        if (estado == "success") {
            productos = respuesta.product; //acá lo que hago es cargar los productos en la variable QUE ES GLOBAL.
            renderizarCards (); //acá renderízo las cards, porque si está todo ok para mostrarlas, las muestra. Si no, se hace una llamada asincrónica y pueden no verse cuando yo las necesito.
            // console.log(productos);
        }
    });
}



function refrescarTabla (productosDelArrayStorage) {
    $(".tablaBody").empty()
    for(productos of productosDelArrayStorage) {
        $(".tablaBody").append(`<tr id="table${productos.idProducto}">
                                <td>${productos.tipoProducto}</td>
                                <td>${productos.nombreProducto}</td>
                                <td><b> $ ${productos.precioProducto}</b></td>
                                <td><button id="btnBorrar${productos.idProducto}"> Borrar </button></td> 
                                </tr>`);

                                
        $(`#btnBorrar${productos.idProducto}`).click (function () {
            //Me traigo los productos del LS.
            let prodStorage = JSON.parse(localStorage.getItem("productosSeleccionados"));
            //Activo la función para eliminar un producto determinado.
            eliminarDelArrayStorage (prodStorage, productos.idProducto);
            //guardo en el local storage el producto.
            localStorage.setItem("productosSeleccionados",JSON.stringify(prodStorage));
            //refrésco la tabla pasandole como parametro el nombre del nuevo array creado.
            refrescarTabla(prodStorage);
            //MUestro cantidad adquirida.
            cantidadProdStorageHTML();
            //Muestro total gastado.
            totalGastadoStorage();
        });
    }
}

//find + indexof. 

function eliminarDelArrayStorage (productosDelArrayStorage, idAEliminar) {
    //Genero una variable donde voy a guardar la posición VERDADERA de la condición.
    let posicion;
    for(i=0; i<productosDelArrayStorage.length; i++){
        //Recorro todo el array y en la posición donde el id del prod es = al parámetro que yo le paso, guardo ese dato.
        if(productosDelArrayStorage[i].idProducto === idAEliminar){
            posicion = i;
        }
    }
    //Quito ese dato del array y devuelvo mi array completo.
    productosDelArrayStorage.splice(posicion,1);    
    return productosDelArrayStorage;
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
                                            <button id="btnComprar${producto.id}"> COMPRAR </button>
                                        </div>
                                    </div>`);

        //Creo las funciones que van a corresponder al boton de comprar.                                
        $(`#btnComprar${producto.id}`).click (function () { 
            //Genero una función que me mande al localStorage los objetos comprados.            
            function sumarAlLocalStorage () {
                let nombreProducto = producto.nombre;
                let descripcionProducto = producto.descripcion;
                let tipoProducto = producto.tipo;
                let precioProducto = producto.precio;
                let idProducto = producto.id;
                let cantidadProducto = producto.contador;
                //Creo array de productos con los datos que quiero mostrar en mi localstorage
                const productoSeleccionado = {nombreProducto, descripcionProducto, precioProducto,tipoProducto,idProducto, cantidadProducto};

                //Si el LS está vacío, entonces me genera un array y pushea el producto comprado. 
                if (localStorage.getItem("productosSeleccionados") === null) {
                    let productosSeleccionadosArray = [];
                    productosSeleccionadosArray.push (productoSeleccionado);
                    localStorage.setItem ("productosSeleccionados", JSON.stringify(productosSeleccionadosArray));
                    // console.log (productosSeleccionadosArray);
                    refrescarTabla(productosSeleccionadosArray);
                }
                //Si el array tiene productos, entonces lo parseo, le pusheo el nuevo producto y lo mando de nuevo al Sotrage. 
                else {
                    let prodStorage = JSON.parse(localStorage.getItem("productosSeleccionados"));
                    prodStorage.push(productoSeleccionado);
                    localStorage.setItem("productosSeleccionados",JSON.stringify(prodStorage));
                    refrescarTabla(prodStorage);  
                };
            }
            
            sumarAlLocalStorage ();
            compraRealizada(); //es un alert.-
            cantidadProdStorageHTML(); //Para ver en el HTML los productos comprados.
            totalGastadoStorage ();
            
            
        });
    };
}


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

//Creo una función para poder ver cuantos productos llevo comprados. Salen del Local Storage.
function cantidadProdStorageHTML () {
    if (localStorage.getItem("productosSeleccionados") === null) {
        //Si no tengo nada en el storage, me sale el cartel por consola.
        console.log ("No tienes nada en el carrito");
    } else {
        //busco el JSON y lo parseo
        let prodStorage = JSON.parse(localStorage.getItem("productosSeleccionados"));
        //genero una variable que me diga cuantos productos tengo
        let cantProdAdquiridos = prodStorage.length;
        // console.log("Tengo en el Storage: " + cantProdAdquiridos);
        //agrego a la tabla un parrafo que me vaya indicando la cant. de prod. en el carrito.
        $('#cantProd').append(`<p>Cantidad de productos en Carrito: ${cantProdAdquiridos}</p>`);
        //Borro el primer hijo agregado, para que no se duplique la información.
        $('#cantProd').children(':first-child').remove();
    }    
}


function totalGastadoStorage () {
    let prodStorage = JSON.parse(localStorage.getItem("productosSeleccionados"));
    //Reincio a CERO para que con cada vuelta del for, no se sume lo acumulado en el ambito global.
    totalGastado = totalGastado * 0;
    for (let producto of prodStorage) { 
        totalGastado = producto.precioProducto + totalGastado;
    }    
    $('#cantGastado').append(`<p>Total final: $ ${totalGastado}</p>`);
    $('#cantGastado').children(':first-child').remove();
}

// Creo la tabla de productos. 1.44
$("#tablasGeneral").append(`<table class="table table-striped">
<tbody class="tablaBody">
<thead>
<td>Tipo</td>
<td>Nombre</td>
<td>Precio por unidad</td>
</thead>
</tbody>
</table>`);

//Creo la función ordenar para poder ordenar los productos.

$(`#sortBy`).on('change', function () {
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
});


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


// probando git con mi proyecto.


