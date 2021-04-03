import { Component, OnInit } from '@angular/core';
import {TodoItem, UpdateItem} from '../../interfaces/todo-item';
import {TodoItemUpdateContent, TodoListService} from './todo-list.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'list manager';
  counter = 0;
  todoList: TodoItem[];
  name = ''
  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoList = this.todoListService.getTodoList();
  }

  addItem(title: string): void {
    this.todoListService.addItem({ title });
    title = '';
  }

  removeItem(item: TodoItem): void {
    this.todoListService.deleteItem(item);
  }

  handleSubmit(): void {
    console.log('handleSUbmit from listManager', );
  }


  updateItem(
     item: TodoItem,
     changes: TodoItemUpdateContent
  ): void {
    this.todoListService.updateItem(item, changes);
  }

}
