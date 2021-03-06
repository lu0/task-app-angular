import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  emitOnDeleteTask(task: Task) {
    this.onDeleteTask.emit(task);
  }

  emitOnToggleReminder(task: Task) {
    this.onToggleReminder.emit(task);
  }

}
