import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo/dto/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todosList: Todo[] = [{id: 1, text: 'some todo text'}, {id: 2, text: 'another'}];
  constructor() { }

  ngOnInit(): void {
  }

}
