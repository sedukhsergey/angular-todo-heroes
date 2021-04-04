import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  optionsList = [
    {value: '', label: 'None'},
    {value: 5, label: 'First'},
    {value: 3, label: 'Second'},
    {value: 4, label: 'Last'},
  ]
  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    agreement: this.fb.group({
      isAgree: [false, Validators.requiredTrue],
    }),
    selections: this.fb.group({
      userSelections: this.fb.control('', Validators.required),
    }),
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
    todos: this.fb.array([
      this.fb.control(''),
    ]),
  });
  constructor(
    private fb: FormBuilder
  ) { }

  get todos() {
    return this.profileForm.get('todos') as FormArray;
  }

  addTodo() {
    this.todos.push(this.fb.control('', Validators.required));
  }

  get console() {
    console.log('profileForm',this.profileForm)
    return true
  }


  ngOnInit(): void {
  }

}
