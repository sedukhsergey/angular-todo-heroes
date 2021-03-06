import {TodoItemUpdateContent} from '../pages/list-manager/todo-list.service';

export interface TodoItem {
  title: string;
  completed?: boolean;
}

export interface UpdateItem {
  item: TodoItem;
  changes: TodoItemUpdateContent;
}
