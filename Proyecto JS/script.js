const Productos = [];

class Producto {
    constructor(codigo, nombre, precioVenta, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre.toUpperCase();
        this.precioVenta = precioVenta;
        this.cantidad = cantidad;
    }
}

function agregarProducto() {   
    let codigo = prompt("Ingrese el codigo");
    let nombre = prompt("Ingrese el nombre");
    let precioVenta = prompt("Ingrese el precio de venta");
    let cantidad = prompt("Ingrese la cantidad");
    let productoARegistrar = new Producto(codigo, nombre, precioVenta, cantidad);
    return productoARegistrar;
}

function mostrarProductos() {
    for (let index = 0; index < Productos.length; index++) {
        alert("Producto: " + Productos.nombre + " Precio: " + Productos.precioVenta + " Stock: " + Productos.cantidad + "\n");
    }
}

function Menu() {
    const OPCION = prompt(
      "Bienvenido, seleccione una opción \n1. Agregar productos\n5. Mostrar lista de productos\n6. Salir"
    );
    return OPCION;
  }

function procesarABM() {
    let opcionSeleccionada = Menu();
    while (opcionSeleccionada != 6) {
        opcionSeleccionada = parseInt(opcionSeleccionada);
        switch (opcionSeleccionada) {
            case 1:
                Productos.push(agregarProducto());
                console.log(Productos);
                break;

            case 5:
                mostrarProductos();
                break;

            default:
                alert("Opcion Incorrecta");
                break;
            }
        opcionSeleccionada = Menu();
    }
}

procesarABM();