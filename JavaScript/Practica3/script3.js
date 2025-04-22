window.onload = inicio;

function inicio() {
   var vectorLi = document.querySelectorAll(".elemento");
   console.log(vectorLi);
   let boton = document.querySelector("#cambiar");
   boton.addEventListener("click", function(){
    //Generar un color aleatorio en formato hexadecimal (#000000)
    

    vectorLi.forEach((item , indice)=>{
        item.style.color = cadenaColores();
        })
   });
}

//Funcion para generar un color aleatorio en hexadecimal
function cadenaColores() {
   let cadenaColores = "#"
    let posiblesColores = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
     //Generar 6 caracteres aleatorios entre 0 y 15 (hexadecimal)
    for (let i = 0; i < 6; i++) {
        cadenaColores += posiblesColores[(Math.floor(Math.random() * 16))];
    }
    return cadenaColores;
}