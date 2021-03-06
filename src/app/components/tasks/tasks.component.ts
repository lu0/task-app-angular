import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.taskService.getTaskByAll()
    .subscribe((response: Task[]) => {
      this.tasks = response;
    })
  }

  deleteTask(task: Task) {
    console.log("Deleting task: " + JSON.stringify(task));
    this.taskService.deleteTaskById(task.id)
    .subscribe(() => {
      this.getTasks()
    })
  }

  toggleReminder(task: Task) {
    console.log("Toggle reminder of task " + task.id)
    task.reminder = !task.reminder
  }

}
