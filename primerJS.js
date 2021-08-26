//ETAPA DE SELECCIÓN DE PRODUCTOS.-----------------------------------------------

//Creamos las clases de productos a comercializar:

class Cafe {
    constructor (nombreCafe, sabor, intensidad, origen, precioCafe, counterCafe) {
        this.nombre = nombreCafe.toUpperCase();
        this.sabor = sabor;
        this.intensidad = intensidad;
        this.origen = origen;
        this.precio = parseInt(precioCafe);
        this.counter = parseInt (counterCafe); //genero la variable que me permitira contar el café
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    mostrar () {
        console.log (this);
    }

    contadorProducto () {
        this.counter = this.counter + 1; //genero la función que me permite hacer el conteo.
    }

}

class Metodo {
    constructor (nombreMetodo, molienda, tipoVertido, precioMetodo,counterMetodo) {
        this.nombre = nombreMetodo.toUpperCase();
        this.sabor = molienda;
        this.tipoVertido = tipoVertido;
        this.precio = parseInt(precioMetodo);
        this.counter = parseInt (counterMetodo);
    }

    sumaIva () {
        this.precio = this.precio * 1.21;
    }

    mostrar () {
        console.log (this);
    }

    contadorProducto () {
        this.counter = this.counter + 1; //genero la función que me permite hacer el conteo.
    }
}

//Creando los arrays de productos de café y Métodos en base a su clase:
//1. Cafés: 
const productos = []; //acá creo el array y debajo, vienen los productos incluidos en el mismo.
productos.push (new Cafe ("Café de Colombia", "Sabores dulces y florales", "Intensidad media", "Origen: Colombia", 800, 0));
productos.push (new Cafe ("Café de Guatemala", "Sabor floral", "Intensidad baja", "Origen: Guatemala", 600, 0));
productos.push (new Cafe ("Cafe de Antigua Guatemala", "Sabor dulce", "Intensidad baja", "Origen: Antigua Guatemala", 1000, 0));
productos.push (new Cafe ("Café de Brasil", "Sabor dulce", "Intensidad alta", "Origen: Brasil", 700, 0));
productos.push (new Cafe ("Café de Jamaica", "Sabor dulce y cremoso", "Intensidad suave", "Origen: Jamaica", 1200, 0));
productos.push (new Cafe ("Café de Costa Rica", "Sabor floral", "Intensidad media", "Origen: Costa Rica", 1100, 0));
productos.push (new Cafe ("Café de Etiopía", "Sabor dulce", "Intensidad alta", "Origen: Etiopía", 1500, 0));
productos.push (new Metodo ("V60", "Molienda Fina", "Vertido: Balanceado", 5000, 0));
productos.push (new Metodo ("Aeropress", "Molienda media", "Vertido: Ácido", 7000, 0));
productos.push (new Metodo ("Moka", "Molienda media", "Vertido: Intenso", 8000, 0));
productos.push (new Metodo ("Syphon", "Molienda fina", "Vertido: suave", 15000, 0));
productos.push (new Metodo ("Chemex", "Molienda fina", "Vertido: suave", 11000, 0));
productos.push (new Metodo ("French Press", "Molienda fina", "Vertido: Balanceado", 8000, 0));


/*BUCLE CESTA ----------------------------------------------------------------------

Para ir incorporando los productos con su precio y los 
junte todos y los sume para arrojar el total de una compra*/


//2. Creo la variable sobre la cual se irá cargando el total a gastar. 
let sumaProductos = 0;

/*3. Genero la función carrito donde incluyo el bucle que me permite que el cliente compre todo lo que necesite y cuando termine
pueda dar una finalización mediante la palabra "LISTO". 
Mientras, acumulo el gasto total mediante la ecuación de suma, dentro del bucle while y switch*/

//EVENTOS - 9
let botonCarrito = document.getElementById ("carrito");
let carritosVisibles = false; //Estado inicial del carrito (no visible)

botonCarrito.onclick = () => {
    mostrarOcultar("seccionCompra", carritosVisibles); //Le paso por parametros el div a manipular y la variable falsa.
    carritosVisibles = !carritosVisibles;
    if (carritosVisibles == true) {
        carrito ();
    } 
}

//Creo la función mostrarOcultar 
function mostrarOcultar (nombre, visibilidad) {
    let elemento = document.getElementById (nombre);
    if (visibilidad == false) {
        if (elemento.classList.contains("oculto")){
            elemento.classList.remove("oculto");
        }
        elemento.className += " visible";
    } else {
        if (elemento.classList.contains("visible")){
            elemento.classList.remove("visible");
        } 
        elemento.className += " oculto";
    }
}



function carrito () {
    let cesta = prompt ( "Ingrese el número de producto que desea comprar.\nEn caso que no quiera mas productos, entonces escriba LISTO para salir.");

    while ( cesta != "LISTO") {
        switch (cesta) {
            case "1":
            productos[0].sumaIva();                                                                               
            sumaProductos = productos[0].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[0].nombre + ". Total parcial: $" + sumaProductos);
            productos[0].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[0].counter; // Para visualizar en WEB
            break;
    
            case "2":
            productos[1].sumaIva();                                                                               
            sumaProductos = productos[1].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[1].nombre + ". Total parcial: $" + sumaProductos);
            productos[1].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[1].counter; // Para visualizar en WEB
            break;
    
            case "3":
            productos[2].sumaIva();                                                                               
            sumaProductos = productos[2].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[1].nombre + ". Total parcial: $" + sumaProductos);
            productos[2].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[2].counter; // Para visualizar en WEB
            break;
    
            case "4":
            productos[3].sumaIva();                                                                               
            sumaProductos = productos[3].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[3].nombre + ". Total parcial: $" + sumaProductos);
            productos[3].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[3].counter; // Para visualizar en WEB
            break;
    
            case "5":
            productos[4].sumaIva();                                                                               
            sumaProductos = productos[4].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[4].nombre + ". Total parcial: $" + sumaProductos);
            productos[4].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[4].counter; // Para visualizar en WEB
            break;
    
            case "6":
            productos[5].sumaIva();                                                                               
            sumaProductos = productos[5].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[5].nombre + ". Total parcial: $" + sumaProductos);
            productos[5].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[5].counter; // Para visualizar en WEB
            break;
    
            case "7":
            productos[6].sumaIva();                                                                               
            sumaProductos = productos[6].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[6].nombre + ". Total parcial: $" + sumaProductos);
            productos[6].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[6].counter; // Para visualizar en WEB
            break;
    
            case "8":
            productos[7].sumaIva();                                                                               
            sumaProductos = productos[7].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[7].nombre + ". Total parcial: $" + sumaProductos);
            productos[7].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[7].counter; // Para visualizar en WEB
            break;
    
            case "9":
            productos[8].sumaIva();                                                                               
            sumaProductos = productos[8].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[8].nombre + ". Total parcial: $" + sumaProductos);
            productos[8].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[8].counter; // Para visualizar en WEB
            break;
    
            case "10":
            productos[9].sumaIva();                                                                               
            sumaProductos = productos[9].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[9].nombre + ". Total parcial: $" + sumaProductos);
            productos[9].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[9].counter; // Para visualizar en WEB
            break;
    
    
            case "11":
            productos[10].sumaIva();                                                                               
            sumaProductos = productos[10].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[10].nombre + ". Total parcial: $" + sumaProductos);
            productos[10].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[10].counter; // Para visualizar en WEB
            break;
    
            case "12":
            productos[11].sumaIva();                                                                               
            sumaProductos = productos[11].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[10].nombre + ". Total parcial: $" + sumaProductos);
            productos[11].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[11].counter; // Para visualizar en WEB
            break;
    
            case "13":
            productos[12].sumaIva();                                                                               
            sumaProductos = productos[12].precio + sumaProductos;
            console.log ("El usuario compró: " + productos[12].nombre + ". Total parcial: $" + sumaProductos);
            productos[12].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productos[12].counter; // Para visualizar en WEB
            break;

            default:
            alert ("Producto no encontrado")
            break;
        }
    cesta = prompt ( "Excelente! Agregaste un producto a tu cesta.\nTu total hasta ahora es de: $" + sumaProductos + "\nPuedes continuar comprando o recuerda que tipeando la palabra LISTO finalizas tu selección.\nElige otro producto si deseas continuar.");
    }
}

//Activo el carrito
// carrito ();

/*4. Finalizo mostrando el total comprado y sacando además por consola el gasto total, para pasar a la etapa 
de uso de tarjeta*/
// alert ("Muchas gracias por elegirnos!\nTu total es de: $ " + sumaProductos +"\nAhora puedes pasar a la etapa de pago.");
// console.log ("El total de la compra del usuario es de: $ " + sumaProductos);


//ETAPA DE CUOTAS --------------------------------------------------------------------

//1. Le pedimos al usuario que elija el banco y si tiene, cuotas sin interés.

// alert ( "Por favor, selecciona el Banco de la tarjeta con el cual quieres abonar: " );

// let bancoUsuario = prompt ("Ingrese el Banco al que pertenece la tarjeta de crédito. Si tienes algúna facilidad de pago te la informamos!");

function formasDePago() {
    
    let cuotSinInt;
        switch (bancoUsuario.toUpperCase()) {
                
            case "SANTANDER RIO":
                let cuotasSantander = prompt ( "Con " + bancoUsuario.toUpperCase() + " tenés de 6 o 12 pagos sin interés.\nTipea:\nPara 6 pagos sin interés: 6.\nPara 12 pagos sin interés: 12.\nPara 1 solo pago: 1");
                if (cuotasSantander == "6") {
                    cuotSinInt = 6
                } else if (cuotasSantander == "12") { 
                    cuotSinInt = 12
                } else {
                    cuotSinInt = 1;
                }
            break;

            case "CIUDAD":
                let cuotasCiudad = prompt ( "Con " + bancoUsuario.toUpperCase() + " tenés de 6 o 12 pagos sin interés.\nTipea:\nPara 6 pagos sin interés: 6.\nPara 12 pagos sin interés: 12.\nPara 1 solo pago: 1");
                if (cuotasCiudad == "6") {
                    cuotSinInt = 6;
                } else if (cuotasCiudad == "12") {
                    cuotSinInt = 12;
                } else {
                    cuotSinInt = 1
                }
            break;    
                
            case "BBVA":
                let cuotasBBVA = prompt ( "Con " + bancoUsuario.toUpperCase() + " tenés de 6 o 12 pagos sin interés.\nTipea:\nPara 6 pagos sin interés: 6.\nPara 12 pagos sin interés: 12.\nPara 1 solo pago: 1");
                if (cuotasBBVA == "6") {
                    cuotSinInt = 6;
                } else if (cuotasBBVA == "12") {
                    cuotSinInt = 12;
                } else {
                    cuotSinInt = 1
                }
            break;   

            case "ITAU":
                let cuotasItau = prompt ( "Con " + bancoUsuario.toUpperCase() + " tenés de 6 o 12 pagos sin interés.\nTipea:\nPara 6 pagos sin interés: 6.\nPara 12 pagos sin interés: 12.\nPara 1 solo pago: 1");
                if (cuotasItau == "6") {
                    cuotSinInt = 6
                } else {
                    alert ("La opción no es correcta, por favor ingrese la opción que corresponda");
                }
            break;
            
            case "ICBC":
                let cuotasICBC = prompt ( "Con " + bancoUsuario.toUpperCase() + " tenés hasta 6 pagos sin interés.\nTipea:\nPara 6 pagos sin interés: 6.\nPara 1 solo pago: 1");
                if (cuotasICBC == "6") {
                    cuotSinInt = 6;
                } else {
                    cuotSinInt = 1
                }
            break;       


            default: 
                alert ("Lo sentimos! Tu Banco no tiene descuentos =(");
                cuotSinInt = 1
                break;
        }


    return cuotSinInt;
}

let cantidadCuotasSeleccionadas = formasDePago();
console.log ("La cantidad de cuotas seleccionadas por el usuario son de: "+ cantidadCuotasSeleccionadas);


//ETAPA DE MONTO DE LA CUOTA MENSUAL ---------------------------------------------------

let totalAPagar = sumaProductos;
let cuotas = cantidadCuotasSeleccionadas;

function totalFinal (totalAPagar, cuotas) {
    let totalPorCuota = totalAPagar / cuotas;
    return totalPorCuota;
}

let totalCuotaMensual = totalFinal (totalAPagar,cuotas);

// alert ("Muchas gracias por realizar tu compra, el total por cuota será de: $" + totalCuotaMensual + " y será incluido en tu próxima liquidación del banco " + bancoUsuario.toUpperCase());
// console.log ("El total mensual a abonar por el usuario será de: " + totalCuotaMensual);


/*Aplicamos el método filter para que me muestre todos los productos cuyo precio es menor a 1.000 en cafés
y a 10.000 en métodos*/

// const filtroCafePrecios = productosCafe.filter (item => item.precioCafe <= 1000);
// console.log (filtroCafePrecios);

// const filtroMetodosPrecios = productosMetodos.filter (item => item.precioMetodo <= 10000);
// console.log (filtroMetodosPrecios);



