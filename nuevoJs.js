//1. Creo mi array de productos

const productos = [//acá creo el array y debajo, vienen los productos incluidos en el mismo.
{id: 1, tipo: "Café", nombre: "Café de Colombia", descripcion: "Sabor dulce y floral.Intensidad media", precio: 800, imagen: "Imagenes/productImage2.webp", contador: 1},
{id: 2, tipo: "Café", nombre: "Café de Guatemala", descripcion: "Sabor floral. De intensidad baja", precio: 600, imagen: "Imagenes/productImage3.webp", contador: 1},
{id: 3, tipo: "Café", nombre: "Cafe de Antigua Guatemala", descripcion: "Intensidad baja", precio: 1000, imagen: "Imagenes/productImage1.webp", contador: 1},
{id: 4, tipo: "Café", nombre: "Café de Brasil", descripcion: "Sabor dulce. De intensidad alta", precio: 700, imagen: "Imagenes/productImage5.webp", contador: 1},
{id: 5, tipo: "Café", nombre: "Café de Jamaica", descripcion: "Sabor dulce y cremoso. De intensidad suave", precio: 1200, imagen: "Imagenes/productImage4.webp", contador: 1},
{id: 6, tipo: "Café", nombre: "Café de Costa Rica", descripcion: "Sabor floral. De intensidad media", precio: 1100, imagen: "Imagenes/productImage1.webp", contador: 1},
{id: 7, tipo: "Café", nombre: "Café de Etiopía", descripcion: "Sabor dulce. De intensidad alta", precio: 1500, imagen: "Imagenes/productImage2.webp", contador: 1},
{id: 8, tipo: "Método", nombre: "V60", descripcion: "Molienda Fina. Vertido: Balanceado", precio: 5000, imagen: "Imagenes/V60Carrito.jpg", contador: 1},
{id: 9, tipo: "Método", nombre: "Aeropress", descripcion: "Molienda media. Vertido: Ácido", precio: 7000, imagen: "Imagenes/AeropressCarrito.png", contador: 1},
{id: 10, tipo: "Método", nombre: "Moka", descripcion: "Molienda media. Vertido: Intenso", precio: 8000, imagen: "Imagenes/MokaCarrito.jpg", contador: 1},
{id: 11, tipo: "Método", nombre: "Syphon", descripcion: "Molienda fina. Vertido: Suave", precio: 15000, imagen: "Imagenes/SyphonCarrito.jpg", contador: 1},
{id: 12, tipo: "Método", nombre: "Chemex", descripcion: "Molienda fina. Vertido: suave", precio: 11000, imagen: "Imagenes/ChemexCarrito.jpg", contador: 1},
{id: 13, tipo: "Método", nombre: "French Press", descripcion: "Molienda fina. Vertido: Balanceado", precio: 8000, imagen: "Imagenes/FrenchPress.jpg", contador: 1},
];

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
            };
            function sumarProductos () {
                sumaProductos = producto.precio + sumaProductos;
                console.log ("Lleva gastado: $" + sumaProductos);
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
                                        <td>${producto.id}</td>
                                        <td>${producto.tipo}</td>
                                        <td>${producto.nombre}</td>
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
                console.log(newProductosStorage);
            };
            borrarFilaTabla();
            borrarDelLocalStorage ();
        });

    };
}
renderizarCards ();

let sumaProductos = 0
let contadorDeProductos = 0 


//Animación de la librería de JQuery
const compraRealizada = () => { 
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Tu procuto se agregó al carrito!',
        showConfirmButton: false,
        timer: 800
    })
}




// Creo la tabla de productos. 1.44

$("#tablasGeneral").append(`<table class="table table-striped">
<tbody class="tablaBody"></tbody>
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


//Botón para vaciar todo el carrito
$(".allButtonDelete").click (function () {
    localStorage.clear();
});

//Agregamos un botón y un div con jQuery
$("#btnVerCafe").click(function() { 
    $(".cardsCafé").toggle(900, function () {
        if ($("#btnVerCafe").html()=="Ocultar Cafés") {
            $("#btnVerCafe").html("VER CAFÉS");
        }
    });
});
$("#btnVerMetodo").click(function() { 
    $(".cardsMétodo").toggle(900, function () {
        if ($("#btnVerMetodo").html()=="Ocultar Métodos") {
            $("#btnVerMetodo").html("VER MÉTODOS");
        }
    });
});
// $("#btnVerMetodo").click(() => { 
//     $(".cardsMétodo").toggle("5000");
// });




// const compraCancelada = () => {
//     const swalWithBootstrapButtons = Swal.mixin({
//         customClass: {
//           confirmButton: 'btn btn-success',
//           cancelButton: 'btn btn-danger'
//         },
//         buttonsStyling: false
//       })
      
//       swalWithBootstrapButtons.fire({
//         title: 'Are you sure?',
//         text: "You won't be able to revert this!",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, delete it!',
//         cancelButtonText: 'No, cancel!',
//         reverseButtons: true
//       }).then((result) => {
//         if (result.isConfirmed) {
//           swalWithBootstrapButtons.fire(
//             'Deleted!',
//             'Your file has been deleted.',
//             'success'
//           )
//         } else if (
//           /* Read more about handling dismissals below */
//           result.dismiss === Swal.DismissReason.cancel
//         ) {
//           swalWithBootstrapButtons.fire(
//             'Cancelled',
//             'Your imaginary file is safe :)',
//             'error'
//           )
//         }
//       })
// }
