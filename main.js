const articulos = [robot, mono, ciervo, mariposas, dragon, chica3d, harryPotter, colibri];
const listadoProductos = alert("Estos son los productos disponibles: Robot, Mono, Ciervo, Mariposas, Dragón, Chica3D, Harry Potter, Colibrí.");
let productoIngresado = parseInt(prompt("Ingrese el nombre del producto que desea agregar al carrito e ingrese T para calcular el total: "));

const articulosCarrito = [];

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


function pregunta () {
  while (productoIngresado === Producto.nombre) {
    return articulosCarrito.push();
    pregunta();
  } if (productoIngresado === "T") {
    return articulosCarrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  }
}

pregunta();
console.log(articulosCarrito);


