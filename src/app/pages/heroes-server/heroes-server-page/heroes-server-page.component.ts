import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HeroesServerService} from '../heroes-server.service';

@Component({
  selector: 'app-heroes-server-page',
  templateUrl: './heroes-server-page.component.html',
  styleUrls: ['./heroes-server-page.component.css']
})
export class HeroesServerPageComponent implements OnInit {

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private heroesServerService: HeroesServerService,
  ) { }

  ngOnInit(): void {
    // this.activatedRouter.paramMap.pipe(
    //   switchMap((params: ParamMap) => {
    //       const id = params.get('id');
    //       return this.heroesServerService.getPage(Number(id));
    //     }
    //   ));
  }

}
