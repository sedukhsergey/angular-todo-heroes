import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
interface CustomForm {
  gender: string;
  name: string;
}

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  loginText = 'Login';
  signUpText = 'Sign Up';
  gender = '';
  secondExample = ''
  submitMessage = 'Some submit message';
  constructor() { }
  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }

  onSubmit(form: NgForm) {
    console.log('form',form.form.get('gender'))
  }

  ngOnInit(): void {
  }

}
