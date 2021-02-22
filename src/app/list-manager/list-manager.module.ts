import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list-manager.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';



@NgModule({
  declarations: [ListManagerComponent, InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  exports: [
    ListManagerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListManagerModule { }
