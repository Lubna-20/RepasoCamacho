//identificar etiquetas o componenetes del DOM Document Object Model
let botones = document.querySelectorAll("button");
let texto = document.querySelector("h1");
botones[0].addEventListener("click", function(){
    texto.textContent = "Nuevo texto";
});
botones[1].addEventListener("click", function(){
    texto.textContent = "Hola Mundo";
});

botones.forEach((item,index)=>{
    
})