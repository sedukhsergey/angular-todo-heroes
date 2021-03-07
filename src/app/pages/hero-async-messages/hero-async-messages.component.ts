import { Component, OnInit } from '@angular/core';
import {interval, Observable, of} from 'rxjs';
import {map, take, switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-async-messages',
  templateUrl: './hero-async-messages.component.html',
  styleUrls: ['./hero-async-messages.component.css']
})
export class HeroAsyncMessagesComponent implements OnInit {
  message$: Observable<string>;
  count$: Observable<number>
  private source = of('Bob', 'Andrew', 'Ann');
  array: string[] = [];

  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero?'
  ];

  ngOnInit() {
    this.resend();
    this.source.pipe(
      map(i => i + 'sadf')
    ).subscribe(subscription => {
      this.array.push(subscription)
    })
  }

  constructor() {}

  resend() {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
      take(this.messages.length)
    );
  }

  start() {
    this.count$ = interval(1000).pipe(
      tap(i => i + 1)
    )
  }
}
