fetch('meteo.json')
    .then(respuesta => respuesta.json())
    .then(contenido => mostrar (contenido));
function mostrar(contenido) {
    const tabla = document.createElement('table');
    document.body.appendChild(tabla);
    tabla.border = '1px solid black';
    const cabecera = document.createElement('thead');
    tabla.appendChild(cabecera);
    //encabezamiento 1
    const cabecera1 = document.createElement('td');
    cabecera1.textContent = 'Ciudad';
    cabecera.appendChild(cabecera1);
    //encabezamiento 2
    const cabecera2 = document.createElement('td');
    cabecera2.textContent = 'Lluvia';
    cabecera.appendChild(cabecera2);
    //encabezamiento 3
    const cabecera3 = document.createElement('td');
    cabecera3.textContent = 'Temp Max';
    cabecera.appendChild(cabecera3);
    //encabezamiento 4
    const cabecera4 = document.createElement('td');
    cabecera4.textContent = 'Temp Min';
    cabecera.appendChild(cabecera4);
  
   
    let totalLluvia = 0;
    let totalTempMax = 0;
    let totalTempMin = 0;
    let ciudadMaxLluvia = contenido[0];
    let ciudadMaxTemp = contenido[0];
    let ciudadAMinTemp = contenido[0];
    //LA MEDIA 

    contenido.forEach((item,indice )=> {
        console.log(item.nombreCiudad);
        const nuevaFila = document.createElement('tr');
        tabla.appendChild(nuevaFila);
        //COLUMNA NOMBRE
        const nuevoNombre = document.createElement('td');
        nuevoNombre.textContent = item.nombreCiudad;
        nuevaFila.appendChild(nuevoNombre);
        //COLUMNA lluvia
        const nuevaLluvia = document.createElement('td');
        nuevaLluvia.textContent = item.litrosLluvia;
        nuevaFila.appendChild(nuevaLluvia);
        //COLUMNA tempmax
        const nuevaTempMax = document.createElement('td');
        nuevaTempMax.textContent = item.temperaturaMax;
        nuevaFila.appendChild(nuevaTempMax);
        //COLUMNA tempmin
        const nuevaTempMin = document.createElement('td');
        nuevaTempMin.textContent = item.temperaturaMin;
        nuevaFila.appendChild(nuevaTempMin);

        //calcular media 
       totalLluvia += item.litrosLluvia;
       totalTempMax += item.temperaturaMax;
       totalTempMin += item.temperaturaMin;
       //compara para obtener los maximos
       if (item.litrosLluvia > ciudadMaxLluvia.litrosLluvia) {
            ciudadMaxLluvia = item;
        }
       if (item.temperaturaMax > ciudadMaxTemp.temperaturaMax) {
            ciudadMaxTemp = item;
        }
         if (item.temperaturaMin < ciudadAMinTemp.temperaturaMin) {
                ciudadAMinTemp = item;
         }


      
});

//calcular la media 


let mediaLluvia = totalLluvia / contenido.length;
let pLluvia = document.createElement('p');
pLluvia.textContent = 'La media de lluvia es --> '  +mediaLluvia.toFixed(2);
document.body.appendChild(pLluvia);
let mediaTempMax = totalTempMax / contenido.length;
let pTempMax = document.createElement('p');
pTempMax.textContent = 'La media de temperatura Max es --> ' + mediaTempMax.toFixed(2);
document.body.appendChild(pTempMax);
let mediaTempMin = totalTempMin / contenido.length;
let pTempMin = document.createElement('p');
pTempMin.textContent = 'La media de temperatura Min es --> ' + mediaTempMin.toFixed(2);

document.body.appendChild(pTempMin);

//ciudad con max lluvia
let pCiudadMaxLluvia = document.createElement('p');
pCiudadMaxLluvia.textContent = 'La ciudad mas lluviosa es ' + ciudadMaxLluvia.nombreCiudad + ' con ' + ciudadMaxLluvia.litrosLluvia + ' litros';
document.body.appendChild(pCiudadMaxLluvia);
//ciudad con max temperatura
let pCiudadMaxTemp = document.createElement('p');
pCiudadMaxTemp.textContent = 'La ciudad con la temperatura Max es ' + ciudadMaxTemp.nombreCiudad + ' con ' + ciudadMaxTemp.temperaturaMax + ' grados';
document.body.appendChild(pCiudadMaxTemp);
//ciudad con la min temperatura
let pCiudadMinTemp = document.createElement('p');
pCiudadMinTemp.textContent = 'La ciudad con la temperatura Min es ' + ciudadAMinTemp.nombreCiudad + ' con ' + ciudadAMinTemp.temperaturaMin + ' grados';
document.body.appendChild(pCiudadMinTemp);


}
