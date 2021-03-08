import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {FormsModule} from '@angular/forms';
import {ModalModule} from '../../modules/modal/modal.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule
  ]
})
export class ModalPageModule { }
