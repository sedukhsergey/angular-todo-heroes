import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
import {Observable, fromEvent, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero?: Hero;
  constructor(
    private heroService: HeroService
  ) { }


  async ngOnInit(): Promise<void> {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
