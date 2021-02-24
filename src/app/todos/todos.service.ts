import { Injectable } from '@angular/core';
import {Todo, TodoChanges} from './todo/dto/todo';
import {EventTargetLike} from 'rxjs/internal-compatibility';
import {fromEvent, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todoList: Todo[] = [];
  constructor() { }

  getTodoList(): Todo[] {
    return this.todoList;
  }

  addTodo(text: string): void {
    this.todoList.push({id: this.todoList.length + 1, text});
  }

  deleteTodo(todo: Todo): void {
    const index = this.todoList.indexOf(todo);
    this.todoList.splice(index, 1);
  }

  updateTodo(item: Todo, changes: TodoChanges): void {
    const index = this.todoList.indexOf(item);
    this.todoList[index] = { ...item, ...changes };
  }

  isMouseClickOutsideEvent(
    nativeElement: EventTargetLike<MouseEvent>,
  ): Observable<Event> {
    return fromEvent<MouseEvent>(nativeElement, 'click');
  }

}
