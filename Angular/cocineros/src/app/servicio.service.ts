import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaseCocinero } from './clase-cocinero';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpCocinero:HttpClient) { }
  leerCocineros():Observable<ClaseCocinero[]>{
    return this.httpCocinero.get<ClaseCocinero[]>("http://localhost/servidoresAngular/listadoCocineros.php");
  }
}
