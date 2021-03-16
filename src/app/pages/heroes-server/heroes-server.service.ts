import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoggerService} from '../../providers/logger/logger.service';
import {ErrorHandlingService} from '../../providers/error-handling/error-handling.service';
import {from, Observable, of, Subject, Subscription, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Hero, MetaData} from './interfaces/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesServerService {
  heroes: Hero[] = [];
  metaData: MetaData = {
    error: '',
    isLoading: false,
  };
  apiUrl = 'http://localhost:3030/heroes';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private readonly errorHandling: ErrorHandlingService,
    private http: HttpClient,
  ) { }

  getMetaData() {
    return this.metaData
  }
  fetchHeroes(): Observable<Hero[]> {
    if (this.heroes.length) {
      console.log('from cache',)
      return of(this.heroes)
    }
    console.log('fetching',)
    this.metaData.isLoading = true;
    return this.http.get<Hero[]>(this.apiUrl, this.httpOptions)
      .pipe(
        catchError((err) => {
          console.log('!!err',err)
          this.metaData.isLoading = false;
          this.metaData.error = err.error.message;
          return throwError(err.error)
        }),
        map((res) => {
          this.metaData.error = '';
          this.metaData.isLoading = false;
          this.heroes = res;
          return res
        })
      )
  }
}
