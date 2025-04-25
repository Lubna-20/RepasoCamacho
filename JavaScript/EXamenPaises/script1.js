fetch('paises.csv')
    .then(respuesta => respuesta.text())
    .then(datos => mostrar(datos));
function mostrar(datos) {
    console.log(datos);
    //construir nueva tabla
    const tabla = document.createElement('table');
    tabla.border = '1px solid black';
    tabla.style.borderCollapse = 'collapse';
    tabla.style.width = '100%';
    tabla.style.textAlign = 'center';
   
    document.body.appendChild(tabla);

    const lineas = datos.split('\n');
    const cabecera = lineas[0].split(';');
    const filaCabecera = document.createElement('thead');
    filaCabecera.style.backgroundColor = 'lightblue';
    tabla.appendChild(filaCabecera);
    cabecera.forEach((itemCABE, indice) => {
        const nuevaCabecera = document.createElement('th');
        nuevaCabecera.textContent = itemCABE;
        filaCabecera.appendChild(nuevaCabecera);
    })
    //crear el cuerpo de la tabla
    const cuerpoTabla = document.createElement('tbody');
 
    tabla.appendChild(cuerpoTabla);
    //recorrer el array de filas
    lineas.forEach((itemlineas, indice) => {
        if (indice > 0) {
            const fila = document.createElement('tr');
            cuerpoTabla.appendChild(fila);
            let elementoFila = itemlineas.split(';');
            elementoFila.forEach((campoe, indice) => {
                const poblacion = elementoFila[3];
                const superficie = elementoFila[4];
                const continente = elementoFila[2];
                const nuevoElemento = document.createElement('td');
                nuevoElemento.textContent = campoe;
                fila.appendChild(nuevoElemento);
                //CONDICIONES
                console.log('poblacion', poblacion);
                if(Number(poblacion) > 1000000 && Number(poblacion) < 10000000
                    && Number(superficie) > 500000 && Number(superficie) < 1000000){
                    nuevoElemento.style.backgroundColor = 'lightgreen';
                }
                //paises de europa poblacion >30000000 y superficie < 500000
                if (continente === 'Europa' && Number(poblacion) > 30000000 && Number(superficie) < 500000) {
                    nuevoElemento.style.backgroundColor = 'lightyellow';
                }
                if(continente=== 'Asia'|| continente== 'América'){
                    nuevoElemento.style.backgroundColor = 'lightpink';
                }
                

                
                
            })
        }
    })

}