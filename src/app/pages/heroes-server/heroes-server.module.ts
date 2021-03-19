import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesServerComponent } from './heroes-server.component';
import {FormsModule} from '@angular/forms';
import {HeroesPaginationModule} from './heroes-pagination/heroes-pagination.module';



@NgModule({
  declarations: [HeroesServerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroesPaginationModule
  ],
  exports: [HeroesServerComponent]
})
export class HeroesServerModule { }
