// Hacemos un ticket de compra de un local de lenceria
// El comprador deberá completar producto, precio y cantidad 
// Seguirá completando hasta que no quiera ningun producto mas
// Al finalizar la carga de productos, se le informará el total de la compra
// Si el total supera los $1500 se le hace un 10% de descuento


const SI = 'si';
const NO = 'no';
let bienvenida;
let nombreProducto;
let precio;
let total = 0;
let cantidad;
let continuar;

function validacion(cantidad) {
    while(cantidad == 0) {
        cantidad = prompt('Cantidad incorrecta, por favor vuelva a ingresarla')
    }
    return cantidad;
}

function cargaProducto() {
    nombreProducto = prompt('Ingrese nombre del producto: Bikini, conjunto o bombacha');
    precio = +prompt('Ingrese precio:');
    cantidad = +prompt('Ingrese cantidad:');
    validacion();
}



bienvenida = alert('Bienvenido al carrito de compras de Joaquina Lenceria!!')
do {
    cargaProducto();
    continuar = prompt('Desea ingresar otro producto? si/no');
    while (continuar !== SI && continuar !== NO) {
        continuar = prompt('Respuesta inválida, vuelve a ingresarla, si/no:');
        }
        total = total + precio * cantidad;
    }while(continuar == SI);

alert('El total de su compra es: ' + (total))
