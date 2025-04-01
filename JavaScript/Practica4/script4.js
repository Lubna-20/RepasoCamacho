window.onload = inicio;

function inicio() {
   var vectorp = document.querySelectorAll(".texto");
    console.log(vectorp);
    vectorp.forEach((item , indice)=>{
       if(indice==0){
           item.style.color = "red";
       }
       if(indice==1){
           item.style.color = "blue";
       }
       if(indice==2){
           item.style.color = "green";
       }
       if(indice==3){
           item.style.color = "yellow";
       }
       if(indice==4){
           item.style.color = "orange";
       }
       if(indice==5){
           item.style.color = "purple";
       }

    })
}


