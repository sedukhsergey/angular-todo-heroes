import {Component, Input, OnInit} from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class SelectComponent implements OnInit {
  @Input() name: string;
  @Input() isRequired = false;
  @Input() items: any;
  @Input() defaultValue: any;
  constructor() { }

  ngOnInit(): void {
  }

}
