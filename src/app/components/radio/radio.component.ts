import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmittedValue} from '../../interfaces/input-form-value';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class RadioComponent implements OnInit {
 @Input() title: string;
 @Input() groupName: string;
 @Input() value: string;
 @Input() defaultValue: string;
 @Input() isRequired: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
