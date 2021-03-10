import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchCaseComponent } from './switch-case.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [SwitchCaseComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SwitchCaseModule { }
