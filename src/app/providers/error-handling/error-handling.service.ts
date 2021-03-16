import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {LoggerService} from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor(
    private readonly loggerService: LoggerService
  ) { }

   handleError(operation = 'operation'): (error: Error) => Observable<Error> {
    return (error: any) => {
      this.loggerService.log(`${operation} failed: ${error.message}`);
      return throwError(error.error);
    };
  }
}
