import { Component, OnInit } from '@angular/core';

type User = {
  name: string,
  capability: {
    name: string,
  }
};

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  birthday: Date = new Date(1990, 5, 25);
  name = 'Bob';
  power = 0;
  text = '';
  factor = 5;
  user: User | null = {
    name: 'Ann',
    capability: {
      name: 'Bob'
    }
  };
  format = 'shortDate';
  constructor() { }

  ngOnInit(): void {
  }


  handleChangeFormat(): void {
    this.format = this.format === 'shortDate' ? 'fullDate' : 'shortDate';
  }

}
