import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchCaseComponent } from './switch-case.component';
import {FormsModule} from '@angular/forms';
import {RadioModule} from '../../components/radio/radio.module';
import {InputModule} from '../../components/input/input.module';
import {CheckboxModule} from '../../components/checkbox/checkbox.module';
import {SelectModule} from '../../components/select/select.module';



@NgModule({
  declarations: [SwitchCaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioModule,
    InputModule,
    CheckboxModule,
    SelectModule
  ]
})
export class SwitchCaseModule { }
