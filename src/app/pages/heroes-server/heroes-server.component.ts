import { Component, OnDestroy, OnInit} from '@angular/core';
import {HeroesServerService} from './heroes-server.service';
import {Hero, MetaData} from './interfaces/hero.interface';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';


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
  routerSubscription: Subscription;
  constructor(
    private readonly heroesServerService: HeroesServerService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.heroesMetadataSubscription = this.heroesServerService.heroesMetadata.subscribe(
      data => this.heroesMetadata = data
    );
    this.heroesSubscription = this.heroesServerService.heroesSource.subscribe(
      data => this.heroes = data
    );
    this.routerSubscription = this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const page = params.get('page');
      if (page) {
        this.heroesServerService.clearHeroes();
        this.heroesServerService.getHeroesByPage(+page);
      }
    });
  }

  ngOnDestroy(): void {
    this.heroesSubscription.unsubscribe();
    this.heroesMetadataSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
