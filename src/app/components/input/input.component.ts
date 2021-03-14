import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmittedValue} from '../../interfaces/input-form-value';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class InputComponent implements OnInit {
  @Input() name: string;
  @Input() isRequired: boolean;
  @Input() defaultValue: string;
  constructor() { }

  ngOnInit(): void {
  }

}
