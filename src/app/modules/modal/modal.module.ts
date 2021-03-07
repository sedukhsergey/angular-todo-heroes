import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import {ModalContainerModule} from './modal-container/modal-container.module';
import {ModalFooterModule} from './modal-container/modal-footer/modal-footer.module';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    ModalContainerModule,
    ModalFooterModule
  ],
  exports: [ ModalComponent ]
})
export class ModalModule { }
