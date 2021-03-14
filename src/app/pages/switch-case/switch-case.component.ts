import {Component, OnInit, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {LoggerService} from '../../providers/logger/logger.service';
import {EmittedValue} from '../../interfaces/input-form-value';
import {SuccessData, SwitchCaseService} from './switch-case.service';

interface People {
  id: number;
  label: string;
}

export interface FormValues {
  gender: string;
  name: string;
  isSuccess: boolean;
  peoples: People;
}

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
  isLoading = false;
  error = '';
  constructor(
    private readonly loggerService: LoggerService,
    private readonly switchCaseService: SwitchCaseService
  ) { }

  onSubmit(form: NgForm): void {
    this.isLoading = true;
    this.switchCaseService.saveForm(form.value)
      .subscribe(
        (data: SuccessData): void => {
          this.isLoading = false
        },
        error => {
          this.error = error.message
          this.isLoading = false
        }
      )
  }

  ngOnInit(): void {
  }

}
