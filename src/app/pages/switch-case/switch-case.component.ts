import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {LoggerService} from '../../providers/logger/logger.service';
import {EmittedValue} from '../../interfaces/input-form-value';

interface Gender {
  id: number;
  name: string;
  title: string;
  value: string;
}

const gendersList = [
  {id: 1, name: 'gender', value: 'male', title: 'Male'},
  {id: 2, name: 'gender', value: 'female', title: 'Female'}
];

interface Item {
  label: string;
  id: number;
}

const items: Item[] = [{
  id: 2,
  label: 'Bob',
},
  {
    id: 3,
    label: 'Ann',
  },
  {
    id: 4,
    label: 'Slag',
  },
  {
    id: 5,
    label: 'Mary',
  }
]


@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NgForm;
  items = items;
  radioList: Gender[] = gendersList;
  constructor(
    private readonly loggerService: LoggerService
  ) { }

  handleFormChange({field, value}: EmittedValue): void {
    this.itemForm.value[field] = value;
    this.loggerService.log(value)
  }

  onSubmit(form: NgForm): void {
    console.log('onSubmit form',form.value)

  }

  ngOnInit(): void {
  }

}
