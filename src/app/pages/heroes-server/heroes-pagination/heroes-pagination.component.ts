import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroesServerService} from '../heroes-server.service';
import {HeroesPaginationService} from './heroes-pagination.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MetaData} from '../interfaces/hero.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-heroes-pagination',
  templateUrl: './heroes-pagination.component.html',
  styleUrls: ['./heroes-pagination.component.css']
})
export class HeroesPaginationComponent implements OnInit, OnDestroy {
  pageListMetadata: MetaData = {
    error: '',
    isLoading: false
  };
  pagesList: number[] = [];
  activePage = 1;
  routerSubscription: Subscription;
  constructor(
    private readonly heroesServerService: HeroesServerService,
    private readonly heroesPaginationService: HeroesPaginationService,
    private activatedRoute: ActivatedRoute,
  ) { }

  handleChangePage(page: number): void {
    this.heroesPaginationService.setPage(page);
  }

  ngOnInit(): void {
    this.pageListMetadata = this.heroesPaginationService.metaData;

    this.routerSubscription = this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const page = params.get('page');
      if (page) {
        this.activePage = +page;
        this.heroesServerService.getHeroesByPage(+page);
      }
    });

    this.heroesPaginationService.getPagesLength()
      .subscribe(data => this.pagesList = data);
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
