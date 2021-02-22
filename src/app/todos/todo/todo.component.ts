import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from './dto/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() handleDelete: EventEmitter<number> = new EventEmitter()
  isEdited = false;
  @Input() todo: Todo = {id: 1, text: ''};
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
