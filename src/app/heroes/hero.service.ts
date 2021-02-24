import {ElementRef, Injectable} from '@angular/core';
import {Observable, from, of, fromEvent} from 'rxjs';
import {debounceTime, filter, map, throttle, throttleTime} from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Target} from '@angular/compiler';
import {EventTargetLike} from 'rxjs/internal-compatibility';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }

  debounceTextOnChange(
    nativeElement: EventTargetLike<ElementRef>,
    interval: number,
  ): Observable<ElementRef> {
    return fromEvent(nativeElement, 'keyup')
      .pipe(debounceTime(1000))
  }
}
