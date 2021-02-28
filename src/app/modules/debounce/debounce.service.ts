import { Injectable } from '@angular/core';
import {EventTargetLike} from 'rxjs/internal-compatibility';
import {fromEvent, Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DebounceService {

  constructor() { }


  debounceTextOnChange(
    nativeElement: EventTargetLike<KeyboardEvent>,
    interval: number,
  ): Observable<Event> {
    return fromEvent<KeyboardEvent>(nativeElement, 'keyup')
      .pipe(debounceTime(interval));
  }

}
