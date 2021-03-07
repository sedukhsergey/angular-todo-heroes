import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContainerComponent } from './modal-container.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [ModalContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ModalContainerComponent]
})
export class ModalContainerModule { }
