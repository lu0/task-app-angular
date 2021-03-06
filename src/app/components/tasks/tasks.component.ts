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

  /**
  * Get all existing tasks in the backend
  */
  getTasks() {
    this.taskService.getTaskByAll().subscribe((response: Task[]) => {
      this.tasks = response;
    })
  }

  /**
  * Delete a task and refresh the view
  */
  deleteTask(task: Task) {
    console.log("Deleting task: " + JSON.stringify(task));
    this.taskService.deleteTaskById(task.id).subscribe(() => {
      this.ngOnInit();
    })
  }

  /**
  * Toggle the reminder of the task and refresh the view
  */
  toggleReminder(task: Task) {
    console.log("Toggle reminder of task " + task.id);
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe((newTask: Task) => {
      console.log("Returned task: " + JSON.stringify(newTask))
      this.ngOnInit();
    })
  }

  /**
  * Add a task and refresh the view
  */
  addTask(task: Task) {
    console.log("Adding task");
    this.taskService.addTask(task).subscribe((addedTask: Task) => {
      this.ngOnInit();
    })
  }

}
