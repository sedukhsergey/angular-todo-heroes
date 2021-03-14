import { Component, OnInit } from '@angular/core';
import {TodosServerFetchingService} from './todos-server-fetching.service';
export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

@Component({
  selector: 'app-todos-server-fetching',
  templateUrl: './todos-server-fetching.component.html',
  styleUrls: ['./todos-server-fetching.component.css']
})
export class TodosServerFetchingComponent implements OnInit {

  constructor(
    private readonly todosServerFetchingService: TodosServerFetchingService,
  ) { }
  config: any = {

  };

  ngOnInit(): void {
    this.todosServerFetchingService.getTodos()
      .subscribe((data => {
        console.log('data', data);
      }));
  }

}
