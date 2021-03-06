import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Todo } from '../models/Todo'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL: string = 'https://jsonplaceholder.typicode.com/todos'
  limit: string = '?_limit=5'

  constructor(private http: HttpClient) { }

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.limit}`, httpOptions)
  }
  // Change completed value
  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }
  // Add todo
  addTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}`
    return this.http.post<Todo>(url, todo, httpOptions)
  }

  // Delete todo
  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.todosURL}/${todo.id}`
    return this.http.delete<Todo>(url, httpOptions)
  }
}
