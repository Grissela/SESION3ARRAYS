import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { PlanesComponent } from './planes/planes.component';



@NgModule({
  declarations: [
    TitleComponent,
    DescripcionComponent,
    PlanesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ /*exporto aqui*/ 
    TitleComponent,
    DescripcionComponent,
    PlanesComponent
  ]
})
export class BodyModule { }
