import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  log(msg: any): void   { console.log(msg); }
  error(msg: string): void { console.error(msg); }
  warn(msg: string): void  { console.warn(msg); }
}
