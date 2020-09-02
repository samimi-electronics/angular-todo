import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos'
  limit: string = '?_limit=5'

  constructor(private http: HttpClient) { }

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.limit}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
