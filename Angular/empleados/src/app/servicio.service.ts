import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ClaseEmpleados } from './clase-empleados';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private htttp:HttpClient) { }
  leerEmpleados():Observable<ClaseEmpleados[]>{
    return this.htttp.get<ClaseEmpleados[]>("http://localhost/servidoresAngular/listadoEmpleados.php");
  }
}
