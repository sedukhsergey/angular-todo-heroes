import { Component, OnDestroy, OnInit} from '@angular/core';
import {HeroesServerService} from './heroes-server.service';
import {Hero, MetaData} from './interfaces/hero.interface';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-heroes-server',
  templateUrl: './heroes-server.component.html',
  styleUrls: ['./heroes-server.component.css']
})
export class HeroesServerComponent implements OnInit, OnDestroy {
  heroes: Hero[] = [];
  heroesMetadata: MetaData = {
    error: '',
    isLoading: false
  };
  heroesSubscription: Subscription;
  heroesMetadataSubscription: Subscription;
  constructor(
    private readonly heroesServerService: HeroesServerService,
  ) {
  }

  ngOnInit(): void {
    this.heroesMetadataSubscription = this.heroesServerService.heroesMetadata.subscribe(
      data => this.heroesMetadata = data
    );
    this.heroesSubscription = this.heroesServerService.heroesSource.subscribe(
      data => this.heroes = data
    );
  }

  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
    this.heroesMetadataSubscription.unsubscribe();
  }
}
