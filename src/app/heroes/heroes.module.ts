import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HeroBadgeComponent} from './hero-badge/hero-badge.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes.component';
import { HeroDebounceComponent } from './hero-debounce/hero-debounce.component';



@NgModule({
  declarations: [HeroesComponent, HeroBadgeComponent, HeroDetailComponent, HeroDebounceComponent],
  exports: [HeroesComponent, HeroBadgeComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class HeroesModule { }
