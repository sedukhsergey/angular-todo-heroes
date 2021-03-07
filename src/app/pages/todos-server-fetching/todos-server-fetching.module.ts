import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosServerFetchingComponent } from './todos-server-fetching.component';



@NgModule({
  declarations: [TodosServerFetchingComponent],
  imports: [
    CommonModule
  ],
  exports: [TodosServerFetchingComponent]
})
export class TodosServerFetchingModule { }
