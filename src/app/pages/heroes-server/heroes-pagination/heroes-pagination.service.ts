import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {SuccessData} from '../../../interfaces/success-data';
import {catchError, map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ErrorHandlingService} from '../../../providers/error-handling/error-handling.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

interface PaginationList {
  activePage: number;
  pagesLength: number;
}

@Injectable({
  providedIn: 'root'
})
export class HeroesPaginationService {
  apiUrl = 'http://localhost:3030/heroes';
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
    return this.http.get<SuccessData>(`${this.apiUrl}/rows-count`)
      .pipe(
        catchError((err) => {
          return throwError(err.error);
        }),
        map((res) => {
          if (res.data) {
              return Array.from({length: Math.ceil(res.data / 10)}, (_, i) => i + 1);
            }
          return [];
        })
      );
  }

  generatePaginationList({
    activePage,
    pagesLength
  }: PaginationList): (null|number)[] {
    if (!pagesLength) {
      return [];
    }
    if ((pagesLength / 2) >= activePage) {
      if (activePage < 4) {
        return [1, 2, 3, 4, 5, null, pagesLength];
      }

      if (activePage >= 4) {
        return [
          1,
          null,
          activePage - 2,
          activePage - 1,
          activePage,
          activePage + 1,
          activePage + 2,
          null,
          pagesLength
        ];
      }
    }


    if ((pagesLength / 2) <= activePage) {
      if (activePage >= pagesLength - 2) {
        return[
          1,
          null,
          pagesLength - 4,
          pagesLength - 3,
          pagesLength - 2,
          pagesLength - 1,
          pagesLength
        ];
      }

      if (activePage <= pagesLength - 3) {
        return [
          1,
          null,
          activePage - 2,
          activePage - 1,
          activePage,
          activePage + 1,
          activePage + 2,
          null,
          pagesLength
        ];
      }
    }
    return [];
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
