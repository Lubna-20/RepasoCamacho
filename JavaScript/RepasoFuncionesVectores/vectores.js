window.addEventListener("DOMContentLoaded", inicio);

// Variables de los botones de la interfaz de usuario

const btn1 = document.querySelector("#btnaniadirN");
const btn2 = document.querySelector("#btnaniadirB");
const btn3 = document.querySelector("#btnaniadirP");
const btn4 = document.querySelector("#btnEliminarN");
const btn5 = document.querySelector("#btnAniadirU");
const btn6 = document.querySelector("#btnEliminarS");
const btn7 = document.querySelector("#btnSlice");
const btn8 = document.querySelector("#btnJoin");
const btn9 = document.querySelector("#btnIncludes");
const btn10 = document.querySelector("#btnSort");
const btn11 = document.querySelector("#btnReverse");
const btn12 = document.querySelector("#btnMap");
const btn13 = document.querySelector("#btnReduce");
const btn14 = document.querySelector("#btnFilter");
const btn15 = document.querySelector("#btnSome");
const btn16 = document.querySelector("#btnEvery");
const btn17 = document.querySelector("#btnFind");
const btn18 = document.querySelector("#btnKeys");
const btn19 = document.querySelector("#btnValues");
const btn20 = document.querySelector("#btnEntry");
// Variables de los vectores de la interfaz de usuario 

function inicio() {
  const vector1 = [2, 5, 2, 4, 6, 8, 9, 6];
  const vector2 = ["paco", "lola", "pedro"];
  const vector3 = [
    {
      titulo: "Los lunes al sol",
      minutos: 120,
    },
    {
      titulo: "La delgada línea roja",
      minutos: 120,
    },
    {
      titulo: "Bienvenido MrMarsall",
      minutos: 93,
    },
  ];
// Agregando eventos a los botones de la interfaz de usuario
//Boton 1: Añadir un número aleatorio al vector1 con el evento click y push
  btn1.addEventListener("click", () => {
    let numRandom = Math.floor(Math.random() * 100);
    vector1.push(numRandom);
    console.log(vector1);
  });
  // Boton 2: Añadir un nombre al vector2 con el evento click y push
  btn2.addEventListener("click", () => {
    let nombre = prompt("Escribe un nombre:");
    vector2.push(nombre);
    console.log(vector2);
  });
  // Boton 3: Añadir un objeto al vector3 con el evento click y push
  btn3.addEventListener("click", () => {
    let pelicula = prompt("Escribe un nombre:");
    let minutos = prompt("cuantos minutos tiene:");

    vector3.push({ titulo: pelicula, minutos: minutos });

    console.log(vector3);
  });
  // Boton 4: Eliminar el último número del vector1 con el evento click y pop
  btn4.addEventListener("click", () => {
    const vector = vector1.pop();
    console.log(vector1);
    console.log(vector);
  });
  // Boton 5: Añadir un número aleatorio al principio del vector1 con el evento click y unshift
  btn5.addEventListener("click", () => {
    let numRandom = Math.floor(Math.random() * 100);
    vector1.unshift(numRandom);
    console.log(vector1);
  });
  // Boton 6: Eliminar el primer número del vector1 con el evento click y shift
  btn6.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.shift();
    console.log(vector);
  });
  // Boton 7: Crear un nuevo vector con los elementos del vector1 desde la posición 2 hasta la 5 con el evento click y slice
  btn7.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.slice(2, 5);
    console.log(vector);
  });
  // Boton 8: Crear un nuevo vector con los elementos del vector2 unidos por un punto y coma con el evento click y join
  btn8.addEventListener("click", () => {
    console.log(vector2);
    const vector = vector2.join(";");
    console.log(vector);
  });
  // Boton 9: Comprobar si un elemento está en el vector2 con el evento click y includes
  btn9.addEventListener("click", () => {
    console.log(vector2);
    const elemento = prompt("introduce el valor:");
    const validar = vector2.includes(elemento);
    if (validar) {
      console.log("esta en el array");
    } else {
      console.log("no esta en el array");
    }
  });
  // Boton 10: Ordenar el vector1 con el evento click y sort
  btn10.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.sort();
    console.log(vector);
  });
  // Boton 11: Ordenar el vector1 en orden inverso con el evento click y reverse
  btn11.addEventListener("click", () => {
    console.log(vector1);
    const vector = vector1.sort().reverse();
    console.log(vector);
  });
  // Boton 12: Crear un nuevo vector con los elementos del vector3 multiplicados por 2 con el evento click y map
  btn12.addEventListener("click", () => {
    console.log(vector3);
    const vectorMap = vector3.map((num) => num.minutos / 2);
    console.log(vectorMap);
  });
  // Boton 13: Crear un nuevo vector con los elementos del vector3 multiplicados por 2 con el evento click y reduce
  btn13.addEventListener("click", () => {
    console.log(vector3);
    const vectorReduce = vector3.reduce((num2, num) => num.minutos * num2, 1);
    console.log(vectorReduce);
  });
  // Boton 14: Crear un nuevo vector con los elementos del vector3 que tienen más de 100 minutos con el evento click y filter
  btn14.addEventListener("click", () => {
    console.log(vector3);
    const vectorFilter = vector3.filter((num) => num.minutos > 100);
    console.log(vectorFilter);
  });
  // Boton 15: Comprobar si un elemento está en el vector3 con el evento click y some
  btn15.addEventListener("click", () => {
    const titulo = prompt("introduce el tiutlo");
    console.log(vector3);
    const validar = vector3.some((num) => num.titulo == titulo);
    if (validar) {
      console.log(titulo + " esta disponible ");
    } else {
      console.log(titulo + " no esta disponible ");
    }
    console.log(vector3);
  });
  // Boton 16: Comprobar si todos los elementos del vector3 tienen más de 100 minutos con el evento click y every
  btn16.addEventListener("click", () => {
    const minutos = prompt(
      "introduce lo minutos minimos que te gustaria que tenrgas las peliculas"
    );
    console.log(vector3);
    const validar = vector3.every((num) => num.minutos >= Number(minutos));
    if (validar) {
      console.log(
        "todas nuestras peliculas superan los " + minutos + " minutos"
      );
    } else {
      console.log(
        "hay algunas peliculas que no superan los " + minutos + " minutos"
      );
    }
    console.log(vector3);
  });
  // Boton 17: Mostrar la primera película que tiene exactamente el número de minutos introducido por el usuario con el evento click y find
  btn17.addEventListener("click", () => {
    const minutos = prompt(
      "introduce lo minutos minimos que te gustaria que tenrgas las peliculas"
    );
    console.log(vector3);
    const primeraPelicula = vector3.find(
      (num) => num.minutos == Number(minutos)
    );
    console.log(primeraPelicula);
  });
  // Boton 18: Mostrar las claves de la primera película del vector3 con el evento click y keys
  btn18.addEventListener("click", () => {
    console.log(vector3);

    vector3.forEach((element) => {
      primeraPelicula = Object.keys(element);
      console.log(primeraPelicula);
    });
  });
  // Boton 19: Mostrar los valores de la primera película del vector3 con el evento click y values
  btn19.addEventListener("click", () => {
    const peliculas = vector3.filter((num) => num.minutos > 100);
    console.log(peliculas);
    peliculas.forEach((element) => {
      const Pelicula = Object.values(element);
      console.log(Pelicula);
    });
  });
  // Boton 20: Mostrar el título y minutos de las películas que tienen exactamente 120 minutos
  btn20.addEventListener("click", () => {
    const peliculas = vector3.filter((num) => num.minutos === 120);
    console.log(peliculas);
    peliculas.forEach((element) => {
      const Pelicula = Object.entries(element);
      console.log(Pelicula);
    });
  });
}
