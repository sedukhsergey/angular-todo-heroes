import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesServerComponent } from './heroes-server.component';



@NgModule({
  declarations: [HeroesServerComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroesServerComponent]
})
export class HeroesServerModule { }
