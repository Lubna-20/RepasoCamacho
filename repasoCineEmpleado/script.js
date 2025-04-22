fetch("cine.json")
  .then((respuesta) => respuesta.json())
  .then((data) => filtrosCine(data));
function filtrosCine(listadoCines) {
  let vectorCines = listadoCines.slice();
  console.log(vectorCines);
  const filtrosCine1 = vectorCines
    .filter((cine) => cine.Minutos < 100)
    .map((cine) => cine.Título);
  console.log(filtrosCine1);
  //Titulo de la pelivula que dura mas minutos
  let peliculaMasLarga = vectorCines[0];
  vectorCines.forEach((item) => {
    if (item.Minutos > peliculaMasLarga.Minutos) {
      peliculaMasLarga = item;
    }
  });
  console.log(peliculaMasLarga);
  console.log(peliculaMasLarga.Título);

}

fetch("empleados.json")
  .then((respuesta) => respuesta.json())
  .then((data) => filtrosEmpleados(data));
function filtrosEmpleados(listadoEmpleados) {
  //copia del vector original
  let vectorEmpleados = listadoEmpleados.slice();
  console.log(vectorEmpleados);

  //Nombre de los empleados menos de 30 años
  const empleadosMenos30 = vectorEmpleados
    .filter((empleado) => empleado.Edad < 30)
    .map((empleado) => empleado.Nombre);
  console.log(empleadosMenos30);

  //Media de edad de los empleados
  const edades = vectorEmpleados.map((empleado) => empleado.Edad);
  const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
  const mediaEdades = sumaEdades / edades.length;
  console.log(edades);
  console.log(sumaEdades);
  console.log(mediaEdades);

  //Nombre trabajador que mas cobra
  let trabajadorMasCobra = vectorEmpleados[0];
  vectorEmpleados.forEach((item) => {
    if (item.Salario > trabajadorMasCobra.Salario) {
      trabajadorMasCobra = item;
    }
  });
  console.log(trabajadorMasCobra.Nombre);

  //listar trabajadoreas ordenados por salario
  const empleadosOrdenados = vectorEmpleados
    .sort((a, b) => a.Salario - b.Salario)
    .reverse();
  console.log("Ordenado por salario :", empleadosOrdenados);

  //ORDENASDOS ALFABETICAMENTE POR NOMBRE
  let vectorAuxNombre = vectorEmpleados.slice();
  const empleadosOrdenadosNombre = vectorAuxNombre.sort((a, b) =>
    a.Nombre.localeCompare(b.Nombre)
  );
  console.log("Ordenado por Nombre", empleadosOrdenadosNombre);

  //Cuantos trabajadores trabajan con cargo Desarrollador Frontend 
  let vectorAuxCargo = vectorEmpleados.slice();
  const empleadosDesarrollador = vectorAuxCargo.filter(
    (empleado) => empleado.Cargo === "Desarrollador Frontend"
  );
  console.log(empleadosDesarrollador); 
}
