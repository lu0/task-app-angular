import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5554/task-service/api/v1"

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    // The HttpClient returns and observable
    return this.http.get<Task[]>(this.apiUrl + "/mockup/getTaskByAll")
  }
}
