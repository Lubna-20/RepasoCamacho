import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clasecoche } from '../clasecoche';
import { ServiciococheService } from '../serviciocoche.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { InsertarCocheComponent } from '../insertar-coche/insertar-coche.component';


@Component({
  selector: 'app-listado-coches',
  templateUrl: './listado-coches.component.html',
  styleUrls: ['./listado-coches.component.css']
})
export class ListadoCochesComponent {
crearCoche() {
  this.cuadroDialogo.open( InsertarCocheComponent), {
    data:new Clasecoche('','','','',0,0,0,'')
  };
}

  constructor( public cuadroDialogo:MatDialog, private http:ServiciococheService){
    this.http.leerCoches().subscribe((x:Clasecoche[])=>{
      this.dataSource.data=x;
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort;
      console.log(x);
    })
  }

  eliminarCoche(coche: Clasecoche) {
    if (confirm("¿Está seguro de que desea eliminar este coche : " + coche.matricula + "?")) {
      this.http.eliminarCoche(coche).subscribe((x: Clasecoche) => {
        this.dataSource.data = this.dataSource.data.filter((item: Clasecoche) => item.matricula !== coche.matricula);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log("Coche eliminado");
      });
    }
  }


  editarCoche(coche: Clasecoche) {

  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource=new MatTableDataSource<Clasecoche>;

  //el displayed column va a ser un array de string donde va a tener las columnas de nuestras tablas
  displayedColumns: String[]=['matricula','color','marca','modelo','consumo','precio','kms','tipoMotor','editar','eliminar'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
