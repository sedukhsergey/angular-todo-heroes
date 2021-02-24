import {
  Component,
  ElementRef,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import {Todo} from '../todo/dto/todo';
import {TodosService} from '../todos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy, AfterViewInit {
  todoValue = '';
  @ViewChild('todoInputRef', {static: true}) todoInputRef: ElementRef<HTMLInputElement>;
  @Output() handleTodoEditSwitcher: EventEmitter<void> = new EventEmitter();
  @Input() todo: Todo;

  constructor(
    private readonly todosService: TodosService
  ) { }
  documentSubscription: Subscription;

  ngOnInit(): void {
    this.todoValue = this.todo.text;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initDocumentSubscription();
    }, 0);
  }

  ngOnDestroy(): void {
    this.documentSubscription.unsubscribe();
  }

  initDocumentSubscription(): void {
    this.documentSubscription = this.todosService.isMouseClickOutsideEvent(document)
      .subscribe((res: Event) => {
        const target = res.target as HTMLHtmlElement;
        const isClickInsideElement = this.todoInputRef.nativeElement?.contains(target);
        if (!isClickInsideElement) {
          this.handleTodoEditSwitcher.emit();
          return;
        }
      });
  }

  handleSave(): void {
    this.todosService.updateTodo(this.todo, {text: this.todoValue});
    this.handleTodoEditSwitcher.emit();
  }
}
