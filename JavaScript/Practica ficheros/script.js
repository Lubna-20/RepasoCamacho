fetch('empleados.csv')
    .then(respuesta => respuesta.text())
    .then(data => mostrar (data));
function mostrar(data) {
    //construir nueva tabla
    const tabla = document.createElement('table');
    tabla.border = '1px solid black';
    tabla.style.borderCollapse = 'collapse';
    tabla.style.width = '100%';
    tabla.style.textAlign = 'center';
    document.body.appendChild(tabla);

    let filas = [];
    filas = data.split('\n');
    let cabecera = filas[0];
    let elementoCabecera = cabecera.split(',');
    const filaCabecera = document.createElement('thead');
    tabla.appendChild(filaCabecera);
    elementoCabecera.forEach((item, indice) => {
        const nuevacabecera = document.createElement('th');
        nuevacabecera.textContent = item;
        filaCabecera.appendChild(nuevacabecera);

       
    })

    //crear el cuerpo de la tabla
    const cuerpoTabla = document.createElement('tbody');
    tabla.appendChild(cuerpoTabla);
    //recorrer el array de filas
    filas.forEach((item, indice) => {
        if (indice > 0) {
            const fila = document.createElement('tr');
            cuerpoTabla.appendChild(fila);
            let elementoFila = item.split(',');
            elementoFila.forEach((item, indice) => {
                const nuevoElemento = document.createElement('td');
                nuevoElemento.textContent = item;
                fila.appendChild(nuevoElemento);
            })
        }
    })

}