import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() handleSubmit: EventEmitter<string> = new EventEmitter();
  @Input() name: string;
  title = '';
  constructor() {
  }

  ngOnInit(): void {
  }
  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  changeTitle(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.handleSubmit.emit(target.value);
  }

  submitValue(value: string): void {
    this.handleSubmit.emit(value);
  }

}
