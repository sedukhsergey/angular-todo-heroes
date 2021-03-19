import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {SuccessData} from '../../../interfaces/success-data';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ErrorHandlingService} from '../../../providers/error-handling/error-handling.service';
import {Hero, MetaData} from '../interfaces/hero.interface';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroesPaginationService {
  get metaData(): MetaData {
    return this._metaData;
  }
  apiUrl = 'http://localhost:3030/heroes';
  private _metaData: MetaData = {
    error: '',
    isLoading: false,
  };
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private readonly errorHandling: ErrorHandlingService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  getPagesLength(): Observable<number[]> {
    this._metaData.isLoading = true;
    return this.http.get<SuccessData>(`${this.apiUrl}/rows-count`)
      .pipe(
        catchError((err) => {
          this._metaData.isLoading = false;
          this._metaData.error = err.error.message;
          return throwError(err.error);
        }),
        map((res) => {
          this._metaData.error = '';
          this._metaData.isLoading = false;
          if (res.data) {
              return Array.from({length: Math.ceil(res.data / 10)}, (_, i) => i + 1);
            }
          return [];
        })
      );
  }

  setPage(page: number): void {
    const queryParams: Params = { page };
    this.router.navigate(
      [],
      {
        relativeTo: this.activatedRoute,
        queryParams,
        queryParamsHandling: 'merge',
      });
  }
}
