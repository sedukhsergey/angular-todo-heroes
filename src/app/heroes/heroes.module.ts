import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HeroBadgeComponent} from './hero-badge/hero-badge.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {AutofocusDirective} from '../../directives/autofocus.directive';
import {ClickStopPropagationDirective} from '../../directives/click-stop-propagation.directive';
import {HeroesComponent} from './heroes.component';



@NgModule({
  declarations: [HeroesComponent, HeroBadgeComponent, HeroDetailComponent],
  exports: [HeroesComponent, HeroBadgeComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class HeroesModule { }
