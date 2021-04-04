import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormComponent} from './reactive-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ReactiveFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ReactiveFormModule { }
