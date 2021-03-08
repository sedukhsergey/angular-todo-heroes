import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResizeValueComponent} from './resize-value.component';



@NgModule({
  declarations: [ResizeValueComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ResizeValueComponent
  ]
})
export class ResizeValueModule { }
