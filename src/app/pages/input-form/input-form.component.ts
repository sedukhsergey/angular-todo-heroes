import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = ['Lesson 1', 'Lessons 2'];
  secondExample = ''
  submitMessage = 'Some submit message'
  constructor() { }
  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }

  onSubmit(form: NgForm) {
    console.log('form',form)
  }

  ngOnInit(): void {
  }

}
