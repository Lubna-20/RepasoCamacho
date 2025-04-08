const imagenes=[];
const rutasImagenes="https://randomuser.me/api/portraits/lego/";
//pedir por teclado las dimensiones de la pantalla de juego
let filas=parseInt(prompt("teclea número de filas"));
let columnas=parseInt(prompt("teclea número columnas"));

const totalImagenes=filas*columnas;
//antes de montar la interface monto el arrayImagenes
for (let i=0;i<totalImagenes;i++){
    imagenes.push(rutasImagenes+Math.floor(Math.random()*9)+".jpg");
}
//interface gráfica

const tablaImagenes=document.createElement("table");
tablaImagenes.setAttribute("id","tablaImg");
document.body.appendChild(tablaImagenes);
//construir filas y columnas
let indice=0;
for (let f=0;f<filas;f++){
    let nuevaFila=document.createElement("tr");
    tablaImagenes.appendChild(nuevaFila);
    for (let c=0;c<columnas;c++){
        let nuevaCelda=document.createElement("td");
        nuevaFila.appendChild(nuevaCelda);
        let nuevaImg=document.createElement("img");
        nuevaImg.src=imagenes[indice];
        console.log(nuevaImg.src)
        indice++;
        console.log(indice);
        nuevaImg.style.width="100px"
        nuevaCelda.appendChild(nuevaImg);
        nuevaImg.addEventListener("click", ()=>{
            //alert (nuevaImg.src);
            eliminar(nuevaImg)
        })
    }
}
const nuevaTabla=document.createElement("table");
document.body.appendChild(nuevaTabla);
function eliminar(nuevaImg)
{
  const totalImg=document.querySelectorAll("#tablaImg img")
  for (let i=0;i<totalImg.length;i++){
    if (totalImg[i].src==nuevaImg.src){
        console.log("igualdades"+nuevaImg)
        //identifica la/(s) celda/(s) donde haces el click y la ocultas
        totalImg[i].style.visibility="hidden";
         //¿dónde muevo las imágenes iguales?
         let nuevaImagen=document.createElement("img");
         nuevaImagen.src=totalImg[i].src;
         document.body.appendChild(nuevaImagen)

    }
  }
}