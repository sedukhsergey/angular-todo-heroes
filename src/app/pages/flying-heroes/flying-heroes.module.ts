import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlyingHeroesComponent} from './flying-heroes.component';
import { FlyingHeroesPipe } from './flying-heroes.pipe';



@NgModule({
  declarations: [FlyingHeroesComponent, FlyingHeroesPipe],
  imports: [
    CommonModule
  ],
  exports: [FlyingHeroesComponent],
})
export class FlyingHeroesModule { }
