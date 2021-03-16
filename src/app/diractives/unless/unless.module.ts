import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UnlessDirective} from './unless.directive';



@NgModule({
  declarations: [UnlessDirective],
  imports: [
    CommonModule
  ],
  exports: [UnlessDirective]
})
export class UnlessModule { }
