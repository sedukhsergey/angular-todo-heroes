import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PipesComponent } from './pipes.component';
import {FormsModule} from '@angular/forms';
import {ExponentialStrengthModule} from '../../pipes/exponential-strength/exponential-strength.module';



@NgModule({
  declarations: [PipesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExponentialStrengthModule
  ]
})
export class PipesModule { }
