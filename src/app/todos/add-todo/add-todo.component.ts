import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todo/dto/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() handleAddTodo: EventEmitter<string> = new EventEmitter();
  text = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleSaveTodo = () => {
    this.handleAddTodo.emit(this.text);
    this.text = '';
  }

}
