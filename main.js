class Producto {
  constructor (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const robot = new Producto ("Robot", 8.4);
const mono = new Producto ("Mono", 7.6);
const ciervo = new Producto ("Ciervo", 5.9);
const mariposas = new Producto ("Mariposas", 3.2);
const dragon = new Producto ("Dragón", 4.8);
const chica3d = new Producto ("Chica3D", 2.7);
const harryPotter = new Producto ("Harry Potter", 3.5);
const colibri = new Producto ("Colibrí", 2.4);

const articulos = [robot, mono, ciervo, mariposas, dragon, chica3d, harryPotter, colibri];
console.log(articulos);

const articulosCarrito = [];

function carrito () {
  const listadoProductos = alert("Estos son los productos disponibles: Robot, Mono, Ciervo, Mariposas, Dragón, Chica3D, Harry Potter, Colibrí.");
  let productoIngresado = prompt("Ingrese el nombre del producto que desea agregar al carrito e ingrese T para calcular el total: ");
}

function armarCarrito () {

  articulos.map (art => {
    if(productoIngresado === art.nombre) {
      articulosCarrito.push(art.precio);
      carrito ();
    }
  })    
}


carrito();
console.log(articulosCarrito);


