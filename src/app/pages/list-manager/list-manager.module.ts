import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListManagerComponent } from './list-manager.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from '../../components/button/button.module';



@NgModule({
  declarations: [ListManagerComponent, InputButtonUnitComponent, TodoItemComponent, ListManagerComponent],
  exports: [
    ListManagerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
  ],
  providers: []
})
export class ListManagerModule { }
