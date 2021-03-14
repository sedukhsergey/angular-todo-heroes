import {Component, OnInit, ViewChild} from '@angular/core';
import { data } from './data';
import {NgForm} from '@angular/forms';
interface Item {
  id: number;
  name: string;
}

interface Hero {
  name: string;
  id: number;
  emotion: string;
}

const heroes: Hero[] = [{
  id: 2,
  name: 'Bob',
  emotion: 'Sad'
},
  {
    id: 3,
    name: 'Ann',
    emotion: 'happy'
  },
  {
    id: 4,
    name: 'Slag',
    emotion: 'confused'
  },
  {
    id: 5,
    name: 'Mary',
    emotion: 'confused'
  }
];


@Component({
  selector: 'app-reusable-template',
  templateUrl: './reusable-template.component.html',
  styleUrls: ['./reusable-template.component.css']
})
export class ReusableTemplateComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  users = [
    {
      id: 2,
      name: 'Bob'
    },
    {
    id: 3,
    name: 'Ann'
    },
    {
      id: 4,
      name: 'Slag'
    }
  ];
  showSad = false;
  hero: Hero | null = null;
  heroes = heroes;
  anotherUser = {name: 'SOme another user name'};
  emptyHero = {name: 'None', emotion: 'Some None', id: 100};
  usersList = data;
  isClicked = false;
  currentItem = {
    name: 'Bob'
  };
  constructor() { }

  ngOnInit(): void {
    this.hero = this.heroes[0];
  }

  trackByItems(index: number, item: Item): number {
    return item.id;
  }

  onSubmit(form: NgForm) {
    console.log('form', form);
  }


  setUppercaseName(value: string) {
    console.log('this.form', this.form);
    // const target = event.target as HTMLInputElement
    console.log('value', value);
    this.currentItem.name = value.toUpperCase();
  }

  setCurrentClasses() {
    this.isClicked = !this.isClicked;
  }

  getClasses() {
    return {
      special: this.isClicked
    };
  }
}
