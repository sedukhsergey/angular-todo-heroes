import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DebounceComponent} from './debounce.component';



@NgModule({
  declarations: [DebounceComponent],
  exports: [
    DebounceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DebounceModule { }
