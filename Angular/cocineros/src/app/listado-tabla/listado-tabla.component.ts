import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClaseCocinero } from '../clase-cocinero';
import { ServicioService } from '../servicio.service';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-listado-tabla',
  templateUrl: './listado-tabla.component.html',
  styleUrls: ['./listado-tabla.component.css']
})
export class ListadoTablaComponent {
cocinero!: ClaseCocinero;
  constructor(private sevicioCocinero: ServicioService) {
    this.sevicioCocinero.leerCocineros().subscribe(x=>{
      this.dataSource.data=x;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })
  }

modificar(cocinero: ClaseCocinero) {

}
eliminar(id: number) {

}
//llamar al servicio constructor / onInit

dataSource= new MatTableDataSource<ClaseCocinero>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'nombre', 'imagen', 'descripcion', 'funcion','eliminar','modificar'];



  @ViewChild(MatSort) sort!: MatSort;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
