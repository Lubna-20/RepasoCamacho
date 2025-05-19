import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClaseAltura } from './clase-altura';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private htttp:HttpClient) { }
  leerAlturas():Observable<ClaseAltura[]>{
    return this.htttp.get<ClaseAltura[]>("http://localhost/servidoresAngular/listadoAlturas.php");
  }
}
