import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();
  title = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  changeTitle(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.submit.emit(target.value);
  }

  submitValue(value: string) {
    this.submit.emit(value)
  }

}
