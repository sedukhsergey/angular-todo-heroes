import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {LoggerService} from '../../providers/logger/logger.service';
import {ErrorHandlingService} from '../../providers/error-handling/error-handling.service';
import {from, Observable, of, Subject, Subscription, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Hero, MetaData, PagesData} from './interfaces/hero.interface';
import {SuccessData} from '../../interfaces/success-data';



@Injectable({
  providedIn: 'root'
})
export class HeroesServerService {
  heroesSource = new Subject<Hero[]>();
  heroesMetadata = new Subject<MetaData>();
  isLoading = new Subject<boolean>();
  apiUrl = 'http://localhost:3030/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private readonly errorHandling: ErrorHandlingService,
    private http: HttpClient,
  ) { }

  fetchHeroes(): void {
    // if (this.heroes.length) {
    //   return of(this.heroes)
    // }
    this.heroesMetadata.next({isLoading: true, error: ''});

    this.http.get<Hero[]>(this.apiUrl, this.httpOptions)
      .pipe(
        catchError((err) => {
          return throwError(err.error);
        })
      )
      .subscribe(
        data => {
          this.heroesSource.next(data);
          this.heroesMetadata.next({isLoading: false, error: ''});
        },
        error => {
          this.heroesMetadata.next({isLoading: false, error: error.message});
        }
      );
  }

  clearHeroes(): void {
    this.heroesSource.next([]);
  }

  getHeroesByPage(page: number): void {
    this.heroesMetadata.next({isLoading: true, error: ''});
    const from = page * 10;
    const to = from + 10;
    let params = new HttpParams();
    params = params.append('from', from.toString());
    params = params.append('to', to.toString());


    this.http.get<Hero[]>(`${this.apiUrl}/by-index`, {
      params,
      ...this.httpOptions,
    })
      .subscribe(
        data => {
          this.heroesSource.next(data);
          this.heroesMetadata.next({isLoading: false, error: ''});
        },
        ({error}) => {
          this.heroesMetadata.next({isLoading: false, error: error.message});
        }
      );
  }


}
