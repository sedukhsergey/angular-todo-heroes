import {Component, OnDestroy, OnInit} from '@angular/core';
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
  paginationList: (number|null)[] = [];
  pagesList: (number|null)[] = [];
  activePage = 1;
  routerSubscription: Subscription;
  constructor(
    private readonly heroesPaginationService: HeroesPaginationService,
    private activatedRoute: ActivatedRoute,
  ) { }

  handleChangePage(page: number): void {
    this.heroesPaginationService.setPage(page);
  }

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      const page = params.get('page') || 1;
      this.heroesPaginationService.getPagesLength()
        .subscribe(data => {
          this.pagesList = data;
          if (data.length) {
            this.activePage = +page;
            this.paginationList = this.heroesPaginationService.generatePaginationList({
              activePage: +page,
              pagesLength: data.length
          });
          return;
        }
          });
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
