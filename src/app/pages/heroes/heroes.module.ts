import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HeroBadgeComponent} from './hero-badge/hero-badge.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes.component';
import {MessagesModule} from '../../modules/messages/messages.module';
import {AppRoutingModule} from '../../app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';


@NgModule({
  declarations: [HeroesComponent, HeroBadgeComponent, HeroDetailComponent, HeroSearchComponent],
  exports: [
    HeroesComponent,
    HeroSearchComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    MessagesModule,
  ]
})
export class HeroesModule { }
