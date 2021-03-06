import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'Task'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public task: Task;

  constructor() { }

  ngOnInit(): void {
      this.task = {} as Task;
  }

  validateThenSubmit() {
    if (!this.task.day) {
      alert("Insert a day!");
      return;
    }
    if (!this.task.text) {
      alert("Insert a title!");
      return;
    }
    this.onAddTask.emit(this.task);
    this.ngOnInit();
  }
}
