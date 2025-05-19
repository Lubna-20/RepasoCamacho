import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Clasecoche } from './clasecoche';

@Injectable({
  providedIn: 'root'
})
export class ServiciococheService {
  constructor(private httpCoche:HttpClient) { }

  //aqui mostramos el servicio para leer los coches
  leerCoches():Observable<Clasecoche[]>{
    return this.httpCoche.get<Clasecoche[]>('http://localhost/serviciosAngular/serviciosCOCHES/listadoCoches.php');
  }

  //aqui mostramos el servicio para crear los coches
  crearCoches(coche:Clasecoche){
    return this.httpCoche.post<Clasecoche>('http://localhost/serviciosAngular/serviciosCOCHES/insertarCoche.php',coche);
  }

 //aqui mostramos el servicio para eliminar los coches donde le tenemos que pasar el objeto de la clase coche y en
 //el servicio por donde lo queremos borrar
  eliminarCoche(coche:Clasecoche){
    return this.httpCoche.post<Clasecoche>('http://localhost/serviciosAngular/serviciosCOCHES/eliminarCoche.php',coche)
  }

  //aqui mostramos el servicio para modificar los coches donde le tenemos que pasar el objeto de la clase coche
  modificarCoche(coche:Clasecoche){
    return this.httpCoche.post<Clasecoche>('http://localhost/serviciosAngular/serviciosCOCHES/editarCoches.php',coche)
  }
}
