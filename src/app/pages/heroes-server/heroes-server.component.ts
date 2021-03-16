import { Component, OnInit } from '@angular/core';
import {HeroesServerService} from './heroes-server.service';
import {Subscription} from 'rxjs';
import {Hero, MetaData} from './interfaces/hero.interface';


@Component({
  selector: 'app-heroes-server',
  templateUrl: './heroes-server.component.html',
  styleUrls: ['./heroes-server.component.css']
})
export class HeroesServerComponent implements OnInit {
  heroes: Hero[] = [];
  metaData: MetaData = {
    error: '',
    isLoading: false
  }
  constructor(
    private readonly heroesServerService: HeroesServerService
  ) {
  }

  ngOnInit(): void {
    this.metaData = this.heroesServerService.getMetaData();
    // this.isLoading = this.heroesServerService.getIsLoading();
    this.heroesServerService.fetchHeroes()
      .subscribe(data => {
        this.heroes = data;
      })
  }

}
