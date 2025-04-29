fetch("paises.json")
.then(respuesta=>respuesta.json())
.then(datos=>mostrarDatos(datos));

function mostrarDatos(datos){
    //console.log(datos)
    // const continente=prompt("Teclea continenente (Asia,América,Europa,Oceanía,África)")
    // const vectorXContinente=datos.filter(nombreC=>nombreC.Continente==continente)
    // .sort((a,b)=>b.Población-a.Población);
    // console.log(vectorXContinente)

    //paises ordenados por continentes (agrupación de países por continente)
//  const vectorOrdenadosXcont=datos.
//  sort((a,b)=>a.Continente.localeCompare(b.Continente)).map(nombre=>nombre.Pais);
//  console.log(vectorOrdenadosXcont)
 //10 países con más población
    //  const copiaVector=datos.slice();
    //   const vectorMasPoblacion=copiaVector.sort((a,b)=>b.Población-a.Población).slice(0,10);
    //   for (let i=0;i<10;i++){
    //     console.log(vectorMasPoblacion[i])

    //   }
    const copiaVector=datos.slice();
    const PaisesAmerica=copiaVector.filter(c=>c.Continente=="América");
    console.log(PaisesAmerica)
    var sumaPoblacion=0;
    PaisesAmerica.forEach(item=>{
       sumaPoblacion+=item.Población;
    })
    const MediaP=sumaPoblacion/PaisesAmerica.length
    console.log(MediaP.toFixed(2))

    // const NombrePais=prompt("teclea nombre de país");
    // const objetoP=copiaVector.find(x=>x.Pais==NombrePais)
    // console.log(objetoP)

    //población mundial con reduce

    const poblacionMundial=copiaVector.reduce((acumulado,pais)=>acumulado+pais.Población,0);
    console.log(poblacionMundial)

    //superficie Mundial
    const superficieMundial=copiaVector.reduce((acumulado,pais)=>acumulado+pais.Superficie,0);
    console.log(superficieMundial)

    //pais con más población 
    const PaisMasPoblacion=copiaVector.sort((a,b)=>b.Población-a.Población);
    console.log (PaisMasPoblacion[0])

    //país con menos población

    const PaisMenosPoblacion=copiaVector.sort((a,b)=>a.Población-b.Población);
    console.log (PaisMenosPoblacion[0])
}