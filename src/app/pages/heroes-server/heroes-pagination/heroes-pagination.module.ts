import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesPaginationComponent } from './heroes-pagination.component';
import {PaginationModule} from '../../../modules/pagination/pagination.module';



@NgModule({
  declarations: [HeroesPaginationComponent],
  imports: [
    CommonModule,
    PaginationModule
  ],
  exports: [HeroesPaginationComponent]
})
export class HeroesPaginationModule { }
