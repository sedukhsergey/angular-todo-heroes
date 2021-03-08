import { Component, OnInit } from '@angular/core';
import { data } from './data';
@Component({
  selector: 'app-reusable-template',
  templateUrl: './reusable-template.component.html',
  styleUrls: ['./reusable-template.component.css']
})
export class ReusableTemplateComponent implements OnInit {
  usersList = data;
  constructor() { }

  ngOnInit(): void {
  }

}
