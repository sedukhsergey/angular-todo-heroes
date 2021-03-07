import { Component, OnInit } from '@angular/core';

export interface FlyingHero {
  name: string;
  canFly: boolean;
}

const HEROES = [
  {canFly: false, name: 'One'},
  {canFly: true, name: 'Second'},
  {canFly: false, name: 'Third'},
  {canFly: true, name: 'Fourth'},
]

@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})
export class FlyingHeroesComponent {
  heroes: FlyingHero[] = [];
  canFly = true
  constructor() { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    console.log('this.canFly',this.canFly)
    const hero = {name, canFly: this.canFly};
    this.heroes.push(hero);
    // this.heroes = [...this.heroes, hero]
  }

  onFlyChange() {
    this.canFly = !this.canFly
    console.log('this.canFly',this.canFly)
  }


  reset() { this.heroes = HEROES.slice(); }

}
