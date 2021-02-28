import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {AppRoutingModule} from '../../app-routing.module';
import {HeroesModule} from '../heroes/heroes.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HeroesModule
  ]
})
export class DashboardModule { }
