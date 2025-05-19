import { Component, OnInit } from '@angular/core';

import { ServicioCochesService } from '../servicio-coches.service';
import { Clasecoche } from '../clasecoche';

@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent {
modificarCoche() {
  this.http.modificarCoche(this.cocheSeleccionado).subscribe((x:Clasecoche)=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
  })
}
crearCoche() {
  return this.http.crearCoche(this.cocheSeleccionado).subscribe((x:Clasecoche)=>{
    this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
    alert ("Coche/s creado/s");
  })

}
  coche!:Clasecoche;
listadoCoches!:Clasecoche[];
cocheSeleccionado:Clasecoche={
  color: '',
  marca: '',
  modelo: '',
  consumo: 0,
  precio: 0,
  kms: 0,
  tipoMotor: '',
  matricula: ''
}
eliminar(c: Clasecoche) {
 this.http.eliminarCoche(c).subscribe((x:Clasecoche)=>{
   this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
   alert ("Coche/s eliminado/s");
 })
}
seleccionar(c: Clasecoche) {
this.cocheSeleccionado=c;
}
constructor(private http:ServicioCochesService){
 this.http.leerCoches().subscribe(x=>this.listadoCoches=x);
}


}
