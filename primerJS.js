//ETAPA DE SELECCIÓN DE PRODUCTOS.-----------------------------------------------

//Creamos las clases de productos a comercializar:

class Cafe {
    constructor (nombreCafe, sabor, intensidad, origen, precioCafe, counterCafe) {
        this.nombreCafe = nombreCafe.toUpperCase();
        this.sabor = sabor;
        this.intensidad = intensidad;
        this.origen = origen;
        this.precioCafe = parseInt(precioCafe);
        this.counterCafe = parseInt (counterCafe); //genero la variable que me permitira contar el café
    }

    sumaIva() {
        this.precioCafe = this.precioCafe * 1.21;
    }

    mostrar () {
        console.log (this);
    }

    contadorProducto () {
        this.counterCafe = this.counterCafe + 1; //genero la función que me permite hacer el conteo.
    }

}

class Metodo {
    constructor (nombreMetodo, molienda, tipoVertido, precioMetodo) {
        this.nombreMetodo = nombreMetodo.toUpperCase();
        this.sabor = molienda;
        this.tipoVertido = tipoVertido;
        this.precioMetodo = parseFloat(precioMetodo);
    }

    sumaIva () {
        this.precioMetodo = this.precioMetodo * 1.21;
    }

    mostrar () {
        console.log (this);
    }
}

//Creando los arrays de productos de café en base a la clase de café:
//1. Cafés: 
const productosCafe = []; //acá creo el array y debajo, vienen los productos incluidos en el mismo.
productosCafe.push (new Cafe ("Café de Colombia", "Sabores dulces y florales", "Intensidad media", "Origen: Colombia", 800, 0));
productosCafe.push (new Cafe ("Café de Guatemala", "Sabor floral", "Intensidad baja", "Origen: Guatemala", 600, 0));
productosCafe.push (new Cafe ("Cafe de Antigua Guatemala", "Sabor dulce", "Intensidad baja", "Origen: Antigua Guatemala", 1000, 0));
productosCafe.push (new Cafe ("Café de Brasil", "Sabor dulce", "Intensidad alta", "Origen: Brasil", 700, 0));
productosCafe.push (new Cafe ("Café de Jamaica", "Sabor dulce y cremoso", "Intensidad suave", "Origen: Jamaica", 1200, 0));
productosCafe.push (new Cafe ("Café de Costa Rica", "Sabor floral", "Intensidad media", "Origen: Costa Rica", 1100, 0));
productosCafe.push (new Cafe ("Café de Etiopía", "Sabor dulce", "Intensidad alta", "Origen: Etiopía", 1500, 0));


//2. Métodos:
const productosMetodos =[];
productosMetodos.push (new Metodo ("V60", "Molienda Fina", "Vertido: Balanceado", 5000));
productosMetodos.push (new Metodo ("Aeropress", "Molienda media", "Vertido: Ácido", 7000));
productosMetodos.push (new Metodo ("Moka", "Molienda media", "Vertido: Intenso", 8000));
productosMetodos.push (new Metodo ("Syphon", "Molienda fina", "Vertido: suave", 15000));
productosMetodos.push (new Metodo ("Chemex", "Molienda fina", "Vertido: suave", 11000));
productosMetodos.push (new Metodo ("French Press", "Molienda fina", "Vertido: Balanceado", 8000));


/*BUCLE CESTA ----------------------------------------------------------------------

Para ir incorporando los productos con su precio y los 
junte todos y los sume para arrojar el total de una compra*/


//2. Creo la variable sobre la cual se irá cargando el total a gastar. 
let sumaProductos = 0;

/*3. Genero la función carrito donde incluyo el bucle que me permite que el cliente compre todo lo que necesite y cuando termine
pueda dar una finalización mediante la palabra "LISTO". 
Mientras, acumulo el gasto total mediante la ecuación de suma, dentro del bucle while y switch*/



function carrito () {
    let cesta = prompt ( "Ingrese el número de producto que desea comprar.\nEn caso que no quiera mas productos, entonces escriba LISTO para salir.");

    while ( cesta != "LISTO") {
        switch (cesta) {
            case "1":
            productosCafe[0].sumaIva();
            sumaProductos = productosCafe[0].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[0].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[0].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag1").value = productosCafe[0].counterCafe; // Para visualizar en WEB
            break;
    
            case "2":
            productosCafe[1].sumaIva();
            sumaProductos = productosCafe[1].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[1].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[1].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag2").value = productosCafe[1].counterCafe; // Para visualizar en WEB
            break;
    
            case "3":
                productosCafe[2].sumaIva();
            sumaProductos = productosCafe[2].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[2].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[2].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag3").value = productosCafe[2].counterCafe; // Para visualizar en WEB
            break;
    
            case "4":
            productosCafe[3].sumaIva(); 
            sumaProductos = productosCafe[3].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[3].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[3].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag4").value = productosCafe[3].counterCafe; // Para visualizar en WEB
            break;
    
            case "5":
            productosCafe[4].sumaIva();
            sumaProductos = productosCafe[4].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[4].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[4].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag5").value = productosCafe[4].counterCafe; // Para visualizar en WEB
            break;
    
            case "6":
            productosCafe[5].sumaIva();
            sumaProductos = productosCafe[5].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[5].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[5].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag6").value = productosCafe[5].counterCafe; // Para visualizar en WEB
            break;
    
            case "7":
            productosCafe[6].sumaIva();
            sumaProductos = productosCafe[6].precioCafe + sumaProductos;
            console.log ("El usuario compró: " + productosCafe[6].nombreCafe + ". Total parcial: $" + sumaProductos);
            productosCafe[6].contadorProducto(); //Activo la función para el producto elegido.
            document.getElementById ("counterBag7").value = productosCafe[6].counterCafe; // Para visualizar en WEB
            break;
    
            case "8":
            productosMetodos[0].sumaIva();
            sumaProductos = productosMetodos[0].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[0].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
            case "9":
            productosMetodos[1].sumaIva();
            sumaProductos = productosMetodos[1].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[1].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
            case "10":
            productosMetodos[2].sumaIva();
            sumaProductos = productosMetodos[2].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[2].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
    
            case "11":
            productosMetodos[3].sumaIva();
            sumaProductos = productosMetodos[3].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[3].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
            case "12":
            productosMetodos[4].sumaIva();
            sumaProductos = productosMetodos[4].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[4].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
            case "13":
            productosMetodos[5].sumaIva();
            sumaProductos = productosMetodos[5].precioMetodo + sumaProductos;
            console.log ("El usuario compró: " + productosMetodos[5].nombreMetodo + ". Total parcial: $" + sumaProductos);
            break;
    
            default:
            alert ("Producto no encontrado")
            break;
        }
    cesta = prompt ( "Excelente! Agregaste un producto a tu cesta.\nTu total hasta ahora es de: $" + sumaProductos + "\nPuedes continuar comprando o recuerda que tipeando la palabra LISTO finalizas tu selección.\nElige otro producto si deseas continuar.");
    }
}

//Activo el carrito
carrito ();

/*4. Finalizo mostrando el total comprado y sacando además por consola el gasto total, para pasar a la etapa 
de uso de tarjeta*/
alert ("Muchas gracias por elegirnos!\nTu total es de: $ " + sumaProductos +"\nAhora puedes pasar a la etapa de pago.");
console.log ("El total de la compra del usuario es de: $ " + sumaProductos);


//ETAPA DE CUOTAS --------------------------------------------------------------------

//1. Le pedimos al usuario que elija el banco y si tiene, cuotas sin interés.

alert ( "Por favor, selecciona el Banco de la tarjeta con el cual quieres abonar: " );

let bancoUsuario = prompt ("Ingrese el Banco al que pertenece la tarjeta de crédito. Si tienes algúna facilidad de pago te la informamos!");

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

alert ("Muchas gracias por realizar tu compra, el total por cuota será de: $" + totalCuotaMensual + " y será incluido en tu próxima liquidación del banco " + bancoUsuario.toUpperCase());
console.log ("El total mensual a abonar por el usuario será de: " + totalCuotaMensual);


/*Aplicamos el método filter para que me muestre todos los productos cuyo precio es menor a 1.000 en cafés
y a 10.000 en métodos*/

const filtroCafePrecios = productosCafe.filter (item => item.precioCafe <= 1000);
console.log (filtroCafePrecios);

const filtroMetodosPrecios = productosMetodos.filter (item => item.precioMetodo <= 10000);
console.log (filtroMetodosPrecios);