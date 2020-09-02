import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // Get all todos
  getTodos() {
    return [
      {
        id: 1,
        title: 'Todo #1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo #2',
        completed: true
      },
      {
        id: 3,
        title: 'Todo #3',
        completed: false
      },
    ]
  }
}
