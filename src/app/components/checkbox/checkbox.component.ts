import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class CheckboxComponent implements OnInit {
  @Input() name: string;
  @Input() defaultValue: boolean;
  @Input() isRequired: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
