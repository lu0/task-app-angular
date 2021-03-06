import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.scss']
})
export class TasksItemComponent implements OnInit {
  @Input() task: Task;

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    console.log("onDelete pressed!")
    console.log(task)
  }

}
