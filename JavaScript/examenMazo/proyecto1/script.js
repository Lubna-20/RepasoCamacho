let textos = [];
// Cargar el archivo JSON
fetch('texto.json')
  .then(response => response.json())
  .then(data => {
    // Guardar los textos en la variable global
    textos = data;
    comienzoTipear();
  })

  function comienzoTipear() {
    function tipear(){
        
        nuevotexto.textContent += textos.texto[indice];
    }


    tiempo = setInterval(tipear,textos.velocidad);
  }