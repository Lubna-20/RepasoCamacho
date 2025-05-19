import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoCochesComponent } from './listado-coches/listado-coches.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Clasecoche } from './clasecoche';
import { ServicioCochesService } from './servicio-coches.service';
@NgModule({
  declarations: [
    AppComponent,
    ListadoCochesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ListadoCochesComponent,Clasecoche,ServicioCochesService]
})
export class AppModule { }
