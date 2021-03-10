import { Component, OnInit } from '@angular/core';

interface Item {
  feature: string;
}

interface Model {
  options: number;
  name: string;
}

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {
  currentItem: Item = {
    feature: 'vintaged'
  }

  model: Model = {
    options: 2,
    name: ''
  }

  constructor() { }

  handleFormChange(form: any) {
    console.log('handleFormChange form',form)
  }

  onSubmit(form: any) {

  }

  ngOnInit(): void {
  }

}
