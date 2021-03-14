import { Injectable } from '@angular/core';
import {EMPTY, from, iif, Observable, of, pipe, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormValues} from './switch-case.component';
import {catchError, flatMap, map, switchMap, tap} from 'rxjs/operators';
import {empty} from 'rxjs/internal/Observer';

const mapAndContinueOnError = pipe(
  catchError(err => {
    console.log('Caught Error, continuing');
    return EMPTY;
  })
);

export interface SuccessData {
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class SwitchCaseService {
  apiURL = 'http://localhost:3030';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient,
  ) { }

  saveForm(formValues: FormValues) {
    return this.http.post<any>(`${this.apiURL}/todos`, formValues, this.httpOptions)
      .pipe(
        catchError(this.handleError('saveForm'))
      );
  }

  private handleError(operation = 'operation'): (error: Error) => Observable<Error> {
    return (error: any) => {
      this.log(`${operation} failed: ${error.message}`);
      return throwError(error.error);
    };
  }

  private log(message: string): void {
    console.log(`HeroService: ${message}`);
  }

}
