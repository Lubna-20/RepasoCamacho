//Boton de generar 40 imagenes random ordenadas
const boton = document.createElement('button');
boton.textContent = 'Generar Imagenes';
boton.style.backgroundColor = 'lightblue';
boton.style.padding = '5px';
boton.style.margin = '0 auto';
boton.style.display = 'block';
document.body.appendChild(boton);

//crear contenedor de imagenes
const contenedor = document.createElement('div');
contenedor.style.display = 'flex';
contenedor.style.flexWrap = 'wrap';
contenedor.style.width = '50%';
contenedor.style.margin = '0 auto';


document.body.appendChild(contenedor);
boton.addEventListener('click', () => {
    let imagenes = [];
    //borrar imagenes anteriores
    contenedor.innerHTML = '';
    for ( let i=0; i<40; i++){
        let numRandom = Math.floor(Math.random() * 20);
        let ficheroCompleto = './img/'+ numRandom +'.JPG';
        imagenes.push(ficheroCompleto);
    }
    imagenes.sort();
    //recorrer eñ array de imagenes
    imagenes.forEach((item ,index) => {
        const imagen = document.createElement('img');
        imagen.src = item;
        imagen.alt = item;
        imagen.style.width = '100px';
        imagen.style.height = '100px';
        imagen.style.margin = '5px';
        imagen.style.border = '1px solid black';
        imagen.style.borderRadius = '10px';
        contenedor.appendChild(imagen);
        imagen.addEventListener('click', () => {
            mostrarRepeticiones(imagen.alt,imagenes);
    })
        })
    });
    function mostrarRepeticiones(imagen, imagenes) {
        console.log(imagen);
        let contador = 0;
        imagenes.forEach((item) => {
            if (item == imagen) {
                console.log(item);
                contador++;
            

            }
        });
        alert('numero de repeticiones de la imagen ' + imagen + ' es ' + contador);
    }