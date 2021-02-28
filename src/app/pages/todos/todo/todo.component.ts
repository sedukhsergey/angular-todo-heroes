import {Component, Input, OnInit} from '@angular/core';
import {Todo} from './dto/todo';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  isEdited = false;
  @Input() todo: Todo;
  constructor(
    private readonly todosService: TodosService,
  ) { }

  ngOnInit(): void {
  }

  handleDeleteTodo(): void {
    this.todosService.deleteTodo(this.todo);
  }

  handleTodoEditSwitcher = (): void => {
    this.isEdited = !this.isEdited;
  }
}
