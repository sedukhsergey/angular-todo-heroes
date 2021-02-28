import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MissionComponent} from './mission.component';
import {AstronautComponent} from './astronaut/astronaut.component';
import {ButtonModule} from '../../components/button/button.module';


@NgModule({
  declarations: [MissionComponent, AstronautComponent],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports: [MissionComponent]
})
export class MissionModule { }
