const imagenes = [];
const rutaImanenes = "https://randomuser.me/api/portraits/lego/";
//pedir por teclado las dimensiones de la pantalla de juego
let filas = parseInt(prompt("Introduce el número de filas:"));
let columnas = parseInt(prompt("Introduce el número de columnas:"));
const total = filas * columnas;
//antes de mostrar la interface monto el arrayimagenes
for (let i = 0; i < total; i++) {
    imagenes.push(rutaImanenes+Math.floor(Math.random() * 9) + ".jpg");


}
//interfaces graficas
const tablaImagenes = document.createElement("table");
tablaImagenes.style.border = "1px solid black";
tablaImagenes.setAttribute("id", "tablaImg");
document.body.appendChild(tablaImagenes);
//construir filas y colimnas
let indice = 0;
for (let f = 0; f < filas; f++) {
    const fila = document.createElement("tr");
    tablaImagenes.appendChild(fila);
    for (let c = 0; c < columnas; c++) {
        const nuevacelda = document.createElement("td");
        fila.appendChild(nuevacelda);
        let nuevaimg = document.createElement("img");
        nuevaimg.src = imagenes[indice];
        indice++;
        console.log(indice);
        nuevaimg.style.width = "100px";
        nuevaimg.style.height = "100px";
        nuevacelda.appendChild(nuevaimg);
        nuevaimg.addEventListener("click", ()=> {
            eliminar(nuevaimg.src);
            
        });
    }
    
}
const nuevatabla = document.createElement("table");
nuevatabla.style.border = "1px solid black";
document.body.appendChild(nuevatabla);

function eliminar(nuevaimg) {
    const totalimg = document.querySelectorAll("#tablaImg img");
    for (let i = 0; i < totalimg.length; i++) {
        if(totalimg[i].src==nuevaimg.src){
            totalimg[i].style.visibility = "hidden";

            let nuevafilacopia = document.createElement("tr");
            let nuevaceldacopia = document.createElement("td");
            nuevaceldacopia.appendChild(nuevaimg);
            nuevafilacopia.appendChild(nuevaceldacopia);
            nuevatabla.appendChild(nuevafilacopia);
            nue
            console.log("se ha eliminado la imagen");
           

        }
    }

}
