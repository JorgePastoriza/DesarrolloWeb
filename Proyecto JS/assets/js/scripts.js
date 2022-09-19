let Productos = [];
const contenedorProductos = document.getElementById("divProductos");
const contenedorVentas = document.getElementById("divVentas");

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
    let precioVenta = parseFloat(prompt("Ingrese el precio de venta"));
    let cantidad = parseInt(prompt("Ingrese la cantidad"));
    let productoARegistrar = new Producto(codigo, nombre, precioVenta, cantidad);
    return productoARegistrar;
}

function cambiarPrecio(prodCodigo, precio){
    Productos.map(function(dato){
        if(dato.codigo == prodCodigo){
            dato.precioVenta = precio;
        }
      });
}

function cambiarStock(prodCodigo, nuevaCantidad){
    Productos.map(function(dato){
        if(dato.codigo == prodCodigo){
            dato.cantidad = nuevaCantidad;
        }
      });
}

function venta(prodCodigo, unidades){
    let Total = 0;
    Productos.map(function(dato){
        if(dato.codigo == prodCodigo){
            if (dato.cantidad > unidades){
                Total = dato.precioVenta * unidades;
                dato.cantidad -= unidades;

                //-----------muestro la venta en otro div
                let column = document.createElement("div");
                column.className = "col-md-4 mt-3 ";
                column.id = `columna-venta-${dato.codigo}`;
                column.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                        <p class="card-text">ID: <b>${dato.codigo}</b></p>
                        <p class="card-text">Nombre: <b>${dato.nombre}</b></p>
                        <p class="card-text">Precio venta: <b>${dato.precioVenta}</b></p>
                        <p class="card-text">Cantidad: <b>${unidades}</b></p>
                        <p class="card-text">Total Venta: <b>${Total}</b></p>
                        </div>
                    </div>`;
            
                contenedorVentas.append(column);

            }else{
                alert("No alcanza el stock del producto");
            }
        }
    });
    return Total;
}

function mostrarProductos() {
/*     for (let index = 0; index < Productos.length; index++) {
        alert("Producto: " + Productos[index].nombre + " Precio: " + Productos[index].precioVenta + " Stock: " + Productos[index].cantidad);
    } */
    for (const producto of Productos) {
        let column = document.createElement("div");
        column.className = "col-md-4 mt-3 ";
        column.id = `columna-${producto.codigo}`;
        column.innerHTML = `
            <div class="card">
                <div class="card-body">
                <p class="card-text">ID: <b>${producto.codigo}</b></p>
                <p class="card-text">Nombre: <b>${producto.nombre}</b></p>
                <p class="card-text">Precio venta: <b>${producto.precioVenta}</b></p>
                <p class="card-text">Cantidad: <b>${producto.cantidad}</b></p>
                </div>
            </div>`;
    
        contenedorProductos.append(column);
    }
}

//-------------------------Aca arranca el menu-----------------

function Menu() {
    const OPCION = prompt(
      "Bienvenido, seleccione una opción \n1. Agregar productos\n2. Cambiar precio\n3. Modificar stock\n4. Vender\n5. Mostrar lista de productos\n6. Salir"
    );
    console.log(Productos);
    return OPCION;
  }

function procesarABM() {
    let opcionSeleccionada = Menu();
    while (opcionSeleccionada != 6) {
        if (opcionSeleccionada != "") {
            opcionSeleccionada = parseInt(opcionSeleccionada);
            if (!isNaN(opcionSeleccionada)) {
                let codigoProd;
                switch (opcionSeleccionada) {
                case 1:
                    Productos.push(agregarProducto());
                    break;
                case 2:
                    codigoProd = prompt("Ingrese codigo del producto:")
                    const PRECIO_NUEVO = parseFloat(
                        prompt("Ingrese el nuevo precio del producto")
                    );
                    cambiarPrecio(codigoProd, PRECIO_NUEVO);
                    break;

                case 3:
                    codigoProd = prompt("Ingrese codigo del producto:")
                    const PRODUCTO_STOCK = parseInt(
                        prompt("Ingrese la nueva cantidad del producto")
                    );
                    cambiarStock(codigoProd, PRODUCTO_STOCK);
                    break;

                case 4:
                    codigoProd = prompt("Ingrese codigo del producto:")
                    const cantVenta = parseInt(
                        prompt("Ingrese la cantidad Vendida")
                    );
                    let total = parseFloat(venta(codigoProd, cantVenta));
                    if (total > 0){
                        alert("El total de la venta es: " + total);
                    }
                    break;

                case 5:
                    mostrarProductos();
                    break;

                default:
                    alert("Opcion Incorrecta");
                    break;
                }
            } else {
                alert("Ingresó una letra");
            }
        } else {
            alert("Seleccione la opción");
        }
        opcionSeleccionada = Menu();
    }
}


procesarABM();
