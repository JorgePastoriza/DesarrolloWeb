const listaProductos = [
    {id: 1, nombre: "Captain Tsubasa", precioVenta: "500", cantidad: 5, Tipo: "Deportes", imagen: "CaptainTsubasa.webp",},
    {id: 2, nombre: "Demon Slayer", precioVenta: "600", cantidad: 5, Tipo: "Demonios", imagen: "DemonSlayer.webp",},
    {id: 3, nombre: "Dragon Ball", precioVenta: "600", cantidad: 3, Tipo: "Aventuras", imagen: "DragonBall.webp",},
    {id: 4, nombre: "Neon Genesis Evangelion", precioVenta: "700", cantidad: 1, Tipo: "Mechas", imagen: "NeonGenesisEvangelion.webp",},
    {id: 5, nombre: "My Hero Academia", precioVenta: "600", cantidad: 2, Tipo: "Aventuras", imagen: "MyHeroAcademia.webp",},
    {id: 6, nombre: "One Piece", precioVenta: "600", cantidad: 4, Tipo: "Aventuras", imagen: "OnePiece.webp",},
    {id: 7, nombre: "One Punch Man", precioVenta: "600", cantidad: 4, Tipo: "Peleas", imagen: "OnePunchMan.webp",},
    {id: 8, nombre: "Shin Mazinger Zero", precioVenta: "600", cantidad: 2, Tipo: "Mechas", imagen: "ShinMazingerZero.webp",},
    {id: 9, nombre: "Slam Dunk", precioVenta: "500", cantidad: 2, Tipo: "Deportes", imagen: "SlamDunk.webp",},
    {id: 10, nombre: "Spy Family", precioVenta: "600", cantidad: 3, Tipo: "Humor", imagen: "SpyFamily.webp",},
  ];

const Generos = [
    {tipo: 0, nombre: "Todos", },
    {tipo: 1, nombre: "Aventuras", },
    {tipo: 2, nombre: "Demonios", },
    {tipo: 3, nombre: "Deportes", },
    {tipo: 4, nombre: "Humor", },
    {tipo: 5, nombre: "Mechas", },
    {tipo: 6, nombre: "Peleas", },
]

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorFiltros = document.getElementById("contenedorFiltros");

function Filtros(){
    for (const dato of Generos) {
        let column = document.createElement("div");
        column.className = "col";
        column.id = "filtro-generos";
        column.innerHTML = `<a id="${dato.nombre}" href="#">${dato.nombre}</a>`;
        contenedorFiltros.append(column);
    }
}

function MostrarProductos(Genero){
    if (Genero =="Todos"){
        contenedorProductos.innerHTML = "";
        for (const dato of listaProductos) {
            let column = document.createElement("div");
                column.className = "col-sm-12 col-md-6 col-lg-3 pb-3";
                column.id = `columna-venta-${dato.id}`;
                column.innerHTML = `
                    <div class="card">
                    <img class="card-img-top w-100" src="../img/${dato.imagen}" alt="Card image cap">
                        <div class="card-body">
                            <p class="card-text">Nombre: <b>${dato.nombre}</b></p>
                            <p class="card-text">Precio venta: <b>${dato.precioVenta}</b></p>
                            <p class="card-text">Cantidad: <b>${dato.cantidad}</b></p>
                        </div>
                        <div class="card-footer">
                            <button class="btn btn-primary" id="botonAgregar-${dato.id}" >Agregar</button>
                        </div>
                    </div>`;
            
                    contenedorProductos.append(column);
        }
    }else{
        listaProductos.map(function(dato){
            contenedorProductos.innerHTML = "";
            for (const dato of listaProductos) {
                if(dato.Tipo == Genero){
                    let column = document.createElement("div");
                    column.className = "col-md-4 mt-3 ";
                    column.id = `columna-venta-${dato.id}`;
                    column.innerHTML = `
                        <div class="card">
                        <img class="card-img-top w-100" src="../img/${dato.imagen}" alt="Card image cap">
                            <div class="card-body">
                                <p class="card-text">Nombre: <b>${dato.nombre}</b></p>
                                <p class="card-text">Precio venta: <b>${dato.precioVenta}</b></p>
                                <p class="card-text">Cantidad: <b>${dato.cantidad}</b></p>
                            </div>
                            <div class="card-footer">
                                <button class="btn btn-primary" id="botonAgregar-${dato.id}" >Agregar</button>
                            </div>
                        </div>`;
                        console.log(column);
                        contenedorProductos.append(column);
                }
            }   
        });
    }
}

function inicializarEventos() {
    contenedorFiltros.onclick = (event) => MostrarProductos(event.target.id);
  }

//-------------------------Aca arranca el menu-----------------

function main() {
    Filtros();
    MostrarProductos("Todos");
    inicializarEventos();
  }
  
main();
