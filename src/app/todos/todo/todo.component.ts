import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Todo} from './dto/todo';
type Obj = {
  title: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnChanges, DoCheck {
  @Output() handleDelete: EventEmitter<number> = new EventEmitter()
  isEdited = false;
  @Input() count = 0;
  @Input() count2  = 0;
  @Input() obj: Obj = { title: ''};
  @Input() todo: Todo = {id: 1, text: ''};
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(...rest: any) {
  }

  ngDoCheck(...rest: any) {
  }

  handleCancel = () => {
    this.isEdited = false;
  }

  handleTodoEdit = () => {
    this.isEdited = true;
  }
}
