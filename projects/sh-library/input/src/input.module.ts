import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { InputComponent } from './components/input/input.component'

@NgModule({
    declarations: [InputComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [InputComponent]
})
export class InputModule { }
