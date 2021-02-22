import { Component, OnInit } from '@angular/core';
import {Todo} from './todo/dto/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosList: Todo[] = [{id: 1, text: 'some todo text'}, {id: 2, text: 'another'}];
  someValue = 'Parent';
  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddTodo = (text: string) => {
    this.todosList.push({id: this.todosList.length + 1, text});
  }

  handleDelete = (id: number) => {
    this.todosList = this.todosList.filter(item => item.id !== id);
  }

}
