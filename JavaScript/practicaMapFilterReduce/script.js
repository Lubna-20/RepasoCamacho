const frutas = [
    { nombre: 'patatas', precio: 3, stock: 500 },
    { nombre: 'manzanas', precio: 2, stock: 200 },
    { nombre: 'peras', precio: 1, stock: 100 },
    { nombre: 'plátanos', precio: 1.5, stock: 0 },
    { nombre: 'uvas', precio: 4, stock: 150 },
    { nombre: 'naranjas', precio: 2.5, stock: 250 },
    { nombre: 'piñas', precio: 5, stock: 0 },
    { nombre: 'kiwis', precio: 3.5, stock: 120 },
    { nombre: 'fresas', precio: 6, stock: 90 },
    { nombre: 'mangos', precio: 4.5, stock: 75 }
];


//solo el listado de los nombres (map): 10
//copia exacta del vector de frutas
const vectorAux = frutas.slice();
console.log(vectorAux);
//map va a ser la funcion que devuelva el nombre de cada fruta (un campo en concreto)
const nombresFrutas = frutas.map(f => f.nombre);
console.log('Solo nombres de frutas');
console.log(nombresFrutas);
//sort va a ordenar el vector de frutas por precio 
const ordenadoPorPrecio = vectorAux.sort((a,b) => a.precio-b.precio).reverse();
console.log('Ordenado por precio');
console.log(ordenadoPorPrecio);
//sort va a ordenar el vector de frutas por nombre
const ordenadoPorNombre = vectorAux.sort((a,b) => a.nombre.localeCompare(b.nombre)).reverse();
console.log('Ordenado por nombre');
console.log(ordenadoPorNombre);
//every: si todos los elementos cumplen una condicion
//Todos tienen stock (DISPINTO DE 0)
const todosTienenStock = vectorAux.every(f => f.stock > 0);
console.log('Todos tienen stock');
console.log(todosTienenStock);
//buscador dentro del array
/*let nombreBuscado = prompt('Introduce el nombre de la fruta que quieres buscar');
let aparicion  = vectorAux.find(f => f.nombre.toLocaleLowerCase() === nombreBuscado.toLocaleLowerCase() );
if(aparicion== undefined){
    console.log('No existe la fruta');
}else{
    console.log('La fruta existe');
    console.log(nombreBuscado );
}
//Añadir una nueva fruta al array
let nombreF = prompt('Introduce el nombre de la fruta que quieres añadir');
let precioF = prompt('Introduce el precio de la fruta que quieres añadir');
let stockF = prompt('Introduce el stock de la fruta que quieres añadir');
let nuevaFruta = {
    nombre: nombreF,
    precio: Number(precioF),
    stock: Number(stockF)
};
vectorAux.push(nuevaFruta);
console.log('Fruta añadida');
console.log(vectorAux);
*/
//listado de frutas sin existencia (filter):2
const frutasSinExistencia = vectorAux.filter(f => f.stock === 0);
console.log('Listado de frutas sin existencia');
console.log(frutasSinExistencia);

//buscar nombre de fruta con filter
/*const nombreBuscado = prompt('Introduce el nombre de la fruta que quieres buscar');
const aparicion = vectorAux.filter(f => f.nombre.toLocaleLowerCase() === nombreBuscado.toLocaleLowerCase());
if(aparicion.length === 0){
    console.log('No existe la fruta');
}
else{
    console.log('La fruta existe');
    console.log(aparicion);
}
*/


//suma total del stock (reduce) :1485
const totalStock=frutas.reduce((acumulador, fruta) => {
    return acumulador + fruta.stock;
}, 0);
console.log('Total stock');
console.log(totalStock);
//MEDIA STOCK (reduce): 148.5
const mediaStock = totalStock / frutas.length;
console.log('Media stock');
console.log(mediaStock);

//Total de precios (reduce): 32.5
const totalPrecios = frutas.reduce((acumulador, fruta) => {
    return acumulador + fruta.precio;
}, 0);
console.log('Total precios');
console.log(totalPrecios);


//media de precios (recduce): 3.3 . Primero el total de medio y luego 
//divides entre frutas.length
const mediaPrecios = totalPrecios / frutas.length;
console.log('Media precios');
console.log(mediaPrecios);


//productos cuyo precio está por encima de la media (5)
// 1. Calcular la media de precios con reduce


// 2. Filtrar los productos que están por encima de la media
const productosPorEncimaMedia = frutas.filter(f => f.precio > mediaPrecios);
console.log('Productos por encima de la media');
console.log(productosPorEncimaMedia);

//productos cuyo stock está por debajo de la media
// 1. Calcular la media del stock con reduce


// 2. Filtrar las frutas con stock por debajo de la media (148.5) filter
const frutasStockPorDebajoMedia = frutas.filter(f => f.stock < mediaStock);
console.log('Frutas con stock por debajo de la media');
console.log(frutasStockPorDebajoMedia);
// nombre de frutas cuyo precio es mayor o igual a 5 euros (piña,fresa)  filter y map
const frutasPrecioMayorIgual5 = frutas.filter(f => f.precio >= 5).map(f => f.nombre);
console.log('Frutas con precio mayor o igual a 5 euros');
console.log(frutasPrecioMayorIgual5);
//frutas con stock entre 100 - 150 unidades y precio entree 4 - 6 euros
const frutasStockPrecio = frutas.filter(f => (f.stock >= 100 && f.stock <= 150) && (f.precio >= 4 && f.precio <= 6));
console.log('Frutas con stock entre 100 - 150 unidades y precio entre 4 - 6 euros');
console.log(frutasStockPrecio);
//fruta mas cara
const frutaMasCara = frutas.reduce((acumulador, fruta) => {
    return (fruta.precio > acumulador.precio) ? fruta : acumulador;
});
console.log('Fruta más cara');
console.log(frutaMasCara);