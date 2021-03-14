import { Component, OnInit } from '@angular/core';
import {Crisis} from '../interfaces';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crisisList: Crisis[] = [
    {id: 11, name: 'One'},
    {id: 12, name: 'Two'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
