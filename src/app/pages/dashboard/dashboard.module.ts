import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AppRoutingModule} from '../../app-routing.module';
import {HeroesModule} from '../heroes/heroes.module';
import {ModalModule} from '../../modules/modal/modal.module';
import {ResizeValueModule} from '../../components/resize-value/resize-value.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeroesModule,
    ModalModule,
    ResizeValueModule
  ]
})
export class DashboardModule { }
