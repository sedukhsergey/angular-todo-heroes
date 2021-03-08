import { Component, OnInit } from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../heroes/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  isOpen = false;
  fontSizePx = 16;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  modalOpen = () => {
    this.isOpen = true;
  }

  modalClose = () => {
    this.isOpen = false;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
