import {Component, OnDestroy, ViewChild, AfterViewInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import {LoggerService} from '../../providers/logger/logger.service';
import {SuccessData, SwitchCaseService} from './switch-case.service';
import {Subscription} from 'rxjs';

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
];


@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements AfterViewInit, OnDestroy {
  @ViewChild('itemForm') itemForm: NgForm;
  items = items;
  color = 'yellow';
  radioList: Gender[] = gendersList;
  isLoading = false;
  error = '';
  isFormTouched = false;
  constructor(
    private readonly loggerService: LoggerService,
    private readonly switchCaseService: SwitchCaseService
  ) { }
  $formSubscribe: Subscription;

  onSubmit(form: NgForm): void {
    this.isLoading = true;
    this.switchCaseService.saveForm(form.value)
      .subscribe(
        (data: SuccessData): void => {
          this.isLoading = false;
          this.isFormTouched = false;
        },
        error => {
          this.error = error.message;
          this.isLoading = false;
          this.isFormTouched = false;
        }
      );
  }

  ngAfterViewInit(): void {
    if (this.itemForm.valueChanges) {
      this.$formSubscribe = this.itemForm && this.itemForm.valueChanges.subscribe(
        data => {
          if (this.error) {
            this.error = '';
          }
          if (!this.isFormTouched) {
            this.isFormTouched = true;
          }
        }
     );
    }
  }

  ngOnDestroy(): void {
    this.$formSubscribe.unsubscribe();
  }

}
