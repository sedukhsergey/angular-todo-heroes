import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import {AppRoutingModule} from '../../app-routing.module';



@NgModule({
  declarations: [PaginationComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
  exports: [
    PaginationComponent,
  ]
})
export class PaginationModule { }
