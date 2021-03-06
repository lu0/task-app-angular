import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from 'Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5554/task-service/api/v1"

  constructor(
    private http: HttpClient
  ) { }

  getTaskByAll(): Observable<Task[]> {
    // The HttpClient returns and observable
    return this.http.get<Task[]>(this.apiUrl + "/mockup/getTaskByAll")
  }

  deleteTaskById(taskId: number): Observable<Task[]> {
    return this.http.delete<null>(this.apiUrl + "/mockup/deleteTaskById/" + taskId);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl + "/mockup/updateTask", task, httpOptions)
  }
}
