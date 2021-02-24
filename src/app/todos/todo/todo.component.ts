import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from './dto/todo';
type Obj = {
  title: string;
};

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Output() handleDelete: EventEmitter<number> = new EventEmitter();
  isEdited = false;
  @Input() todo: Todo = {id: 1, text: ''};
  constructor() { }

  ngOnInit(): void {
  }

  handleCancel = (): void => {
    this.isEdited = false;
  }

  handleTodoEdit = (): void => {
    this.isEdited = true;
  }
}
