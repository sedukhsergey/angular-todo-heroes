import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
interface Todo {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodosServerFetchingService {
  apiURL = 'http://localhost:3030';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.apiURL}/todos`);
  }

}
