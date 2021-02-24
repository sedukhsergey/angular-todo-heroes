import {Injectable} from '@angular/core';
import {Observable, of, fromEvent} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {EventTargetLike} from 'rxjs/internal-compatibility';
import {MessageService} from '../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private readonly messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  debounceTextOnChange(
    nativeElement: EventTargetLike<KeyboardEvent>,
    interval: number,
  ): Observable<Event> {
    return fromEvent<KeyboardEvent>(nativeElement, 'keyup')
      .pipe(debounceTime(interval));
  }
}
