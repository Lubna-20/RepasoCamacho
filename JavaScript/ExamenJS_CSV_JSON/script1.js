fetch("paises.csv")
.then(respuesta=>respuesta.text())
.then(datos=>mostrar(datos));

function mostrar(datos){
  const lineas=datos.split("\n");
  const cabecera=lineas[0].split(";")
  //construyo 1 sola tabla
  const NuevaTabla=document.createElement("table");
  NuevaTabla.border="2px";
  NuevaTabla.style.margin="0 auto";
  NuevaTabla.style.borderCollapse="Collapse";
  NuevaTabla.style.backgroundColor="lightblue"
  document.body.appendChild(NuevaTabla);
  //construyo 1 sola cabecera
  const NuevaCabecera=document.createElement("thead");
  //construyo 5 encabezamientos (nombre, capital,continente...)
  cabecera.forEach(head=>{
    const nuevoTh=document.createElement("th");
    //por cada vuelta de bucle se añade un nuevo encabezamiento
    nuevoTh.textContent=head;
    NuevaCabecera.appendChild(nuevoTh);
  })
  NuevaTabla.appendChild(NuevaCabecera);
  var totalSuperficie=0;
  var paisesEuropa=0;
  lineas.forEach((item,indice)=>{
    if (indice>0){
      //cada linea del csv se corresponde con un tr
      const nuevoTR=document.createElement("tr");
      NuevaTabla.appendChild(nuevoTR);
      const pais=item.split(";");
      //la descomposición del tr con split devulve un array de 5 campos
      pais.forEach(campo=>{
        const poblacion=pais[3]
        const superficie=pais[4];
        const continente=pais[2];
        const nuevoTD=document.createElement("td");
        nuevoTD.textContent=campo;
        nuevoTR.appendChild(nuevoTD);
      //fin del foreach de columnas
      //condición de población y superficie
      console.log()
         if (Number(poblacion)>10000000 && Number(poblacion)<100000000
         && Number(superficie)>500000 && Number(superficie)<1000000){
            nuevoTR.style.backgroundColor="green"
         }
         //paises de Europa poblacion>30000000 y superficie<500000
         if (continente=="Europa" && Number(poblacion)>30000000 && Number(superficie)<520000){
            nuevoTR.style.backgroundColor="yellow"
         }
         if (continente=="Asia" || continente==="America"){
            nuevoTD.style.color="red"
         }
         if (continente=="Europa"){
            totalSuperficie+=Number(superficie);
            paisesEuropa++;
         }
       })
    }
    //fin del foreach de filas
  })
  var mediaSupEuropa=(totalSuperficie/paisesEuropa);
  console.log(mediaSupEuropa.toFixed(2))
}