import {Component, ElementRef, Input, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {Todo} from '../todo/dto/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  buffer = '';
  oldContent = '';
  @Input() todo: Todo = {id: 1, text: ''};
  @Input() handleCancel: () => void = () => {};
  constructor() { }

  ngOnInit(): void {
    this.buffer = this.todo?.text || '';
    this.oldContent = this.todo?.text || '';
    setTimeout(() => {
      document.addEventListener('click', this.handleClickListener);
    }, 0);
  }

  handleClickListener = (event: MouseEvent) => {
      const ignoreClickOnMeElement = document.getElementById(`edit-todo-container-${this.todo.id}`);
      const target = event.target as HTMLHtmlElement;
      const isClickInsideElement = ignoreClickOnMeElement?.contains(target);
      if (!isClickInsideElement) {
        this.handleCancel();
        return;
      }
  }

  ngOnDestroy(): void {
    document.removeEventListener('click', this.handleClickListener);
  }

  handleSave(event: MouseEvent): void {
    this.todo.text = this.buffer;
    this.oldContent = this.buffer;
    this.handleCancel();
  }

}
