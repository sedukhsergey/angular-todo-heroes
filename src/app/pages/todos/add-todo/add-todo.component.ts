import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  text = '';
  constructor(
    private readonly todosService: TodosService
  ) { }

  ngOnInit(): void {
  }

  handleSaveTodo = () => {
    this.todosService.addTodo(this.text);
    this.text = '';
  }

}
