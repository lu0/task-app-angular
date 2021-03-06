import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'Task';
import { TASKS } from '../../assets/data/mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS); // turn it into an observable
    return tasks;
  }
}
