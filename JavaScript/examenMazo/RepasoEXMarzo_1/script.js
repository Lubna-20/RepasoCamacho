
let textoData = []; //array para almacenar los datos del json

fetch("texto.json")  //ruta del fichero
.then(respuesta=>respuesta.json()) //respuesta
.then(data=>{
    //carga del array desde el json
    textoData = data; //almacena los datos en el array
    //comienza a tipear los datos del array en los div correspondientes
    comienzoTipear(); //por cada item del array se llama al método
})

function comienzoTipear(){
    textoData.forEach((item, indice) => {
        const contenedorPrincipal = document.createElement("div"); //crea un div
        const h5texto = document.createElement("h5"); //crea un elemento h5
        const h5velocidad = document.createElement("h5"); //crea un elemento h5
        const cajatexto = document.querySelector("#parrafoTexto"); //selecciona el div de texto
        const cajavelocidad = document.querySelector("#parrafoVelocidad"); //selecciona el div de velocidad
        h5texto.textContent = item.texto; //asigna el texto del json al h5
        h5velocidad.textContent = item.velocidad;
        document.body.appendChild(contenedorPrincipal); //agrega el div al body
        contenedorPrincipal.appendChild(h5texto); //agrega el h5 de velocidad al div principal
        contenedorPrincipal.appendChild(h5velocidad); //agrega el div de velocidad al div principal
        var parrafoDeletreo = document.createElement("p"); //crea un elemento p
        contenedorPrincipal.appendChild(parrafoDeletreo); //agrega el p al div principal
        var indiceParcial = 0; //variable para almacenar el índice del texto
        function tipear(){
            parrafoDeletreo.textContent += item.texto[indiceParcial]; //asigna el texto del json al p
            indiceParcial++; //incrementa el índice del texto
            contenedorPrincipal.appendChild(parrafoDeletreo); //agrega el p al div principal
            if(indiceParcial == item.texto.length){ //si el índice es igual al tamaño del texto
                clearInterval(temporizador); //detiene el temporizador

            }
        }

        const temporizador = setInterval(tipear, item.velocidad) //inicia el temporizador
        //llama a la función para tipear el texto


    })
 } //recorre el array