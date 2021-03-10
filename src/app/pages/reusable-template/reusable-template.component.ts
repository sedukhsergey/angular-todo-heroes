import {Component, OnInit, ViewChild} from '@angular/core';
import { data } from './data';
import {NgForm} from '@angular/forms';
import {Template} from '@angular/compiler/src/render3/r3_ast';
@Component({
  selector: 'app-reusable-template',
  templateUrl: './reusable-template.component.html',
  styleUrls: ['./reusable-template.component.css']
})
export class ReusableTemplateComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  usersList = data;
  isClicked = false;
  currentItem = {
    name: 'Bob'
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log('form',form)
  }


  setUppercaseName(value: string) {
    console.log('this.form',this.form)
    // const target = event.target as HTMLInputElement
    console.log('value',value)
    this.currentItem.name = value.toUpperCase();
  }

  setCurrentClasses() {
    this.isClicked = !this.isClicked;
  }

  getClasses() {
    return {
      special: this.isClicked
    }
  }
}
