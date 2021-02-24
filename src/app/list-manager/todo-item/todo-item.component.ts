import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoItem, UpdateItem} from '../../interfaces/todo-item';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter();
  @Output() update: EventEmitter<UpdateItem> = new EventEmitter();
  @Input() item: TodoItem;
  isEdited = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleEdited(): void {
    this.isEdited = !this.isEdited;
  }

  removeItem(): void {
    this.remove.emit(this.item);
  }

  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: {completed: !this.item.completed}
    });
  }

}
