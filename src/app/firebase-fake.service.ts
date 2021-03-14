import { Injectable } from '@angular/core';
import {Observable, timer, interval} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseFakeService {

  constructor() { }

  simulateFirebase(val: string, delay: number): Observable<string>{
    return timer(delay).pipe(map(index => {
      return val + ' ' + index;
    }));
  }

  getMessagesByInterval(): Observable<string> {
    return new Observable<string>(subscriber => {
      let count = 0;
      setInterval(() => {
        subscriber.next(`Message ${count++}`);
      }, 1000);
    });

  }
}
