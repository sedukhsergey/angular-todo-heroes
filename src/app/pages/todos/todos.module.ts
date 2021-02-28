import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodosComponent} from './todos.component';
import {TodoComponent} from './todo/todo.component';
import {TodoEditComponent} from './todo-edit/todo-edit.component';
import {AddTodoComponent} from './add-todo/add-todo.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../../app-routing.module';
import {AutofocusDirective} from '../../../directives/autofocus.directive';
import {ClickStopPropagationDirective} from '../../../directives/click-stop-propagation.directive';


@NgModule({
  declarations: [TodosComponent, TodoComponent, TodoEditComponent, AddTodoComponent, AutofocusDirective, ClickStopPropagationDirective],
  exports: [TodosComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ]
})
export class TodosModule { }
