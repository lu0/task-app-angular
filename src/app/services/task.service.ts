import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'Task';
import { environment as env } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  getTaskByAll(): Observable<Task[]> {
    // The HttpClient returns an observable
    return this.http.get<Task[]>(env.apiTask("/mockup/getTaskByAll"))
  }

  deleteTaskById(taskId: number): Observable<Task[]> {
    return this.http.delete<null>(env.apiTask("/mockup/deleteTaskById/" + taskId));
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(env.apiTask("/mockup/updateTask"), task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(env.apiTask("/mockup/addTask"), task, httpOptions);
  }
}
