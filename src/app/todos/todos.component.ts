import { Component, OnInit } from '@angular/core';
import {Todo} from './todo/dto/todo';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todoList: Todo[] = [];
  constructor(
    private readonly todosService: TodosService
  ) {
  }
  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoList = this.todosService.getTodoList();
  }

}
