import { NgModule } from '@angular/core';
import { ShLibraryComponent } from './sh-library.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ShLibraryComponent,
    InputComponent
  ],
  imports: [
  ],
  exports: [
    ShLibraryComponent
  ]
})
export class ShLibraryModule { }
