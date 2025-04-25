fetch("paises.json")
  .then((response) => response.json())
  .then((datos) => mostrarDatos(datos));

function mostrarDatos(datos) {
  // const continrntes = prompt('Teclea continente (Asia, Europa, America, Africa, Oceania)');
  // const vectorXcontinente = datos.filter(nombreC => nombreC.Continente === continrntes)
  //.sort((a, b) => b.Poblacion-a.Poblacion)
  //console.log(vectorXcontinente)

  //PAISES ORDENADOS POR CONTINENTES(AGRUPACION DE PAISES POR CONTINENTES)
  const vectorOrdenadoPorContinente = datos.datos.sort((a, b) => a. Continente.localeCompare(b.Continente)).map(nombre=>nombre.Pais);

    console.log(vectorOrdenadoPorContinente);
}
