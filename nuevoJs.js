//1. Creo mi array de productos

const productos = [//acá creo el array y debajo, vienen los productos incluidos en el mismo.
{id: 1, tipo: "Café", nombre: "Café de Colombia", descripcion: "Sabores dulces y florales. De Intensidad media", precio: 800, imagen: "Imagenes/productImage2.webp", contador: 1},
{id: 2, tipo: "Café", nombre: "Café de Guatemala", descripcion: "Sabor floral. De intensidad baja", precio: 600, imagen: "Imagenes/productImage3.webp", contador: 1},
{id: 3, tipo: "Café", nombre: "Cafe de Antigua Guatemala", descripcion: "Intensidad baja", precio: 1000, imagen: "Imagenes/productImage1.webp", contador: 1},
{id: 4, tipo: "Café", nombre: "Café de Brasil", descripcion: "Sabor dulce. De intensidad alta", precio: 700, imagen: "Imagenes/productImage5.webp", contador: 1},
{id: 5, tipo: "Café", nombre: "Café de Jamaica", descripcion: "Sabor dulce y cremoso. De intensidad suave", precio: 1200, imagen: "Imagenes/productImage4.webp", contador: 1},
{id: 6, tipo: "Café", nombre: "Café de Costa Rica", descripcion: "Sabor floral. De intensidad media", precio: 1100, imagen: "Imagenes/productImage1.webp", contador: 1},
{id: 7, tipo: "Café", nombre: "Café de Etiopía", descripcion: "Sabor dulce. De intensidad alta", precio: 1500, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 8, tipo: "Método", nombre: "V60", descripcion: "Molienda Fina. Vertido: Balanceado", precio: 5000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 9, tipo: "Método", nombre: "Aeropress", descripcion: "Molienda media. Vertido: Ácido", precio: 7000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 10, tipo: "Método", nombre: "Moka", descripcion: "Molienda media. Vertido: Intenso", precio: 8000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 11, tipo: "Método", nombre: "Syphon", descripcion: "Molienda fina. Vertido: Suave", precio: 15000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 12, tipo: "Método", nombre: "Aeropress", descripcion: "Molienda media. Vertido: Ácido", precio: 7000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 13, tipo: "Método", nombre: "Chemex", descripcion: "Molienda fina. Vertido: suave", precio: 11000, imagen: "Imagenes/productImage2.webp", contador: 1},
// {id: 14, tipo: "Método", nombre: "French Press", descripcion: "Molienda fina. Vertido: Balanceado", precio: 8000, imagen: "Imagenes/productImage2.webp", contador: 1},
];

//Creo las cards y recorro los objetos con un for of para crearlas:

for (const producto of productos) {
    let imagen = document.createElement("img");
    imagen.setAttribute ("src", producto.imagen);
    
    let cardsTitle = document.createElement("h3");
    cardsTitle.setAttribute ("class", "cardsTitle");
    cardsTitle.innerHTML = `${producto.nombre}`;

    let cardsDescription = document.createElement("p");
    cardsDescription.setAttribute ("class", "cardsDescription");
    cardsDescription.innerHTML = `${producto.descripcion}`;

    let cardsButton = document.createElement ("button");
    cardsButton.setAttribute ("class", "cardsButton");
    cardsButton.innerHTML = "COMPRAR";
    
    let cards = document.createElement("div");
    cards.setAttribute ("class", "cards");

    cards.prepend(imagen);
    cards.appendChild(cardsTitle);
    cards.appendChild(cardsDescription);
    cards.appendChild(cardsButton);
    
    cardsGeneral.appendChild(cards);
    
}

let sumaProductos = 0
let contadorDeProductos = 0 


//Creo la tabla de productos. 1.44
let tablaCompras = document.createElement("tabla");
tablaCompras.setAttribute ("class", "table table-striped") //Incluí el CSS de bootstrap para estas clases
let tablaComprasBody = document.createElement ("tbody");
tablasGeneral.appendChild(tablaCompras);
let totalesEnTabla = document.createElement ("tr");

const alertar = () => { //Animación de la librería de JQuery
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Tu procuto se agregó al carrito!',
        showConfirmButton: false,
        timer: 1500
      })
}

/*Recorro todos los productos para asignar la funcion "buttonClick" a cada boton y que funcine para ese producto en particular.
Agrego todas las funciones que se van a poder hacer con el boton.*/

let buttonClick = document.getElementsByClassName ("cardsButton");
for (let i = 0; i< buttonClick.length; i++) {
    //Agrego el evento que va a corresponder a cada boton.
    buttonClick[i].addEventListener ("click", crearTabla);
    function crearTabla () {
        let fila = document.createElement("tr");
        
        let celda = document.createElement("td");
        celda.innerText = productos[i].id;
        fila.appendChild(celda);

        let celda1 = document.createElement("td");
        celda1.innerText = productos[i].tipo;
        fila.appendChild(celda1);
    
        let celda2 = document.createElement ("td");
        celda2.innerText = productos[i].nombre;
        fila.appendChild (celda2);
    
        let celda3 = document.createElement ("td");
        celda3.innerHTML = `<b> $ ${productos[i].precio}</b>`;
        fila.appendChild (celda3);
    
        tablaComprasBody.appendChild (fila);
        tablaCompras.appendChild (tablaComprasBody);
    }

    buttonClick[i].addEventListener ("click", contadorProducto);
    function contadorProducto () {
        contadorDeProductos = productos[i].contador + contadorDeProductos; 
        console.log ("Cantidad de productos comprados: " + contadorDeProductos);
    };
    
    buttonClick[i].addEventListener ("click", sumarProductos);
    function sumarProductos () {
        sumaProductos = productos[i].precio + sumaProductos;
        console.log ("Lleva gastado: $" + sumaProductos);
    };

    buttonClick[i].addEventListener ("click", sumarAlLocalStorage);    
    function sumarAlLocalStorage () {
        
        let nombreProducto = productos[i].nombre;
        let descripcionProducto = productos[i].descripcion;
        let precioProducto = productos[i].precio;
        
        const productosArrayAlStorage = {nombreProducto, descripcionProducto, precioProducto}; //Creo array de productos con los datos que quiero mostrar en mi localstorage
        const productoAlLocalStorage = (clave, valor) => { //genero una función para que la guarda local pueda ser guardada con la key = id
            localStorage.setItem(clave, valor);
        };
        
        productoAlLocalStorage (productos[i].id, JSON.stringify(productosArrayAlStorage));
    }

    buttonClick[i].addEventListener ("click", alertar);

};



















