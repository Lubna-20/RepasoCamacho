//crear el contenedor principal estará dentro del contenedor del body 
const contenedorp = document.createElement('div');
contenedorp.style.backgroundColor = 'lightblue';
contenedorp.style.width = '100%';
contenedorp.style.height = '100%';
document.body.appendChild(contenedorp);

//apartado 1
const parrafo = document.createElement('p');
parrafo.textContent = 'Parrafo creado dinamicamente con JavaScript';
contenedorp.appendChild(parrafo);

//apartado 2 --> Al pulsar botón mostrar mensaje de alerta
const btn = document.createElement('button');
btn.textContent = '!Pulsar Click!';
contenedorp.appendChild(btn);
btn.addEventListener('click', () => {
    alert('¡Hola Mundo!');
    parrafo.textContent += '  has pulsado el botón';
}
);

//apartado 3 --> div con estilo
const div = document.createElement('div');
div.style.backgroundColor = 'lightcoral';
div.textContent = 'Div con estilo';
div.style.width = '200px';
div.style.height = '200px';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';
contenedorp.appendChild(div);

//apartado 4 --> listado items ubicados en un array
// crear una lista no ordenada (ul) y añadir los items del array
const listadoitems = ['item1', 'item2', 'item3', 'item4', 'item5'];
const listaul = document.createElement('ul');
contenedorp.appendChild(listaul);
listadoitems.forEach((item, indice) => {
    //crear cada elemento de la lista (li)
    const elementoli = document.createElement('li');
    // añadir el texto al elemento de la lista (li)
    elementoli.textContent = item;
    // añadir el elemento de la lista (li) al final de la lista no ordenada (ul)
    listaul.appendChild(elementoli);
});

contenedorp.appendChild(listaul);

//apartado 5 --> Crear un link que enlace con una imagen randmom
const imagen = document.createElement('img');
//dotarle de contenido
let jpgAleatorio = Math.floor(Math.random() * 100) + 1;
imagen.src = 'https://randomuser.me/api/portraits/men/'+jpgAleatorio+'.jpg';
//añadir accion 
imagen.addEventListener('mouseover', ()=>{
   //cambiar contenido cada vez que se pase el ratón por encima
    jpgAleatorio = Math.floor(Math.random() * 100);
    genero = Math.floor(Math.random() * 2);
    if (genero==0) {
        genero = "men";
    } else{
        genero = "women";
    }
    imagen.src = 'https://randomuser.me/api/portraits/'+genero+'/'+jpgAleatorio+'.jpg';
  
})

contenedorp.appendChild(imagen);

//apartado 6 --> tabla dinamica
/*const tabla = document.createElement('table');

tabla.border = '1';
let nfilas = prompt('Introduce el número de filas');
let ncolumnas = prompt('Introduce el número de columnas');
let contador = 0;
for (let f = 0; f < nfilas; f++) {
    const nuevafila = document.createElement('tr');
    tabla.appendChild(nuevafila);
    for (let c = 0; c < ncolumnas; c++) {
        const nuevacelda = document.createElement('td');
        contador++;
        nuevacelda.textContent = contador;
       // nuevacelda.textContent = Math.floor(Math.random() * 100);
        nuevafila.appendChild(nuevacelda);
    }
    
}

contenedorp.appendChild(tabla);*/

//apartado 7 -->Añadir en un formulario un input .
//crear los elementos del formulario
const formulario = document.createElement('form');
const input = document.createElement('input');
const boton = document.createElement('button');
//diseño y acciones
boton.textContent = 'Enviar';
input.type = 'text';
input.placeholder = 'Introduce tu nombre';
boton.type = 'submit';
boton.addEventListener('click',()=>{
    alert('Tu nombre es  '+input.value);
    input.value = '';
})

//añadir los elementos al contenedor principal
formulario.appendChild(input);
contenedorp.appendChild(formulario);
formulario.appendChild(boton);

//apartado 8 -->  Añadir items li dentro de un ul.

const elememntoli = document.createElement('input');
const botonañadir = document.createElement('button');
const nuevalista = document.createElement('ul');
botonañadir.textContent = 'Añadir';
botonañadir.addEventListener('click',()=>{
    const nuevoli = document.createElement('li');
    nuevoli.textContent = elememntoli.value;
    nuevalista.appendChild(nuevoli);
    elememntoli.value = '';
    
});
contenedorp.appendChild(elememntoli);
contenedorp.appendChild(botonañadir);
contenedorp.appendChild(nuevalista);



