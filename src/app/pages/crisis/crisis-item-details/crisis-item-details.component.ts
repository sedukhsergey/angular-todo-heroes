import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {switchMap, tap, timeout} from 'rxjs/operators';
import {HeroService} from '../../heroes/hero.service';
import {Observable, interval, timer} from 'rxjs';
import { map } from 'rxjs/operators';
import {Hero} from '../../heroes/hero';
import {FirebaseFakeService} from '../../../firebase-fake.service';

interface Course {
  description: string;
}

@Component({
  selector: 'app-crisis-item-details',
  templateUrl: './crisis-item-details.component.html',
  styleUrls: ['./crisis-item-details.component.css']
})
export class CrisisItemDetailsComponent implements OnInit {
  course: Course | null = null
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
    private firebaseService: FirebaseFakeService,
  ) { }
  hero$: Observable<Hero>;
  data: string;
  dataArray: string[] = [];

  ngOnInit(): void {
    this.firebaseService.getMessagesByInterval()
      .subscribe(data => {
        this.dataArray.push(data)
        this.data = data;
      })
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const id = params.get('id');
        return this.service.getHero(Number(id));
      }
    ));

    const firebase1$ = this.firebaseService.simulateFirebase('FB-1 ', 2000);
    firebase1$.subscribe({
      next(x) { console.log('got value ' + x); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
  }

  gotoHeroes(): void {
    this.router.navigate(['/heroes']);
  }


}
