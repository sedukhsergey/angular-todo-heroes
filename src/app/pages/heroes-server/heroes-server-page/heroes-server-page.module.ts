import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesServerPageComponent } from './heroes-server-page.component';



@NgModule({
  declarations: [HeroesServerPageComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroesServerPageComponent]
})
export class HeroesServerPageModule { }
