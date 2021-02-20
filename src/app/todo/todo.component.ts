import {Component, Input, OnInit} from '@angular/core';
import {Todo} from './dto/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo = {id: 1, text: ''};
  isEdited = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleCancel = () => {
    this.isEdited = false;
  }

  handleTodoEdit = () => {
    this.isEdited = true;
  }

}
