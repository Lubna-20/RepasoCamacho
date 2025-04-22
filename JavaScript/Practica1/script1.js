window.onload= inicio;
var texto = document.querySelector("#texto");
var btn1 = document.querySelector("#cambiar");
var btn2 = document.querySelector("#retornar");
function inicio(){
  console.log("Hola Mundo");
  //identificar componentes html
   // let btn1a = document.getElementById("cambiar");
    let btn1 = document.querySelector("#cambiar");
    //console.log(btn1a);
    console.log(btn1);
    let btn2 = document.querySelector("#retornar");
    console.log(btn2);
    let texto = document.querySelector("#texto");
    console.log(texto);

    //asignar evento
    //OPCION 1
   /* btn1.addEventListener("click", function(){
        console.log("click en cambiar");
        texto.innerHTML = "Nuevo texto";
    });*/

    //con arrow function
    btn1.addEventListener("click", ()=>{
        console.log("click en cambiar");
        texto.textContent= "Nuevo texto";
    });
    btn1.onclick = function(){
        console.log("click en cambiar");
        texto.textContent= "Nuevo texto";
    }

    //OPCION 2
    /*function cambiarTexto(){
        console.log("click en cambiar");
        texto.innerHTML = "Nuevo texto";
    }
    btn1.addEventListener("click", cambiarTexto);

    //OPCION 3 ANONIMA
    btn1.addEventListener("click", function(){
        console.log("click en cambiar");
        texto.innerHTML = "Nuevo texto";
    });*/

    //evemto retornar
   /* btn2.addEventListener("click", function(){
        console.log("click en retornar");
        texto.innerHTML = "Hola Mundo";
    });*/
    btn2.onclick = function(){
        console.log("click en retornar");
        texto.textContent = "Hola Mundo";
    }
     

    

}
function cambiarTexto(){  
    console.log("click en cambiar");
    texto.textContent = "Nuevo texto";
}
function retornarTexto(){
    console.log("click en retornar");
    texto.textContent = "Hola Mundo";
}
// diferentes formas de cargar el script

/*window.addEventListener("DOMContentLoaded", function(){
  console.log("Hola Mundo");
});

window.addEventListener("load", function(){});*/